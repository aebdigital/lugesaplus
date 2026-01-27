import PageHero from "@/components/PageHero";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

export default function GDPRPage() {
    return (
        <main>
            <PageHero title="Ochrana osobných údajov" imageSrc="/web/brány/kovové/000006.jpg" />
            <div className="max-w-[90vw] mx-auto px-6 py-24">

                <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p>
                        Vypracované v súlade s nariadením Európskeho parlamentu a Rady (EÚ) 2016/679 o ochrane fyzických osôb pri spracúvaní osobných údajov a o voľnom pohybe takýchto údajov v zmysle článku 13 a 14 Nariadenia (ďalej len „GDPR“) a zákonom č. 18/2018 Z. z. o ochrane osobných údajov (ďalej len „Zákon o ochrane osobných údajov“). Zaručuje ochranu osobných údajov fyzických osôb pred ich zneužitím, únikom či neoprávneným spracúvaním.
                    </p>

                    <section>
                        <h2 className="text-xl font-bold text-black border-b border-black/10 pb-2 mb-4">Prevádzkovateľ</h2>
                        <address className="not-italic">
                            <strong>Lugesa plus, s.r.o.</strong><br />
                            Tehelná 44/1<br />
                            953 01 Zlaté Moravce<br />
                            IČO: 47 525 371<br />
                            Tel. č.: <a href="tel:0904605985" className="underline">0904 605 985</a><br />
                            Email: <ObfuscatedEmail className="underline" />
                        </address>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black border-b border-black/10 pb-2 mb-4">Čo je osobný údaj?</h2>
                        <p>
                            Osobnými údajmi sú údaje týkajúce sa identifikovanej fyzickej osoby, alebo identifikovateľnej fyzickej osoby, ktorú možno identifikovať priamo alebo nepriamo, najmä na základe všeobecne použiteľného identifikátora, iného identifikátora ako je napríklad meno, priezvisko, identifikačné číslo, lokalizačné údaje, alebo online identifikátor, alebo na základe jednej alebo viacerých charakteristík alebo znakov, ktoré tvoria jej fyzickú identitu, fyziologickú identitu, genetickú identitu, psychickú identitu, mentálnu identitu, ekonomickú identitu, kultúrnu identitu alebo sociálnu identitu.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black border-b border-black/10 pb-2 mb-4">Čo je spracúvanie osobných údajov?</h2>
                        <p>Spracúvaním osobných údajov je spracovateľská operácia alebo súbor spracovateľských operácií s osobnými údajmi alebo súbormi osobných údajov, najmä získavanie, zaznamenávanie, usporadúvanie, štruktúrovanie, uchovávanie, zmena, vyhľadávanie, prehliadanie, využívanie, poskytovanie prenosom, šírením alebo iným spôsobom, preskupovanie alebo kombinovanie, obmedzenie, vymazanie, bez ohľadu na to, či sa vykonáva automatizovanými prostriedkami alebo neautomatizovanými prostriedkami. Prevádzkovateľ (Správca) nemá povinnosť vymenovať/určiť Zodpovednú Osobu.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black border-b border-black/10 pb-2 mb-4">Zdroje a kategórie osobných údajov</h2>
                        <p>Prevádzkovateľ spracováva osobné údaje (priamo od vás), ktoré ste mu poskytli alebo osobné údaje ktoré získal na základe plnenia Vašej objednávky. Vaše identifikačné a kontaktné údaje a údaje nevyhnutné na plnenie zmluvy.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black border-b border-black/10 pb-2 mb-4">Zákonný dôvod a účel spracovania</h2>
                        <p><strong>Zákonným dôvodom spracovania je:</strong></p>
                        <ul className="list-disc pl-5">
                            <li>Váš súhlas so spracovaním osobných údajov na účely poskytovania priameho marketingu podľa článku 6 ods.1 písmeno a) GDPR</li>
                            <li>Plnenie zmluvy medzi Vami a prevádzkovateľom podľa článku 6 ods.1 písmeno b) GDPR</li>
                            <li>Spracúvanie je nevyhnutné na plnenie zákonnej povinnosti prevádzkovateľa podľa článku 6 ods. 1 písmena c) GDPR</li>
                        </ul>
                        <p className="mt-4"><strong>Účelom spracovania osobných údajov je:</strong></p>
                        <p>Vybavenie Vašej objednávky a výkon práv a povinností vyplývajúcich zo zmluvného vzťahu medzi Vami a prevádzkovateľom. Pri objednávke sú vyžadované osobné údaje nevyhnutné pre úspešné vybavenie objednávky podľa čl. 6 ods. 1 písm. b) Nariadenia (s tým súvisí aj následné uskutočnenie platby, dodanie služby, vybavovanie reklamácie a pod.); spracúvanie osobných údajov zákazníka prebieha bez súhlasu zákazníka, nakoľko právnym základom spracúvania jeho osobných údajov na účely plnenia zmluvy je konkrétna objednávka medzi zákazníkom a prevádzkovateľom. Poskytnutie osobných údajov je nevyhnutná požiadavka na uzatvorenie a plnenie objednávky, bez poskytnutia osobných údajov nie je možné vytvoriť objednávku či zo strany prevádzkovateľa plniť jej podmienky. Poskytnutie dohodnutej služby v oblasti kovovýroby Prevádzkovateľ prehlasuje, že so záznamami žiadnym spôsobom nepracuje a neposkytuje ich tretím osobám či subjektom.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black border-b border-black/10 pb-2 mb-4">Doba uchovávania</h2>
                        <p>Prevádzkovateľ uchováva osobné údaje:</p>
                        <ul className="list-disc pl-5">
                            <li>Po dobu nevyhnutnú k výkonu práv a povinností vyplývajúcich zo zmluvného vzťahu medzi Vami a prevádzkovateľom a uplatňovania nároku vyplývajúceho z týchto zmluvných vzťahov.</li>
                            <li>Po dobu než je odvolaný súhlas so spracovaním osobných údajov pre účely marketingu.</li>
                            <li>Po uplynutí doby uchovávania osobných údajov ktorá vyplýva zo zákona č. 395/2002 Z. z. Zákon o archívoch a registratúrach a o doplnení niektorých zákonov prevádzkovateľ osobné údaje vymaže.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black border-b border-black/10 pb-2 mb-4">Príjemcovia osobných údajov</h2>
                        <p><strong>Kto je príjemca?</strong></p>
                        <p>Príjemcom je každý, komu sa osobné údaje poskytnú bez ohľadu na to, či je treťou stranou. Za príjemcu sa nepovažuje orgán verejnej moci, ktorý spracúva osobné údaje na základe osobitného predpisu. Sú osoby ktoré sa podieľajú na dodaní tovaru, služieb, realizácii platieb na základe zmluvy. Prevádzkovateľ neposkytuje, nezverejňuje a nesprístupňuje osobné údaje do tretích krajín.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black border-b border-black/10 pb-2 mb-4">Podmienky zabezpečenia osobných údajov</h2>
                        <ul className="list-disc pl-5">
                            <li>Prevádzkovateľ prehlasuje, že prijal vhodné personálne, technické a organizačné opatrenia k zabezpečeniu ochrany osobných údajov.</li>
                            <li>Prevádzkovateľ prijal technické opatrenia na zabezpečenie dátových úložísk a úložísk osobných údajov v spisovej podobe.</li>
                            <li>Prevádzkovateľ prehlasuje, že k osobným údajom majú prístup výlučne ním poverené osoby.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black border-b border-black/10 pb-2 mb-4">Vaše práva</h2>
                        <p>Za podmienok stanovených v GDPR máte:</p>
                        <ul className="list-disc pl-5">
                            <li>Právo na prístup k svojim osobným údajom podľa čl. 15 GDPR</li>
                            <li>Právo na opravu osobných údajov podľa čl.16 GDPR</li>
                            <li>Právo na obmedzenie spracúvania</li>
                            <li>Právo na výmaz podľa čl.17 GDPR</li>
                            <li>Právo namietať podľa článku 21 GDPR</li>
                            <li>Právo na prenesenie osobných údajov podľa článku 21 GDPR</li>
                            <li>Právo odvolať súhlas (elektronicky, alebo na korešpondenčnú adresu)</li>
                            <li>Právo podať sťažnosť úradu na ochranu osobných údajov v prípade, že sa domnievate, že došlo k porušeniu vašich práv na ochranu osobných údajov.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black border-b border-black/10 pb-2 mb-4">Ako môžete naplniť svoje práva?</h2>

                        <h3 className="font-bold text-lg mb-2">Právo na prístup k údajom</h3>
                        <p>Máte právo vedieť, či spracúvame Vaše osobné údaje. Pokiaľ ich spracúvame, môžete nás požiadať o prístup k nim. Na základe Vašej žiadosti vydáme potvrdenie s informáciami o spracúvaní Vašich osobných údajov. Žiadosť môžete podať elektronicky, na emailovú adresu <ObfuscatedEmail />, alebo poštou na adresu Lugesa plus, s.r.o., Tehelná 44/1, 953 01 Zlaté Moravce.</p>

                        <h3 className="font-bold text-lg mt-6 mb-2">Právo na opravu</h3>
                        <p>Máte právo na to, aby Vaše osobné údaje, ktoré spracúvame, boli správne, úplné a aktuálne. Pokiaľ sú Vaše osobné údaje nesprávne alebo neaktuálne, môžete nás požiadať o opravu alebo doplnenie a to elektronickou formou na emailovú adresu <ObfuscatedEmail />, alebo poštou na korešpondenčnú adresu Lugesa plus, s.r.o., Tehelná 44/1, 953 01 Zlaté Moravce.</p>

                        <h3 className="font-bold text-lg mt-6 mb-2">Právo na vymazanie</h3>
                        <p>Za určitých okolností máte právo, aby sme Vaše osobné údaje vymazali. O vymazanie Vašich údajov nás môžete požiadať kedykoľvek. Vaše osobné údaje vymažeme, ak: už vaše osobné údaje nepotrebujeme pre účel, na ktorý ste nám ich poskytli; odvoláte svoj súhlas; namietate voči spracúvaniu vašich osobných údajov; spracúvame Vaše osobné údaje nezákonne; osobné údaje musia byť vymazané, aby sa tým splnila zákonná povinnosť; ak ste dieťa, príp. rodič dieťaťa, ktoré súhlasilo so spracúvaním osobných údajov cez internet.</p>

                        <h3 className="font-bold text-lg mt-6 mb-2">Právo na obmedzenie spracúvania</h3>
                        <p>Môžete nás požiadať, aby sme obmedzili spracúvanie vašich osobných údajov. Pokiaľ Vašej žiadosti vyhovieme, Vaše osobné údaje budeme iba uchovávať a ďalej s nimi pracovať nebudeme. K obmedzeniu spracúvania Vašich údajov dôjde, ak: nám oznámite, že Vaše osobné údaje sú nesprávne, a to až dokým neoveríme ich správnosť; spracúvame Vaše osobné údaje nezákonne, avšak Vy nesúhlasíte s ich vymazaním a na miesto toho žiadate, aby sme spracúvanie Vašich osobných údajov len obmedzili; Vaše údaje už nepotrebujeme, ale potrebujete ich Vy na preukázanie, uplatňovanie alebo obhajovanie svojich práv; namietate voči spracúvaniu Vašich osobných údajov, a to až kým neoveríme, či naše oprávnené záujmy prevažujú nad vašimi dôvodmi.</p>

                        <h3 className="font-bold text-lg mt-6 mb-2">Právo na prenosnosť údajov</h3>
                        <p>Máte právo žiadať, aby sme Vám poskytli Vaše osobné údaje v elektronickej forme (napr. súbor XML alebo CSV), ktorá Vám umožní ľahko si preniesť údaje do inej spoločnosti. Tiež nás môžete požiadať, aby sme Vaše osobné údaje preniesli vybranej spoločnosti priamo my. Vašej žiadosti vyhovieme v prípade, že ste nám poskytli osobné údaje priamo Vy a dali ste nám na ich spracúvanie súhlas.</p>

                        <h3 className="font-bold text-lg mt-6 mb-2">Právo namietať</h3>
                        <p>Máte právo namietať, že spracúvame Vaše osobné údaje. Ak Vaše osobné údaje spracúvame v nasledovných prípadoch: z dôvodu nášho oprávneného záujmu, vytvárania zákazníckeho profilu, môžete namietať ich spracúvanie, ak máte na to osobné dôvody.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-black border-b border-black/10 pb-2 mb-4">Dozorný orgán</h2>
                        <p>V prípade, že sa domnievate, že došlo k porušeniu Vašich práv na ochranu osobných údajov máte právo podať sťažnosť dozornému orgánu ktorým je:</p>
                        <address className="not-italic mt-2">
                            <strong>Úrad na ochranu osobných údajov</strong><br />
                            Hraničná 12<br />
                            820 07 Bratislava 27<br />
                            Slovenská republika<br />
                            IČO: 36064220<br />
                            DIČ: 2021685985<br />
                            Sekretariát úradu: +421 /2 3231 3214<br />
                            E-mail: <a href="mailto:statny.dozor@pdp.gov.sk" className="underline">statny.dozor@pdp.gov.sk</a>
                        </address>
                        <p className="mt-4 text-sm text-gray-500">Vzhľadom na epidemiologickú situáciu v SR Úrad odporúča vykonať podania prostredníctvom poštových alebo elektronických služieb (www.slovensko.sk). Osobné podania od 29.11.2021 je možné uskutočniť len v nevyhnutných prípadoch najneskôr do 12:00 hod.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
