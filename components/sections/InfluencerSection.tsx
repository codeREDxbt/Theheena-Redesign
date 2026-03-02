"use client";

import { useState, useRef } from "react";
import postsData from "@/data/influencer-posts.json";
import type { InfluencerPost } from "@/types";
import SectionLabel from "@/components/ui/SectionLabel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const posts = postsData as InfluencerPost[];

/* ── Instagram embed card ─────────────────────────────────── */
function InstagramCard({ post }: { post: InfluencerPost }) {
    const [active, setActive] = useState(false);

    const hasEmbed = !!post.instagramPostId;

    // Instagram oEmbed URL
    // We embed the bare reel/post iframe using the public embed endpoint
    const embedSrc = hasEmbed
        ? `https://www.instagram.com/${post.instagramType === "reel" ? "reel" : "p"}/${post.instagramPostId}/embed/captioned/`
        : null;

    return (
        <article
            className="
        bg-white border border-border flex flex-col shrink-0 snap-start
        w-[85vw] sm:w-[45vw] lg:w-[calc(25%-15px)]
        transition-all duration-200 hover:-translate-y-1 hover:shadow-lg overflow-hidden
      "
        >
            {/* Embed or thumbnail */}
            {active && embedSrc ? (
                /* ── Live Instagram embed ── */
                <div className="relative w-full" style={{ paddingBottom: "120%" }}>
                    <iframe
                        src={embedSrc}
                        title={`${post.brand} — Instagram`}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                        scrolling="no"
                        frameBorder="0"
                        className="absolute inset-0 w-full h-full"
                        loading="lazy"
                    />
                </div>
            ) : (
                /* ── Play-overlay thumbnail ── */
                <button
                    type="button"
                    onClick={() => setActive(true)}
                    className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] group cursor-pointer border-0 p-0"
                    aria-label={`Play ${post.brand} Instagram ${post.instagramType ?? "post"}`}
                >
                    {/* Gradient background acts as placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Instagram icon + play hint */}
                        <div className="flex flex-col items-center gap-2 text-white">
                            {/* Instagram SVG */}
                            <svg
                                viewBox="0 0 24 24"
                                className="w-12 h-12 fill-white drop-shadow-lg group-hover:scale-110 transition-transform duration-200"
                                aria-hidden
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            <span className="font-sans text-sm font-semibold tracking-wide text-white/90 uppercase">
                                {post.instagramType === "reel" ? "Watch Reel" : "View Post"}
                            </span>
                        </div>
                    </div>
                    {/* Bottom brand label */}
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-4 bg-gradient-to-t from-black/70 to-transparent">
                        <p className="font-sans text-[14px] font-semibold text-white truncate">
                            {post.brand}
                        </p>
                    </div>
                </button>
            )}

            {/* Card body — always visible */}
            <div className="p-5 flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5">
                    {/* IG gradient avatar dot */}
                    <div className="w-6 h-6 shrink-0 rounded-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" />
                    <p className="font-sans text-[13px] text-charcoal/60 truncate">
                        heena_imageconsultant
                    </p>
                </div>
                <p className="font-sans text-[16px] font-semibold text-charcoal leading-snug">
                    {post.brand}
                </p>
                <p className="font-sans text-[14px] text-muted leading-relaxed line-clamp-2">
                    {post.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                    {post.hashtags.slice(0, 3).map((tag) => (
                        <span key={tag} className="font-sans text-[12px] text-terracotta">
                            #{tag}
                        </span>
                    ))}
                </div>
                {!active && (
                    <p className="font-sans text-[12px] text-charcoal/40 mt-1">
                        {post.likeCount.toLocaleString("en-IN")} likes
                    </p>
                )}
            </div>
        </article>
    );
}

/* ── Section ──────────────────────────────────────────────── */
export default function InfluencerSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.clientWidth * 0.8; // Scroll 80% of visible width
            container.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <section id="influencer" className="section-light py-24" aria-label="Brand partnerships">
            <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20 relative">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="flex flex-col gap-6 md:max-w-[600px] w-full">
                        <SectionLabel>Beyond Consulting</SectionLabel>
                        <h2 className="font-display font-medium text-[clamp(40px,5vw,56px)] leading-[1.05] tracking-tight text-charcoal">
                            Simply <span className="font-bold">Influencer.</span>
                        </h2>
                        <p className="font-sans text-[17px] text-muted leading-relaxed">
                            Authentic brand partnerships and style breakdowns — because style is a living language.
                        </p>
                    </div>

                    {/* Desktop Navigation Arrows */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={() => scroll("left")}
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-charcoal/20 text-charcoal/60 hover:bg-charcoal hover:text-ivory transition-colors"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={20} strokeWidth={1.5} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-charcoal/20 text-charcoal/60 hover:bg-charcoal hover:text-ivory transition-colors"
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={20} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="-mx-6 md:-mx-12 xl:-mx-20 px-6 md:px-12 xl:px-20">
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-5 pb-8 snap-x snap-mandatory scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {posts.map((post) => (
                            <InstagramCard key={post.brand} post={post} />
                        ))}
                    </div>
                </div>

                {/* IG CTA */}
                <div className="text-center mt-12">
                    <a
                        href="https://instagram.com/heena_imageconsultant"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-terracotta hover:text-terracotta-dk transition-colors duration-200"
                    >
                        Follow on Instagram @heena_imageconsultant →
                    </a>
                </div>
            </div>
        </section>
    );
}
