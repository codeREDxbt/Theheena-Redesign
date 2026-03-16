import Image from "next/image";
import { ChevronRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

/* Real SVG icons matching the brand — sharp, minimal, geometric */
const SERVICES = [
    {
        title: "Image Scope",
        descriptor: "A comprehensive audit of your current visual presence and personal brand gaps.",
        subDescriptor: "Uncover exactly what your current image is broadcasting to the world.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
        ),
    },
    {
        title: "Personal Shopping",
        descriptor: "Curated wardrobe selections that communicate your authority and style.",
        subDescriptor: "Build a lasting wardrobe designed exclusively for your lifestyle.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
            </svg>
        ),
    },
    {
        title: "Wardrobe Evaluation",
        descriptor: "Declutter, organise, and transform your existing wardrobe into a system.",
        subDescriptor: "Eliminate decision fatigue and make every piece count.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <rect x="3" y="3" width="18" height="18" />
                <line x1="9" y1="3" x2="9" y2="21" />
                <path d="M9 7h9M9 12h9M9 17h9" />
            </svg>
        ),
    },
    {
        title: "Body Language",
        descriptor: "Command presence through posture, gesture, and non-verbal communication.",
        subDescriptor: "Speak volumes before you ever say a word.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v10M8 10l4-2 4 2M10 21l2-4 2 4" />
            </svg>
        ),
    },
    {
        title: "Conversation Skills",
        descriptor: "Articulate confidence — in rooms, on screens, and in every introduction.",
        subDescriptor: "Master the art of memorable and effective dialogue.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
        ),
    },
    {
        title: "First Impression",
        descriptor: "Architect the exact impression you leave in the first seven seconds.",
        subDescriptor: "Ensure your introduction aligns perfectly with your expertise.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
    },
];

const EASY_STEPS = [
    "Master The Skill Of Image Management To Influence.",
    "Image Scope",
    "Personal Shopping",
    "First Impression & Self Stylist Image",
    "Personal Wardrobe Evaluation",
    "Body Language",
    "Conversation Skill"
];

export default function ServicesSection() {
    return (
        <section id="services" className="bg-white pb-24 relative" aria-label="Services">
            {/* Stand Out In The Crowd Section */}
            <div className="bg-[#FAF7F5] py-20 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Text & List */}
                        <div className="flex flex-col">
                            <h2 className="font-display text-terracotta text-[32px] md:text-[40px] leading-tight mb-2">
                                Stand Out In The Crowd
                            </h2>
                            <h3 className="font-display font-bold text-charcoal text-[40px] md:text-[56px] leading-[1.1] tracking-tight mb-8">
                                By Following Some Easy Steps
                            </h3>
                            
                            <ul className="flex flex-col gap-5 mb-12">
                                {EASY_STEPS.map((step) => (
                                    <li key={step} className="flex items-start gap-4 group">
                                        <ChevronRight className="w-6 h-6 text-terracotta shrink-0 mt-0.5" strokeWidth={3} />
                                        <span className="font-display text-charcoal text-[18px] md:text-[22px] font-medium leading-[1.3]">
                                            {step}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Button 
                                as="a" 
                                href="/book" 
                                variant="primary" 
                                className="w-fit bg-[#FF0000] hover:bg-[#CC0000] text-white px-10 py-4 font-bold text-[16px] tracking-widest"
                            >
                                CONNECT NOW
                            </Button>
                        </div>

                        {/* Right: Diagram */}
                        <div className="relative aspect-square w-full max-w-[600px] mx-auto bg-white shadow-2xl p-4 lg:p-8 rounded-sm">
                            <Image
                                src="/images/latest-images/Editorial.avif"
                                alt="Heena The Image Consultant Process Diagram for Wardrobe Audit and Color Analysis India"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Existing Services Grid */}
            <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20 mt-20 lg:mt-32">
                {/* Header */}
                <div className="text-center mb-16 lg:mb-24 flex flex-col items-center gap-5">
                    <SectionLabel>Professional Services</SectionLabel>
                    <h2 className="font-display font-medium text-4xl md:text-5xl lg:text-[56px] text-charcoal max-w-[800px] leading-[1.05] tracking-tight">
                        Six Pillars of <span className="font-bold">Visual Authority.</span>
                    </h2>
                    <p className="font-sans text-[16px] md:text-[18px] text-charcoal/70 max-w-[560px] leading-relaxed mt-2">
                        Each service is designed around one goal: making your visual identity
                        work as hard as you do.
                    </p>
                </div>

                {/* 3×2 Card grid — separated by 1px lines */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-border">
                    {SERVICES.map(({ title, descriptor, subDescriptor, icon }) => (
                        <div
                            key={title}
                            className="
                                group bg-white p-10 lg:p-12 flex flex-col
                                border-r border-b border-border relative
                                transition-all duration-300
                                hover:bg-neutral-50
                            "
                        >
                            {/* Hover accent left border */}
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-terracotta scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
                            
                            <span className="text-terracotta mb-8">
                                {icon}
                            </span>
                            <div className="flex flex-col gap-3 mt-auto">
                                <h3 className="font-display font-semibold text-[24px] lg:text-[28px] text-charcoal leading-[1.2] tracking-tight">
                                    {title}
                                </h3>
                                <div>
                                    <p className="font-sans text-[15px] lg:text-[16px] text-charcoal/80 leading-relaxed font-medium">
                                        {descriptor}
                                    </p>
                                    <p className="font-sans text-[14px] lg:text-[15px] text-charcoal/60 leading-relaxed mt-2">
                                        {subDescriptor}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
