# Rebuilding and replacing the demo's LGPL library

**English** · [Deutsch](OCCT_REPLACEMENT.de.md)

Carv3D uses Open CASCADE Technology (OCCT). The demo loads `legal/occt/replicad_single.js` and `legal/occt/replicad_single.wasm` independently of the proprietary worker. Replace both locally with a compatible modified library. No runtime signing or integrity lock is applied. Preparation hashes identify our original files and do not prevent your replacement.

## Sources and provenance

The demo's `legal/index.html` provides upstream repository archives, build scripts, binding configuration, patches and full licenses from the same host as the demo. `legal/provenance.json` records hashes and revisions. The source chain follows npm `gitHead` and pinned upstream metadata; it is not yet verified by independently reproducing the upstream binary.

- Wrapper: replicad-opencascadejs 1.1.0, replicad commit `e4b05f67dc4e2393a876ce8c5064a9c93db05bf1`.
- Image source: taucad/opencascade.js `ebd263f15337b440b391492af073662707e86482`.
- Its `DEPS.json` pins OCCT 8.0.1 at `b8f597c677811d1f9f4d8a97f5ae2825c0353a42`, RapidJSON, FreeType and Emscripten 5.0.1. Their sources accompany the demo.
- Carv3D makes no local changes to the installed library. Upstream patches are included in the opencascade.js sources. The OCCT exception does not automatically extend to the LGPL-2.1-only wrapper.

## Rebuild procedure to validate

1. Extract the archives. Use `packages/replicad-opencascadejs/` and its `build-source/` YAML in the replicad sources. Proprietary Carv3D source is not needed.
2. Build the pinned opencascade.js Docker image from its supplied source/Dockerfile and documented single-threaded target. For your changes, substitute your modified OCCT checkout. Apply the supplied upstream patches and preserve modification notices/dates.
3. Generate configuration: `ytt -f build-source/ --output-files build-config`. The wrapper script records `ghcr.io/taucad/opencascade.js:canary-ebd263f1-single-threaded` as the original image. Substitute your rebuilt image, mount `build-config/` at `/src`, and run `link custom_build_single.yml` as shown in the supplied package build script.
4. Keep the exported binding interface compatible. The output pair is `replicad_single.js` and `replicad_single.wasm`. ABI-incompatible variants need not work with the application.

## Use a replacement

1. Save a local copy of the compiled demo with `assets/` and `legal/` (or use its published artifact if available).
2. Back up and replace both files under `legal/occt/`, keeping the names. An identical interface may permit replacing only WASM; replacing the pair avoids glue mismatches.
3. Use a local static HTTP server, not a `file:` URL. Default demo base: `/Carv3D/`. Serve its parent with the demo folder named `Carv3D`, or map that path in your server.
4. Disable browser cache for that origin and reload. Verify the loader and WASM requests point to your `legal/occt/` files. No rebuild of proprietary Carv3D is required.
5. Test a primitive, extrusion and fillet. Diagnose binding or glue errors with the permissions stated in the demo terms.

A swap using the original files proves only the runtime path. Rebuilding and testing a genuinely modified library, source completeness and source/binary correspondence remain pre-publication checks. A generic upstream link or an email-only source request is not presented as compliance with source distribution requirements.
