"use client";

import { services } from "@/data/services";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Services() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  const getIconForService = (slug: string) => {
    switch (slug) {
      case 'zabradlia':
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 20H2V10l10-6 10 6v10z" />
            <path d="M12 4v16" />
            <path d="M2 10h20" />
            <path d="M7 10v10M17 10v10" />
          </svg>
        );
      case 'brany-a-oplotenia':
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 21V7l9-4 9 4v14" />
            <path d="M9 21V10h6v11" />
            <path d="M3 7h18" />
            <path d="M9 10v11M15 10v11" />
          </svg>
        );
      case 'schodiska':
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 21h-6v-6h-6v-6h-6v-6" />
            <path d="M3 3l18 18" />
          </svg>
        );
      case 'plynove-skrine':
      case 'skrinka-pre-plynomer':
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18" />
            <path d="M9 3v18" />
            <circle cx="14" cy="14" r="2" />
          </svg>
        );
      default:
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        );
    }
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-[90vw] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <h2
            ref={titleRef}
            className={`animated-title ${isVisible ? "animate" : ""}`}
            data-text="Naše služby"
          >
            Naše služby
          </h2>
          <Link
            href="/sluzby"
            className="hidden md:inline-flex items-center gap-2 text-black font-semibold uppercase tracking-wider hover:text-gray-600 transition-colors"
          >
            Všetky služby
            <svg
              className="w-5 h-5"
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

        {/* Services Grid (4 per row on large screens) */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] p-8 border border-gray-200 relative overflow-hidden"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                  backgroundImage: `url(${service.slug === 'zabradlia' ? '/web/zábradlia/nerezové/DSCN3473.JPG' :
                      service.slug === 'brany-a-oplotenia' ? '/web/brány/kovové/000006.jpg' :
                        service.slug === 'schodiska' ? '/web/schodiská/schodisko_oceľové_1.jpg' :
                          service.slug === 'plynove-skrine' ? '/web/plynové%20skrinky/plynovaskrinka%20T1.jpg' :
                            '/web/brány/kovové/000006.jpg'
                    })`
                }}
              />
              <div className="absolute inset-0 bg-black/40 z-[1]" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-white mb-6">
                  {getIconForService(service.slug)}
                </div>

                <h3 className="text-xl font-bold text-white mb-4 uppercase h-14 flex items-center">
                  {service.title}
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed line-clamp-3 h-20">
                  {service.description}
                </p>
                <Link
                  href={`/sluzby/${service.slug}`}
                  className="inline-flex items-center gap-2 text-white font-semibold text-sm uppercase tracking-wider group/link"
                >
                  Zobraziť viac
                  <svg
                    className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
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
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/sluzby"
            className="inline-flex items-center gap-2 text-black font-semibold uppercase tracking-wider hover:text-gray-600 transition-colors"
          >
            Všetky služby
            <svg
              className="w-5 h-5"
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

      </div>
    </section>
  );
}
