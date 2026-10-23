# Aktuelle Funktionen

[English](CAPABILITIES.md) · **Deutsch**

Diese Seite fasst die Funktionen der aktuellen privaten frühen Beta zusammen. Die Beta wird aktiv weiterentwickelt; Einzelheiten und Abläufe können sich deshalb zwischen Builds ändern.

## Direkte Volumenmodellierung

- echte B-Rep-Volumenkörper und gekrümmte Flächen
- Flächen mit direkter Zahleneingabe und Einrasten ziehen und drücken
- Kanten und Ecken verschieben; Kanten versetzen, um eine Fläche für Erhöhungen oder Vertiefungen zu teilen
- Rundungen, Rundungen mit Verlauf sowie gleiche und ungleiche Fasen
- Aushöhlen, Flächenversatz, Flächen löschen und Formschrägen
- Körper verschieben, drehen, skalieren, spiegeln, duplizieren, ausrichten und auf ein Maß bringen
- geführtes Vereinigen, Abziehen und Schneiden von Körpern
- lineare, kreisförmige und pfadgebundene Muster
- Körper mit optionalen Passstiften teilen
- Schnittebenen, Maße sowie Flächen- und Kanteninformationen
- Konstruktionsebenen auf Standard-, Auswahl- und Versatzbezügen

## Skizzen, Profile und Pfade

- dauerhafte, editierbare Skizzen im Projekt
- Kreise, Ellipsen, Rechtecke, Vielecke, Linien, Bögen, Splines und geschlossene Konturzüge
- genaue Längen und Winkel, Eckenrundung, Versatz, Spiegelung und Muster
- ineinanderliegende Konturen werden automatisch zu Löchern
- Skizzenprofile extrudieren oder ausschneiden, einschließlich schneller Mehrfachschnitte für dichte Muster
- Skizzen um eine Skizzen-, Welt- oder ausgewählte Kantenachse drehen
- Profile mit Verjüngung und Verdrehung entlang von 3D-Pfaden ziehen
- Loft zwischen zwei bis vier Skizzenprofilen
- 3D-Pfade zeichnen, aus Kanten ableiten oder als Schraubenlinie erzeugen
- Federn und Muster entlang eines Pfads erstellen
- SVG-Profile und DXF-Zeichnungen als Skizzen importieren

## Mesh und organisches Modellieren

- Mesh-Körper und präzise Volumenkörper können im selben Projekt liegen
- Start mit unterstützten Grundformen oder importierten geschlossenen Netzen
- Werkzeuge zum Ziehen, Aufblasen, Kneifen, Abflachen und Glätten
- Symmetrie, Punktbearbeitung, Unterteilung und lokale Verfeinerung
- berechnete Anzeigenormalen erhalten glatte Flächen und scharfe Kanten
- automatische Wahl zwischen exakter und netzbasierter Berechnung für dichte Schnitte und komplexe Körper

## Maker-Hardware

- echte Innen- und Außengewinde nach ISO mit Steigung, Tiefe, Drehrichtung und Druckspiel
- geführte Schraubenbohrungen und Senkungen
- Taschen für Gewindeeinsätze, Sechskantmuttern, Einschubmuttern und Magnete
- Platzhalterkörper für Schrauben, Muttern und Scheiben zur Montage- und Kollisionsprüfung
- benannte Vorgaben aus gepflegten Hardware-Datensätzen
- anpassbare Passungen aus dem aktiven Druckerprofil
- spezielle Maker-Generatoren wie ein druckbarer Lampenschirm aus Geflecht

## Farben, Materialien und Text

- Körperfarben und einzelne Flächenfarben
- Darstellungsbibliothek mit matt, glänzend, Metall, Seide und durchscheinend
- eigene, im Projekt gespeicherte Darstellungen
- gravierter, erhabener und bündig eingelegter Text
- mehrfarbiger 3MF-Export mit Körper- und Flächenzuordnung
- Farbplan mit geschätztem Volumen und Filament je Farbe

## Druckvorbereitung

- Druckerprofile mit Bauraum, maximaler Höhe, Düse, Schichthöhe, Material und Schrumpfung
- Prüfung auf Wandstärke, Überhänge, Brücken, schwebende Teile und Bauraumüberschreitung
- Vorschlag für die Druckausrichtung
- Schichtvorschau und Filamentschätzung
- Teile mit Passungsspiel und Passstiften trennen
- 3MF-Übergabe an unterstützte Slicer-Abläufe
- getrennte Anzeige- und Analysenetze für flüssige Bearbeitung und zuverlässige Prüfung

## Dateien und Wiederherstellung

- native `.carv`-Projekte mit Körpern, Skizzen, Pfaden, Farben und Einstellungen
- automatische Sicherung und Wiederherstellung
- Import: STEP/STP, STL, OBJ, 3MF, DXF und SVG-Arbeitsabläufe
- Export: STEP, STL und 3MF
- Projektdaten werden lokal verarbeitet

## Bedienoberfläche

- deutsche und englische Oberfläche
- Kontextleiste mit passenden Aktionen für ausgewählte Flächen, Kanten, Körper oder Gruppen
- Listen für Körper, Skizzen, Pfade und Verlauf
- Mehrfachauswahl von Körpern, Flächen und Kanten
- Rückgängig und Wiederholen für Modellieroperationen
- wählbare Maussteuerung nach Vorbildern verbreiteter CAD- und 3D-Anwendungen
- anpassbare Tastenkürzel und per Tastatur bedienbare Menüs
- geführte Einführung und aufgabenbezogene Lernvideos

## Lokale MCP-Schnittstelle

Der lokale MCP-Server stellt die Modellierbefehle für kompatible Agenten bereit. Er kann Dokument und Auswahl lesen, Geometrie erzeugen und bearbeiten, mit Skizzen und Pfaden arbeiten, Hardware platzieren, messen, Druckprüfungen ausführen sowie Modelle importieren, speichern und exportieren.

Der MCP-Server kann ohne Oberfläche laufen oder über eine Live-Brücke die geöffnete Anwendung steuern. In Carv3D ist dafür keine API-Verbindung zu einem KI-Anbieter erforderlich.

## Verfügbarkeit

Der Build wird ausschließlich an eingeladene Tester verteilt. [Auf der Carv3D-Webseite bewerben](https://carv3d.de/Beta.html#beta) oder die [Hinweise für Betatests](BETA_TESTING.de.md) lesen.
