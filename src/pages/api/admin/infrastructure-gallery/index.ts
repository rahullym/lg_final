import type { APIRoute } from 'astro';
import { supabaseForUser } from '../../../../lib/supabase';
import { uploadImage } from '../../../../lib/upload';

export const prerender = false;

export const GET: APIRoute = async ({ locals }) => {
  const client = supabaseForUser(locals.accessToken!);
  const { data, error } = await client
    .from('infrastructure_gallery')
    .select('id, alt, image, "order", created_at')
    .order('order', { ascending: true })
    .order('created_at', { ascending: true });
  if (error) return json({ error: error.message }, 500);
  return json({ items: data });
};

export const POST: APIRoute = async ({ request, locals, redirect }) => {
  const token = locals.accessToken!;
  const client = supabaseForUser(token);

  const form = await request.formData().catch(() => null);
  if (!form) return back(redirect, 'Invalid form');

  const alt = String(form.get('alt') ?? '').trim();
  const orderRaw = String(form.get('order') ?? '').trim();
  const order = orderRaw ? Number(orderRaw) : 0;

  const file = form.get('image_file');
  const imageUrlInput = String(form.get('image') ?? '').trim();

  if (!alt) return back(redirect, 'Alt text is required');

  let image = imageUrlInput;
  if (file instanceof File && file.size > 0) {
    try {
      image = await uploadImage(file, token);
    } catch (err) {
      return back(redirect, err instanceof Error ? err.message : 'Upload failed');
    }
  }
  if (!image) return back(redirect, 'Image file or URL is required');

  const { error } = await client
    .from('infrastructure_gallery')
    .insert({ alt, image, order: Number.isFinite(order) ? order : 0 });
  if (error) return back(redirect, error.message);

  return redirect('/admin/infrastructure-gallery?created=1');
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function back(
  redirect: (location: string, status?: 301 | 302 | 303 | 307 | 308) => Response,
  message: string,
) {
  return redirect(`/admin/infrastructure-gallery/new?error=${encodeURIComponent(message)}`);
}
