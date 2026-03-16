import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { ChevronRight } from "lucide-react";

const BUSINESS_STATS = [
    {
        text: "Inappropriate Dressing Can Result In A 37% Chance Of Losing A Deal In Your Business Role.",
        accent: "37%"
    },
    {
        text: "1/3rd Of High-Ranking Professionals Admit That Their Career Growth Is Affected By Their Dressing And Appearance.",
        accent: "1/3rd"
    },
    {
        text: "67% Of Decision Making Business Owners Prefer To Close Deals With Individuals Who Appear Trustworthy.",
        accent: "67%"
    },
    {
        text: "43% Of Top Executives Are Unsure About Appropriate Business Dressing For High-Value Meetings.",
        accent: "43%"
    },
    {
        text: "Properly Dressed Executives Have A 29% Higher Chance Of Converting A Deal.",
        accent: "29%"
    },
    {
        text: "Your Inappropriate Business Attire May Be Causing You To Lose Deals Worth Over 50 Lacs.",
        accent: "50 Lacs"
    },
    {
        text: "5 Out Of 7 Top Executives Feel Confused While Selecting Their Business Attire (Internal Survey).",
        accent: "5 Out Of 7"
    }
];

export default function BusinessROISection() {
    return (
        <section id="roi" className="bg-[#f5f0e8] py-24 md:py-32 overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Left Column: The Data */}
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-6">
                            <SectionLabel>The ROI of Image</SectionLabel>
                            <h2 className="font-display text-[40px] md:text-[52px] lg:text-[60px] font-bold leading-[1.1] text-charcoal tracking-tight">
                                Your Image is Your <br className="hidden md:block" />
                                <span className="text-terracotta">Best Business Asset.</span>
                            </h2>
                            <p className="font-sans text-[17px] text-charcoal/70 leading-relaxed max-w-[540px]">
                                In high-stakes business, perception is reality. The data reveals that your appearance doesn&apos;t just affect confidence—it directly impacts your bottom line.
                            </p>
                        </div>

                        <ul className="flex flex-col gap-6">
                            {BUSINESS_STATS.map((stat, idx) => (
                                <li key={idx} className="flex gap-4 group">
                                    <div className="mt-1.5 shrink-0 w-5 h-5 flex items-center justify-center bg-terracotta/10 rounded-none transition-colors group-hover:bg-terracotta/20">
                                        <ChevronRight className="w-4 h-4 text-terracotta" />
                                    </div>
                                    <p className="font-sans text-[15px] md:text-[16px] text-charcoal/80 leading-relaxed">
                                        {/* Highlight logic could be more complex, but simple text is cleaner for now */}
                                        {stat.text}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Premium Visual */}
                    <div className="relative">
                        {/* Main Image Container */}
                        <div className="relative aspect-[4/5] w-full bg-stone-200 overflow-hidden shadow-2xl border border-charcoal/5 group">
                            <Image
                                src="/images/latest-images/business_roi_visual.png"
                                alt="Business Professional Flatlay"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            {/* Texture/Grain Overlay */}
                            <div className="absolute inset-0 bg-charcoal/10 mix-blend-multiply opacity-20" />
                        </div>

                        {/* Floating Credibility Card */}
                        <div className="absolute -bottom-8 -left-8 bg-charcoal text-white p-8 md:p-10 shadow-2xl max-w-[280px] hidden md:block">
                            <p className="font-display text-[32px] font-bold leading-none mb-2 text-terracotta">29%</p>
                            <p className="font-sans text-[13px] uppercase tracking-widest font-bold leading-tight border-t border-white/10 pt-4">
                                Higher Deal Conversion for Properly Dressed Executives
                            </p>
                        </div>

                        {/* Decorative Accent */}
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-terracotta/5 rounded-full blur-[80px]" />
                    </div>

                </div>
            </div>
        </section>
    );
}
