"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/data/services";

import PageHero from "@/components/PageHero";

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <main>
            <PageHero title="Naše služby" imageSrc="/web/schodiská/schodisko_oceľové_1.jpg" />
            <div className="max-w-[90vw] mx-auto px-6 py-24">

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-80 shrink-0">
                        <nav className="bg-gray-50 p-6 sticky top-32">
                            <ul className="space-y-2">
                                {services.map((service) => {
                                    const isActive = pathname === `/sluzby/${service.slug}`;
                                    return (
                                        <li key={service.id}>
                                            <Link
                                                href={`/sluzby/${service.slug}`}
                                                className={`block px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${isActive
                                                    ? "bg-black text-white translate-x-2"
                                                    : "text-gray-600 hover:bg-gray-200 hover:text-black"
                                                    }`}
                                            >
                                                {service.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </aside>

                    {/* Content */}
                    <div className="flex-1">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
}
