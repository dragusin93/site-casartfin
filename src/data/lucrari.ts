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
  alt: string;
  categorie: CategorieLucrare;
  /** Apare in selectia de proiecte industriale de pe prima pagina. */
  industrial?: boolean;
}

export const LUCRARI: Lucrare[] = [
  // ---- Hale si spatii industriale ----
  {
    src: santierHala,
    alt: 'Șantier de compartimentare într-o hală comercială, cu plăci de gips carton pregătite pentru montaj și tavan tehnic aparent',
    categorie: 'hale',
    industrial: true,
  },
  {
    src: spatiuIndustrial,
    alt: 'Spațiu industrial finisat, cu pereți din gips carton vopsiți și instalații termice montate',
    categorie: 'hale',
    industrial: true,
  },
  {
    src: placareInaltime,
    alt: 'Placare cu gips carton pe perete de înălțime mare, executată cu schelă în hală industrială',
    categorie: 'hale',
    industrial: true,
  },
  {
    src: spatiuComercialPereti,
    alt: 'Hală comercială cu pereți din gips carton gletuiți și vopsiți, sub tavan tehnic metalic aparent',
    categorie: 'hale',
    industrial: true,
  },

  // ---- Spatii comerciale ----
  {
    src: spatiuComercialFinisat,
    alt: 'Spațiu comercial finalizat, cu pereți din gips carton finisați și tavan tehnic cu spoturi încastrate',
    categorie: 'comercial',
  },
  {
    src: amenajareHoreca,
    alt: 'Amenajare interioară HoReCa cu tencuială decorativă, tavan din lambriu și iluminat ambiental pe arcade',
    categorie: 'comercial',
  },
  {
    src: tencuialaDecorativa,
    alt: 'Perete cu tencuială decorativă texturată și inel luminos LED, lângă placare din lemn',
    categorie: 'comercial',
  },

  // ---- Birouri si compartimentari ----
  {
    src: compartimentariBirouri,
    alt: 'Compartimentări de birouri din gips carton, cu structură metalică și goluri de uși trasate',
    categorie: 'birouri',
    industrial: true,
  },
  {
    src: compartimentareExecutie,
    alt: 'Perete din gips carton în curs de execuție, cu profile metalice verticale și placare parțială',
    categorie: 'birouri',
  },
  {
    src: compartimentareFonica,
    alt: 'Coridor cu pereți dubli din gips carton și izolație fonică din vată minerală vizibilă',
    categorie: 'birouri',
  },

  // ---- Structuri si izolatii ----
  {
    src: izolatieVata,
    alt: 'Izolație din vată minerală montată între profile metalice, în jurul tubulaturii de ventilație',
    categorie: 'structuri',
    industrial: true,
  },
  {
    src: structuraTubulatura,
    alt: 'Structură metalică placată cu gips carton, cu tubulatura de ventilație integrată',
    categorie: 'structuri',
  },
  {
    src: gletuirePereti,
    alt: 'Pereți din gips carton rezistent la umezeală, în faza de gletuire și pregătire a suprafeței',
    categorie: 'structuri',
  },

  // ---- Finisaje rezidentiale ----
  {
    src: structuriSanitare,
    alt: 'Structuri din gips carton pentru grup sanitar, cu rezervoare WC încastrate în perete',
    categorie: 'rezidential',
  },
  {
    src: instalatiiSanitare,
    alt: 'Grup sanitar în execuție, cu instalații și rezervoare încastrate în structura de gips carton',
    categorie: 'rezidential',
  },
  {
    src: grupSanitar,
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

/** Selectia care apare pe prima pagina. */
export const LUCRARI_INDUSTRIALE = LUCRARI.filter((l) => l.industrial);
