/**
 * Cloudflare Worker — Password-based Proxy for Decap CMS
 *
 * Environment variables to set in the Cloudflare dashboard:
 *   ADMIN_PASSWORD  — The password editors will use to log in (e.g., "Logistics2026")
 *   GITHUB_PAT      — Your GitHub Personal Access Token (classic or fine-grained)
 */

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
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
    if (url.pathname === '/auth') {
      
      // Serve the Login Page
      if (request.method === 'GET') {
        const errorMsg = url.searchParams.has('error') ? '<div class="message">Incorrect password. Please try again.</div>' : '';
        const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Admin Login - Logistics Gurukul</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f8fafc; }
    .card { background: white; padding: 2.5rem; border-radius: 12px; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1); width: 100%; max-width: 340px; text-align: center; border: 1px solid #e2e8f0; }
    .logo { color: #2563eb; font-weight: 900; font-size: 1.25rem; margin-bottom: 0.5rem; letter-spacing: -0.025em; }
    h2 { margin: 0 0 1.5rem 0; color: #0f172a; font-size: 1.5rem; }
    input[type="password"] { width: 100%; padding: 0.875rem; margin-top: 0.5rem; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem; transition: border-color 0.2s; }
    input[type="password"]:focus { outline: none; border-color: #3b82f6; box-shadow: 0 0 0 2px #bfdbfe; }
    button { width: 100%; padding: 0.875rem; margin-top: 1.25rem; background-color: #2563eb; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 1rem; transition: background-color 0.2s; }
    button:hover { background-color: #1d4ed8; }
    .message { color: #dc2626; margin-top: 1rem; font-size: 0.875rem; background: #fef2f2; padding: 0.5rem; border-radius: 4px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">Logistics Gurukul</div>
    <h2>CMS Login</h2>
    <form method="POST" action="/auth">
      <input type="password" name="password" placeholder="Enter password" required autofocus />
      <button type="submit">Sign In</button>
    </form>
    ${errorMsg}
  </div>
</body>
</html>`;
        return new Response(html, {
          headers: { 'Content-Type': 'text/html;charset=utf-8', ...CORS },
        });
      }

      // Handle Form Submission
      if (request.method === 'POST') {
        const formData = await request.formData();
        const password = formData.get('password');

        // Check if the password matches the environment variable
        if (password !== env.ADMIN_PASSWORD) {
          // Redirect back to GET /auth with an error
          return Response.redirect(`${url.origin}/auth?error=1`, 302);
        }

        // Decap CMS expects this payload
        const payload = JSON.stringify({
          token: env.GITHUB_PAT,
          provider: 'github',
        });

        // The exact handshake sequence Decap CMS uses to pass the token
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
    window.opener.postMessage('authorizing:github', '*');
  })();
</script>
</body>
</html>`;
        return new Response(html, {
          headers: { 'Content-Type': 'text/html;charset=utf-8', ...CORS },
        });
      }
    }

    return new Response('Not found', { status: 404, headers: CORS });
  },
};