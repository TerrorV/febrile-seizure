# Release process

Branches:

- `develop` — all development happens here. Feature and fix commits land on `develop`.
- `main` — release branch. Only releases are merged here. Pushing to `main` deploys
  the site to Azure Static Web Apps (see `.github/workflows/`).

Note: the repository's release branch is named `main` (the Azure workflow is bound to it),
not `master`.

## Cutting a release

1. Confirm `develop` is ready: `scripts/dev-progress.sh` and review the commits.
2. Merge into the release branch with a non-fast-forward merge:
   ```bash
   git checkout main && git pull --ff-only origin main
   git merge --no-ff develop -m "release: vX.Y.Z"
   git tag -a vX.Y.Z -m "vX.Y.Z"
   git push origin main --follow-tags
   ```
3. Bring `develop` up to date with the release: `git checkout develop && git merge --ff-only main`
   (or `git merge main` if `develop` has moved on), then `git push origin develop`.

## Hotfixes

Branch from `main` as `hotfix/<name>`, merge into `main` (tag and deploy), then merge
`main` back into `develop` so the fix is not lost.

## Reviewing develop progress

- Local: `scripts/dev-progress.sh [N]` lists unreleased commits and changed files.
- GitHub compare view: https://github.com/TerrorV/febrile-seizure/compare/main...develop
