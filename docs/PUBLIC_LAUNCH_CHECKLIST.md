# Public launch checklist

**English** · [Deutsch](PUBLIC_LAUNCH_CHECKLIST.de.md)

This checklist is the release gate for making the public Carv3D pages and the restricted live preview available. It records what must be verified before a visibility or deployment change is made.

## Target state

- `Carv3D-Studio/Carv3D` is **public** and contains documentation, examples, roadmap, issue templates and the limited demo only.
- `Carv3D-Studio/Carv3D-CORE` remains **private** and contains the application source and internal development material.
- A separate private beta repository holds invited tester builds. Testers receive read-only access; there is no public beta download.
- `https://carv3d.de/Beta.html` is the public entry point for the product, documentation and beta application.

## Before changing visibility

- [ ] Confirm the final public repository review: no proprietary application source, secrets, signing keys, tester data, internal notes or unpublished builds. Required open-source library sources and their licenses are intentionally included in the demo distribution.
- [ ] Confirm every documented capability matches the shipped demo and current application behavior; mark planned items as planned.
- [ ] Confirm English and German documents, links and headings are equivalent.
- [ ] Confirm the public repository license and third-party notices are final for the material actually included.
- [ ] Confirm the website imprint, privacy notice, beta application and security contact are current.

## Restricted live preview

- [ ] Build from the private core in a clean checkout.
- [ ] Verify that the preview contains no source maps, development bridge, test data, credentials or private endpoints.
- [ ] Verify preview limits: no save, open, import, export, MCP bridge or extensions; body and session limits are visible.
- [ ] Verify the beta warning, version and expiry text in the build.
- [ ] Verify full LGPL/OCCT-exception texts, same-origin library source archives, provenance and the replaceable loader/WASM pair. Review [demo terms](DEMO_TERMS.md), [privacy](DEMO_PRIVACY.md) and [replacement instructions](OCCT_REPLACEMENT.md); resolve the remaining source/binary correspondence and modified-library rebuild checks.
- [ ] Test Chrome and Edge on a clean profile, including reload, offline behavior and a new session after expiry.
- [ ] Record the build hash and archive the exact artifact used for deployment.

## GitHub configuration at launch

- [ ] Make `Carv3D-Studio/Carv3D` public.
- [ ] Keep `Carv3D-CORE` private.
- [ ] Create or confirm the private beta repository and its invitation team.
- [ ] Enable the Wiki only when the public launch is approved; start with maintainer-only editing.
- [ ] Enable GitHub Pages only after the preview checks pass, using the compiled artifact and the documented `/Carv3D/` base path.
- [ ] Enable private vulnerability reporting on the public repository and verify the security contact.
- [ ] Protect `main` and require review for public documentation changes.

## Launch sequence

1. Freeze the reviewed public commit and record its hash.
2. Publish the public repository and verify the README, issue forms, links and images while logged out.
3. Enable the Wiki and publish the initial English pages plus German counterparts.
4. Deploy the restricted preview to GitHub Pages and test the public URL.
5. Open the website beta application and invite the first tester wave manually.
6. Monitor the first applications, security reports and preview errors before widening access.

The visibility changes and the Pages deployment remain separate approvals. A public documentation repository does not grant access to the private core or the private beta builds.
