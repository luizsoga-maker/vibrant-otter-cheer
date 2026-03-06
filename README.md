# SiteCraft AI

Sistema de criação de sites com IA.

## Deploy no GitHub Pages

### 1. Configure a base no `vite.config.ts`:
```ts
const base = '/sitecraft-ai/'; // Para repositório de projeto
// ou
const base = '/'; // Para user site (username.github.io)
```

**Better approach: Use environment variable**
Set `VITE_BASE_PATH` in your GitHub Actions workflow or local `.env` file:
- For project pages: `VITE_BASE_PATH=/your-repo-name/`
- For user/organization pages: `VITE_BASE_PATH=/`

### 2. Criar Personal Access Token (PAT) no GitHub:

1. Vá em **Settings** (configurações do repositório ou do usuário)
2. **Developer settings** → **Personal access tokens** → **Tokens (classic)**
3. **Generate new token** (classic)
4. Dê um nome (ex: "SiteCraft AI Deploy")
5. **Expiration**: selecione "No expiration" ou defina um prazo
6. **Scopes** (permissões): marque apenas **`repo`** (Full control of private repositories)
   - Se o repositório for público, pode marcar apenas `public_repo`
7. Clique em **Generate token**
8. **Copie o token** (você não poderá vê-lo novamente)

### 3. Adicionar token como segredo no repositório:

1. No repositório, vá em **Settings** → **Secrets and variables** → **Actions**
2. Clique em **New repository secret**
3. **Name**: `ACCESS_TOKEN`
4. **Value**: cole o token gerado
5. Clique em **Add secret**

### 4. Faça o build:
```bash
npm run build
```

### 5. Verifique a pasta `dist/`:
- Deve conter: `index.html`, `assets/`, `404.html`

### 6. No GitHub:
- Settings → Pages
- Source: `Deploy from a branch`
- Branch: `main` (ou sua branch principal)
- Folder: `/dist`
- Clique em Save

### 7. Aguarde 2-5 minutos e acesse:
- `https://username.github.io/sitecraft-ai/` (projeto)
- `https://username.github.io/` (user site)

### 8. Variáveis de ambiente (se necessário):
Settings → Pages → Build and deployment → Environment variables:
```
VITE_API_URL=https://seu-backend.com
VITE_BASE_PATH=/sitecraft-ai/  # Only for project pages
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