"use client";

import { useCallback } from "react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

/** TODO: Replace with your real Calendly URL */
const CALENDLY_URL = "https://calendly.com/heena-consulting/20min";

export default function FinalCta() {
    const openCalendly = useCallback(() => {
        window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    }, []);

    return (
        <section
            id="book"
            className="section-dark py-28 relative overflow-hidden"
            aria-label="Book a consultation"
        >
            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-12 left-12 w-24 h-24 border border-white/5 rotate-45" />
                <div className="absolute bottom-12 right-12 w-32 h-32 border border-white/5 rotate-12" />
                <div className="absolute top-1/2 left-1/4 w-px h-20 bg-gradient-to-b from-transparent via-terracotta/20 to-transparent" />
                <div className="absolute top-1/3 right-1/3 w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            </div>

            <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20 flex flex-col items-center text-center gap-8 relative z-10">
                <SectionLabel theme="dark">Ready to Transform?</SectionLabel>

                <h2 className="font-display font-bold text-[clamp(34px,5vw,56px)] leading-[1.07] text-ivory max-w-[640px]">
                    Make Your Image Your Competitive Advantage.
                </h2>

                <div className="w-16 h-px bg-terracotta/60" />

                <p className="font-sans text-[17px] text-ivory/70 max-w-[500px] leading-relaxed">
                    One conversation can change how the room sees you.
                    It starts with a 20-minute call — no pressure, just clarity.
                </p>

                <div className="flex flex-wrap gap-4 mt-4">
                    <Button variant="primary" onClick={openCalendly} className="px-14 py-4">
                        Book Your Transformation
                    </Button>
                    <Button variant="ghost-light" as="a" href="#services" className="px-10 py-4">
                        Explore Services
                    </Button>
                </div>

                <p className="font-sans text-[12px] text-ivory/35 mt-2">
                    Free 20-min discovery call · No commitment required
                </p>
            </div>
        </section>
    );
}
