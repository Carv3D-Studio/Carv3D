/**
 * @file extension.test.ts
 * @description Prüft die Erweiterung mit der Scheinumgebung des SDK, ohne Carv3D und ohne Mesh Mix-S2C: Manifest, Ablauf der Umwandlung, Argumente des Programms und verständliche Fehler in beiden Sprachen.
 * Start (aus dem Carv3D-Repository mit dem SDK unter `sdk/`): `node --import tsx --test <Pfad>/test/extension.test.ts`
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { createMockContext, runCommandForTest, validateManifest } from '@carv3d/sdk';
import extension from '../src/index.ts';

const manifestJson = JSON.parse(readFileSync(new URL('../manifest.json', import.meta.url), 'utf-8'));
const checked = validateManifest(manifestJson);
assert.ok(checked.ok, checked.ok ? '' : checked.errors.join('\n'));
const manifest = checked.value;

const STL = new Uint8Array([1, 2, 3]);
const STEP = new Uint8Array([4, 5, 6]);
const oneBody = { bodies: [{ id: 'body-1', name: 'Fuchs' }] };

test('Manifest: gültig, Programm und Lizenz offengelegt, Menü Maker', () => {
  assert.deepEqual(manifest.permissions, ['read-document', 'import-files', 'run-program']);
  assert.equal(manifest.programs?.[0].id, 'mesh-mix-s2c');
  assert.equal(manifest.programs?.[0].license, 'AGPL-3.0-only');
  assert.equal(manifest.license, 'AGPL-3.0-only');
  assert.equal(manifest.commands[0].menu, 'maker');
});

test('wandelt den einzigen Körper um und legt das Ergebnis als neuen Körper an', async () => {
  const mock = createMockContext({
    get_document: oneBody,
    '@exportModel': STL,
    '@runProgram': { code: 0, output: '', files: { 'out.step': STEP } },
    '@importFile': { count: 1 },
  });
  const { result, calls } = await runCommandForTest(manifest, extension, 'convert', { preset: 'cad', quality: 0.5 }, mock);

  const run = calls.find(call => call.command === '@runProgram')!.args as { program: string; args: string[]; inputs: Record<string, Uint8Array>; outputs: string[] };
  assert.equal(run.program, 'mesh-mix-s2c');
  assert.deepEqual(run.args.slice(0, 4), ['convert', '{work}/in.stl', '-o', '{work}/out.step']);
  assert.ok(run.args.includes('cad') && run.args.includes('auto') && run.args.includes('0.5') && run.args.includes('--json'));
  assert.deepEqual(run.inputs['in.stl'], STL);
  assert.deepEqual(run.outputs, ['out.step']);

  const imported = calls.find(call => call.command === '@importFile')!.args as { fileName: string; bytes: Uint8Array; name: string };
  assert.equal(imported.fileName, 'mesh-mix.step');
  assert.deepEqual(imported.bytes, STEP);
  assert.equal(imported.name, 'Fuchs (STEP)');
  assert.deepEqual((result as { message: { en: string } }).message.en, 'Converted: 1 body with exact faces. The original is kept.');
});

test('mehrere Körper ohne Angabe: erklärt, was zu tun ist (Deutsch)', async () => {
  const mock = createMockContext({ get_document: { bodies: [{ id: 'body-1' }, { id: 'body-2' }] } });
  (mock.ctx as { language: string }).language = 'de';
  await assert.rejects(runCommandForTest(manifest, extension, 'convert', {}, mock), /Wähle zuerst den Körper/);
});

test('Fehler der Anwendung und des Programms werden in Alltagssprache erklärt', async () => {
  const base = { get_document: oneBody, '@exportModel': STL };
  const failWith = (message: string) => () => {
    throw new Error(message);
  };
  await assert.rejects(runCommandForTest(manifest, extension, 'convert', {}, createMockContext({ ...base, '@runProgram': failWith('program_not_installed: program_missing') })), /was not found/);
  await assert.rejects(runCommandForTest(manifest, extension, 'convert', {}, createMockContext({ ...base, '@runProgram': failWith('program_not_installed: python_missing') })), /Python environment/);
  await assert.rejects(runCommandForTest(manifest, extension, 'convert', {}, createMockContext({ ...base, '@runProgram': failWith('program_timeout') })), /too long/);
  await assert.rejects(runCommandForTest(manifest, extension, 'convert', {}, createMockContext({ ...base, '@runProgram': failWith('program_busy') })), /already running/);
  await assert.rejects(
    runCommandForTest(manifest, extension, 'convert', {}, createMockContext({ ...base, '@runProgram': { code: 3, output: 'boom', files: {} } })),
    /could not convert the mesh.*boom/
  );
  await assert.rejects(
    runCommandForTest(manifest, extension, 'convert', {}, createMockContext({ ...base, '@runProgram': { code: 0, output: '', files: {} } })),
    /could not convert/,
    'Rückgabecode 0 ohne Ausgabedatei ist ein Fehler'
  );
});

test('ungültige Eingaben werden vom Manifest abgelehnt', async () => {
  await assert.rejects(runCommandForTest(manifest, extension, 'convert', { quality: 2 }, createMockContext({ get_document: oneBody })), /Invalid arguments/);
  await assert.rejects(runCommandForTest(manifest, extension, 'convert', { preset: 'nope' }, createMockContext({ get_document: oneBody })), /Invalid arguments/);
});
