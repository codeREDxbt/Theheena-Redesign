"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] right-6 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 z-50 p-3.5 md:p-4 lg:p-5 bg-charcoal text-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-terracotta hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2"
            aria-label="Scroll to top"
        >
            <ArrowUp size={20} strokeWidth={1.5} className="md:w-6 md:h-6 lg:w-7 lg:h-7" />
        </button>
    );
}
