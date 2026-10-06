-- Run this once in the Supabase SQL editor (Dashboard -> SQL Editor).
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  business_idea text,
  created_at timestamptz not null default now()
);

-- The API route writes with the service-role key, which bypasses RLS.
-- Enable RLS with no policies so the public (anon) key can never read or write this table.
alter table public.waitlist enable row level security;
