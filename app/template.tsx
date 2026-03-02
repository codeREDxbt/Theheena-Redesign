"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <>
            <motion.div
                key={`page-${pathname}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                className="flex flex-col min-h-screen"
            >
                {children}
            </motion.div>

            {/* Split Screen Overlay */}
            <div className="fixed inset-0 z-[100] flex pointer-events-none overflow-hidden" key={`overlay-${pathname}`}>
                {/* Left Split Background (Ivory) */}
                <motion.div
                    className="absolute inset-y-0 left-0 w-1/2 bg-ivory z-0"
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.75, 0, 0.25, 1] }}
                />

                {/* Right Split Background (Charcoal) */}
                <motion.div
                    className="absolute inset-y-0 right-0 w-1/2 bg-charcoal z-0"
                    initial={{ x: 0 }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.75, 0, 0.25, 1] }}
                />

                {/* Center Content */}
                <motion.div
                    className="relative z-10 flex h-full w-full flex-col items-center justify-center pointer-events-none"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
                >
                    {/* The Split 'H' Initial */}
                    <div className="mb-6 select-none relative inline-block text-[120px] leading-none font-bold font-display">
                        {/* Invisible base text just to set structure & size */}
                        <span className="invisible">H</span>

                        {/* Left half: Charcoal color, clipped to display on Ivory background */}
                        <div
                            className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-charcoal z-10"
                            style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}
                        >
                            H
                        </div>

                        {/* Right half: Ivory color, clipped to display on Charcoal background */}
                        <div
                            className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-ivory z-10"
                            style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }}
                        >
                            H
                        </div>
                    </div>

                    {/* Subheading */}
                    <h2 className="text-terracotta font-sans text-[12px] font-bold tracking-[0.2em] uppercase text-center relative z-10">
                        The Image Revolution
                    </h2>
                </motion.div>

                {/* Loading Indicator - Bottom Right */}
                <motion.div
                    className="absolute bottom-8 right-8 z-20 pointer-events-none mix-blend-difference"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
                >
                    <p className="text-ivory font-sans text-[10px] font-normal tracking-wide opacity-80">
                        Loading...
                    </p>
                </motion.div>
            </div>
        </>
    );
}
