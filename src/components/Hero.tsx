"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], ["0%", "15%"]);

  const heroImages = [
    "/web/brány/kovové/IMG-20230313-WA0001.jpg",
    "/web/brány/nerezové/P_20190805_162238.jpg",
    "/web/brány/kovové/brána_ťahokov.JPG",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images with Crossfade */}
      <AnimatePresence initial={false}>
        <motion.div
          key={heroImages[currentImageIndex]}
          className="absolute inset-0 bg-cover bg-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${heroImages[currentImageIndex]})`,
            zIndex: 0,
            y,
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />


      {/* Content */}
      <div className="relative z-10 max-w-[90vw] mx-auto px-6 py-20 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Left Content */}
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-white uppercase leading-tight mb-6 drop-shadow-lg">
              Kovovýroba a kovové konštrukcie
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-lg">
              Profesionálna výroba kovových brán, plotov, zábradlí, schodísk a ďalších kovových konštrukcií na mieru. Kvalita a precíznosť od roku 2011.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-semibold uppercase text-sm tracking-wider hover:bg-white/90 transition-colors"
              >
                Naše služby
              </Link>
              <Link
                href="#footer"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 font-semibold uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </div>

          {/* Right Content - Stats & Testimonial */}
          <div className="flex flex-col gap-6">
            {/* Stats */}
            <div className="flex gap-6">
              <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20">
                <div className="text-4xl font-bold text-white">100%</div>
                <div className="text-white/70 text-sm uppercase tracking-wider">na mieru</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20">
                <div className="text-4xl font-bold text-white">1000+</div>
                <div className="text-white/70 text-sm uppercase tracking-wider">zákazníkov</div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 max-w-sm">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-white ml-2">5.0</span>
              </div>
              <p className="text-white/90 text-sm mb-3">
                &ldquo;Výborná práca, profesionálny prístup a kvalitné spracovanie. Veľmi odporúčam!&rdquo;
              </p>
              <div className="text-white/70 text-sm">— Zuzana K.</div>
              <Link
                href="#gallery"
                className="inline-block mt-4 text-white text-sm uppercase tracking-wider border-b border-white/50 hover:border-white transition-colors"
              >
                Viac referencií
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
