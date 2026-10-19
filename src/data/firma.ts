/**
 * Datele firmei — sursa unica.
 *
 * Folosite in header, footer, contact, schema.org si in emailul trimis de
 * formulare. Daca se schimba un numar de telefon, se schimba DOAR aici.
 *
 * Firma are doua adrese, cu roluri diferite:
 *   - sediul social (Bd. Tineretului 2) — adresa juridica, apare in footer si
 *     in paginile legale, pentru ca legea cere adresa din Registrul Comertului
 *   - biroul / punctul de lucru (Gib Mihaescu) — unde vin efectiv clientii,
 *     deci adresa afisata in sectiunea de contact si pe harta
 */

export const FIRMA = {
  nume: 'CASARTFIN CONSTRUCT S.R.L.',
  numeScurt: 'CASARTFIN',
  descriere:
    'Compartimentări și finisaje pentru hale industriale, depozite și spații comerciale în Râmnicu Vâlcea și județul Vâlcea. Echipă cu experiență făcută pe șantiere din străinătate.',

  /**
   * Data inmatricularii, folosita DOAR in schema.org, unde descrie entitatea
   * juridica si trebuie sa fie exacta.
   *
   * NU o afisa pe site si nu construi mesaje in jurul vechimii firmei:
   * experienta echipei s-a facut in afara tarii, iar firma din Romania e
   * noua. Povestea corecta e "zeci de ani de experienta, adusa acasa", nu
   * "firma cu traditie".
   */
  dataInfiintare: '2025-11',

  cui: '52979450',
  regCom: 'J2025091219005',

  telefon: '+40754934154',
  telefonAfisat: '0754 934 154',
  email: 'casartfin@gmail.com',

  /** Adresa juridica, din Registrul Comertului. Apare in footer si legal. */
  sediuSocial: {
    strada: 'Bdul. Tineretului nr. 2',
    oras: 'Râmnicu Vâlcea',
    judet: 'Vâlcea',
    tara: 'RO',
  },

  /** Biroul unde vin clientii. Adresa afisata la Contact si pe harta. */
  birou: {
    strada: 'Strada Gib Mihăescu nr. 8',
    oras: 'Râmnicu Vâlcea',
    judet: 'Vâlcea',
    codPostal: '240178',
    tara: 'RO',
  },

  /** Coordonate aproximative pentru Rm. Valcea (de rafinat cu cele exacte). */
  geo: {
    lat: 45.1,
    lng: 24.3692,
  },

  program: 'Luni–Vineri, 08:00–17:00',

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
