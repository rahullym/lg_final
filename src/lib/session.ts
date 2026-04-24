import type { AstroCookies } from 'astro';

const ACCESS_COOKIE = 'sb-access-token';
const REFRESH_COOKIE = 'sb-refresh-token';

const BASE_OPTS = {
  path: '/',
  httpOnly: true,
  sameSite: 'lax' as const,
  secure: import.meta.env.PROD,
};

export function setSessionCookies(
  cookies: AstroCookies,
  accessToken: string,
  refreshToken: string,
  expiresIn: number,
) {
  cookies.set(ACCESS_COOKIE, accessToken, {
    ...BASE_OPTS,
    maxAge: expiresIn,
  });
  cookies.set(REFRESH_COOKIE, refreshToken, {
    ...BASE_OPTS,
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
}

export function clearSessionCookies(cookies: AstroCookies) {
  cookies.delete(ACCESS_COOKIE, { path: '/' });
  cookies.delete(REFRESH_COOKIE, { path: '/' });
}

export function readAccessToken(cookies: AstroCookies): string | null {
  return cookies.get(ACCESS_COOKIE)?.value ?? null;
}

export function readRefreshToken(cookies: AstroCookies): string | null {
  return cookies.get(REFRESH_COOKIE)?.value ?? null;
}
