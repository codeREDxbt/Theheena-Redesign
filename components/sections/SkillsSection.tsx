import { UserCog, Video, Heart, Users } from "lucide-react";

export default function SkillsSection() {
    const SKILLS = [
        {
            title: "Image Management",
            icon: <UserCog size={36} strokeWidth={1.5} />,
            desc: "Align your visual appearance with your professional goals."
        },
        {
            title: "Video Wardrobe",
            icon: <Video size={36} strokeWidth={1.5} />,
            desc: "Master on-camera presence with strategic color blocking."
        },
        {
            title: "Likeability Quotient",
            icon: <Heart size={36} strokeWidth={1.5} />,
            desc: "Raise your EQ to foster instant trust and connection."
        },
        {
            title: "Social Skills",
            icon: <Users size={36} strokeWidth={1.5} />,
            desc: "Navigate high-stakes environments with elite dining etiquette."
        }
    ];

    return (
        <section className="w-full bg-white py-20 lg:py-28 border-y border-charcoal/5">
            <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20 text-center">
                
                {/* Header block replacing old yellow rectangle */}
                <span className="inline-block px-12 py-3 bg-terracotta text-white font-sans text-xs md:text-sm tracking-[0.25em] font-bold uppercase mb-16 shadow-md rounded-sm">
                    Core Competencies
                </span>

                {/* Minimalist 4-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {SKILLS.map((skill, i) => (
                        <div key={i} className="flex flex-col items-center group">
                            
                            {/* Icon Wrapper (Sleek Apple-style) */}
                            <div className="w-24 h-24 rounded-full bg-stone-100 flex items-center justify-center mb-6 text-charcoal border border-charcoal/5 group-hover:bg-terracotta group-hover:text-white transition-all duration-500 shadow-sm">
                                <div className="transform group-hover:scale-110 transition-transform duration-500">
                                    {skill.icon}
                                </div>
                            </div>
                            
                            <h3 className="font-display text-xl text-charcoal font-semibold mb-3 tracking-wide">
                                {skill.title}
                            </h3>
                            <p className="font-sans text-charcoal/60 leading-relaxed text-[15px] max-w-[250px]">
                                {skill.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
