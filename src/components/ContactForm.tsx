"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Reset form
        setFormData({ name: "", email: "", phone: "", message: "" });
        setStatus("success");

        setTimeout(() => setStatus("idle"), 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold uppercase tracking-wider">Meno a priezvisko</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-black/5 border border-black/10 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold uppercase tracking-wider">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-black/5 border border-black/10 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold uppercase tracking-wider">Telefónne číslo</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black/5 border border-black/10 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold uppercase tracking-wider">Správa</label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black/5 border border-black/10 px-4 py-3 focus:outline-none focus:border-black transition-colors resize-none"
                />
            </div>

            <button
                type="submit"
                disabled={status === "submitting"}
                className="bg-black text-white px-8 py-4 font-semibold uppercase tracking-wider hover:bg-gray-800 transition-colors w-full md:w-auto disabled:opacity-50"
            >
                {status === "submitting" ? "Odosielam..." : "Odoslať správu"}
            </button>

            {status === "success" && (
                <p className="text-green-600 font-medium">Správa bola úspešne odoslaná.</p>
            )}
        </form>
    );
}
