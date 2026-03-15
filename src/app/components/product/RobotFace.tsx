import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface RobotFaceProps {
    /** Array of emoji expressions to cycle through. Default: ["😊", "😄", "🤖", "👋", "✨", "🎯"] */
    expressions?: string[];
    /** Interval between expression changes in ms. Default: 2000 */
    interval?: number;
    /** Tailwind border color class (e.g. "border-cyan-500/40"). Default: "border-cyan-500/40" */
    borderColor?: string;
    /** Tailwind shadow color class (e.g. "shadow-cyan-500/20"). Default: "shadow-cyan-500/20" */
    shadowColor?: string;
    /** Size variant. Default: "md" */
    size?: "sm" | "md" | "lg";
}

const SIZES = {
    sm: { container: "w-20 h-20 rounded-2xl", emoji: "text-4xl" },
    md: { container: "w-32 h-32 rounded-3xl", emoji: "text-6xl" },
    lg: { container: "w-44 h-44 rounded-[2rem]", emoji: "text-8xl" },
};

/**
 * Animated robot face component that cycles through emoji expressions.
 * Used for robots with display screens (T9, T10, G1, etc.).
 */
export function RobotFace({
    expressions = ["😊", "😄", "🤖", "👋", "✨", "🎯"],
    interval = 2000,
    borderColor = "border-cyan-500/40",
    shadowColor = "shadow-cyan-500/20",
    size = "md",
}: RobotFaceProps) {
    const [mood, setMood] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setMood((m) => (m + 1) % expressions.length), interval);
        return () => clearInterval(t);
    }, [expressions.length, interval]);

    const s = SIZES[size];

    return (
        <motion.div
            className={`${s.container} bg-gradient-to-br from-slate-700 to-slate-900 border-2 ${borderColor} flex items-center justify-center shadow-2xl ${shadowColor}`}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={mood}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`${s.emoji} select-none`}
                >
                    {expressions[mood]}
                </motion.span>
            </AnimatePresence>
        </motion.div>
    );
}
