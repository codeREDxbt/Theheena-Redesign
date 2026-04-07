"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const FEATURES = [
    "Wardrobe secrets that create lasting first impressions",
    "How your outfit speaks before you do — shoes, fit, colour",
    "The 5 patterns every Indian man must understand",
    "How to dress with authority at every income level",
];

const CHAPTERS = [
    {
        id: "ch1",
        title: "01 / The Color Theory",
        excerpt: "Understanding your personal coloring is the first step to wardrobe mastery. Whether you have light skin with light hair or a darker complexion, your choice of colors should complement your natural tones. White, navy, and charcoal are universal, but the right pastel or jewel tone can define your presence.",
        img: "/images/latest-images/color-theory.png",
        alt: "Professional editorial color theory setup"
    },
    {
        id: "ch2",
        title: "02 / Body Type Mastery",
        excerpt: "Every man's body is a unique architecture. Whether you have an athletic build, a slim frame, or a fuller body, the goal is always to create a balanced silhouette. Vertical lines can add height, while structured jackets can broaden shoulders. Dress for the body you have today to command the room with confidence.",
        img: "/images/latest-images/body-type.png",
        alt: "Tailored outfits for different body types"
    },
    {
        id: "ch3",
        title: "03 / Essential Footwear",
        excerpt: "Shoes are the foundation of your visual identity. A classy gentleman understands that brown and black formal shoes are non-negotiable basics. Pair them with white minimalist sneakers for a casual yet sophisticated edge. Remember, quality footwear transforms not just your outfit, but your entire body language.",
        img: "/images/latest-images/footwear.png",
        alt: "Curated collection of premium men's shoes"
    },
    {
        id: "ch4",
        title: "04 / The Watch Guide",
        excerpt: "A watch is more than a timekeeper; it's a silent communicator of your standard. From classic dress watches with leather bands to sturdy sports chronographs, choosing the right timepiece for the occasion is a crucial skill. It's the micro-signal that defines the macro-image of a modern gentleman.",
        img: "/images/latest-images/watch_guide.png",
        alt: "Close-up of a luxury mechanical watch"
    }
];

export default function MyBookSection() {
    const [activeChapter, setActiveChapter] = useState<typeof CHAPTERS[0] | null>(null);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (activeChapter) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [activeChapter]);
    return (
        <section id="book" className="w-full flex-col flex justify-center py-20 lg:py-32 bg-ivory">
            {/* 3-Column Product Showcase Section */}
            <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">

                    {/* Left Column (25%): Lookbook Image */}
                    <div className="lg:col-span-1 flex justify-center lg:justify-end relative">
                        {/* Glow effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-terracotta/5 blur-[80px] pointer-events-none"></div>
                        <div className="relative z-10 w-full max-w-[340px]">
                            <Image
                                src="/images/lookbook-cover.jpg"
                                alt="A Guide to Classy Gentleman - My Book"
                                width={340}
                                height={476}
                                quality={100}
                                className="w-full shadow-[16px_16px_0px_0px_rgba(26,26,26,1)] border border-charcoal/10"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Center Column (50%): Content & Buttons */}
                    <div className="lg:col-span-2 flex flex-col items-center text-center px-4">
                        <span className="text-terracotta font-bold text-sm tracking-[0.2em] uppercase mb-4 font-sans">
                            My Book
                        </span>

                        <h2 className="font-display text-[42px] md:text-[48px] lg:text-[64px] font-bold leading-[1.05] mb-8 max-w-[800px] text-charcoal">
                            A Guide to Classy Gentleman
                        </h2>

                        <div className="flex flex-col gap-3 text-[15px] md:text-[16px] mb-8 items-center text-charcoal/80 font-sans">
                            {FEATURES.map((feat) => (
                                <p key={feat} className="flex items-center gap-2">
                                    <span className="text-terracotta font-bold">—</span> {feat}
                                </p>
                            ))}
                        </div>

                        <div className="text-[24px] font-sans font-bold mb-10 text-charcoal">
                            ₹700
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Button
                                variant="primary"
                                as="a"
                                href="https://www.amazon.in/dp/9349262533/"
                                className="flex min-w-[180px] h-14 bg-terracotta items-center justify-center rounded-none tracking-widest uppercase font-bold text-[13px]"
                            >
                                Buy Now
                            </Button>

                            <Button
                                variant="ghost"
                                as="button"
                                onClick={() => {
                                    document.getElementById("preview-section")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="flex min-w-[180px] h-14 border border-charcoal items-center justify-center rounded-none tracking-widest uppercase font-bold text-[13px] text-charcoal hover:bg-charcoal hover:text-white transition-colors"
                            >
                                Preview Inside
                            </Button>
                        </div>
                    </div>

                    {/* Right Column (25%): Lifestyle / Holding Image */}
                    <div className="lg:col-span-1 flex flex-col gap-6 items-center lg:items-start">
                        <div className="relative w-full max-w-[340px] aspect-[3/4] overflow-hidden border border-charcoal/10 shadow-lg">
                            <Image
                                src="/images/latest-images/Look book holding image.avif"
                                alt="Heena holding the book"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Instagram Embed Teaser */}
                        <div className="w-full max-w-[340px] p-4 bg-white border border-charcoal/5 shadow-sm">
                            <p className="text-[11px] uppercase tracking-widest text-charcoal/40 mb-3 font-bold">Featured on Instagram</p>
                            <a
                                href="https://www.instagram.com/p/DJgR6yeTa_R/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group"
                            >
                                <div className="relative aspect-square bg-charcoal/5 overflow-hidden mb-3">
                                    <Image
                                        src="/images/lookbook-cover.jpg"
                                        alt="Instagram Preview"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-60"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-terracotta text-[12px] font-bold uppercase tracking-tighter bg-white px-3 py-1">View Post</span>
                                    </div>
                                </div>
                                <p className="text-[13px] text-charcoal/70 italic leading-snug">
                                    "The definitive guide to modern masculine elegance..."
                                </p>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Gallery / Preview Section */}
            <div id="preview-section" className="w-full max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20 mt-24 lg:mt-32 pb-12 scroll-mt-24">
                <div className="flex flex-col gap-4 mb-10 text-center">
                    <h3 className="text-terracotta tracking-[0.15em] text-sm uppercase font-sans font-bold">Inside the Book</h3>
                    <h3 className="text-charcoal font-display text-4xl lg:text-5xl font-bold tracking-tight">Curated Styles & Guides</h3>
                    <p className="font-sans text-charcoal/60 mt-2 max-w-lg mx-auto">Select a chapter below to read an exclusive excerpt from the guide.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CHAPTERS.map((item, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveChapter(item)}
                            className="group flex flex-col items-center text-center cursor-pointer text-left focus:outline-none"
                            aria-label={`Preview ${item.title}`}
                        >
                            <div className="w-full aspect-[3/4] overflow-hidden relative bg-stone-100 mb-6 border border-charcoal/5 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                                <Image
                                    src={item.img}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                                    <span className="text-white font-sans text-[11px] uppercase tracking-[0.2em] font-bold border border-white/40 px-6 py-3 rounded-full bg-charcoal/40">Read Excerpt</span>
                                </div>
                            </div>
                            <h4 className="font-display text-lg text-charcoal font-semibold tracking-wide border-b border-transparent group-hover:border-terracotta pb-1 transition-colors">{item.title}</h4>
                        </button>
                    ))}
                </div>
            </div>

            {/* Reading Modal */}
            {activeChapter && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm transition-opacity"
                        onClick={() => setActiveChapter(null)}
                    />

                    {/* Modal Content */}
                    <div className="relative w-full max-w-[1000px] max-h-[90vh] bg-ivory shadow-2xl overflow-y-auto flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300">

                        {/* Close button */}
                        <button
                            onClick={() => setActiveChapter(null)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 hover:bg-white text-charcoal rounded-full flex items-center justify-center shadow-sm transition-colors"
                        >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>

                        {/* Image Left */}
                        <div className="w-full md:w-1/2 relative aspect-[4/5] md:aspect-auto md:min-h-[600px] border-r border-charcoal/10">
                            <Image
                                src={activeChapter.img}
                                alt={activeChapter.alt}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Text Right (Editorial layout) */}
                        <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-[#F9F6F0]">
                            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-terracotta font-bold mb-6">
                                Exclusive Excerpt
                            </p>

                            <h2 className="font-display text-3xl md:text-4xl text-charcoal font-medium leading-[1.1] mb-8">
                                {activeChapter.title.split(' / ')[1]}
                            </h2>

                            <div className="relative">
                                {/* Editorial drop cap style simulation */}
                                <span className="float-left font-display text-6xl text-charcoal/20 mr-4 mt-2 leading-[0.8]">
                                    {activeChapter.excerpt.charAt(0)}
                                </span>
                                <p className="font-display text-lg md:text-xl text-charcoal/80 leading-[1.8] italic -ml-[1px]">
                                    {activeChapter.excerpt.substring(1)}
                                </p>
                            </div>

                            <div className="mt-12 flex items-center gap-4 pt-8 border-t border-charcoal/10">
                                <Button
                                    variant="primary"
                                    as="a"
                                    href="https://www.amazon.in/dp/9349262533/"
                                    className="bg-charcoal hover:bg-black text-white h-12 w-full max-w-[200px] text-[12px]"
                                >
                                    ORDER THE BOOK
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
