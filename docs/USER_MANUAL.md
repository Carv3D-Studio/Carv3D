# Carv3D user manual

**English** · [Deutsch](USER_MANUAL.de.md)

Carv3D is built around a short workflow: set up the printer, create exact solid geometry, add the intended functional details, check printability, then save and export.

## Basic workflow

1. Open **Maker → My printer** and enter the build volume, nozzle size and fit allowance.
2. Start with a primitive or sketch and enter exact dimensions in millimetres.
3. Select faces, edges or whole bodies and apply the required modeling or Maker tool.
4. Run **Maker → Check printability**.
5. Save the editable `.carv` project and export 3MF, STL or STEP.

The application includes three complete learning projects under **Help → Introduction** and **Help → User manual**. Loading an example replaces the current document after confirmation.

## Angle bracket with countersunk holes

A practical mounting part that demonstrates:

- boxes and exact dimensions
- 2 mm edge fillets
- two table-driven M4 countersunk holes
- Boolean union into one printable solid

Suggested exercise: change the flange height, move the holes by their edge distances, then export the bracket as 3MF.

## Electronics enclosure with lid

A two-body project consisting of an open enclosure and removable lid. It demonstrates:

- shelling a 90 × 60 × 28 mm box to 2.4 mm walls
- separate bodies and visibility control
- four internal bosses with M3 heat-set insert pockets
- four M3 socket-head holes in the lid

Suggested exercise: resize the enclosure, move one boss and create a cable opening in a side wall.

## Control knob with D-shaft socket

A compact example of more advanced shape construction:

- revolved profile for the main knob
- circular pattern with sixteen grip grooves
- Boolean subtraction
- extruded polygon for the keyed shaft socket

Suggested exercise: change the groove count or shaft dimensions and run the printability check.

## Saving and export

- **`.carv`** preserves editable exact geometry, body names, colors, sketches and the print profile.
- **3MF** is the preferred format for modern slicers.
- **STL** is suitable for broad compatibility.
- **STEP** transfers exact solid geometry to another CAD system.

Keep the `.carv` project even after exporting, because mesh exports are not intended as the editable master file.
