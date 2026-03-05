import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
    ChevronRight, ArrowRight, Play, CheckCircle, Star, Zap, Shield, Battery,
    Wifi, Volume2, ChevronDown, Download, Phone, ExternalLink, Bot,
    Navigation, Eye, Clock, Layers, Award, TrendingUp, Users, ZoomIn, X, Wind, Sparkles
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

/* ─── image assets ─────────────────────────────────────── */
const IMG_HERO = "https://static.keenon.com/uploads/2025/01/07/5bc901fd4a6a4f8d925eee15d5282b28.jpg?x-oss-process=image/format,webp";
const IMG_GALLERY = [
    "https://static.keenon.com/uploads/2025/01/07/de67edd2fbee407aaadd617ded3e9fdf.jpg?x-oss-process=image/format,webp"
];

/* ─── data ──────────────────────────────────────────────── */
const SPECS = [
    {
        category: "3-in-1 Cleaning", items: [
            { label: "Cleaning Width", value: "610 mm" },
            { label: "Cleaning Area", value: "2,500 m² per charge" },
            { label: "Functions", value: "Sweep, Vacuum, Dust Mop" },
        ]
    },
    {
        category: "Control & Power", items: [
            { label: "Operation", value: "Manual & Automated" },
            { label: "Battery Life", value: "4+ hours" },
            { label: "Suction Power", value: "High-Efficiency Brushless" },
            { label: "Handle", value: "Extendable Ergonomic" },
        ]
    },
];

const FEATURES = [
    {
        id: "dryclean",
        icon: "🧹",
        iconComponent: Wind,
        title: "3-in-1 Dry Cleaning",
        subtitle: "Complete Surface Mastery",
        description: "The C30 is the ultimate solution for dry commercial floor maintenance. It combines high-speed sweeping, powerful industrial vacuuming, and fine-particle dust mopping in a single Pass. Perfect for carpets and hard floors in high-traffic retail and office environments.",
        image: IMG_GALLERY[0],
        color: "lime",
        highlights: [
            "Sweeping + Vacuuming + Dust Mopping",
            "610mm extra-wide cleaning path",
            "Large-capacity 2,500 m² coverage",
            "Auto-switching surface detection",
        ],
    },
    {
        id: "hybrid",
        icon: "🎛️",
        iconComponent: Layers,
        title: "Hybrid Control System",
        subtitle: "Autonomous Power, Manual Precision",
        description: "Equipped with an innovative extendable handle, the C30 allows for seamless switching between fully autonomous cleaning and manual spot-cleaning. Use the handle for quick spills or let the robot follow its AI-mapped route for overnight deep cleans.",
        image: IMG_HERO,
        color: "yellow",
        highlights: [
            "Extendable ergonomic manual handle",
            "One-tap autonomous mission start",
            "KEENON App live task tracking",
            "Rapid map-building technology",
        ],
    },
];

const COLOR_MAP: Record<string, { text: string; bg: string; border: string; glow: string; gradient: string }> = {
    lime: { text: "text-lime-400", bg: "bg-lime-500/10", border: "border-lime-400/30", glow: "shadow-lime-500/20", gradient: "from-lime-500 to-lime-700" },
    yellow: { text: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-400/30", glow: "shadow-yellow-500/20", gradient: "from-yellow-500 to-yellow-700" },
};

/* ─── sub-components ────────────────────────────────────── */
function ParallaxGalleryItem({ img, index, featureText, accent, openLightbox }: any) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.4]);

    return (
        <div ref={ref} className="relative h-screen w-full">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#050a14]">
                <motion.div style={{ scale, opacity }} className="absolute inset-0 w-full h-full">
                    <button onClick={() => openLightbox(index)} className="w-full h-full cursor-zoom-in relative block focus:outline-none">
                        <ImageWithFallback src={img} alt={featureText} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 md:to-black/40" />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <ZoomIn className="w-12 h-12 text-white opacity-0 hover:opacity-100 transition-opacity bg-black/40 p-3 rounded-full backdrop-blur-sm" />
                        </div>
                    </button>
                </motion.div>
                {featureText && (
                    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-end p-12 md:p-24">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="bg-black/40 backdrop-blur-xl border-l-4 border-lime-500 p-6 rounded-r-xl max-w-md">
                            <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-black mb-2">Feature {index + 1}</p>
                            <h3 className="text-white text-3xl md:text-5xl font-black tracking-tight drop-shadow-2xl uppercase leading-none">{featureText}</h3>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
}

/* ─── main component ────────────────────────────────────── */
export function C30Page() {
    const [activeSpecCat, setActiveSpecCat] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);

    const allImages = [IMG_HERO, ...IMG_GALLERY];

    function openLightbox(i: number) { setLightboxIndex(i); setLightboxOpen(true); }
    function closeLightbox() { setLightboxOpen(false); }

    return (
        <div className="min-h-screen bg-[#050a14] text-white overflow-x-hidden">

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
                        <button onClick={closeLightbox} className="absolute top-5 right-5 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white"><X className="w-5 h-5" /></button>
                        <motion.img key={lightboxIndex} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} src={allImages[lightboxIndex]}
                            className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero */}
            <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                <motion.div style={{ y: heroY }} className="absolute inset-0">
                    <ImageWithFallback src={IMG_HERO} alt="KEENON C30" className="w-full h-full object-cover opacity-20" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#050a14]/60 via-[#050a14]/40 to-[#050a14]" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-white/30 text-sm mb-8">
                        <Link to="/" className="hover:text-white/60">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/products" className="hover:text-white/60">Products</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-lime-400">KEENON C30</span>
                    </div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-lime-500/40 bg-lime-500/10 mb-6">
                            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                            <span className="text-lime-400 text-sm font-bold uppercase tracking-widest">3-in-1 Dry Cleaning Specialist</span>
                        </div>
                        <h1 className="text-7xl sm:text-8xl lg:text-[10rem] font-black leading-none mb-4 tracking-tighter">
                            <span className="bg-gradient-to-br from-white via-lime-100 to-lime-400 bg-clip-text text-transparent">C30</span>
                        </h1>
                        <p className="text-2xl text-lime-400 font-semibold mb-6 tracking-wide">"Intelligence You Can Handle"</p>
                        <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
                            Sweeping, vacuuming, and mopping in one. Hybrid manual-auto control. Cleans up to 2,500 m² per charge.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-lime-500 to-yellow-600 rounded-2xl text-white font-black text-lg shadow-2xl shadow-lime-500/30">Go Hybrid Cleaning <ArrowRight className="inline ml-2" /></Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Feature Parallax */}
            <div className="w-full">
                {FEATURES.map((feat, i) => (
                    <ParallaxGalleryItem key={feat.id} img={feat.image} index={i} featureText={feat.title} accent={feat.color} openLightbox={openLightbox} />
                ))}
            </div>

            {/* Full Specs */}
            <section className="py-28 bg-[#030710] border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-16">Dry Clean <span className="text-lime-400">Performance.</span></h2>
                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {SPECS.map((cat, i) => (
                            <button key={i} onClick={() => setActiveSpecCat(i)}
                                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeSpecCat === i ? "bg-lime-500 text-white" : "bg-white/5 border border-white/10 text-white/50"}`}>{cat.category}</button>
                        ))}
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 text-left">
                        {SPECS[activeSpecCat].items.map((item) => (
                            <div key={item.label} className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-xl">
                                <span className="text-white/50 text-sm">{item.label}</span>
                                <span className="text-lime-400 font-bold text-sm">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 relative overflow-hidden text-center">
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h2 className="text-5xl lg:text-7xl font-black text-white mb-6">Revolutionize your <span className="text-lime-400">Floors.</span></h2>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-lime-500 to-yellow-600 rounded-2xl text-white font-black text-xl shadow-2xl shadow-lime-500/40">Request Site Assessment <ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

        </div>
    );
}
