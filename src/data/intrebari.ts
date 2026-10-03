/**
 * Intrebari frecvente.
 *
 * Au doua roluri. Pentru vizitator: raspund obiectiilor reale inainte sa sune,
 * ca sa nu plece de pe site cu o nelamurire. Pentru Google: aduc continut
 * scris in jurul cautarilor pe care le tintim, si alimenteaza datele
 * structurate FAQPage, care pot aparea direct in rezultate.
 *
 * REGULA: raspunsurile trebuie sa fie adevarate si sustinute in practica
 * firmei. Nu adauga aici promisiuni (preturi ferme, termene exacte, garantii)
 * care nu se regasesc in contractele reale — un raspuns pe care nu-l poti
 * onora face mai mult rau decat lipsa lui.
 */

export interface Intrebare {
  intrebare: string;
  raspuns: string;
}

export const INTREBARI: Intrebare[] = [
  {
    intrebare: 'Cât costă compartimentarea unei hale?',
    raspuns:
      'Depinde de suprafață, de tipul peretelui (simplu, dublu, cu cerință acustică sau antifoc) și de înălțimea de lucru. Un perete simplu la 3 metri și unul dublu izolat la 8 metri sunt lucrări diferite ca manoperă și material. De aceea nu afișăm prețuri pe site: ți-am da o cifră care nu înseamnă nimic. Trimite-ne suprafața și, dacă ai, planul — primești un deviz defalcat pe categorii în cel mult 24 de ore, gratuit.',
  },
  {
    intrebare: 'Lucrați la înălțime, în hale cu tavane înalte?',
    raspuns:
      'Da. Avem schele certificate și echipament pentru lucru până la 10 metri. E una dintre lucrările pe care le facem cel mai des, pentru că multe firme de finisaje se opresc la înălțimea la care ajunge o scară obișnuită.',
  },
  {
    intrebare: 'Cât durează o lucrare de compartimentare?',
    raspuns:
      'Termenul se stabilește după ce vedem spațiul și proiectul, iar apoi îl asumăm în contract, cu penalizări la întârziere. Preferăm să spunem un termen pe care îl respectăm decât unul care sună bine la semnare. Ritmul real depinde de accesul în hală, de câte echipe putem aduce și de dacă lucrăm în paralel cu alte meserii.',
  },
  {
    intrebare: 'Lucrați ca subantreprenor pentru firme de construcții?',
    raspuns:
      'Da, o bună parte din volumul nostru vine din subantrepriză. Venim cu echipă proprie și utilaje proprii, ne încadrăm în graficul antreprenorului general și facturăm pe etape de execuție.',
  },
  {
    intrebare: 'Ce materiale folosiți?',
    raspuns:
      'Sisteme Knauf și Rigips originale, agrementate tehnic, cu declarații de conformitate. Pentru lucrările pe fonduri europene păstrăm trasabilitatea loturilor livrate pe șantier, pentru că auditul o cere.',
  },
  {
    intrebare: 'Puteți lucra pe proiecte finanțate din fonduri europene?',
    raspuns:
      'Da. Emitem documentația cerută de auditori: procese verbale de recepție, fișe tehnice, rapoarte de execuție. Facturăm pe faze, ca decontarea pe tranșe să nu blocheze finanțarea, și tratăm termenele din contractul de finanțare ca termene ferme.',
  },
  {
    intrebare: 'Citiți proiecte de arhitectură sau trebuie explicat pe șantier?',
    raspuns:
      'Citim planuri și detalii de execuție. Ne poți trimite proiectul pe email, îl studiem, și venim pe șantier cu ofertă și plan de lucru. Dacă un detaliu nu se poate executa tehnic, îți spunem înainte să începem, nu după.',
  },
  {
    intrebare: 'În ce zone lucrați?',
    raspuns:
      'În Râmnicu Vâlcea și în tot județul Vâlcea — Drăgășani, Băbeni, Călimănești, Horezu, Brezoi. Pentru lucrări mari ne deplasăm și în restul Olteniei și în Muntenia.',
  },
  {
    intrebare: 'Faceți și lucrări mici, la apartamente?',
    raspuns:
      'Da. Ne-am specializat pe hale și spații mari, dar executăm și finisaje rezidențiale — apartamente, case, renovări. Aceeași echipă și aceleași materiale, doar scara diferă.',
  },
  {
    intrebare: 'Ce garanție oferiți?',
    raspuns:
      'Doi ani, în scris, pentru lucrările de gips-carton și finisaje, în condițiile din contract. Garanția acoperă defectele de execuție. Nu acoperă degradările din utilizare necorespunzătoare, intervenții ulterioare ale altor executanți, infiltrații sau mișcări ale structurii clădirii.',
  },
];
