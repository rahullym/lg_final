import type { APIRoute } from 'astro';
import { supabaseForUser } from '../../../../lib/supabase';
import { readEventForm, getEvent } from '../../../../lib/eventCollection';

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

  const { error } = await client
    .from('celebrations')
    .update(input)
    .eq('id', id);
  if (error) {
    const msg = error.code === '23505' || error.message.includes('celebrations_slug_key')
      ? `Another celebration already uses the slug "${input.slug}".`
      : error.message;
    return redirect(`/admin/celebrations/${id}?error=${encodeURIComponent(msg)}`);
  }
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
  const client = supabaseForUser(locals.accessToken!);
  const { error } = await client.from('celebrations').delete().eq('id', id);
  if (error) return redirect(`/admin/celebrations/${id}?error=${encodeURIComponent(error.message)}`);
  return redirect('/admin/celebrations?deleted=1');
};
