# Checkliste für den öffentlichen Start

[English](PUBLIC_LAUNCH_CHECKLIST.md) · **Deutsch**

Diese Checkliste ist die Freigabe für die Veröffentlichung der öffentlichen Carv3D-Seiten und der eingeschränkten Live-Vorschau. Sie hält fest, was vor einer Änderung der Sichtbarkeit oder einem Deployment geprüft werden muss.

## Zielzustand

- `Carv3D-Studio/Carv3D` ist **öffentlich** und enthält nur Dokumentation, Beispiele, Roadmap, Issue-Vorlagen und die eingeschränkte Demo.
- `Carv3D-Studio/Carv3D-CORE` bleibt **privat** und enthält Anwendungscode und interne Entwicklungsunterlagen.
- Ein separates privates Beta-Repository enthält die Builds für eingeladene Tester. Tester erhalten nur Leserechte; es gibt keinen öffentlichen Beta-Download.
- `https://carv3d.de/Beta.html` bleibt der öffentliche Einstieg für Produkt, Dokumentation und Beta-Bewerbung.

## Vor der Sichtbarkeitsänderung

- [ ] Öffentliche Prüfung abschließen: kein Quellcode, keine Geheimnisse, Signierschlüssel, Testerdaten, internen Notizen oder unveröffentlichten Builds.
- [ ] Prüfen, dass die dokumentierten Funktionen zur Demo und zum aktuellen Verhalten passen; geplante Punkte als geplant kennzeichnen.
- [ ] Prüfen, dass englische und deutsche Dokumente, Links und Überschriften gleichwertig sind.
- [ ] Lizenz und Drittlizenzhinweise für die tatsächlich enthaltenen Inhalte finalisieren.
- [ ] Impressum, Datenschutz, Beta-Formular und Sicherheitskontakt der Website prüfen.

## Eingeschränkte Live-Vorschau

- [ ] Aus einem sauberen Checkout des privaten Kerns bauen.
- [ ] Prüfen, dass keine Source Maps, Entwicklungsbrücke, Testdaten, Zugangsdaten oder privaten Endpunkte enthalten sind.
- [ ] Grenzen prüfen: kein Speichern, Öffnen, Import, Export, MCP oder Erweiterungen; Körper- und Sitzungsgrenzen sind sichtbar.
- [ ] Beta-Hinweis, Version und Ablaufdatum im Build prüfen.
- [ ] Chrome und Edge in einem sauberen Profil testen, einschließlich Neuladen, Offline-Verhalten und neuer Sitzung nach Ablauf.
- [ ] Build-Hash dokumentieren und das exakt verwendete Artefakt archivieren.

## GitHub-Konfiguration zum Start

- [ ] `Carv3D-Studio/Carv3D` öffentlich machen.
- [ ] `Carv3D-CORE` privat lassen.
- [ ] Privates Beta-Repository und Einladungsteam anlegen oder bestätigen.
- [ ] Wiki erst nach der Startfreigabe aktivieren; zunächst nur Maintainer bearbeiten lassen.
- [ ] GitHub Pages erst nach bestandener Vorschauprüfung mit dem kompilierten Artefakt und dem dokumentierten Basispfad `/Carv3D/` aktivieren.
- [ ] Private Sicherheitsmeldungen im öffentlichen Repository aktivieren und den Sicherheitskontakt prüfen.
- [ ] `main` schützen und Reviews für öffentliche Dokumentationsänderungen verlangen.

## Startreihenfolge

1. Geprüften öffentlichen Commit einfrieren und seinen Hash notieren.
2. Repository veröffentlichen und README, Issue-Formulare, Links und Bilder ausgeloggt prüfen.
3. Wiki aktivieren und die ersten englischen Seiten mit deutschen Gegenstücken veröffentlichen.
4. Eingeschränkte Vorschau über GitHub Pages ausliefern und die öffentliche URL testen.
5. Beta-Bewerbung auf der Website öffnen und die erste Testerwelle manuell einladen.
6. Erste Bewerbungen, Sicherheitsmeldungen und Vorschaufehler beobachten, bevor der Zugang erweitert wird.

Sichtbarkeitsänderung und Pages-Deployment bleiben zwei getrennte Freigaben. Ein öffentliches Dokumentations-Repository gibt keinen Zugriff auf den privaten Kern oder private Beta-Builds.
