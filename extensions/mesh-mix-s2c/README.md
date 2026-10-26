# Mesh Mix-S2C converter (Carv3D extension)

Turns a **mesh body** (for example an imported STL) into a body with **exact, editable faces** – flat faces, cylinders, fillets – using the separately installed program [Mesh Mix-S2C](https://github.com/STL2CURVES-MMM/Mesh-Mix-S2C). The original body is kept, the result appears as a new body next to it.

In Carv3D it works like a built-in function: **Maker → Convert mesh body to exact faces (Mesh Mix)**, also found with the command search (Ctrl + K). It uses the selected body, or the only body of the document. Method, mesh repair and quality can be set under *Extensions*. Nothing is uploaded; everything runs on your computer. Detailed meshes can take several minutes.

German: [README.de.md](README.de.md)

## What you need

1. **Carv3D running with its local server** (`npm run dev` or the tester package's `START.bat`). A static page such as the public demo cannot start programs.
2. **Mesh Mix-S2C**, installed separately from its [repository](https://github.com/STL2CURVES-MMM/Mesh-Mix-S2C), with Python 3.12 and its `requirements.txt`:

   ```powershell
   git clone https://github.com/STL2CURVES-MMM/Mesh-Mix-S2C.git
   py -3.12 -m venv Mesh-Mix-S2C\.venv
   Mesh-Mix-S2C\.venv\Scripts\python.exe -m pip install -r Mesh-Mix-S2C\requirements.txt
   ```

   Carv3D finds it when the folder is called `Mesh-Mix-S2C` and lies next to the Carv3D folder (or inside it). Otherwise set `CARV3D_MESHMIX_DIR` to the folder, and optionally `CARV3D_MESHMIX_PYTHON` to the Python program (default: `.venv` in that folder).
3. **This extension**, installed in Carv3D under *Extensions → Install extension …* with `dist/mesh-mix-s2c-1.0.0.carvext`.

Carv3D accepts this package because the Carv3D team verified it (see [NOTICE.md](NOTICE.md)). The extension asks for these permissions and tells you so before installing: read the document, read model files into the document, start the program Mesh Mix-S2C.

## License and disclosure

This extension is free software under **AGPL-3.0-only** ([LICENSE](LICENSE)). It neither contains nor redistributes Mesh Mix-S2C, which is a separate AGPL-3.0 program by its authors; [NOTICE.md](NOTICE.md) lists the authors, the source, the reviewed revision and what the extension does and does not do.

## Build and test (for developers)

```bash
# from a checkout of the Carv3D SDK
node --import tsx sdk/tools/pack.ts extensions/mesh-mix-s2c --out extensions/mesh-mix-s2c/dist
node --import tsx --test extensions/mesh-mix-s2c/test/extension.test.ts
```

The test uses the SDK's mock environment; neither Carv3D nor Mesh Mix-S2C is needed. A changed build needs a new verification by the Carv3D team (the checksum of the code is part of it).
