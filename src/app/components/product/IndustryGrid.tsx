import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { type AccentColor, getAccentClasses } from "./colors";

export interface IndustryItem {
    title: string;
    desc: string;
    img: string;
}

interface IndustryGridProps {
    industries: IndustryItem[];
    /** Section heading. Default: "Industry" */
    heading?: string;
    /** Highlighted word in the heading (receives accent color). Default: "Solutions." */
    headingAccent?: string;
    /** Pre-heading label. Default: "Universal Precision" */
    label?: string;
    /** Optional description shown beside heading. */
    description?: string;
    /** Accent color key. Default: "blue" */
    accentColor?: AccentColor;
}

/**
 * Industry solutions grid with grayscale-to-color hover cards.
 * Used across all product pages with customizable heading and accent color.
 */
export function IndustryGrid({
    industries,
    heading = "Industry",
    headingAccent = "Solutions.",
    label = "Universal Precision",
    description,
    accentColor = "blue",
}: IndustryGridProps) {
    const c = getAccentClasses(accentColor);

    return (
        <section className="py-24 bg-[#050a14] border-t border-white/5 relative overflow-hidden">
            <div className="max-w-[95rem] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
                    <div className="flex-1">
                        <span className={`${c.text500} text-sm font-black uppercase tracking-[0.4em] mb-4 block`}>
                            {label}
                        </span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            {heading} <span className={c.text500}>{headingAccent}</span>
                        </h2>
                    </div>
                    {description && (
                        <p className="flex-1 text-white/40 text-xl max-w-xl font-light leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {industries.map((industry, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -15, scale: 1.02 }}
                            className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/5 bg-[#0a101f]"
                        >
                            <ImageWithFallback
                                src={industry.img}
                                alt={industry.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <h3 className="text-3xl font-black text-white mb-2 uppercase italic tracking-tighter transition-transform group-hover:-translate-y-2">
                                    {industry.title}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    {industry.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
