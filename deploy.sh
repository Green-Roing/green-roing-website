#!/bin/bash

# Build the Docker image
docker build -t green-roing-web .

# Stop and remove existing container if it exists
docker stop green-roing-web 2>/dev/null || true
docker rm green-roing-web 2>/dev/null || true

# Run the container with auto-restart
docker run -d \
  --name green-roing-web \
  --restart unless-stopped \
  -p 3050:80 \
  green-roing-web

echo "Green Roing website deployed on port 3050"
echo "Access it at: http://your-vps-ip:3050"