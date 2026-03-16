import { CheckCircle2 } from "lucide-react";

export default function TransformativeBenefitsSection() {
    const BENEFITS = [
        "Build versatile, high-impact looks that save time and money",
        "Leave a magnetic impression without even trying",
        "Enhance your likeability — people are drawn to your energy",
        "Increase the weight of your words and decisions",
        "Receive first preference in professional and personal circles",
        "Build business faster through non-verbal authority",
        "Attract admiration with elegance and ease",
        "Unlock new opportunities with elevated self-image",
        "Influence intentionally in every interaction"
    ];

    return (
        <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-charcoal">
            {/* Background Image with Parallax feel */}
            <div 
                className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
                style={{
                    backgroundImage: "url('/images/story-cover.jpeg')", // Or another high-end editorial image
                    backgroundSize: "cover",
                    backgroundPosition: "center 30%",
                    backgroundAttachment: "fixed"
                }}
            ></div>
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/20"></div>
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-charcoal via-charcoal/60 to-transparent"></div>

            <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20 relative z-20">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    
                    {/* Left Typography */}
                    <div className="w-full lg:w-[45%] flex flex-col">
                        <span className="text-terracotta font-sans text-xs md:text-sm tracking-[0.2em] font-bold uppercase mb-6 flex items-center gap-4">
                            <div className="w-8 h-[1px] bg-terracotta"></div>
                            The Transformation
                        </span>
                        
                        <h2 className="font-display text-[40px] md:text-[50px] lg:text-[60px] leading-[1.1] font-medium tracking-tight text-white mb-8">
                            Elevate Your Image.<br/>
                            <span className="text-white/60 italic">Unlock 9 Transformative Benefits.</span>
                        </h2>
                        
                        <p className="font-sans text-[18px] leading-relaxed text-white/70 max-w-lg">
                            An investment in your personal brand yields dividends in every interaction. With this complete makeover, you will:
                        </p>
                    </div>

                    {/* Right Benefits Grid */}
                    <div className="w-full lg:w-[55%]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            {BENEFITS.map((benefit, i) => (
                                <div key={i} className="flex items-start gap-4 group">
                                    <CheckCircle2 
                                        size={20} 
                                        className="text-terracotta mt-1 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" 
                                        strokeWidth={2}
                                    />
                                    <p className="font-sans text-[15px] md:text-[16px] text-white/80 leading-snug pt-[3px] group-hover:text-white transition-colors duration-300">
                                        {benefit}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
