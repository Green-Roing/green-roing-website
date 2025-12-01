#!/bin/bash

# Build Docker image
docker build -t thealoksingh/green-roing-web:latest .

# Push to Docker Hub
docker push thealoksingh/green-roing-web:latest

echo "Image built and pushed successfully!"