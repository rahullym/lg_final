import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

export const prerender = false;

const CV_BUCKET = 'lg_cvs';
const MAX_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = new Set(['application/pdf']);
const ALLOWED_EXTS = new Set(['pdf']);

export const POST: APIRoute = async ({ request, redirect, clientAddress }) => {
  const form = await request.formData().catch(() => null);
  if (!form) return back(redirect, '/placements', 'Invalid submission');

  // Honeypot — real browsers leave this blank; bots fill every field.
  if (String(form.get('company') ?? '').trim() !== '') {
    // Pretend success to avoid signaling the trap.
    return redirect(`/placements?applied=1`);
  }

  const slug = String(form.get('job_slug') ?? '').trim();
  const isGeneral = !slug || slug === '_general';
  const backPath = isGeneral ? '/placements/submit-cv' : `/placements/${slug}`;

  // Accept either split first/last or a single `name` (back-compat).
  const firstName = String(form.get('first_name') ?? '').trim();
  const lastName = String(form.get('last_name') ?? '').trim();
  const fallbackName = String(form.get('name') ?? '').trim();
  const name = [firstName, lastName].filter(Boolean).join(' ') || fallbackName;
  const email = String(form.get('email') ?? '').trim();
  const phone = String(form.get('phone') ?? '').trim() || null;
  const preferred_location = String(form.get('preferred_location') ?? '').trim() || null;
  const experienceYears = String(form.get('experience_years') ?? '').trim();
  const experienceMonths = String(form.get('experience_months') ?? '').trim();
  const experience = [
    experienceYears && `${experienceYears}y`,
    experienceMonths && `${experienceMonths}m`,
  ].filter(Boolean).join(' ') || null;
  const cover_note = String(form.get('cover_note') ?? '').trim() || null;
  const file = form.get('cv');

  if (!name) return back(redirect, backPath, 'Name is required');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return back(redirect, backPath, 'A valid email is required');
  }
  if (!(file instanceof File) || file.size === 0) {
    return back(redirect, backPath, 'Please attach your CV (PDF)');
  }
  if (file.size > MAX_BYTES) {
    return back(redirect, backPath, 'CV is too large (max 5 MB)');
  }
  const ext = (file.name.split('.').pop() ?? '').toLowerCase();
  if (!ALLOWED_TYPES.has(file.type) && !ALLOWED_EXTS.has(ext)) {
    return back(redirect, backPath, 'Only PDF files are accepted');
  }

  // For job-specific applications, look up the opening; for general apps, skip.
  let job: { id: string; title: string; slug: string } | null = null;
  if (!isGeneral) {
    const { data, error: jobErr } = await supabase
      .from('jobs')
      .select('id, title, slug')
      .eq('slug', slug)
      .eq('draft', false)
      .maybeSingle();
    if (jobErr || !data) return back(redirect, '/placements', 'That opening is no longer accepting applications');
    job = data;
  }

  // Upload CV → lg_cvs/{slug | _general}/<timestamp>-<uuid>.pdf
  const folder = job?.slug ?? '_general';
  const path = `${folder}/${Date.now()}-${crypto.randomUUID()}.pdf`;
  const { error: upErr } = await supabase.storage
    .from(CV_BUCKET)
    .upload(path, file, { contentType: 'application/pdf', upsert: false });
  if (upErr) return back(redirect, backPath, `Upload failed: ${upErr.message}`);

  // Hash the IP for crude rate-tracking without storing the raw address.
  const ip = clientAddress ?? '';
  const ip_hash = ip
    ? Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(ip))))
        .slice(0, 8)
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('')
    : null;

  const { error: insErr } = await supabase.from('applications').insert({
    job_id: job?.id ?? null,
    job_title: job?.title ?? 'General Application',
    job_slug: job?.slug ?? '_general',
    name,
    email,
    phone,
    preferred_location,
    experience,
    cover_note,
    cv_path: path,
    cv_filename: file.name,
    ip_hash,
  });
  if (insErr) {
    // Best-effort cleanup: remove the just-uploaded CV so we don't keep an orphan.
    await supabase.storage.from(CV_BUCKET).remove([path]).catch(() => {});
    return back(redirect, backPath, `Submission failed: ${insErr.message}`);
  }

  return redirect(`${backPath}?applied=1`);
};

function back(
  redirect: (location: string, status?: 301 | 302 | 303 | 307 | 308) => Response,
  path: string,
  message: string,
) {
  const sep = path.includes('?') ? '&' : '?';
  return redirect(`${path}${sep}error=${encodeURIComponent(message)}`);
}
