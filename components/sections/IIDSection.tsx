import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const ACHIEVEMENTS = [
    "Exclusive image consultant chosen to partner with the Government of India, Ministry of MSME",
    "Representing IID — advocating image consulting as a recognised profession in India",
    "Market size backed: ₹624 Cr industry, growing — signifying government belief in image consulting",
    "Transformed professionals' visual appearance — inside out — across India",
];

export default function IIDSection() {
    return (
        <section id="iid" className="section-dark py-24" aria-label="IID and MSME Recognition">
            <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 lg:gap-24 items-center">

                    {/* Left — Credential Visuals */}
                    <div className="relative group">
                        {/* Main Image - IID.jpg */}
                        <div className="relative aspect-[4/5] w-full bg-white/5 border border-white/10 overflow-hidden shadow-2xl">
                            <Image
                                src="/images/Latest images/IID.jpg"
                                alt="Heena with MSME Recognition"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Overlapping Certificate - IID Certificate.jpg */}
                        <div className="absolute -bottom-8 -right-8 w-[70%] aspect-[3/4] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white/10 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                            <Image
                                src="/images/Latest images/IID Certificate.jpg"
                                alt="MSME Recognition Certificate"
                                fill
                                className="object-cover"
                            />
                            {/* Seal/Badge Overlay */}
                            <div className="absolute top-4 right-4 w-12 h-12 bg-terracotta/90 rounded-none flex items-center justify-center border border-white/20 shadow-lg">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </div>
                        </div>

                        {/* Caption Overlay */}
                        <div className="absolute bottom-6 left-6 z-10 max-w-[200px]">
                            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-terracotta font-bold mb-1">
                                Ministry of MSME
                            </p>
                            <p className="font-display text-lg text-white font-bold leading-tight">
                                Official Recognition & Affiliation
                            </p>
                        </div>
                    </div>

                    {/* Right — Copy */}
                    <div className="flex flex-col gap-8">
                        <SectionLabel theme="dark">My Achievements</SectionLabel>

                        <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-[52px] text-white leading-[1.1] tracking-tight">
                            Recognized by India&apos;s Government. Trusted by Thousands.
                        </h2>

                        <p className="font-sans text-ivory/70 text-[17px] leading-relaxed">
                            I am honored to be the exclusive image consultant in India chosen to partner with the Government of India, Ministry of MSME. 
                            Representing the Institute for Industrial Development (IID), I advocate for image consulting as a recognized profession, 
                            educating and inspiring individuals about its vast potential to transform leadership and identity across sectors.
                        </p>

                        <ul className="flex flex-col gap-4">
                            {ACHIEVEMENTS.map((point) => (
                                <li key={point} className="flex gap-4 items-start font-sans text-[15px] text-ivory/80 leading-relaxed">
                                    <span className="text-terracotta mt-1 shrink-0 font-bold">—</span>
                                    {point}
                                </li>
                            ))}
                        </ul>

                        <p className="font-sans text-ivory/60 text-[14px] italic leading-relaxed border-l-2 border-terracotta pl-4">
                            &ldquo;Whether it&apos;s refining your virtual presence or curating a wardrobe that speaks before
                            you do — Heena ensures you don&apos;t just show up&hellip; You stand out.&rdquo;
                        </p>

                        <div className="flex gap-4 flex-wrap">
                            <Button variant="primary" as="a" href="/book">
                                Book Your Evaluation
                            </Button>
                            <Button variant="ghost-light" as="a" href="#recognition">
                                View Recognition
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
