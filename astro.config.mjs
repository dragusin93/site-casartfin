// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Adresa publica a site-ului. De ea depind canonical, sitemap.xml si tag-urile
 * Open Graph — se coc in HTML la build, nu se ajusteaza dupa domeniul de pe
 * care e servita pagina.
 *
 * Varianta FARA www e cea principala: e mai scurta de dictat la telefon si de
 * scris pe o oferta. www.casartfin.ro redirectioneaza catre ea din Vercel.
 *
 * PUBLIC_SITE_URL ramane disponibila ca suprascriere, daca domeniul se schimba
 * vreodata — se seteaza in Vercel si are prioritate, fara modificari de cod.
 */
const SITE = process.env.PUBLIC_SITE_URL || 'https://casartfin.ro';

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
