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

## Live beta through GitHub Pages

Enable GitHub Pages only for the public beta. The private core repository builds the production application. Only the compiled web files are passed to the Pages deployment; the source repository and internal documentation remain private.

Before the first deployment:

1. Run the complete verification suite in `Carv3D-CORE`.
2. Confirm that the production build contains no development bridge, test data or source maps.
3. Configure the correct base path for `/Carv3D/`.
4. Confirm the visible beta warning, version number, expiry date and preserved open/save/export access.
5. Test saving, reloading and offline behavior on the deployed URL.
6. Enable Pages and publish the verified build.

No deployment workflow is stored in this repository yet, so preparation cannot accidentally publish a live beta.
