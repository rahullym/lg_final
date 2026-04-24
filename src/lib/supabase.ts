import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const PUBLIC_URL = import.meta.env.PUBLIC_SUPABASE_URL;
const PUBLIC_ANON = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
const SERVICE_ROLE = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

if (!PUBLIC_URL || !PUBLIC_ANON) {
  throw new Error('Missing PUBLIC_SUPABASE_URL / PUBLIC_SUPABASE_ANON_KEY env vars');
}

// Anon client — safe for public pages and for the login form itself.
export const supabase: SupabaseClient = createClient(PUBLIC_URL, PUBLIC_ANON, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

// Service-role client — NEVER expose to the browser. Use only from server
// routes that have already verified the caller is an authenticated admin.
// Returns null when the key isn't set so we can fall back to anon behaviour
// in local setups that haven't configured it yet.
export function supabaseAdmin(): SupabaseClient | null {
  if (!SERVICE_ROLE) return null;
  return createClient(PUBLIC_URL, SERVICE_ROLE, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

// Returns a client bound to a user's access token, so every query runs
// under their identity and RLS applies. This is what admin API routes
// should use after reading the session cookie.
export function supabaseForUser(accessToken: string): SupabaseClient {
  return createClient(PUBLIC_URL, PUBLIC_ANON, {
    global: { headers: { Authorization: `Bearer ${accessToken}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
