import type { APIRoute } from 'astro';
import { supabaseForUser } from '../../../../lib/supabase';
import { readEventForm, getEvent, uniqueSlug } from '../../../../lib/eventCollection';

export const prerender = false;

export const PATCH: APIRoute = async ({ request, params, locals, redirect }) => {
  const id = String(params.id);
  const token = locals.accessToken!;
  const client = supabaseForUser(token);

  const { data: current } = await getEvent(client, 'seminars', id);
  if (!current) return redirect('/admin/seminars?missing=1');

  const form = await request.formData().catch(() => null);
  if (!form) return redirect(`/admin/seminars/${id}?error=${encodeURIComponent('Invalid form')}`);

  let input;
  try {
    input = await readEventForm(form, token, {
      existingCover: current.cover,
      existingGallery: Array.isArray(current.gallery) ? current.gallery : [],
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Upload failed';
    return redirect(`/admin/seminars/${id}?error=${encodeURIComponent(msg)}`);
  }

  if (!input.title || !input.year) {
    return redirect(`/admin/seminars/${id}?error=${encodeURIComponent('Title and year are required')}`);
  }

  input.slug = await uniqueSlug(client, 'seminars', input.slug, id);

  const { error } = await client.from('seminars').update(input).eq('id', id);
  if (error) return redirect(`/admin/seminars/${id}?error=${encodeURIComponent(error.message)}`);
  return redirect(`/admin/seminars/${id}?saved=1`);
};

export const POST: APIRoute = async (ctx) => {
  const form = await ctx.request.clone().formData().catch(() => null);
  const method = String(form?.get('_method') ?? '').toUpperCase();
  if (method === 'DELETE') return DELETE(ctx);
  return PATCH(ctx);
};

export const DELETE: APIRoute = async ({ params, locals, redirect }) => {
  const id = String(params.id);
  const client = supabaseForUser(locals.accessToken!);
  const { error } = await client.from('seminars').delete().eq('id', id);
  if (error) return redirect(`/admin/seminars/${id}?error=${encodeURIComponent(error.message)}`);
  return redirect('/admin/seminars?deleted=1');
};
