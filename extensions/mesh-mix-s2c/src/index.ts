import { defineExtension, type ExtensionContext } from '@carv3d/sdk';

/**
 * @file index.ts
 * @description Community-Erweiterung „Mesh Mix-S2C Umwandler“ für Carv3D. Sie ruft das getrennt installierte Programm Mesh Mix-S2C (AGPL-3.0, https://github.com/STL2CURVES-MMM/Mesh-Mix-S2C)
 * nur über dessen Kommandozeile auf (STL hinein, STEP heraus). Weder Code noch Dateien von Mesh Mix-S2C sind Teil dieser Erweiterung; siehe NOTICE.md.
 * Lizenz dieser Erweiterung: AGPL-3.0-only (siehe LICENSE).
 */

/** Kennung des Programms in der Liste von Carv3D (muss im Manifest unter `programs` stehen). */
const PROGRAM = 'mesh-mix-s2c';
/** Dateinamen im Arbeitsordner des Programms. */
const INPUT_FILE = 'in.stl';
const OUTPUT_FILE = 'out.step';
/** Frist für die Umwandlung in Sekunden (der Server begrenzt sie zusätzlich). */
const TIMEOUT_SECONDS = 15 * 60;
/** Anhang des Namens des neuen Körpers. */
const NAME_SUFFIX = ' (STEP)';
/** Zeichen des Programm-Ausgabeendes, die in einer Fehlermeldung erscheinen. */
const OUTPUT_TAIL = 400;

/** Eingabe des Befehls `convert` (vom Manifest geprüft, Vorgaben ergänzt). */
interface ConvertArgs {
  body?: string;
  preset: string;
  repair: string;
  quality: number;
}

/** Texte in den Sprachen der Oberfläche (Rückfall: Englisch). */
const TEXTS = {
  en: {
    done: (count: number) => `Converted: ${count} body with exact faces. The original is kept.`,
    noBody: 'There is no body to convert.',
    pickBody: 'Select the body to convert first.',
    notInstalled: 'Mesh Mix-S2C was not found. Install it separately (a folder named "Mesh-Mix-S2C" next to the Carv3D folder, or set CARV3D_MESHMIX_DIR) together with its Python environment; see the extension README.',
    pythonMissing: 'Mesh Mix-S2C was found but its Python environment is missing. Create the .venv in its folder or set CARV3D_MESHMIX_PYTHON; see the extension README.',
    unavailable: 'The conversion needs the local Carv3D server (npm run dev or START.bat), not a static page.',
    timeout: 'The conversion took too long and was stopped. Use a coarser mesh or a lower quality.',
    busy: 'A conversion is already running. Wait until it has finished.',
    failed: (tail: string) => `Mesh Mix-S2C could not convert the mesh. A dense, closed mesh helps.${tail ? ` Program output: ${tail}` : ''}`,
  },
  de: {
    done: (count: number) => `Umgewandelt: ${count} Körper mit exakten Flächen. Das Original bleibt erhalten.`,
    noBody: 'Es gibt keinen Körper zum Umwandeln.',
    pickBody: 'Wähle zuerst den Körper, der umgewandelt werden soll.',
    notInstalled: 'Mesh Mix-S2C wurde nicht gefunden. Installiere es getrennt (Ordner „Mesh-Mix-S2C“ neben dem Carv3D-Ordner oder CARV3D_MESHMIX_DIR setzen) samt Python-Umgebung; siehe README der Erweiterung.',
    pythonMissing: 'Mesh Mix-S2C wurde gefunden, aber seine Python-Umgebung fehlt. Lege das .venv in seinem Ordner an oder setze CARV3D_MESHMIX_PYTHON; siehe README der Erweiterung.',
    unavailable: 'Die Umwandlung braucht den lokalen Carv3D-Server (npm run dev oder START.bat), nicht eine statische Seite.',
    timeout: 'Die Umwandlung dauerte zu lange und wurde abgebrochen. Nimm ein gröberes Netz oder eine niedrigere Qualität.',
    busy: 'Es läuft schon eine Umwandlung. Warte, bis sie fertig ist.',
    failed: (tail: string) => `Mesh Mix-S2C konnte das Netz nicht umwandeln. Ein dichtes, geschlossenes Netz hilft.${tail ? ` Ausgabe des Programms: ${tail}` : ''}`,
  },
} as const;

/** Die Texte für die Sprache des Nutzers. */
function textsFor(language: string): (typeof TEXTS)['en'] {
  return (language in TEXTS ? TEXTS[language as keyof typeof TEXTS] : TEXTS.en) as (typeof TEXTS)['en'];
}

/**
 * Übersetzt einen Fehler der Anwendung (Meldung beginnt mit einer Kennung wie `program_not_installed`) in einen Text für den Nutzer.
 *
 * @param error - Der Fehler von `ctx.runProgram`.
 * @param language - Sprache der Oberfläche.
 */
function explain(error: unknown, language: string): Error {
  const text = textsFor(language);
  const message = error instanceof Error ? error.message : String(error);
  if (message.startsWith('program_not_installed')) return new Error(message.includes('python_missing') ? text.pythonMissing : text.notInstalled);
  if (message.startsWith('program_unavailable')) return new Error(text.unavailable);
  if (message.startsWith('program_timeout')) return new Error(text.timeout);
  if (message.startsWith('program_busy')) return new Error(text.busy);
  return error instanceof Error ? error : new Error(message);
}

/**
 * Wählt den Körper: Angabe, sonst der einzige Körper des Dokuments.
 *
 * @param ctx - Umgebung.
 * @param requested - Kennung aus der Eingabe.
 * @returns Kennung und Name des Körpers.
 * @throws Error mit Hinweis in der Sprache des Nutzers.
 */
async function chooseBody(ctx: ExtensionContext, requested: string | undefined): Promise<{ id: string; name: string }> {
  const text = textsFor(ctx.language);
  const bodies: Array<{ id: string; name?: string }> = (await ctx.document()).bodies ?? [];
  if (bodies.length === 0) throw new Error(text.noBody);
  const body = requested ? bodies.find(entry => entry.id === requested) : bodies.length === 1 ? bodies[0] : undefined;
  if (!body) throw new Error(text.pickBody);
  return { id: body.id, name: body.name ?? body.id };
}

export default defineExtension({
  commands: {
    /** Körper → STL → Mesh Mix-S2C → STEP → neuer Körper. */
    async convert(ctx, args) {
      const input = args as unknown as ConvertArgs;
      const text = textsFor(ctx.language);
      const body = await chooseBody(ctx, input.body);
      const stl = await ctx.exportModel('stl', [body.id]);

      let outcome;
      try {
        outcome = await ctx.runProgram({
          program: PROGRAM,
          args: [
            'convert',
            `{work}/${INPUT_FILE}`,
            '-o',
            `{work}/${OUTPUT_FILE}`,
            '--preset',
            input.preset,
            '--repair',
            input.repair,
            '--quality',
            String(input.quality),
            '--json',
          ],
          inputs: { [INPUT_FILE]: stl },
          outputs: [OUTPUT_FILE],
          timeoutSeconds: TIMEOUT_SECONDS,
        });
      } catch (error) {
        throw explain(error, ctx.language);
      }

      const step = outcome.files[OUTPUT_FILE];
      if (outcome.code !== 0 || !step) throw new Error(text.failed(outcome.output.trim().slice(-OUTPUT_TAIL)));

      const { count } = await ctx.importFile('mesh-mix.step', step, `${body.name}${NAME_SUFFIX}`);
      return { ok: true, message: { en: TEXTS.en.done(count), de: TEXTS.de.done(count) }, source: body.id, bodies: count };
    },
  },
});
