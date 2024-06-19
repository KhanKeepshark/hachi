#!/bin/bash
set -e

echo "Deployment started ..."

# Pull the latest version of the app
git pull origin main

# Install npm dependencies
npm install

# Build the project
npm run build

echo "Deployment finished!"
