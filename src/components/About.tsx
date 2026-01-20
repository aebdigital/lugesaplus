"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function About() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [yearCount, setYearCount] = useState(0);
  const [expCount, setExpCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate counters
            animateCounter(2011, setYearCount, 2000);
            animateCounter(15, setExpCount, 1500);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounter = (
    target: number,
    setter: (value: number) => void,
    duration: number
  ) => {
    const startTime = Date.now();
    const startValue = target === 2011 ? 2000 : 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(startValue + (target - startValue) * progress);
      setter(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-[90vw] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in visible">
            <h2
              ref={titleRef}
              className={`animated-title mb-8 ${isVisible ? "animate" : ""}`}
              data-text="O nás"
            >
              O nás
            </h2>
            <p className="text-black text-lg mb-6 leading-relaxed">
              Firma <strong>LUGESA plus, s.r.o.</strong> začala svoju činnosť v roku 2011 ako živnosť a od roku 2013 pokračuje ako s.r.o. Zaoberáme sa výrobou kovových konštrukcií na mieru.
            </p>
            <p className="text-black text-lg mb-6 leading-relaxed">
              Medzi naše hlavné produkty patria <strong>brány, ploty, markízy, zábradlia, schodiská</strong> a iné kovové konštrukcie podľa požiadaviek zákazníka.
            </p>
            <p className="text-[#666] text-lg mb-8 leading-relaxed">
              Disponujeme technológiou na prácu s plechom do hrúbky 4mm a poskytujeme kvalitné zváračské práce. Každý projekt riešime individuálne s dôrazom na kvalitu a spokojnosť zákazníka.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-3 bg-[#333] text-white px-8 py-4 font-semibold uppercase text-sm tracking-wider hover:bg-[#555] transition-colors group"
            >
              Kontaktovať nás
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Right Content - Image with Stats */}
          <div className="relative">
            <div
              className="aspect-[4/3] bg-cover bg-center"
              style={{
                backgroundImage: "url(/web/DSC_1267s.jpg)",
              }}
            />

            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 flex gap-4">
              <div className="bg-white p-6 shadow-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-black">{yearCount}</div>
                <div className="text-sm text-black uppercase tracking-wider">Rok založenia</div>
              </div>

              <div className="bg-white p-6 shadow-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-black">{expCount}+</div>
                <div className="text-sm text-black uppercase tracking-wider">Rokov skúsenosti</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
