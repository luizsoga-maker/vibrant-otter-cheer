@echo off
echo Starting SiteCraft AI development environment...

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Error: Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM Start backend API
echo Starting backend API server...
cd apps/api

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo Installing backend dependencies...
    call npm install
)

REM Check if .env exists, if not copy from .env.example
if not exist ".env" (
    echo Creating .env file from .env.example...
    copy .env.example .env
    echo Please edit apps/api/.env and configure your database and other settings.
    echo Then run this script again.
    pause
    exit /b 1
)

REM Start backend in background
start "Backend API" cmd /k "npm run start:dev"

REM Wait a bit for backend to start
timeout /t 5 /nobreak >nul

REM Start frontend
echo Starting frontend development server...
cd ../..

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo Installing frontend dependencies...
    call npm install
)

start "Frontend" cmd /k "npm run dev"

echo.
echo ==========================================
echo SiteCraft AI is starting...
echo Frontend: http://localhost:5173
echo Backend API: http://localhost:3000
echo ==========================================
echo.
pause