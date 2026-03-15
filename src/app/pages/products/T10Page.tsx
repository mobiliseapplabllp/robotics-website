import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import {
    ArrowRight, Monitor, Eye, Brain, Layers, Battery,
    Gauge, Navigation, Sparkles, ScanLine, MonitorSmartphone,
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import {
    ProductLightbox, StickyFeatureSection, FloatingCTA,
    MobiliseAuthoritySection, IndustryGrid, VideoSection,
    ProductCTA, RobotFace,
} from "../../components/product";

/* ─── image assets ─────────────────────────────────────── */
const IMG_HERO = "https://static.keenon.com/uploads/2025/01/07/c3d0d5ef6e8e456ca36e6f0dce37d81e.jpg?x-oss-process=image/format,webp";
const IMG_GALLERY = [
    "https://static.keenon.com/uploads/2025/01/07/d1a5e5d1b8a949079cc59b02c93f3cb2.webp",
    "https://static.keenon.com/uploads/2025/01/07/a2c5c5fa91864e3c96e0b7d5a83c6e2f.webp",
    "https://static.keenon.com/uploads/2025/01/07/e5b0f1e2d8c84a07b0f5c1d9e2a3b4c5.webp",
];

/* ─── data ──────────────────────────────────────────────── */
const HERO_STATS = [
    { value: "23.8\"", unit: "display", label: "Screen", icon: Monitor },
    { value: "5", unit: "sensors", label: "Vision", icon: Eye },
    { value: "40 kg", unit: "total", label: "Payload", icon: Gauge },
    { value: "3", unit: "trays", label: "Delivery", icon: Layers },
];

const INTELLIGENCE_FEATURES = [
    {
        icon: Brain,
        title: "Head Movement Tracking",
        desc: "Intelligent servo-driven head follows guests with natural movement — creating genuine engagement that static screens can't match.",
        stat: "360°",
        statLabel: "head rotation",
    },
    {
        icon: Eye,
        title: "5-Sensor Vision Fusion",
        desc: "Five integrated vision sensors provide comprehensive environmental awareness — depth, obstacle, face detection, and path planning in a single fused perception system.",
        stat: "5",
        statLabel: "vision sensors",
    },
    {
        icon: Monitor,
        title: "23.8\" Interactive Display",
        desc: "Full HD touchscreen serves as advertising platform, menu display, survey collector, and guest interaction terminal — all while delivering food.",
        stat: "23.8\"",
        statLabel: "full HD",
    },
];

const DISPLAY_MODES = [
    { mode: "Advertising", desc: "Run promotional content and brand campaigns during delivery routes", icon: MonitorSmartphone },
    { mode: "Menu Display", desc: "Show interactive menus and daily specials at the table", icon: Layers },
    { mode: "Guest Survey", desc: "Collect real-time feedback with touch-enabled surveys", icon: ScanLine },
    { mode: "Way-Finding", desc: "Provide interactive navigation and building directory guidance", icon: Navigation },
];

const SPECS = [
    { label: "Dimensions (W×D×H)", value: "486 × 555 × 1399 mm" },
    { label: "Weight", value: "58 kg" },
    { label: "Trays", value: "3 adjustable shelves" },
    { label: "Load Capacity", value: "40 kg total" },
    { label: "Display", value: "23.8\" Full HD Touch" },
    { label: "Max Speed", value: "1.2 m/s" },
    { label: "Battery Life", value: "≥ 12 hours" },
    { label: "Charging Time", value: "4.5 hours" },
    { label: "Battery", value: "DC 48V, 20Ah" },
    { label: "Vision Sensors", value: "5 integrated cameras" },
    { label: "Navigation", value: "VSLAM + depth fusion" },
    { label: "Head Movement", value: "Servo-driven tracking" },
    { label: "Obstacle Avoidance", value: "360° multi-sensor" },
    { label: "Passage Width", value: "≥ 55 cm" },
    { label: "Languages", value: "14+" },
    { label: "OS", value: "Android" },
];

const INDUSTRIES = [
    { title: "Luxury Hotels", desc: "Premium guest interaction with branded content delivery and room service.", img: "/images/products/t10/industry_hotels.png" },
    { title: "Fine Dining", desc: "Elevated dining experience with interactive menu display and table service.", img: "/images/products/t10/industry_finedining.png" },
    { title: "Corporate", desc: "Executive-level service with branded content and visitor engagement.", img: "/images/products/t10/industry_corporate.png" },
    { title: "Healthcare", desc: "Patient-facing interactive services in premium clinic environments.", img: "/images/products/t10/industry_healthcare.png" },
    { title: "Retail", desc: "In-store interactive advertising and product showcase experiences.", img: "/images/products/t10/industry_retail.png" },
];

const FEATURES = [
    { id: "display", title: "23.8\" Interactive Full HD Display", image: IMG_GALLERY[0] },
    { id: "head", title: "Servo-Driven Head Tracking", image: IMG_GALLERY[1] },
    { id: "vision", title: "5-Sensor Vision Fusion", image: IMG_GALLERY[2] },
];

/* ─── main component ────────────────────────────────────── */
export function T10Page() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowVideo(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const allImages = [IMG_HERO, ...IMG_GALLERY];
    function openLightbox(i: number) { setLightboxIndex(i); setLightboxOpen(true); }
    function closeLightbox() { setLightboxOpen(false); }

    return (
        <div className="min-h-screen bg-[#050a14] text-white overflow-x-hidden">

            <ProductLightbox images={allImages} isOpen={lightboxOpen} currentIndex={lightboxIndex} onClose={closeLightbox} productName="T10" glowColor="rgba(168,85,247,0.15)" />
            <FloatingCTA bgColor="bg-purple-500" glowColor="rgba(168,85,247,0.4)" glowHoverColor="rgba(168,85,247,0.6)" />

            {/* ── Hero: Split-Panel Typographic ── */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
                    {!showVideo && (
                        <ImageWithFallback src={IMG_HERO} alt="KEENON T10" className="w-full h-full object-cover opacity-30" />
                    )}
                    {showVideo && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden scale-110">
                            <iframe
                                className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 aspect-video"
                                src="https://www.youtube.com/embed/Sy4m75aJ9Pc?autoplay=1&mute=1&controls=0&loop=1&playlist=Sy4m75aJ9Pc&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
                                title="KEENON T10 Hero Video"
                                allow="autoplay; fullscreen"
                            />
                        </motion.div>
                    )}
                    <div className="absolute inset-0 bg-transparent z-10" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/50 to-black/40" />

                {/* Massive outlined typography background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}>
                        <h1 className="text-[14rem] sm:text-[18rem] lg:text-[24rem] font-black leading-none tracking-tighter uppercase italic text-transparent"
                            style={{ WebkitTextStroke: "2px rgba(168,85,247,0.12)" }}>
                            T10
                        </h1>
                    </motion.div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }}>
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/40 bg-purple-500/10 mb-6 uppercase tracking-[0.3em] font-black text-[10px] text-purple-400">
                            <Sparkles className="w-3.5 h-3.5" /> Interactive Display Robot
                        </div>

                        <div className="flex justify-center mb-6">
                            <RobotFace expressions={["🎨", "✨", "💜", "🔮", "🌟", "💎"]} borderColor="border-purple-500/40" shadowColor="shadow-purple-500/20" />
                        </div>

                        <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tighter uppercase italic">
                            <span className="text-white">THE </span>
                            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">FLAGSHIP.</span>
                        </h2>
                        <p className="text-white/40 text-lg max-w-xl mx-auto mt-4 mb-10 font-light">
                            23.8" interactive display. Servo-driven head tracking. 5-sensor vision fusion. The most intelligent delivery platform in the KEENON lineup.
                        </p>

                        {/* Stats bar */}
                        <div className="inline-flex flex-wrap justify-center gap-4 md:gap-0 bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-4 md:divide-x md:divide-white/10">
                            {HERO_STATS.map((stat) => (
                                <div key={stat.label} className="px-6 md:px-8 py-2 text-center">
                                    <stat.icon className="w-5 h-5 text-purple-400 mx-auto mb-1.5" />
                                    <div className="text-2xl md:text-3xl font-black text-white tracking-tight">
                                        {stat.value} <span className="text-purple-400/60 text-xs font-bold">{stat.unit}</span>
                                    </div>
                                    <div className="text-[9px] text-white/30 uppercase tracking-widest font-black mt-0.5">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">Scroll to Discover</span>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-12 bg-gradient-to-b from-purple-500 to-transparent rounded-full" />
                </div>
            </section>

            {/* ── Mobilise Authority ── */}
            <MobiliseAuthoritySection variant="lines" accentColor="purple" />

            {/* ── Adaptive Intelligence ── */}
            <section className="py-32 bg-[#030710] border-t border-purple-500/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-purple-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Intelligence</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            ADAPTIVE <span className="text-purple-500">BRILLIANCE.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {INTELLIGENCE_FEATURES.map((card, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="group p-8 bg-[#0a101f] border border-purple-500/10 rounded-3xl hover:border-purple-500/40 transition-all">
                                <div className="mb-6 p-4 rounded-2xl bg-purple-500/5 w-fit group-hover:bg-purple-500/15 transition-colors">
                                    <card.icon className="w-8 h-8 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3">{card.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed mb-6">{card.desc}</p>
                                <div className="px-4 py-3 rounded-xl bg-purple-500/10 border border-purple-500/20 inline-block">
                                    <span className="text-purple-400 font-black text-lg">{card.stat}</span>
                                    <span className="text-white/30 text-[10px] uppercase tracking-wider ml-2">{card.statLabel}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Display Showcase ── */}
            <section className="py-32 bg-[#050a14]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-purple-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Display Modes</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            SCREEN <span className="text-purple-500">SHOWCASE.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {DISPLAY_MODES.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="group p-6 bg-[#0a101f] border border-purple-500/10 rounded-2xl hover:border-purple-500/40 transition-all text-center">
                                <div className="p-4 rounded-xl bg-purple-500/10 w-fit mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors">
                                    <item.icon className="w-7 h-7 text-purple-400" />
                                </div>
                                <h4 className="text-sm font-black text-purple-400 uppercase tracking-tight mb-2">{item.mode}</h4>
                                <p className="text-white/30 text-xs leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Video Section ── */}
            <VideoSection videoId="XVh7BkgMhuk" title="KEENON T10 — The Flagship" variant="cinematic" accentColor="purple" />

            {/* ── Sticky Feature Sections ── */}
            <div className="w-full">
                {FEATURES.map((feat, i) => (
                    <StickyFeatureSection key={feat.id} img={feat.image} alt={feat.title} index={i + 1} openLightbox={openLightbox} />
                ))}
            </div>

            {/* ── Spec Grid ── */}
            <section className="py-32 bg-[#050a14]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-purple-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Full Specifications</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            TECHNICAL <span className="text-purple-500">DATA.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {SPECS.map((spec, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.04 }}
                                className="group p-5 bg-[#0a101f] border border-purple-500/10 rounded-2xl hover:border-purple-500/40 transition-all">
                                <span className="block text-white/25 text-[10px] uppercase font-black tracking-widest mb-1">{spec.label}</span>
                                <span className="block text-purple-400 font-black text-sm uppercase tracking-tight group-hover:text-white transition-colors">{spec.value}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Industry Grid ── */}
            <IndustryGrid
                industries={INDUSTRIES}
                accentColor="purple"
                heading="Built for"
                headingAccent="Premium Spaces"
                label="Flagship Deployment"
                description="The T10 delivers an unmatched combination of interactive display technology and autonomous delivery for the most demanding hospitality venues."
            />

            {/* ── CTA ── */}
            <ProductCTA
                heading="FLAGSHIP"
                headingAccent="INTELLIGENCE."
                subtitle='Experience 23.8" interactive delivery with 5-sensor vision fusion. Engineered by KEENON, mastered by Mobilise.'
                accentColor="purple"
                modelLabel="T10"
            />
        </div>
    );
}
