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

  // Adresele NU au slash la final. Conteaza ca sitemap-ul sa fie de acord cu
  // eticheta canonical si cu ce face serverul: cu `format: 'directory'`,
  // @astrojs/sitemap scrie implicit /pagina/, adica exact adresa pe care
  // Vercel o redirectioneaza (308) catre /pagina. Google ar primi doua
  // raspunsuri diferite despre aceeasi pagina.
  trailingSlash: 'never',

  integrations: [sitemap()],
  build: {
    // 'directory' produce termeni/index.html, pe care Vercel il serveste la
    // /termeni fara nicio regula in plus.
    //
    // NU trece inapoi pe 'file': aceea cerea cleanUrls in vercel.json, iar
    // cleanUrls redirectioneaza ORICE cerere .html catre varianta fara
    // extensie — inclusiv fisierele din public/, care apoi dau 404. Asa a
    // devenit inaccesibil fisierul de verificare Google.
    format: 'directory',
  },
});

// Nota: formatele imaginilor NU se configureaza global in Astro.
// <Image> produce un singur format (webp implicit); pentru AVIF + WebP se
// foloseste <Picture formats={['avif','webp']}>, cum e in Galerie si Hero.
