import type { APIRoute } from 'astro';
import { supabaseForUser } from '../../../../lib/supabase';
import { readEventForm, uniqueSlug, isUnknownColumnError } from '../../../../lib/eventCollection';

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

  input.slug = await uniqueSlug(client, 'seminars', input.slug);

  const video_url = String(form.get('video_url') ?? '').trim() || null;
  const instagram_url = String(form.get('instagram_url') ?? '').trim() || null;

  let { error } = await client.from('seminars').insert({ ...input, video_url, instagram_url });
  if (isUnknownColumnError(error, 'instagram_url')) {
    ({ error } = await client.from('seminars').insert({ ...input, video_url }));
    if (!error) return redirect('/admin/seminars?created=1&nomigration=1');
  }
  if (error) return back(redirect, error.message);
  return redirect('/admin/seminars?created=1');
};

function back(
  redirect: (location: string, status?: 301 | 302 | 303 | 307 | 308) => Response,
  message: string,
) {
  return redirect(`/admin/seminars/new?error=${encodeURIComponent(message)}`);
}
