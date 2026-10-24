# Vorbereitung der öffentlichen Beta

[English](BETA_LAUNCH.md) · **Deutsch**

Die folgenden Dienste bleiben deaktiviert, solange das Repository privat vorbereitet wird.

## GitHub Wiki

Das Wiki wird zum Start der öffentlichen Beta aktiviert. Englisch ist die Hauptsprache; deutsche Seiten erhalten denselben Titel mit dem Zusatz `(Deutsch)`. Erste Bereiche:

- Erste Schritte
- Grundlagen des Modellierens
- Speichern und Exportieren
- Arbeitsablauf für den 3D-Druck
- Tastatur- und Maussteuerung
- Fehlerbehebung
- Bekannte Einschränkungen

Zu Beginn dürfen nur Maintainer das Wiki bearbeiten. Eine Bearbeitung durch die Community kann später freigegeben werden, wenn der Moderationsaufwand bekannt ist.

## Eingeschränkte Live-Vorschau über GitHub Pages

GitHub Pages wird nach der Startfreigabe aktiviert. Das private Kern-Repository baut die eingeschränkte Demo. Pages erhält die kompilierte Anwendung und die erforderlichen Quellen, Lizenzen und Austauschanleitungen der Drittbibliotheken. Proprietäre Anwendungsquellen und interne Doku bleiben privat. Die vollständige Beta bleibt auf Einladungen beschränkt.

Vor der ersten Veröffentlichung:

1. Im `Carv3D-CORE` die vollständige Prüfung ausführen.
2. Sicherstellen, dass der Produktions-Build keine Entwicklungsbrücke, Testdaten oder Source Maps enthält.
3. Den richtigen Basispfad für `/Carv3D/` konfigurieren.
4. Demo-Grenzen, Version, Ablaufdatum und Warnung vor ungespeicherter Arbeit prüfen. Öffnen, Speichern, Import und Export bleiben in der Vorschau gesperrt.
5. Neuladen und Offline-Verhalten testen; separaten LGPL-Loader/WASM, Quellenarchive vom selben Host und vollständige Lizenzen unter `legal/index.html` prüfen.
6. Pages aktivieren und den geprüften Build veröffentlichen.

Im Repository liegt kein Deployment-Workflow; im privaten Kern liegt ein Entwurf. Vor dem Start die in der [Austauschanleitung](OCCT_REPLACEMENT.de.md) genannten Prüfungen zu Quellen-/Binärzuordnung und Neubau einer geänderten Bibliothek abschließen sowie [Demo-Bedingungen](DEMO_TERMS.de.md) und [Demo-Datenschutz](DEMO_PRIVACY.de.md) prüfen. Die Vorbereitung ist keine anwaltliche Freigabe.
