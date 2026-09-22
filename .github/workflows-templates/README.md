# GitHub Actions Workflows

These workflow templates automate testing and release publishing for the Persian Palette Design System:

1. `ci.yml`: Multi-OS (Ubuntu, Windows) and multi-node (Node.js 22, 24) CI pipeline.
2. `release.yml`: Release asset builder and publisher on git tag push (`v*`).

### Enabling in GitHub

To enable these workflows directly in your repository:
```bash
# Refresh your GitHub CLI token to include the workflow scope:
gh auth refresh -s workflow

# Move templates into active workflows folder:
git mv .github/workflows-templates .github/workflows
git commit -m "ci: enable GitHub Actions workflows"
git push origin main
```
Or upload them directly via GitHub Web Interface in `.github/workflows/`.
