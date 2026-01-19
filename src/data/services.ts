export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  materials?: string[];
  finish?: string[];
  details?: string[];
  price?: string;
  priceWithVat?: string;
}

export const services: Service[] = [
  {
    id: 'zabradlia',
    title: 'Zábradlia',
    slug: 'zabradlia',
    description: 'Vyrábame moderné aj kované zábradlia.',
    features: [
      'Vyrábame moderné aj kované zábradlia',
      'Prevedieme zameranie, výrobu, dopravu, aj montáž',
      'Výhodné ceny'
    ],
    materials: ['oceľ', 'nerezová oceľ', 'hliník', 'kombinácia'],
    finish: ['farba syntetická', 'farba prášková', 'pozinkovanie']
  },
  {
    id: 'brany-a-oplotenia',
    title: 'Brány a oplotenia',
    slug: 'brany-a-oplotenia',
    description: 'Vyrábame moderné aj kované oplotenia a brány. Brány otváracie, posuvné na koľajničke, aj posuvné samonosné. Možnosť elektrického posuvu aj s diaľkovým ovládaním.',
    features: [
      'Vyrábame moderné aj kované oplotenia',
      'Brány otváracie, posuvné na koľajničke, aj posuvné samonosné',
      'Možnosť elektrického posuvu aj s diaľkovým ovládaním',
      'Prevedieme zameranie, návrh, výrobu, dopravu, aj montáž',
      'Výhodné ceny'
    ],
    materials: ['oceľ', 'nerezová oceľ', 'hliník', 'kombinácia'],
    finish: ['farba syntetická', 'farba prášková', 'pozinkovanie']
  },
  {
    id: 'schodiska',
    title: 'Schodiská',
    slug: 'schodiska',
    description: 'Výroba schodísk na mieru.',
    features: [
      'Výroba schodísk na mieru',
      'Prevedieme zameranie, výrobu, dopravu, aj montáž',
      'Výhodné ceny'
    ],
    materials: ['oceľ', 'pozinkovaný', 'nehrdzavejúca oceľ (nerezový)']
  },
  {
    id: 'plynove-skrine',
    title: 'Plynové skrine',
    slug: 'plynove-skrine',
    description: 'Plynové skrine vyrobené z pozinkovaného plechu. V ponuke aj štandardná Skrinka pre plynomer s regulátorom T1.',
    features: [
      'Plynové skrine sú vyrobené z pozinkovaného plechu',
      'Veľké plynové skrine majú rám z uzavretého profilu',
      'Dvere veľkých plynových skríň majú vetracie otvory 2 X 200 cm²',
      'Jedna strana dverí je zaistená rígľom a druhá sa uzatvára energetickými zámkami',
      'Skrinka pre plynomer s regulátorom T1 (550 x 550 x 350) - Cena: 65,- € (s DPH 79,95 €)'
    ]
  }
];
