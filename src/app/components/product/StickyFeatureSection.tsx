import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ZoomIn } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface StickyFeatureSectionProps {
    img: string;
    alt: string;
    index: number;
    openLightbox: (index: number) => void;
    /** Enable parallax y-shift and breathing scale (C40/C30 style). Default: true */
    parallax?: boolean;
    /** Show ZoomIn icon on hover (C40/C30 style). Default: true */
    showZoomIcon?: boolean;
}

/**
 * Full-screen sticky parallax image section used in premium product pages.
 * C40/C30 use the full parallax + ZoomIn variant.
 * T11 uses a simplified version without y/scale transforms.
 */
export function StickyFeatureSection({
    img,
    alt,
    index,
    openLightbox,
    parallax = true,
    showZoomIcon = true,
}: StickyFeatureSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

    return (
        <div ref={containerRef} className="relative h-[80vh] md:h-screen w-full">
            <div className="sticky top-0 h-[80vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full"
                >
                    <button
                        onClick={() => openLightbox(index)}
                        className="w-full h-full cursor-zoom-in group"
                    >
                        <motion.div
                            style={parallax ? { y, scale } : undefined}
                            className="w-full h-full"
                        >
                            <ImageWithFallback
                                src={img}
                                alt={alt}
                                className="w-full h-full object-cover select-none"
                            />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 md:to-black/60" />
                        {showZoomIcon && (
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <ZoomIn className="w-16 h-16 text-white/50 bg-black/30 p-4 rounded-full backdrop-blur-md" />
                            </div>
                        )}
                    </button>
                </motion.div>

                <div className="relative z-10 max-w-[95rem] mx-auto px-6 w-full flex flex-col items-start justify-end pb-12 md:pb-16 h-full pointer-events-none" />
            </div>
        </div>
    );
}
