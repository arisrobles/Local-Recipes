#!/bin/bash

# 1. Pull the latest code from GitHub
echo "Hilahin ang bagong code galing GitHub..."
git pull origin main

# 2. Rebuild the Docker image
echo "Inire-rebuild ang Docker image (ito ay tatagal ng 2-3 mins)..."
docker build -t recipe-app .

# 3. Stop and Remove the old container
echo "Stopping the current website..."
docker stop website || true
docker rm website || true

# 4. Start the new container
echo "Starting the updated website..."
docker run -d -p 80:3000 --restart always --name website recipe-app

echo "SUCCESS! Ang website mo ay updated na sa bagong code. 🎉"
