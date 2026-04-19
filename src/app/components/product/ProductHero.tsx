import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

type AccentClass = {
  scrollBar: string;
  focusRing: string;
};

const ACCENT_CLASSES: Record<string, AccentClass> = {
  cyan: { scrollBar: "from-cyan-500", focusRing: "focus-visible:ring-cyan-400" },
  emerald: { scrollBar: "from-emerald-500", focusRing: "focus-visible:ring-emerald-400" },
  amber: { scrollBar: "from-amber-500", focusRing: "focus-visible:ring-amber-400" },
  blue: { scrollBar: "from-blue-500", focusRing: "focus-visible:ring-blue-400" },
  teal: { scrollBar: "from-teal-500", focusRing: "focus-visible:ring-teal-400" },
  orange: { scrollBar: "from-orange-500", focusRing: "focus-visible:ring-orange-400" },
  sky: { scrollBar: "from-sky-500", focusRing: "focus-visible:ring-sky-400" },
  rose: { scrollBar: "from-rose-500", focusRing: "focus-visible:ring-rose-400" },
  pink: { scrollBar: "from-pink-500", focusRing: "focus-visible:ring-pink-400" },
  indigo: { scrollBar: "from-indigo-500", focusRing: "focus-visible:ring-indigo-400" },
  violet: { scrollBar: "from-violet-500", focusRing: "focus-visible:ring-violet-400" },
  green: { scrollBar: "from-green-500", focusRing: "focus-visible:ring-green-400" },
};

export interface ProductHeroProps {
  /** KEENON model name displayed in the alt text. */
  productName: string;
  /** Tailwind accent color key (e.g. "cyan", "emerald", "amber"). */
  accentColor: string;
  /** Hero image URL (used as poster while video loads, or alone if no videoId). */
  imageSrc: string;
  /** Optional YouTube video ID for a looping muted background video. */
  videoId?: string;
  /** If true with videoId, shows the image for `imageDelayMs` then swaps to video. */
  delayVideoSwap?: boolean;
  /** Delay (ms) before swapping image to video when `delayVideoSwap`. Default 3000. */
  imageDelayMs?: number;
}

/**
 * Shared hero section for product pages.
 *
 * - Scroll-triggered fade/scale transitions (respects prefers-reduced-motion).
 * - Image or muted looping YouTube video backdrop.
 * - "Scroll to discover" indicator with accent color.
 * - Image is not an interactive element but has meaningful alt.
 */
export function ProductHero({
  productName,
  accentColor,
  imageSrc,
  videoId,
  delayVideoSwap = false,
  imageDelayMs = 3000,
}: ProductHeroProps) {
  const [showVideo, setShowVideo] = useState(!delayVideoSwap);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    if (!delayVideoSwap || !videoId) return;
    const t = setTimeout(() => setShowVideo(true), imageDelayMs);
    return () => clearTimeout(t);
  }, [delayVideoSwap, videoId, imageDelayMs]);

  const accent = ACCENT_CLASSES[accentColor] ?? ACCENT_CLASSES.cyan;

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      aria-label={`KEENON ${productName} hero`}
    >
      <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0">
        {/* Poster image — always rendered first, then overlaid by video if present */}
        {(!videoId || !showVideo) && (
          <ImageWithFallback
            src={imageSrc}
            alt={`KEENON ${productName} robot`}
            className="w-full h-full object-cover"
          />
        )}

        {videoId && showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden scale-110"
            aria-hidden="true"
          >
            <iframe
              className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 aspect-video"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1`}
              title={`KEENON ${productName} hero video`}
              allow="autoplay; fullscreen"
            />
          </motion.div>
        )}
      </motion.div>

      {/* Gradient fade into page */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-transparent" aria-hidden="true" />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10" aria-hidden="true">
        <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">Scroll to discover</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-1 h-12 bg-gradient-to-b ${accent.scrollBar} to-transparent rounded-full`}
        />
      </div>
    </section>
  );
}
