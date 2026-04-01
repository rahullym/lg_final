/**
 * Cloudflare Worker — GitHub OAuth proxy for Decap CMS
 *
 * Environment variables to set in the Cloudflare dashboard:
 *   GITHUB_CLIENT_ID      — from your GitHub OAuth App
 *   GITHUB_CLIENT_SECRET  — from your GitHub OAuth App
 *
 * Routes handled:
 *   GET /auth      → Redirects browser to GitHub OAuth consent screen
 *   GET /callback  → Exchanges the code for an access token, hands it
 *                    back to Decap CMS via postMessage
 */

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Handle CORS pre-flight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS });
    }

    // ── /auth ────────────────────────────────────────────────────────────────
    // Redirect the user's browser to GitHub's OAuth consent page.
    if (url.pathname === '/auth') {
      const params = new URLSearchParams({
        client_id: env.GITHUB_CLIENT_ID,
        scope: 'repo,user',
        redirect_uri: `${url.origin}/callback`,
      });
      return Response.redirect(
        `https://github.com/login/oauth/authorize?${params}`,
        302
      );
    }

    // ── /callback ─────────────────────────────────────────────────────────────
    // GitHub redirects here with ?code=... after the user approves.
    // We exchange the code for an access token and pass it to Decap CMS
    // via postMessage so the admin UI can proceed.
    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      if (!code) {
        return new Response('Missing OAuth code parameter', {
          status: 400,
          headers: CORS,
        });
      }

      // Exchange code for access token
      const tokenRes = await fetch(
        'https://github.com/login/oauth/access_token',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            client_id: env.GITHUB_CLIENT_ID,
            client_secret: env.GITHUB_CLIENT_SECRET,
            code,
          }),
        }
      );

      const tokenData = await tokenRes.json();

      if (tokenData.error) {
        return new Response(
          `GitHub OAuth error: ${tokenData.error_description ?? tokenData.error}`,
          { status: 400, headers: CORS }
        );
      }

      // Decap CMS expects this exact postMessage protocol:
      //   1. This popup posts "authorizing:github" to its opener.
      //   2. The opener replies "authorizing:github".
      //   3. This popup posts "authorization:github:success:{...token...}".
      const payload = JSON.stringify({
        token: tokenData.access_token,
        provider: 'github',
      });

      const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Authenticating…</title>
</head>
<body>
<p style="font-family:sans-serif;padding:2rem">Authenticating — you may close this window.</p>
<script>
  (function () {
    // JSON-encoded so special characters in the token never break the script.
    var payload = ${JSON.stringify(payload)};

    function receiveMessage(e) {
      if (e.data === 'authorizing:github') {
        window.opener.postMessage(
          'authorization:github:success:' + payload,
          e.origin
        );
      }
    }

    window.addEventListener('message', receiveMessage, false);

    // Kick off the handshake with the Decap CMS window.
    window.opener.postMessage('authorizing:github', '*');
  })();
</script>
</body>
</html>`;

      return new Response(html, {
        headers: { 'Content-Type': 'text/html;charset=utf-8', ...CORS },
      });
    }

    return new Response('Not found', { status: 404, headers: CORS });
  },
};
