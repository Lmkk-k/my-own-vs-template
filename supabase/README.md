# 🗄️ Supabase — Database, Functions & Migrations

## First time setup

1. Install Supabase CLI (once only):
   `npm install -g supabase`

2. Login:
   `supabase login`

3. Link to your project:
   `supabase link --project-ref YOUR_PROJECT_REF`
   → Find ref in: Supabase dashboard → Project Settings → General

4. Push migrations:
   `supabase db push`

---

## Every time you change the database

1. Create a migration:
   `supabase migration new your_change_name`

2. Write your SQL in the file that appears in `migrations/`

3. Push it:
   `supabase db push`

---

## Folder Guide

| Folder | What goes here |
|---|---|
| `migrations/` | SQL files — one per database change |
| `functions/` | Edge functions (serverless) |
| `seed/` | Sample data for development |

---

## Useful commands

| Command | What it does |
|---|---|
| `supabase start` | Run Supabase locally |
| `supabase stop` | Stop local Supabase |
| `supabase db push` | Apply migrations to remote |
| `supabase db reset` | Wipe and rebuild locally with seed data |
| `supabase logs` | View project logs |

---

> ⚠️ Never run `supabase db reset` on production — dev only.