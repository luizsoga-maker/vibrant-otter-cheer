#!/bin/bash

echo "Starting SiteCraft AI development environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Start backend API
echo "Starting backend API server..."
cd apps/api

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing backend dependencies..."
    npm install
fi

# Check if .env exists, if not copy from .env.example
if [ ! -f ".env" ]; then
    echo "Creating .env file from .env.example..."
    cp .env.example .env
    echo "Please edit apps/api/.env and configure your database and other settings."
    echo "Then run this script again."
    exit 1
fi

# Start backend in background
npm run start:dev &
BACKEND_PID=$!

# Wait for backend to start
sleep 5

# Start frontend
echo "Starting frontend development server..."
cd ../..

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    npm install
fi

npm run dev &
FRONTEND_PID=$!

echo ""
echo "=========================================="
echo "SiteCraft AI is starting..."
echo "Frontend: http://localhost:5173"
echo "Backend API: http://localhost:3000"
echo "=========================================="
echo ""
echo "Press Ctrl+C to stop both servers."

# Wait for interrupt
trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null" EXIT
wait