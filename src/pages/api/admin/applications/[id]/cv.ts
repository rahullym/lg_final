import type { APIRoute } from 'astro';
import { supabaseForUser } from '../../../../../lib/supabase';

export const prerender = false;

const CV_BUCKET = 'lg_cvs';
const SIGNED_TTL = 60; // seconds — short-lived, just enough to redirect

// Generates a short-lived signed URL for the application's CV and 302s the
// admin to it. The bucket itself is private, so direct URLs don't work.
export const GET: APIRoute = async ({ params, locals, redirect }) => {
  const id = String(params.id);
  const token = locals.accessToken!;
  const client = supabaseForUser(token);

  const { data: app, error } = await client
    .from('applications')
    .select('cv_path, cv_filename')
    .eq('id', id)
    .maybeSingle();

  if (error || !app?.cv_path) {
    return new Response('Not found', { status: 404 });
  }

  const downloadName = app.cv_filename || 'cv.pdf';
  const { data: signed, error: signErr } = await client.storage
    .from(CV_BUCKET)
    .createSignedUrl(app.cv_path, SIGNED_TTL, { download: downloadName });

  if (signErr || !signed?.signedUrl) {
    return new Response(`Failed to sign CV URL: ${signErr?.message ?? 'unknown error'}`, { status: 500 });
  }

  return redirect(signed.signedUrl, 302);
};
