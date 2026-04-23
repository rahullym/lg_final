import type { APIRoute } from 'astro';
import { supabaseForUser } from '../../../../lib/supabase';
import { readEventForm, getEvent, uniqueSlug } from '../../../../lib/eventCollection';
import { deleteFromBucket } from '../../../../lib/upload';

export const prerender = false;

export const PATCH: APIRoute = async ({ request, params, locals, redirect }) => {
  const id = String(params.id);
  const token = locals.accessToken!;
  const client = supabaseForUser(token);

  const { data: current } = await getEvent(client, 'celebrations', id);
  if (!current) return redirect('/admin/celebrations?missing=1');

  const form = await request.formData().catch(() => null);
  if (!form) return redirect(`/admin/celebrations/${id}?error=${encodeURIComponent('Invalid form')}`);

  let input;
  try {
    input = await readEventForm(form, token, {
      existingCover: current.cover,
      existingGallery: Array.isArray(current.gallery) ? current.gallery : [],
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Upload failed';
    return redirect(`/admin/celebrations/${id}?error=${encodeURIComponent(msg)}`);
  }

  if (!input.title || !input.year) {
    return redirect(`/admin/celebrations/${id}?error=${encodeURIComponent('Title and year are required')}`);
  }

  input.slug = await uniqueSlug(client, 'celebrations', input.slug, id);

  const { error } = await client.from('celebrations').update(input).eq('id', id);
  if (error) return redirect(`/admin/celebrations/${id}?error=${encodeURIComponent(error.message)}`);

  // Hard-delete any images the admin removed: old cover if replaced, plus
  // any old gallery URLs that are no longer in the saved array.
  const toRemove: string[] = [];
  if (current.cover && current.cover !== input.cover) toRemove.push(current.cover);
  const oldGallery: string[] = Array.isArray(current.gallery) ? current.gallery : [];
  const newGallery = new Set(input.gallery);
  for (const url of oldGallery) if (!newGallery.has(url)) toRemove.push(url);
  if (toRemove.length > 0) await deleteFromBucket(toRemove, token);

  return redirect(`/admin/celebrations/${id}?saved=1`);
};

export const POST: APIRoute = async (ctx) => {
  const form = await ctx.request.clone().formData().catch(() => null);
  const method = String(form?.get('_method') ?? '').toUpperCase();
  if (method === 'DELETE') return DELETE(ctx);
  return PATCH(ctx);
};

export const DELETE: APIRoute = async ({ params, locals, redirect }) => {
  const id = String(params.id);
  const token = locals.accessToken!;
  const client = supabaseForUser(token);

  // Fetch the row first so we can also wipe its files from storage.
  const { data: row } = await getEvent(client, 'celebrations', id);

  const { error } = await client.from('celebrations').delete().eq('id', id);
  if (error) return redirect(`/admin/celebrations/${id}?error=${encodeURIComponent(error.message)}`);

  if (row) {
    const urls: string[] = [];
    if (row.cover) urls.push(row.cover);
    if (Array.isArray(row.gallery)) urls.push(...row.gallery);
    if (urls.length > 0) await deleteFromBucket(urls, token);
  }

  return redirect('/admin/celebrations?deleted=1');
};
