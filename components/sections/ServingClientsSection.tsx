import Image from "next/image";
import { GraduationCap, Stethoscope, Scale, Building2, Briefcase } from "lucide-react";

const CLIENTS_BY_REGION = {
    "Abu Dhabi": [
        { name: "Student", type: "icon", icon: GraduationCap },
        { name: "Lawyer", type: "icon", icon: Scale },
        { name: "Apollo Hospitals", type: "image", src: "/images/clients/apollo.png" }
    ],
    "India": [
        { name: "Adobe", type: "image", src: "/images/clients/adobe.png" },
        { name: "FashionTV", type: "image", src: "/images/clients/fashiontv.png" },
        { name: "Apollo", type: "image", src: "/images/clients/apollo.png" },
        { name: "Sheroes", type: "image", src: "/images/clients/sheroes.png" },
        { name: "Rotary", type: "image", src: "/images/clients/rotary.png" },
        { name: "IID", type: "icon", icon: Building2 },
        { name: "Institution", type: "icon", icon: Building2 },
        { name: "Metro Buildtech", type: "wordmark" },
        { name: "Tajurba", type: "wordmark" },
        { name: "Beebay", type: "wordmark" },
        { name: "Sheratal", type: "wordmark" },
        { name: "Arlin", type: "image", src: "/images/clients/arlin.png" },
        { name: "Habitat", type: "image", src: "/images/clients/habitat.png" },
        { name: "Gullybaba", type: "image", src: "/images/clients/gullybaba.png" }
    ],
    "Singapore": [
        { name: "Doctor", type: "icon", icon: Stethoscope },
        { name: "Sangini", type: "image", src: "/images/clients/sangini.png" },
        { name: "Hum Fauji", type: "image", src: "/images/clients/humfauji.png" },
        { name: "Mahabir Banwar Jewellers", type: "wordmark" }
    ]
};

function BrandLogo({ client }: { client: { name: string, type: string, src?: string, icon?: any } }) {
    if (client.type === "icon" && client.icon) {
        const Icon = client.icon;
        return (
            <div className="w-full grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <Icon size={48} strokeWidth={1} className="text-charcoal" />
            </div>
        );
    }

    if (client.type === "image" && client.src) {
        return (
            <div className="relative w-full h-12 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="relative w-full h-full max-w-[120px]">
                    <Image
                        src={client.src}
                        alt={client.name}
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="w-full grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
            <span className="font-display text-[14px] md:text-[16px] font-bold uppercase tracking-[0.1em] text-charcoal/80 whitespace-nowrap">
                {client.name}
                <span className="block h-[1px] w-0 group-hover:w-full bg-terracotta transition-all duration-500 mt-0.5" />
            </span>
        </div>
    );
}

export default function ServingClientsSection() {
    return (
        <section id="clients" className="section-white py-16 overflow-hidden" aria-label="Clients served globally">
            <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 xl:px-20">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="font-sans text-[11px] text-terracotta font-medium uppercase tracking-[0.2em] border-b border-terracotta pb-1 inline-block">
                        SERVING CLIENTS GLOBALLY
                    </span>
                    <h2 className="font-sans mt-6 text-[16px] text-charcoal/70 font-normal tracking-tight">
                        Trusted by India&apos;s Leading Brands &amp; Institutions
                    </h2>
                </div>

                {/* Proof Questions Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    <div className="bg-charcoal/[0.03] border border-charcoal/10 border-l-2 border-l-terracotta p-6 lg:p-8 flex flex-col gap-3 transition-transform hover:-translate-y-1 duration-300">
                        <span className="font-display italic text-terracotta text-[15px] tracking-wide">
                            &quot;Working with global institutions?&quot;
                        </span>
                        <p className="font-sans text-[15px] lg:text-[16px] text-charcoal/80 leading-relaxed font-medium">
                            Delivering image excellence across the UAE, Singapore, and India&apos;s top corporate sectors.
                        </p>
                    </div>
                    <div className="bg-charcoal/[0.03] border border-charcoal/10 border-l-2 border-l-terracotta p-6 lg:p-8 flex flex-col gap-3 transition-transform hover:-translate-y-1 duration-300">
                        <span className="font-display italic text-terracotta text-[15px] tracking-wide">
                            &quot;Training professionals at scale?&quot;
                        </span>
                        <p className="font-sans text-[15px] lg:text-[16px] text-charcoal/80 leading-relaxed font-medium">
                            Over 8,300 members trained through intensive group sessions and masterclasses.
                        </p>
                    </div>
                    <div className="bg-charcoal/[0.03] border border-charcoal/10 border-l-2 border-l-terracotta p-6 lg:p-8 flex flex-col gap-3 transition-transform hover:-translate-y-1 duration-300">
                        <span className="font-display italic text-terracotta text-[15px] tracking-wide">
                            &quot;Trusted by industry leaders?&quot;
                        </span>
                        <p className="font-sans text-[15px] lg:text-[16px] text-charcoal/80 leading-relaxed font-medium">
                            The preferred consultant for Apollo Hospitals, Adobe, and FashionTV.
                        </p>
                    </div>
                </div>

                {/* Three-column geography grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 w-full border-t border-b border-charcoal/10 py-20 gap-x-8 gap-y-16 md:gap-y-0">

                    {/* ABU DHABI */}
                    <div className="md:col-span-3 lg:col-span-2 flex flex-col items-center">
                        <h3 className="font-sans text-[10px] text-terracotta font-bold uppercase tracking-[0.2em] mb-12 border-b border-terracotta/20 pb-1">
                            ABU DHABI
                        </h3>
                        <div className="flex flex-col gap-16 items-center justify-start w-full">
                            {CLIENTS_BY_REGION["Abu Dhabi"].map((client, i) => (
                                <div key={i} className="group w-full max-w-[140px]">
                                    <BrandLogo client={client} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DIVIDER */}
                    <div className="hidden md:flex md:col-span-1 justify-center">
                        <div className="w-[1px] bg-charcoal/10 h-full"></div>
                    </div>

                    {/* INDIA */}
                    <div className="flex flex-col items-center md:col-span-4 lg:col-span-6 px-4">
                        <h3 className="font-sans text-[10px] text-terracotta font-bold uppercase tracking-[0.2em] mb-12 border-b border-terracotta/20 pb-1">
                            INDIA
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 w-full items-center justify-items-center">
                            {CLIENTS_BY_REGION["India"].map((client, i) => (
                                <div key={i} className="group w-full flex justify-center">
                                    <BrandLogo client={client} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DIVIDER */}
                    <div className="hidden md:flex md:col-span-1 justify-center">
                        <div className="w-[1px] bg-charcoal/10 h-full"></div>
                    </div>

                    {/* SINGAPORE */}
                    <div className="md:col-span-3 lg:col-span-2 flex flex-col items-center">
                        <h3 className="font-sans text-[10px] text-terracotta font-bold uppercase tracking-[0.2em] mb-12 border-b border-terracotta/20 pb-1">
                            SINGAPORE
                        </h3>
                        <div className="flex flex-col gap-16 items-center justify-start w-full">
                            {CLIENTS_BY_REGION["Singapore"].map((client, i) => (
                                <div key={i} className="group w-full max-w-[140px]">
                                    <BrandLogo client={client} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
