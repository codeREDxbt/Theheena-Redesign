"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import { User, LayoutGrid, BookOpen, Mail, PlayCircle, Instagram } from "lucide-react";

// For mobile we map the link to its respective icon
const NAV_LINKS = [
    { label: "About", href: "/#about", icon: User },
    { label: "Services", href: "/#services", icon: LayoutGrid },
    { label: "My Book", href: "/#book", icon: BookOpen },
    { label: "Testimonials", href: "/#reels", icon: PlayCircle },
    { label: "Portfolio", href: "/portfolio", icon: Instagram },
    { label: "Contact", href: "/#contact", icon: Mail },
];

/* ── Social icon SVGs — stroke-based, 24×24, matching Lucide style ── */
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


export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleLogoClick = (e: React.MouseEvent) => {
        if (pathname === '/') {
            e.preventDefault();
            scrollToTop();
        }
    };

    return (
        <>
            {/* ── Desktop Navigation ─────────────────────────────────────────── */}
            <header
                className={`
          fixed top-0 left-0 right-0 z-50 hidden md:flex
          items-center h-20
          transition-all duration-300
          ${scrolled
                        ? "bg-[#1A1A1A]/95 backdrop-blur-md border-b border-white/10 shadow-sm"
                        : "bg-transparent"
                    }
        `}
            >
                <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20 flex items-center justify-between">
                    {/* Wordmark / Logo */}
                    <div className="flex items-center gap-3">
                        <Link href="/" onClick={handleLogoClick} className="relative block h-10 w-20">
                            <Image
                                src="/images/logo.png"
                                alt="Heena"
                                fill
                                className={`object-contain transition-all duration-300 ${scrolled ? "brightness-0 invert" : ""}`}
                            />
                        </Link>
                        <div className={`h-8 w-px mx-2 ${scrolled ? "bg-white/20" : "bg-charcoal/10"}`} />
                        <span className={`font-sans text-[10px] uppercase tracking-widest leading-tight ${scrolled ? "text-white/60" : "text-charcoal/50"}`}>
                            Image Consultant<br />MSME-Recognized
                        </span>
                    </div>

                    {/* Nav links */}
                    <nav className="flex items-center gap-10 lg:gap-14 pr-4 ml-8 lg:ml-14">
                        {NAV_LINKS.map(({ label, href }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`
                   font-sans text-[11px] uppercase tracking-[0.18em] whitespace-nowrap
                  transition-colors duration-200
                  ${scrolled ? "text-white/80 hover:text-white" : "text-charcoal/70 hover:text-charcoal"}
                `}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* Group Socials and CTA for proper spacing */}
                    <div className="flex items-center gap-6 lg:gap-8">
                        {/* Social icons */}
                        <div className={`flex items-center gap-4 pl-4 border-l ${scrolled ? "border-white/15" : "border-charcoal/10"}`}>
                            <a
                                href="https://www.linkedin.com/in/heena2016ic/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Heena on LinkedIn"
                                className={`transition-colors duration-200 ${scrolled ? "text-white/50 hover:text-white" : "text-charcoal/40 hover:text-terracotta"}`}
                            >
                                <LinkedInIcon className="w-[18px] h-[18px]" />
                            </a>
                            <a
                                href="https://instagram.com/heena_imageconsultant"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Heena on Instagram"
                                className={`transition-colors duration-200 ${scrolled ? "text-white/50 hover:text-white" : "text-charcoal/40 hover:text-terracotta"}`}
                            >
                                <InstagramIcon className="w-[18px] h-[18px]" />
                            </a>
                            <a
                                href="https://wa.me/918368699873"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Heena on WhatsApp"
                                className={`transition-colors duration-200 ${scrolled ? "text-white/50 hover:text-white" : "text-charcoal/40 hover:text-terracotta"}`}
                            >
                                <WhatsAppIcon className="w-[18px] h-[18px]" />
                            </a>
                        </div>

                        {/* CTA */}
                        <Button variant={scrolled ? "ghost-light" : "primary"} as="a" href="/book" className="whitespace-nowrap">
                            Book a Call
                        </Button>
                    </div>
                </div>
            </header>

            {/* ── Mobile Bottom Bar ──────────────────────────────────────────── */}
            <nav className="fixed bottom-0 left-0 right-0 z-50 flex flex-col md:hidden bg-[#1A1A1A] border-t border-white/10 pt-safe-top pb-safe-bottom">
                <div className="flex w-full h-[64px]">
                    {NAV_LINKS.map(({ label, href, icon: Icon }) => (
                        <Link
                            key={href}
                            href={href}
                            className="flex-1 flex flex-col items-center justify-center gap-1 text-white/50 hover:text-terracotta active:text-terracotta transition-colors duration-200 pt-1"
                        >
                            <Icon size={20} strokeWidth={1.5} />
                            <span className="font-sans text-[8px] uppercase tracking-widest leading-none">{label}</span>
                        </Link>
                    ))}
                </div>
            </nav>

        </>
    );
}
