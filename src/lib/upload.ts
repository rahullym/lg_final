import { supabaseForUser } from './supabase';

const BUCKET = (import.meta.env.PUBLIC_SUPABASE_BUCKET ?? 'lg_backend') as string;

// Accepts a File from a multipart/form-data request, uploads it to the
// `uploads` bucket under a unique path, and returns the public URL so it can
// be stored in content tables. Runs under the admin's JWT so the
// "authenticated insert uploads" RLS policy applies.
export async function uploadImage(file: File, accessToken: string): Promise<string> {
  if (!(file instanceof File) || file.size === 0) {
    throw new Error('No file provided');
  }

  const ext = (file.name.split('.').pop() ?? 'bin').toLowerCase();
  const safeExt = /^[a-z0-9]{1,10}$/.test(ext) ? ext : 'bin';
  const path = `${Date.now()}-${crypto.randomUUID()}.${safeExt}`;

  const client = supabaseForUser(accessToken);
  const { error } = await client.storage.from(BUCKET).upload(path, file, {
    contentType: file.type || undefined,
    upsert: false,
  });
  if (error) throw new Error(`Upload failed: ${error.message}`);

  const { data } = client.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}
