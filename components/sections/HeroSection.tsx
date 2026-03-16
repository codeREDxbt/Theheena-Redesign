import Image from "next/image";
import Button from "@/components/ui/Button";

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative flex min-h-screen flex-col lg:flex-row bg-ivory overflow-hidden group/design-root"
            aria-label="Hero"
            style={{
                backgroundImage: "url('/images/hero-bg.png')",
                backgroundRepeat: "repeat",
                backgroundSize: "320px 320px",
            }}
        >
            {/* ── Left Pane (44%) ─────────────────────────────────────────── */}
            <div className="
                relative grain-overlay w-full lg:w-[44%] flex flex-col justify-center 
                px-6 sm:px-12 lg:px-16 xl:px-24 py-24 lg:py-12 z-10 shrink-0
            ">
                <div className="max-w-xl mx-auto lg:mx-0 w-full flex flex-col pt-12 lg:pt-0">
                    {/* Eyebrow */}
                    <p className="font-sans text-terracotta text-[11px] font-bold uppercase tracking-widest mb-6">
                        INDIA&apos;S ONLY IMAGE CONSULTANT · MSME-RECOGNIZED
                    </p>

                    {/* Headline */}
                    <h1 className="font-display text-charcoal text-5xl sm:text-6xl lg:text-[64px] font-black uppercase leading-[1.05] tracking-tight mb-8">
                        YOUR IMAGE<br />
                        IS YOUR FIRST<br />
                        ARGUMENT.
                    </h1>

                    {/* Divider */}
                    <div className="w-12 h-[1px] bg-charcoal/20 mb-10"></div>

                    {/* Questions Stack */}
                    <div className="flex flex-col gap-6 mb-12">
                        <div className="pl-5 border-l-2 border-terracotta">
                            <p className="font-display text-charcoal/60 italic text-lg lg:text-xl font-medium leading-relaxed">
                                &quot;Does your outfit say what you mean to say?&quot;
                            </p>
                        </div>
                        <div className="pl-5 border-l-2 border-terracotta">
                            <p className="font-display text-charcoal/60 italic text-lg lg:text-xl font-medium leading-relaxed">
                                &quot;Are you the most prepared — but still overlooked?&quot;
                            </p>
                        </div>
                        <div className="pl-5 border-l-2 border-terracotta">
                            <p className="font-display text-charcoal/60 italic text-lg lg:text-xl font-medium leading-relaxed">
                                &quot;What if your presence was your strongest argument?&quot;
                            </p>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 mt-2">
                        <Button variant="primary" as="a" href="/book">
                            BOOK YOUR CONSULTATION
                        </Button>
                        <Button variant="ghost" as="a" href="#services" className="border-charcoal border">
                            VIEW SERVICES
                        </Button>
                    </div>
                </div>
            </div>

            {/* ── Right Pane — Mobile Hero Image (Stacked) ─────────────────── */}
            <div className="lg:hidden relative w-full h-[60vh] mt-8 flex items-end justify-center px-6">
                <Image
                    src="/images/Latest images/New hero.png"
                    alt="Heena – India's Only MSME Recognized Image Consultant and Personal Stylist"
                    fill
                    className="object-contain object-bottom scale-90 origin-bottom"
                    priority
                    quality={90}
                />
            </div>

            {/* ── Right Pane — Desktop Hero Image (56%) ─────────────────────────── */}
            <div className="hidden lg:flex w-[56%] relative items-end justify-center overflow-hidden min-h-screen">
                <Image
                    src="/images/Latest images/New hero.png"
                    alt="Editorial portrait of Heena, top image consultant in India for professional women"
                    fill
                    className="object-contain object-bottom scale-90 lg:scale-100 origin-bottom"
                    priority
                    quality={95}
                />
            </div>
        </section>
    );
}
