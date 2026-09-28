/**
 * Datele firmei — sursa unica.
 *
 * Folosite in header, footer, contact, schema.org si in emailul trimis de
 * formulare. Daca se schimba un numar de telefon, se schimba DOAR aici.
 *
 * TODO (Ionut): completeaza CUI si numarul de la Registrul Comertului.
 * Sunt obligatorii legal pe site-ul unui SRL din Romania si apar in footer
 * si in paginile de Termeni / Politica de confidentialitate.
 */

export const FIRMA = {
  nume: 'CASARTFIN CONSTRUCT S.R.L.',
  numeScurt: 'CASARTFIN',
  descriere:
    'Gips carton, tencuieli mecanizate și finisaje premium pentru proiecte rezidențiale, comerciale și instituționale în Râmnicu Vâlcea și județul Vâlcea.',
  anInfiintare: 2025,

  /** Date de identificare — de completat. */
  cui: '[DE COMPLETAT]',
  regCom: '[DE COMPLETAT]',

  telefon: '+40754934154',
  telefonAfisat: '0754 934 154',
  email: 'casartfin@gmail.com',

  adresa: {
    strada: 'Strada Gib Mihăescu 8',
    oras: 'Râmnicu Vâlcea',
    judet: 'Vâlcea',
    codPostal: '240178',
    tara: 'RO',
  },

  /** Coordonate pentru schema.org si harta. */
  geo: {
    lat: 45.1,
    lng: 24.3692,
  },

  program: 'Luni–Vineri, 08:00–17:00',

  /** Mesaj precompletat pentru butonul de WhatsApp. */
  whatsappMesaj:
    'Bună ziua, am văzut site-ul CASARTFIN și aș dori o ofertă pentru o lucrare de finisaje.',

  /** Zonele deservite — apar in schema.org, ajuta la SEO local. */
  zone: [
    'Râmnicu Vâlcea',
    'Județul Vâlcea',
    'Drăgășani',
    'Băbeni',
    'Călimănești',
    'Horezu',
    'Brezoi',
  ],
} as const;

/** Link-ul de WhatsApp, gata construit. */
export const WHATSAPP_URL = `https://wa.me/${FIRMA.telefon.replace(/\D/g, '')}?text=${encodeURIComponent(
  FIRMA.whatsappMesaj,
)}`;
