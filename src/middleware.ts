import { defineMiddleware } from 'astro:middleware';
import { supabase } from './lib/supabase';
import { readAccessToken, readRefreshToken, setSessionCookies, clearSessionCookies } from './lib/session';

// Routes that require a logged-in admin. Everything under /admin except /admin/login
// itself, plus every admin API route.
function isProtectedPath(pathname: string): boolean {
  if (pathname.startsWith('/admin/login')) return false;
  if (pathname === '/admin' || pathname.startsWith('/admin/')) return true;
  if (pathname.startsWith('/api/admin/') && !pathname.startsWith('/api/admin/login')) return true;
  return false;
}

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = new URL(context.request.url).pathname;

  if (!isProtectedPath(pathname)) {
    return next();
  }

  const accessToken = readAccessToken(context.cookies);
  const refreshToken = readRefreshToken(context.cookies);

  // Try the access token first.
  if (accessToken) {
    const { data, error } = await supabase.auth.getUser(accessToken);
    if (!error && data.user) {
      context.locals.user = { id: data.user.id, email: data.user.email ?? '' };
      context.locals.accessToken = accessToken;
      return next();
    }
  }

  // Fall back to the refresh token.
  if (refreshToken) {
    const { data, error } = await supabase.auth.refreshSession({ refresh_token: refreshToken });
    if (!error && data.session && data.user) {
      setSessionCookies(
        context.cookies,
        data.session.access_token,
        data.session.refresh_token,
        data.session.expires_in,
      );
      context.locals.user = { id: data.user.id, email: data.user.email ?? '' };
      context.locals.accessToken = data.session.access_token;
      return next();
    }
  }

  // Not authenticated.
  clearSessionCookies(context.cookies);

  if (pathname.startsWith('/api/')) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return context.redirect(`/admin/login?next=${encodeURIComponent(pathname)}`);
});
