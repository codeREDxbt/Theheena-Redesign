import Image from "next/image";

export default function ClothingMistakesSection() {
    const MISTAKES = [
        {
            title: "Neglecting Blazer Sleeve Length",
            desc: "Ensure that the sleeves of your jacket end just above the top of your wrist bone, exposing exactly half an inch of your shirt cuff. Anything longer looks borrowed."
        },
        {
            title: "Ill-Fitted Clothes",
            desc: "Avoid pants that drag and oversized shirts that billow. Fit always supersedes brand. Invest in tailoring to avoid looking unpolished and frumpy."
        },
        {
            title: "Belts with Suspenders",
            desc: "Never wear both. Suspenders are for trousers without belt loops. Pair them cleanly with a crisp button-down shirt for a classic, sophisticated line."
        },
        {
            title: "Exposed Coat Hemlines",
            desc: "It’s a major sartorial faux pas to wear an outer coat that is shorter than your interior suit jacket. Your overcoat must completely cover the blazer beneath it."
        },
        {
            title: "Scuffed or Improper Footwear",
            desc: "Shoes are the foundation of your outfit. A beautifully tailored suit is completely ruined by square-toed, scuffed, or inappropriate hybrid dress shoes."
        }
    ];

    return (
        <section className="w-full bg-[#fcfbf9] pt-24 pb-20 lg:pt-28 lg:pb-24 overflow-hidden border-t border-charcoal/5">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-[45%_auto] gap-12 lg:gap-20 items-start">
                    
                    {/* Editorial Image Left - Sticky on Desktop */}
                    <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] max-h-[65vh] mx-auto lg:sticky lg:top-28">
                        {/* Background structural frame */}
                        <div className="absolute -top-3 -right-3 w-[95%] h-[95%] border border-terracotta/20 bg-ivory shadow-lg pointer-events-none"></div>
                        <div className="absolute -bottom-3 -left-3 w-[95%] h-[95%] border border-charcoal/10 bg-white shadow-sm pointer-events-none"></div>

                        <div className="relative w-full h-full shadow-2xl overflow-hidden group">
                            <Image
                                src="/images/serious_menswear_editorial.png" // Serious menswear editorial
                                alt="Sharp menswear editorial showcasing tailoring and proper fit"
                                fill
                                className="object-cover scale-[1.03] group-hover:scale-[1.08] transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                priority
                            />
                            {/* Inner vignette */}
                            <div className="absolute inset-0 border-[10px] border-white/10 opacity-40 mix-blend-overlay"></div>
                        </div>
                    </div>

                    {/* GQ Magazine Style List Right */}
                    <div className="flex flex-col max-w-2xl">
                        <span className="text-terracotta font-sans text-xs md:text-sm tracking-[0.2em] font-bold uppercase mb-6 border-b border-charcoal/10 pb-3 inline-flex w-fit">
                            Style Advisory
                        </span>
                        
                        <h2 className="font-display text-[36px] md:text-[48px] lg:text-[52px] leading-[1.05] font-semibold tracking-tight text-charcoal mb-5">
                            5 Clothing Mistakes<br/>
                            <span className="italic text-charcoal/40 font-light">Men Make.</span>
                        </h2>

                        <p className="font-sans text-[17px] lg:text-[19px] leading-relaxed text-charcoal/60 mb-10">
                            Avoid these common sartorial errors that spoil your image and unintentionally compromise your authority.
                        </p>

                        <div className="flex flex-col gap-10 lg:gap-11">
                            {MISTAKES.map((mistake, i) => (
                                <div key={i} className="flex gap-7 group">
                                    <div className="font-display font-light text-4xl lg:text-5xl leading-none text-charcoal/10 group-hover:text-terracotta/30 transition-colors duration-500">
                                        0{i + 1}
                                    </div>
                                    <div className="flex flex-col pt-0.5">
                                        <h3 className="font-display text-lg lg:text-xl text-charcoal font-semibold mb-2 tracking-wide group-hover:text-terracotta transition-colors">
                                            {mistake.title}
                                        </h3>
                                        <p className="font-sans text-charcoal/70 leading-relaxed text-[14.5px] lg:text-[15.5px]">
                                            {mistake.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
