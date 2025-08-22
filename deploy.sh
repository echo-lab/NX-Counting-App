#!/bin/bash

# Automated deployment script
# This script builds, copies frontend to backend, cleans server, and deploys

SERVER_IP="128.173.237.58"
SERVER_USER="sangwonlee"
APP_DIR="counting-app"

echo "🚀 Starting automated deployment..."
echo ""

# Build both frontend and backend
echo "📦 Building frontend and backend..."
npx nx build frontend
npx nx build backend
echo ""

# Copy frontend build into backend dist
echo "📁 Copying frontend build into backend dist..."
cp -r dist/apps/frontend/* apps/backend/dist/
echo "✅ Build complete! Frontend files are now in backend dist folder."
echo ""

# Clean server app directory
echo "🧹 Cleaning server app directory..."
ssh ${SERVER_USER}@${SERVER_IP} "rm -rf ${APP_DIR}/*"
echo ""

# Copy new files to server
echo "📤 Copying new files to server..."
scp -r apps/backend/dist/* ${SERVER_USER}@${SERVER_IP}:${APP_DIR}/
echo ""

# Install dependencies on server
echo "📦 Installing dependencies on server..."
ssh ${SERVER_USER}@${SERVER_IP} "cd ${APP_DIR} && npm install --production && npm install node-fetch@2"
echo ""

echo "✅ Deployment complete!"
echo ""
echo "📝 Now go update the server:"
echo "   1. SSH into server:"
echo "      ssh ${SERVER_USER}@${SERVER_IP}"
echo "   2. Go to the app directory:"
echo "      cd ${APP_DIR}"
echo "   3. Find the process id of the server (do not forget the \" before node main.js and \" after it):"
echo "      ps aux | grep \"node main.js\""
echo "   4. Kill the process:"
echo "      kill -9 <process id>"
echo "   5. Start new process:"
echo "      nohup node main.js > app.log 2>&1 &"
echo "   6. Go to the website:"
echo "      https://count.cs.vt.edu"