"use client";

import { useMemo, useState } from "react";
import postsData from "@/data/influencer-posts.json";
import type { InfluencerPost } from "@/types";
import InstagramCard from "@/components/ui/InstagramCard";
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

const posts = postsData as InfluencerPost[];

const CATEGORIES = ["All", "Reels", "Posts", "Brand Collabs"];

export default function InfluencerPageClient() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredPosts = useMemo(() => {
        if (activeFilter === "All") return posts;
        if (activeFilter === "Brand Collabs") return posts.filter(p => p.brand !== "General Style"); // Assuming general style vs specific brands
        return posts.filter(p =>
            p.instagramType === activeFilter.slice(0, -1).toLowerCase() // "Reels" -> "reel", "Posts" -> "post"
        );
    }, [activeFilter]);

    return (
        <main className="min-h-screen bg-ivory pb-24">
            {/* Nav Back */}
            <div className="absolute top-0 left-0 w-full z-10 px-6 md:px-12 py-8 flex items-center justify-between">
                <Link href="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white font-sans text-sm font-semibold tracking-wider uppercase transition-colors">
                    <ArrowLeft size={16} /> Back to Site
                </Link>
            </div>

            {/* Hero Header */}
            <header className="relative w-full h-[350px] bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 flex flex-col items-center gap-4 text-center px-4">
                    <h1 className="font-display font-medium text-[clamp(48px,6vw,72px)] text-white leading-tight">
                        Simply Influencer
                    </h1>
                    <a
                        href="https://instagram.com/heena_imageconsultant"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-[16px] text-white/90 hover:text-white flex items-center gap-2 border border-white/30 rounded-full px-6 py-2.5 bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm"
                    >
                        @heena_imageconsultant <ExternalLink size={16} />
                    </a>
                </div>
            </header>

            <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20 -mt-8 relative z-20">
                {/* Filters */}
                <div className="bg-ivory/80 backdrop-blur-md sticky top-4 z-30 rounded-2xl flex items-center justify-center p-2 mb-12 shadow-sm border border-charcoal/5">
                    <div className="flex bg-white rounded-xl p-1 shadow-sm border border-border/50 overflow-x-auto w-full max-w-2xl no-scrollbar">
                        {CATEGORIES.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`
                                    flex-1 min-w-fit px-6 py-2.5 rounded-lg font-sans text-[13px] font-semibold uppercase tracking-wider transition-all duration-200
                                    ${activeFilter === category
                                        ? "bg-charcoal text-white shadow-md"
                                        : "text-charcoal/60 hover:text-charcoal hover:bg-charcoal/5"
                                    }
                                `}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map(post => (
                        <InstagramCard key={post.brand} post={post} />
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="font-sans text-charcoal/60">No posts found for this category.</p>
                    </div>
                )}

                {/* Bottom CTA */}
                <div className="mt-24 text-center">
                    <a
                        href="https://instagram.com/heena_imageconsultant"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-sans text-[16px] font-semibold text-ivory bg-terracotta hover:bg-terracotta-dk px-8 py-4 flex items-center justify-center transition-all duration-300 uppercase tracking-widest shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        Explore all on Instagram <ArrowRight size={18} strokeWidth={2} />
                    </a>
                </div>
            </div>
        </main>
    );
}
