# 🚀 My Project Template — React + Supabase

## First time setup

1. Clone this repo
2. Open VS Code: `code my-project.code-workspace`
3. Open 3 terminal tabs and run:

| Tab | Command | URL |
|---|---|---|
| Frontend | `cd frontend && npm install && npm run dev` | http://localhost:5173 |
| Backend | `cd backend && npm install && npm run dev` | http://localhost:3000 |
| Supabase | `cd supabase && supabase start` | http://localhost:54323 |

4. Copy env files:
   - `cd frontend && cp .env.example .env`
   - `cd backend && cp .env.example .env`
5. Fill in your Supabase keys in both `.env` files
6. Link Supabase: `supabase link --project-ref YOUR_REF && supabase db push`

---

## Folder Structure