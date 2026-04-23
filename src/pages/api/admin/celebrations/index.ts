import type { APIRoute } from 'astro';
import { supabaseForUser } from '../../../../lib/supabase';
import { readEventForm } from '../../../../lib/eventCollection';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals, redirect }) => {
  const token = locals.accessToken!;
  const client = supabaseForUser(token);

  const form = await request.formData().catch(() => null);
  if (!form) return back(redirect, 'Invalid form');

  let input;
  try {
    input = await readEventForm(form, token);
  } catch (err) {
    return back(redirect, err instanceof Error ? err.message : 'Upload failed');
  }

  if (!input.title) return back(redirect, 'Title is required');
  if (!input.year) return back(redirect, 'Year is required');
  if (!input.cover) return back(redirect, 'Cover image is required');

  const { error } = await client
    .from('celebrations')
    .insert(input);
  if (error) {
    const msg = error.code === '23505' || error.message.includes('celebrations_slug_key')
      ? `A celebration with slug "${input.slug}" already exists.`
      : error.message;
    return back(redirect, msg);
  }
  return redirect('/admin/celebrations?created=1');
};

function back(
  redirect: (location: string, status?: 301 | 302 | 303 | 307 | 308) => Response,
  message: string,
) {
  return redirect(`/admin/celebrations/new?error=${encodeURIComponent(message)}`);
}
