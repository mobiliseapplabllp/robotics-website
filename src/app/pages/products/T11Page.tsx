import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
    ChevronRight, ArrowRight, Play, CheckCircle, Star, Zap, Shield, Battery,
    Wifi, Volume2, ChevronDown, Download, Phone, ExternalLink, Bot,
    Navigation, Eye, Clock, Layers, Award, TrendingUp, Users, ZoomIn, X, Lock, Box
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

/* ─── image assets ─────────────────────────────────────── */
const IMG_HERO = "https://static.keenon.com/uploads/2025/08/27/d0e3350948ba4a86a0f604b7a4a23ba6.jpg?x-oss-process=image/format,webp";
const IMG_GALLERY = [
    "https://static.keenon.com/uploads/2025/08/27/bff71a3e19bc43f6ba5f7ee905555f1.jpg?x-oss-process=image/format,webp",
    "https://static.keenon.com/uploads/2025/08/27/e5d5ba0f417346fbb0cbbdb038746f8a.jpg?x-oss-process=image/format,webp",
    "https://static.keenon.com/uploads/2025/08/27/15eba5c9e4b54040a2048fd7dea74722.jpg?x-oss-process=image/format,webp",
    "https://static.keenon.com/uploads/2025/09/01/aef7c671bab445fdbd46cea9cd50a781.png?x-oss-process=image/format,webp"
];

/* ─── data ──────────────────────────────────────────────── */
const SPECS = [
    {
        category: "Capacity & Design", items: [
            { label: "Compartments", value: "4 Independent Locked Trays" },
            { label: "Total Payload", value: "Up to 40 kg" },
            { label: "Per Tray Payload", value: "10 kg" },
            { label: "Weight", value: "55 kg" },
        ]
    },
    {
        category: "Performance", items: [
            { label: "Maximum Speed", value: "1.2 m/s" },
            { label: "Battery Life", value: "10+ hours" },
            { label: "Charging", value: "Auto-docking" },
        ]
    },
    {
        category: "Intelligence", items: [
            { label: "Navigation", value: "LIDAR SLAM + 3D Vision" },
            { label: "Display", value: "10.1\" Interactive Screen" },
            { label: "Connectivity", value: "Wi-Fi 5 GHz" },
            { label: "Lock System", value: "Electronic individual lock" },
        ]
    },
];

const FEATURES = [
    {
        id: "security",
        icon: "🔐",
        iconComponent: Lock,
        title: "Secure Multi-Stop Delivery",
        subtitle: "Individual Electronic Locks",
        description: "The T11 features four fully independent, electronically locked compartments. This allows for secure, chain-of-custody delivery of sensitive items like pharmaceuticals, specimens, or high-value hotel room service items in a single dispatch trip.",
        image: IMG_GALLERY[0],
        color: "amber",
        highlights: [
            "Individual compartment access codes",
            "Tamper-evident electronic sensors",
            "Automatic door closure & locking",
            "Real-time delivery confirmation",
        ],
    },
    {
        id: "volume",
        icon: "📦",
        iconComponent: Box,
        title: "High-Throughput Engineering",
        subtitle: "40kg Maximum Payload",
        description: "Designed for high-volume environments like large-scale hospitals and 1000+ room resorts. The T11's robust chassis and high-torque motors can handle heavy daily cycles without fatigue, significantly reducing human labor requirements for routine transport.",
        image: IMG_GALLERY[1],
        color: "orange",
        highlights: [
            "Professional-grade torque motors",
            "Heavy-duty suspension system",
            "4× Large storage compartments",
            "Optimized multi-stop routing",
        ],
    },
];

const COLOR_MAP: Record<string, { text: string; bg: string; border: string; glow: string; gradient: string }> = {
    amber: { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-400/30", glow: "shadow-amber-500/20", gradient: "from-amber-500 to-amber-700" },
    orange: { text: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-400/30", glow: "shadow-orange-500/20", gradient: "from-orange-500 to-orange-700" },
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
                            className="bg-black/40 backdrop-blur-xl border-l-4 border-amber-500 p-6 rounded-r-xl max-w-md">
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
export function T11Page() {
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
                    <ImageWithFallback src={IMG_HERO} alt="KEENON T11" className="w-full h-full object-cover opacity-20" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#050a14]/60 via-[#050a14]/40 to-[#050a14]" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-white/30 text-sm mb-8">
                        <Link to="/" className="hover:text-white/60">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/products" className="hover:text-white/60">Products</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-amber-400">KEENON T11</span>
                    </div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 mb-6">
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                            <span className="text-amber-400 text-sm font-bold uppercase tracking-widest">High-Capacity Delivery Titan</span>
                        </div>
                        <h1 className="text-7xl sm:text-8xl lg:text-[10rem] font-black leading-none mb-4 tracking-tighter">
                            <span className="bg-gradient-to-br from-white via-amber-100 to-amber-400 bg-clip-text text-transparent">T11</span>
                        </h1>
                        <p className="text-2xl text-amber-400 font-semibold mb-6 tracking-wide">"Volume Meets Intelligence"</p>
                        <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
                            Four lockable compartments. 40kg payload. Optimized for high-throughput hospitals, hotels, and corporate campuses.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl text-white font-black text-lg shadow-2xl shadow-amber-500/30">Request a Demo <ArrowRight className="inline ml-2" /></Link>
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
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-16">Built for <span className="text-amber-400">High Volume.</span></h2>
                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {SPECS.map((cat, i) => (
                            <button key={i} onClick={() => setActiveSpecCat(i)}
                                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeSpecCat === i ? "bg-amber-500 text-white" : "bg-white/5 border border-white/10 text-white/50"}`}>{cat.category}</button>
                        ))}
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 text-left">
                        {SPECS[activeSpecCat].items.map((item) => (
                            <div key={item.label} className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-xl">
                                <span className="text-white/50 text-sm">{item.label}</span>
                                <span className="text-amber-400 font-bold text-sm">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 relative overflow-hidden text-center">
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h2 className="text-5xl lg:text-7xl font-black text-white mb-6">Scale your <span className="text-amber-400">Operations.</span></h2>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl text-white font-black text-xl shadow-2xl shadow-amber-500/40">Optimize Your Workflow <ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

        </div>
    );
}
