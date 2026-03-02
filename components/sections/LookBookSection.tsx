import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

const FEATURES = [
    "Wardrobe secrets that create lasting first impressions",
    "How your outfit speaks before you do — shoes, fit, colour",
    "The 5 patterns every Indian man must understand",
    "How to dress with authority at every income level",
];

export default function LookBookSection() {
    return (
        <section id="lookbook" className="w-full flex-col flex justify-center py-20 bg-ivory">
            {/* Main Product Showcase Section */}
            <div className="flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20 gap-8 xl:gap-0">
                {/* Left Column: 3D Book Rendering */}
                <div className="w-full lg:w-5/12 flex items-center justify-center py-10 relative overflow-hidden rounded-sm">
                    {/* Abstract decorative circle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-terracotta/5 blur-[100px] pointer-events-none"></div>
                    <div className="relative z-10">
                        <Image
                            src="/images/lookbook-cover.jpg"
                            alt="A Guide to Classy Gentleman by Heena"
                            width={420}
                            height={588}
                            quality={100}
                            priority
                            className="w-full max-w-[420px] shadow-2xl rounded-sm transition-all duration-500 hover:scale-[1.02]"
                            style={{
                                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)"
                            }}
                            loading="eager"
                        />
                    </div>
                </div>

                {/* Right Column: Content */}
                <div className="w-full lg:w-7/12 flex flex-col justify-center lg:pl-12 xl:pl-20 py-8 lg:py-12">
                    <div className="max-w-2xl flex flex-col gap-6">
                        {/* Eyebrow */}
                        <span className="text-terracotta font-bold tracking-[0.15em] text-sm uppercase font-sans">
                            The Look Book
                        </span>

                        {/* Headline */}
                        <h2 className="text-charcoal font-display font-bold text-5xl lg:text-7xl xl:text-[80px] leading-[1.05] tracking-tight">
                            A Guide to Classy Gentleman
                        </h2>

                        {/* Bullet Points */}
                        <ul className="flex flex-col gap-4 py-4">
                            {FEATURES.map((feat) => (
                                <li key={feat} className="text-charcoal/80 text-base lg:text-[18px] font-normal leading-relaxed flex items-start gap-3 font-sans">
                                    <span className="text-terracotta font-bold">—</span> {feat}
                                </li>
                            ))}
                        </ul>

                        {/* Price */}
                        <div className="mt-2 flex items-baseline gap-3">
                            <span className="text-charcoal text-3xl font-bold tracking-tight font-sans">₹1259</span>
                            <span className="text-charcoal/50 text-sm font-medium uppercase tracking-wide font-sans">One-time purchase</span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 mt-4 items-start sm:items-center">
                            <Button
                                variant="primary"
                                as="a"
                                href="https://www.amazon.in/Guide-Classy-Gentlemen-activities-class-ebook/dp/B0D6LFN3L8/ref=sr_1_1?crid=105KFMCX03MMZ&dib=eyJ2IjoiMSJ9.__dLl6zGIJZurcmFko_TzWlR7JSfSD9pd_vtSdKV7L-cyxU8zKG4DpLqHHpcyaFLSqZeHBIg4YtjhuDBUqymeQ.rB7wlShtjbh-oSY-kdcVGexDDBPjLFWfNjIqepdN5qc&dib_tag=se&keywords=a+guide+to+classy+gentlemen&qid=1772436558&sprefix=%2Caps%2C349&sr=8-1"
                                className="w-full sm:w-auto min-w-[200px] h-14 bg-terracotta hover:bg-terracotta-dk py-0 shadow-lg hover:shadow-xl font-bold"
                            >
                                BUY NOW
                            </Button>
                            <a
                                href="#"
                                className="text-terracotta hover:text-terracotta-dk font-bold text-[16px] font-sans transition-colors group flex items-center gap-2"
                            >
                                Preview Inside
                                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery / Preview Section */}
            <div className="w-full bg-white py-16 lg:py-24 mt-16 lg:mt-24">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20">
                    <div className="flex flex-col gap-4 mb-10 text-center">
                        <h3 className="text-terracotta tracking-[0.15em] text-sm uppercase font-sans font-bold">Inside the Book</h3>
                        <h3 className="text-charcoal font-display text-4xl lg:text-5xl font-bold tracking-tight">Curated Styles & Guides</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            {
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2wZbDSja-Wpm_FPeku_Ja9Uj_16x33R0FPu8exR3TH9MprDAfkKkLMYlpShNfYEEPmdozXd4RG5fMIq_-sWujT7Mu3Zdp8Mi6NXN7ZLNQ3kDM7W1QuWL3pxOdC-MgRQMFP9-OujUUL876FkLFMtsq15225bEtL8O18pRCp1qU1z_c46ampHsYVg9L3hIZbSfzHpjbsDZcMmSaiqS7srJS28uQnzzMjFKwmY4t0HfsAfpC6SWoXV4Mnc9jmgda1Md5zUtp8rF615Y",
                                alt: "Man in formal suit adjusting cufflinks"
                            },
                            {
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAymFuwcoEs8l8otL3b1OhG7vNEvwUXs8Jzim8EUldq24eHas20fBPt76kijcGsIDhWT2HIJCXhBO5BrNJv3ZOuXv1rjL0Nftx5N46ubN2vgSmBZq7Mnfp2clQ5nZKy0E3n5RueRJsPSADtLaDy71d9lqgD2xux2mcX5PofDXhR4id88cbh2lXV-d98_8HjlZO8xW-7B-NQhZHz_9IQ0YZkKO1foUM6eD3eA4X_72vUDPwhvihoF-murZdtbRr1iufOIv8DwGtMYIM",
                                alt: "Traditional Indian wedding sherwani details"
                            },
                            {
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwBGPxkhMpa-bVZLoZa_t3gri4qv7jBeN0Se-oxq04IwcWjUl-nNUyrojQNZaVgInARRTd_kfLlsJgnQmNHruRHYU2L8joo9zUcPCaudMliz46hM7SFCysxYZ7H9Fg_rKaYG0AvroH5Yl0zGV-6qTfefejlIJjlEqP3jhQsIUX8aVbMOUs_gC0ih4gYqUs3RA1ZlcY0aGecx112hxI2IYYjsyRpg_MKIfYn5BZP7z32ZA1DNlKqcak7bcTav-ENMWLvBcS-yFPS9s",
                                alt: "Casual linen shirt and trousers outfit"
                            },
                            {
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8sKF_COUxXThnC6Sw2tA1eD2a_SOyfAqbOX1TWb1DQ1HbkeJ4nAUnFD34si0u5k381SdvpfAg2H_5UmWRl36HPp1V2SfehLLL-hkoGf_IbzJ-pzrIbmMwWCYSpLqYTG6j_N8o1nqcE089DWcvIJ3EssgtDUDHx5eEJpFonl1UbpJvo1icvp0PNe6jHGXaCW5FIHvlYbNaVZRCe1kH2NJyaLI0Tnx1lVa0Rckw75PU7msSvb0p1QdYpWI0AqKVkGWpwcNnbcxF5D8",
                                alt: "Close up of grooming accessories and watch"
                            }
                        ].map((item, i) => (
                            <div key={i} className="aspect-[3/4] overflow-hidden group relative bg-stone-100">
                                <Image
                                    src={item.img}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
