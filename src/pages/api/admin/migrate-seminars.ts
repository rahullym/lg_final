import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { supabaseForUser } from '../../../lib/supabase';
import { slugify } from '../../../lib/slug';

export const prerender = false;

export const POST: APIRoute = async ({ locals }) => {
  const client = supabaseForUser(locals.accessToken!);
  const entries = await getCollection('seminars');
  if (entries.length === 0) return json({ ok: true, migrated: 0, total: 0 });

  let migrated = 0;
  const failures: { slug: string; message: string }[] = [];

  for (const entry of entries) {
    const slug = slugify(entry.id.replace(/\.md$/, ''));
    const payload = {
      slug,
      title: entry.data.title,
      year: entry.data.year,
      cover: entry.data.cover ?? null,
      gallery: entry.data.gallery ?? [],
      order: entry.data.order ?? 0,
      body: entry.body ?? '',
      draft: entry.data.draft ?? false,
    };
    const { error } = await client.from('seminars').upsert(payload, { onConflict: 'slug' });
    if (error) failures.push({ slug, message: error.message });
    else migrated++;
  }

  return json({ ok: failures.length === 0, migrated, total: entries.length, failures });
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
