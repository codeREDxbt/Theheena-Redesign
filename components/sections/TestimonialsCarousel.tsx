"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const TESTIMONIALS = [
    {
        quote: "Heena completely transformed how I present myself in boardrooms. My wardrobe, my body language, my confidence — everything changed after working with her.",
        name: "Riya Mehta",
        role: "CEO, TechVenture Capital",
    },
    {
        quote: "After Heena's consultation, I started landing bigger clients. People take you seriously when your image matches your expertise. Best investment I've ever made.",
        name: "Arjun Kapoor",
        role: "Founder, Kapoor & Associates",
    },
    {
        quote: "Working with Heena was life-changing. She didn't just style me — she helped me understand how to communicate authority through presence alone.",
        name: "Priya Singh",
        role: "Director, Global Finance Corp",
    },
    {
        quote: "I was skeptical about image consulting until I met Heena. Within weeks, I saw a measurable impact on my professional relationships and client acquisition.",
        name: "Vikram Desai",
        role: "Managing Partner, Desai Legal",
    },
    {
        quote: "Heena has an extraordinary eye for detail. She understood my personality and built a style language that feels authentically me, yet commanding respect in every room.",
        name: "Ananya Sharma",
        role: "VP Marketing, Luxe Brands India",
    },
];

export default function TestimonialsCarousel() {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

    const { quote, name, role } = TESTIMONIALS[current];

    return (
        <section
            className="section-light py-20 border-t border-charcoal/8"
            aria-label="Client testimonials"
        >
            <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">
                <div className="flex flex-col items-center text-center gap-10">
                    <SectionLabel>Client Voices</SectionLabel>

                    {/* Quote */}
                    <div className="relative max-w-[720px] min-h-[180px] flex items-center justify-center">
                        <blockquote className="font-display italic text-[clamp(20px,3vw,30px)] leading-[1.5] text-charcoal/90">
                            &ldquo;{quote}&rdquo;
                        </blockquote>
                    </div>

                    {/* Attribution */}
                    <div className="flex flex-col items-center gap-1">
                        <p className="font-sans font-semibold text-[15px] text-charcoal">{name}</p>
                        <p className="font-sans text-[13px] text-charcoal/50">{role}</p>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center gap-6">
                        <button
                            onClick={prev}
                            aria-label="Previous testimonial"
                            className="w-10 h-10 flex items-center justify-center border border-charcoal/20 text-charcoal/60 hover:bg-charcoal hover:text-ivory transition-all duration-200"
                        >
                            ←
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {TESTIMONIALS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current
                                        ? "bg-terracotta scale-125"
                                        : "bg-charcoal/20 hover:bg-charcoal/40"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            aria-label="Next testimonial"
                            className="w-10 h-10 flex items-center justify-center border border-charcoal/20 text-charcoal/60 hover:bg-charcoal hover:text-ivory transition-all duration-200"
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
