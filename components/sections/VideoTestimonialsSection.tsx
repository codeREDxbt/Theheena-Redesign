"use client";

import { useState } from "react";
import Image from "next/image";
import videosData from "@/data/testimonials-video.json";
import type { VideoTestimonial } from "@/types";
import SectionLabel from "@/components/ui/SectionLabel";

const videos = videosData as VideoTestimonial[];

function VideoCard({ video }: { video: VideoTestimonial }) {
    const [playing, setPlaying] = useState(false);
    const thumbnail = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;

    return (
        <article
            className="
        group relative bg-[#111] overflow-hidden border border-transparent
        hover:border-terracotta transition-all duration-300
        hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]
      "
        >
            {playing ? (
                /* ── Live YouTube embed ── */
                <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
                    title={`${video.name} — ${video.label}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full aspect-video"
                    loading="lazy"
                />
            ) : (
                /* ── Click-to-play thumbnail ── */
                <button
                    type="button"
                    className="relative w-full aspect-video block bg-charcoal/60 cursor-pointer border-0 p-0"
                    onClick={() => setPlaying(true)}
                    aria-label={`Play ${video.name}'s testimonial`}
                >
                    {/* YouTube thumbnail */}
                    <Image
                        src={thumbnail}
                        alt={`${video.name} testimonial thumbnail`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        unoptimized
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* YouTube play button */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-14 h-14 rounded-full bg-[#FF0000] flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white ml-1" aria-hidden>
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>

                    {/* Name + label overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                        <p className="font-sans text-[14px] font-semibold text-white leading-tight tracking-wide">
                            {video.name}
                        </p>
                        <p className="font-sans text-[12px] text-ivory/70 mt-1 uppercase tracking-widest">
                            {video.label}
                        </p>
                    </div>
                </button>
            )}
        </article>
    );
}

export default function VideoTestimonialsSection() {
    return (
        <section id="testimonials" className="section-dark py-24" aria-label="Client testimonials">
            <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">

                {/* Header */}
                <div className="text-center mb-16 lg:mb-24 flex flex-col items-center gap-5">
                    <SectionLabel theme="dark">Real Transformations</SectionLabel>
                    <h2 className="font-display font-bold italic text-4xl md:text-5xl lg:text-[56px] text-ivory leading-[1.1] tracking-tight">
                        Stories From My Clients.
                    </h2>
                    <p className="font-sans text-[16px] md:text-[18px] text-ivory/70 max-w-[480px] mt-2">
                        Unscripted. Unfiltered. Results that speak.
                    </p>
                </div>

                {/* 3×2 Video grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {videos.map((video) => (
                        <VideoCard key={video.name} video={video} />
                    ))}
                </div>

                {/* YouTube CTA */}
                <div className="text-center mt-12 lg:mt-16">
                    <a
                        href="https://youtube.com/@heenaimageconsultant?si=fjfewfhzDSK_47DT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-sm font-semibold text-terracotta hover:text-terracotta-dk transition-colors duration-200"
                    >
                        Watch All Testimonials on YouTube →
                    </a>
                </div>
            </div>
        </section>
    );
}
