# Public beta launch preparation

**English** · [Deutsch](BETA_LAUNCH.de.md)

The following services remain disabled while the repository is prepared privately.

## GitHub Wiki

Enable the wiki when the public beta opens. English is the primary language; German pages use the same title with the suffix `(Deutsch)`. Initial sections:

- Getting started
- Modeling basics
- Saving and exporting
- 3D printing workflow
- Keyboard and mouse controls
- Troubleshooting
- Known limitations

Only maintainers may edit the wiki initially. Community editing can be reconsidered after the moderation workload is known.

## Restricted live preview through GitHub Pages

Enable GitHub Pages only after launch approval. The private core repository builds the restricted demo. The compiled application and required third-party library sources, licenses and replacement instructions are passed to Pages. Proprietary application sources and internal documentation stay private. The full beta remains invitation-only.

Before the first deployment:

1. Run the complete verification suite in `Carv3D-CORE`.
2. Confirm that the production build contains no development bridge, test data or source maps.
3. Configure the correct base path for `/Carv3D/`.
4. Confirm visible demo limits, version, expiry date and the warning that projects cannot be saved. Open, save, import and export remain disabled in the preview.
5. Test reload and offline behavior; verify the separate LGPL loader/WASM, same-origin source archives and full license texts under `legal/index.html`.
6. Enable Pages and publish the verified build.

No deployment workflow is stored in this repository yet. The private core contains a workflow draft. Before release, resolve the source/binary correspondence and modified-library rebuild checks documented in [Replacement instructions](OCCT_REPLACEMENT.md), and review [Demo terms](DEMO_TERMS.md) and [Demo privacy](DEMO_PRIVACY.md). Preparing these files is not a legal sign-off.
