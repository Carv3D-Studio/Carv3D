# Third-Party Notices

Carv3D uses the following open-source components. Their licenses apply to the respective components.

## OpenCASCADE Technology (OCCT)

- **What:** Geometric modeling kernel (B-Rep solids, booleans, fillets, offsets, STEP export).
- **How it is used:** Compiled to WebAssembly (`replicad-opencascadejs`, file `replicad_single.wasm`) and loaded
  at runtime in a dedicated Web Worker (`src/kernel/kernel.worker.ts`). The WebAssembly file is shipped as a
  separate, replaceable asset and is not statically merged into the application code.
- **License:** GNU Lesser General Public License v2.1 (LGPL-2.1) with the OCCT additional exception.
  Full license texts, source archives and replacement instructions accompany the demo under `legal/index.html`.
- **Version provenance:** the installed `replicad-opencascadejs` 1.1.0 declares replicad revision
  `e4b05f67dc4e2393a876ce8c5064a9c93db05bf1`. Its build uses opencascade.js revision
  `ebd263f15337b440b391492af073662707e86482`, whose `DEPS.json` pins OCCT 8.0.1,
  revision `b8f597c677811d1f9f4d8a97f5ae2825c0353a42`.
- **Changes:** no local Carv3D changes to the installed library. Upstream patches and binding-generation
  scripts are included in the supplied source archives; this is not a claim of an unpatched upstream OCCT build.
- **Replacement:** the demo ships its LGPL loader and WASM independently under `legal/occt/`. Recipients may
  replace both with compatible modified files without rebuilding proprietary Carv3D. See `legal/OCCT_REPLACEMENT.md`.
  Runtime integrity locks are not used. Source/binary correspondence derives from metadata and has not yet
  been independently verified by rebuilding the upstream package.

## replicad / replicad-opencascadejs

- **What:** TypeScript API on top of OCCT and the prebuilt OCCT WebAssembly module used by this project.
- **License:** `replicad` MIT; `replicad-opencascadejs` LGPL-2.1-only (contains the OCCT build).
- **Source:** <https://github.com/sgenoud/replicad>
- The OCCT header exception applies to OCCT; it is not a blanket exception for the LGPL-2.1-only wrapper.
- The demo's source archives include the wrapper configuration, opencascade.js patches and generators,
  pinned OCCT, RapidJSON, FreeType and Emscripten sources. No email request or account is required for access.

## Dependencies of the WebAssembly build

- **FreeType:** source revision and FreeType Project License are provided under `legal/`; the full source archive
  preserves its copyright and modification notices. Portions of this software are copyright © 1996-2002, 2006
  The FreeType Project (www.freetype.org). All rights reserved.
- **RapidJSON:** MIT and the additional notices in the supplied `RAPIDJSON_LICENSE.txt` and source archive.
- **Emscripten:** the supplied `EMSCRIPTEN_LICENSE.txt` and source archive preserve its runtime and third-party notices.
  The archives capture the pinned build inputs; inclusion does not assert that every upstream feature is linked.

## three.js

- **What:** 3D rendering in the browser.
- **License:** MIT. <https://github.com/mrdoob/three.js>

## manifold-3d

- **What:** Boolean operations on mesh bodies (WebAssembly build of the Manifold geometry library).
- **License:** Apache-2.0. <https://github.com/elalish/manifold>

## polygon-clipping

- **What:** 2D boolean operations and offsets for sketches.
- **License:** MIT. <https://github.com/mfogel/polygon-clipping>

## zod, @modelcontextprotocol/sdk

- **What:** Input schemas of all commands; Model Context Protocol server.
- **License:** MIT.

## Roboto Bold (font)

- **What:** Letter shapes for engraving and embossing text (`src/assets/fonts/Roboto-Bold-latin.woff`).
- **License:** SIL Open Font License 1.1, text in `src/assets/fonts/Roboto-LICENSE.txt`. <https://github.com/googlefonts/roboto-classic>

## Vite, TypeScript, Biome, Playwright

- Build, check and test tooling; MIT / Apache-2.0. Not part of the shipped app.

The machine-readable list for the About dialog is `data/licenses/third-party.json` (`npm run notices` regenerates it, `npm run notices:check` verifies it).

---

Carv3D is an independent project. It reproduces the *behaviour* of professional direct-modeling tools; it does not
contain third-party icons, graphics, texts or branding.
