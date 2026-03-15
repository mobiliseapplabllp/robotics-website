import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

interface FloatingCTAProps {
    /** Text shown on the button. Default: "Talk To Experts" */
    text?: string;
    /** Link destination. Default: "/contact" */
    to?: string;
    /** Tailwind bg color class (e.g. "bg-blue-500", "bg-orange-500"). Default: "bg-blue-500" */
    bgColor?: string;
    /** Shadow color for glow effect (CSS value). Default: "rgba(59,130,246,0.4)" */
    glowColor?: string;
    /** Hover shadow color. Default: "rgba(59,130,246,0.6)" */
    glowHoverColor?: string;
    /** Whether to show/hide based on scroll position. Default: true */
    scrollTrigger?: boolean;
    /** Scroll threshold as fraction of viewport height. Default: 0.8 */
    scrollThreshold?: number;
}

/**
 * Fixed bottom-right CTA button that appears after scrolling.
 * Used across all product pages with customizable accent color.
 */
export function FloatingCTA({
    text = "Talk To Experts",
    to = "/contact",
    bgColor = "bg-blue-500",
    glowColor = "rgba(59,130,246,0.4)",
    glowHoverColor = "rgba(59,130,246,0.6)",
    scrollTrigger = true,
    scrollThreshold = 0.8,
}: FloatingCTAProps) {
    const [visible, setVisible] = useState(!scrollTrigger);

    useEffect(() => {
        if (!scrollTrigger) return;
        const handleScroll = () => {
            setVisible(window.scrollY > window.innerHeight * scrollThreshold);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollTrigger, scrollThreshold]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: 50 }}
                    className="fixed bottom-10 right-10 z-[80]"
                >
                    <Link
                        to={to}
                        className={`group flex items-center gap-3 px-8 py-4 ${bgColor} rounded-full text-white font-black text-lg hover:scale-105 active:scale-95 transition-all`}
                        style={{
                            boxShadow: `0 20px 60px ${glowColor}`,
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = `0 25px 80px ${glowHoverColor}`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = `0 20px 60px ${glowColor}`;
                        }}
                    >
                        {text} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
