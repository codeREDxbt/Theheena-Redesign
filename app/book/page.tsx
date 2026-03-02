import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Book a Consultation | Heena Image Consulting",
    description: "Schedule your one-on-one discovery call with Heena.",
};

export default function BookPage() {
    return (
        <main className="min-h-screen bg-ivory flex flex-col md:flex-row">
            {/* ── Left Pane: Branding & Copy ──────────────────────────────── */}
            <section className="
                w-full md:w-[45%] lg:w-[40%] bg-charcoal text-ivory 
                flex flex-col justify-between 
                px-8 py-16 md:px-12 md:py-24 lg:px-20 lg:py-32
                min-h-[60vh] md:min-h-screen
            ">
                <div className="flex flex-col gap-10 md:gap-12 max-w-[480px]">
                    {/* Back Button */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-ivory/60 hover:text-ivory transition-colors duration-200 w-fit group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
                        <span className="font-sans text-[13px] uppercase tracking-widest mt-[1px]">Back to Home</span>
                    </Link>

                    <div>
                        <p className="font-sans text-label uppercase tracking-[0.15em] text-terracotta mb-6">
                            Next Steps
                        </p>
                        <h1 className="font-display font-semibold text-4xl md:text-5xl lg:text-[56px] leading-[1.1] tracking-tight mb-8">
                            Your Image<br />Transformation<br />Starts Here.
                        </h1>
                        <p className="font-sans text-[17px] md:text-[18px] text-ivory/80 leading-relaxed">
                            Book a complimentary 20-minute discovery call to discuss your goals, identify the gaps in your current professional presentation, and explore if the X Factor Look Book is the right fit for your trajectory.
                        </p>
                    </div>

                    <div className="space-y-6 pt-8 border-t border-white/10">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                ⏱
                            </div>
                            <div>
                                <h3 className="font-sans font-medium text-[16px]">20-Minute Session</h3>
                                <p className="font-sans text-[14px] text-ivory/60 mt-1">Directly with Heena via Zoom/Phone.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                ✓
                            </div>
                            <div>
                                <h3 className="font-sans font-medium text-[16px]">No Obligation</h3>
                                <p className="font-sans text-[14px] text-ivory/60 mt-1">Completely complimentary consultation.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom accreditation */}
                <div className="mt-16 md:mt-24 pt-8 border-t border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 relative opacity-50 grayscale">
                        {/* Placeholder for a seal/badge if needed, using logo for now */}
                        <Image
                            src="/images/logo.png"
                            alt="Heena"
                            fill
                            className="object-contain brightness-0 invert"
                        />
                    </div>
                    <p className="font-sans text-[12px] text-ivory/50 uppercase tracking-widest leading-relaxed">
                        Recognized by the<br />Ministry of MSME, Govt. of India
                    </p>
                </div>
            </section>

            {/* ── Right Pane: WhatsApp Integration ──────────────────────────────── */}
            <section className="
                w-full md:w-[55%] lg:w-[60%] bg-ivory
                flex items-center justify-center
                px-4 py-16 md:p-12 lg:p-20
                min-h-[70vh] md:min-h-screen
            ">
                <div className="w-full max-w-[560px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-charcoal/5 flex flex-col items-center justify-center p-10 md:p-16 text-center">

                    <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                            <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                            <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
                        </svg>
                    </div>

                    <h2 className="font-display text-3xl md:text-4xl text-charcoal font-semibold mb-4">
                        Connect on WhatsApp
                    </h2>

                    <p className="font-sans text-charcoal/60 text-[16px] leading-relaxed mb-10 max-w-[360px]">
                        Click below to instantly open a chat with Heena. Send a quick message to check availability for your discovery call.
                    </p>

                    <a
                        href="https://wa.me/918368699873?text=Hi%20Heena,%20I'd%20love%20to%20schedule%20a%2020-minute%20discovery%20call%20regarding%20image%20consulting."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            bg-[#25D366] hover:bg-[#20BE5C] text-white 
                            font-sans font-medium text-[16px] 
                            px-8 py-4 rounded-full
                            transition-all duration-200 
                            flex items-center gap-3 w-full justify-center
                            shadow-sm hover:shadow-md
                        "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                        </svg>
                        Message on WhatsApp
                    </a>

                    <p className="font-sans text-[13px] text-charcoal/40 mt-6">
                        Usually responds within 2-4 hours.
                    </p>
                </div>
            </section>
        </main>
    );
}
