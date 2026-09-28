/**
 * Genereaza public/og-casartfin.jpg (1200x630) — imaginea care apare cand
 * link-ul site-ului e trimis pe WhatsApp, Facebook sau Slack.
 * Se ruleaza o singura data: node _og.mjs, apoi fisierul se sterge.
 */
import sharp from 'sharp';

const W = 1200;
const H = 630;
const L = 660; // latimea panoului indigo din stanga

const LOGO_W = 236;
const LOGO_H = Math.round((LOGO_W * 307) / 748); // pastreaza raportul 2,44:1

// Logoul e gri pe fundal deschis. Pentru panoul indigo il vrem alb curat:
// luam DOAR canalul alfa (forma) si il lipim peste un dreptunghi alb.
const masca = await sharp('public/logo-casartfin.png')
  .resize({ width: LOGO_W })
  .ensureAlpha()
  .extractChannel('alpha')
  .toBuffer();

const logoAlb = await sharp({
  create: { width: LOGO_W, height: LOGO_H, channels: 3, background: '#F9F8F6' },
})
  .joinChannel(masca)
  .png()
  .toBuffer();

const panou = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="${L}" height="${H}" fill="#26355C"/>

  <line x1="64" y1="178" x2="148" y2="178" stroke="#B4694A" stroke-width="3"/>

  <text x="64" y="216" font-family="Consolas, monospace" font-size="18"
        letter-spacing="4.5" fill="#C98565">GIPS CARTON · FINISAJE</text>
  <text x="64" y="246" font-family="Consolas, monospace" font-size="18"
        letter-spacing="4.5" fill="#C98565">TENCUIELI MECANIZATE</text>

  <text x="64" y="330" font-family="Georgia, 'Times New Roman', serif" font-size="56"
        fill="#F9F8F6">O meserie de familie,</text>
  <text x="64" y="394" font-family="Georgia, 'Times New Roman', serif" font-size="56"
        fill="#F9F8F6">un standard european.</text>

  <line x1="64" y1="442" x2="340" y2="442" stroke="#F9F8F6" stroke-width="1" opacity="0.3"/>

  <text x="64" y="484" font-family="Segoe UI, Arial, sans-serif" font-size="22"
        fill="#F9F8F6" opacity="0.8">Râmnicu Vâlcea și județul Vâlcea</text>
  <text x="64" y="518" font-family="Segoe UI, Arial, sans-serif" font-size="22"
        fill="#F9F8F6" opacity="0.8">Peste 20 de ani de experiență</text>

  <text x="64" y="580" font-family="Consolas, monospace" font-size="25"
        letter-spacing="1.5" fill="#F9F8F6">0754 934 154</text>
</svg>`);

const foto = await sharp('src/assets/lucrari/amenajare-horeca-tencuiala-decorativa.jpg')
  .resize(W - L, H, { fit: 'cover', position: 'centre' })
  .toBuffer();

await sharp({ create: { width: W, height: H, channels: 3, background: '#F2F1EE' } })
  .composite([
    { input: foto, left: L, top: 0 },
    { input: panou, left: 0, top: 0 },
    { input: logoAlb, left: 64, top: 52 },
  ])
  .jpeg({ quality: 88, chromaSubsampling: '4:4:4' })
  .toFile('public/og-casartfin.jpg');

console.log(`public/og-casartfin.jpg generat (${W}x${H}), logo ${LOGO_W}x${LOGO_H}`);
