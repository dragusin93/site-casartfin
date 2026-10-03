/**
 * DIAGNOSTIC TEMPORAR — de sters imediat ce formularele merg.
 *
 * Raspunde la intrebarea: functia vede variabilele de mediu setate in Vercel?
 * NU expune nicio valoare — doar daca variabila exista si cate caractere are,
 * ca sa putem distinge intre "nu e setata", "e setata dar goala" si "e setata
 * pe alt environment decat Production".
 */

export const config = { runtime: 'edge' };

export default async function handler(): Promise<Response> {
  const cheie = process.env.RESEND_API_KEY;

  let nrChei = -1;
  let areNumeleInLista = false;
  try {
    const chei = Object.keys(process.env ?? {});
    nrChei = chei.length;
    areNumeleInLista = chei.includes('RESEND_API_KEY');
  } catch {
    /* in unele runtime-uri process.env nu e enumerabil */
  }

  return new Response(
    JSON.stringify(
      {
        runtime: 'edge',
        process_exista: typeof process !== 'undefined',
        process_env_exista: typeof process !== 'undefined' && typeof process.env === 'object',
        resend_key_definita: typeof cheie === 'string' && cheie.length > 0,
        resend_key_lungime: typeof cheie === 'string' ? cheie.length : null,
        resend_key_incepe_cu_re: typeof cheie === 'string' ? cheie.startsWith('re_') : null,
        email_catre_definit: Boolean(process.env.EMAIL_CATRE),
        email_de_la_definit: Boolean(process.env.EMAIL_DE_LA),
        nr_variabile_vizibile: nrChei,
        numele_apare_in_lista: areNumeleInLista,
        vercel_env: process.env.VERCEL_ENV ?? null,
        commit: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? null,
      },
      null,
      1,
    ),
    { headers: { 'Content-Type': 'application/json' } },
  );
}
