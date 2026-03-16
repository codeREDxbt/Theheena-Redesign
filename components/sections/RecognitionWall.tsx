import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

const ACHIEVEMENTS = [
    {
        variant: "dark" as const,
        badge: "Ministry of MSME",
        title: "Government of India Recognition",
        sub: "2021 · Exclusive recognition as Image Consulting partner for the MSME sector",
    },
    {
        variant: "light" as const,
        badge: "YMCA New Delhi",
        title: "Certified Soft Skills Trainer",
        sub: "2019 · National certification in soft skills and personality development",
    },
    {
        variant: "light" as const,
        badge: "Udaan Foundation",
        title: "Fashion Show for Acid Attack Survivors",
        sub: "Agra 2022 · Styling and empowerment programme for acid attack survivors",
    },
    {
        variant: "dark" as const,
        badge: "Featured In",
        title: "Industry & Media Presence",
        sub: "The Hindu Business Line · Industry Forums · Leadership Summits",
        isMedia: true,
    },
];

export default function RecognitionWall() {
    return (
        <section id="recognition" className="section-light py-24 border-t border-b border-charcoal/10" aria-label="Recognition and credentials">
            <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">
                <div className="grid grid-cols-1 md:grid-cols-[40fr_60fr] gap-16 md:gap-24 items-start">

                    {/* Left — Copy */}
                    <div className="flex flex-col gap-8">
                        <SectionLabel>Recognition</SectionLabel>
                        <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-[56px] text-charcoal leading-[1.1] tracking-tight">
                            India&apos;s Most Credentialed Image Voice.
                        </h2>
                        <ul className="flex flex-col gap-5 mt-2">
                            {[
                                "India's only Image Consultant · MSME-recognized",
                                "Represented IID at Government of India forums",
                                "Empowered 8000+ professionals across India",
                            ].map((point) => (
                                <li key={point} className="flex gap-4 items-start font-sans text-[16px] md:text-[18px] text-charcoal/80 leading-relaxed">
                                    <span className="text-terracotta mt-1 shrink-0 font-bold">—</span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <Button variant="ghost" as="a" href="/portfolio" className="self-start mt-4">
                            View Portfolio
                        </Button>
                    </div>

                    {/* Right — 2×2 Achievement cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {ACHIEVEMENTS.map(({ variant, badge, title, sub, isMedia }) => (
                            <div
                                key={badge}
                                className={`
                  p-8 md:p-10 flex flex-col items-start
                  ${variant === "dark"
                                        ? "bg-[#1A1A1A] border border-[#1A1A1A]"
                                        : "bg-white border border-border"
                                    }
                `}
                            >
                                {isMedia && (
                                    <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-terracotta mb-4">
                                        {badge}
                                    </p>
                                )}
                                {!isMedia && (
                                    <p className={`font-sans text-[11px] uppercase tracking-[0.15em] mb-4 ${variant === "dark" ? "text-ivory/50" : "text-charcoal/40"}`}>
                                        {badge}
                                    </p>
                                )}
                                <div className="flex flex-col gap-3 mt-auto w-full">
                                    <h3 className={`font-display font-semibold text-[22px] md:text-[24px] leading-[1.2] tracking-tight ${variant === "dark" ? "text-white" : "text-charcoal"}`}>
                                        {title}
                                    </h3>
                                    <p className={`font-sans text-[14px] md:text-[15px] leading-relaxed ${variant === "dark" ? (isMedia ? "italic text-ivory/70" : "text-ivory/60") : "text-charcoal/70"}`}>
                                        {sub}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
