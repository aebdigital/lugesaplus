"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems, categories } from "@/data/gallery";

export default function GalleryGrid() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredItems = activeCategory === "all"
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <div className="space-y-12">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
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
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence>
                    {filteredItems.map((item) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={item.id}
                            className="relative aspect-square group overflow-hidden bg-gray-100"
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
        </div>
    );
}
