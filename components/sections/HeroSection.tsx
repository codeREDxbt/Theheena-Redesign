import Image from "next/image";
import Button from "@/components/ui/Button";

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative flex min-h-screen overflow-hidden"
            aria-label="Hero"
            style={{
                backgroundImage: "url('/images/hero-bg.png')",
                backgroundRepeat: "repeat",
                backgroundSize: "320px 320px",
            }}
        >
            {/* ── Left Panel — Ivory ─────────────────────────────────────────── */}
            <div className="
        relative grain-overlay flex flex-col justify-center
        py-28
        w-full md:w-[48%] lg:w-[44%] md:min-w-[500px] xl:min-w-[540px]
        bg-transparent z-10 shrink-0
      "
                style={{
                    paddingLeft: 'max(24px, calc(50vw - 640px + 80px))',
                    paddingRight: '80px'
                }}
            >
                {/* Thin top rule - aligned with logo line */}
                <div className="absolute top-0 right-0 h-px bg-charcoal/12 mt-[72px]"
                    style={{ left: 'max(24px, calc(50vw - 640px + 80px))' }}
                />

                <div className="flex flex-col gap-6 max-w-[520px]">
                    {/* MSME credential label */}
                    <p className="font-sans text-label uppercase tracking-[0.15em] text-terracotta">
                        India&apos;s Only Image Consultant · MSME-Recognized
                    </p>

                    {/* Hero headline */}
                    <h1 className="font-display font-bold text-[clamp(42px,6vw,64px)] leading-[1.03] uppercase tracking-[0.02em] text-charcoal">
                        Your Image
                        <br />
                        Is Your First
                        <br />
                        Argument.
                    </h1>

                    {/* Horizontal rule */}
                    <div className="w-12 h-px bg-charcoal/20" />

                    {/* Sub-headline */}
                    <p className="font-sans text-[17px] text-charcoal/70 leading-relaxed max-w-[360px]">
                        Professional Image Consultant · Certified by the Ministry of MSME
                    </p>

                    {/* CTA row */}
                    <div className="flex flex-wrap gap-3 mt-2">
                        <Button variant="primary" as="a" href="/book">
                            Book Your Consultation
                        </Button>
                        <Button variant="ghost" as="a" href="#services">
                            View Services
                        </Button>
                    </div>
                </div>

                {/* ── Mobile Hero Image (stacked below text) ─────────────────── */}
                <div className="md:hidden relative w-full h-[55vh] mt-8 flex items-end justify-center">
                    <Image
                        src="/images/Hero.png"
                        alt="Heena – India's Only Image Consultant"
                        fill
                        className="object-contain object-bottom"
                        priority
                        quality={90}
                    />
                </div>
            </div>

            {/* ── Right Panel — Hero Image (Desktop) ─────────────────────────── */}
            <div className="
                hidden md:flex flex-1 relative items-end justify-center
                overflow-hidden
            ">
                <div className="relative w-full h-[90vh] max-w-[640px]">
                    <Image
                        src="/images/Hero.png"
                        alt="Heena – India's Only MSME-Recognized Image Consultant"
                        fill
                        className="object-contain object-bottom"
                        priority
                        quality={95}
                    />
                </div>
            </div>

        </section>
    );
}
