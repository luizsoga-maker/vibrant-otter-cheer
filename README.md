# SiteCraft AI

Sistema de criação de sites com IA.

## Deploy no GitHub Pages

### 1. Configure a base no `vite.config.ts`:
```ts
const base = '/sitecraft-ai/'; // Para repositório de projeto
// ou
const base = '/'; // Para user site (username.github.io)
```

### 2. Faça o build:
```bash
npm run build
```

### 3. Verifique a pasta `dist/`:
- Deve conter: `index.html`, `assets/`, `404.html`

### 4. No GitHub:
- Settings → Pages
- Source: `Deploy from a branch`
- Branch: `main` (ou sua branch principal)
- Folder: `/dist`
- Clique em Save

### 5. Aguarde 2-5 minutos e acesse:
- `https://username.github.io/sitecraft-ai/` (projeto)
- `https://username.github.io/` (user site)

### 6. Variáveis de ambiente (se necessário):
Settings → Pages → Build and deployment → Environment variables:
```
VITE_API_URL=https://seu-backend.com
```

## Desenvolvimento
```bash
npm install
npm run dev
```

## Stack
- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- React Router
- Backend: NestJS (apps/api/)