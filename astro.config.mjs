// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Adresa publica a site-ului. De ea depind canonical, sitemap.xml si tag-urile
 * Open Graph — acestea se coc in HTML la build, nu se ajusteaza dupa domeniul
 * de pe care e servita pagina.
 *
 * Ordinea:
 *   1. PUBLIC_SITE_URL — de setat pe Vercel cand domeniul propriu e activ,
 *      ex. https://casartfin.ro
 *   2. domeniul de productie dat automat de Vercel (proiect.vercel.app)
 *   3. rezerva pentru build local
 *
 * Atentie: casartfin.ro NU e inca inregistrat. Pana e cumparat si legat de
 * proiect, adresa trebuie sa ramana cea de vercel.app — altfel previzualizarea
 * link-ului pe WhatsApp cauta imaginea pe un domeniu inexistent si nu apare.
 */
const SITE =
  process.env.PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://site-casartfin.vercel.app');

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  build: {
    // Vercel serveste /termeni in loc de /termeni.html (cleanUrls in vercel.json)
    format: 'file',
  },
});

// Nota: formatele imaginilor NU se configureaza global in Astro.
// <Image> produce un singur format (webp implicit); pentru AVIF + WebP se
// foloseste <Picture formats={['avif','webp']}>, cum e in Galerie si Hero.
