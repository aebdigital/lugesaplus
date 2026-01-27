"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function CookieBanner() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState({
        necessary: true,
        analytics: true,
        marketing: false,
    });

    useEffect(() => {
        // Check if consent is already saved
        const savedConsent = localStorage.getItem("cookie-consent");
        if (!savedConsent) {
            setIsOpen(true);
        }
    }, []);

    // Listen for custom event to open settings from footer
    useEffect(() => {
        const handleOpenSettings = () => {
            setIsOpen(true);
            setShowSettings(true);
        };

        window.addEventListener("open-cookie-settings", handleOpenSettings);
        return () => window.removeEventListener("open-cookie-settings", handleOpenSettings);
    }, []);

    const handleAcceptAll = () => {
        const allPreferences = { necessary: true, analytics: true, marketing: true };
        localStorage.setItem("cookie-consent", JSON.stringify(allPreferences));
        setPreferences(allPreferences);
        setIsOpen(false);
        setShowSettings(false);
    };

    const handleSaveSettings = () => {
        localStorage.setItem("cookie-consent", JSON.stringify(preferences));
        setIsOpen(false);
        setShowSettings(false);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {/* Initial Banner */}
            {!showSettings && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-[9999] bg-black text-white p-6 md:p-8 border-t border-white/10"
                >
                    <div className="max-w-[90vw] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex-1">
                            <h3 className="text-lg font-bold mb-2">Nastavenie súborov cookies</h3>
                            <p className="text-white/70 text-sm">
                                Naša webová stránka používa <Link href="/cookies" className="underline hover:text-white">súbory cookies</Link> na zabezpečenie správneho fungovania a pre analytické účely.
                                Viac informácií nájdete v sekcii <Link href="/gdpr" className="underline hover:text-white">Ochrana osobných údajov</Link>.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 items-center">
                            <button
                                onClick={() => setShowSettings(true)}
                                className="text-sm font-semibold hover:text-white/70 transition-colors uppercase tracking-wider underline decoration-white/30 hover:decoration-white"
                            >
                                Nastavenia
                            </button>
                            <button
                                onClick={handleAcceptAll}
                                className="bg-white text-black px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-gray-200 transition-colors"
                            >
                                Prijať všetky
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Settings Modal - Separate Overlay */}
            {showSettings && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowSettings(false)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="relative bg-black border border-white/20 p-8 max-w-2xl w-full text-white shadow-2xl overflow-y-auto max-h-[90vh]"
                    >
                        <h3 className="text-2xl font-bold mb-6">Nastavenie súborov cookies</h3>

                        <div className="space-y-6">
                            {/* Necessary */}
                            <div className="space-y-2 border-b border-white/10 pb-4">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-semibold text-lg">Nevyhnutné</h4>
                                    <input type="checkbox" checked={true} disabled className="w-5 h-5 accent-white" />
                                </div>
                                <p className="text-white/60 text-sm">
                                    Tieto cookies sú potrebné pre správne fungovanie stránky.
                                </p>
                            </div>

                            {/* Analytics */}
                            <div className="space-y-2 border-b border-white/10 pb-4">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-semibold text-lg">Analytické</h4>
                                    <input
                                        type="checkbox"
                                        checked={preferences.analytics}
                                        onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                                        className="w-5 h-5 accent-white cursor-pointer"
                                    />
                                </div>
                                <p className="text-white/60 text-sm">
                                    Pomáhajú nám pochopiť, ako návštevníci používajú stránku.
                                </p>
                            </div>

                            {/* Marketing */}
                            <div className="space-y-2 pb-4">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-semibold text-lg">Marketingové</h4>
                                    <input
                                        type="checkbox"
                                        checked={preferences.marketing}
                                        onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                                        className="w-5 h-5 accent-white cursor-pointer"
                                    />
                                </div>
                                <p className="text-white/60 text-sm">
                                    Používajú sa na zobrazovanie relevantnej reklamy.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end gap-4">
                            <button
                                onClick={() => setShowSettings(false)}
                                className="text-white/70 hover:text-white px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-colors"
                            >
                                Späť
                            </button>
                            <button
                                onClick={handleSaveSettings}
                                className="bg-white text-black px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-gray-200 transition-colors"
                            >
                                Uložiť nastavenia
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
