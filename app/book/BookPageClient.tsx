"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";


/* ── Social Icons ──────────────────────────────── */
function LinkedInIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

function InstagramIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
        </svg>
    );
}

export default function BookPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "Image Audit",
        message: ""
    });

    // State to show success message after form submission
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Reset success message when user starts typing in any field
    /* This ensures the success message disappears if the user wants to submit another query */
    useEffect(() => {
        setIsSubmitted(false);
    }, [formData.name, formData.email, formData.phone, formData.message]);

    //updated handleSubmit function for handing leads
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        // Send lead to Formspree
        try {
            await fetch("https://formspree.io/f/myklzjqb", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    full_name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    interested_in: formData.service,
                    message: formData.message || "No message",
                })
            });
            console.log("Lead saved to Formspree");
        } catch (error) {
            console.error("Formspree error:", error);
        }
        
        // Reset form fields
        setFormData({
            name: "",
            email: "",
            phone: "",
            service: "Image Audit",
            message: ""
        });
        
        // Show success message on screen
        setIsSubmitted(true);
    
        // Keeping existing WhatsApp behavior unchanged
        const text = `Hi Heena, I'd like to book a discovery call. \n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterested in: ${formData.service}\n\nMessage: ${formData.message}`;
        window.open(`https://wa.me/918368699873?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <main className="min-h-screen bg-ivory flex flex-col md:flex-row">
            {/* ── Left Pane: Branding & Copy ──────────────────────────────── */}
            <section className="
                w-full md:w-[45%] lg:w-[40%] bg-charcoal text-ivory 
                flex flex-col justify-between 
                px-6 py-12 md:px-12 md:py-24 lg:px-20 lg:py-32
                min-h-[50vh] md:min-h-screen
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
                        <h1 className="font-display font-semibold text-[32px] md:text-5xl lg:text-[56px] leading-[1.1] tracking-tight mb-8">
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

                <div className="mt-16 md:mt-24 flex flex-col gap-8">
                    <div className="flex items-center gap-6">
                        <a
                            href="https://instagram.com/heena_imageconsultant"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="text-ivory/40 hover:text-terracotta transition-colors duration-300"
                        >
                            <InstagramIcon className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/heena2016ic/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-ivory/40 hover:text-terracotta transition-colors duration-300"
                        >
                            <LinkedInIcon className="w-6 h-6" />
                        </a>
                        <a
                            href="https://wa.me/918368699873"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="text-ivory/40 hover:text-terracotta transition-colors duration-300"
                        >
                            <WhatsAppIcon className="w-6 h-6" />
                        </a>
                    </div>

                    <div className="pt-8 border-t border-white/10 flex items-center gap-4">
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
                </div>
            </section>

            {/* ── Right Pane: Form Integration ──────────────────────────────── */}
            <section className="
                w-full md:w-[55%] lg:w-[60%] bg-ivory
                flex items-center justify-center
                px-6 py-12 md:p-12 lg:p-20
                min-h-[70vh] md:min-h-screen
            ">
                <div className="w-full max-w-[560px] flex flex-col items-center justify-center">

                    <h2 className="font-display text-2xl md:text-4xl text-charcoal font-semibold mb-4 text-center">
                        Request a Consultation
                    </h2>

                    {/* Success message shown after form submission */}
                    {isSubmitted && (
                        <div className="text-center py-8 bg-green-50 border border-green-200 rounded-md mb-8">
                            <p className="text-green-700 font-medium">Thank You! Your request has been received.</p>
                            <p className="text-green-600 text-sm mt-1">We will connect with you shortly via WhatsApp.</p>
                        </div>
                    )}

                    <p className="font-sans text-charcoal/60 text-[16px] leading-relaxed mb-10 text-center max-w-[400px]">
                        Fill out the form below. We will connect securely via WhatsApp to confirm your slot.
                    </p>

                    <form onSubmit={handleSubmit} className="w-full space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="font-sans text-[12px] tracking-widest uppercase text-charcoal/60 font-semibold">Full Name</label>
                                <input required type="text" className="w-full bg-transparent border border-charcoal/20 px-4 py-3.5 rounded-none outline-none focus:border-terracotta font-sans text-charcoal transition-colors" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-sans text-[12px] tracking-widest uppercase text-charcoal/60 font-semibold">Phone Number</label>
                                <input required type="tel" className="w-full bg-transparent border border-charcoal/20 px-4 py-3.5 rounded-none outline-none focus:border-terracotta font-sans text-charcoal transition-colors" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-sans text-[12px] tracking-widest uppercase text-charcoal/60 font-semibold">Email Address</label>
                            <input required type="email" className="w-full bg-transparent border border-charcoal/20 px-4 py-3.5 rounded-none outline-none focus:border-terracotta font-sans text-charcoal transition-colors" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-sans text-[12px] tracking-widest uppercase text-charcoal/60 font-semibold">I&apos;m interested in</label>
                            <select className="w-full bg-transparent border border-charcoal/20 px-4 py-3.5 rounded-none outline-none focus:border-terracotta font-sans text-charcoal transition-colors appearance-none" value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                                <option value="Image Audit">Image Audit</option>
                                <option value="Wardrobe Editing">Wardrobe Editing</option>
                                <option value="Personal Shopping">Personal Shopping</option>
                                <option value="Body Language Training">Body Language Training</option>
                                <option value="Conversation Skills">Conversation Skills</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-sans text-[12px] tracking-widest uppercase text-charcoal/60 font-semibold">Message (Optional)</label>
                            <textarea rows={4} className="w-full bg-transparent border border-charcoal/20 px-4 py-3.5 rounded-none outline-none focus:border-terracotta font-sans text-charcoal transition-colors resize-none" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
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
