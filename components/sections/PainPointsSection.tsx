import { Check } from "lucide-react";

const PAIN_POINTS = [
    "Your clothes don't reflect your true value",
    "Your first impression falls flat, despite your expertise",
    "Your style feels outdated and undermines your confidence",
    "You put in the effort, but your look goes unnoticed",
    "You're unsure if your presence truly commands the room",
    "You're not alone — and you shouldn't have to settle for less."
];

export default function PainPointsSection() {
    return (
        <section className="w-full bg-charcoal text-ivory py-20 lg:py-28 overflow-hidden relative">
            <div className="absolute inset-0 opacity-5 pointer-events-none" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
            </div>
            
            <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start justify-between">
                    
                    {/* Header Left */}
                    <div className="w-full lg:w-[45%] flex flex-col pt-4">
                        <span className="text-terracotta font-sans text-xs md:text-sm tracking-[0.2em] font-bold uppercase mb-6">
                            The Reality
                        </span>
                        
                        <h2 className="font-display text-[40px] md:text-[52px] lg:text-[60px] leading-[1.05] font-semibold tracking-tight text-white mb-8">
                            Is Your Image Holding You Back?
                        </h2>
                        
                        <div className="w-16 h-[2px] bg-terracotta/50 mb-8"></div>
                        
                        <p className="font-sans text-[18px] md:text-[20px] leading-relaxed text-white/80 font-light">
                            You've built your business and career with unparalleled skill and vision — but does your appearance speak the same language of <span className="text-white italic font-display">success?</span>
                        </p>
                    </div>

                    {/* Points Right */}
                    <div className="w-full lg:w-[48%] bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12">
                        <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-white/60 mb-8 pb-4 border-b border-white/10">
                            If you've ever felt like...
                        </h3>
                        
                        <div className="flex flex-col gap-6">
                            {PAIN_POINTS.map((point, i) => (
                                <div key={i} className="flex items-start gap-4 group">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mt-1 group-hover:bg-terracotta group-hover:border-terracotta transition-colors duration-300">
                                        <Check size={12} className="text-white opacity-60 group-hover:opacity-100 transition-opacity" strokeWidth={3} />
                                    </div>
                                    <p className="font-sans text-[15px] md:text-[16px] text-white/90 leading-snug pt-1">
                                        {i === PAIN_POINTS.length - 1 ? (
                                            <span className="font-medium text-white">{point}</span>
                                        ) : (
                                            point
                                        )}
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
