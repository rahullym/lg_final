// Convert a public video URL to an embeddable iframe URL.
// Returns null for empty/invalid input so callers can `if (embed)` to gate
// rendering. Falls back to the original URL for unknown providers, letting
// admins paste a direct embed URL when needed.
export function toEmbedUrl(input: string | null | undefined): string | null {
  if (!input) return null;
  const raw = input.trim();
  if (!raw) return null;

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }

  const host = url.hostname.replace(/^www\./, '');

  if (host === 'youtu.be') {
    const id = url.pathname.slice(1).split('/')[0];
    return id ? `https://www.youtube.com/embed/${id}` : null;
  }

  if (host === 'youtube.com' || host === 'm.youtube.com' || host.endsWith('.youtube.com')) {
    if (url.pathname === '/watch') {
      const id = url.searchParams.get('v');
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    const shortsMatch = url.pathname.match(/^\/shorts\/([^/]+)/);
    if (shortsMatch) return `https://www.youtube.com/embed/${shortsMatch[1]}`;
    const embedMatch = url.pathname.match(/^\/embed\/([^/]+)/);
    if (embedMatch) return `https://www.youtube.com/embed/${embedMatch[1]}`;
    return raw;
  }

  if (host === 'vimeo.com') {
    const id = url.pathname.split('/').filter(Boolean)[0];
    return /^\d+$/.test(id ?? '') ? `https://player.vimeo.com/video/${id}` : raw;
  }

  return raw;
}
