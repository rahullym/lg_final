import type { APIRoute } from 'astro';
import { supabaseForUser } from '../../../../lib/supabase';
import { slugify } from '../../../../lib/slug';
import { uniqueSlug } from '../../../../lib/eventCollection';

export const prerender = false;

export const PATCH: APIRoute = async ({ request, params, locals, redirect }) => {
  const id = String(params.id);
  const token = locals.accessToken!;
  const client = supabaseForUser(token);

  const form = await request.formData().catch(() => null);
  if (!form) return redirect(`/admin/jobs/${id}?error=${encodeURIComponent('Invalid form data')}`);

  const title = String(form.get('title') ?? '').trim();
  if (!title) return redirect(`/admin/jobs/${id}?error=${encodeURIComponent('Title is required')}`);

  let slug = String(form.get('slug') ?? '').trim() || slugify(title);
  slug = await uniqueSlug(client, 'jobs', slug, id);

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

  const { error } = await client.from('jobs').update({
    slug, title, department, location, locations,
    employment_type, experience,
    description, responsibilities, requirements,
    apply_email, apply_url, apply_deadline,
    order: Number.isFinite(order) ? order : 0,
    draft,
  }).eq('id', id);

  if (error) return redirect(`/admin/jobs/${id}?error=${encodeURIComponent(error.message)}`);
  return redirect(`/admin/jobs/${id}/view?saved=1`);
};

export const POST: APIRoute = async (ctx) => {
  const form = await ctx.request.clone().formData().catch(() => null);
  const method = String(form?.get('_method') ?? '').toUpperCase();
  if (method === 'DELETE') return DELETE(ctx);
  return PATCH(ctx);
};

function linesToArray(value: FormDataEntryValue | null): string[] {
  return String(value ?? '')
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

export const DELETE: APIRoute = async ({ params, locals, redirect }) => {
  const id = String(params.id);
  const token = locals.accessToken!;
  const client = supabaseForUser(token);
  const { error } = await client.from('jobs').delete().eq('id', id);
  if (error) return redirect(`/admin/jobs/${id}?error=${encodeURIComponent(error.message)}`);
  return redirect('/admin/jobs?deleted=1');
};
