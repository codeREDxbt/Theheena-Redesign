"use client";

import postsData from "@/data/influencer-posts.json";
import type { InfluencerPost } from "@/types";
import SectionLabel from "@/components/ui/SectionLabel";
import InstagramCard from "@/components/ui/InstagramCard";
import Link from "next/link";
import { ArrowRight, Instagram } from "lucide-react";

const posts = postsData as InfluencerPost[];

const nykaaPost: InfluencerPost = {
    brand: "Nykaa",
    description: "Celebrating beauty and self-expression with exclusive curation. A masterclass in elegance.",
    hashtags: ["nykaa", "beauty", "imageconsultant"],
    likeCount: 4240,
    imageSrc: "",
    instagramPostId: "DFMRXv9zKBI",
    instagramType: "reel"
};

const myntraPost: InfluencerPost = {
    brand: "Myntra",
    description: "Curating everyday elegance with Myntra Studio. Elevate your wardrobe effortlessly.",
    hashtags: ["myntra", "fashion", "styleexpert"],
    likeCount: 3532,
    imageSrc: "",
    instagramPostId: "DQOn9gPk05_",
    instagramType: "reel"
};

function SmallCollabCard({ post }: { post: InfluencerPost }) {
    // Generate actual instagram link
    const postUrl = post.instagramPostId
        ? `https://www.instagram.com/${post.instagramType === 'reel' ? 'reel' : 'p'}/${post.instagramPostId}`
        : "https://www.instagram.com/heena_imageconsultant/";

    return (
        <a
            href={postUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-border rounded-[4px] p-3 flex flex-col gap-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md group cursor-pointer block"
        >
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center shrink-0 shadow-inner">
                    <Instagram size={18} className="text-white" />
                </div>
                <div>
                    <h4 className="font-sans text-[15px] font-bold text-charcoal leading-tight group-hover:text-terracotta transition-colors">{post.brand}</h4>
                    <p className="font-sans text-[12px] text-muted mt-0.5">heena_imageconsultant</p>
                </div>
            </div>
            <p className="font-sans text-[13px] text-charcoal/80 line-clamp-2 leading-relaxed">
                {post.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                {post.hashtags.slice(0, 2).map((tag) => (
                    <span key={tag} className="font-sans text-[11px] font-medium text-terracotta tracking-wide uppercase">
                        #{tag}
                    </span>
                ))}
            </div>
        </a>
    );
}

export default function InfluencerSection() {
    const teaserPosts = posts.slice(0, 3);

    return (
        <section id="influencer" className="section-light py-10" aria-label="Brand partnerships">
            <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20 relative">

                {/* Header perfectly centered to maintain symmetry */}
                <div className="flex flex-col items-center text-center mb-10 gap-3">
                    <SectionLabel>Beyond Consulting</SectionLabel>
                    <h2 className="font-display font-medium text-[clamp(32px,4vw,44px)] leading-[1.05] tracking-tight text-charcoal">
                        Brand <span className="font-bold">Collaborations.</span>
                    </h2>
                    <p className="font-sans text-[16px] text-muted leading-relaxed max-w-[600px]">
                        Authentic partnerships and style breakdowns — because style is a living language.
                    </p>
                </div>

                {/* 3-Column Symmetrical Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">

                    {/* Left: Nykaa */}
                    <div className="flex flex-col gap-4">
                        <div className="text-center lg:text-left border-b border-border pb-3 px-2">
                            <h3 className="font-display text-2xl font-bold text-charcoal">Nykaa</h3>
                            <p className="font-sans text-[12px] text-muted mt-1 uppercase tracking-[0.15em] font-semibold">Beauty & Styling</p>
                        </div>
                        <div className="relative w-full max-w-[320px] mx-auto lg:mx-0">
                            <InstagramCard post={nykaaPost} />
                        </div>
                    </div>

                    {/* Center: 3 Stacked Cards (Existing Brands) */}
                    <div className="flex flex-col gap-4 justify-center">
                        <div className="text-center border-b border-border pb-3 px-2">
                            <h3 className="font-display text-2xl font-bold text-charcoal">Featured</h3>
                            <p className="font-sans text-[12px] text-muted mt-1 uppercase tracking-[0.15em] font-semibold">Recent Partnerships</p>
                        </div>
                        <div className="flex flex-col gap-4 flex-1 justify-center max-w-[400px] mx-auto w-full">
                            {teaserPosts.map((post) => (
                                <SmallCollabCard key={post.brand} post={post} />
                            ))}
                        </div>
                    </div>

                    {/* Right: Myntra */}
                    <div className="flex flex-col gap-4">
                        <div className="text-center lg:text-right border-b border-border pb-3 px-2">
                            <h3 className="font-display text-2xl font-bold text-charcoal">Myntra</h3>
                            <p className="font-sans text-[12px] text-muted mt-1 uppercase tracking-[0.15em] font-semibold">Everyday Elegance</p>
                        </div>
                        <div className="relative w-full max-w-[320px] mx-auto lg:mx-0 lg:ml-auto">
                            <InstagramCard post={myntraPost} />
                        </div>
                    </div>

                </div>

                {/* Dominant Centered Call to Action */}
                <div className="text-center flex justify-center">
                    <Link
                        href="/influencer"
                        className="inline-flex items-center justify-center gap-2 font-sans text-[14px] font-bold text-white bg-terracotta hover:bg-[#a85326] transition-colors duration-300 py-3 px-8 rounded-full uppercase tracking-widest shadow-lg shadow-terracotta/20"
                    >
                        View All Collaborations <ArrowRight size={16} strokeWidth={2} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
