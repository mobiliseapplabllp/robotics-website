import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { type AccentColor, getAccentClasses } from "./colors";

interface ProductCTAProps {
    /** Main heading text */
    heading: string;
    /** Accented word(s) in heading */
    headingAccent: string;
    /** Optional subtitle paragraph */
    subtitle?: string;
    /** CTA button text. Default: "Schedule a Live Demo" */
    buttonText?: string;
    /** Link destination. Default: "/contact" */
    to?: string;
    /** Accent color key. Default: "blue" */
    accentColor?: AccentColor;
    /** Floating decorative model text (e.g. "T11", "C40"). Optional. */
    modelLabel?: string;
}

/**
 * Bottom-of-page CTA section with large heading, optional subtitle, and action button.
 * Supports an optional floating decorative model label for visual impact.
 */
export function ProductCTA({
    heading,
    headingAccent,
    subtitle,
    buttonText = "Schedule a Live Demo",
    to = "/contact",
    accentColor = "blue",
    modelLabel,
}: ProductCTAProps) {
    const c = getAccentClasses(accentColor);

    return (
        <section className="py-40 relative flex items-center justify-center overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-t ${c.accent950bg} via-[#050a14] to-[#050a14]`} />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-6xl md:text-[6rem] font-black text-white mb-8 tracking-tighter leading-none italic">
                    {heading} <span className={c.text500}>{headingAccent}</span>
                </h2>
                {subtitle && (
                    <p className="text-white/60 text-2xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                        {subtitle}
                    </p>
                )}
                <Link
                    to={to}
                    className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-2xl rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_80px_rgba(255,255,255,0.2)]"
                >
                    {buttonText} <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                    <div className={`absolute inset-0 rounded-full ${c.bg500} blur-2xl opacity-0 group-hover:opacity-20 transition-opacity`} />
                </Link>
            </div>

            {modelLabel && (
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-20 -right-20 text-[30rem] font-black text-white/[0.02] select-none leading-none -rotate-12 pointer-events-none"
                >
                    {modelLabel}
                </motion.div>
            )}
        </section>
    );
}
