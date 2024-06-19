#!/bin/bash
set -e

echo "Deployment started ..."

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Check and use the correct Node version
if [[ $(node -v) != v18* ]]; then
  nvm use 18
fi

# Stash any local changes
git stash --include-untracked

# Pull the latest version of the app
git pull origin main

# Install npm dependencies
npm install

# Build the project
npm run build

# Apply stashed changes, if any
git stash pop || true

echo "Deployment finished!"
