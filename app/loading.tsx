export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex overflow-hidden">
            {/* Left Split Background (Ivory) */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-ivory z-0"></div>

            {/* Right Split Background (Charcoal) */}
            <div className="absolute inset-y-0 right-0 w-1/2 bg-charcoal z-0"></div>

            {/* Center Content */}
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
                {/* The Split 'H' Initial */}
                <div className="mb-6 select-none relative inline-block text-[120px] leading-none font-bold font-display animate-pulse">
                    {/* Invisible base text just to set structure & size */}
                    <span className="invisible">H</span>

                    {/* Left half: Charcoal color, clipped to display on Ivory background */}
                    <div
                        className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-charcoal z-10"
                        style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}
                    >
                        H
                    </div>

                    {/* Right half: Ivory color, clipped to display on Charcoal background */}
                    <div
                        className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-ivory z-10"
                        style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }}
                    >
                        H
                    </div>
                </div>

                {/* Subheading */}
                <h2 className="text-terracotta font-sans text-[12px] font-bold tracking-[0.2em] uppercase text-center animate-pulse relative z-10">
                    The Image Revolution
                </h2>
            </div>

            {/* Loading Indicator - Bottom Right */}
            <div className="absolute bottom-8 right-8 z-20 animate-pulse mix-blend-difference">
                <p className="text-ivory font-sans text-[10px] font-normal tracking-wide opacity-80">
                    Loading...
                </p>
            </div>
        </div>
    )
}
