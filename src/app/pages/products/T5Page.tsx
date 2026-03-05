import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
    ChevronRight, ArrowRight, Play, CheckCircle, Star, Zap, Shield, Battery,
    Wifi, Volume2, ChevronDown, Download, Phone, ExternalLink, Bot,
    Navigation, Eye, Clock, Layers, Award, TrendingUp, Users, ZoomIn, X, Coffee, Smile
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

/* ─── image assets ─────────────────────────────────────── */
const IMG_HERO = "https://static.keenon.com/uploads/2025/08/27/aef7c671bab445fdbd46cea9cd50a781.png?x-oss-process=image%2Fformat%2Cwebp"; // Reusing T11/T10 style image or placeholder
const IMG_GALLERY = [
    "https://static.keenon.com/uploads/2025/08/27/d0e3350948ba4a86a0f604b7a4a23ba6.jpg?x-oss-process=image%2Fformat%2Cwebp"
];

/* ─── data ──────────────────────────────────────────────── */
const SPECS = [
    {
        category: "Agility", items: [
            { label: "Width", value: "380 mm" },
            { label: "Turning Radius", value: "0 mm (In-place)" },
            { label: "Max Speed", value: "1.0 m/s" },
            { label: "Min Passable Width", value: "55 cm" },
        ]
    },
    {
        category: "Delivery", items: [
            { label: "Load Capacity", value: "20 kg total" },
            { label: "Trays", value: "2 Open Trays" },
            { label: "Battery Life", value: "10+ hours" },
            { label: "Navigation", value: "LIDAR + Vision SLAM" },
        ]
    },
];

const FEATURES = [
    {
        id: "compact",
        icon: "☕",
        iconComponent: Coffee,
        title: "The Ultimate Café Companion",
        subtitle: "Built for Boutique Spaces",
        description: "The T5 is KEENON's most agile delivery robot. With a 380mm width and zero-turn radius, it glides through crowded boutique cafés and narrow office corridors where other robots simply can't fit. Perfect for snack, coffee, and document delivery.",
        image: IMG_GALLERY[0],
        color: "rose",
        highlights: [
            "Ultra-slim 380mm chassis",
            "Zero-degree turning radius",
            "55cm minimum passage width",
            "Gentle acceleration for beverages",
        ],
    },
    {
        id: "interaction",
        icon: "😊",
        iconComponent: Smile,
        title: "Compact but Expressive",
        subtitle: "Big Personality, Small Footprint",
        description: "Despite its size, the T5 features the signature KEENON expressive face and voice interaction system. It greets customers with warmth, announces orders clearly, and adds a touch of technological delight to any small business environment.",
        image: IMG_HERO,
        color: "pink",
        highlights: [
            "Animated emotional expressions",
            "Multi-language voice prompts",
            "Smart obstacle avoidance",
            "Auto-return to base",
        ],
    },
];

const COLOR_MAP: Record<string, { text: string; bg: string; border: string; glow: string; gradient: string }> = {
    rose: { text: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-400/30", glow: "shadow-rose-500/20", gradient: "from-rose-500 to-rose-700" },
    pink: { text: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-400/30", glow: "shadow-pink-500/20", gradient: "from-pink-500 to-pink-700" },
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
                            className="bg-black/40 backdrop-blur-xl border-l-4 border-yellow-500 p-6 rounded-r-xl max-w-md">
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
    const moods = ["🌹", "👋", "✨", "😊", "💖", "🌟"];
    useEffect(() => {
        const t = setInterval(() => setMood((m) => (m + 1) % moods.length), 2000);
        return () => clearInterval(t);
    }, []);
    return (
        <motion.div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-slate-700 to-slate-900 border-2 border-rose-500/40 flex items-center justify-center shadow-2xl shadow-rose-500/20"
            animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
            <AnimatePresence mode="wait">
                <motion.span key={mood} initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.3 }} className="text-6xl select-none">{moods[mood]}</motion.span>
            </AnimatePresence>
        </motion.div>
    );
}

/* ─── main component ────────────────────────────────────── */
export function T5Page() {
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
                    <ImageWithFallback src={IMG_HERO} alt="KEENON T5" className="w-full h-full object-cover opacity-20" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#050a14]/60 via-[#050a14]/40 to-[#050a14]" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-white/30 text-sm mb-8">
                        <Link to="/" className="hover:text-white/60">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/products" className="hover:text-white/60">Products</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-rose-400">KEENON T5</span>
                    </div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-rose-500/40 bg-rose-500/10 mb-6">
                            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                            <span className="text-rose-400 text-sm font-bold uppercase tracking-widest">Agile Delivery Assistant</span>
                        </div>
                        <div className="flex justify-center mb-8"><RobotFace /></div>
                        <h1 className="text-7xl sm:text-8xl lg:text-[10rem] font-black leading-none mb-4 tracking-tighter">
                            <span className="bg-gradient-to-br from-white via-rose-100 to-rose-400 bg-clip-text text-transparent">T5</span>
                        </h1>
                        <p className="text-2xl text-rose-400 font-semibold mb-6 tracking-wide">"Tiny Footprint. Giant Service."</p>
                        <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
                            Ultra-slim 380mm design. Zero-turn radius agility. The compact hero for boutique cafés and modern offices.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl text-white font-black text-lg shadow-2xl shadow-rose-500/30">Request a Site Survey <ArrowRight className="inline ml-2" /></Link>
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
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-16">Boutique <span className="text-rose-400">Agility.</span></h2>
                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {SPECS.map((cat, i) => (
                            <button key={i} onClick={() => setActiveSpecCat(i)}
                                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeSpecCat === i ? "bg-rose-500 text-white" : "bg-white/5 border border-white/10 text-white/50"}`}>{cat.category}</button>
                        ))}
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 text-left">
                        {SPECS[activeSpecCat].items.map((item) => (
                            <div key={item.label} className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-xl">
                                <span className="text-white/50 text-sm">{item.label}</span>
                                <span className="text-rose-400 font-bold text-sm">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 relative overflow-hidden text-center">
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h2 className="text-5xl lg:text-7xl font-black text-white mb-6">Upgrade your <span className="text-rose-400">Ambience.</span></h2>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl text-white font-black text-xl shadow-2xl shadow-rose-500/40">Optimize Your Space <ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>

        </div>
    );
}
