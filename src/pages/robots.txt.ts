import type { APIRoute } from 'astro';

/**
 * robots.txt generat, nu static.
 *
 * Varianta din public/ avea domeniul scris de mana, deci ramanea gresita cand
 * se schimba adresa site-ului. Asa, linia Sitemap urmeaza automat `site` din
 * astro.config.mjs.
 */
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('sitemap-index.xml', site).href;

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
