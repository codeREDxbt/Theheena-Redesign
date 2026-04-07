import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Professional Styling Portfolio | Top Image Consultant India | The Heena',
    description: 'Explore a curated gallery of professional styling, corporate power dressing, and image consulting transformations by India\'s leading MSME-recognized Image Consultant.',
    alternates: {
        canonical: "https://theheena-redesign.vercel.app/portfolio",
    },
}

// The array mapping directly to the provided image transformations and examples.
const PORTFOLIO_ITEMS = [
    { id: "achievement_collage", caption: "Global Recognition & Highlights", aspect: "aspect-square", src: "/images/portfolio/achievement_collage_hd.png", objectFit: "object-cover", hasBorder: false },
    { id: "award", caption: "MSME Recognition", aspect: "aspect-square", src: "/images/portfolio/award.png", objectFit: "object-cover", hasBorder: false },
    { id: "achievement_news", caption: "News National: Expert Feature", aspect: "aspect-video", src: "/images/portfolio/achievement_news_hd.png", objectFit: "object-cover", hasBorder: false },
    { id: "book", caption: "Author & Thought Leader", aspect: "aspect-[3/4]", src: "/images/portfolio/book.png", objectFit: "object-cover", hasBorder: false },
    { id: "desk", caption: "Professional Image Consulting", aspect: "aspect-[4/5]", src: "/images/portfolio/desk.png", objectFit: "object-cover", hasBorder: false },
    { id: "achievement_iid_1", caption: "IID Leadership Award", aspect: "aspect-square", src: "/images/portfolio/achievement_iid_1_hd.png", objectFit: "object-cover", hasBorder: false },
    { id: "blazer", caption: "Custom Styling & Design", aspect: "aspect-[3/4]", src: "/images/portfolio/blazer.png", objectFit: "object-contain", hasBorder: true },
    { id: "mens", caption: "Versatile Styling", aspect: "aspect-[4/3]", src: "/images/portfolio/mens.png", objectFit: "object-contain", hasBorder: true },
    { id: "achievement_iid_2", caption: "Industrial Development Series", aspect: "aspect-[4/3]", src: "/images/portfolio/achievement_iid_2_hd.png", objectFit: "object-cover", hasBorder: false },
    { id: "award2", caption: "Global Client Trust", aspect: "aspect-[4/3]", src: "/images/portfolio/award2.png", objectFit: "object-cover", hasBorder: false },
    { id: "interview", caption: "Media & Press", aspect: "aspect-video", src: "/images/portfolio/interview.png", objectFit: "object-cover", hasBorder: false },
    { id: "nationtalkshow", caption: "Leadership Summit", aspect: "aspect-video", src: "/images/portfolio/nationtalkshow.png", objectFit: "object-cover", hasBorder: false },
    { id: "iid", caption: "Industrial Development Recognition", aspect: "aspect-[4/3]", src: "/images/portfolio/IID.png", objectFit: "object-cover", hasBorder: false },
    { id: "conference", caption: "Keynote Speaker", aspect: "aspect-video", src: "/images/portfolio/conference.png", objectFit: "object-cover", hasBorder: false },
    { id: "conference2", caption: "Executive Seminar", aspect: "aspect-[4/3]", src: "/images/portfolio/conference2.png", objectFit: "object-cover", hasBorder: false },
    { id: "newspaper", caption: "Press Coverage", aspect: "aspect-[3/4]", src: "/images/portfolio/newspaper.png", objectFit: "object-contain", hasBorder: true },
    { id: "speech", caption: "Public Speaking", aspect: "aspect-[4/5]", src: "/images/portfolio/speech.png", objectFit: "object-cover", hasBorder: false },
];

export default function PortfolioPage() {
    return (
        <main
            className="min-h-screen bg-ivory"
            style={{
                backgroundImage: "url('/images/hero-bg.png')",
                backgroundRepeat: "repeat",
                backgroundSize: "320px 320px",
            }}
        >
            {/* Header Area */}
            <section className="pt-24 pb-16 md:pt-32 md:pb-20 relative px-6 md:px-12 xl:px-20 max-w-[1280px] mx-auto border-b border-charcoal/10">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 group text-charcoal/60 hover:text-terracotta transition-colors duration-200 mb-8 mt-4"
                >
                    <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={1.5} />
                    <span className="font-sans text-[12px] uppercase tracking-widest font-medium">Back to Home</span>
                </Link>

                <div className="flex flex-col gap-6 max-w-3xl">
                    <SectionLabel>Professional Portfolio</SectionLabel>
                    <h1 className="font-display font-medium text-[clamp(42px,6vw,64px)] leading-[1.05] tracking-tight text-charcoal">
                        Picture <span className="font-bold">Gallery.</span>
                    </h1>
                    <p className="font-sans text-[18px] md:text-[20px] text-charcoal/70 leading-relaxed font-light max-w-2xl">
                        A visual exploration of transformational image consulting, executive presence engineering, and luxury brand collaborations.
                    </p>
                </div>
            </section>

            {/* Masonry Grid Area */}
            <section className="py-16 md:py-24 px-6 md:px-12 xl:px-20 max-w-[1280px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
                    {/* 
                        Column 1 
                        We split the items down columns to simulate masonry without JS libraries 
                    */}
                    <div className="flex flex-col gap-6 md:gap-8">
                        {PORTFOLIO_ITEMS.filter((_, i) => i % 3 === 0).map((item) => (
                            <PortfolioCard key={item.id} item={item} />
                        ))}
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-6 md:gap-8 mt-0 md:mt-12 lg:mt-16">
                        {PORTFOLIO_ITEMS.filter((_, i) => i % 3 === 1).map((item) => (
                            <PortfolioCard key={item.id} item={item} />
                        ))}
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-6 md:gap-8 mt-0 lg:mt-32">
                        {PORTFOLIO_ITEMS.filter((_, i) => i % 3 === 2).map((item) => (
                            <PortfolioCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>

            </section>

        </main>
    );
}

function PortfolioCard({ item }: { item: typeof PORTFOLIO_ITEMS[0] }) {
    return (
        <div className={`group relative w-full overflow-hidden ${item.hasBorder ? "bg-white border border-charcoal/10" : "bg-charcoal/[0.03]"} cursor-crosshair`}>
            <div className={`relative w-full ${item.aspect} transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105`}>

                <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    className={item.objectFit}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Hover Caption Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                <span className="font-sans uppercase tracking-[0.15em] text-[11px] text-ivory/80 mb-2 font-medium">Project</span>
                <h3 className="font-display text-white text-2xl tracking-wide">{item.caption}</h3>
            </div>
        </div>
    )
}
