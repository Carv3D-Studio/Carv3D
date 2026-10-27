# Current capabilities

**English** · [Deutsch](CAPABILITIES.de.md)

This page summarizes the functions available in the current private early-beta build. The beta is under active development, so details and workflows may change between builds.

**Status labels:** *Available* means the function exists in the current build. *Limited* means it exists but has a stated restriction or is not yet fully verified. *Planned* means it is not built yet and may change.

## Direct solid modeling

- true B-Rep solid bodies and curved surfaces
- push/pull faces with direct numeric input and snapping, also pushing in on bodies with fillets, chamfers and slanted walls
- change the radius of holes, posts, cylinders and fillets by dragging their round face
- move edges and vertices; offset edges or split a face along a line to create faces for raised or recessed details
- fillets, variable fillets, symmetric and asymmetric chamfers
- shell, face offset, face deletion (heals holes, posts, fillets and straight chamfers) and draft angles
- move, rotate, resize, scale, mirror, duplicate and align bodies
- union, subtract and intersect operations with guided body selection
- linear, circular and path patterns
- body splitting into 2, 4 or 8 parts with optional alignment pins, and plugging the parts back together with one click
- section planes, measurements, face and edge inspection
- construction planes on standard, selected and offset references

## Sketches, profiles and paths

- persistent, editable sketches stored in the project
- circles, ellipses, rectangles, polygons, lines, arcs, splines and closed paths
- exact lengths and angles, corner rounding, offsets, mirroring and patterns
- nested contours become holes automatically
- extrude or cut all sketch profiles, including fast multi-profile cuts for dense patterns
- revolve sketches around a sketch, world or selected-edge axis
- sweep profiles along 3D paths with taper and twist
- loft between two to four sketch profiles
- draw 3D paths, derive paths from edges or create helices
- create springs and patterns along a path
- import SVG profiles and DXF drawings as sketches

## Mesh and organic modeling

- mesh bodies can share a project with precise solids
- start from supported primitives or imported closed meshes
- Grab, Inflate, Pinch, Flatten and Smooth sculpting tools
- symmetry, point editing, subdivision and local refinement
- automatic display normals preserve smooth surfaces and sharp edges
- automatic exact or mesh calculation paths for dense cuts and complex bodies

## Maker hardware

- real internal and external ISO thread geometry with pitch, depth, handedness and print allowance
- guided screw holes and countersinks
- pockets for heat-set inserts, hex nuts, slide-in nuts and magnets
- holes and pockets on flat, slanted and curved faces
- screw, nut and washer placeholder bodies for assembly and collision checks
- named presets backed by maintained hardware data
- adjustable clearances based on the active printer profile
- generators (Maker → Generators): a box with lid that prints without supports and a printable woven lampshade

## Colors, materials and text

- body colors and individual face colors
- appearance library with matte, glossy, metallic, silk and translucent finishes
- custom appearances stored with the project
- engraved, embossed and flush inlay text
- multi-color 3MF export with body and face assignments
- color plan with estimated volume and filament per color

## Print preparation

- printer profiles with bed size, maximum height, nozzle, layer height, material and shrinkage
- wall-thickness, overhang, bridge, floating-part and build-volume checks
- suggested print orientation
- layer preview and filament estimate
- split parts with fit clearance and alignment pins; the parts are laid out so that they never end up inside other bodies
- 3MF hand-off to supported slicer workflows
- zero-support optimization: teardrop-shaped holes and chamfers at the bottom instead of support material (*Available*)
- tolerance test bodies for fits, with the measured result applied to later fits (*Available*)
- embedded hardware: nut and magnet pockets can be marked as printed-in parts, and a list of the required print pauses is produced (*Limited*: the pause list is available through the command interface; pause metadata for slicers is not written to the 3MF yet, and there is no check against a slicer's own reference file)
- slicer modifier zones: selected faces, or automatically all screw holes, are marked as reinforcement zones with wall loops, infill density and a support switch; the 3MF export stores each zone as its own volume plus a zone file (*Limited*: the slicer-specific modifier settings are not written yet and acceptance in a slicer is still open)
- split parts can be joined by pins, folds, snap hooks or bayonet connectors (*Available*)
- part preview: show or hide individual bodies on the build plate without changing the model, history or export (*Available*)
- build plate of the selected printer with its outline and printed label (*Limited*: shape and label are stored for the Anycubic Kobra 3 Combo and Kobra S1 Combo only, and the label position and text are an unverified assumption; other profiles show a plain rectangular bed)
- 17 printer profiles from Bambu Lab, Prusa Research, Creality, Elegoo and Anycubic with bed size, maximum height and nozzle options (*Available*)
- separate display and analysis meshes for responsive editing and reliable checking

## Files and recovery

- native `.carv` projects with bodies, sketches, paths, colors and settings
- automatic saving and recovery
- import: STEP/STP, STL, OBJ, 3MF, DXF and SVG workflows
- export: STEP, STL and 3MF
- project data is processed locally

## Interface

- English and German interface
- context bar and radial selection wheel with actions for the selected face, edge, body or group
- command search (Ctrl + K)
- body, sketch, path and history lists
- multiple selection for bodies, faces and edges, including a selection box
- undo and redo across modeling operations
- selectable mouse-navigation presets for common 3D applications
- customizable keyboard shortcuts and keyboard-accessible menus
- guided introduction and task-specific learning videos

## Finishes that keep the body editable

Texture, internal ribbing and perforation are applied as non-destructive *finishes*. The exact body stays the base; the finishes sit on it as a list and are re-applied after every change to the body.

- surface textures such as knurling (*Available*; checked in the browser on a box face)
- perforating faces with honeycomb, Voronoi, diamond or isogrid patterns (*Available*)
- internal ribbing for lighter, stiffer parts (*Available*; final acceptance in the browser is still open)
- a list of finishes per body, with switching individual finishes on and off, removing them and recalculating (*Available*)
- finishes are saved with the project and survive undo and redo, export and duplication; warnings are shown instead of silently dropping a finish (*Available*)
- sculpted mesh bodies have no exact base: there the work replaces the mesh (*Limited*)

## Maker generators

Generators are available from the Maker menu and from the generators dialog. They produce exact bodies where possible, and most lay out the finished parts on the build plate ready to print.

- **Box with lid:** rounded box and plug-in lid with adjustable clearance that prints without supports (*Available*)
- **Two-part mould:** from a body to a mould for silicone, epoxy resin, concrete or wax, with pouring funnel at the highest point, vent channels, pry slots and alignment pins or a sealing lip; both halves lie ready to print (*Available*; mesh bodies are declined with a notice, and some error messages still appear in English in the German interface)
- **Cable and hose channel router:** along a list of points or a path, a click-in channel with undercut (the cable snaps in without glue) or a tunnel, optionally with cable-tie anchors and a clamping labyrinth at the end (*Limited*: paths up to about 45 degrees slope; use with a path has not yet been checked in the browser)
- **Electronics enclosure:** base with standoffs, connector openings, optional ventilation and a lid with snap hooks or lid screws (*Limited*: the board library contains only the Raspberry Pi 4 Model B so far; more boards are *Planned* once their dimensions come from a manufacturer source)
- **Bearing seats and gears:** seats for 608, 623, 625, 688 and MR105 bearings as pocket or shaft pin, with press or slip fit from the print profile; spur gears, herringbone gears and racks with 20 degree involute teeth (*Limited*: the MR105 dimensions are marked unverified)
- **Drill jigs:** for a plate edge, a 90 degree corner or a round pipe, with guide hole (also angled), a 608 bearing or metal bushing seat and an optional dust chamber (*Available*)
- **Photo to organizer:** a photo with an A4 sheet, a credit card or a two-point scale as reference becomes a tool outline sketch with clearance and finger notches; Gridfinity bins can use the outline as a cutout (*Limited*: the image processing has only been tested on synthetic images, and the Gridfinity magnet hole dimension is marked unverified because sources disagree)
- **Print-in-place joints and living hinges:** a joint injected between two parts, and a thin-film hinge (*Available*; the walkthrough to a finished joint has not yet been fully checked in the browser)
- **Inlays:** an inlay with a matching counterpart from a sketch (*Available*)
- **Remix of existing meshes:** stretch a model smartly, replace a hole, remove small features in a region (*Available*)

## Kit projects with build instructions

- choose *Kit* as the project type when creating a project, or turn an existing project into a kit (*Available*)
- the build instructions are derived from the parts: step order (base part first, then parts that touch standing ones), a bill of materials with counted parts, colour with filament number and weight, and print notes per part such as which side faces down and whether supports are needed (*Available*)
- a viewer shows the assembly step by step in German or English (*Available*)

## Community extensions

- an extension SDK (API version 1) lets extensions add commands with parameters; the application runs them in isolation and checks each permission on every call (*Available*)
- extension commands can appear in menus and in command search like built-in functions (*Available*)
- extensions that read files into the document or start programs are only accepted when the Carv3D team has reviewed the package (*Available*)
- **Mesh Mix-S2C converter:** the first reviewed extension converts a mesh body to exact faces with the separately installed open-source program Mesh Mix-S2C; its source is in [extensions](../extensions/README.md) under AGPL-3.0-only (*Available*; requires the separately installed program)
- public extension submissions and an official extension directory are not open yet (*Planned*); see [Extensions](EXTENSIONS.md)

## Learning in the application

- "How-to" clips in the tooltip of a tool, in German and English, for many tools, including fillets, offset face, sketches, paths, mould, cable channel, perforating, texture, ribbing and joints (*Available*)
- a guided introduction that checks each step and explains mistakes in plain language (*Available*)

## Local MCP interface

The local MCP server, developed by stereodruid, exposes the modeling command layer for compatible clients and automation tools. It supports reading the document and selection, creating and editing geometry, working with sketches and paths, placing hardware, measuring, running print checks, and importing, saving or exporting models.

The MCP server can run headlessly or connect through a live bridge to the open application. No external cloud API connection is required inside Carv3D.

Every function is a command: the interface, keyboard shortcuts and the MCP server use the same commands, and a function that exists only as a mouse click is not allowed. This includes the maker generators, finishes and print preparation described above.

## Availability

The build is not a public download: selected applicants receive access for a free 30-day test. [Apply on the Carv3D website](https://carv3d.de/Beta.html#beta) or read the [beta testing guide](BETA_TESTING.md).
