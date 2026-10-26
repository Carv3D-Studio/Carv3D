# Mesh Mix-S2C Umwandler (Carv3D-Erweiterung)

Wandelt einen **Netzkörper** (zum Beispiel einen importierten STL) in einen Körper mit **exakten, bearbeitbaren Flächen** um – ebene Flächen, Zylinder, Rundungen – mit dem getrennt installierten Programm [Mesh Mix-S2C](https://github.com/STL2CURVES-MMM/Mesh-Mix-S2C). Der ursprüngliche Körper bleibt erhalten, das Ergebnis erscheint als neuer Körper daneben.

In Carv3D wirkt sie wie eine eingebaute Funktion: **Maker → Netzkörper in exakte Flächen umwandeln (Mesh Mix)**, auch über die Befehlssuche (Strg + K) zu finden. Sie nimmt den gewählten Körper oder den einzigen des Dokuments. Verfahren, Netzreparatur und Qualität lassen sich unter *Erweiterungen* einstellen. Nichts wird hochgeladen; alles läuft auf deinem Rechner. Feine Netze können einige Minuten dauern.

## Was du brauchst

1. **Carv3D mit seinem lokalen Server** (`npm run dev` oder `START.bat` des Testpakets). Eine statische Seite wie die öffentliche Demo kann keine Programme starten.
2. **Mesh Mix-S2C**, getrennt aus seinem [Repository](https://github.com/STL2CURVES-MMM/Mesh-Mix-S2C) installiert, mit Python 3.12 und seiner `requirements.txt`:

   ```powershell
   git clone https://github.com/STL2CURVES-MMM/Mesh-Mix-S2C.git
   py -3.12 -m venv Mesh-Mix-S2C\.venv
   Mesh-Mix-S2C\.venv\Scripts\python.exe -m pip install -r Mesh-Mix-S2C\requirements.txt
   ```

   Carv3D findet es, wenn der Ordner `Mesh-Mix-S2C` heißt und neben dem Carv3D-Ordner (oder darin) liegt. Sonst setze `CARV3D_MESHMIX_DIR` auf den Ordner und bei Bedarf `CARV3D_MESHMIX_PYTHON` auf das Python-Programm (Standard: `.venv` in diesem Ordner).
3. **Diese Erweiterung**, in Carv3D unter *Erweiterungen → Erweiterung installieren …* mit `dist/mesh-mix-s2c-1.0.0.carvext`.

Carv3D nimmt dieses Paket an, weil das Carv3D-Team es geprüft hat (siehe [NOTICE.md](NOTICE.md)). Die Erweiterung fragt diese Berechtigungen und zeigt sie vor der Installation: das Dokument lesen, Modelldateien in das Dokument einlesen, das Programm Mesh Mix-S2C starten.

## Lizenz und Offenlegung

Diese Erweiterung ist freie Software unter **AGPL-3.0-only** ([LICENSE](LICENSE)). Sie enthält Mesh Mix-S2C weder, noch gibt sie es weiter; das ist ein eigenes AGPL-3.0-Programm seiner Autoren. [NOTICE.md](NOTICE.md) nennt Autoren, Quelle, geprüften Stand und was die Erweiterung tut und nicht tut.
