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
        category: "Physical", items: [
            { label: "Dimensions (mm)", value: "490 × 520 × 750 (Basic)" },
            { label: "Operating Weight", value: "35 kg (inc. Battery)" },
        ]
    },
    {
        category: "Power & Runtime", items: [
            { label: "Suction Power", value: "19,000 Pa (Industry Lead)" },
            { label: "Charging Time", value: "5-6h (Wall-Plug)" },
            { label: "Vacuum Runtime", value: "Up to 6 Hours" },
            { label: "Mop Runtime", value: "Up to 10 Hours" },
        ]
    },
    {
        category: "Performance", items: [
            { label: "Cleaning Width", value: "610 mm (Dual Brush)" },
            { label: "Moving Speed", value: "0.8 m/s" },
            { label: "Cleaning Efficiency", value: "Up to 600 m²/h" },
        ]
    },
    {
        category: "Capabilities", items: [
            { label: "3-in-1 Tech", value: "Sweep, Vacuum, Dust Mop" },
            { label: "Navigation", value: "AI + Hybrid Manual" },
            { label: "Surface Type", value: "All Hard Floors & Carpets" },
        ]
    },
];

const INDUSTRIES = [
    {
        title: "Retail Elite",
        desc: "Precision cleaning for luxury boutiques and high-traffic fashion floors.",
        img: "/images/products/c30/industry_retail.png"
    },
    {
        title: "Corporate",
        desc: "Low-noise vacuuming for cubicle corridors and minimalist office lounges.",
        img: "/images/products/c30/industry_office.png"
    },
    {
        title: "Healthcare",
        desc: "Sterile-grade dust maintenance in private clinics and pharmacy waiting areas.",
        img: "/images/products/c30/industry_healthcare.png"
    },
    {
        title: "Boutique",
        desc: "Intelligent floor care for cafes, art galleries, and luxury boutique hotels.",
        img: "/images/products/c30/industry_hospitality.png"
    },
    {
        title: "Education",
        desc: "Safe and silent operation in modern library halls and university classrooms.",
        img: "/images/products/c30/industry_education.png"
    }
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
function StickyFeatureSection({ img, index, text, openLightbox }: any) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

    return (
        <div ref={containerRef} className="relative h-screen w-full">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0 w-full h-full">
                    <button onClick={() => openLightbox(index)} className="w-full h-full cursor-zoom-in group">
                        <motion.div style={{ y, scale }} className="w-full h-full">
                            <ImageWithFallback src={img} alt={text} className="w-full h-full object-cover" />
                        </motion.div>
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
export function C30Page() {
    const [activeSpecCat, setActiveSpecCat] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [showHangingCTA, setShowHangingCTA] = useState(false);

    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.8) {
                setShowHangingCTA(true);
            } else {
                setShowHangingCTA(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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

            {/* Hanging CTA */}
            <AnimatePresence>
                {showHangingCTA && (
                    <motion.div initial={{ opacity: 0, scale: 0.8, x: 50 }} animate={{ opacity: 1, scale: 1, x: 0 }} exit={{ opacity: 0, scale: 0.8, x: 50 }}
                        className="fixed bottom-10 right-10 z-[80]">
                        <Link to="/contact" className="group flex items-center gap-3 px-8 py-4 bg-cyan-500 rounded-full text-white font-black text-lg shadow-[0_20px_60px_rgba(6,182,212,0.4)] hover:shadow-[0_25px_80px_rgba(6,182,212,0.6)] hover:scale-105 active:scale-95 transition-all text-center">
                            Talk To Experts <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
                    <ImageWithFallback src={IMG_HERO} alt="KEENON C30" className="w-full h-full object-cover opacity-60" />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-black/40" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 mb-6 uppercase tracking-[0.3em] font-black text-[10px] text-cyan-400">
                            3-in-1 Dry Cleaning Specialist
                        </div>
                        <h1 className="text-7xl sm:text-8xl lg:text-[10rem] font-black leading-none mb-4 tracking-tighter uppercase italic">
                            <span className="bg-gradient-to-br from-white via-cyan-100 to-cyan-500 bg-clip-text text-transparent">C30</span>
                        </h1>
                        <p className="text-2xl text-cyan-400 font-black uppercase tracking-[0.2em] mb-6 drop-shadow-[0_0_20px_rgba(6,182,212,0.3)] italic">"Intelligence You Can Handle"</p>
                        <p className="text-white/40 text-lg max-w-2xl mx-auto mb-10 font-light">
                            Professional vacuuming, sweeping, and dust mopping with 19,000 Pa suction and breakthrough hybrid manual control.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute bottom-12 right-12 z-20">
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
                        <Link to="/contact" className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-black text-lg shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:shadow-[0_0_60px_rgba(6,182,212,0.5)] transition-all flex items-center gap-3">
                            Talk To Experts <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">Scroll to Discover</span>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-transparent rounded-full" />
                </div>
            </section>

            {/* Mobilise Authority Section */}
            <section className="py-32 bg-[#050a14] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-cyan-500/50 via-transparent to-transparent" />
                    <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-cyan-500/50 via-transparent to-transparent" />
                </div>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="text-cyan-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">The Partner You Trust</motion.span>
                    <motion.h2 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}
                        className="text-5xl md:text-8xl font-black text-white mb-4 tracking-tighter leading-none italic uppercase">
                        GLOBAL TECHNOLOGY. <br />
                        <span className="text-cyan-500">LOCAL MASTERY.</span>
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-white/40 text-xl md:text-2xl font-black uppercase tracking-widest mb-12 italic">Developed by Keenon. Implemented by Mobilise.</motion.p>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-white/60 text-xl md:text-2xl max-w-4xl mx-auto font-light leading-relaxed">
                        While Keenon builds the hardware, <span className="text-white font-bold">Mobilise App Lab Limited</span> delivers the mastery. We specialize in deploying high-precision dry-cleaning solutions for India's premier commercial and retail spaces.
                    </motion.p>
                </div>
            </section>

            {/* Feature Parallax */}
            <div className="w-full">
                {FEATURES.map((feat, i) => (
                    <ParallaxGalleryItem key={feat.id} img={feat.image} index={i} featureText={feat.title} accent={feat.color} openLightbox={openLightbox} />
                ))}
            </div>

            {/* technical Superiority */}
            <section className="py-32 bg-[#050a14]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-cyan-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Power Meets Precision</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">Technical <span className="text-cyan-500">Superiority.</span></h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {SPECS.flatMap(cat => cat.items).map((item, idx) => (
                            <div key={idx} className="group p-5 bg-[#0a101f] border border-cyan-500/20 rounded-2xl hover:border-cyan-500/60 transition-all">
                                <span className="block text-white/30 text-[10px] uppercase font-black tracking-widest mb-1">{item.label}</span>
                                <span className="block text-cyan-400 font-black text-sm uppercase tracking-tighter transition-colors group-hover:text-white">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Solutions Grid */}
            <section className="py-32 bg-[#050a14] border-t border-white/5 relative overflow-hidden">
                <div className="max-w-[95rem] mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
                        <div className="flex-1">
                            <span className="text-cyan-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Specialist Deployment</span>
                            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">Industry <span className="text-cyan-500">Solutions.</span></h2>
                        </div>
                        <p className="flex-1 text-white/40 text-xl max-w-xl font-light leading-relaxed italic">The C30 is engineered for high-precision dry maintenance in the most detailed commercial environments.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {INDUSTRIES.map((industry, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ y: -15, scale: 1.02 }}
                                className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/5 bg-[#0a101f]">
                                <ImageWithFallback src={industry.img} alt={industry.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100 opacity-60 group-hover:opacity-100" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <h3 className="text-3xl font-black text-white mb-2 uppercase italic tracking-tighter transition-transform group-hover:-translate-y-2">{industry.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">{industry.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-40 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/20 via-[#050a14] to-[#050a14]" />

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-6xl md:text-[6rem] font-black text-white mb-8 tracking-tighter leading-none italic">PRECISION <span className="text-cyan-500">DRY CLEAN.</span></h2>
                    <p className="text-white/60 text-2xl mb-16 max-w-2xl mx-auto font-light leading-relaxed italic">Experience the ultimate in autonomous floor maintenance. Engineered by KEENON, mastered by Mobilise.</p>

                    <Link to="/contact" className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-2xl rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_80px_rgba(255,255,255,0.2)]">
                        Schedule a Demo <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                        <div className="absolute inset-0 rounded-full bg-cyan-500 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
                    </Link>
                </div>

                <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-20 -right-20 text-[30rem] font-black text-white/[0.02] select-none leading-none -rotate-12 pointer-events-none italic">C30</motion.div>
            </section>

        </div>
    );
}
