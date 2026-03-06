import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
    ChevronRight, ArrowRight, Play, CheckCircle, Star, Zap, Shield, Battery,
    Wifi, Volume2, ChevronDown, Download, Phone, ExternalLink, Bot,
    Navigation, Eye, Clock, Layers, Award, TrendingUp, Users, ZoomIn, X, Droplets, HardHat,
    Maximize, Settings, ZapOff, Cloud
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

/* ─── local image assets ────────────────────────────────── */
const IMG_HERO = "/images/products/c40/c40_hero.webp";
const IMG_FEATURES = [
    "/images/products/c40/c40_feature_5.webp",
    "/images/products/c40/c40_feature_6.webp",
    "/images/products/c40/c40_feature_4.webp",
    "/images/products/c40/c40_feature_1.webp",
    "/images/products/c40/c40_feature_2.webp",
    "/images/products/c40/c40_feature_3.webp",
    "/images/products/c40/c40_feature_7.webp",
    "/images/products/c40/c40_feature_8.webp",
    "/images/products/c40/c40_feature_9.webp",
];

const FEATURE_TEXTS = [
    { title: "Agile Cleaning Header", desc: "A 400mm wide brush and 55cm body width allow for efficient cleaning in passages as narrow as 65cm, maximizing accessibility." },
    { title: "Multi-Modal 3D Perception", desc: "Equipped with ten detection components including LiDAR and Dual Stereo Vision for safe navigation in complex, crowded environments." },
    { title: "Continuous Operation", desc: "The industrial-grade 5-second battery swap system allows for 24/7 productivity without long charging downtimes." },
    { title: "Triple-Brush Mastery", desc: "The triple-brush system improves cleaning efficiency and adapts to carpets and mixed hard floors without requiring component changes." },
    { title: "Fast-Drying Technology", desc: "Advanced suction and drying mechanisms ensure floors are safe and walk-ready immediately after scrubbing, enhancing site safety." },
    { title: "Hygienic Maintenance", desc: "A removable and washable dirty water tank ensures the highest sanitation standards with minimal effort and simplified cleaning routines." },
    { title: "Four-Function Versatility", desc: "Sweeping, vacuuming, scrubbing, and dust pushing—addressed diverse cleaning challenges across marble, wood, and tiles." },
    { title: "Smart Control Dashboard", desc: "Monitor your fleet in real-time. Schedule tasks, receive instant alerts, and generate detailed results via the App or Web Dashboard." },
    { title: "Autonomous Workstation", desc: "Zero-touch maintenance with automatic charging, sewage drainage, and detergent replenishment for true hands-free operation." },
];

/* ─── data ──────────────────────────────────────────────── */
const SPECS = [
    {
        category: "Industrial Power", items: [
            { label: "Cleaning Width", value: "720 mm" },
            { label: "Efficiency", value: "4,000 m²/h" },
            { label: "Clean Water Tank", value: "120 L" },
            { label: "Dirty Water Tank", value: "120 L" },
            { label: "Brush Motor", value: "2 × 400W" },
        ]
    },
    {
        category: "Intelligence", items: [
            { label: "Mapping Area", value: "50,000 m²" },
            { label: "Navigation", value: "LIDAR + Vision SLAM" },
            { label: "Obstacle Perception", value: "360° Multi-Sensor" },
            { label: "IoT Platform", value: "KEENON Cloud 2.0" },
            { label: "Max Speed", value: "1.2 m/s" },
        ]
    },
];

/* ─── sub-components ────────────────────────────────────── */
function StickyFeatureSection({ img, index, text, openLightbox }: any) {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className="relative h-screen w-full">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0 w-full h-full">
                    <button onClick={() => openLightbox(index)} className="w-full h-full cursor-zoom-in group">
                        <ImageWithFallback src={img} alt={text.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 md:to-black/60" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <ZoomIn className="w-16 h-16 text-white/50 bg-black/30 p-4 rounded-full backdrop-blur-md" />
                        </div>
                    </button>
                </motion.div>

                <div className="relative z-10 max-w-[95rem] mx-auto px-6 w-full flex flex-col items-start justify-end pb-12 md:pb-16 h-full pointer-events-none" />
            </div>
        </div>
    );
}

/* ─── main component ────────────────────────────────────── */
export function C40Page() {
    const [activeSpecCat, setActiveSpecCat] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const allImages = [IMG_HERO, ...IMG_FEATURES];

    function openLightbox(i: number) { setLightboxIndex(i); setLightboxOpen(true); }
    function closeLightbox() { setLightboxOpen(false); }

    return (
        <div className="min-h-screen bg-[#050a14] text-white overflow-x-hidden selection:bg-orange-500 selection:text-white">

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4" onClick={closeLightbox}>
                        <button onClick={closeLightbox} className="absolute top-8 right-8 w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors z-[110]"><X className="w-8 h-8" /></button>
                        <motion.img key={lightboxIndex} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                            src={allImages[lightboxIndex]} className="max-w-full max-h-full object-contain rounded-lg shadow-[0_0_100px_rgba(249,115,22,0.15)]" onClick={(e) => e.stopPropagation()} />

                        <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center text-white/40 text-sm font-bold uppercase tracking-widest z-[110]">
                            <span>Industrial Cleaning Titan</span>
                            <span>Image {lightboxIndex + 1} / {allImages.length}</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
                    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden scale-110">
                        <iframe
                            className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 aspect-video"
                            src="https://www.youtube.com/embed/Gd4mC4TcF6s?autoplay=1&mute=1&controls=0&loop=1&playlist=Gd4mC4TcF6s&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
                            title="KEENON C40 Hero Video"
                            allow="autoplay; fullscreen"
                        />
                    </div>
                    <div className="absolute inset-0 bg-transparent z-10" />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-black/40" />

                <div className="absolute bottom-12 right-12 z-20">
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
                        <Link to="/contact" className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full text-white font-black text-lg shadow-[0_0_40px_rgba(249,115,22,0.3)] hover:shadow-[0_0_60px_rgba(249,115,22,0.5)] transition-all flex items-center gap-3">
                            Talk To Experts <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">Scroll to Discover</span>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-12 bg-gradient-to-b from-orange-500 to-transparent rounded-full" />
                </div>
            </section>

            {/* Sticky Reveal Gallery */}
            <div className="w-full relative z-20">
                {IMG_FEATURES.map((img, i) => (
                    <StickyFeatureSection key={i} img={img} index={i} text={FEATURE_TEXTS[i]} openLightbox={(idx: number) => openLightbox(idx + 1)} />
                ))}
            </div>

            {/* Comprehensive Specs */}
            <section className="py-32 bg-[#030712] relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter italic">Technical <span className="text-orange-500">Superiority.</span></h2>
                        <p className="text-white/40 text-xl max-w-2xl mx-auto">No placeholders. No compromises. Just pure industrial innovation.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {SPECS.map((cat, i) => (
                            <button key={i} onClick={() => setActiveSpecCat(i)}
                                className={`px-8 py-4 rounded-full text-base font-black uppercase tracking-widest transition-all ${activeSpecCat === i
                                    ? "bg-orange-500 text-white shadow-[0_0_30px_rgba(249,115,22,0.4)]"
                                    : "bg-white/5 border border-white/10 text-white/30 hover:bg-white/10 hover:text-white/60"
                                    }`}>
                                {cat.category}
                            </button>
                        ))}
                    </div>

                    <motion.div key={activeSpecCat} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {SPECS[activeSpecCat].items.map((item, idx) => (
                            <div key={idx} className="group p-8 bg-[#050a14] border border-white/5 hover:border-orange-500/30 rounded-3xl transition-all hover:bg-white/[0.02]">
                                <div className="text-white/30 text-xs font-black uppercase tracking-widest mb-4 group-hover:text-orange-500/50 transition-colors">{item.label}</div>
                                <div className="text-white text-3xl font-black tracking-tight">{item.value}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Global Impact Grid */}
            <section className="py-32 bg-[#050a14]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { label: "Daily Deliveries", val: "100K+", icon: Bot },
                            { label: "Global Coverage", val: "60+ Countries", icon: Navigation },
                            { label: "Uptime Rate", val: "99.9%", icon: Zap },
                            { label: "Certified Safety", val: "CE / RoHS", icon: Shield },
                        ].map((stat, i) => (
                            <div key={i} className="p-10 border border-white/5 bg-white/[0.01] rounded-3xl text-center">
                                <stat.icon className="w-10 h-10 text-orange-500 mx-auto mb-6" />
                                <div className="text-4xl font-black text-white mb-2">{stat.val}</div>
                                <div className="text-white/40 text-xs font-black uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-40 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-orange-950/20 via-[#050a14] to-[#050a14]" />

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-6xl md:text-[6rem] font-black text-white mb-8 tracking-tighter leading-none italic">TRANSFORM YOUR <span className="text-orange-500">FACILITY.</span></h2>
                    <p className="text-white/60 text-2xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">The future of autonomous cleaning is here. Engineered by KEENON, deployed by Mobilise.</p>

                    <Link to="/contact" className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-2xl rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_80px_rgba(255,255,255,0.2)]">
                        Schedule a Live Demo <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                        <div className="absolute inset-0 rounded-full bg-orange-500 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
                    </Link>
                </div>

                <div className="absolute -bottom-20 -right-20 text-[30rem] font-black text-white/[0.02] select-none leading-none -rotate-12">C40</div>
            </section>

        </div>
    );
}
