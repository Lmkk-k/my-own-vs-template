# ⚙️ Backend — Node.js + Express + Supabase

## First time setup

1. Install dependencies:
   `npm install`

2. Copy and fill env file:
   `cp .env.example .env`
   - SUPABASE_URL → from Supabase dashboard → Project Settings → API
   - SUPABASE_SERVICE_KEY → use the service_role key (not anon)
   - JWT_SECRET → make up any long random string
   - PORT → leave as 3000

3. Start the dev server:
   `npm run dev`
   → Runs at http://localhost:3000

---

## Every time you open the project

`npm run dev`

---

## Folder Guide

| Folder | What goes here |
|---|---|
| `src/config/` | Supabase client and env setup |
| `src/controllers/` | Handle request and response |
| `src/middleware/` | Auth check, error handler, rate limiter |
| `src/routes/` | API endpoint definitions |
| `src/services/` | Business logic and database calls |
| `src/utils/` | Response helpers and logger |

---

## Adding a new endpoint

1. Create `src/services/myFeature.js` — database logic
2. Create `src/controllers/myFeature.js` — handle req/res
3. Create `src/routes/myFeature.js` — define the route
4. Register it in `src/routes/index.js`

---

## Available scripts

| Script | What it does |
|---|---|
| `npm run dev` | Start with nodemon (auto-restart on save) |
| `npm start` | Start production server |