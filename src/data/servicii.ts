/**
 * Serviciile CASARTFIN.
 *
 * Pozitionarea firmei e pe HALE SI SPATII INDUSTRIALE. Cele 6 servicii
 * principale sunt formulate scurt si in ordinea fluxului real de executie:
 * structura -> inchidere -> izolatie -> pregatire -> finisaj.
 * Rezidentialul exista, dar ca sectiune secundara.
 */

import type { ImageMetadata } from 'astro';

import pozaCompartimentari from '~/assets/lucrari/compartimentari-birouri-structura-metalica.jpg';
import pozaTavane from '~/assets/lucrari/spatiu-comercial-finisat-tavan-tehnic.jpg';
import pozaIzolatii from '~/assets/lucrari/izolatie-vata-minerala-tubulatura-ventilatie.jpg';
import pozaGlet from '~/assets/lucrari/gletuire-pereti-gips-carton.jpg';
import pozaFinisaje from '~/assets/lucrari/spatiu-industrial-finisat-gips-carton.jpg';
import pozaInaltime from '~/assets/lucrari/placare-pereti-inaltime-mare.jpg';

export interface Serviciu {
  id: string;
  titlu: string;
  descriere: string;
  icon: string;
  poza: ImageMetadata;
  pozaAlt: string;
}

export const SERVICII_PRINCIPALE: Serviciu[] = [
  {
    id: 'compartimentari',
    titlu: 'Compartimentări gips-carton',
    descriere:
      'Birouri, spații tehnice și zone de producție delimitate în interiorul halei, cu structură metalică și plăci agrementate.',
    icon: 'perete',
    poza: pozaCompartimentari,
    pozaAlt:
      'Compartimentări de birouri în hală, cu structură metalică din profile și goluri de uși trasate',
  },
  {
    id: 'pereti-tavane',
    titlu: 'Pereți și tavane',
    descriere:
      'Pereți simpli, dubli sau cu cerințe acustice. Tavane plane, casetate sau tehnice, cu iluminat, sprinklere și HVAC integrate.',
    icon: 'tavan',
    poza: pozaTavane,
    pozaAlt: 'Tavan tehnic aparent cu spoturi încastrate, într-un spațiu comercial finalizat',
  },
  {
    id: 'izolatii',
    titlu: 'Izolații',
    descriere:
      'Izolație termică și fonică din vată minerală, montată corect în structură — inclusiv în jurul tubulaturii și al instalațiilor.',
    icon: 'izolatie',
    poza: pozaIzolatii,
    pozaAlt:
      'Izolație din vată minerală montată între profile metalice, în jurul tubulaturii de ventilație',
  },
  {
    id: 'glet-zugraveli',
    titlu: 'Glet și zugrăveli',
    descriere:
      'Pregătirea suprafețelor și aplicarea mecanizată a lavabilei, cu pompe profesionale — de câteva ori mai rapid pe suprafețe mari.',
    icon: 'driscă',
    poza: pozaGlet,
    pozaAlt: 'Pereți din gips carton în faza de gletuire și pregătire a suprafeței',
  },
  {
    id: 'finisaje-complete',
    titlu: 'Finisaje complete',
    descriere:
      'Preluăm spațiul la roșu și îl predăm finisat: compartimentare, instalații mascate, pardoseli, zugrăveli, montaj uși.',
    icon: 'finisaj',
    poza: pozaFinisaje,
    pozaAlt:
      'Spațiu industrial finisat, cu pereți din gips carton vopsiți și instalații termice montate',
  },
  {
    id: 'lucrari-inaltime',
    titlu: 'Lucrări la înălțime',
    descriere:
      'Schele certificate și echipament specializat pentru hale și spații cu tavane înalte. Execuție impecabilă și la 10 metri.',
    icon: 'schela',
    poza: pozaInaltime,
    pozaAlt: 'Placare cu gips carton pe perete de înălțime mare, în hală industrială',
  },
];

/** Argumentele din sectiunea "De ce CASARTFIN". Text minim, intentionat. */
export const MOTIVE = [
  {
    titlu: 'Echipă proprie',
    text: 'Nu subcontractăm. Oamenii care încep lucrarea o și termină.',
    icon: 'echipa',
  },
  {
    titlu: 'Peste 20 de ani de meserie',
    text: 'Experiență transmisă de la tată la fii, pe șantiere reale.',
    icon: 'experienta',
  },
  {
    titlu: 'Echipamente profesionale',
    text: 'Pompe de lavabilă, schele certificate, scule de măsurare.',
    icon: 'echipament',
  },
  {
    titlu: 'Lucrări la înălțime',
    text: 'Hale și spații cu tavane înalte, în siguranță, până la 10 metri.',
    icon: 'schela',
  },
  {
    titlu: 'Proiect și termen respectate',
    text: 'Citim planurile de execuție și ne asumăm graficul în scris.',
    icon: 'plan',
  },
  {
    titlu: 'Ofertare clară',
    text: 'Deviz pe categorii de lucrări. Fără rubrica „diverse”.',
    icon: 'deviz',
  },
] as const;

/** Cui ne adresam. Ordinea conteaza: industrialul si B2B-ul primele. */
export const CLIENTI = [
  {
    titlu: 'Dezvoltatori imobiliari',
    text: 'Hale, parcuri logistice și spații comerciale, cu facturare pe etape.',
  },
  {
    titlu: 'Antreprenori generali',
    text: 'Subantrepriză pe compartimentări și finisaje, cu echipe proprii.',
  },
  {
    titlu: 'Firme și beneficiari finali',
    text: 'Amenajări de birouri, depozite și spații de producție.',
  },
  {
    titlu: 'Investitori',
    text: 'Spații date spre închiriere, finisate la standard și la termen.',
  },
  {
    titlu: 'Persoane fizice',
    text: 'Apartamente și case — lucrări mai mici, aceeași execuție.',
  },
] as const;

/** Cele 23 de servicii — sursa unica pentru nomenclator si pentru calculator. */
export const TOATE_SERVICIILE: string[] = [
  'Compartimentări hale și spații industriale',
  'Pereți gips-carton industriali',
  'Tavane false și casetate',
  'Izolații termice și fonice',
  'Lucrări la înălțime',
  'Glet și pregătire suprafețe',
  'Tencuială mecanizată',
  'Zugrăveli interioare',
  'Finisaje industriale',
  'Finisaje spații comerciale',
  'Amenajări birouri în hale',
  'Spații tehnice și camere de utilaje',
  'Montaj profile și structuri metalice',
  'Placări gips-carton',
  'Mascări instalații și tubulatură',
  'Șape autonivelante',
  'Gresie și faianță',
  'Parchet SPC',
  'Montaj uși interioare',
  'Iluminat decorativ și mascări',
  'Tencuieli decorative și microciment',
  'Proiecte pe fonduri europene',
  'Finisaje rezidențiale — apartamente și case',
];

/** Tipurile de masuratoare din calculatorul de oferta. */
export const TIPURI_MASURATOARE = [
  { id: 'mp', eticheta: 'Suprafață (m²)', scurt: 'm²', exemplu: '450' },
  { id: 'ml', eticheta: 'Lungime (ml)', scurt: 'ml', exemplu: '80' },
  { id: 'buc', eticheta: 'Număr bucăți', scurt: 'Bucăți', exemplu: '8' },
  { id: 'camere', eticheta: 'Număr încăperi', scurt: 'Încăperi', exemplu: '6' },
  { id: 'complet', eticheta: 'Lucrare completă', scurt: 'Complet', exemplu: null },
] as const;
