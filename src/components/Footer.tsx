"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Ďakujeme za prihlásenie na odber: ${email}`);
    setEmail("");
  };

  return (
    <footer id="footer" className="bg-[#111] text-white pt-0 pb-8">
      {/* CTA Section */}
      <div className="max-w-[90vw] mx-auto px-6 py-6 my-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Máte záujem o spoluprácu?
            </h3>
            <p className="text-white/70 text-lg max-w-xl">
              Kontaktujte nás a radi vám vypracujeme nezáväznú cenovú ponuku.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-semibold uppercase text-sm tracking-wider hover:bg-gray-200 transition-colors"
          >
            Kontaktovať
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[90vw] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
        {/* Brand */}
        <div>
          <h4 className="text-xl font-bold mb-6">Lugesa plus, s.r.o.</h4>
          <p className="text-white/60 mb-6">
            Kvalitná kovovýroba, brány, ploty a zábradlia na mieru. Spojenie
            tradičného remesla s moderným dizajnom.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-bold mb-6">Menu</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/" className="text-white/60 hover:text-white transition-colors">
                Domov
              </Link>
            </li>
            <li>
              <Link href="/sluzby" className="text-white/60 hover:text-white transition-colors">
                Služby
              </Link>
            </li>
            <li>
              <Link href="/galeria" className="text-white/60 hover:text-white transition-colors">
                Galéria
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="text-white/60 hover:text-white transition-colors">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6">Kontakt</h4>
          <ul className="space-y-4 text-white/60">
            <li>Tehelná 44/1, 953 01 Zlaté Moravce</li>
            <li>0904 605 985</li>
            <li>lugesaplus@lugesaplus.sk</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-[90vw] mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Lugesa plus, s.r.o. Všetky práva vyhradené. IČO: 47 525 371
        </p>
        <div className="flex gap-6 text-sm">
          <Link href="/gdpr" className="text-white/40 hover:text-white transition-colors">
            Ochrana osobných údajov
          </Link>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-cookie-settings"))}
            className="text-white/40 hover:text-white transition-colors"
          >
            Cookies
          </button>
        </div>
      </div>
    </footer>
  );
}
