# SiteCraft AI - Setup Guide

## Quick Start

### Option 1: Using Startup Scripts (Recommended)

**On macOS/Linux:**
```bash
chmod +x start.sh
./start.sh
```

**On Windows:**
```cmd
start.bat
```

### Option 2: Manual Setup

#### 1. Start the Backend API

```bash
cd apps/api

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env file with your settings (at minimum set JWT_SECRET and DATABASE_URL)

# Start the database (PostgreSQL)
# You can use Docker:
docker run -d \
  --name saas-postgres \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=saas_db \
  -p 5432:5432 \
  postgres:15

# Run database migrations
npx prisma migrate dev

# Start the backend server
npm run start:dev
```

The API will run on http://localhost:3000

#### 2. Start the Frontend (in a new terminal)

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will run on http://localhost:5173

## Environment Configuration

### Backend (.env in apps/api/)

Required variables:
- `JWT_SECRET`: A random secret for JWT tokens (generate with: `openssl rand -base64 32`)
- `DATABASE_URL`: PostgreSQL connection string (e.g., `postgresql://postgres:password@localhost:5432/saas_db`)
- `FRONTEND_URL`: Your frontend URL (default: `http://localhost:5173`)

Optional:
- `OPENAI_API_KEY`: For AI generation (if not set, uses mock provider in development)
- `STRIPE_SECRET_KEY`, `STRIPE_PRICE_*`: For billing functionality
- `MINIO_*`: For file uploads

### Frontend (.env in root)

Optional:
- `VITE_API_URL`: Override API backend URL (default: `http://localhost:3000`)

## Testing the API

Once the backend is running, test the health endpoint:

```bash
curl http://localhost:3000/api/health
```

You should see:
```json
{
  "status": "healthy",
  "database": "connected",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Troubleshooting

### "Failed to fetch" error
- Make sure the backend is running on http://localhost:3000
- Check CORS configuration in the backend
- Verify the API endpoint exists

### Database connection errors
- Make sure PostgreSQL is running
- Check your DATABASE_URL in .env
- Run `npx prisma migrate dev` to create tables

### AI generation not working
- Set `OPENAI_API_KEY` in .env for real AI generation
- Without it, the mock provider will return sample data
- Check the backend logs for errors

## Project Structure

```
├── src/                    # Frontend React app
│   ├── components/        # Reusable components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   └── utils/            # Utility functions
├── apps/api/             # Backend NestJS app
│   ├── src/
│   │   ├── ai/          # AI generation module
│   │   ├── auth/        # Authentication module
│   │   ├── sites/       # Sites management
│   │   ├── pages/       # Pages management
│   │   ├── assets/      # File uploads
│   │   ├── billing/     # Stripe integration
│   │   └── prisma/      # Database client
│   └── prisma/          # Database schema
└── start.sh / start.bat # Startup scripts