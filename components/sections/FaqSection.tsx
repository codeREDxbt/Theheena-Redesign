"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const FAQS = [
    {
        q: "Who is image consulting for?",
        a: "Anyone whose professional life depends on how others perceive them — founders, executives, business owners, and professionals who want to project authority, trust, and credibility.",
    },
    {
        q: "Is this only for men?",
        a: "No. While the X Factor Look Book is specifically for Indian men, Heena's consulting practice serves professionals of all genders across all industries.",
    },
    {
        q: "Do you offer online sessions?",
        a: "Yes. Most consultations are available via video call with WhatsApp follow-up support. In-person sessions are available in Delhi NCR and through scheduled city visits.",
    },
    {
        q: "What makes this different from a personal stylist?",
        a: "A stylist selects clothes. An image consultant changes how you are perceived across your entire professional presence — visual, verbal, and non-verbal. The MSME recognition means this is formally recognized as a distinct profession in India.",
    },
    {
        q: "How long before I see results?",
        a: "Most clients report a measurable shift in how they are received by colleagues, clients, and rooms within 30 days. The transformation compounds as the habits become instinctive.",
    },
    {
        q: "How do I book a session?",
        a: "Use the 'Book a Call' button at the top of this page. The first call is a 20-minute discovery conversation — no commitment required.",
    },
];

export default function FaqSection() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    return (
        <section id="faq" className="section-light py-24" aria-label="Frequently asked questions">
            <div className="w-full max-w-[720px] mx-auto px-6 md:px-12 xl:px-20">

                {/* Header */}
                <div className="text-center mb-14 lg:mb-20 flex flex-col items-center gap-5">
                    <SectionLabel>Common Questions</SectionLabel>
                    <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-[56px] text-charcoal leading-[1.1] tracking-tight max-w-[600px]">
                        Everything You Need to Know Before Booking.
                    </h2>
                </div>

                {/* Accordion */}
                <div className="flex flex-col border-t border-border">
                    {FAQS.map(({ q, a }, i) => {
                        const isOpen = openIdx === i;
                        return (
                            <div key={q} className="border-b border-border">
                                <button
                                    onClick={() => setOpenIdx(isOpen ? null : i)}
                                    aria-expanded={isOpen}
                                    className="
                    w-full flex items-center justify-between
                    py-6 lg:py-8 text-left gap-8
                    group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-inset
                  "
                                >
                                    <span className="font-sans text-[18px] md:text-[20px] font-medium text-charcoal leading-snug group-hover:text-terracotta transition-colors duration-200">
                                        {q}
                                    </span>
                                    <span
                                        className={`
                      font-sans text-terracotta text-[22px] font-light shrink-0 w-6 text-center
                      transition-transform duration-200 leading-none
                      ${isOpen ? "rotate-45" : "rotate-0"}
                    `}
                                    >
                                        +
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
                                >
                                    <p className="font-sans text-[16px] text-charcoal/70 leading-relaxed pb-8 pr-12">
                                        {a}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
