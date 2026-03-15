import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ZoomIn } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface ParallaxGalleryItemProps {
    img: string;
    index: number;
    /** Feature title text shown as overlay */
    featureText?: string;
    /** Accent color class for the border-l indicator (e.g. "border-teal-500"). Default: "border-white/50" */
    accentBorder?: string;
    openLightbox: (index: number) => void;
}

/**
 * Parallax-scaling image gallery section used in standard product pages.
 * Shows a full-screen image with scroll-driven scale and opacity,
 * plus an optional feature title overlay with a colored left border.
 */
export function ParallaxGalleryItem({
    img,
    index,
    featureText,
    accentBorder = "border-white/50",
    openLightbox,
}: ParallaxGalleryItemProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.4]);

    return (
        <div ref={ref} className="relative h-screen w-full">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#050a14]">
                <motion.div
                    style={{ scale, opacity }}
                    className="absolute inset-0 w-full h-full"
                >
                    <button
                        onClick={() => openLightbox(index)}
                        className="w-full h-full cursor-zoom-in relative block focus:outline-none"
                    >
                        <ImageWithFallback
                            src={img}
                            alt={featureText || `Feature ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 md:to-black/40" />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <ZoomIn className="w-12 h-12 text-white opacity-0 hover:opacity-100 transition-opacity bg-black/40 p-3 rounded-full backdrop-blur-sm" />
                        </div>
                    </button>
                </motion.div>
                {featureText && (
                    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-end p-12 md:p-24">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`bg-black/40 backdrop-blur-xl border-l-4 ${accentBorder} p-6 rounded-r-xl max-w-md`}
                        >
                            <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-black mb-2">
                                Feature {index + 1}
                            </p>
                            <h3 className="text-white text-3xl md:text-5xl font-black tracking-tight drop-shadow-2xl uppercase leading-none">
                                {featureText}
                            </h3>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
}
