# LGPL-Bibliothek der Demo neu bauen und austauschen

[English](OCCT_REPLACEMENT.md) · **Deutsch**

Carv3D verwendet Open CASCADE Technology (OCCT). Die Demo lädt `legal/occt/replicad_single.js` und `legal/occt/replicad_single.wasm` unabhängig vom proprietären Worker. Beide lassen sich lokal durch eine kompatible geänderte Bibliothek ersetzen. Es gibt keine Signatur- oder Integritätssperre zur Laufzeit. Vorbereitungs-Hashes kennzeichnen die ursprünglichen Dateien und verhindern deinen Austausch nicht.

## Quellen und Herkunft

`legal/index.html` bietet Upstream-Archive, Build-Skripte, Binding-Konfiguration, Patches und vollständige Lizenzen vom selben Host wie die Demo. `legal/provenance.json` nennt Hashes und Revisionen. Die Zuordnung folgt npm-`gitHead` und festgelegten Upstream-Metadaten; sie ist noch nicht durch unabhängigen Neubau des Upstream-Binärpakets verifiziert.

- Wrapper: replicad-opencascadejs 1.1.0, replicad `e4b05f67dc4e2393a876ce8c5064a9c93db05bf1`.
- Image-Quellen: taucad/opencascade.js `ebd263f15337b440b391492af073662707e86482`.
- Dessen `DEPS.json` nennt OCCT 8.0.1, Commit `b8f597c677811d1f9f4d8a97f5ae2825c0353a42`, RapidJSON, FreeType und Emscripten 5.0.1. Die Quellen liegen bei.
- Carv3D verändert die installierte Bibliothek nicht lokal. Upstream-Patches stehen im opencascade.js-Archiv. Die OCCT-Ausnahme gilt nicht automatisch für den Wrapper unter LGPL-2.1-only.

## Noch zu validierender Neubau

1. Archive entpacken. Im replicad-Archiv `packages/replicad-opencascadejs/` mit `build-source/`-YAML verwenden. Proprietärer Carv3D-Code ist nicht nötig.
2. Das festgelegte opencascade.js-Image aus beigefügten Quellen und Dockerfile nach der Single-Thread-Anleitung bauen. Eigene geänderte OCCT-Quellen einsetzen, Upstream-Patches anwenden und Änderungskennzeichnung mit Datum erhalten.
3. Mit `ytt -f build-source/ --output-files build-config` konfigurieren. Das Wrapper-Skript nennt `ghcr.io/taucad/opencascade.js:canary-ebd263f1-single-threaded` als Originalimage. Für Änderungen das selbst gebaute Image einsetzen, `build-config/` unter `/src` einhängen und gemäß Paket-Skript `link custom_build_single.yml` ausführen.
4. Exportierte Binding-Schnittstelle kompatibel halten. Ergebnis sind `replicad_single.js` und `replicad_single.wasm`. ABI-inkompatible Varianten müssen nicht mit der App funktionieren.

## Austausch

1. Lokale Kopie der kompilierten Demo mit `assets/` und `legal/` speichern oder ein angebotenes Artefakt verwenden.
2. Beide Dateien unter `legal/occt/` sichern und unter gleichem Namen ersetzen. Bei gleicher Schnittstelle kann ein reiner WASM-Tausch funktionieren; das Dateipaar vermeidet Glue-Abweichungen.
3. Per lokalem statischem HTTP-Server ausliefern, nicht per `file:`. Standard-Basispfad: `/Carv3D/`. Übergeordneten Ordner ausliefern und Demo-Ordner `Carv3D` nennen oder den Pfad im Server zuordnen.
4. Browser-Cache für diesen Ursprung deaktivieren und neu laden. In den Entwicklerwerkzeugen die Anfragen zu deinen Dateien unter `legal/occt/` prüfen. Proprietärer Carv3D-Code muss nicht neu gebaut werden.
5. Grundkörper, Extrusion und Rundung prüfen. Binding-/Glue-Fehler lassen sich im Rahmen der Erlaubnisse in den Demo-Bedingungen untersuchen.

Ein Tausch mit den Originaldateien belegt nur den Ladepfad. Neubau und Test einer tatsächlich geänderten Bibliothek, Quellenvollständigkeit und Quellen-/Binärzuordnung bleiben Prüfungen vor der Veröffentlichung. Ein allgemeiner Upstream-Link oder eine bloße E-Mail-Anforderung wird nicht als Erfüllung der Quellenpflichten zugesagt.
