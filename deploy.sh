#!/bin/bash

# Automated deployment script
# This script builds, copies frontend to backend, cleans server, and deploys

SERVER_IP="count-new.cs.vt.edu"
SERVER_USER="sangwonlee"
APP_DIR="counting-app"

echo "🚀 Starting automated deployment..."

# Build both frontend and backend
echo "📦 Building frontend and backend..."
npx nx build frontend
npx nx build backend

# Copy frontend build into backend dist
echo "📁 Copying frontend build into backend dist..."
cp -r dist/apps/frontend/* apps/backend/dist/

echo "✅ Build complete! Frontend files are now in backend dist folder."

# Clean server app directory
echo "🧹 Cleaning server app directory..."
ssh ${SERVER_USER}@${SERVER_IP} "rm -rf ${APP_DIR}/*"

# Copy new files to server
echo "📤 Copying new files to server..."
scp -r apps/backend/dist/* ${SERVER_USER}@${SERVER_IP}:${APP_DIR}/

# Install dependencies on server
echo "📦 Installing dependencies on server..."
ssh ${SERVER_USER}@${SERVER_IP} "cd ${APP_DIR} && npm install --production && npm install node-fetch@2"

echo "✅ Deployment complete!"
echo ""
echo "📝 Next steps:"
echo "   1. SSH into server:"
echo "      ssh ${SERVER_USER}@${SERVER_IP}"
echo "   2. Go to the app directory:"
echo "      cd ${APP_DIR}"
echo "   3. Start the server:"
echo "      node main.js"
echo "   4. Go to the website:"
echo "      http://${SERVER_IP}:8001"