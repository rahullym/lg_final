import type { APIRoute } from 'astro';
import { supabaseForUser } from '../../../../lib/supabase';
import { slugify } from '../../../../lib/slug';
import { uniqueSlug } from '../../../../lib/eventCollection';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals, redirect }) => {
  const token = locals.accessToken!;
  const client = supabaseForUser(token);

  const form = await request.formData().catch(() => null);
  if (!form) return back(redirect, '', 'Invalid form data');

  const title = String(form.get('title') ?? '').trim();
  if (!title) return back(redirect, '', 'Title is required');

  let slug = String(form.get('slug') ?? '').trim();
  if (!slug) slug = slugify(title);
  slug = await uniqueSlug(client, 'jobs', slug);

  const department = String(form.get('department') ?? '').trim() || null;
  const location = String(form.get('location') ?? '').trim() || null;
  const locations = linesToArray(form.get('locations'));
  const employment_type = String(form.get('employment_type') ?? '').trim() || null;
  const experience = String(form.get('experience') ?? '').trim() || null;
  const description = String(form.get('description') ?? '');
  const responsibilities = linesToArray(form.get('responsibilities'));
  const requirements = linesToArray(form.get('requirements'));
  const apply_email = String(form.get('apply_email') ?? '').trim() || null;
  const apply_url = String(form.get('apply_url') ?? '').trim() || null;
  const apply_deadline = String(form.get('apply_deadline') ?? '').trim() || null;
  const orderRaw = String(form.get('order') ?? '').trim();
  const order = orderRaw ? Number(orderRaw) : 0;
  const draft = form.get('draft') === 'on';

  const { error } = await client.from('jobs').insert({
    slug, title, department, location, locations,
    employment_type, experience,
    description, responsibilities, requirements,
    apply_email, apply_url, apply_deadline,
    order: Number.isFinite(order) ? order : 0,
    draft,
  });

  if (error) return back(redirect, '', error.message);
  return redirect('/admin/jobs?created=1');
};

function back(
  redirect: (location: string, status?: 301 | 302 | 303 | 307 | 308) => Response,
  _path: string,
  message: string,
) {
  return redirect(`/admin/jobs/new?error=${encodeURIComponent(message)}`);
}

// Split textarea value by newlines, trim each line, drop blanks.
function linesToArray(value: FormDataEntryValue | null): string[] {
  return String(value ?? '')
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}
