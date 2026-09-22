# Release automation template

The active CI configuration lives in [.github/workflows/ci.yml](../workflows/ci.yml). It builds and tests pull requests and main, and verifies the installed package and documentation examples on Ubuntu/Windows with Node.js 22/24.

The release.yml file here is an inactive reference template, not an active workflow. It still contains v3.0.0 filenames and needs version/tag validation before it is suitable for future releases. No automatic publishing is enabled by activating CI.
