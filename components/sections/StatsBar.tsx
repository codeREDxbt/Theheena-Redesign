"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const STATS = [
    { value: "4+", label: "Years Experience" },
    { value: "119+", label: "Business Owners" },
    { value: "85+", label: "Professionals" },
    { value: "8391+", label: "Group Session Members" },
    { value: "9+", label: "Fashion Shows" },
];

function AnimatedNumber({ raw }: { raw: string }) {
    const suffix = raw.replace(/[0-9]/g, "");
    const target = parseInt(raw.replace(/\D/g, ""), 10);

    const motionVal = useMotionValue(0);
    const rounded = useTransform(motionVal, (v) => Math.round(v).toString() + suffix);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    useEffect(() => {
        if (!inView) return;
        const ctrl = animate(motionVal, target, { duration: 1.6, ease: "easeOut" });
        return ctrl.stop;
    }, [inView, motionVal, target]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function StatsBar() {
    return (
        <section
            id="stats"
            className="section-dark py-16"
            aria-label="Key achievements"
        >
            <div className="max-w-[1280px] mx-auto px-8 md:px-10 flex flex-col items-center gap-10">

                {/* Header */}
                <div className="flex flex-col items-center gap-3">
                    <SectionLabel theme="dark">By the Numbers</SectionLabel>
                    <div className="w-10 h-[2px] bg-terracotta" />
                </div>

                {/* Stats Row */}
                <div className="w-full grid grid-cols-2 md:grid-cols-5 divide-x divide-white/10">
                    {STATS.map(({ value, label }) => (
                        <div
                            key={label}
                            className="flex flex-col items-center gap-3 py-8 px-4"
                        >
                            <p className="font-display font-bold text-[clamp(42px,4.5vw,64px)] leading-none text-white tracking-tight">
                                <AnimatedNumber raw={value} />
                            </p>
                            <p className="font-sans text-[10px] uppercase tracking-[0.14em] text-ivory/55 text-center leading-snug max-w-[100px]">
                                {label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
