import type { APIRoute } from 'astro';
import { supabaseForUser } from '../../../../lib/supabase';
import { readNewsletterForm, getNewsletter, toRow } from '../../../../lib/newsletterCollection';
import { uniqueSlug } from '../../../../lib/eventCollection';
import { deleteFromBucket } from '../../../../lib/upload';

export const prerender = false;

export const PATCH: APIRoute = async ({ request, params, locals, redirect }) => {
  const id = String(params.id);
  const token = locals.accessToken!;
  const client = supabaseForUser(token);

  const { data: current } = await getNewsletter(client, id);
  if (!current) return redirect('/admin/newsletters?missing=1');

  const form = await request.formData().catch(() => null);
  if (!form) return redirect(`/admin/newsletters/${id}?error=${encodeURIComponent('Invalid form')}`);

  let input;
  try {
    input = await readNewsletterForm(form, token, {
      existingCover: current.cover,
      existingPdf: current.pdf,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Upload failed';
    return redirect(`/admin/newsletters/${id}?error=${encodeURIComponent(msg)}`);
  }

  if (!input.title) return redirect(`/admin/newsletters/${id}?error=${encodeURIComponent('Title is required')}`);
  if (!input.pdf) return redirect(`/admin/newsletters/${id}?error=${encodeURIComponent('PDF file is required')}`);

  input.slug = await uniqueSlug(client, 'newsletters', input.slug, id);

  const { error } = await client.from('newsletters').update(toRow(input)).eq('id', id);
  if (error) return redirect(`/admin/newsletters/${id}?error=${encodeURIComponent(error.message)}`);

  const toRemove: string[] = [];
  if (current.cover && current.cover !== input.cover) toRemove.push(current.cover);
  if (current.pdf && current.pdf !== input.pdf) toRemove.push(current.pdf);
  if (toRemove.length > 0) await deleteFromBucket(toRemove, token);

  return redirect(`/admin/newsletters/${id}?saved=1`);
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

  const { data: row } = await getNewsletter(client, id);

  const { error } = await client.from('newsletters').delete().eq('id', id);
  if (error) return redirect(`/admin/newsletters/${id}?error=${encodeURIComponent(error.message)}`);

  if (row) {
    const urls: string[] = [];
    if (row.cover) urls.push(row.cover);
    if (row.pdf) urls.push(row.pdf);
    if (urls.length > 0) await deleteFromBucket(urls, token);
  }

  return redirect('/admin/newsletters?deleted=1');
};
