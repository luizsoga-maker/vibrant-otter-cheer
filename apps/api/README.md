# SaaS Platform API

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.example` to `.env` and fill in the values.

3. Run database migrations:
```bash
npx prisma migrate dev
```

4. Start development server:
```bash
npm run start:dev
```

## API Endpoints

### Auth
- `POST /api/auth/signup` - Create new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Sites
- `GET /api/sites` - List user's sites (protected)
- `POST /api/sites` - Create new site (protected)
- `GET /api/sites/:id` - Get site by ID (protected)
- `PUT /api/sites/:id` - Update site (protected)
- `DELETE /api/sites/:id` - Delete site (protected)

### Pages
- `GET /api/pages` - List all pages (protected)
- `POST /api/pages` - Create page (protected)
- `GET /api/pages/:id` - Get page by ID (protected)
- `PUT /api/pages/:id` - Update page (protected)
- `DELETE /api/pages/:id` - Delete page (protected)

### AI Generation
- `POST /api/ai/generate` - Generate site with AI (protected)

### Assets
- `POST /api/assets/upload` - Upload file (protected)

### Billing
- `GET /api/billing/plans` - Get available plans (protected)
- `POST /api/billing/subscribe` - Create subscription (protected)
- `POST /api/billing/webhook` - Stripe webhook (public)

### Health
- `GET /api/health` - Health check endpoint

## Testing

```bash
npm test
```

## Production Build

```bash
npm run build
npm start