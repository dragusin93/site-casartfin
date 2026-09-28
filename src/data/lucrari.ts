/**
 * Galeria de lucrari.
 *
 * Fiecare imagine este importata static, ca Astro sa o poata optimiza la build
 * (AVIF/WebP + srcset + width/height). NU muta pozele in `public/` — acolo sunt
 * servite brute, iar originalele au intre 200 KB si 2,1 MB bucata.
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

export type CategorieLucrare = 'comercial' | 'industrial' | 'rezidential' | 'structura';

export interface Lucrare {
  src: ImageMetadata;
  alt: string;
  categorie: CategorieLucrare;
}

export const LUCRARI: Lucrare[] = [
  {
    src: amenajareHoreca,
    alt: 'Amenajare interioara HoReCa cu tencuiala decorativa, tavan din lambriu de lemn si iluminat ambiental pe arcade',
    categorie: 'comercial',
  },
  {
    src: tencuialaDecorativa,
    alt: 'Perete cu tencuiala decorativa texturata si inel luminos LED, langa placare din lemn',
    categorie: 'comercial',
  },
  {
    src: spatiuComercialFinisat,
    alt: 'Spatiu comercial finalizat, cu pereti din gips carton finisati si tavan tehnic aparent cu spoturi',
    categorie: 'comercial',
  },
  {
    src: spatiuComercialPereti,
    alt: 'Hala comerciala cu pereti din gips carton gletuiti si vopsiti, tavan tehnic metalic aparent',
    categorie: 'comercial',
  },
  {
    src: spatiuIndustrial,
    alt: 'Spatiu industrial finisat, cu pereti din gips carton vopsiti si instalatii termice montate',
    categorie: 'industrial',
  },
  {
    src: santierHala,
    alt: 'Santier in hala comerciala, cu placi de gips carton pregatite pentru montaj si tavan tehnic',
    categorie: 'industrial',
  },
  {
    src: placareInaltime,
    alt: 'Placare cu gips carton pe perete de inaltime mare, in hala industriala',
    categorie: 'industrial',
  },
  {
    src: izolatieVata,
    alt: 'Izolatie din vata minerala intre profile metalice, in jurul tubulaturii de ventilatie',
    categorie: 'structura',
  },
  {
    src: compartimentareFonica,
    alt: 'Coridor cu pereti dubli din gips carton si izolatie fonica din vata minerala vizibila',
    categorie: 'structura',
  },
  {
    src: structuraTubulatura,
    alt: 'Structura metalica placata cu gips carton, cu tubulatura de ventilatie integrata',
    categorie: 'structura',
  },
  {
    src: compartimentareExecutie,
    alt: 'Perete din gips carton in curs de executie, cu profile metalice verticale si placare partiala',
    categorie: 'structura',
  },
  {
    src: compartimentariBirouri,
    alt: 'Compartimentari de birouri din gips carton, cu structura metalica si goluri de usi trasate',
    categorie: 'structura',
  },
  {
    src: gletuirePereti,
    alt: 'Pereti din gips carton rezistent la umezeala, in faza de gletuire si pregatire a suprafetei',
    categorie: 'structura',
  },
  {
    src: structuriSanitare,
    alt: 'Structuri din gips carton pentru grup sanitar, cu rezervoare WC incastrate in perete',
    categorie: 'rezidential',
  },
  {
    src: instalatiiSanitare,
    alt: 'Grup sanitar in executie, cu instalatii si rezervoare incastrate in structura de gips carton',
    categorie: 'rezidential',
  },
  {
    src: grupSanitar,
    alt: 'Grup sanitar finalizat, cu pereti din gips carton finisati si vopsiti si vas WC suspendat',
    categorie: 'rezidential',
  },
];

export const CATEGORII: { id: CategorieLucrare | 'toate'; eticheta: string }[] = [
  { id: 'toate', eticheta: 'Toate lucrările' },
  { id: 'comercial', eticheta: 'Comercial' },
  { id: 'industrial', eticheta: 'Industrial' },
  { id: 'rezidential', eticheta: 'Rezidențial' },
  { id: 'structura', eticheta: 'Structuri și izolații' },
];
