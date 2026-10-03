/**
 * Cele doua directii ale firmei.
 *
 * Sunt doua afaceri diferite, cu clienti diferiti si limbaj diferit:
 *
 *   HALE SI INDUSTRIAL — dezvoltatori, antreprenori generali, firme.
 *     Ii intereseaza suprafata, termenul, graficul, facturarea pe etape.
 *     Limbaj tehnic, cifre, procese.
 *
 *   FINISAJE PREMIUM — beneficiari finali, arhitecti, designeri, HoReCa.
 *     Ii intereseaza detaliul, materialul, cum arata la final.
 *     Limbaj de executie fina, nu de productie.
 *
 * Fiecare are pagina ei. Prima pagina ramane orientata pe industrial —
 * aia e pozitionarea — si trimite catre amandoua.
 */

import type { ImageMetadata } from 'astro';

import pozaHala from '~/assets/lucrari/santier-hala-comerciala-gips-carton.jpg';
import pozaHoreca from '~/assets/lucrari/amenajare-horeca-tencuiala-decorativa.jpg';

export interface Directie {
  id: string;
  cale: string;
  eticheta: string;
  titlu: string;
  subtitlu: string;
  pentruCine: string;
  poza: ImageMetadata;
  pozaAlt: string;
}

export const DIRECTII: Directie[] = [
  {
    id: 'industrial',
    cale: '/hale-industriale',
    eticheta: 'Direcția 01',
    titlu: 'Hale și spații industriale',
    subtitlu:
      'Compartimentări, izolații și finisaje în hale de producție, depozite și spații comerciale. Suprafețe mari, lucru la înălțime, grafic asumat contractual.',
    pentruCine: 'Dezvoltatori · Antreprenori generali · Firme',
    poza: pozaHala,
    pozaAlt:
      'Compartimentare în execuție într-o hală comercială, cu structură metalică și tavan tehnic aparent',
  },
  {
    id: 'premium',
    cale: '/finisaje-premium',
    eticheta: 'Direcția 02',
    titlu: 'Finisaje premium pentru interioare',
    subtitlu:
      'Apartamente, case și spații HoReCa. Tencuieli decorative, microciment, tavane cu iluminat integrat și detalii executate după proiectul de arhitectură.',
    pentruCine: 'Beneficiari finali · Arhitecți · HoReCa',
    poza: pozaHoreca,
    pozaAlt:
      'Amenajare interioară HoReCa cu tencuială decorativă, tavan din lambriu și iluminat ambiental pe arcade',
  },
];

/** Serviciile din zona premium. Limbaj de executie fina, nu de productie. */
export const SERVICII_PREMIUM = [
  {
    titlu: 'Tencuieli decorative',
    text: 'Beton aparent, marmură venețiană, suprafețe structurate sau mate. Realizăm mostre pe suprafață test înainte de aplicarea pe toată lucrarea.',
    icon: 'driscă',
  },
  {
    titlu: 'Microciment',
    text: 'Suprafețe continue, fără rost, pe pereți, pardoseli sau blaturi. Finisaj modern care cere aplicare în straturi subțiri și răbdare între ele.',
    icon: 'finisaj',
  },
  {
    titlu: 'Tavane cu iluminat integrat',
    text: 'Nișe pentru bandă LED, praguri de lumină, forme curbe și mascări de instalații. Executăm ce e desenat, nu ce e mai ușor de făcut.',
    icon: 'tavan',
  },
  {
    titlu: 'Glet fin și zugrăveli',
    text: 'Pregătirea suprafeței face diferența între un perete bun și unul la care se vede fiecare val în lumina razantă. Aici se câștigă sau se pierde finisajul.',
    icon: 'perete',
  },
  {
    titlu: 'Gresie, faianță, parchet',
    text: 'Montaj cu atenție la trasaj și la întâlnirile dintre materiale. Rosturile aliniate și pragurile curate se văd mai mult decât materialul în sine.',
    icon: 'izolatie',
  },
  {
    titlu: 'Amenajări complete',
    text: 'Preluăm spațiul la gri și îl predăm finisat: compartimentare, instalații mascate, pardoseli, zugrăveli, montaj uși și corpuri de iluminat.',
    icon: 'plan',
  },
] as const;

/** Cum lucram cu arhitectii si designerii — argumentul pentru zona premium. */
export const ANGAJAMENTE_PREMIUM = [
  'Citim planurile și detaliile de execuție înainte de prima vizită pe șantier.',
  'Executăm forme complexe: nișe, curbe, mascări de instalații, praguri de lumină.',
  'Realizăm mostre pe suprafețe test înainte de aplicarea pe toată lucrarea.',
  'Comunicăm direct cu proiectantul, nu prin intermediari.',
  'Dacă un detaliu nu se poate executa tehnic, o spunem înainte, nu după.',
] as const;

/** Etapele unei lucrari industriale. Dezvoltatorii vor sa vada procesul. */
export const ETAPE_INDUSTRIAL = [
  {
    titlu: 'Evaluare și ofertă',
    text: 'Primim planul sau dimensiunile, venim la măsurătoare și transmitem un deviz defalcat pe categorii. Gratuit, în cel mult 24 de ore.',
  },
  {
    titlu: 'Grafic și contract',
    text: 'Stabilim termenele împreună cu antreprenorul general și le asumăm în contract, cu penalizări la întârziere.',
  },
  {
    titlu: 'Structură și instalații',
    text: 'Montăm profilele metalice, lăsăm golurile pentru instalații și coordonăm cu celelalte meserii care lucrează în paralel.',
  },
  {
    titlu: 'Izolație și placare',
    text: 'Vată minerală pentru cerințele termice și acustice, apoi placare pe una sau două fețe, inclusiv la înălțime.',
  },
  {
    titlu: 'Glet și finisaj',
    text: 'Pregătirea suprafețelor și aplicarea mecanizată a lavabilei, cu pompe profesionale — de câteva ori mai rapid pe suprafețe mari.',
  },
  {
    titlu: 'Recepție și documentație',
    text: 'Predăm lucrarea cu procese verbale, fișe tehnice și, unde e cazul, documentația cerută de auditul european.',
  },
] as const;
