const RECOGNIZED_BY = [
    "Government of India",
    "Ministry of MSME",
    "YMCA New Delhi",
    "Udaan Foundation",
    "Institute for Industrial Development",
    "Apollo Hospitals",
    "Adobe India",
    "FashionTV India",
];

export default function SocialProofBar() {
    // Duplicate list for seamless infinite scroll
    const doubled = [...RECOGNIZED_BY, ...RECOGNIZED_BY];

    return (
        <section
            className="section-dark overflow-hidden"
            aria-label="Recognized by"
        >
            <div className="py-4 border-b border-white/8">
                <div className="flex items-center gap-6 px-8 mb-3">
                    <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-ivory/40 shrink-0">
                        Recognized By
                    </p>
                    <div className="h-px flex-1 bg-white/10" />
                </div>

                {/* Ticker track */}
                <div className="relative overflow-hidden">
                    <div className="ticker-track pointer-events-none select-none gap-16">
                        {doubled.map((name, i) => (
                            <span
                                key={`${name}-${i}`}
                                className="font-sans text-[13px] font-medium text-ivory/60 whitespace-nowrap border-r border-white/10 last:border-r-0 pr-16"
                            >
                                {name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
