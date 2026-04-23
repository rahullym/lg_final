-- Logistics Gurukul — Supabase schema.
-- Run this in the Supabase SQL editor: Dashboard → SQL → New query → paste → Run.
-- Safe to re-run: tables use CREATE TABLE IF NOT EXISTS; policies are
-- dropped before being (re)created because Postgres doesn't support
-- CREATE POLICY IF NOT EXISTS.

-- ============================================================
-- 1. Tables
-- ============================================================

create table if not exists public.posts (
  id            uuid primary key default gen_random_uuid(),
  slug          text not null unique,
  title         text not null,
  excerpt       text,
  cover_image   text,
  author        text default 'Admin',
  publish_date  text,
  category      text,
  body          text,
  draft         boolean not null default false,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create table if not exists public.celebrations (
  id           uuid primary key default gen_random_uuid(),
  slug         text not null unique,
  title        text not null,
  year         text not null,
  cover        text,
  gallery      jsonb not null default '[]'::jsonb,
  "order"      int not null default 0,
  body         text,
  draft        boolean not null default false,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create table if not exists public.seminars (
  id           uuid primary key default gen_random_uuid(),
  slug         text not null unique,
  title        text not null,
  year         text not null,
  cover        text,
  gallery      jsonb not null default '[]'::jsonb,
  "order"      int not null default 0,
  body         text,
  draft        boolean not null default false,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create table if not exists public.infrastructure_features (
  id           uuid primary key default gen_random_uuid(),
  slug         text not null unique,
  title        text not null,
  description  text not null,
  image        text,
  align        text not null default 'left',
  theme        text not null default 'light',
  points       jsonb not null default '[]'::jsonb,
  "order"      int not null default 0,
  body         text,
  draft        boolean not null default false,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create table if not exists public.infrastructure_gallery (
  id           uuid primary key default gen_random_uuid(),
  alt          text not null,
  image        text not null,
  "order"      int not null default 0,
  created_at   timestamptz not null default now()
);

-- auto-update updated_at on row change
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;

do $$
declare t text;
begin
  for t in select unnest(array['posts','celebrations','seminars','infrastructure_features']) loop
    execute format('drop trigger if exists %I_set_updated_at on public.%I', t, t);
    execute format('create trigger %I_set_updated_at before update on public.%I for each row execute function public.set_updated_at()', t, t);
  end loop;
end $$;

-- ============================================================
-- 2. Row Level Security — public reads, authenticated writes
-- ============================================================

alter table public.posts enable row level security;
alter table public.celebrations enable row level security;
alter table public.seminars enable row level security;
alter table public.infrastructure_features enable row level security;
alter table public.infrastructure_gallery enable row level security;

-- posts
drop policy if exists "public read non-draft posts" on public.posts;
create policy "public read non-draft posts" on public.posts
  for select using (draft = false);
drop policy if exists "auth read all posts" on public.posts;
create policy "auth read all posts" on public.posts
  for select to authenticated using (true);
drop policy if exists "auth insert posts" on public.posts;
create policy "auth insert posts" on public.posts
  for insert to authenticated with check (true);
drop policy if exists "auth update posts" on public.posts;
create policy "auth update posts" on public.posts
  for update to authenticated using (true) with check (true);
drop policy if exists "auth delete posts" on public.posts;
create policy "auth delete posts" on public.posts
  for delete to authenticated using (true);

-- celebrations
drop policy if exists "public read non-draft celebrations" on public.celebrations;
create policy "public read non-draft celebrations" on public.celebrations
  for select using (draft = false);
drop policy if exists "auth read all celebrations" on public.celebrations;
create policy "auth read all celebrations" on public.celebrations
  for select to authenticated using (true);
drop policy if exists "auth insert celebrations" on public.celebrations;
create policy "auth insert celebrations" on public.celebrations
  for insert to authenticated with check (true);
drop policy if exists "auth update celebrations" on public.celebrations;
create policy "auth update celebrations" on public.celebrations
  for update to authenticated using (true) with check (true);
drop policy if exists "auth delete celebrations" on public.celebrations;
create policy "auth delete celebrations" on public.celebrations
  for delete to authenticated using (true);

-- seminars
drop policy if exists "public read non-draft seminars" on public.seminars;
create policy "public read non-draft seminars" on public.seminars
  for select using (draft = false);
drop policy if exists "auth read all seminars" on public.seminars;
create policy "auth read all seminars" on public.seminars
  for select to authenticated using (true);
drop policy if exists "auth insert seminars" on public.seminars;
create policy "auth insert seminars" on public.seminars
  for insert to authenticated with check (true);
drop policy if exists "auth update seminars" on public.seminars;
create policy "auth update seminars" on public.seminars
  for update to authenticated using (true) with check (true);
drop policy if exists "auth delete seminars" on public.seminars;
create policy "auth delete seminars" on public.seminars
  for delete to authenticated using (true);

-- infrastructure_features
drop policy if exists "public read non-draft features" on public.infrastructure_features;
create policy "public read non-draft features" on public.infrastructure_features
  for select using (draft = false);
drop policy if exists "auth read all features" on public.infrastructure_features;
create policy "auth read all features" on public.infrastructure_features
  for select to authenticated using (true);
drop policy if exists "auth insert features" on public.infrastructure_features;
create policy "auth insert features" on public.infrastructure_features
  for insert to authenticated with check (true);
drop policy if exists "auth update features" on public.infrastructure_features;
create policy "auth update features" on public.infrastructure_features
  for update to authenticated using (true) with check (true);
drop policy if exists "auth delete features" on public.infrastructure_features;
create policy "auth delete features" on public.infrastructure_features
  for delete to authenticated using (true);

-- infrastructure_gallery (no drafts; public reads everything)
drop policy if exists "public read gallery" on public.infrastructure_gallery;
create policy "public read gallery" on public.infrastructure_gallery
  for select using (true);
drop policy if exists "auth insert gallery" on public.infrastructure_gallery;
create policy "auth insert gallery" on public.infrastructure_gallery
  for insert to authenticated with check (true);
drop policy if exists "auth update gallery" on public.infrastructure_gallery;
create policy "auth update gallery" on public.infrastructure_gallery
  for update to authenticated using (true) with check (true);
drop policy if exists "auth delete gallery" on public.infrastructure_gallery;
create policy "auth delete gallery" on public.infrastructure_gallery
  for delete to authenticated using (true);

-- ============================================================
-- 3. Storage bucket policies
-- ============================================================
-- First create the bucket in the Dashboard: Storage → New bucket
--   name:          lg_backend
--   public bucket: YES
-- If you use a different bucket name, update PUBLIC_SUPABASE_BUCKET in
-- .env to match AND change 'lg_backend' below accordingly.

drop policy if exists "public read uploads" on storage.objects;
create policy "public read uploads" on storage.objects
  for select using (bucket_id = 'lg_backend');

drop policy if exists "authenticated insert uploads" on storage.objects;
create policy "authenticated insert uploads" on storage.objects
  for insert to authenticated with check (bucket_id = 'lg_backend');

drop policy if exists "authenticated update uploads" on storage.objects;
create policy "authenticated update uploads" on storage.objects
  for update to authenticated using (bucket_id = 'lg_backend');

drop policy if exists "authenticated delete uploads" on storage.objects;
create policy "authenticated delete uploads" on storage.objects
  for delete to authenticated using (bucket_id = 'lg_backend');
