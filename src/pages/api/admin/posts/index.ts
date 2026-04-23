import type { APIRoute } from 'astro';
import { supabaseForUser } from '../../../../lib/supabase';
import { uploadImage } from '../../../../lib/upload';
import { slugify } from '../../../../lib/slug';

export const prerender = false;

export const GET: APIRoute = async ({ locals }) => {
  const token = locals.accessToken!;
  const client = supabaseForUser(token);
  const { data, error } = await client
    .from('posts')
    .select('id, slug, title, category, publish_date, draft, cover_image, updated_at')
    .order('updated_at', { ascending: false });
  if (error) {
    return json({ error: error.message }, 500);
  }
  return json({ posts: data });
};

export const POST: APIRoute = async ({ request, locals, redirect }) => {
  const token = locals.accessToken!;
  const client = supabaseForUser(token);

  const form = await request.formData().catch(() => null);
  if (!form) return json({ error: 'Invalid form data' }, 400);

  const title = String(form.get('title') ?? '').trim();
  if (!title) return redirectWithError(redirect, '/admin/posts/new', 'Title is required');

  let slug = String(form.get('slug') ?? '').trim();
  if (!slug) slug = slugify(title);

  const excerpt = String(form.get('excerpt') ?? '').trim() || null;
  const author = String(form.get('author') ?? 'Admin').trim();
  const publish_date = String(form.get('publish_date') ?? '').trim() || null;
  const category = String(form.get('category') ?? '').trim() || null;
  const body = String(form.get('body') ?? '');
  const draft = form.get('draft') === 'on';

  // Optional cover image upload.
  const coverFile = form.get('cover_image_file');
  let cover_image: string | null = String(form.get('cover_image') ?? '').trim() || null;
  if (coverFile instanceof File && coverFile.size > 0) {
    try {
      cover_image = await uploadImage(coverFile, token);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Upload failed';
      return redirectWithError(redirect, '/admin/posts/new', msg);
    }
  }

  const { error } = await client
    .from('posts')
    .insert({ slug, title, excerpt, cover_image, author, publish_date, category, body, draft })
    .select('id')
    .single();

  if (error) {
    const msg = isUniqueSlugError(error)
      ? `A post with slug "${slug}" already exists. Edit that post, or choose a different slug.`
      : error.message;
    return redirectWithError(redirect, '/admin/posts/new', msg);
  }

  return redirect('/admin/posts?created=1');
};

function isUniqueSlugError(err: { code?: string; message?: string }): boolean {
  // Postgres unique_violation is 23505; PostgREST exposes it as `code`.
  if (err.code === '23505') return true;
  return typeof err.message === 'string' && err.message.includes('posts_slug_key');
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function redirectWithError(
  redirect: (location: string, status?: 301 | 302 | 303 | 307 | 308) => Response,
  path: string,
  message: string,
) {
  return redirect(`${path}?error=${encodeURIComponent(message)}`);
}
