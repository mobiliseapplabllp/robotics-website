import { useState } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { type AccentColor, getAccentClasses } from "./colors";

interface VideoSectionProps {
    /** YouTube video ID */
    videoId: string;
    /** Video title for accessibility */
    title?: string;
    /**
     * Display variant:
     * - "inline": Standard embedded player in page flow
     * - "cinematic": Wide aspect ratio with dramatic spacing
     * - "theater": Dark background with glow effect
     */
    variant?: "inline" | "cinematic" | "theater";
    /** Accent color key for play button. Default: "blue" */
    accentColor?: AccentColor;
    /** Optional poster image URL. Uses YouTube thumbnail if not provided. */
    posterImage?: string;
}

/**
 * Lazy-loaded YouTube video section.
 * Shows a poster image with play button; loads iframe on click.
 * Supports multiple visual variants to match page design.
 */
export function VideoSection({
    videoId,
    title = "Product Video",
    variant = "inline",
    accentColor = "blue",
    posterImage,
}: VideoSectionProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const c = getAccentClasses(accentColor);
    const poster = posterImage || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    const containerClasses = {
        inline: "py-16 bg-[#050a14]",
        cinematic: "py-24 bg-[#030712]",
        theater: "py-32 bg-[#020408]",
    };

    const aspectClasses = {
        inline: "aspect-video max-w-5xl",
        cinematic: "aspect-[21/9] max-w-7xl",
        theater: "aspect-video max-w-6xl",
    };

    return (
        <section className={containerClasses[variant]}>
            <div className={`mx-auto px-6 ${aspectClasses[variant]}`}>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/5">
                    {isPlaying ? (
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                            title={title}
                            allow="autoplay; fullscreen; encrypted-media"
                            allowFullScreen
                        />
                    ) : (
                        <button
                            onClick={() => setIsPlaying(true)}
                            className="w-full h-full relative group cursor-pointer"
                        >
                            <img
                                src={poster}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                            >
                                <div className={`w-20 h-20 rounded-full ${c.bg500} flex items-center justify-center shadow-2xl`}>
                                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                                </div>
                            </motion.div>
                            <div className="absolute bottom-4 left-4 text-white/60 text-sm font-medium">
                                {title}
                            </div>
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
