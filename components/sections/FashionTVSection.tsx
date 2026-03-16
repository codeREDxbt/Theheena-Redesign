import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

/* OG site content: "Heena The Style Architect" + Fashion TV context */
export default function FashionTVSection() {
    return (
        <section id="fashiontv" className="section-dark py-24" aria-label="Fashion TV Feature">
            <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 lg:gap-24 items-center">

                    {/* Left — Visual Column (Now Larger & Well Spaced) */}
                    <div className="flex flex-col gap-10">
                        {/* Main Brand Visual - Larger & Dominant */}
                        <div className="relative group">
                            <div className="relative aspect-[16/10] w-full bg-white/5 border border-white/10 overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/portfolio/desk.png"
                                    alt="Heena - Centre Director at Fashion TV"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60" />
                            </div>
                            {/* Brand Label Overlay */}
                            <div className="absolute bottom-6 left-6 z-10">
                                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-terracotta font-bold mb-1">
                                    Exclusive Leadership
                                </p>
                                <p className="font-display text-xl md:text-2xl text-white font-bold max-w-[240px] leading-tight">
                                    Centre Director @ Fashion TV
                                </p>
                            </div>
                        </div>

                        {/* Video Feature - Now separate and non-overlapping */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            <div className="aspect-[9/16] w-full max-w-[280px] bg-charcoal shadow-2xl border border-white/10 overflow-hidden relative group">
                                <iframe
                                    src="https://www.youtube.com/embed/BCVPIpvuHzw?rel=0&modestbranding=1"
                                    title="Fashion TV Feature"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                />
                                <div className="absolute top-4 left-4 px-2 py-1 bg-terracotta text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                                    Watch Feature
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 pt-2">
                                <p className="font-sans text-ivory/40 text-[13px] uppercase tracking-widest font-bold">Featured Shorts</p>
                                <p className="font-display text-2xl text-white font-bold leading-tight italic">
                                    &ldquo;Leading the next wave of style leaders.&rdquo;
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right — Copy */}
                    <div className="flex flex-col gap-8">
                        <SectionLabel theme="dark">As Seen On</SectionLabel>

                        <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-[52px] text-white leading-[1.1] tracking-tight">
                            Leading as Centre Director at FTV.
                        </h2>

                        <p className="font-sans text-ivory/70 text-[17px] leading-relaxed">
                            Heena serves as the Centre Director at Fashion TV (FTV) — the &quot;Big Daddy of Fashion.&quot; 
                            Her leadership and expertise drive the vision of international styling and professional training 
                            on a global scale, bridging the gap between luxury fashion and elite image consulting.
                        </p>

                        <p className="font-sans text-ivory/60 text-[15px] leading-relaxed border-l-2 border-terracotta pl-4 italic">
                            &ldquo;From Businessman to Success Story: The Transformation Journey with Heena&apos;s
                            Image Consulting Services.&rdquo;
                        </p>

                        <ul className="flex flex-col gap-4">
                            {[
                                "Build versatile, high-impact looks that save time and money",
                                "Leave a magnetic impression without even trying",
                                "Increase the weight of your words and decisions",
                                "Receive first preference in professional and personal circles",
                            ].map((point) => (
                                <li key={point} className="flex gap-4 items-start font-sans text-[15px] text-ivory/80 leading-relaxed">
                                    <span className="text-terracotta mt-1 shrink-0 font-bold">—</span>
                                    {point}
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-4 flex-wrap">
                            <Button variant="primary" as="a" href="/book">
                                Start Your Transformation
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
