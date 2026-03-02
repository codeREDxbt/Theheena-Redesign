import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const TIMELINE = [
    { year: "2016", title: "Soft Skills & NGO Work", accent: false },
    { year: "2019", title: "Udaan Foundation Fashion Show", accent: false },
    { year: "2020", title: "YMCA Certified Trainer", accent: false },
    { year: "2022", title: "Ministry of MSME Recognition", accent: true },
];

export default function AboutSection() {
    return (
        <section id="about" className="w-full flex justify-center py-0 bg-white" aria-label="About Heena">
            <div className="flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto min-h-[calc(100vh-80px)]">

                {/* Left — Portrait */}
                <div className="w-full lg:w-5/12 bg-stone-200 flex items-center justify-center p-8 lg:p-12 xl:p-16 relative">
                    <div className="relative w-full max-w-[500px] aspect-[4/5] shadow-xl">
                        <Image
                            src="/images/story-cover.png"
                            alt="Heena — Dress how you want to be addressed"
                            fill
                            className="object-cover object-center rounded-sm"
                            loading="lazy"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                    </div>
                </div>

                {/* Right — Content */}
                <div className="w-full lg:w-7/12 flex flex-col justify-center bg-ivory p-8 md:p-12 lg:p-20 xl:p-24 overflow-hidden">
                    <div className="flex flex-col gap-6 lg:gap-8 max-w-xl">
                        <div className="font-sans text-xl font-bold uppercase tracking-[0.2em] text-[#C3612C]">
                            The Story
                        </div>

                        <h2 className="font-display font-bold text-5xl lg:text-7xl xl:text-[80px] text-charcoal leading-[1.05] tracking-tight">
                            From NGO Work to India&apos;s Most Recognized Image Authority.
                        </h2>

                        <p className="font-sans text-charcoal/80 text-base lg:text-[18px] leading-relaxed font-normal">
                            Heena left a thriving corporate career to pursue a single conviction — that
                            how you present yourself determines the rooms you access. She trained India&apos;s
                            first generation of image-aware professionals through YMCA and NGO work
                            before the Government of India formally recognized her as the country&apos;s only
                            MSME-certified image consultant.
                        </p>

                        {/* Horizontal Timeline */}
                        <div className="relative mt-6 lg:mt-8 overflow-x-auto pb-4">
                            {/* Connecting baseline */}
                            <div className="absolute top-[29px] left-0 right-0 h-px bg-charcoal/15 z-0" />

                            <div className="relative flex gap-0 min-w-max">
                                {TIMELINE.map(({ year, title, accent }, i) => (
                                    <div key={year} className="flex items-start" style={{ minWidth: "150px" }}>
                                        {/* Milestone column */}
                                        <div className="flex flex-col items-center gap-2 relative z-10 w-full group cursor-pointer">
                                            <p className={`font-sans text-xs uppercase tracking-widest leading-none transition-colors ${accent ? "text-terracotta font-bold" : "text-charcoal/50 group-hover:text-charcoal"}`}>
                                                {year}
                                            </p>
                                            {/* Dot */}
                                            <div className={`w-3 h-3 rounded-full ring-4 transition-colors ${accent ? "bg-terracotta ring-ivory shadow-sm" : "bg-charcoal/15 ring-ivory group-hover:bg-charcoal"}`} />
                                            <p className={`font-sans text-xs leading-snug max-w-[120px] text-center mt-1 transition-colors ${accent ? "text-charcoal font-semibold" : "text-charcoal/70 group-hover:text-charcoal"}`}>
                                                {title}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Button variant="ghost" as="a" href="#book" className="self-start mt-4 border-charcoal/20">
                            Work with Heena
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
