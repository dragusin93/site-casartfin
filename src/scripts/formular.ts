/**
 * Logica comuna a celor trei formulare (ofertă, investitori, contact).
 *
 * In varianta veche a site-ului, formularele faceau `preventDefault()` si
 * afisau "Mesaj trimis cu succes!" fara sa trimita nimic nicaieri. Aici chiar
 * se trimit: POST catre /api/contact, care da mai departe un email.
 *
 * Butonul de WhatsApp compune mesajul din campurile completate, ca omul sa
 * poata trimite acelasi continut si pe WhatsApp daca prefera.
 */

const TELEFON_WHATSAPP = '40754934154';

/** Etichete lizibile pentru mesajul de WhatsApp. */
const ETICHETE: Record<string, string> = {
  serviciu: 'Serviciu',
  masuratoare: 'Tip măsurătoare',
  cantitate: 'Cantitate',
  detalii: 'Detalii',
  nume: 'Nume',
  telefon: 'Telefon',
  email: 'Email',
  subiect: 'Subiect',
  mesaj: 'Mesaj',
  interes: 'Tip colaborare',
  firma: 'Firmă',
};

function citesteFormular(form: HTMLFormElement): Record<string, string> {
  const date: Record<string, string> = {};

  for (const [cheie, valoare] of new FormData(form).entries()) {
    if (typeof valoare !== 'string') continue;
    const curat = valoare.trim();
    if (curat) date[cheie] = curat;
  }

  return date;
}

function compuneMesajWhatsApp(form: HTMLFormElement, titlu: string): string {
  const date = citesteFormular(form);
  const randuri = Object.entries(date)
    .filter(([cheie]) => cheie !== 'acord' && cheie !== 'website')
    .map(([cheie, valoare]) => `${ETICHETE[cheie] ?? cheie}: ${valoare}`);

  if (!randuri.length) return `Bună ziua! ${titlu}`;

  return `Bună ziua! ${titlu}\n\n${randuri.join('\n')}`;
}

function arataRaspuns(zona: HTMLElement | null, stare: 'ok' | 'eroare', text: string) {
  if (!zona) return;
  zona.textContent = text;
  zona.dataset.stare = stare;
}

interface OptiuniFormular {
  /** id-ul elementului <form> */
  formId: string;
  /** Eticheta trimisa in email, ca sa stim din ce formular vine. */
  sursa: string;
  /** Prima linie a mesajului de WhatsApp. */
  titluWhatsApp: string;
}

export function initFormular({ formId, sursa, titluWhatsApp }: OptiuniFormular) {
  const form = document.getElementById(formId) as HTMLFormElement | null;
  if (!form) return;

  const buton = form.querySelector<HTMLButtonElement>('[data-trimite]');
  const zonaRaspuns = form.querySelector<HTMLElement>('.form-raspuns');
  const butonWhatsApp = form.querySelector<HTMLAnchorElement>('[data-whatsapp]');

  // Butonul de WhatsApp isi compune link-ul din ce e completat in formular,
  // chiar inainte ca browserul sa urmeze link-ul.
  butonWhatsApp?.addEventListener('click', () => {
    const mesaj = compuneMesajWhatsApp(form, titluWhatsApp);
    butonWhatsApp.href = `https://wa.me/${TELEFON_WHATSAPP}?text=${encodeURIComponent(mesaj)}`;
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!form.reportValidity()) return;

    const textInitial = buton?.textContent ?? '';
    if (buton) {
      buton.disabled = true;
      buton.textContent = 'Se trimite...';
    }
    if (zonaRaspuns) delete zonaRaspuns.dataset.stare;

    try {
      const raspuns = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...citesteFormular(form), sursa }),
      });

      if (!raspuns.ok) {
        const detaliu = await raspuns.json().catch(() => null);
        throw new Error(detaliu?.eroare ?? `HTTP ${raspuns.status}`);
      }

      arataRaspuns(
        zonaRaspuns,
        'ok',
        'Mulțumim! Am primit solicitarea și vă contactăm în cel mult 24 de ore.',
      );
      form.reset();
    } catch (err) {
      console.error('[formular]', err);
      arataRaspuns(
        zonaRaspuns,
        'eroare',
        'Nu am putut trimite mesajul. Vă rugăm sunați la 0754 934 154 sau scrieți pe WhatsApp.',
      );
    } finally {
      if (buton) {
        buton.disabled = false;
        buton.textContent = textInitial;
      }
    }
  });
}
