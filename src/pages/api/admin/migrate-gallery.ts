import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { supabaseForUser } from '../../../lib/supabase';

export const prerender = false;

// Upsert-by-image-URL so the import is idempotent when the same file
// appears more than once. First run: unique constraint isn't on image
// so we do a select-then-insert to avoid duplicates.
export const POST: APIRoute = async ({ locals }) => {
  const client = supabaseForUser(locals.accessToken!);

  const entries = await getCollection('infrastructure-gallery');
  if (entries.length === 0) {
    return json({ ok: true, migrated: 0, total: 0 });
  }

  // Pull existing image URLs once so we can skip rows already imported.
  const { data: existing } = await client
    .from('infrastructure_gallery')
    .select('image');
  const seen = new Set((existing ?? []).map((r: { image: string }) => r.image));

  let migrated = 0;
  const failures: { id: string; message: string }[] = [];

  for (const entry of entries) {
    const image = entry.data.image;
    if (seen.has(image)) continue;
    const payload = {
      alt: entry.data.alt,
      image,
      order: entry.data.order ?? 0,
    };
    const { error } = await client.from('infrastructure_gallery').insert(payload);
    if (error) failures.push({ id: entry.id, message: error.message });
    else migrated++;
  }

  return json({
    ok: failures.length === 0,
    migrated,
    total: entries.length,
    skipped: entries.length - migrated - failures.length,
    failures,
  });
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
