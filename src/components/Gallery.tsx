"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  { src: "/web/brány/kovové/brána_ťahokov.JPG", alt: "Kovová brána" },
  { src: "/web/zábradlia/nerezové/DSCN3476.JPG", alt: "Nerezové zábradlie" },
  { src: "/web/schodiská/schodisko_oceľové_2.jpg", alt: "Oceľové schodisko" },
  { src: "/web/striešky/DSCN3441.JPG", alt: "Kovová strieška" },
  { src: "/web/plynové skrinky/plynovaskrinka T1.jpg", alt: "Plynová skrinka" },
  { src: "/web/brány/nerezové/IMG_20250830_113902_731.jpg", alt: "Nerezová brána" },
  { src: "/web/zábradlia/nerezové/DSCN3677.JPG", alt: "Nerezové zábradlie interiér" },
];

export default function Gallery() {
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

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-[90vw] mx-auto px-6">
        <h2
          ref={titleRef}
          className={`animated-title mb-16 ${isVisible ? "animate" : ""}`}
          data-text="Galéria"
        >
          Galéria
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item aspect-[4/3] relative">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}

          {/* All Projects Button */}
          <Link
            href="#gallery"
            className="aspect-[4/3] bg-[#6c757d] flex flex-col items-center justify-center text-white hover:bg-[#5a6268] transition-colors group"
          >
            <svg
              className="w-12 h-12 mb-4 transition-transform group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            <span className="text-sm font-semibold uppercase tracking-wider">
              Všetky projekty
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
