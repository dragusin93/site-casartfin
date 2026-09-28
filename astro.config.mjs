// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domeniul final al site-ului. Schimba-l cand domeniul e cumparat —
// de el depind sitemap.xml, canonical si tag-urile Open Graph.
export const SITE = 'https://casartfin.ro';

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  build: {
    // Vercel serveste /termeni in loc de /termeni/index.html
    format: 'file',
  },
});

// Nota: formatele imaginilor NU se configureaza global in Astro.
// <Image> produce un singur format (webp implicit); pentru AVIF + WebP se
// foloseste <Picture formats={['avif','webp']}>, cum e in Galerie si Hero.
