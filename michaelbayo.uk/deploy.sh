#!/bin/bash

echo "Switching to main branch"
git checkout main

echo "Building app"
npm run build

echo "Deploying files"
rsync -avP build/ -e "ssh -p 22" root@michaelbayo.uk:/var/www/michaelbayo.uk/
echo "Completed Deployment"
