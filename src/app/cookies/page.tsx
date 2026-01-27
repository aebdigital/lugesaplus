
import Link from 'next/link';
import PageHero from "@/components/PageHero";

export const metadata = {
    title: "Všeobecné podmienky používania cookies | Lugesa plus, s.r.o.",
    description: "Informácie o používaní súborov cookie na našej webovej stránke.",
};

export default function CookiesPage() {
    return (
        <main>
            <PageHero title="Všeobecné podmienky používania cookies" imageSrc="/web/brány/kovové/000006.jpg" />
            <div className="max-w-[90vw] mx-auto px-6 py-24">

                <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-heading">Súbory cookie</h2>
                        <p>
                            S cieľom zabezpečiť riadne fungovanie tejto webovej lokality ukladáme niekedy na Vašom
                            zariadení malé dátové súbory, tzv. cookie. Je to bežná prax väčšiny veľkých webových lokalít.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-heading">Čo sú súbory cookie?</h2>
                        <p>
                            Súbor cookie je malý textový súbor, ktorý webová lokalita ukladá vo Vašom počítači alebo
                            mobilnom zariadení pri jej prehliadaní. Vďaka tomuto súboru si webová lokalita na určitý čas
                            uchováva informácie o Vašich krokoch a preferenciách (ako sú prihlasovacie meno, jazyk,
                            veľkosť písma a iné nastavenia zobrazovania), takže ich pri ďalšej návšteve lokality alebo
                            prehliadaní jej jednotlivých stránok nemusíte opätovne uvádzať.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-heading">Ako používame súbory cookie?</h2>
                        <p>
                            Tieto webstránky používajú súbory cookies na zapamätanie si používateľských nastavení, pre
                            lepšie prispôsobenie reklám záujmom návštevníkov a pre nevyhnutnú funkcionalitu
                            webstránok.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-heading">Ako kontrolovať súbory cookie</h2>
                        <p>
                            Súbory cookie môžete kontrolovať alebo zmazať podľa uváženia – podrobnosti si pozrite na
                            stránke <a href="http://aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">aboutcookies.org</a>. Môžete vymazať všetky súbory cookie uložené vo svojom počítači
                            a väčšinu prehliadačov môžete nastaviť tak, aby ste im znemožnili ich ukladanie. V takomto
                            prípade však pravdepodobne budete musieť pri každej návšteve webovej lokality manuálne
                            upravovať niektoré nastavenia a niektoré služby a funkcie nebudú fungovať.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-heading">Ako odmietnuť používanie súborov cookie</h2>
                        <p>
                            Používanie súborov cookie je možné nastaviť pomocou Vášho internetového prehliadača.
                            Väčšina prehliadačov súbory cookie automaticky prijíma už v úvodnom nastavení.
                        </p>
                    </section>

                    <div className="pt-8 mt-12 border-t border-gray-200">
                        <Link href="/" className="inline-flex items-center gap-2 text-black font-semibold uppercase tracking-wider hover:text-gray-600 transition-colors">
                            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            Späť na domovskú stránku
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

