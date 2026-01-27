"use client";

import { useEffect, useState } from "react";

export default function ObfuscatedEmail({
    className = "",
}: {
    className?: string;
}) {
    const [email, setEmail] = useState("");

    useEffect(() => {
        // Reconstruct email parts to avoid crawler detection in source code
        const user = "lugesaplus";
        const domain = "lugesaplus.sk";
        setEmail(`${user}@${domain}`);
    }, []);

    if (!email) {
        // Return a placeholder or nothing during server-side rendering
        return <span className={className}>Načítavam...</span>;
    }

    return (
        <a href={`mailto:${email}`} className={className}>
            {email}
        </a>
    );
}
