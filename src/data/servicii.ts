/**
 * Serviciile CASARTFIN.
 *
 * `SERVICII_PRINCIPALE` sunt cele 6 detaliate in sectiunea Servicii.
 * `TOATE_SERVICIILE` alimenteaza si lista completa, si <select>-ul din
 * calculatorul de oferta — o singura sursa, ca sa nu mai divergheze ca in
 * index.html-ul vechi, unde lista era copiata in doua locuri.
 */

import type { ImageMetadata } from 'astro';

import pozaCompartimentari from '~/assets/lucrari/compartimentari-birouri-structura-metalica.jpg';
import pozaInaltime from '~/assets/lucrari/placare-pereti-inaltime-mare.jpg';
import pozaTavan from '~/assets/lucrari/spatiu-comercial-finisat-tavan-tehnic.jpg';
import pozaGletuire from '~/assets/lucrari/gletuire-pereti-gips-carton.jpg';
import pozaDecorativa from '~/assets/lucrari/tencuiala-decorativa-iluminat-led.jpg';
import pozaStructura from '~/assets/lucrari/structura-metalica-tubulatura-gips-carton.jpg';

export interface ServiciuPrincipal {
  id: string;
  titlu: string;
  descriere: string;
  /** Numele iconului din IconServiciu.astro */
  icon: string;
  /** Fotografie reala din portofoliu, ilustrand serviciul. */
  poza: ImageMetadata;
  pozaAlt: string;
}

export const SERVICII_PRINCIPALE: ServiciuPrincipal[] = [
  {
    id: 'pereti-despartitori',
    titlu: 'Pereți despărțitori simpli / dubli / tripli',
    descriere:
      'Sisteme de compartimentare cu profile Knauf și Rigips pentru orice cerință acustică și structurală. Pereți simpli pentru rezidențial, dubli pentru izolație fonică avansată și sisteme triple pentru cerințe tehnice speciale — hoteluri, spitale, birouri.',
    icon: 'perete',
    poza: pozaCompartimentari,
    pozaAlt: 'Compartimentari de birouri din gips carton, cu structura metalica si goluri de usi trasate',
  },
  {
    id: 'placari-inaltime',
    titlu: 'Placări la înălțimi mari',
    descriere:
      'Schele certificate și echipament specializat pentru lucrări la înălțime — hale industriale, spații comerciale cu tavane înalte, foyer-uri de hotel sau clădiri de birouri. Siguranță maximă și execuție impecabilă și la 10 metri.',
    icon: 'schela',
    poza: pozaInaltime,
    pozaAlt: 'Placare cu gips carton pe perete de inaltime mare, in hala industriala',
  },
  {
    id: 'tavane-false',
    titlu: 'Tavane false',
    descriere:
      'Tavane plane, casetate, cu nervuri sau forme arhitecturale complexe. Integrăm iluminat încastrat, difuzoare, sprinklere și sisteme HVAC conform planului de instalații. Toleranță maximă admisă: ±2 mm la 2 m.',
    icon: 'tavan',
    poza: pozaTavan,
    pozaAlt: 'Spatiu comercial finalizat, cu tavan tehnic aparent si spoturi incastrate',
  },
  {
    id: 'lavabila-mecanizata',
    titlu: 'Lavabilă mecanizată cu pompe profesionale',
    descriere:
      'Aplicare prin pulverizare cu pompe Graco sau Wagner pentru suprafețe mari — de 3-4 ori mai rapid decât manual, uniformitate perfectă și consum optimizat. Ideală pentru ansambluri rezidențiale și proiecte cu termene strânse.',
    icon: 'pompa',
    poza: pozaGletuire,
    pozaAlt: 'Pereti din gips carton in faza de gletuire si pregatire a suprafetei',
  },
  {
    id: 'tencuiala-decorativa',
    titlu: 'Tencuială decorativă',
    descriere:
      'Beton aparent, marmură venețiană, tencuieli structurate sau finisaje mate premium. Colaborăm cu designeri de interior pentru a replica orice viziune artistică, cu materiale certificate și tehnici de aplicare certificate.',
    icon: 'driscă',
    poza: pozaDecorativa,
    pozaAlt: 'Perete cu tencuiala decorativa texturata si iluminat LED integrat',
  },
  {
    id: 'proiecte-tehnice',
    titlu: 'Citim proiecte tehnice',
    descriere:
      'Avem în echipă personal care interpretează planuri de arhitectură, detalii de execuție și specificații tehnice. Primim proiectul pe email, îl studiem și venim pe șantier cu ofertă detaliată și plan de execuție. Fără surprize, fără reveniri.',
    icon: 'plan',
    poza: pozaStructura,
    pozaAlt: 'Structura metalica placata cu gips carton, cu tubulatura de ventilatie integrata',
  },
];

/** Cele 23 de servicii — sursa unica pentru lista completa si pentru calculator. */
export const TOATE_SERVICIILE: string[] = [
  'Finisaje interioare',
  'Finisaje industriale',
  'Placări și izolații',
  'Gresie și faianță',
  'Parchet SPC',
  'Tencuieli decorative',
  'Pereți gips-carton',
  'Tencuială mecanizată',
  'Amenajări și renovări',
  'Proiecte pe fonduri europene',
  'Tavane casetate',
  'Placări gips-carton',
  'Zugrăveli interioare',
  'Montaj tavane false',
  'Montaj uși interioare',
  'Iluminat decorativ și mascări',
  'Reparații și refaceri interioare',
  'Gletuire și pregătire suprafețe',
  'Microciment și finisaje moderne',
  'Compartimentări interioare',
  'Montaj profile și structuri metalice',
  'Șape autonivelante',
  'Amenajări complete apartamente și spații comerciale',
];

/** Tipurile de masuratoare din calculatorul de oferta. */
export const TIPURI_MASURATOARE = [
  { id: 'mp', eticheta: 'Suprafață (m²)', scurt: 'm²', exemplu: '45' },
  { id: 'ml', eticheta: 'Lungime (ml)', scurt: 'ml', exemplu: '12' },
  { id: 'buc', eticheta: 'Număr bucăți', scurt: 'Bucăți', exemplu: '8' },
  { id: 'camere', eticheta: 'Număr camere', scurt: 'Camere', exemplu: '3' },
  { id: 'complet', eticheta: 'Lucrare completă', scurt: 'Complet', exemplu: null },
] as const;
