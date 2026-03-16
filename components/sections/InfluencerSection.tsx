"use client";

import postsData from "@/data/influencer-posts.json";
import type { InfluencerPost } from "@/types";
import SectionLabel from "@/components/ui/SectionLabel";
import InstagramCard from "@/components/ui/InstagramCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = postsData as InfluencerPost[];

/* ── Section ──────────────────────────────────────────────── */
export default function InfluencerSection() {
    // Only show latest 3 posts for the teaser
    const teaserPosts = posts.slice(0, 3);

    return (
        <section id="influencer" className="section-light py-24" aria-label="Brand partnerships">
            <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20 relative">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="flex flex-col gap-6 md:max-w-[600px] w-full">
                        <SectionLabel>Beyond Consulting</SectionLabel>
                        <h2 className="font-display font-medium text-[clamp(40px,5vw,56px)] leading-[1.05] tracking-tight text-charcoal">
                            Brand <span className="font-bold">Collaborations.</span>
                        </h2>
                        <p className="font-sans text-[17px] text-muted leading-relaxed">
                            Authentic partnerships and style breakdowns — because style is a living language.
                        </p>
                    </div>

                    {/* View All Desktop */}
                    <div className="hidden md:flex items-center">
                        <Link
                            href="/influencer"
                            className="inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-terracotta hover:text-terracotta-dk transition-colors duration-200 uppercase tracking-wider"
                        >
                            View All Collaborations <ArrowRight size={16} strokeWidth={2} />
                        </Link>
                    </div>
                </div>

                {/* Card Grid (Teaser) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {teaserPosts.map((post) => (
                        <InstagramCard key={post.brand} post={post} />
                    ))}
                </div>

                {/* Mobile View All */}
                <div className="md:hidden text-center mt-8">
                    <Link
                        href="/influencer"
                        className="inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-terracotta hover:text-terracotta-dk transition-colors duration-200 uppercase tracking-wider"
                    >
                        View All Collaborations <ArrowRight size={16} strokeWidth={2} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
