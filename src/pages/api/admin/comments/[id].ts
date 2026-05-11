import type { APIRoute } from 'astro';
import { supabaseForUser } from '../../../../lib/supabase';

export const prerender = false;

export const PATCH: APIRoute = async ({ request, params, locals, redirect }) => {
  const id = String(params.id);
  const token = locals.accessToken!;
  const client = supabaseForUser(token);

  const form = await request.formData().catch(() => null);
  if (!form) return redirect(`/admin/comments?error=${encodeURIComponent('Invalid form')}`);

  const approved = String(form.get('approved') ?? '').toLowerCase() === 'true';

  const { error } = await client.from('comments').update({ approved }).eq('id', id);
  if (error) return redirect(`/admin/comments?error=${encodeURIComponent(error.message)}`);

  const back = String(form.get('redirect') ?? '/admin/comments?updated=1');
  return redirect(back);
};

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
  const { error } = await client.from('comments').delete().eq('id', id);
  if (error) return redirect(`/admin/comments?error=${encodeURIComponent(error.message)}`);
  return redirect('/admin/comments?deleted=1');
};
