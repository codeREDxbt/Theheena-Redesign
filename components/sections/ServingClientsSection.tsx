import clientsData from "@/data/clients.json";
import type { ClientRegion } from "@/types";
import SectionLabel from "@/components/ui/SectionLabel";

const regions = clientsData as ClientRegion[];

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
                        Trusted by India's Leading Brands & Institutions
                    </h2>
                </div>

                {/* Three-column geography grid based on Stitch spec */}
                <div className="grid grid-cols-1 md:grid-cols-12 w-full border-b border-charcoal/10 pb-16 gap-y-12 md:gap-y-0">

                    {/* ABU DHABI - col 2 */}
                    <div className="md:col-span-3 lg:col-span-2 flex flex-col items-center">
                        <h3 className="font-sans text-[11px] text-charcoal/50 uppercase tracking-[0.15em] mb-12">
                            ABU DHABI
                        </h3>
                        <div className="flex flex-col gap-10 items-center justify-start h-full">
                            <span className="logo-muted font-display text-[13px] font-bold uppercase tracking-wider">Student</span>
                            <span className="logo-muted font-display text-[13px] font-bold uppercase tracking-wider text-center max-w-[120px]">Apollo Hospitals International</span>
                        </div>
                    </div>

                    {/* DIVIDER - col 1 (Hidden on mobile) */}
                    <div className="hidden md:flex md:col-span-1 lg:col-span-1 justify-center py-4">
                        <div className="w-[1px] bg-charcoal/10 h-full min-h-[200px]"></div>
                    </div>

                    {/* INDIA - col 6 */}
                    <div className="flex flex-col items-center md:col-span-4 lg:col-span-6 px-4">
                        <h3 className="font-sans text-[11px] text-charcoal/50 uppercase tracking-[0.15em] mb-12 flex-shrink-0">
                            INDIA
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 w-full items-center justify-items-center h-full">
                            {["Apollo", "Adobe", "FashionTV", "Metro", "Sheroes", "Rotary", "IID", "Model", "Beebay", "Sheratal", "Tajurba", "HomeMakers", "Arlin", "Habitat", "Gullybaba", "igp.com"].map(client => (
                                <span key={client} className="logo-muted font-display text-[12px] font-bold uppercase whitespace-nowrap">
                                    {client}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* DIVIDER - col 1 (Hidden on mobile) */}
                    <div className="hidden md:flex md:col-span-1 lg:col-span-1 justify-center py-4">
                        <div className="w-[1px] bg-charcoal/10 h-[80%] min-h-[200px] mt-[48px]"></div>
                    </div>

                    {/* SINGAPORE - col 2 */}
                    <div className="md:col-span-3 lg:col-span-2 flex flex-col items-center">
                        <h3 className="font-sans text-[11px] text-charcoal/50 uppercase tracking-[0.15em] mb-12">
                            SINGAPORE
                        </h3>
                        <div className="flex flex-col gap-10 items-center justify-start h-full">
                            <span className="logo-muted font-display text-[13px] font-bold uppercase tracking-wider text-center max-w-[140px]">Mahabir Banwar Jewellers</span>
                            <span className="logo-muted font-display text-[13px] font-bold uppercase tracking-wider">Sangini</span>
                            <span className="logo-muted font-display text-[13px] font-bold uppercase tracking-wider">Hum Fauji</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
