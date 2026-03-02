const BRANDS = [
    "Lakme Fashion Week",
    "Raymond",
    "Van Heusen",
    "Peter England",
    "FashionTV India",
    "Apollo Hospitals",
    "Adobe India",
    "Nykaa",
    "Myntra",
    "Reliance Retail",
];

export default function BrandCollaborations() {
    const doubled = [...BRANDS, ...BRANDS];

    return (
        <section
            className="section-dark border-t border-white/8 overflow-hidden"
            aria-label="Brand collaborations"
        >
            <div className="py-5">
                <div className="flex items-center gap-6 px-8 mb-3">
                    <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-ivory/40 shrink-0">
                        Brand Collaborations
                    </p>
                    <div className="h-px flex-1 bg-white/10" />
                </div>

                {/* Scrolling brand strip */}
                <div className="relative overflow-hidden">
                    <div className="brand-ticker pointer-events-none select-none gap-12">
                        {doubled.map((name, i) => (
                            <span
                                key={`${name}-${i}`}
                                className="font-display text-[18px] font-semibold text-ivory/30 whitespace-nowrap tracking-wide uppercase"
                            >
                                {name}
                                <span className="inline-block mx-8 text-terracotta/40">✦</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
