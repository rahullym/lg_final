import type { APIRoute } from 'astro';
import { supabaseForUser } from '../../../../lib/supabase';
import { uploadImage } from '../../../../lib/upload';
import { slugify } from '../../../../lib/slug';

export const prerender = false;

export const PATCH: APIRoute = async ({ request, params, locals, redirect }) => {
  const id = String(params.id);
  const token = locals.accessToken!;
  const client = supabaseForUser(token);

  const form = await request.formData().catch(() => null);
  if (!form) return redirect(`/admin/posts/${id}?error=${encodeURIComponent('Invalid form data')}`);

  const title = String(form.get('title') ?? '').trim();
  if (!title) return redirect(`/admin/posts/${id}?error=${encodeURIComponent('Title is required')}`);

  const slug = (String(form.get('slug') ?? '').trim() || slugify(title));
  const excerpt = String(form.get('excerpt') ?? '').trim() || null;
  const author = String(form.get('author') ?? 'Admin').trim();
  const publish_date = String(form.get('publish_date') ?? '').trim() || null;
  const category = String(form.get('category') ?? '').trim() || null;
  const body = String(form.get('body') ?? '');
  const draft = form.get('draft') === 'on';
  let cover_image: string | null = String(form.get('cover_image') ?? '').trim() || null;

  const coverFile = form.get('cover_image_file');
  if (coverFile instanceof File && coverFile.size > 0) {
    try {
      cover_image = await uploadImage(coverFile, token);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Upload failed';
      return redirect(`/admin/posts/${id}?error=${encodeURIComponent(msg)}`);
    }
  }

  const { error } = await client
    .from('posts')
    .update({ slug, title, excerpt, cover_image, author, publish_date, category, body, draft })
    .eq('id', id);

  if (error) {
    const msg = error.code === '23505' || error.message.includes('posts_slug_key')
      ? `Another post already uses the slug "${slug}". Pick a different one.`
      : error.message;
    return redirect(`/admin/posts/${id}?error=${encodeURIComponent(msg)}`);
  }

  return redirect(`/admin/posts/${id}?saved=1`);
};

// Browsers can't send PATCH from a form, so accept POST with a _method override.
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
  const { error } = await client.from('posts').delete().eq('id', id);
  if (error) return redirect(`/admin/posts/${id}?error=${encodeURIComponent(error.message)}`);
  return redirect('/admin/posts?deleted=1');
};
