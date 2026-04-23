import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
import { setSessionCookies } from '../../../lib/session';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  const email = String(form.get('email') ?? '').trim();
  const password = String(form.get('password') ?? '');
  const next = String(form.get('next') ?? '/admin');

  if (!email || !password) {
    return redirect(`/admin/login?error=invalid&next=${encodeURIComponent(next)}`);
  }

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error || !data.session) {
    return redirect(`/admin/login?error=invalid&next=${encodeURIComponent(next)}`);
  }

  setSessionCookies(
    cookies,
    data.session.access_token,
    data.session.refresh_token,
    data.session.expires_in,
  );

  return redirect(next.startsWith('/admin') ? next : '/admin');
};
