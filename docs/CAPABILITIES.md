# Current capabilities

**English** · [Deutsch](CAPABILITIES.de.md)

This page summarizes the functions available in the current private early-beta build. The beta is under active development, so details and workflows may change between builds.

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
- body splitting with optional alignment pins
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
- split parts with fit clearance and alignment pins
- 3MF hand-off to supported slicer workflows
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

## Local MCP interface

The local MCP server, developed by stereodruid, exposes the modeling command layer for compatible clients and automation tools. It supports reading the document and selection, creating and editing geometry, working with sketches and paths, placing hardware, measuring, running print checks, and importing, saving or exporting models.

The MCP server can run headlessly or connect through a live bridge to the open application. No external cloud API connection is required inside Carv3D.

## Availability

The build is not a public download: selected applicants receive access for a free 30-day test. [Apply on the Carv3D website](https://carv3d.de/Beta.html#beta) or read the [beta testing guide](BETA_TESTING.md).
