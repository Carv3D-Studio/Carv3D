# Carv3D-Benutzerhandbuch

[English](USER_MANUAL.md) · **Deutsch**

Carv3D folgt einem kurzen Arbeitsablauf: Drucker einstellen, exakte Volumenkörper erzeugen, funktionale Details ergänzen, Druckbarkeit prüfen, anschließend speichern und exportieren.

## Grundablauf

1. Unter **Maker → Mein Drucker** Bauraum, Düsengröße und Passungsspiel eintragen.
2. Mit einem Grundkörper oder einer Skizze beginnen und exakte Maße in Millimetern eingeben.
3. Flächen, Kanten oder ganze Körper auswählen und das passende Modellier- oder Maker-Werkzeug anwenden.
4. **Maker → Druckbarkeit prüfen** ausführen.
5. Das bearbeitbare `.carv`-Projekt speichern und als 3MF, STL oder STEP exportieren.

Unter **Hilfe → Einführung** führt eine interaktive Tour Klick für Klick durch einen Trainingsquader mit echtem M8-Innengewinde und anschließender Druckbarkeitsprüfung. Unter **Hilfe → Benutzerhandbuch** stehen vier vollständige Lernprojekte bereit. Ein Beispiel ersetzt nach einer Sicherheitsabfrage das aktuelle Dokument.

## Winkelhalter mit Senkbohrungen

Ein praktisches Montageteil mit folgenden Grundlagen:

- Quader und exakte Maße
- 2-mm-Kantenrundungen
- zwei tabellengesteuerte M4-Senkbohrungen
- Boolesche Vereinigung zu einem druckbaren Volumenkörper

Übung: Flanschhöhe ändern, Lochpositionen über ihre Randabstände verschieben und den Halter als 3MF exportieren.

## Elektronikgehäuse mit Deckel

Ein zweiteiliges Projekt aus offenem Gehäuse und abnehmbarem Deckel. Es zeigt:

- Aushöhlen eines 90 × 60 × 28 mm großen Quaders auf 2,4 mm Wandstärke
- getrennte Körper und Sichtbarkeitssteuerung
- vier innere Dome mit Taschen für M3-Gewindeeinsätze
- vier M3-Zylinderkopfbohrungen im Deckel

Übung: Gehäusegröße ändern, einen Dom verschieben und eine Kabelöffnung in einer Seitenwand anlegen.

## Drehknopf mit D-Achsaufnahme

Ein kompaktes Beispiel für fortgeschrittene Formgebung:

- Rotationsprofil für das Grundvolumen
- kreisförmiges Muster mit sechzehn Griffnuten
- Boolesches Abziehen
- extrudiertes Polygon als formschlüssige Achsaufnahme

Übung: Zahl der Griffnuten oder Achsmaße ändern und anschließend die Druckbarkeit prüfen.

## M10-Bolzen mit Innengewinde

Ein funktionales zweiteiliges Gewindepaar:

- modelliertes M10-Außengewinde am Sechskantbolzen
- passendes M10-Innengewinde im separaten Block
- ISO-Regelsteigung von 1,5 mm
- 0,25 mm radiales Passungsspiel für den 3D-Druck

Übung: Ein weiteres Gewinde über das Bohrungswerkzeug erzeugen und das Passungsspiel an den eigenen Drucker anpassen. Unter M6 sind Gewindeeinsätze meist zuverlässiger.

## Speichern und Export

- **`.carv`** erhält bearbeitbare exakte Geometrie, Körpernamen, Farben, Skizzen und das Druckprofil.
- **3MF** ist das bevorzugte Format für moderne Slicer.
- **STL** eignet sich für breite Kompatibilität.
- **STEP** überträgt exakte Volumengeometrie in andere CAD-Systeme.

Das `.carv`-Projekt sollte auch nach dem Export aufbewahrt werden, weil Netzexporte nicht als bearbeitbare Masterdatei gedacht sind.
