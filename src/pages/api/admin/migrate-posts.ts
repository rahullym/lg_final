import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { supabaseForUser } from '../../../lib/supabase';
import { slugify } from '../../../lib/slug';

export const prerender = false;

// One-shot migration: read existing markdown posts from the Astro
// content collection and upsert them into public.posts. Safe to re-run —
// on conflict (slug) the row is updated so content stays in sync.
export const POST: APIRoute = async ({ locals }) => {
  const token = locals.accessToken!;
  const client = supabaseForUser(token);

  const entries = await getCollection('posts');
  if (entries.length === 0) {
    return json({ ok: true, migrated: 0, skipped: 0, message: 'No markdown posts found.' });
  }

  let migrated = 0;
  const failures: { slug: string; message: string }[] = [];

  for (const entry of entries) {
    const slug = slugify(entry.data.permalink ?? entry.slug ?? entry.id);
    const payload = {
      slug,
      title: entry.data.title,
      excerpt: entry.data.excerpt ?? null,
      cover_image: entry.data.image ?? null,
      author: entry.data.author ?? 'Admin',
      publish_date: entry.data.date ?? null,
      category: entry.data.category ?? null,
      body: entry.body ?? '',
      draft: entry.data.draft ?? false,
    };

    const { error } = await client
      .from('posts')
      .upsert(payload, { onConflict: 'slug' });

    if (error) failures.push({ slug, message: error.message });
    else migrated++;
  }

  return json({
    ok: failures.length === 0,
    migrated,
    total: entries.length,
    failures,
  });
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
