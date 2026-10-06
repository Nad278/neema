# Origo

Start and run a business with AI: idea to first sale in minutes, then a coach that helps you grow.

## Vision
Competing on outcomes, not tools. A person describes a business in one sentence; Origo sets up the shop, POS, accounts and a 30-day launch plan, then an AI coach runs the boring parts with them. Revenue comes mainly from payment fees, so the entry plan can stay free or very cheap.

## Stack
- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- Supabase (auth, database, storage) — to be added
- Claude API for the AI layer, called server-side only — to be added

## Roadmap
1. [x] Foundation: Next.js + Tailwind app
2. [x] Landing page + waitlist form (saving needs Supabase set up, see below)
   - Market research: `docs/market-research.md`
3. [ ] Setup Wizard prototype (one sentence in, business plan out)
4. [ ] Shop/site generator
5. [ ] Simple POS (products, sales, receipts, daily totals)
6. [ ] Payments and basic profit view
7. [ ] First-Sale Mission and mini-courses

## Develop
```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Waitlist setup (Supabase)
1. Create a free project at supabase.com.
2. In the SQL editor, run `supabase/waitlist.sql`.
3. Copy `.env.example` to `.env.local` and fill in `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` (Project Settings, API).
4. Restart `npm run dev`. The form on the landing page now saves emails.

Without these variables the form shows "The waitlist isn't open yet" instead of pretending to save.
