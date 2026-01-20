"use client";

import { useState } from "react";
import Link from "next/link";

export default function GasCabinetForm() {
    const [formData, setFormData] = useState({
        email: "",
        address: "",
        city: "",
        zip: "",
        phone: "",
        ico: "",
        ic_dph: "",
        documentType: "Dopyt", // Dopyt | Objednávka
        typeAndQuantity: "plynomerová skriňa T1",
        quantity: "1",
        delivery: "Kuriér na adresu", // Kuriér na adresu | Osobné prevzatie
        message: "",
        gdpr: false,
    });

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log("Form Submitted", formData);
        setStatus("success");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 text-black bg-gray-50 p-8 border-l-4 border-black border-r border-t border-b">
            <h3 className="text-2xl font-bold mb-6 uppercase tracking-wider">Mám záujem</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold uppercase tracking-wider block">E-mail *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors" />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold uppercase tracking-wider block">Telefón</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Address */}
                <div className="space-y-2 md:col-span-1">
                    <label htmlFor="address" className="text-sm font-semibold uppercase tracking-wider block">Adresa *</label>
                    <input type="text" id="address" name="address" required value={formData.address} onChange={handleChange} className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors" />
                </div>
                {/* City */}
                <div className="space-y-2">
                    <label htmlFor="city" className="text-sm font-semibold uppercase tracking-wider block">Mesto *</label>
                    <input type="text" id="city" name="city" required value={formData.city} onChange={handleChange} className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors" />
                </div>
                {/* ZIP */}
                <div className="space-y-2">
                    <label htmlFor="zip" className="text-sm font-semibold uppercase tracking-wider block">PSČ *</label>
                    <input type="text" id="zip" name="zip" required value={formData.zip} onChange={handleChange} className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* ICO */}
                <div className="space-y-2">
                    <label htmlFor="ico" className="text-sm font-semibold uppercase tracking-wider block">IČO</label>
                    <input type="text" id="ico" name="ico" value={formData.ico} onChange={handleChange} className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors" />
                </div>
                {/* IC DPH */}
                <div className="space-y-2">
                    <label htmlFor="ic_dph" className="text-sm font-semibold uppercase tracking-wider block">IČ DPH</label>
                    <input type="text" id="ic_dph" name="ic_dph" value={formData.ic_dph} onChange={handleChange} className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors" />
                </div>
            </div>

            {/* Document Type */}
            <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider block">Dokument</label>
                <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="documentType" value="Dopyt" checked={formData.documentType === "Dopyt"} onChange={handleChange} className="w-4 h-4 text-black focus:ring-black accent-black" />
                        <span>Dopyt</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="documentType" value="Objednávka" checked={formData.documentType === "Objednávka"} onChange={handleChange} className="w-4 h-4 text-black focus:ring-black accent-black" />
                        <span>Objednávka</span>
                    </label>
                </div>
            </div>

            {/* Type and Quantity */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                <div className="space-y-2 md:col-span-2">
                    <label htmlFor="typeAndQuantity" className="text-sm font-semibold uppercase tracking-wider block">Typ</label>
                    <input type="text" id="typeAndQuantity" name="typeAndQuantity" value={formData.typeAndQuantity} onChange={handleChange} className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="quantity" className="text-sm font-semibold uppercase tracking-wider block">Množstvo (ks)</label>
                    <input type="number" id="quantity" name="quantity" min="1" value={formData.quantity} onChange={handleChange} className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors" />
                </div>
            </div>

            {/* Delivery */}
            <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider block">Doručenie</label>
                <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="delivery" value="Kuriér na adresu" checked={formData.delivery === "Kuriér na adresu"} onChange={handleChange} className="w-4 h-4 text-black focus:ring-black accent-black" />
                        <span>Kuriér na adresu</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="delivery" value="Osobné prevzatie" checked={formData.delivery === "Osobné prevzatie"} onChange={handleChange} className="w-4 h-4 text-black focus:ring-black accent-black" />
                        <span>Osobné prevzatie</span>
                    </label>
                </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold uppercase tracking-wider block">Správa</label>
                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Pokiaľ by ste chceli dopytovať iný rozmer napíšte nám." className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors resize-none" />
            </div>

            {/* GDPR */}
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    id="gdpr"
                    name="gdpr"
                    required
                    checked={formData.gdpr}
                    onChange={handleChange}
                    className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black accent-black"
                />
                <label htmlFor="gdpr" className="text-sm text-gray-700">
                    Súhlasím so <Link href="/gdpr" className="underline hover:text-black">spracovaním osobných údajov</Link> a <Link href="/gdpr" className="underline hover:text-black">viac informácií</Link>
                </label>
            </div>

            <button type="submit" disabled={status === "submitting"} className="bg-black text-white px-8 py-4 font-semibold uppercase tracking-wider hover:bg-gray-800 transition-colors w-full md:w-auto disabled:opacity-50">
                {status === "submitting" ? "Odosielam..." : status === "success" ? "Odoslané" : "Odoslať dopyt / objednávku"}
            </button>
        </form>
    );
}
