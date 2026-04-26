# 🎨 Frontend — React + Vite + Tailwind + Supabase

## First time setup

1. Install dependencies:
   `npm install`

2. Copy and fill env file:
   `cp .env.example .env`
   - VITE_SUPABASE_URL → from Supabase dashboard → Project Settings → API
   - VITE_SUPABASE_ANON_KEY → from Supabase dashboard → Project Settings → API

3. Start the dev server:
   `npm run dev`
   → Opens at http://localhost:5173

---

## Every time you open the project

`npm run dev`

---

## Folder Guide

| Folder | What goes here |
|---|---|
| `src/pages/` | One file per page/screen |
| `src/components/ui/` | Reusable components — Button, Input, Modal, Table, etc. |
| `src/components/layout/` | Navbar, Sidebar, Footer, PageWrapper |
| `src/hooks/` | Custom React hooks |
| `src/context/` | Global state — Auth, Theme, etc. |
| `src/lib/` | Supabase client setup |
| `src/services/` | All Supabase/API calls grouped by feature |
| `src/store/` | Zustand global store |
| `src/styles/` | Global CSS and variables |
| `src/utils/` | Helper functions |

---

## Adding a new page

1. Create `src/pages/MyPage.jsx`
2. Add the route in `src/App.jsx`
3. Add a link in `src/components/layout/Navbar.jsx`

## Adding a new Supabase call

Create a file in `src/services/`:
```js
import { supabase } from '../lib/supabaseClient'

export const getItems = async () => {
  const { data, error } = await supabase.from('items').select('*')
  if (error) throw error
  return data
}
```

---

## Available scripts

| Script | What it does |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |