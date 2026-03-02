"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { User, LayoutGrid, BookOpen, Mail, ArrowUp, ImageIcon } from "lucide-react";

// For mobile we map the link to its respective icon
const NAV_LINKS = [
    { label: "About", href: "/#about", icon: User },
    { label: "Services", href: "/#services", icon: LayoutGrid },
    { label: "Look Book", href: "/#lookbook", icon: BookOpen },
    { label: "Portfolio", href: "/portfolio", icon: ImageIcon },
    { label: "Contact", href: "/#contact", icon: Mail },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
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
                        <Link href="/" className="relative block h-10 w-20">
                            <Image
                                src="/images/logo.png"
                                alt="Heena"
                                fill
                                className={`object-contain transition-all duration-300 ${scrolled ? "brightness-0 invert" : ""}`}
                            />
                        </Link>
                        <div className={`h-8 w-px mx-2 ${scrolled ? "bg-white/20" : "bg-charcoal/10"}`} />
                        <span className={`font-sans text-[10px] uppercase tracking-widest leading-tight ${scrolled ? "text-white/60" : "text-charcoal/50"}`}>
                            Image Consultant<br />MSME Recognized
                        </span>
                    </div>

                    {/* Nav links */}
                    <nav className="flex items-center gap-10 lg:gap-14 pr-4">
                        {NAV_LINKS.map(({ label, href }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`
                   font-sans text-label uppercase tracking-widest
                  transition-colors duration-200
                  ${scrolled ? "text-white/80 hover:text-white" : "text-charcoal/70 hover:text-charcoal"}
                `}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <Button variant={scrolled ? "ghost-light" : "primary"} as="a" href="/book">
                        Book a Call
                    </Button>
                </div>
            </header>

            {/* ── Mobile Bottom Bar ──────────────────────────────────────────── */}
            <nav className="fixed bottom-0 left-0 right-0 z-50 flex flex-col md:hidden bg-[#1A1A1A] border-t border-white/10 pt-safe-top pb-safe-bottom">
                <div className="flex w-full h-[64px]">
                    {NAV_LINKS.map(({ label, href, icon: Icon }) => (
                        <Link
                            key={href}
                            href={href}
                            className="flex-1 flex flex-col items-center justify-center gap-1.5 text-white/50 hover:text-terracotta active:text-terracotta transition-colors duration-200 pt-1"
                        >
                            <Icon size={20} strokeWidth={1.5} />
                            <span className="font-sans text-[9px] uppercase tracking-widest leading-none">{label}</span>
                        </Link>
                    ))}
                </div>
            </nav>

            {/* ── Mobile Scroll To Top ───────────────────────────────────────── */}
            <button
                onClick={scrollToTop}
                className={`
                    fixed right-[min(20px,5vw)] z-40 md:hidden
                    flex items-center justify-center w-11 h-11 rounded-full
                    bg-terracotta text-white shadow-[0_4px_12px_rgba(196,98,45,0.4)] 
                    border border-white/10
                    transition-all duration-300
                    ${scrolled ? "bottom-[calc(80px+env(safe-area-inset-bottom))] opacity-100 translate-y-0" : "bottom-[calc(60px+env(safe-area-inset-bottom))] opacity-0 translate-y-4 pointer-events-none"}
                `}
                aria-label="Scroll to top"
            >
                <ArrowUp size={20} strokeWidth={2} className="text-white" />
            </button>
        </>
    );
}
