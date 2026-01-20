"use client";

import { useState, useEffect, useCallback, useRef, Suspense } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";

type GalleryItem = {
    id: string;
    src: string;
    category: string;
    alt: string;
};

type Category = {
    id: string;
    label: string;
};

export default function GalleryGrid({ initialImages, categories }: { initialImages: GalleryItem[], categories: Category[] }) {
    return (
        <Suspense fallback={<div>Načítavam galériu...</div>}>
            <GalleryGridContent initialImages={initialImages} categories={categories} />
        </Suspense>
    );
}

function GalleryGridContent({ initialImages, categories }: { initialImages: GalleryItem[], categories: Category[] }) {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category");
    const [activeCategory, setActiveCategory] = useState(categoryParam || categories[0].id);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const selectedIndexRef = useRef(selectedIndex);

    // Update selectedIndexRef whenever selectedIndex changes
    useEffect(() => {
        selectedIndexRef.current = selectedIndex;
    }, [selectedIndex]);

    // Update active category if URL param changes
    useEffect(() => {
        if (categoryParam) {
            setActiveCategory(categoryParam);
        }
    }, [categoryParam]);

    const filteredItems = initialImages.filter(item => item.category === activeCategory);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (selectedIndexRef.current === null) return;
        if (e.key === "Escape") setSelectedIndex(null);
        if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
        if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    }, [filteredItems.length]); // selectedIndex removed from dependencies

    useEffect(() => {
        if (selectedIndex !== null) {
            window.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden"; // Prevent scrolling
        }
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [selectedIndex, handleKeyDown]);

    return (
        <div className="space-y-12">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => { setActiveCategory(category.id); setSelectedIndex(null); }} // Close lightbox if open
                        className={`px-6 py-3 text-sm font-semibold uppercase tracking-wider border transition-all duration-300 ${activeCategory === category.id
                            ? "bg-black text-white border-black"
                            : "bg-transparent text-black border-black/10 hover:border-black"
                            }`}
                    >
                        {category.label}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[5px]"
            >
                <AnimatePresence>
                    {filteredItems.map((item, index) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={item.id}
                            onClick={() => setSelectedIndex(index)}
                            className="relative aspect-square group overflow-hidden bg-gray-100 cursor-pointer"
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                                <p className="text-white text-center font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                    {item.alt}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/90 backdrop-blur-md"
                            onClick={() => setSelectedIndex(null)}
                        />

                        {/* Navigation Buttons */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedIndex((selectedIndex - 1 + filteredItems.length) % filteredItems.length);
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white/70 hover:text-white transition-colors"
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedIndex((selectedIndex + 1) % filteredItems.length);
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white/70 hover:text-white transition-colors"
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <button
                            onClick={() => setSelectedIndex(null)}
                            className="absolute top-4 right-4 z-50 p-3 text-white/70 hover:text-white transition-colors"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Image Container */}
                        <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center pointer-events-none">
                             <AnimatePresence mode="wait">
                                {selectedIndex !== null && filteredItems[selectedIndex] && (
                                    <motion.div
                                        key={filteredItems[selectedIndex].id}
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.9, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative w-full h-full flex items-center justify-center pointer-events-auto"
                                    >
                                        <Image
                                            src={filteredItems[selectedIndex].src}
                                            alt={filteredItems[selectedIndex].alt}
                                            fill
                                            className="object-contain"
                                            sizes="90vw"
                                            priority
                                        />
                                        <div className="absolute bottom-4 left-0 right-0 text-center text-white/90 p-4">
                                            <h3 className="text-xl font-medium">{filteredItems[selectedIndex].alt}</h3>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
