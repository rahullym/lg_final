import type { APIRoute } from 'astro';
import { supabaseForUser } from '../../../../lib/supabase';

export const prerender = false;

const CV_BUCKET = 'lg_cvs';

export const POST: APIRoute = async (ctx) => {
  const form = await ctx.request.clone().formData().catch(() => null);
  const method = String(form?.get('_method') ?? '').toUpperCase();
  if (method === 'DELETE') return DELETE(ctx);
  return new Response('Method Not Allowed', { status: 405 });
};

export const DELETE: APIRoute = async ({ params, locals, redirect }) => {
  const id = String(params.id);
  const token = locals.accessToken!;
  const client = supabaseForUser(token);

  const { data: row } = await client.from('applications').select('cv_path').eq('id', id).maybeSingle();

  const { error } = await client.from('applications').delete().eq('id', id);
  if (error) return redirect(`/admin/applications/${id}?error=${encodeURIComponent(error.message)}`);

  if (row?.cv_path) {
    await client.storage.from(CV_BUCKET).remove([row.cv_path]).catch(() => {});
  }

  return redirect('/admin/applications?deleted=1');
};
