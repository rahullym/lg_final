import type { APIRoute } from 'astro';
import { supabaseForUser } from '../../../../lib/supabase';
import { uploadImage } from '../../../../lib/upload';

export const prerender = false;

export const PATCH: APIRoute = async ({ request, params, locals, redirect }) => {
  const id = String(params.id);
  const token = locals.accessToken!;
  const client = supabaseForUser(token);

  const form = await request.formData().catch(() => null);
  if (!form) return redirect(`/admin/infrastructure-gallery/${id}?error=${encodeURIComponent('Invalid form')}`);

  const alt = String(form.get('alt') ?? '').trim();
  const orderRaw = String(form.get('order') ?? '').trim();
  const order = orderRaw ? Number(orderRaw) : 0;
  let image = String(form.get('image') ?? '').trim();

  const file = form.get('image_file');
  if (file instanceof File && file.size > 0) {
    try {
      image = await uploadImage(file, token);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Upload failed';
      return redirect(`/admin/infrastructure-gallery/${id}?error=${encodeURIComponent(msg)}`);
    }
  }
  if (!alt || !image) {
    return redirect(`/admin/infrastructure-gallery/${id}?error=${encodeURIComponent('Alt and image are required')}`);
  }

  const { error } = await client
    .from('infrastructure_gallery')
    .update({ alt, image, order: Number.isFinite(order) ? order : 0 })
    .eq('id', id);
  if (error) return redirect(`/admin/infrastructure-gallery/${id}?error=${encodeURIComponent(error.message)}`);

  return redirect(`/admin/infrastructure-gallery/${id}?saved=1`);
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
  const { error } = await client.from('infrastructure_gallery').delete().eq('id', id);
  if (error) return redirect(`/admin/infrastructure-gallery/${id}?error=${encodeURIComponent(error.message)}`);
  return redirect('/admin/infrastructure-gallery?deleted=1');
};
