"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import reelsData from "@/data/reels.json";
import testimonialsData from "@/data/testimonials-video.json";
import VideoModal from "@/components/ui/VideoModal";

const CATEGORIES = [
    "Client Transformations",
    "Corporate Training",
    "Personal Styling",
    "Behind the Scenes"
];

export default function ReelsShowcaseSection() {
    const [activeTab, setActiveTab] = useState("Client Transformations");
    const [selectedVideo, setSelectedVideo] = useState<{ id: string, type: "youtube" | "instagram" } | null>(null);

    // Filter logic for categories
    const getReelsForCategory = () => {
        switch (activeTab) {
            case "Client Transformations":
                return reelsData.filter(reel => reel.category === "Testimonials");
            case "Corporate Training":
                return reelsData.filter(reel => reel.category === "Corporate Training");
            case "Personal Styling":
                return reelsData.filter(reel => reel.category === "Shopping" || reel.category === "1-2-1 Consulting");
            case "Behind the Scenes":
                return reelsData.filter(reel => reel.category === "Behind the Scenes" || reel.category === "Photoshoots");
            default:
                return [];
        }
    };

    const currentReels = getReelsForCategory();

    return (
        <section id="reels" className="w-full bg-white py-24 md:py-32">
            <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="font-display text-[40px] md:text-[56px] text-charcoal leading-tight mb-6 font-bold uppercase tracking-tight">
                        Impact on Instagram
                    </h2>
                    <p className="font-sans text-charcoal/60 text-sm md:text-base tracking-[0.1em] uppercase">
                        Real Stories of Transformation & Presence
                    </p>
                </div>

                {/* Filter Tabs - Horizontal Scroll on Mobile */}
                <div className="mb-16 md:mb-20">
                    <div className="flex overflow-x-auto scrollbar-hide md:flex-wrap md:justify-center gap-3 md:gap-4 pb-4 md:pb-0 max-w-5xl mx-auto scroll-smooth">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveTab(category)}
                                className={`
                                    whitespace-nowrap px-6 py-2.5 text-[11px] md:text-[13px] font-bold uppercase tracking-widest border transition-all duration-300
                                    ${activeTab === category
                                        ? "bg-terracotta text-white border-terracotta shadow-md"
                                        : "bg-transparent text-charcoal/60 border-charcoal/10 hover:border-terracotta hover:text-terracotta"
                                    }
                                `}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {/* Render Reels */}
                    {currentReels.map((reel, index) => {
                        const instagramId = reel.url.split("/reel/")[1]?.split("/")[0] || reel.url;
                        
                        return (
                            <button
                                key={`reel-${index}`}
                                onClick={() => setSelectedVideo({ id: instagramId, type: "instagram" })}
                                className="group relative w-full aspect-[9/16] bg-ivory overflow-hidden border border-charcoal/5 hover:border-terracotta/20 transition-all duration-500 shadow-sm hover:shadow-xl text-left"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center">
                                    <div className="flex flex-col items-center gap-2 text-white/90">
                                        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-white drop-shadow-lg group-hover:scale-110 transition-transform duration-200" aria-hidden>
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                        <span className="font-sans text-[11px] font-bold tracking-widest uppercase">
                                            Watch Reel
                                        </span>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/90 via-charcoal/70 to-transparent p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white text-[14px] font-sans leading-relaxed font-medium">
                                        {reel.caption}
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Bottom CTA - Updated to Follow on IG */}
                <div className="mt-20 text-center">
                    <a
                        href="https://instagram.com/heena_imageconsultant"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-10 py-5 bg-transparent text-charcoal uppercase text-[13px] font-bold tracking-widest border-2 border-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 group"
                    >
                        Follow for More Stories
                        <span className="inline-block ml-3 transform transition-transform group-hover:translate-x-1">→</span>
                    </a>
                </div>
            </div>

            {/* Video Modal */}
            <VideoModal 
                isOpen={!!selectedVideo} 
                onClose={() => setSelectedVideo(null)} 
                videoId={selectedVideo?.id || ""} 
                type={selectedVideo?.type || "youtube"} 
            />
        </section>
    );
}
