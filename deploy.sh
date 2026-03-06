#!/bin/bash
echo "Building..."
npm run build
echo "Deploying to GitHub Pages..."
git add dist
git commit -m "Deploy to GitHub Pages"
git push origin main   # or the branch you use
echo "Done."