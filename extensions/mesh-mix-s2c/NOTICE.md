# Notice and license disclosure

## This extension

**Mesh Mix-S2C converter** for Carv3D, version 1.0.0. Copyright © 2026 Carv3D Studio and contributors.
Licensed under the **GNU Affero General Public License v3.0 only** (`AGPL-3.0-only`); the full text is in [LICENSE](LICENSE).
The complete corresponding source of this extension is the content of this folder (`manifest.json`, `src/`, `test/`); the packed file in `dist/` is built from it with the Carv3D SDK packer (`sdk/tools/pack.ts`).

## The program it uses: Mesh Mix-S2C (not included)

| | |
|---|---|
| Name | Mesh Mix-S2C (also called Manifold Mesh Mix) |
| Authors | Tuna-The-First and Duvdivan (and the contributors named in its repository) |
| Source code | <https://github.com/STL2CURVES-MMM/Mesh-Mix-S2C> |
| License | GNU Affero General Public License v3.0 (`AGPL-3.0`) – full text in its `LICENSE` |
| Reviewed revision | `be1677b835a1251d4015b583017468ba65cac453` |
| Its own third-party notices | `THIRD_PARTY_NOTICES.md` in its repository (Open CASCADE, OCP, MeshFix/PyMeshFix, Manifold, trimesh, NumPy, SciPy and others, each under its own license) |

**What this extension does and does not do**

* It does **not contain, copy, link or redistribute** any source code, binary or other file of Mesh Mix-S2C or of its dependencies. You install Mesh Mix-S2C yourself from the upstream repository.
* It starts Mesh Mix-S2C **only as a separate program** through its public command line (`mmm_engine.py convert <input.stl> -o <output.step> --preset … --repair … --quality …`). STL goes in, STEP comes out; the two programs share no code and no memory.
* Carv3D does not modify Mesh Mix-S2C. If you modify Mesh Mix-S2C and make it available to others (including as a network service), the AGPL-3.0 obligations of that program apply to you: offer the corresponding source of your modified version. Obtain updates and the source from the upstream repository.
* Nothing is uploaded: the conversion runs on your computer.

## Why this extension is AGPL-3.0-only

The extension only talks to Mesh Mix-S2C through the command line, so the licenses do not have to match. We chose the same license anyway so that the combination is easy to reason about and every user of this extension gets the same freedoms as with Mesh Mix-S2C itself. The Carv3D application that hosts the extension is a separate work with its own license; the extension is loaded through the public extension SDK and shares no code with it beyond the SDK types.

## Verification

Extensions that start programs or read files into the document are checked by the Carv3D team before Carv3D accepts them. Carv3D recognises the checked package by its id and the SHA-256 checksum of its code, and starts only programs on its own fixed list (`mesh-mix-s2c` is on it). A changed package has to be checked again.
