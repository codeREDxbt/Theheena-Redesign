import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Professional Styling Portfolio | Top Image Consultant India | The Heena',
    description: 'Explore a curated gallery of professional styling, corporate power dressing, and image consulting transformations by India\'s leading MSME-recognized Image Consultant.',
    alternates: {
        canonical: "https://theheena-redesign.vercel.app/portfolio",
    },
}

const BASE_PORTFOLIO_ITEMS = [
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

const ADDED_GALLERY_IMAGES = [
    "1723279285448.jpg", "1723529137611.jpg", "1741618372042.jpg", "1741626086284.jpg", "1741628088841.jpg",
    "1743262127630.jpg", "1747329526983.jpg", "1747366728242.jpg", "1775316609985.jpg", "20190516115735811_save.jpg",
    "20190516115806672_save.jpg", "20190613125826_save.jpg", "FB_IMG_1666756529429.jpg", "FB_IMG_1666756538413.jpg",
    "FB_IMG_1666756564989.jpg", "IMG-20151127-WA0005.jpg", "IMG-20160208-WA0028.jpg", "IMG-20160209-WA0012.jpg",
    "IMG-20160210-WA0002.jpg", "IMG-20180216-WA0010.jpg", "IMG-20180216-WA0013.jpg", "IMG-20180216-WA0028.jpg",
    "IMG-20180923-WA0028.jpg", "IMG-20181122-WA0055.jpg", "IMG-20190404-WA0063.jpg", "IMG-20190420-WA0024.jpg",
    "IMG-20190613-WA0133.jpg", "IMG-20190625-WA0059.jpg", "IMG-20190930-WA0033~2.jpg", "IMG-20260405-WA0050.jpg",
    "IMG-20260405-WA0051.jpg", "IMG-20260405-WA0056.jpg", "IMG-20260405-WA0058.jpg", "IMG20211016124333.jpg",
    "IMG20211021141217.jpg", "IMG20211122140024.jpg", "IMG20211122163514.jpg", "IMG20211217104124.jpg",
    "IMG20211217114614.jpg", "IMG20220326154136.jpg", "IMG20220326154148.jpg", "IMG20220326155844.jpg",
    "IMG20220914174801~2.jpg", "IMG20250502114235_01.jpg", "IMG_20180526_001626_394.jpg", "IMG_20210305_075843_111.jpg",
    "IMG_20220102_174253.jpg", "IMG_20220102_174327.jpg", "IMG_20251112_161817.jpg", "IMG_20260407_181445.jpg",
    "IMG_20260407_181459.jpg", "IMG_20260407_181518.jpg", "IMG_20260407_200714.jpg", "MAKEUP_2019092816571820_save.jpg",
    "PicsArt_09-17-08.23.44.jpg", "Picsart_26-02-24_18-39-30-273.jpg", "Picsart_26-04-06_23-00-49-416.jpg",
    "Screenshot_2026-04-03-15-32-39-31_99c04817c0de5652397fc8b56c3b3817.jpg", "Screenshot_2026-04-07-16-49-40-06_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg",
    "Screenshot_2026-04-07-16-49-53-54_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg", "Screenshot_2026-04-07-16-55-12-60_965bbf4d18d205f782c6b8409c5773a4.jpg"
].map((filename, i) => {
    const GALLERY_CAPTIONS = [
        "Corporate Presentation Coaching", "Personal Branding Session", "Executive Wardrobe Audit",
        "Signature Style Transformation", "Media & Press Appearance", "Bespoke Image Consulting",
        "Leadership Presence Seminar", "Color Psychology Analysis", "Grooming & Etiquette Workshop",
        "Editorial Fashion Shoot", "Confidence Building Masterclass", "Professional Power Dressing",
        "Client Success Story", "Global Style Expertise", "Luxury Brand Collaboration",
        "Public Speaking Engagement", "Visual Makeover Transformation", "Keynote Speaker Session",
        "Corporate Etiquette Training", "Personal Shopper Experience"
    ];
    const aspects = ["aspect-square", "aspect-[3/4]", "aspect-[4/5]", "aspect-[4/3]"];
    return {
        id: `pics_gallery_${i}`,
        caption: GALLERY_CAPTIONS[i % GALLERY_CAPTIONS.length],
        aspect: aspects[i % aspects.length],
        src: `/images/pics_gallery/${filename}`,
        objectFit: "object-cover",
        hasBorder: false
    };
});

const PORTFOLIO_ITEMS = [...BASE_PORTFOLIO_ITEMS, ...ADDED_GALLERY_IMAGES];

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

            <ScrollToTop />
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
