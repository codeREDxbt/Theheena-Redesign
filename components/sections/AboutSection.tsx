"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import Button from "@/components/ui/Button";

const TIMELINE = [
    { year: "2014", title: "Clinical Practice", accent: false },
    { year: "2016", title: "Left Corporate. Completed Soft Skills Training", accent: false },
    { year: "2019", title: "YMCA Certified Soft Skills Trainer", accent: false },
    { year: "2021", title: "NGO & Community Image Transformation", accent: false },
    { year: "2022", title: "Ministry of MSME Recognition by Govt. of India", accent: true },
    { year: "2024", title: "Instituted Digital Academy Affiliation", accent: false },
];

export default function AboutSection() {
    const [playing, setPlaying] = useState(false);
    const videoId = "Ug6FQnLj-SE";

    return (
        <section id="about" className="w-full bg-[#f5f0e8] py-16 md:py-20 lg:py-24">
            <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    
                    {/* Left Column - Visual Stack */}
                    <div className="w-full lg:w-[42%] flex flex-col gap-6">
                        {/* Video Card - Now Top Center, Not Overlapped */}
                        <div className="w-full aspect-video bg-charcoal shadow-2xl overflow-hidden border border-white/10 z-10 group relative h-auto">
                            {playing ? (
                                <iframe
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                                    title="About Heena"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                />
                            ) : (
                                <button
                                    onClick={() => setPlaying(true)}
                                    className="relative w-full h-full flex items-center justify-center group"
                                >
                                    <Image
                                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                                        alt="Video Thumbnail"
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                                    />
                                    <div className="w-16 h-16 bg-terracotta text-white flex items-center justify-center rounded-none shadow-lg transform transition-transform group-hover:scale-110 border border-white/20">
                                        <Play size={32} fill="currentColor" className="ml-1" />
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <p className="text-[11px] font-bold uppercase tracking-widest text-white/80">Watch My Journey</p>
                                    </div>
                                </button>
                            )}
                        </div>

                        {/* Portrait Photo */}
                        <div className="relative w-full aspect-[4/5] bg-stone-200 overflow-hidden shadow-sm border border-charcoal/5">
                            <Image
                                src="/images/story-cover.jpeg"
                                alt="Heena — India's Psychology-Backed Image Consultant and Wardrobe Stylist"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="w-full lg:w-[55%] flex flex-col pt-12 lg:pt-0">
                        <span className="text-terracotta font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-6 font-sans">
                            The Story
                        </span>
                        
                        <h2 className="font-display text-[42px] md:text-[52px] lg:text-[64px] font-bold leading-[1.1] mb-8 text-charcoal tracking-tight">
                            Meet Heena — Your Image Consultant
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 text-[15px] md:text-[16px] text-charcoal/80 font-sans leading-relaxed mb-10">
                            <p>
                                Heena, the only image consultant in India to be associated with the government of India, the Ministry of MSME will help you in improving your personality. I am Heena, the Image Consultant, who can help you to develop a powerful dressing and impressive etiquette for the clients with my proprietary personal style statement.
                            </p>
                            <p>
                                I would love to guide you with some of the essential elements of virtual Styling and powerful dressing secrets so that you can develop your Grand Professional Presence. It will help you to influence the world with your visual appearance.
                            </p>
                            <p>
                                When I was an employee of a big firm, I always used to think that my potential is more than serving the company. So, I gathered the courage to quit the job, at the time I was Pregnant, and completed my &lsquo;Soft skills&rsquo; Training and &lsquo;Train the Trainer&rsquo; Program. Later, I did a few Image Sessions for YMCA and used my skills to serve in NGOs of Delhi.
                            </p>
                            <p>
                                My sole inspiration for becoming an Image consultant was my adorable daughter, **Yana**. So at the initial stage of my career, I used her as my companion and now finally, my journey has become smooth with the support of a few genuine people!
                            </p>
                        </div>

                        {/* Horizontal Timeline */}
                        <div className="hidden md:block relative w-full pt-4 pb-2 mb-8 border-t border-charcoal/10">
                            <div className="relative flex justify-between gap-4">
                                {TIMELINE.map((item, idx) => (
                                    <div key={idx} className="flex flex-col items-center text-center group">
                                        <span className={`text-[11px] font-bold mb-2 transition-colors ${item.accent ? "text-terracotta" : "text-charcoal/40"}`}>
                                            {item.year}
                                        </span>
                                        <div className={`w-2 h-2 rounded-none border-[1.5px] transition-all duration-300 ${item.accent ? "bg-terracotta border-terracotta scale-125 shadow-sm" : "bg-white border-charcoal/20 group-hover:border-terracotta"}`} />
                                        <p className={`text-[9px] sm:text-[10px] font-medium leading-tight mt-2 max-w-[70px] transition-colors ${item.accent ? "text-charcoal font-bold" : "text-charcoal/60"}`}>
                                            {item.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Vertical Timeline */}
                        <div className="md:hidden flex flex-col gap-6 pl-4 border-l border-charcoal/20 mb-12 ml-2">
                            {TIMELINE.map((item, idx) => (
                                <div key={idx} className="flex gap-4 items-start">
                                    <span className={`text-xs font-bold w-12 pt-1 ${item.accent ? "text-terracotta" : "text-charcoal/40"}`}>
                                        {item.year}
                                    </span>
                                    <p className={`text-sm font-medium ${item.accent ? "text-charcoal font-bold" : "text-charcoal/70"}`}>
                                        {item.title}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4">
                            <Button
                                as="a"
                                href="/book"
                                variant="ghost"
                                className="px-10 py-5 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 uppercase font-bold tracking-widest text-[13px] rounded-none"
                            >
                                Work with Heena
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

