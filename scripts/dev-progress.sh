#!/usr/bin/env bash
# Show development progress on `develop` relative to the release branch `main`.
# Usage: scripts/dev-progress.sh [N]   (N = number of recent commits to show, default 15)
set -euo pipefail
N="${1:-15}"
git fetch --quiet origin main develop
echo "== Ahead of main (unreleased work on develop)"
git log --oneline origin/main..origin/develop | head -"$N" || true
echo
echo "== Commits on develop: $(git rev-list --count origin/main..origin/develop) ahead, $(git rev-list --count origin/develop..origin/main) behind main"
echo "== Changed files since last release"
git diff --stat origin/main origin/develop | tail -n 15 || true
echo
echo "Compare on GitHub: https://github.com/TerrorV/febrile-seizure/compare/main...develop"
