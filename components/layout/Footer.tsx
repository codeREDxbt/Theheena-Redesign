import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Instagram, Linkedin } from "lucide-react";

const QUICK_LINKS = [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Look Book", href: "/#lookbook" },
    { label: "Book a Call", href: "/book" },
    { label: "Contact", href: "/#contact" },
];

export default function Footer() {
    return (
        <footer id="contact" className="bg-charcoal text-ivory/80">
            {/* Main grid */}
            <div className="max-w-[1280px] mx-auto px-8 md:px-10 pt-16 pb-8 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Column 1 — Brand */}
                <div className="flex flex-col gap-3">
                    <Link href="/" className="relative block h-10 w-24 -ml-1">
                        <Image
                            src="/images/logo.png"
                            alt="Heena"
                            fill
                            className="object-contain brightness-0 invert"
                        />
                    </Link>
                    <p className="font-sans text-sm text-ivory/70 leading-relaxed max-w-[240px]">
                        India&apos;s Only Image Consultant · MSME-Recognized.
                    </p>
                    <div className="flex gap-2 mt-2">
                        {/* Accreditation text badges */}
                        {["Ministry of MSME", "YMCA"].map((badge) => (
                            <span
                                key={badge}
                                className="font-sans text-[10px] uppercase tracking-widest px-2 py-1 border border-white/20 text-white/50"
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Column 2 — Quick Links */}
                <div className="flex flex-col gap-4">
                    <p className="font-sans text-label uppercase tracking-widest text-ivory/50">Quick Links</p>
                    <nav className="flex flex-col gap-2">
                        {QUICK_LINKS.map(({ label, href }) => (
                            <Link
                                key={href}
                                href={href}
                                className="font-sans text-sm text-ivory/70 hover:text-white transition-colors duration-200"
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Column 3 — Contact */}
                <div className="flex flex-col gap-4">
                    <p className="font-sans text-label uppercase tracking-widest text-ivory/50">Get in Touch</p>
                    <div className="flex flex-col gap-3 font-sans text-sm text-ivory/70">
                        <a href="mailto:connect@theheena.com" className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                            <Mail size={16} className="text-terracotta" />
                            connect@theheena.com
                        </a>
                        {/* TODO: Replace with real phone number */}
                        <a href="tel:+918368699873" className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                            <Phone size={16} className="text-terracotta" />
                            +91 83686 99873
                        </a>
                        <a
                            href="https://instagram.com/heena_imageconsultant"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-white transition-colors duration-200"
                        >
                            <Instagram size={16} className="text-terracotta" />
                            @heena_imageconsultant
                        </a>
                        <a
                            href="https://www.linkedin.com/in/heena2016ic/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-white transition-colors duration-200"
                        >
                            <Linkedin size={16} className="text-terracotta" />
                            heena2016ic
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="max-w-[1280px] mx-auto px-8 md:px-10 pb-8">
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
    <p className="font-sans text-[11px] text-ivory/40">
      &copy; 2026 Heena. All rights reserved.
    </p>
    <Link
      href="https://coderedxbt.dev/"
      target="_blank"
      rel="noopener noreferrer"
      className="font-sans text-[11px] text-ivory/40 hover:text-ivory/70 transition-colors duration-200"
    >
      Designed and Built By Vinayak (codeRED)
    </Link>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="font-sans text-[11px] text-ivory/40 hover:text-ivory/70 transition-colors duration-200 uppercase tracking-widest">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="font-sans text-[11px] text-ivory/40 hover:text-ivory/70 transition-colors duration-200 uppercase tracking-widest">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
