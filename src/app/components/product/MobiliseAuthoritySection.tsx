import { motion } from "motion/react";
import { type AccentColor, getAccentClasses } from "./colors";

const HIGHLIGHT_COLORS: Record<AccentColor, { bg: string; text: string }> = {
    blue: { bg: "rgba(59,130,246,0.2)", text: "rgb(147,197,253)" },
    orange: { bg: "rgba(249,115,22,0.2)", text: "rgb(253,186,116)" },
    cyan: { bg: "rgba(6,182,212,0.2)", text: "rgb(103,232,249)" },
    teal: { bg: "rgba(20,184,166,0.2)", text: "rgb(94,234,212)" },
    rose: { bg: "rgba(244,63,94,0.2)", text: "rgb(253,164,175)" },
    slate: { bg: "rgba(100,116,139,0.2)", text: "rgb(203,213,225)" },
    amber: { bg: "rgba(245,158,11,0.2)", text: "rgb(252,211,77)" },
    yellow: { bg: "rgba(234,179,8,0.2)", text: "rgb(253,224,71)" },
    purple: { bg: "rgba(168,85,247,0.2)", text: "rgb(216,180,254)" },
    green: { bg: "rgba(34,197,94,0.2)", text: "rgb(134,239,172)" },
    lime: { bg: "rgba(132,204,22,0.2)", text: "rgb(190,242,100)" },
    emerald: { bg: "rgba(16,185,129,0.2)", text: "rgb(110,231,183)" },
    fuchsia: { bg: "rgba(217,70,239,0.2)", text: "rgb(240,171,252)" },
    pink: { bg: "rgba(236,72,153,0.2)", text: "rgb(249,168,212)" },
    indigo: { bg: "rgba(99,102,241,0.2)", text: "rgb(165,180,252)" },
    sky: { bg: "rgba(14,165,233,0.2)", text: "rgb(125,211,252)" },
};

interface MobiliseAuthoritySectionProps {
    /**
     * Visual variant:
     * - "glow": Large blurred accent glow ball (T11 style)
     * - "lines": Vertical gradient lines (C40/C30 style)
     * - "minimal": Clean with no decoration
     */
    variant?: "glow" | "lines" | "minimal";
    /** Accent color key. Default: "blue" */
    accentColor?: AccentColor;
    /** Optional custom description paragraph (supports HTML). */
    description?: string;
    /** Whether to show bottom border. Default: false */
    showBorder?: boolean;
}

/**
 * "Global Technology. Local Mastery." section establishing Mobilise as the Indian partner.
 * Supports multiple visual variants to match each product page's aesthetic.
 */
export function MobiliseAuthoritySection({
    variant = "glow",
    accentColor = "blue",
    description = 'While Keenon builds the hardware, <strong>Mobilise App Lab Limited</strong> delivers the mastery. We don\'t just sell robots; we architect end-to-end autonomous solutions that redefine facility management for the Indian market.',
    showBorder = false,
}: MobiliseAuthoritySectionProps) {
    const c = getAccentClasses(accentColor);
    const hl = HIGHLIGHT_COLORS[accentColor];

    // Replace <strong> tags with highlighted versions
    const highlightedDesc = description.replace(
        /<strong>(.*?)<\/strong>/g,
        `<strong style="background:${hl.bg};color:${hl.text};padding:2px 8px;border-radius:4px;font-weight:700">$1</strong>`
    );

    return (
        <section className={`py-32 bg-[#050a14] relative overflow-hidden ${showBorder ? "border-b border-white/5" : ""}`}>
            {/* Variant decorations */}
            {variant === "glow" && (
                <div className={`absolute top-0 right-0 w-1/2 h-full ${c.bgGlow} blur-[120px] rounded-full translate-x-1/2`} />
            )}
            {variant === "lines" && (
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className={`absolute top-0 left-1/4 w-px h-full bg-gradient-to-b ${c.bgLine} via-transparent to-transparent`} />
                    <div className={`absolute top-0 right-1/4 w-px h-full bg-gradient-to-b ${c.bgLine} via-transparent to-transparent`} />
                </div>
            )}

            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`${c.text500} text-sm font-black uppercase tracking-[0.4em] mb-4 block`}
                >
                    The Partner You Trust
                </motion.span>

                {variant === "glow" ? (
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter"
                    >
                        Global Technology.<br />
                        <span className={`bg-gradient-to-r ${c.gradientFrom} to-cyan-400 bg-clip-text text-transparent`}>
                            Local Mastery.
                        </span>
                    </motion.h2>
                ) : (
                    <>
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7 }}
                            className="text-5xl md:text-8xl font-black text-white mb-4 tracking-tighter leading-none italic uppercase"
                        >
                            GLOBAL TECHNOLOGY. <br />
                            <span className={c.text500}>LOCAL MASTERY.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-white/40 text-xl md:text-2xl font-black uppercase tracking-widest mb-12"
                        >
                            Developed by Keenon. Implemented by Mobilise.
                        </motion.p>
                    </>
                )}

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="max-w-4xl mx-auto text-white/50 text-lg md:text-xl leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: highlightedDesc }}
                />
            </div>
        </section>
    );
}
