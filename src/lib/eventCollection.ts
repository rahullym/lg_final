// Shared helpers for the celebration/seminar "folder" model — both
// collections have the same shape (title, year, cover, gallery[], body,
// draft, order), so the handler logic differs only by table name.

import type { SupabaseClient } from '@supabase/supabase-js';
import { uploadImage } from './upload';
import { slugify } from './slug';

export type EventTable = 'celebrations' | 'seminars';

export interface EventFormInput {
  title: string;
  slug: string;
  year: string;
  cover: string | null;
  gallery: string[];
  order: number;
  body: string;
  draft: boolean;
}

// Extract the form fields that both celebrations and seminars share.
// Uploads the cover file (if any), appends any newly-uploaded gallery
// files to the existing gallery array, and returns a ready-to-insert
// payload. `existingGallery` lets edit flows preserve images the
// admin hasn't removed.
export async function readEventForm(
  form: FormData,
  token: string,
  opts: { existingCover?: string | null; existingGallery?: string[] } = {},
): Promise<EventFormInput> {
  const title = String(form.get('title') ?? '').trim();
  const year = String(form.get('year') ?? '').trim();
  const slug = String(form.get('slug') ?? '').trim() || slugify(title);
  const body = String(form.get('body') ?? '');
  const orderRaw = String(form.get('order') ?? '').trim();
  const order = orderRaw ? Number(orderRaw) : 0;
  const draft = form.get('draft') === 'on';

  let cover: string | null = String(form.get('cover') ?? '').trim() || opts.existingCover || null;
  const coverFile = form.get('cover_file');
  if (coverFile instanceof File && coverFile.size > 0) {
    cover = await uploadImage(coverFile, token);
  }

  // Keep every image URL the admin decided to keep (sent as gallery_keep[])…
  const keep = form.getAll('gallery_keep').map((v) => String(v));
  const gallery: string[] = keep.length > 0 ? keep : (opts.existingGallery ?? []);

  // …then append any freshly-uploaded files.
  const newFiles = form.getAll('gallery_files').filter((f): f is File => f instanceof File && f.size > 0);
  for (const file of newFiles) {
    gallery.push(await uploadImage(file, token));
  }

  return {
    title,
    slug,
    year,
    cover,
    gallery,
    order: Number.isFinite(order) ? order : 0,
    body,
    draft,
  };
}

export async function listEvents(client: SupabaseClient, table: EventTable) {
  return client
    .from(table)
    .select('id, slug, title, year, cover, gallery, "order", draft, updated_at')
    .order('order', { ascending: true })
    .order('year', { ascending: false });
}

export async function getEvent(client: SupabaseClient, table: EventTable, id: string) {
  return client.from(table).select('*').eq('id', id).single();
}
