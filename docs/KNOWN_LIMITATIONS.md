# Known limitations

**English** · [Deutsch](KNOWN_LIMITATIONS.de.md)

Carv3D is in early beta. The current focus is on direct modeling fundamentals and parts for 3D printing.

- Interaction and the project format may still change during the 0.x phase.
- Editing in this beta is time limited: 30 days from your first start (extendable on request), for personally invited early testers through 31 March 2027. Project opening, saving and export remain available afterwards.
- Very large or geometrically complex models may be slow or fail.
- Tablet and touch interaction are not fully optimized.
- Community extensions are not approved for general use yet.
- Desktop distribution and handoff to local slicers are still being prepared.
- Print pauses and slicer modifier zones: slicer-specific metadata is not written to the 3MF yet, and neither has been checked against a slicer's own reference file.
- Some hardware and organizer data are marked unverified (the MR105 bearing size and the Gridfinity magnet hole). The electronics enclosure generator knows only the Raspberry Pi 4 Model B so far.
- Photo-to-organizer has only been tested on synthetic images. The cable channel router supports paths up to about 45 degrees slope.
- The printer build-plate label is shown for two Anycubic profiles only; its position and text are an unverified assumption.
- Internal ribbing, print-in-place joints and the cable channel along a path have not yet been fully accepted in the browser.

Confirmed issues are tracked separately in GitHub Issues.
