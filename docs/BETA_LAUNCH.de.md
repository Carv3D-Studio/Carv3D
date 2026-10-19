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

## Live-Beta über GitHub Pages

GitHub Pages wird erst zur öffentlichen Beta aktiviert. Das private Kern-Repository erstellt den Produktions-Build. Nur die kompilierten Webdateien werden an Pages übergeben; Quellcode und interne Dokumentation bleiben privat.

Vor der ersten Veröffentlichung:

1. Im `Carv3D-CORE` die vollständige Prüfung ausführen.
2. Sicherstellen, dass der Produktions-Build keine Entwicklungsbrücke, Testdaten oder Source Maps enthält.
3. Den richtigen Basispfad für `/Carv3D/` konfigurieren.
4. Sichtbaren Beta-Hinweis, Versionsnummer und Feedback-Link ergänzen.
5. Speichern, Neuladen und Offline-Betrieb unter der veröffentlichten Adresse testen.
6. Pages aktivieren und den geprüften Build veröffentlichen.

Im Repository liegt bewusst noch kein Deployment-Workflow. Dadurch kann während der Vorbereitung nicht versehentlich eine Live-Beta veröffentlicht werden.
