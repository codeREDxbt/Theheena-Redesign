"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";


export default function BookPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "Image Audit",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `Hi Heena, I'd like to book a discovery call. \n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterested in: ${formData.service}\n\nMessage: ${formData.message}`;
        window.open(`https://wa.me/918368699873?text=${encodeURIComponent(text)}`, '_blank');
    };

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

                <div className="mt-16 md:mt-24 pt-8 border-t border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 relative opacity-50 grayscale">
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

            {/* ── Right Pane: Form Integration ──────────────────────────────── */}
            <section className="
                w-full md:w-[55%] lg:w-[60%] bg-ivory
                flex items-center justify-center
                px-4 py-16 md:p-12 lg:p-20
                min-h-[70vh] md:min-h-screen
            ">
                <div className="w-full max-w-[560px] flex flex-col items-center justify-center">

                    <h2 className="font-display text-3xl md:text-4xl text-charcoal font-semibold mb-4 text-center">
                        Request a Consultation
                    </h2>

                    <p className="font-sans text-charcoal/60 text-[16px] leading-relaxed mb-10 text-center max-w-[400px]">
                        Fill out the form below. We will connect securely via WhatsApp to confirm your slot.
                    </p>

                    <form onSubmit={handleSubmit} className="w-full space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="font-sans text-[12px] tracking-widest uppercase text-charcoal/60 font-semibold">Full Name</label>
                                <input required type="text" className="w-full bg-transparent border border-charcoal/20 px-4 py-3 rounded-none outline-none focus:border-terracotta font-sans text-charcoal transition-colors" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-sans text-[12px] tracking-widest uppercase text-charcoal/60 font-semibold">Phone Number</label>
                                <input required type="tel" className="w-full bg-transparent border border-charcoal/20 px-4 py-3 rounded-none outline-none focus:border-terracotta font-sans text-charcoal transition-colors" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-sans text-[12px] tracking-widest uppercase text-charcoal/60 font-semibold">Email Address</label>
                            <input required type="email" className="w-full bg-transparent border border-charcoal/20 px-4 py-3 rounded-none outline-none focus:border-terracotta font-sans text-charcoal transition-colors" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-sans text-[12px] tracking-widest uppercase text-charcoal/60 font-semibold">I&apos;m interested in</label>
                            <select className="w-full bg-transparent border border-charcoal/20 px-4 py-3 rounded-none outline-none focus:border-terracotta font-sans text-charcoal transition-colors appearance-none" value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                                <option value="Image Audit">Image Audit</option>
                                <option value="Wardrobe Editing">Wardrobe Editing</option>
                                <option value="Personal Shopping">Personal Shopping</option>
                                <option value="Body Language Training">Body Language Training</option>
                                <option value="Conversation Skills">Conversation Skills</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-sans text-[12px] tracking-widest uppercase text-charcoal/60 font-semibold">Message (Optional)</label>
                            <textarea rows={4} className="w-full bg-transparent border border-charcoal/20 px-4 py-3 rounded-none outline-none focus:border-terracotta font-sans text-charcoal transition-colors resize-none" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                        </div>

                        <Button type="submit" variant="primary" className="w-full w-full h-14 mt-4 font-bold shadow-lg">
                            Send Message
                        </Button>
                    </form>

                    <div className="mt-8">
                        <a href="https://wa.me/918368699873" target="_blank" rel="noopener noreferrer" className="text-charcoal/50 hover:text-terracotta transition-colors font-sans text-[14px] flex items-center gap-2">
                            Or message directly on WhatsApp 
                            <span className="inline-block transition-transform hover:translate-x-1">→</span>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
