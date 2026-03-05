import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
    ChevronRight, ArrowRight, Play, CheckCircle, Star, Zap, Shield, Battery,
    Wifi, Volume2, ChevronDown, Download, Phone, ExternalLink, Bot,
    Navigation, Eye, Clock, Layers, Award, TrendingUp, Users, ZoomIn, X, Activity
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

/* ─── image assets ─────────────────────────────────────── */
const IMG_HERO = "https://static.keenon.com/uploads/2025/01/07/5b5be29c47bb403fa173285a3deba3d7.jpg?x-oss-process=image/format,webp";
const IMG_GALLERY = [
    "https://static.keenon.com/uploads/2025/01/07/5b5be29c47bb403fa173285a3deba3d7.jpg?x-oss-process=image/format,webp",
    "https://static.keenon.com/uploads/2025/01/07/2e1806fa93a4413da0364159c2a7f611.webp"
];

/* ─── data ──────────────────────────────────────────────── */
const SPECS = [
    {
        category: "Pro Performance", items: [
            { label: "Tray Capacity", value: "3 Trays × 10 kg (40kg total)" },
            { label: "Adjustable Layers", value: "19.5cm, 16.9cm, 25.3cm, 22.8cm" },
            { label: "Battery Life", value: "Up to 18 hours" },
            { label: "Charging Time", value: "3 hours" },
        ]
    },
    {
        category: "Chassis & Ride", items: [
            { label: "Suspension", value: "Vehicle-grade independent suspension" },
            { label: "Shock Absorption", value: "Active spring-damping" },
            { label: "Navigation", value: "LIDAR 3D + SLAM" },
            { label: "Obstacle Avoidance", value: "3D depth camera + LIDAR" },
        ]
    },
];

const FEATURES = [
    {
        id: "suspension",
        icon: "🏎️",
        iconComponent: Activity,
        title: "Vehicle-Grade Suspension",
        subtitle: "Ultra-Smooth Delivery",
        description: "The T9 Pro is the only robot in its class featuring true independent suspension. It glides over thresholds, carpets, and uneven flooring in premium Indian hotels with zero vibration, ensuring that soups, drinks, and delicate plated meals arrive perfectly presented.",
        image: IMG_GALLERY[1],
        color: "cyan",
        highlights: [
            "Independent spring-damping system",
            "Spill-proof movement algorithm",
            "Dynamic load balancing",
            "Zero-vibration delivery guarantee",
        ],
    },
    {
        id: "battery",
        icon: "🔋",
        iconComponent: Battery,
        title: "18-Hour Powerhouse",
        subtitle: "Endurance for Double Shifts",
        description: "Equipped with a high-capacity lithium-ion pack, the T9 Pro delivers a market-leading 18 hours of continuous operation. Combined with its smart auto-charging dock, it ensures your facility has round-the-clock robotic assistance from breakfast through late-night room service.",
        image: IMG_HERO,
        color: "emerald",
        highlights: [
            "18+ hour continuous battery life",
            "High-density LFP safety cells",
            "Autonomous return-to-base",
            "Fast 3-hour full recharge",
        ],
    },
];

const COLOR_MAP: Record<string, { text: string; bg: string; border: string; glow: string; gradient: string }> = {
    cyan: { text: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-400/30", glow: "shadow-cyan-500/20", gradient: "from-cyan-500 to-cyan-700" },
    emerald: { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-400/30", glow: "shadow-emerald-500/20", gradient: "from-emerald-500 to-emerald-700" },
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
                            className="bg-black/40 backdrop-blur-xl border-l-4 border-cyan-400 p-6 rounded-r-xl max-w-md">
                            <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-black mb-2">Feature {index + 1}</p>
                            <h3 className="text-white text-3xl md:text-5xl font-black tracking-tight drop-shadow-2xl uppercase leading-none">{featureText}</h3>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
}

function RobotFace() {
    const [mood, setMood] = useState(0);
    const moods = ["💎", "⚡", "✨", "🎯", "🌟", "😊"];
    useEffect(() => {
        const t = setInterval(() => setMood((m) => (m + 1) % moods.length), 2000);
        return () => clearInterval(t);
    }, []);
    return (
        <motion.div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-slate-700 to-slate-900 border-2 border-cyan-400/40 flex items-center justify-center shadow-2xl shadow-cyan-400/20"
            animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
            <AnimatePresence mode="wait">
                <motion.span key={mood} initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.3 }} className="text-6xl select-none">{moods[mood]}</motion.span>
            </AnimatePresence>
        </motion.div>
    );
}

/* ─── main component ────────────────────────────────────── */
export function T9ProPage() {
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
                    <ImageWithFallback src={IMG_HERO} alt="KEENON T9 Pro" className="w-full h-full object-cover opacity-15" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#050a14]/60 via-[#050a14]/40 to-[#050a14]" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-white/30 text-sm mb-8">
                        <Link to="/" className="hover:text-white/60">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/products" className="hover:text-white/60">Products</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-cyan-400">KEENON T9 Pro</span>
                    </div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 mb-6">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest">Ultra-Premium Edition</span>
                        </div>
                        <div className="flex justify-center mb-8"><RobotFace /></div>
                        <h1 className="text-7xl sm:text-8xl lg:text-[10rem] font-black leading-none mb-4 tracking-tighter">
                            <span className="bg-gradient-to-br from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent text-6xl">T9 Pro</span>
                        </h1>
                        <p className="text-2xl text-cyan-400 font-semibold mb-6 tracking-wide">"The Gold Standard of Delivery"</p>
                        <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
                            Enhanced 18-hour endurance. Vehicle-grade independent suspension. Refined aesthetics for the world's most luxurious establishments.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white font-black text-lg shadow-2xl shadow-cyan-500/30">Go Pro <ArrowRight className="inline ml-2" /></Link>
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
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-16">Uncompromising <span className="text-cyan-400">Performance.</span></h2>
                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {SPECS.map((cat, i) => (
                            <button key={i} onClick={() => setActiveSpecCat(i)}
                                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeSpecCat === i ? "bg-cyan-500 text-white" : "bg-white/5 border border-white/10 text-white/50"}`}>{cat.category}</button>
                        ))}
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 text-left">
                        {SPECS[activeSpecCat].items.map((item) => (
                            <div key={item.label} className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-xl">
                                <span className="text-white/50 text-sm">{item.label}</span>
                                <span className="text-cyan-400 font-bold text-sm">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 relative overflow-hidden text-center">
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h2 className="text-5xl lg:text-7xl font-black text-white mb-6">Upgrade to <span className="text-cyan-400">Excellence.</span></h2>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white font-black text-xl shadow-2xl shadow-cyan-500/40">Book Premium Trial <ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

        </div>
    );
}
