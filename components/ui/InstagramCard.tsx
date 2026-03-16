"use client";

import { useState } from "react";
import type { InfluencerPost } from "@/types";

export default function InstagramCard({ post }: { post: InfluencerPost }) {
    const [active, setActive] = useState(false);

    const hasEmbed = !!post.instagramPostId;

    // Instagram oEmbed URL
    // We embed the bare reel/post iframe using the public embed endpoint
    const embedSrc = hasEmbed
        ? `https://www.instagram.com/${post.instagramType === "reel" ? "reel" : "p"}/${post.instagramPostId}/embed/captioned/`
        : null;

    return (
        <article
            className="bg-white border border-border flex flex-col snap-start transition-all duration-200 hover:-translate-y-1 hover:shadow-lg overflow-hidden w-full"
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
                            <svg viewBox="0 0 24 24" className="w-12 h-12 fill-white drop-shadow-lg group-hover:scale-110 transition-transform duration-200" aria-hidden>
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
