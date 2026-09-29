# CASARTFIN CONSTRUCT — site de prezentare

Context pentru orice agent care lucrează în acest folder. Citește-l înainte să
modifici ceva.

## Despre firmă

CASARTFIN CONSTRUCT S.R.L. — gips carton, tencuieli mecanizate și finisaje, în
Râmnicu Vâlcea și județul Vâlcea. Firmă de familie, înființată în 2025, cu peste
20 de ani de meserie în spate (tatăl a transmis meseria fiilor).

Site-ul are **un singur scop: să genereze cereri de ofertă**. Nu e magazin, nu
are conturi, nu are plăți. Orice modificare care îngreunează drumul de la
„am intrat pe site" la „am trimis o solicitare" e o modificare proastă.

Publicul: beneficiari finali, dezvoltatori imobiliari, firme de construcții
(subantrepriză), beneficiari de fonduri europene (PNRR/POR), arhitecți.

## Stack

- **Astro 7** — output static, zero JavaScript livrat implicit
- **Vercel** — găzduire, deploy automat din GitHub la fiecare push pe `master`
- **Resend** — trimiterea emailurilor din formulare (`api/contact.ts`)
- Fără framework UI, fără Tailwind, fără bază de date. CSS scris de mână.

Repo: `github.com/dragusin93/site-casartfin`, branch principal `master`.

```bash
npm run dev      # server local pe :4321
npm run build    # build in dist/
npm run preview  # verifica build-ul local
```

## Structură

```
src/
├── data/          # SINGURA sursă de adevăr pentru conținut
│   ├── firma.ts      contact, adresă, program, link WhatsApp
│   ├── servicii.ts   6 servicii principale + cele 23 din nomenclator
│   └── lucrari.ts    galeria: import imagine + alt + categorie
├── layouts/
│   ├── BaseLayout.astro   <head>, SEO, schema.org, header, footer
│   └── PaginaText.astro   pentru politici și termeni
├── components/    câte o componentă per secțiune
├── scripts/formular.ts    logica celor 3 formulare
├── styles/global.css      TOATE culorile și spațiile
└── pages/         index, politica-confidentialitate, termeni, 404
api/contact.ts     funcție serverless Vercel → Resend
public/            favicon, robots.txt, logo servit brut
```

## Reguli care contează

**Datele se schimbă în `src/data/`, nu în componente.** Telefonul, adresa,
lista de servicii — toate vin de acolo. În varianta veche a site-ului lista de
servicii era copiată în două locuri și deja divergease.

**Culorile se schimbă în `src/styles/global.css`, în `:root`.** Nicio culoare
scrisă direct într-o componentă. Paleta actuală („Piatră și Indigo"):

| Token | Valoare | Rol |
|---|---|---|
| `--stone` | `#F2F1EE` | fundal principal |
| `--stone-2` | `#F9F8F6` | carduri, suprafețe ridicate |
| `--ink` | `#191B21` | titluri |
| `--ink-2` | `#4C505A` | text de conținut |
| `--indigo` | `#26355C` | accent principal |
| `--terra` | `#B4694A` | accent secundar, gradații |

Fonturi: **Spectral** (titluri), **Archivo** (text), **JetBrains Mono**
(etichete). Limbajul vizual e de *fișă tehnică*: linii de cotă (`.cota`),
etichete monospace cu spațiere mare, colțuri drepte (`--r: 2px`), numerotare
`01 / 02 / 03`.

**Imaginile trec prin `<Image>` sau `<Picture>` din `astro:assets`**, importate
din `src/assets/`. Nu pune poze în `public/` — acolo sunt servite brute.
Originalele au între 200 KB și 2,1 MB; prin `<Picture formats={['avif','webp']}>`
ajung la zeci de KB. Formatele **nu** se configurează global în `astro.config.mjs`.

**Textul e în română, cu diacritice.** Comentariile din cod sunt în română fără
diacritice (ca să nu depindă de encoding).

**Nu copia design de la zotas.ro.** E un site din același oraș, al unui prieten
al clientului. A servit ca inspirație pentru direcție (paletă caldă, serif +
sans, inele rotative), dar compoziția, paleta și tipografia trebuie să rămână
ale CASARTFIN. Dacă ți se cere „ca la zotas", cere lămuriri.

## Capcane deja întâlnite

**Stilul scopat nu ajunge pe componenta copil.** O clasă pasată ca
`<Componenta class="x" />` nu primește stilul definit în `<style>`-ul
părintelui. Inelele din hero au fost sparte din cauza asta. Soluție: un `<div>`
în componenta părinte care înfășoară copilul.

**Elementele `.apare` sunt ascunse doar dacă JS rulează.** Regula CSS e
`html.js .apare`, iar clasa `js` se pune inline în `<head>`. Fără asta, o
eroare de JS ar face jumătate din site invizibil permanent. Observatorul are
`threshold: 0` plus o măturare la derulare, pentru că la derulare rapidă
elementele pot traversa ecranul fără să fie raportate.

**Nu folosi listener pe `scroll` pentru layout.** Header-ul folosește
`IntersectionObserver` pe o santinelă. Varianta veche recalcula poziția tuturor
secțiunilor la fiecare pixel.

## Formularele

Trei formulare: `form-oferta` (calculator), `form-investitori`, `form-contact`.
Toate trec prin `initFormular()` din `src/scripts/formular.ts` și trimit
`POST /api/contact`.

Fiecare are: `name` pe toate câmpurile, capcană pentru roboți (câmpul ascuns
`website`), checkbox de consimțământ GDPR obligatoriu, și un buton care
precompletează mesajul în WhatsApp cu datele introduse.

**Istoric:** în varianta veche formularele făceau `preventDefault()` și afișau
„Mesaj trimis cu succes!" fără să trimită nimic nicăieri. Din 18 câmpuri, doar
2 aveau `name`. Nu reintroduce acest comportament: dacă trimiterea eșuează,
utilizatorul trebuie să vadă eroarea și numărul de telefon.

## De făcut (necompletat de client)

- [x] ~~CUI și Reg. Comerțului~~ — completate: CUI `52979450`,
      `J2025091219005`, înmatriculată noiembrie 2025.

      **Firma are două adrese, cu roluri diferite — nu le amesteca:**
      `sediuSocial` (Bd. Tineretului nr. 2) e adresa juridică din Registrul
      Comerțului, folosită în footer, Termeni și Politica de confidențialitate.
      `birou` (Gib Mihăescu) e unde vin clienții, deci apare la Contact, pe
      hartă și în schema.org.
- [ ] **Domeniul propriu.** `casartfin.ro` nu e încă înregistrat (verificat:
      NXDOMAIN). Până e cumpărat, site-ul rulează pe
      `site-casartfin.vercel.app`, iar `astro.config.mjs` folosește automat
      domeniul dat de Vercel. **După ce domeniul e activ**, setează
      `PUBLIC_SITE_URL=https://casartfin.ro` în variabilele Vercel și
      redeployează — canonical, sitemap, robots.txt și Open Graph îl preiau
      singure. Nu mai există niciun domeniu scris de mână în cod.
- [ ] **`RESEND_API_KEY` pe Vercel** — fără ea `/api/contact` întoarce 500 și
      niciun formular nu trimite. `EMAIL_CATRE` și `EMAIL_DE_LA` sunt
      opționale; fără ele se folosesc valorile implicite din `api/contact.ts`.

      **Capcană:** până când `casartfin.ro` e cumpărat și verificat în Resend,
      expeditorul e `onboarding@resend.dev`. Pe acel domeniu partajat, Resend
      trimite **doar către adresa cu care a fost creat contul** — orice alt
      destinatar primește 403 și formularele afișează eroare. Deci contul
      Resend trebuie creat exact pe `casartfin@gmail.com`. Test după
      configurare: trimite o solicitare reală și caută în Vercel → Logs linia
      `[contact] Resend a raspuns`.
- [x] ~~`public/og-casartfin.jpg`~~ — generată. Se regenerează cu `npm run og`
      (vezi `scripts/genereaza-og.mjs`) dacă se schimbă sloganul sau poza.
- [ ] **Coordonatele geo** din `firma.ts` sunt aproximative pentru Rm. Vâlcea;
      de înlocuit cu cele exacte ale sediului
- [ ] Paginile legale au nevoie de **verificare juridică** înainte de publicare
- [ ] **Fotografii cu echipa pe șantier** — oameni cu căști, cu planuri în mână.
      Clientul le-a cerut, dar nu există în portofoliu: toate cele 16 poze sunt
      spații goale, fără oameni. Nu folosi poze de stoc cu muncitori: pe o
      secțiune „ce executăm" ar sugera că sunt angajații firmei, ceea ce e
      fals. Se așteaptă poze reale de la client.
- [ ] **Google Business Profile** — pentru o firmă locală e canalul principal;
      schema.org `GeneralContractor` e deja pusă și îl alimentează

## Ce NU are site-ul (intenționat)

Fără cookie-uri de urmărire, fără Google Analytics, fără bandă de consimțământ
pentru cookie-uri. Politica de confidențialitate afirmă asta explicit — dacă
adaugi analytics, actualizeaz-o în aceeași modificare, altfel devine falsă.
