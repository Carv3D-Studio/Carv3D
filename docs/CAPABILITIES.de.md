# Aktuelle Funktionen

[English](CAPABILITIES.md) · **Deutsch**

Diese Seite fasst die Funktionen der aktuellen privaten frühen Beta zusammen. Die Beta wird aktiv weiterentwickelt; Einzelheiten und Abläufe können sich deshalb zwischen Builds ändern.

**Statusangaben:** *Verfügbar* heißt, die Funktion existiert im aktuellen Build. *Eingeschränkt* heißt, sie existiert, hat aber eine genannte Einschränkung oder ist noch nicht vollständig geprüft. *Geplant* heißt, sie ist noch nicht gebaut und kann sich ändern.

## Direkte Volumenmodellierung

- echte B-Rep-Volumenkörper und gekrümmte Flächen
- Flächen mit direkter Zahleneingabe und Einrasten ziehen und drücken, auch Hineindrücken an Körpern mit Rundungen, Fasen und schrägen Wänden
- Radius von Bohrungen, Zapfen, Zylindern und Rundungen durch Ziehen an ihrer runden Fläche ändern
- Kanten und Ecken verschieben; Kanten versetzen oder eine Fläche an einer Linie teilen, um Flächen für Erhöhungen oder Vertiefungen zu erzeugen
- Rundungen, Rundungen mit Verlauf sowie gleiche und ungleiche Fasen
- Aushöhlen, Flächenversatz, Flächen löschen (heilt Bohrungen, Zapfen, Rundungen und gerade Fasen) und Formschrägen
- Körper verschieben, drehen, skalieren, spiegeln, duplizieren, ausrichten und auf ein Maß bringen
- geführtes Vereinigen, Abziehen und Schneiden von Körpern
- lineare, kreisförmige und pfadgebundene Muster
- Körper in 2, 4 oder 8 Teile mit optionalen Passstiften teilen und die Teile per Knopfdruck wieder zusammenstecken
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
- **Vorhandene STL-Modelle ändern:** Smart Stretch dehnt oder kürzt ein Netz zwischen zwei Ebenen, ohne Bohrungen und Fasen außerhalb der Dehnzone zu verzerren (*Verfügbar*); „Bohrung ersetzen“ tauscht ein Loch gegen ein passendes Schraubloch und „Detail entfernen“ glättet ein Logo oder kleines Relief weg, beides über Kontextleiste und Maker-Menü bei Netzkörpern (*Verfügbar*; ohne Live-Vorschau, Bestätigen im Dialog, Rückgängig mit Strg+Z)

## Maker-Hardware

- echte Innen- und Außengewinde nach ISO mit Steigung, Tiefe, Drehrichtung und Druckspiel
- geführte Schraubenbohrungen und Senkungen
- Taschen für Gewindeeinsätze, Sechskantmuttern, Einschubmuttern und Magnete
- Bohrungen und Taschen auf ebenen, schrägen und gekrümmten Flächen
- Platzhalterkörper für Schrauben, Muttern und Scheiben zur Montage- und Kollisionsprüfung
- benannte Vorgaben aus gepflegten Hardware-Datensätzen
- anpassbare Passungen aus dem aktiven Druckerprofil
- Generatoren (Maker → Generatoren): eine Box mit Deckel, die ohne Stützen druckt, und ein druckbarer Lampenschirm aus Geflecht

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
- Teile mit Passungsspiel und Passstiften trennen; die Teile werden so abgelegt, dass sie nie in anderen Körpern liegen
- 3MF-Übergabe an unterstützte Slicer-Abläufe
- Zero-Support-Optimierung: Tropfenbohrungen und Fasen am Boden statt Stützmaterial (*Verfügbar*)
- Toleranz-Prüfkörper für Passungen, mit dem gemessenen Ergebnis für spätere Passungen (*Verfügbar*)
- eingedruckte Hardware: Mutter- und Magnettaschen lassen sich als eingedruckte Teile kennzeichnen, und eine Liste der nötigen Druckpausen wird erzeugt (*Eingeschränkt*: die Pausenliste gibt es über die Befehlsschnittstelle; Pausen-Metadaten für Slicer werden noch nicht ins 3MF geschrieben, und eine Prüfung gegen eine Referenzdatei eines Slicers gibt es nicht)
- Modifier-Zonen für den Slicer: gewählte Flächen oder automatisch alle Schraublöcher werden als Verstärkungszonen mit Wandlinien, Fülldichte und Stützen-Schalter markiert; der 3MF-Export legt jede Zone als eigenes Volumen und eine Zonendatei ab (*Eingeschränkt*: die Slicer-eigenen Modifier-Einstellungen werden noch nicht geschrieben, und die Abnahme in einem Slicer steht aus)
- geteilte Teile lassen sich mit Stiften, Falz, Schnapphaken oder Bajonett verbinden (*Verfügbar*)
- Bauteil-Vorschau: einzelne Körper auf der Druckplatte ein- oder ausblenden, ohne Modell, Verlauf oder Export zu ändern (*Verfügbar*)
- Druckplatte des gewählten Druckers mit Umriss und aufgedruckter Beschriftung (*Eingeschränkt*: Form und Beschriftung sind nur für Anycubic Kobra 3 Combo und Kobra S1 Combo hinterlegt, und Lage und Text der Beschriftung sind eine ungeprüfte Annahme; andere Profile zeigen ein einfaches rechteckiges Bett)
- 17 Druckerprofile von Bambu Lab, Prusa Research, Creality, Elegoo und Anycubic mit Bettgröße, maximaler Höhe und Düsenauswahl (*Verfügbar*)
- getrennte Anzeige- und Analysenetze für flüssige Bearbeitung und zuverlässige Prüfung

## Dateien und Wiederherstellung

- native `.carv`-Projekte mit Körpern, Skizzen, Pfaden, Farben und Einstellungen
- automatische Sicherung und Wiederherstellung
- Import: STEP/STP, STL, OBJ, 3MF, DXF und SVG-Arbeitsabläufe
- Export: STEP, STL und 3MF
- Projektdaten werden lokal verarbeitet

## Bedienoberfläche

- deutsche und englische Oberfläche
- Kontextleiste und Auswahlrad mit passenden Aktionen für ausgewählte Flächen, Kanten, Körper oder Gruppen
- Befehlssuche (Strg + K)
- Listen für Körper, Skizzen, Pfade und Verlauf
- Mehrfachauswahl von Körpern, Flächen und Kanten, auch mit Auswahlrahmen
- Rückgängig und Wiederholen für Modellieroperationen
- wählbare Maussteuerung nach Vorbildern verbreiteter 3D-Anwendungen
- anpassbare Tastenkürzel und per Tastatur bedienbare Menüs
- geführte Einführung und aufgabenbezogene Lernvideos

## Veredelungen, die den Körper formbar lassen

Textur, Innenrippen und Lochmuster werden als nicht-zerstörende *Veredelungen* aufgetragen. Der exakte Körper bleibt die Basis; die Veredelungen liegen als Liste darauf und werden nach jeder Änderung des Körpers neu angewendet.

- Oberflächentexturen wie Rändelung (*Verfügbar*; im Browser an einer Quaderfläche geprüft)
- Flächen perforieren mit Waben-, Voronoi-, Rauten- oder Isogrid-Mustern (*Verfügbar*)
- Innenrippen für leichtere, steifere Teile (*Verfügbar*; die endgültige Abnahme im Browser steht aus)
- eine Liste der Veredelungen je Körper, mit Ein- und Ausschalten einzelner Veredelungen, Entfernen und Neuberechnen (*Verfügbar*)
- Veredelungen werden mit dem Projekt gespeichert und bleiben bei Rückgängig, Wiederholen, Export und Duplizieren erhalten; statt eine Veredelung still zu verlieren, erscheinen Warnungen (*Verfügbar*)
- geformte Mesh-Körper haben keine exakte Basis: dort ersetzt die Arbeit das Mesh (*Eingeschränkt*)

## Maker-Generatoren

Die Generatoren stehen im Maker-Menü und im Generatoren-Dialog. Sie erzeugen möglichst exakte Körper, und die meisten legen die fertigen Teile druckfertig auf die Druckplatte.

- **Box mit Deckel:** abgerundete Box und Steckdeckel mit einstellbarem Spiel, druckbar ohne Stützen (*Verfügbar*)
- **Zweiteilige Gussform:** aus einem Körper eine Form für Silikon, Epoxidharz, Beton oder Wachs, mit Einfülltrichter am höchsten Punkt, Entlüftungskanälen, Hebelschlitzen und Passstiften oder Dichtlippe; beide Hälften liegen druckfertig bereit (*Verfügbar*; Mesh-Körper werden mit Hinweis abgelehnt, und einige Fehlermeldungen erscheinen in der deutschen Oberfläche noch auf Englisch)
- **Kabelkanal- und Schlauch-Router:** entlang einer Punktliste oder eines Pfads eine Klick-Rinne mit Hinterschnitt (das Kabel rastet ohne Kleber ein) oder ein Tunnel, auf Wunsch mit Kabelbinder-Ankern und einem Klemm-Labyrinth am Ende (*Eingeschränkt*: Wege bis etwa 45 Grad Steigung; die Nutzung mit einem Pfad ist im Browser noch nicht geprüft)
- **Platinen-Gehäuse:** Unterschale mit Abstandshaltern, Steckeröffnungen, auf Wunsch Lüftung und ein Deckel mit Schnapphaken oder Deckelschrauben (*Eingeschränkt*: die Platinenbibliothek enthält bisher nur den Raspberry Pi 4 Model B; weitere Platinen sind *Geplant*, sobald ihre Maße aus einer Herstellerquelle stammen)
- **Kugellager-Sitze und Zahnräder:** Sitze für Lager 608, 623, 625, 688 und MR105 als Tasche oder Wellenzapfen, mit Press- oder Schiebesitz aus dem Druckprofil; Stirnräder, Pfeilverzahnung und Zahnstangen mit 20-Grad-Evolvente (*Eingeschränkt*: die Maße des Lagers MR105 sind als unbestätigt gekennzeichnet)
- **Bohrschablonen:** für Plattenkante, 90-Grad-Ecke oder Rundrohr, mit Führungsloch (auch schräg), Sitz für ein 608-Lager oder eine Metall-Bohrbuchse und optionaler Staubfang-Kammer (*Verfügbar*)
- **Foto-zu-Organizer:** ein Foto mit A4-Blatt, Kreditkarte oder Zwei-Punkt-Maßstab als Referenz wird zur Werkzeugkontur als Skizze mit Spielraum und Finger-Eingriffmulden; Gridfinity-Behälter können die Kontur als Aussparung nutzen (*Eingeschränkt*: die Bildverarbeitung ist bisher nur auf synthetischen Bildern geprüft, und das Maß des Gridfinity-Magnetlochs ist als unbestätigt gekennzeichnet, weil sich Quellen widersprechen)
- **Print-in-Place-Gelenke und Filmscharniere:** ein Gelenk, das zwischen zwei Teile eingefügt wird, und ein dünnes Filmscharnier (*Verfügbar*; der Durchlauf bis zum fertigen Gelenk ist im Browser noch nicht vollständig geprüft)
- **Einlagen:** eine Einlage mit passendem Gegenstück aus einer Skizze (*Verfügbar*)
- **Remix vorhandener Meshes:** ein Modell gezielt strecken, ein Loch ersetzen, kleine Details in einem Bereich entfernen (*Verfügbar*)

## Bausatz-Projekte mit Bauanleitung

- beim Anlegen eines Projekts die Art *Bausatz* wählen oder ein vorhandenes Projekt zum Bausatz machen (*Verfügbar*)
- die Bauanleitung wird aus den Teilen abgeleitet: Schrittfolge (Grundteil zuerst, dann Teile, die ein stehendes berühren), Stückliste mit gezählten Teilen, Farbe mit Filamentnummer und Gewicht sowie Druckhinweise je Teil, etwa welche Seite nach unten liegt und ob Stützen nötig sind (*Verfügbar*)
- ein Betrachter zeigt den Aufbau Schritt für Schritt auf Deutsch oder Englisch (*Verfügbar*)

## Community-Erweiterungen

- ein Erweiterungs-SDK (API-Version 1) lässt Erweiterungen Befehle mit Parametern hinzufügen; die Anwendung führt sie abgeschottet aus und prüft jede Berechtigung bei jedem Aufruf (*Verfügbar*)
- Befehle von Erweiterungen können wie eingebaute Funktionen in Menüs und in der Befehlssuche erscheinen (*Verfügbar*)
- Erweiterungen, die Dateien in das Dokument einlesen oder Programme starten, werden nur angenommen, wenn das Carv3D-Team das Paket geprüft hat (*Verfügbar*)
- **Mesh Mix-S2C Umwandler:** die erste geprüfte Erweiterung wandelt einen Mesh-Körper mit dem separat installierten Open-Source-Programm Mesh Mix-S2C in exakte Flächen um; ihr Quellcode liegt unter [extensions](../extensions/README.md) (AGPL-3.0-only) (*Verfügbar*; setzt das separat installierte Programm voraus)
- öffentliche Einreichungen von Erweiterungen und ein offizielles Verzeichnis sind noch nicht geöffnet (*Geplant*); siehe [Erweiterungen](EXTENSIONS.de.md)

## Lernen in der Anwendung

- „So geht’s“-Clips im Tooltip eines Werkzeugs, auf Deutsch und Englisch, für viele Werkzeuge, darunter Rundungen, Fläche versetzen, Skizzen, Pfade, Gussform, Kabelkanal, Perforieren, Textur, Innenrippen und Gelenke (*Verfügbar*)
- eine geführte Einführung, die jeden Schritt prüft und Fehler in Alltagssprache erklärt (*Verfügbar*)

## Lokale MCP-Schnittstelle

Der von stereodruid entwickelte lokale MCP-Server stellt die Modellierbefehle für kompatible Clients und Automatisierungswerkzeuge bereit. Er kann Dokument und Auswahl lesen, Geometrie erzeugen und bearbeiten, mit Skizzen und Pfaden arbeiten, Hardware platzieren, messen, Druckprüfungen ausführen sowie Modelle importieren, speichern und exportieren.

Der MCP-Server kann ohne Oberfläche laufen oder über eine Live-Brücke die geöffnete Anwendung steuern. In Carv3D ist dafür keine API-Verbindung zu einem externen Cloud-Anbieter erforderlich.

Jede Funktion ist ein Befehl: Oberfläche, Tastenkürzel und MCP-Server nutzen dieselben Befehle, und eine Funktion, die es nur als Mausklick gibt, ist nicht zulässig. Das gilt auch für die oben beschriebenen Maker-Generatoren, Veredelungen und die Druckvorbereitung.

## Verfügbarkeit

Der Build ist kein öffentlicher Download: Ausgewählte Bewerber erhalten Zugang zu einem kostenlosen 30-Tage-Test. [Auf der Carv3D-Webseite bewerben](https://carv3d.de/Beta.html#beta) oder die [Hinweise für Betatests](BETA_TESTING.de.md) lesen.
