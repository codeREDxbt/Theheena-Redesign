import SectionLabel from "@/components/ui/SectionLabel";

/* Real SVG icons matching the brand — sharp, minimal, geometric */
const SERVICES = [
    {
        title: "Image Scope",
        descriptor: "A comprehensive audit of your current visual presence and personal brand gaps.",
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
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
        ),
    },
    {
        title: "First Impression",
        descriptor: "Architect the exact impression you leave in the first seven seconds.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="section-light py-24" aria-label="Services">
            <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">

                {/* Header */}
                <div className="text-center mb-16 lg:mb-24 flex flex-col items-center gap-5">
                    <SectionLabel>What I Do</SectionLabel>
                    <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-[56px] text-charcoal max-w-[640px] leading-[1.1] tracking-tight">
                        Six Ways to Transform How the Room Sees You.
                    </h2>
                    <p className="font-sans text-[16px] md:text-[18px] text-charcoal/80 max-w-[520px] leading-relaxed mt-2">
                        Each service is designed around one goal: making your visual identity
                        work as hard as you do.
                    </p>
                </div>

                {/* 3×2 Card grid — separated by 1px lines */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-border">
                    {SERVICES.map(({ title, descriptor, icon }) => (
                        <div
                            key={title}
                            className="
                group bg-white p-10 lg:p-12 flex flex-col
                border-r border-b border-border
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)] hover:z-10 hover:border-terracotta
              "
                        >
                            <span className="text-charcoal/30 group-hover:text-terracotta transition-colors duration-300 mb-8">
                                {icon}
                            </span>
                            <div className="flex flex-col gap-3 mt-auto">
                                <h3 className="font-display font-semibold text-[24px] lg:text-[28px] text-charcoal leading-[1.2] tracking-tight">
                                    {title}
                                </h3>
                                <p className="font-sans text-[15px] lg:text-[16px] text-charcoal/70 leading-relaxed">
                                    {descriptor}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
