import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const PUBLIC_URL = import.meta.env.PUBLIC_SUPABASE_URL;
const PUBLIC_ANON = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
const SERVICE_ROLE = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

// We deliberately do NOT throw at module load. Some routes (prerendered
// pages, the login form itself) don't touch Supabase, and the build
// pipeline imports middleware for every page it generates — throwing
// here would fail the build on any host that hasn't set the env vars.
// Instead we construct the clients lazily and throw only on first use
// with a clear error.

function env(): { url: string; anon: string } {
  if (!PUBLIC_URL || !PUBLIC_ANON) {
    throw new Error(
      'Supabase env missing. Set PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY in your deploy environment.',
    );
  }
  return { url: PUBLIC_URL, anon: PUBLIC_ANON };
}

let _anon: SupabaseClient | null = null;
function anonClient(): SupabaseClient {
  if (_anon) return _anon;
  const { url, anon } = env();
  _anon = createClient(url, anon, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return _anon;
}

// Proxy so existing `import { supabase }` call sites keep working without a
// per-file refactor. Every method access forwards to the lazily-created
// client so env vars are only needed at call time.
export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    const client = anonClient() as unknown as Record<string | symbol, unknown>;
    const value = client[prop];
    return typeof value === 'function' ? (value as (...args: unknown[]) => unknown).bind(client) : value;
  },
});

// Service-role client — NEVER expose to the browser. Use only from server
// routes that have already verified the caller is an authenticated admin.
// Returns null when the key isn't set so we can fall back to anon behaviour
// in local setups that haven't configured it yet.
export function supabaseAdmin(): SupabaseClient | null {
  if (!SERVICE_ROLE) return null;
  const { url } = env();
  return createClient(url, SERVICE_ROLE, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

// Returns a client bound to a user's access token, so every query runs
// under their identity and RLS applies. This is what admin API routes
// should use after reading the session cookie.
export function supabaseForUser(accessToken: string): SupabaseClient {
  const { url, anon } = env();
  return createClient(url, anon, {
    global: { headers: { Authorization: `Bearer ${accessToken}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
