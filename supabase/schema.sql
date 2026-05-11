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
  video_url     text,
  draft         boolean not null default false,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);
alter table public.posts add column if not exists video_url text;

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
  video_url    text,
  draft        boolean not null default false,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);
alter table public.seminars add column if not exists video_url text;

create table if not exists public.newsletters (
  id           uuid primary key default gen_random_uuid(),
  slug         text not null unique,
  title        text not null,
  cover        text,
  pdf          text not null,
  issue_date   date,
  description  text,
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

create table if not exists public.jobs (
  id               uuid primary key default gen_random_uuid(),
  slug             text not null unique,
  title            text not null,
  department       text,
  location         text,
  locations        text[] not null default '{}'::text[],
  employment_type  text,
  experience       text,
  description      text,
  responsibilities text[] not null default '{}'::text[],
  requirements     text[] not null default '{}'::text[],
  apply_email      text,
  apply_url        text,
  apply_deadline   date,
  "order"          int not null default 0,
  draft            boolean not null default false,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);
alter table public.jobs add column if not exists locations text[] not null default '{}'::text[];
alter table public.jobs add column if not exists responsibilities text[] not null default '{}'::text[];
alter table public.jobs add column if not exists requirements text[] not null default '{}'::text[];

create table if not exists public.applications (
  id                  uuid primary key default gen_random_uuid(),
  job_id              uuid references public.jobs(id) on delete set null,
  job_title           text,
  job_slug            text,
  name                text not null,
  email               text not null,
  phone               text,
  preferred_location  text,
  experience          text,
  cover_note          text,
  cv_path             text not null,
  cv_filename         text,
  ip_hash             text,
  created_at          timestamptz not null default now()
);
alter table public.applications add column if not exists preferred_location text;
alter table public.applications add column if not exists experience text;
create index if not exists applications_job_id_created_idx
  on public.applications (job_id, created_at desc);
create index if not exists applications_created_idx
  on public.applications (created_at desc);

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
  for t in select unnest(array['posts','celebrations','seminars','newsletters','infrastructure_features','jobs']) loop
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
alter table public.newsletters enable row level security;
alter table public.infrastructure_features enable row level security;
alter table public.infrastructure_gallery enable row level security;
alter table public.jobs enable row level security;
alter table public.applications enable row level security;

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

-- newsletters
drop policy if exists "public read non-draft newsletters" on public.newsletters;
create policy "public read non-draft newsletters" on public.newsletters
  for select using (draft = false);
drop policy if exists "auth read all newsletters" on public.newsletters;
create policy "auth read all newsletters" on public.newsletters
  for select to authenticated using (true);
drop policy if exists "auth insert newsletters" on public.newsletters;
create policy "auth insert newsletters" on public.newsletters
  for insert to authenticated with check (true);
drop policy if exists "auth update newsletters" on public.newsletters;
create policy "auth update newsletters" on public.newsletters
  for update to authenticated using (true) with check (true);
drop policy if exists "auth delete newsletters" on public.newsletters;
create policy "auth delete newsletters" on public.newsletters
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

-- jobs
drop policy if exists "public read non-draft jobs" on public.jobs;
create policy "public read non-draft jobs" on public.jobs
  for select using (draft = false);
drop policy if exists "auth read all jobs" on public.jobs;
create policy "auth read all jobs" on public.jobs
  for select to authenticated using (true);
drop policy if exists "auth insert jobs" on public.jobs;
create policy "auth insert jobs" on public.jobs
  for insert to authenticated with check (true);
drop policy if exists "auth update jobs" on public.jobs;
create policy "auth update jobs" on public.jobs
  for update to authenticated using (true) with check (true);
drop policy if exists "auth delete jobs" on public.jobs;
create policy "auth delete jobs" on public.jobs
  for delete to authenticated using (true);

-- applications: candidates (anon) can submit; only admins can read/manage
drop policy if exists "anon insert applications" on public.applications;
create policy "anon insert applications" on public.applications
  for insert to anon with check (true);
drop policy if exists "auth read applications" on public.applications;
create policy "auth read applications" on public.applications
  for select to authenticated using (true);
drop policy if exists "auth update applications" on public.applications;
create policy "auth update applications" on public.applications
  for update to authenticated using (true) with check (true);
drop policy if exists "auth delete applications" on public.applications;
create policy "auth delete applications" on public.applications
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
-- 3. Storage buckets + policies
-- ============================================================
-- These INSERTs create the buckets if they don't exist; safe to re-run.
-- lg_backend → public (covers, gallery, post images).
-- lg_cvs     → PRIVATE (candidate CV uploads — PII; reads are admin-only
--              via short-lived signed URLs).

insert into storage.buckets (id, name, public)
values ('lg_backend', 'lg_backend', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('lg_cvs', 'lg_cvs', false)
on conflict (id) do nothing;

-- lg_backend (public reads, authenticated writes)
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

-- lg_cvs (PII): anyone can write (candidates submit), only admins can read/delete.
-- Public reads are NOT granted — admins fetch via short-lived signed URLs.
drop policy if exists "anon insert cvs" on storage.objects;
create policy "anon insert cvs" on storage.objects
  for insert to anon with check (bucket_id = 'lg_cvs');

drop policy if exists "authenticated read cvs" on storage.objects;
create policy "authenticated read cvs" on storage.objects
  for select to authenticated using (bucket_id = 'lg_cvs');

drop policy if exists "authenticated delete cvs" on storage.objects;
create policy "authenticated delete cvs" on storage.objects
  for delete to authenticated using (bucket_id = 'lg_cvs');
