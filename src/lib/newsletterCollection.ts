// Helpers for the newsletters collection — each entry is a cover image
// + a downloadable PDF, plus title/issue date/description.

import type { SupabaseClient } from '@supabase/supabase-js';
import { uploadImage } from './upload';
import { slugify } from './slug';

export interface NewsletterFormInput {
  title: string;
  slug: string;
  cover: string | null;
  pdf: string;
  issueDate: string | null;
  description: string;
  draft: boolean;
}

// Read the multipart form, upload any new cover/PDF files, and return a
// payload ready to insert/update. `existing*` lets edit flows preserve
// the previous URL when the admin doesn't pick a new file.
export async function readNewsletterForm(
  form: FormData,
  token: string,
  opts: { existingCover?: string | null; existingPdf?: string | null } = {},
): Promise<NewsletterFormInput> {
  const title = String(form.get('title') ?? '').trim();
  const slug = String(form.get('slug') ?? '').trim() || slugify(title);
  const description = String(form.get('description') ?? '').trim();
  const issueDateRaw = String(form.get('issue_date') ?? '').trim();
  const issueDate = issueDateRaw || null;
  const draft = form.get('draft') === 'on';

  let cover: string | null = String(form.get('cover') ?? '').trim() || opts.existingCover || null;
  const coverFile = form.get('cover_file');
  if (coverFile instanceof File && coverFile.size > 0) {
    cover = await uploadImage(coverFile, token);
  }

  let pdf: string = String(form.get('pdf') ?? '').trim() || opts.existingPdf || '';
  const pdfFile = form.get('pdf_file');
  if (pdfFile instanceof File && pdfFile.size > 0) {
    pdf = await uploadImage(pdfFile, token);
  }

  return {
    title,
    slug,
    cover,
    pdf,
    issueDate,
    description,
    draft,
  };
}

// Convert form-input shape to the DB row shape (snake_case columns).
export function toRow(input: NewsletterFormInput) {
  return {
    title: input.title,
    slug: input.slug,
    cover: input.cover,
    pdf: input.pdf,
    issue_date: input.issueDate,
    description: input.description || null,
    draft: input.draft,
  };
}

export async function listNewsletters(client: SupabaseClient) {
  return client
    .from('newsletters')
    .select('id, slug, title, cover, pdf, issue_date, draft, updated_at')
    .order('issue_date', { ascending: false, nullsFirst: false })
    .order('updated_at', { ascending: false });
}

export async function getNewsletter(client: SupabaseClient, id: string) {
  return client.from('newsletters').select('*').eq('id', id).single();
}
