import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, ChevronLeft, ChevronRight, Pause } from "lucide-react";
import { Link } from "react-router";

interface VideoItem {
  id: string;
  robotName: string;
  tagline: string;
  category: "delivery" | "cleaning" | "service";
  videoId: string;
  accentColor: string;
  accentClass: string;
  borderClass: string;
  bgClass: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: "c40",
    robotName: "C40",
    tagline: "Industrial-Grade Smart Cleaning Robot",
    category: "cleaning",
    videoId: "Gd4mC4TcF6s",
    accentColor: "orange",
    accentClass: "text-orange-400",
    borderClass: "border-orange-400/40",
    bgClass: "bg-orange-500/10",
  },
  {
    id: "t9",
    robotName: "T9",
    tagline: "Next-Gen Intelligent Delivery Robot",
    category: "delivery",
    videoId: "n_MpADYaGN0",
    accentColor: "cyan",
    accentClass: "text-cyan-400",
    borderClass: "border-cyan-400/40",
    bgClass: "bg-cyan-500/10",
  },
  {
    id: "t11",
    robotName: "T11",
    tagline: "High-Capacity Smart Delivery Robot",
    category: "delivery",
    videoId: "XVh7BkgMhuk",
    accentColor: "amber",
    accentClass: "text-amber-400",
    borderClass: "border-amber-400/40",
    bgClass: "bg-amber-500/10",
  },
  {
    id: "s100",
    robotName: "S100",
    tagline: "Intelligent Reception & Service Robot",
    category: "service",
    videoId: "nWFOEiiLzTc",
    accentColor: "pink",
    accentClass: "text-pink-400",
    borderClass: "border-pink-400/40",
    bgClass: "bg-pink-500/10",
  },
  {
    id: "t10",
    robotName: "T10",
    tagline: "Premium Butler Robot for Elite Hospitality",
    category: "delivery",
    videoId: "0nPaHJVqO8k",
    accentColor: "violet",
    accentClass: "text-violet-400",
    borderClass: "border-violet-400/40",
    bgClass: "bg-violet-500/10",
  },
  {
    id: "s300",
    robotName: "S300",
    tagline: "Advanced Multi-Function Service Robot",
    category: "service",
    videoId: "GST1_KOT54Q",
    accentColor: "indigo",
    accentClass: "text-indigo-400",
    borderClass: "border-indigo-400/40",
    bgClass: "bg-indigo-500/10",
  },
  {
    id: "t8",
    robotName: "T8",
    tagline: "The Smart Food Delivery Robot",
    category: "delivery",
    videoId: "7PaZSanCbHI",
    accentColor: "blue",
    accentClass: "text-blue-400",
    borderClass: "border-blue-400/40",
    bgClass: "bg-blue-500/10",
  },
  {
    id: "c20",
    robotName: "C20",
    tagline: "Compact Autonomous Cleaning Robot",
    category: "cleaning",
    videoId: "EW4Td73DFEI",
    accentColor: "green",
    accentClass: "text-green-400",
    borderClass: "border-green-400/40",
    bgClass: "bg-green-500/10",
  },
  {
    id: "w3",
    robotName: "W3",
    tagline: "Intelligent Commercial Scrubbing Robot",
    category: "cleaning",
    videoId: "IhBv7JIJQ5M",
    accentColor: "teal",
    accentClass: "text-teal-400",
    borderClass: "border-teal-400/40",
    bgClass: "bg-teal-500/10",
  },
];

const CATEGORY_LABEL: Record<string, string> = {
  delivery: "Delivery",
  cleaning: "Cleaning",
  service: "Service",
};

const CATEGORY_STYLE: Record<string, string> = {
  delivery: "text-cyan-400 border-cyan-400/30 bg-cyan-500/10",
  cleaning: "text-green-400 border-green-400/30 bg-green-500/10",
  service: "text-pink-400 border-pink-400/30 bg-pink-500/10",
};

function ytThumb(videoId: string) {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

export function VideoCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  const active = VIDEOS[activeIdx];

  const goTo = useCallback(
    (idx: number) => {
      setActiveIdx(idx);
      setPlaying(false);
      // Scroll thumbnail into view
      setTimeout(() => {
        const strip = stripRef.current;
        if (!strip) return;
        const thumb = strip.children[idx] as HTMLElement;
        if (thumb) {
          thumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }
      }, 50);
    },
    []
  );

  const prev = useCallback(() => goTo((activeIdx - 1 + VIDEOS.length) % VIDEOS.length), [activeIdx, goTo]);
  const next = useCallback(() => goTo((activeIdx + 1) % VIDEOS.length), [activeIdx, goTo]);

  // Auto-advance every 8 s when not playing
  useEffect(() => {
    if (!autoPlay || playing) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }
    autoPlayRef.current = setInterval(() => {
      setActiveIdx((i) => (i + 1) % VIDEOS.length);
      setPlaying(false);
    }, 8000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [autoPlay, playing, activeIdx]);

  return (
    <section className="py-24 bg-[#030710] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-900/10 rounded-full blur-3xl`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/60 text-sm font-semibold mb-4 uppercase tracking-wider">
            See It In Action
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Watch KEENON Robots{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              In Action
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Official product videos for all 9 KEENON robot models — click any thumbnail to switch, or press play to watch.
          </p>
        </motion.div>

        {/* Main player area */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Player — 2/3 width */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.videoId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                {/* Label bar */}
                <div className={`flex items-center gap-3 mb-3`}>
                  <span className={`px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${CATEGORY_STYLE[active.category]}`}>
                    {CATEGORY_LABEL[active.category]}
                  </span>
                  <span className={`text-xl font-black text-white`}>KEENON {active.robotName}</span>
                  <span className={`text-sm font-semibold ${active.accentClass} opacity-70 hidden sm:inline`}>— {active.tagline}</span>
                </div>

                {/* Video frame */}
                <div className={`relative rounded-2xl overflow-hidden border ${active.borderClass} shadow-2xl`}
                  style={{ boxShadow: `0 0 60px -10px var(--tw-shadow-color, rgba(0,212,255,0.15))` }}
                >
                  {!playing ? (
                    /* Thumbnail + play overlay */
                    <div className="relative aspect-video bg-[#0d1525] cursor-pointer group" onClick={() => setPlaying(true)}>
                      <img
                        src={ytThumb(active.videoId)}
                        alt={`KEENON ${active.robotName} video`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // fallback to hq thumbnail
                          (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${active.videoId}/hqdefault.jpg`;
                        }}
                      />
                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10 group-hover:from-black/60 transition-all duration-300" />

                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-20 h-20 rounded-full ${active.bgClass} border-2 ${active.borderClass} backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                          <Play className={`w-8 h-8 ${active.accentClass} ml-1`} fill="currentColor" />
                        </div>
                      </div>

                      {/* Robot name watermark */}
                      <div className="absolute bottom-4 left-5">
                        <div className="text-white/30 text-6xl font-black leading-none select-none">{active.robotName}</div>
                      </div>

                      {/* Duration badge */}
                      <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-white/80 text-xs font-semibold flex items-center gap-1.5">
                        <Play className="w-3 h-3" fill="currentColor" /> Official Video
                      </div>
                    </div>
                  ) : (
                    /* Live YouTube embed */
                    <div className="aspect-video bg-[#0d1525]">
                      <iframe
                        key={active.videoId}
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${active.videoId}?autoplay=1&rel=0&modestbranding=1`}
                        title={`KEENON ${active.robotName} Official Video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  )}
                </div>

                {/* Controls bar */}
                <div className="flex items-center justify-between mt-3 px-1">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prev}
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={next}
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <span className="text-white/30 text-sm">
                      {activeIdx + 1} / {VIDEOS.length}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Auto-play toggle */}
                    <button
                      onClick={() => setAutoPlay((a) => !a)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
                        autoPlay
                          ? "border-cyan-400/40 bg-cyan-500/10 text-cyan-400"
                          : "border-white/10 bg-white/5 text-white/40"
                      }`}
                    >
                      {autoPlay ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                      {autoPlay ? "Auto-playing" : "Auto-play off"}
                    </button>

                    <Link
                      to={`/products/${active.id}`}
                      className={`px-4 py-1.5 rounded-lg border ${active.borderClass} ${active.bgClass} ${active.accentClass} text-xs font-bold hover:opacity-80 transition-opacity`}
                    >
                      View {active.robotName} →
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Playlist panel — 1/3 width */}
          <div className="space-y-2 lg:max-h-[calc(9/16*100%+56px)] lg:overflow-y-auto pr-1 scrollbar-hide">
            {VIDEOS.map((v, i) => (
              <button
                key={v.id}
                onClick={() => { goTo(i); setAutoPlay(false); }}
                className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 text-left group ${
                  i === activeIdx
                    ? `${v.borderClass} ${v.bgClass}`
                    : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
                }`}
              >
                {/* Thumbnail */}
                <div className="relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border border-white/10">
                  <img
                    src={ytThumb(v.videoId)}
                    alt={`KEENON ${v.robotName}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg`;
                    }}
                  />
                  {i === activeIdx && playing ? (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="flex gap-0.5">
                        {[0, 1, 2].map((b) => (
                          <motion.div
                            key={b}
                            animate={{ scaleY: [1, 1.8, 1] }}
                            transition={{ repeat: Infinity, duration: 0.8, delay: b * 0.15 }}
                            className={`w-1 h-3 rounded-full ${v.bgClass} border ${v.borderClass}`}
                            style={{ background: "currentColor" }}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-4 h-4 text-white" fill="white" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className={`text-xs font-bold uppercase tracking-wide ${CATEGORY_STYLE[v.category].split(" ")[0]}`}>
                      {CATEGORY_LABEL[v.category]}
                    </span>
                  </div>
                  <div className={`font-black text-sm ${i === activeIdx ? v.accentClass : "text-white"}`}>
                    KEENON {v.robotName}
                  </div>
                  <div className="text-white/40 text-xs truncate">{v.tagline}</div>
                </div>

                {/* Active indicator */}
                {i === activeIdx && (
                  <div className={`w-1.5 h-8 rounded-full ${v.bgClass} border ${v.borderClass} shrink-0`} style={{ background: "currentColor" }} />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom thumbnail strip (mobile / visual) */}
        <div className="mt-8 relative">
          <div ref={stripRef} className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {VIDEOS.map((v, i) => (
              <button
                key={v.id}
                onClick={() => { goTo(i); setAutoPlay(false); }}
                className={`shrink-0 relative rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                  i === activeIdx
                    ? `${v.borderClass} scale-105 shadow-lg`
                    : "border-white/10 opacity-50 hover:opacity-80"
                }`}
                style={{ width: 96, height: 64 }}
              >
                <img
                  src={ytThumb(v.videoId)}
                  alt={`KEENON ${v.robotName}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg`;
                  }}
                />
                <div className={`absolute bottom-0 left-0 right-0 py-0.5 text-center text-[10px] font-black ${
                  i === activeIdx ? v.accentClass : "text-white/60"
                } bg-black/60`}>
                  {v.robotName}
                </div>
              </button>
            ))}
          </div>

          {/* Progress bar */}
          {autoPlay && !playing && (
            <div className="mt-3 h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                key={activeIdx}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 8, ease: "linear" }}
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
