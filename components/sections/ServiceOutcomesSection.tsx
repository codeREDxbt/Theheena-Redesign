export default function ServiceOutcomesSection() {
    const OUTCOMES = [
        {
            title: "Learn the Skill",
            desc: "Manage your Image to Influence.",
            icon: "M13 10V3L4 14h7v7l9-11h-7z" // Zap
        },
        {
            title: "Age Defying",
            desc: "Look, act, feel and appear 5-9yrs younger than your real age.",
            icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" // Currency/Value
        },
        {
            title: "Daily Handholding",
            desc: "Visible results alongside daily handholding through WhatsApp and calls.",
            icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 14v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" // Support
        },
        {
            title: "The Next Version",
            desc: "Through this makeover, you will look your better and next version.",
            icon: "M22 12h-4l-3 9L9 3l-3 9H2" // Progress
        }
    ];

    return (
        <section className="w-full bg-[#f5f0e8] py-20 lg:py-28 border-y border-charcoal/5">
            <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-terracotta font-sans text-xs md:text-sm tracking-[0.2em] font-bold uppercase mb-4">
                        The Transformation
                    </span>
                    <h2 className="font-display text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] font-medium tracking-tight text-charcoal max-w-3xl">
                        Tangible Outcomes & Lasting Results
                    </h2>
                </div>

                {/* Asymmetric Elegant Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
                    
                    {/* Column 1 */}
                    <div className="flex flex-col gap-6 lg:gap-10 lg:mt-12">
                        <div className="bg-white p-10 shadow-sm border border-charcoal/5 hover:border-terracotta/30 hover:shadow-xl transition-all duration-500 group">
                            <div className="w-12 h-12 mb-8 text-terracotta opacity-80 group-hover:scale-110 transition-transform duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                                    <path d={OUTCOMES[0].icon} />
                                </svg>
                            </div>
                            <h3 className="font-display text-2xl text-charcoal font-semibold mb-3">{OUTCOMES[0].title}</h3>
                            <p className="font-sans text-charcoal/70 leading-relaxed text-[16px]">
                                {OUTCOMES[0].desc}
                            </p>
                        </div>

                        <div className="bg-white p-10 shadow-sm border border-charcoal/5 hover:border-terracotta/30 hover:shadow-xl transition-all duration-500 group">
                            <div className="w-12 h-12 mb-8 text-terracotta opacity-80 group-hover:scale-110 transition-transform duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                                    <path d={OUTCOMES[2].icon} />
                                </svg>
                            </div>
                            <h3 className="font-display text-2xl text-charcoal font-semibold mb-3">{OUTCOMES[2].title}</h3>
                            <p className="font-sans text-charcoal/70 leading-relaxed text-[16px]">
                                {OUTCOMES[2].desc}
                            </p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-6 lg:gap-10 lg:-mt-12">
                        <div className="bg-white p-10 shadow-sm border border-charcoal/5 hover:border-terracotta/30 hover:shadow-xl transition-all duration-500 group">
                            <div className="w-12 h-12 mb-8 text-terracotta opacity-80 group-hover:scale-110 transition-transform duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                                    <path d={OUTCOMES[1].icon} />
                                </svg>
                            </div>
                            <h3 className="font-display text-2xl text-charcoal font-semibold mb-3">{OUTCOMES[1].title}</h3>
                            <p className="font-sans text-charcoal/70 leading-relaxed text-[16px]">
                                {OUTCOMES[1].desc}
                            </p>
                        </div>

                        <div className="bg-charcoal p-10 shadow-xl border border-charcoal relative py-12 group overflow-hidden">
                            {/* Subtle dark pattern overlay */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")` }}>
                            </div>

                            <div className="relative z-10">
                                <span className="text-terracotta font-sans text-[10px] tracking-[0.2em] font-bold uppercase mb-4 block">
                                    Exclusive Value
                                </span>
                                <h3 className="font-display text-3xl md:text-4xl text-white font-medium mb-6 leading-[1.1]">
                                    Your Personal Look Book
                                </h3>
                                <p className="font-sans text-white/70 leading-[1.8] text-[15px]">
                                    Learn the skill of personal catalogue design. Discover exactly which fabrics, patterns, and details reflect <span className="text-white italic">your next version</span>. 
                                    <br/><br/>
                                    Includes a comprehensive Shoes Guide, Hairstyling, Accessories, and complete Mix & Match looks tailored specifically to your exact Body and Face Type.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
