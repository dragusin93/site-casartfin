/**
 * Galeria de lucrari.
 *
 * Categoriile sunt ordonate dupa pozitionarea firmei: halele si spatiile
 * industriale primele, rezidentialul ultimul. `industrial: true` marcheaza
 * lucrarile care apar in selectia de pe prima pagina.
 *
 * Fiecare imagine e importata static, ca Astro sa o poata optimiza la build
 * (AVIF/WebP + srcset + width/height). NU muta pozele in `public/` — acolo
 * sunt servite brute, iar originalele au intre 200 KB si 2,1 MB bucata.
 *
 * `alt` descrie ce se vede efectiv in poza (verificat vizual, nu generat).
 */

import amenajareHoreca from '~/assets/lucrari/amenajare-horeca-tencuiala-decorativa.jpg';
import compartimentareExecutie from '~/assets/lucrari/compartimentare-gips-carton-in-executie.jpg';
import compartimentareFonica from '~/assets/lucrari/compartimentare-izolatie-fonica-coridor.jpg';
import compartimentariBirouri from '~/assets/lucrari/compartimentari-birouri-structura-metalica.jpg';
import gletuirePereti from '~/assets/lucrari/gletuire-pereti-gips-carton.jpg';
import grupSanitar from '~/assets/lucrari/grup-sanitar-finisat-gips-carton.jpg';
import instalatiiSanitare from '~/assets/lucrari/instalatii-sanitare-incastrate.jpg';
import izolatieVata from '~/assets/lucrari/izolatie-vata-minerala-tubulatura-ventilatie.jpg';
import placareInaltime from '~/assets/lucrari/placare-pereti-inaltime-mare.jpg';
import santierHala from '~/assets/lucrari/santier-hala-comerciala-gips-carton.jpg';
import spatiuComercialFinisat from '~/assets/lucrari/spatiu-comercial-finisat-tavan-tehnic.jpg';
import spatiuComercialPereti from '~/assets/lucrari/spatiu-comercial-pereti-gips-carton-finisati.jpg';
import spatiuIndustrial from '~/assets/lucrari/spatiu-industrial-finisat-gips-carton.jpg';
import structuraTubulatura from '~/assets/lucrari/structura-metalica-tubulatura-gips-carton.jpg';
import structuriSanitare from '~/assets/lucrari/structuri-sanitare-incastrate-gips-carton.jpg';
import tencuialaDecorativa from '~/assets/lucrari/tencuiala-decorativa-iluminat-led.jpg';

import type { ImageMetadata } from 'astro';

export type CategorieLucrare = 'hale' | 'comercial' | 'birouri' | 'structuri' | 'rezidential';

export interface Lucrare {
  src: ImageMetadata;
  /** Eticheta scurta afisata sub fotografie in caruselul din hero. */
  titlu: string;
  alt: string;
  categorie: CategorieLucrare;
  /** Apare in selectia de proiecte industriale de pe prima pagina. */
  industrial?: boolean;
}

export const LUCRARI: Lucrare[] = [
  // ---- Hale si spatii industriale ----
  {
    src: santierHala,
    titlu: 'Hală comercială',
    alt: 'Șantier de compartimentare într-o hală comercială, cu plăci de gips carton pregătite pentru montaj și tavan tehnic aparent',
    categorie: 'hale',
    industrial: true,
  },
  {
    src: spatiuIndustrial,
    titlu: 'Spațiu industrial',
    alt: 'Spațiu industrial finisat, cu pereți din gips carton vopsiți și instalații termice montate',
    categorie: 'hale',
    industrial: true,
  },
  {
    src: placareInaltime,
    titlu: 'Placare la înălțime',
    alt: 'Placare cu gips carton pe perete de înălțime mare, executată cu schelă în hală industrială',
    categorie: 'hale',
    industrial: true,
  },
  {
    src: spatiuComercialPereti,
    titlu: 'Pereți hală',
    alt: 'Hală comercială cu pereți din gips carton gletuiți și vopsiți, sub tavan tehnic metalic aparent',
    categorie: 'hale',
    industrial: true,
  },

  // ---- Spatii comerciale ----
  {
    src: spatiuComercialFinisat,
    titlu: 'Spațiu comercial',
    alt: 'Spațiu comercial finalizat, cu pereți din gips carton finisați și tavan tehnic cu spoturi încastrate',
    categorie: 'comercial',
  },
  {
    src: amenajareHoreca,
    titlu: 'Amenajare HoReCa',
    alt: 'Amenajare interioară HoReCa cu tencuială decorativă, tavan din lambriu și iluminat ambiental pe arcade',
    categorie: 'comercial',
  },
  {
    src: tencuialaDecorativa,
    titlu: 'Tencuială decorativă',
    alt: 'Perete cu tencuială decorativă texturată și inel luminos LED, lângă placare din lemn',
    categorie: 'comercial',
  },

  // ---- Birouri si compartimentari ----
  {
    src: compartimentariBirouri,
    titlu: 'Birouri în hală',
    alt: 'Compartimentări de birouri din gips carton, cu structură metalică și goluri de uși trasate',
    categorie: 'birouri',
    industrial: true,
  },
  {
    src: compartimentareExecutie,
    titlu: 'Compartimentare',
    alt: 'Perete din gips carton în curs de execuție, cu profile metalice verticale și placare parțială',
    categorie: 'birouri',
  },
  {
    src: compartimentareFonica,
    titlu: 'Izolație fonică',
    alt: 'Coridor cu pereți dubli din gips carton și izolație fonică din vată minerală vizibilă',
    categorie: 'birouri',
  },

  // ---- Structuri si izolatii ----
  {
    src: izolatieVata,
    titlu: 'Izolație tubulatură',
    alt: 'Izolație din vată minerală montată între profile metalice, în jurul tubulaturii de ventilație',
    categorie: 'structuri',
    industrial: true,
  },
  {
    src: structuraTubulatura,
    titlu: 'Structură și tubulatură',
    alt: 'Structură metalică placată cu gips carton, cu tubulatura de ventilație integrată',
    categorie: 'structuri',
  },
  {
    src: gletuirePereti,
    titlu: 'Gletuire pereți',
    alt: 'Pereți din gips carton rezistent la umezeală, în faza de gletuire și pregătire a suprafeței',
    categorie: 'structuri',
  },

  // ---- Finisaje rezidentiale ----
  {
    src: structuriSanitare,
    titlu: 'Structuri sanitare',
    alt: 'Structuri din gips carton pentru grup sanitar, cu rezervoare WC încastrate în perete',
    categorie: 'rezidential',
  },
  {
    src: instalatiiSanitare,
    titlu: 'Instalații sanitare',
    alt: 'Grup sanitar în execuție, cu instalații și rezervoare încastrate în structura de gips carton',
    categorie: 'rezidential',
  },
  {
    src: grupSanitar,
    titlu: 'Grup sanitar',
    alt: 'Grup sanitar finalizat, cu pereți din gips carton finisați și vopsiți și vas WC suspendat',
    categorie: 'rezidential',
  },
];

export const CATEGORII: { id: CategorieLucrare; eticheta: string; descriere: string }[] = [
  {
    id: 'hale',
    eticheta: 'Hale și spații industriale',
    descriere: 'Compartimentări, placări la înălțime și finisaje în hale de producție și depozite.',
  },
  {
    id: 'comercial',
    eticheta: 'Spații comerciale',
    descriere: 'Magazine, showroom-uri și spații HoReCa, de la structură la finisajul decorativ.',
  },
  {
    id: 'birouri',
    eticheta: 'Birouri și compartimentări',
    descriere: 'Birouri delimitate în hale, coridoare și pereți cu cerințe acustice.',
  },
  {
    id: 'structuri',
    eticheta: 'Structuri și izolații',
    descriere: 'Profile metalice, vată minerală, mascări de instalații și pregătirea suprafețelor.',
  },
  {
    id: 'rezidential',
    eticheta: 'Finisaje rezidențiale',
    descriere: 'Apartamente și case — lucrări mai mici, aceeași execuție.',
  },
];

/** Selectia de proiecte de pe prima pagina. */
export const LUCRARI_INDUSTRIALE = LUCRARI.filter((l) => l.industrial);

/**
 * Setul care ruleaza in caruselul din hero.
 *
 * Exclude rezidentialul intentionat: pozitionarea firmei e pe hale si spatii
 * industriale, iar grupurile sanitare din hero ar contrazice exact mesajul.
 * Ca sa apara si ele, scoate filtrul de mai jos.
 */
export const LUCRARI_HERO = LUCRARI.filter((l) => l.categorie !== 'rezidential');
