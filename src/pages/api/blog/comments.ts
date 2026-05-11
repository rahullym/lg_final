import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

export const prerender = false;

const MAX_BODY = 5000;
const MAX_NAME = 120;
const MAX_EMAIL = 200;
const MAX_WEBSITE = 300;

export const POST: APIRoute = async ({ request, redirect, clientAddress }) => {
  const form = await request.formData().catch(() => null);
  if (!form) return back(redirect, '/blog', 'Invalid submission');

  // Honeypot — bots fill every field; real browsers leave it blank.
  if (String(form.get('company') ?? '').trim() !== '') {
    return redirect('/blog?commented=1');
  }

  const slug = String(form.get('post_slug') ?? '').trim();
  const name = String(form.get('name') ?? '').trim().slice(0, MAX_NAME);
  const email = String(form.get('email') ?? '').trim().slice(0, MAX_EMAIL);
  const website = String(form.get('website') ?? '').trim().slice(0, MAX_WEBSITE) || null;
  const body = String(form.get('body') ?? '').trim().slice(0, MAX_BODY);

  if (!slug) return back(redirect, '/blog', 'Missing post reference');
  const backPath = `/blog/${slug}#comments`;

  if (!name) return back(redirect, backPath, 'Name is required');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return back(redirect, backPath, 'A valid email is required');
  }
  if (!body) return back(redirect, backPath, 'Comment is required');
  if (website && !/^https?:\/\//.test(website)) {
    return back(redirect, backPath, 'Website must start with http:// or https://');
  }

  // Confirm the post exists and is published.
  const { data: post } = await supabase
    .from('posts')
    .select('id, slug')
    .eq('slug', slug)
    .eq('draft', false)
    .maybeSingle();
  if (!post) return back(redirect, '/blog', 'That post no longer exists');

  // Hash the IP for crude rate-tracking without storing the raw address.
  const ip = clientAddress ?? '';
  const ip_hash = ip
    ? Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(ip))))
        .slice(0, 8)
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('')
    : null;

  const { error } = await supabase.from('comments').insert({
    post_id: post.id,
    post_slug: post.slug,
    name,
    email,
    website,
    body,
    approved: false,
    ip_hash,
  });
  if (error) return back(redirect, backPath, `Submission failed: ${error.message}`);

  return redirect(`${backPath}?commented=1`);
};

function back(
  redirect: (location: string, status?: 301 | 302 | 303 | 307 | 308) => Response,
  path: string,
  message: string,
) {
  const sep = path.includes('?') ? '&' : '?';
  return redirect(`${path}${sep}comment_error=${encodeURIComponent(message)}`);
}
