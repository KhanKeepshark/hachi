#!/bin/bash
set -e

echo "Deployment started ..."

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use a specific Node version
nvm use 18

# Pull the latest version of the app
git pull origin main

# Install npm dependencies
npm install

# Build the project
npm run build

echo "Deployment finished!"
