import type { APIRoute } from 'astro';
import { supabaseForUser } from '../../../../lib/supabase';
import { readNewsletterForm, toRow } from '../../../../lib/newsletterCollection';
import { uniqueSlug } from '../../../../lib/eventCollection';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals, redirect }) => {
  const token = locals.accessToken!;
  const client = supabaseForUser(token);

  const form = await request.formData().catch(() => null);
  if (!form) return back(redirect, 'Invalid form');

  let input;
  try {
    input = await readNewsletterForm(form, token);
  } catch (err) {
    return back(redirect, err instanceof Error ? err.message : 'Upload failed');
  }

  if (!input.title) return back(redirect, 'Title is required');
  if (!input.pdf) return back(redirect, 'PDF file is required');

  input.slug = await uniqueSlug(client, 'newsletters', input.slug);

  const { error } = await client.from('newsletters').insert(toRow(input));
  if (error) return back(redirect, error.message);
  return redirect('/admin/newsletters?created=1');
};

function back(
  redirect: (location: string, status?: 301 | 302 | 303 | 307 | 308) => Response,
  message: string,
) {
  return redirect(`/admin/newsletters/new?error=${encodeURIComponent(message)}`);
}
