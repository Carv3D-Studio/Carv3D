<p align="center">
  <a href="https://github.com/Carv3D-Studio"><img src="docs/assets/carv3d-studio-lockup.svg" alt="Carv3D Studio" width="360" /></a>
</p>

# Carv3D

[English](README.md) · **Deutsch**

<p align="center">
  <a href="https://carv3d-studio.github.io/Carv3D/"><img src="docs/assets/button-live-demo.de.svg" alt="Live-Demo ausprobieren" height="56" /></a><br />
  Läuft im Browser, ohne Download und ohne Konto · <a href="https://carv3d.de/Beta.html#beta">Für die private Beta bewerben</a> · <a href="docs/USER_MANUAL.de.md">Benutzerhandbuch</a>
</p>

## Gebaut für Teile, die funktionieren müssen

Carv3D verbindet die direkte Bearbeitung echter Volumenkörper mit Werkzeugen für Werkstatt und 3D-Druck. Fläche oder Kante auswählen, direkt verändern, einen exakten Wert eingeben und weiterarbeiten, ohne dafür einen langen Konstruktionsbaum aufzubauen.

| Modellieren | Konstruieren | Drucken |
| --- | --- | --- |
| Flächen ziehen und drücken, Kanten und Ecken bearbeiten, abrunden, fasen, aushöhlen, Formschräge, ausrichten, spiegeln und mustern | Persistente Skizzen, Drehen, Sweep, Loft, Pfade, Federn, Boolesche Operationen und Konstruktionsebenen | Prüfung von Wandstärke, Überhängen, Brücken und Bauraum; Ausrichtungshilfe, Schichtvorschau und Materialschätzung |
| Echte B-Rep-Volumenkörper für präzise Teile | Mesh-Formen mit Ziehen, Aufblasen, Kneifen, Abflachen, Glätten, Symmetrie und lokaler Verfeinerung | Teile mit Passstiften trennen und als STL, 3MF oder STEP exportieren |
| Arbeitsabläufe für STEP-, STL-, OBJ-, 3MF-, DXF- und SVG-Import | Echte Innen- und Außengewinde nach ISO, Bohrungen, Einsätze, Mutterfallen, Magnete und Hardware-Platzhalter | Druckerprofile mit Düse, Schichthöhe, Materialschrumpfung und Passungstoleranzen |

[Alle aktuell dokumentierten Funktionen ansehen →](docs/CAPABILITIES.de.md)

## Der Film

Vom Quader zum druckfertigen Teil, aufgenommen in der echten Anwendung, mit Untertiteln: Schraubenbohrung auf einer schrägen Fläche, Flächenfarben, Kante versetzen, Fläche teilen, Radius per Ziehen, Generator „Box mit Deckel“ und der 3MF-Export.

**Deutsch**

https://github.com/user-attachments/assets/ac18db1a-4e18-47b0-b93e-7630236aeb3d

**English**

https://github.com/user-attachments/assets/90efad65-387d-4dd9-abd9-4e7d067f6782

**Selbst ausprobieren:** Die eingeschränkte [Live-Demo](https://carv3d-studio.github.io/Carv3D/) läuft im Browser, ohne Download und ohne Konto. Speichern, Öffnen, Importieren und Exportieren sind dort gesperrt, und nichts wird gespeichert; siehe die [Bedingungen](docs/DEMO_TERMS.de.md) und den [Datenschutzhinweis](docs/DEMO_PRIVACY.de.md).

Download: [Deutsch (MP4)](docs/media/carv3d-showcase.de.mp4) · [englische Fassung (MP4)](docs/media/carv3d-showcase.en.mp4) · [Untertitel (WebVTT)](docs/media/carv3d-showcase.de.vtt) · [Beispielmodell mit Flächenfarben (3MF)](docs/media/carv3d-showcase-example.3mf)

<p align="center">
  <img src="docs/assets/carv3d-workspace.webp" alt="Carv3D-Arbeitsumgebung mit Maker Fox, Maßen und Schnittansicht" width="960" />
</p>

<p align="center">
  <strong>Direktes Modellieren für den 3D-Druck.</strong><br />
  Flächen ziehen statt Konstruktionsbaum pflegen. Exakte Volumenkörper, echte Gewinde, Hardware-Taschen, Farben pro Fläche und Druckprüfungen in einer Umgebung, die im Browser läuft.
</p>

<p align="center">
  <a href="https://carv3d.de/Beta.html">Webseite</a> ·
  <a href="https://carv3d.de/Beta.html#beta"><strong>Für die private Beta bewerben</strong></a> ·
  <a href="docs/USER_MANUAL.de.md">Benutzerhandbuch</a> ·
  <a href="docs/CAPABILITIES.de.md">Aktuelle Funktionen</a> ·
  <a href="https://carv3d-studio.github.io/Carv3D/"><strong>Live-Demo ausprobieren</strong></a>
</p>

> [!IMPORTANT]
> Carv3D ist eine **Closed-Source-Anwendung in einer privaten frühen Beta**. Dieses öffentliche Repository enthält Produktinformationen, Dokumentation, Vorlagen für Meldungen und die öffentliche Roadmap. Der Anwendungskern und ein öffentlicher Download sind nicht enthalten.

Carv3D wird von **[Carv3D Studio](https://github.com/Carv3D-Studio)** entwickelt und gepflegt. Das öffentliche Repository und der private Anwendungskern liegen in derselben Organisation, bleiben aber klar voneinander getrennt.

## Was Carv3D besonders macht

Carv3D bearbeitet echte Volumenkörper direkt und bringt die Generatoren und die Druckvorbereitung mit, für die man in Werkstatt- und 3D-Druck-Projekten sonst oft weitere Programme braucht. Jede Funktion ist zugleich ein Befehl für Skripte und KI-Clients. Der Status je Funktion steht unter [Aktuelle Funktionen](docs/CAPABILITIES.de.md); dort als eingeschränkt oder geplant markierte Einträge sind noch nicht vollständig geprüft oder noch nicht gebaut.

| Alleinstellungsmerkmal | Was das praktisch bedeutet |
| --- | --- |
| **Vorhandene STL-Modelle ohne Verzerrung ändern** | Ein importiertes Netz zwischen zwei Ebenen dehnen oder kürzen (Smart Stretch), ohne dass Bohrungen, Fasen und Rundungen außerhalb der Dehnzone ihre Form verlieren. Ein Loch im Netz gegen ein passendes Schraubloch tauschen und einen Bereich bereinigen gibt es vorerst nur über die Befehlsschnittstelle (MCP), nicht als Menüeintrag. |
| **Hardware mit einem Klick** | Schraublöcher, Gewindeeinsätze, Mutternaschen mit Schlitz, Magnettaschen und Kugellagersitze mit Druckzugaben, gesetzt auf die gewählte Fläche. Einzelne Lager- und Magnetmaße sind noch als unbestätigt gekennzeichnet. |
| **Zero-Support-Konstruktion** | Tropfenbohrungen, Fasen an den Unterkanten und Opferbrücken in Senkungen, damit Teile ohne Stützmaterial drucken. |
| **Print-in-Place-Gelenke und Scharniere** | Gelenke und Filmscharniere, die zusammengebaut drucken, und Lochmuster (Waben, Voronoi und weitere), die einen stabilen Rahmen um das Muster lassen. |
| **Foto zu Organizer** | Aus dem Foto eines Werkzeugs wird eine Aussparung in einem Gridfinity-artigen Behälter (bisher an synthetischen Bildern geprüft). |
| **Veredelungen, die den Körper formbar lassen** | Oberflächentexturen (zum Beispiel Rändelung), Innenrippen und Lochmuster liegen als Liste auf dem exakten Körper: Sie lassen sich ausschalten, entfernen und neu berechnen, und der Körper bleibt mit Rückgängig bearbeitbar. |
| **Generatoren für Maker-Aufgaben** | Zweiteilige Gussform mit Trichter und Entlüftung, Kabelkanal- und Schlauch-Router, Platinen-Gehäuse (bisher eine Platine: Raspberry Pi 4 Model B), Zahnräder, Bohrschablonen. |
| **Flächen ziehen, kein Konstruktionsbaum** | Fläche anklicken, ziehen, ein genaues Maß in Millimetern eintippen und weitermachen. Bohrungen, Verrundungen und Aushöhlungen bleiben exakt. |
| **Druckvorbereitung im Modell** | Bauteil-Vorschau auf der Druckplatte des gewählten Druckers, Ausrichtungshilfe, Toleranz-Prüfkörper, Druckpausen und Modifier-Zonen für den Slicer. Einiges davon können auch Slicer; der Unterschied ist, dass es Teil des Modells ist. Die Slicer-Metadaten sind noch nicht mit Referenzdateien eines Slicers geprüft. |
| **Projekttyp Bausatz** | Ein Projekt als Bausatz markieren: Carv3D leitet aus den Teilen eine Bauanleitung mit Schrittfolge, Stückliste und Druckhinweisen ab. |
| **MCP-first** | Jede Funktion ist ein Befehl, Oberfläche und lokaler MCP-Server nutzen dieselben Befehle. Einzelne Funktionen (siehe oben) sind noch nicht über die Menüs erreichbar. |
| **Community-Erweiterungen** | Ein Erweiterungs-SDK lässt geprüfte Erweiterungen wie eingebaute Funktionen in Menüs und Befehlssuche erscheinen. Die erste, Mesh Mix-S2C, ist eine Open-Source-Erweiterung (AGPL-3.0-only); sie braucht ein separat installiertes Programm und läuft nicht im Browser. |
| **Lernen eingebaut** | „So geht’s“-Clips im Tooltip (Deutsch und Englisch) und eine geführte Tour. |
| **Deine Dateien bleiben bei dir** | Carv3D läuft im Browser und arbeitet auf deinem eigenen Gerät. |

Einige Funktionen sind noch eingeschränkt: Slicer-spezifische Metadaten für Druckpausen und Modifier-Zonen sind noch nicht mit Referenzdateien eines Slicers geprüft, und einzelne Hardware-Daten sind als unbestätigt gekennzeichnet. Details stehen unter [Aktuelle Funktionen](docs/CAPABILITIES.de.md) und [Bekannte Einschränkungen](docs/KNOWN_LIMITATIONS.de.md).

## In Carv3D erstellt

Die Beispiele sind editierbare Carv3D-Projekte auf der Bauplatte der Anwendung. Sie verbinden Volumenoperationen, Mesh-Modellierung, Gewinde, Pfade, Muster und mechanische Baugruppen.

| Organisch und mechanisch | Mechanismen und Gelenke |
| --- | --- |
| ![Maker Fox aus geformtem Mesh und Volumenkörpern](docs/assets/maker-fox.webp) **Maker Fox** — eine Figur aus 25 Körpern mit geformtem Kopf, Sweep-Schwanz und maßhaltigen Volumendetails. | ![Planetengetriebe auf der Carv3D-Bauplatte](docs/assets/planetary-drive.webp) **Planetengetriebe** — Hohlrad, Sonne, drei Planeten, Lager und ein auseinandergezogener Träger aus insgesamt 92 Körpern. |
| ![Robotergreifer auf der Carv3D-Bauplatte](docs/assets/robot-gripper.webp) **Robotergreifer** — gekoppelte Gelenke, Drehlager, austauschbare Backen und ein Anschlag mit Gewinde. | ![Präzisionsklemme auf der Carv3D-Bauplatte](docs/assets/desk-clamp.webp) **Präzisionsklemme** — einteiliger C-Rahmen, M16-Spindel, Führungen, Drucklager und verschiebbarer Griff. |
| ![Mechanische Iris auf der Carv3D-Bauplatte](docs/assets/mechanical-iris.webp) **Mechanische Iris** — zwölf überlappende Lamellen, einzelne Drehpunkte, Stellring und verstärkter Montagerahmen. | ![Druckbarkeitsanalyse in Carv3D](docs/assets/printability.webp) **Druckbarkeitsanalyse** — dünne Wände, Brücken, Überhänge und Bauraumprobleme werden vor dem Export geprüft. |

Weitere Beispiele und kurze Videos gibt es auf der [Carv3D-Webseite](https://carv3d.de/Beta.html#showcase).

## Lokale Automatisierung & MCP-Schnittstelle

Carv3D stellt seine Modellierbefehle über einen lokalen **Model Context Protocol (MCP)**-Server bereit, entwickelt von stereodruid. MCP-fähige lokale Automatisierungswerkzeuge, Skripte und Clients können Modelle über dieselbe Befehlsschicht wie die Oberfläche erstellen, untersuchen, verändern, messen, prüfen und exportieren.

- kein externer Cloud-API-Schlüssel in Carv3D erforderlich
- Geometrie und Projekte bleiben auf dem lokalen Computer
- Headless-Modus zum Erstellen von Modellen ohne geöffneten Browser
- Live-Brücke zur Steuerung der geöffneten Carv3D-Arbeitsumgebung
- kompatibel mit standardkonformen MCP-Clients und lokalen Automatisierungswerkzeugen

## Private frühe Beta

Die Beta ist **30 Tage ab dem ersten Start kostenlos**, mit vollem Funktionsumfang einschließlich Speichern und Export. Der Zugang wird in kleinen Wellen vergeben; es gibt keinen öffentlichen Testdownload.

1. [Beta-Bewerbung öffnen](https://carv3d.de/Beta.html#beta).
2. Kurz beschreiben, was du bauen möchtest und wie du 3D-Druck oder Maker-Werkzeuge nutzt.
3. Du erhältst sofort eine Eingangsbestätigung per E-Mail. Ausgewählte Bewerber erhalten ihren Zugang per E-Mail.

Die 30 Tage beginnen mit deinem ersten Start und lassen sich auf Anfrage verlängern. Persönlich eingeladene Frühtester können bis einschließlich **31. März 2027** modellieren. Nach Ablauf eines Testzeitraums lassen sich bestehende Projekte weiterhin öffnen, speichern und als STEP, STL oder 3MF exportieren. Die Bearbeitung wird nach einer Verlängerung, mit einer aktuellen Beta oder mit einer späteren Beta fortgesetzt.


## Produktausrichtung

- der Anwendungskern bleibt Closed Source
- lokale Modellierung ohne Pflichtkonto oder Cloud-Dienst
- geprüfte Community-Erweiterungen sollen einsehbaren Quellcode haben und kostenlos bleiben

Unterstützte Plattformen bleiben bis zur stabilen Veröffentlichung Planungsziele. Siehe [öffentliche Roadmap](ROADMAP.de.md) und [Erweiterungen](docs/EXTENSIONS.de.md).

## Dokumentation und Rückmeldungen

- [Benutzerhandbuch](docs/USER_MANUAL.de.md)
- [Aktuelle Funktionen](docs/CAPABILITIES.de.md)
- [Hinweise für Betatests](docs/BETA_TESTING.de.md)
- [Bekannte Einschränkungen](docs/KNOWN_LIMITATIONS.de.md)
- [Öffentliche Roadmap](ROADMAP.de.md)
- [Fehler melden](https://github.com/Carv3D-Studio/Carv3D/issues/new?template=bug_report_de.yml)
- [Funktion vorschlagen](https://github.com/Carv3D-Studio/Carv3D/issues/new?template=feature_request_de.yml)
- [Sicherheitsproblem melden](SECURITY.de.md)
- Vorschauvorbereitung: [Bedingungen](docs/DEMO_TERMS.de.md), [Datenschutz](docs/DEMO_PRIVACY.de.md), [Austausch der Open-Source-Bibliothek](docs/OCCT_REPLACEMENT.de.md). Diese Unterlagen sind für die geplante Live-Vorschau vorbereitet und kündigen noch kein Deployment an.

## Repository und Lizenz

Dieses Repository ist die öffentliche Informations- und Feedback-Zentrale von Carv3D. Der proprietäre Anwendungscode, private Builds, Signiermaterial, Testerdaten und interne Entwicklungsunterlagen werden bewusst außerhalb davon aufbewahrt. Für die öffentlichen Inhalte gilt [LICENSE](LICENSE).

<p align="center">
  <img src="docs/assets/carv3d-maker-fox.png" alt="Maker Fox, das Maskottchen von Carv3D" width="220" /><br />
  <strong>Maker Fox</strong> · Maskottchen von Carv3D Studio
</p>

© 2026 Carv3D Studio
