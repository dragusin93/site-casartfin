/**
 * Functie serverless Vercel care primeste formularele si trimite un email.
 *
 * Traseul complet: formular -> src/scripts/formular.ts -> POST /api/contact
 * -> Resend -> casartfin@gmail.com.
 *
 * Variabile de mediu necesare (Vercel > Project > Settings > Environment Variables):
 *   RESEND_API_KEY   cheia din resend.com (gratuit pana la 3.000 emailuri/luna)
 *   EMAIL_CATRE      unde ajung solicitarile   (implicit casartfin@gmail.com)
 *   EMAIL_DE_LA      expeditorul verificat     (implicit onboarding@resend.dev)
 *
 * ATENTIE, restrictie importanta la configurare: cat timp casartfin.ro nu e
 * cumparat si verificat in Resend, expeditorul ramane onboarding@resend.dev.
 * Pe domeniul partajat resend.dev, Resend accepta UN SINGUR destinatar —
 * adresa cu care a fost inregistrat contul Resend. Orice alta adresa primeste
 * 403, handler-ul intoarce 502 si TOATE cele trei formulare afiseaza eroare,
 * deci niciun lead nu ajunge la client. Nu e o chestiune de folder Spam, e
 * refuz direct.
 *
 * Practic: pana la domeniu verificat, contul Resend trebuie creat exact pe
 * adresa din EMAIL_CATRE (casartfin@gmail.com). Dupa verificarea domeniului,
 * EMAIL_DE_LA devine ceva de tipul oferte@casartfin.ro si restrictia dispare.
 *
 * Doar RESEND_API_KEY lipsa da 500. EMAIL_CATRE si EMAIL_DE_LA cad tacut pe
 * valorile implicite de mai jos.
 */

export const config = { runtime: 'edge' };

const CAMPURI_MAXIME = 4000;

/** Etichete lizibile in emailul primit. */
const ETICHETE: Record<string, string> = {
  sursa: 'Formular',
  serviciu: 'Serviciu',
  masuratoare: 'Tip măsurătoare',
  cantitate: 'Cantitate',
  detalii: 'Detalii proiect',
  nume: 'Nume / Firmă',
  telefon: 'Telefon',
  email: 'Email',
  subiect: 'Subiect',
  mesaj: 'Mesaj',
  interes: 'Tip colaborare',
  firma: 'Firmă',
};

function raspunde(corp: unknown, status: number) {
  return new Response(JSON.stringify(corp), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

/** Scapa HTML, ca textul introdus de utilizator sa nu poata injecta markup. */
function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export default async function handler(cerere: Request): Promise<Response> {
  if (cerere.method !== 'POST') {
    return raspunde({ eroare: 'Metodă nepermisă.' }, 405);
  }

  let date: Record<string, unknown>;
  try {
    date = await cerere.json();
  } catch {
    return raspunde({ eroare: 'Conținut invalid.' }, 400);
  }

  // Capcana pentru roboti: campul `website` e ascuns vizual in formular, deci
  // un om nu il completeaza niciodata. Daca are valoare, raspundem 200 ca sa
  // nu-i semnalam robotului ca a fost prins.
  if (typeof date.website === 'string' && date.website.trim()) {
    return raspunde({ ok: true }, 200);
  }

  const nume = String(date.nume ?? '').trim();
  const telefon = String(date.telefon ?? '').trim();

  if (!nume || !telefon) {
    return raspunde({ eroare: 'Numele și telefonul sunt obligatorii.' }, 400);
  }

  if (!date.acord) {
    return raspunde({ eroare: 'Este necesar acordul privind prelucrarea datelor.' }, 400);
  }

  const cheie = process.env.RESEND_API_KEY;
  if (!cheie) {
    console.error('[contact] RESEND_API_KEY lipseste din variabilele de mediu.');
    return raspunde({ eroare: 'Serviciul de email nu este configurat.' }, 500);
  }

  const catre = process.env.EMAIL_CATRE ?? 'casartfin@gmail.com';
  const dela = process.env.EMAIL_DE_LA ?? 'CASARTFIN <onboarding@resend.dev>';

  const randuri = Object.entries(date)
    .filter(([cheieCamp, val]) => {
      if (cheieCamp === 'website' || cheieCamp === 'acord') return false;
      return typeof val === 'string' && val.trim();
    })
    .map(([cheieCamp, val]) => {
      const eticheta = ETICHETE[cheieCamp] ?? cheieCamp;
      const valoare = escapeHtml(String(val).slice(0, CAMPURI_MAXIME));
      return `<tr>
        <td style="padding:8px 14px 8px 0;color:#797e88;font:500 12px/1.4 monospace;text-transform:uppercase;letter-spacing:.08em;vertical-align:top;white-space:nowrap">${escapeHtml(eticheta)}</td>
        <td style="padding:8px 0;color:#191b21;font:400 15px/1.6 system-ui,sans-serif">${valoare.replace(/\n/g, '<br>')}</td>
      </tr>`;
    })
    .join('');

  const sursa = String(date.sursa ?? 'site');

  const html = `<!doctype html>
<html lang="ro"><body style="margin:0;padding:28px;background:#f2f1ee">
  <div style="max-width:620px;margin:0 auto;background:#f9f8f6;border:1px solid rgba(25,27,33,.12);padding:30px">
    <p style="margin:0 0 6px;font:500 11px/1.4 monospace;letter-spacing:.2em;text-transform:uppercase;color:#26355c">Solicitare nouă · ${escapeHtml(sursa)}</p>
    <h1 style="margin:0 0 22px;font:500 24px/1.2 Georgia,serif;color:#191b21">${escapeHtml(nume)}</h1>
    <table style="width:100%;border-collapse:collapse;border-top:1px solid rgba(25,27,33,.12)">${randuri}</table>
    <p style="margin:24px 0 0;padding-top:16px;border-top:1px solid rgba(25,27,33,.12);font:400 12px/1.6 system-ui,sans-serif;color:#797e88">
      Trimis automat de pe casartfin.ro · ${new Date().toLocaleString('ro-RO', { timeZone: 'Europe/Bucharest' })}
    </p>
  </div>
</body></html>`;

  try {
    const raspunsResend = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${cheie}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: dela,
        to: [catre],
        subject: `[${sursa}] ${nume} · ${telefon}`,
        html,
        // Raspunsul direct din clientul de email merge la client, daca a lasat email.
        ...(typeof date.email === 'string' && date.email.includes('@')
          ? { reply_to: date.email.trim() }
          : {}),
      }),
    });

    if (!raspunsResend.ok) {
      const detaliu = await raspunsResend.text();
      console.error('[contact] Resend a raspuns', raspunsResend.status, detaliu);
      return raspunde({ eroare: 'Emailul nu a putut fi trimis.' }, 502);
    }

    return raspunde({ ok: true }, 200);
  } catch (err) {
    console.error('[contact] Eroare la trimitere:', err);
    return raspunde({ eroare: 'Eroare de rețea la trimitere.' }, 502);
  }
}
