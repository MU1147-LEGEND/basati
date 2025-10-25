"use client";
import { useEffect } from "react";

export default function MouseGlowEffect() {
    useEffect(() => {
        const cards = document.querySelectorAll(".card");

        const handleMouseMove = (e) => {
            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const xPercent = (x / rect.width) * 100;
                const yPercent = (y / rect.height) * 100;

                card.style.setProperty("--x", `${xPercent}%`);
                card.style.setProperty("--y", `${yPercent}%`);
            });
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return null;
}
