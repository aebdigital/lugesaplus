import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";

import PageHero from "@/components/PageHero";

export default function ContactPage() {
    return (
        <main>
            <PageHero title="Kontakt" imageSrc="/web/brány/kovové/000006.jpg" />
            <div className="max-w-[90vw] mx-auto px-6 py-24">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    {/* Left Side: Info & Map */}
                    <div className="space-y-12">
                        {/* Contact Info Columns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Company Info */}
                            <div>
                                <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">Fakturačné údaje</h3>
                                <div className="space-y-4 text-black">
                                    <p className="font-semibold text-black">Lugesa plus, s.r.o.</p>
                                    <p>Lúčna 817</p>
                                    <p>951 76 Tesárske Mlyňany</p>
                                    <div className="pt-4 space-y-2">
                                        <p>IČO: 47 186 942</p>
                                        <p>DIČ: 2023793741</p>
                                        <p>IČ DPH: SK2023793741</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Details */}
                            <div>
                                <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">Kontaktné informácie</h3>
                                <div className="space-y-4 text-black">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <a href="tel:0904537629" className="hover:text-black transition-colors">
                                            0904 537 629
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <a href="mailto:lugesa@lugesa.sk" className="hover:text-black transition-colors">
                                            lugesa@lugesa.sk
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map - Now nested here */}
                        <div className="w-full h-[400px] border border-gray-200">
                            <GoogleMap />
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-gray-50 p-8 md:p-12 border-t-4 border-black">
                        <h2 className="text-2xl font-bold mb-8 uppercase tracking-wider">Napíšte nám</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </main>
    );
}
