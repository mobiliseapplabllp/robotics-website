import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import {
    ArrowRight, Layers, Gauge, Battery, Navigation,
    Eye, Cog, ShieldCheck, Sparkles, MonitorSmartphone,
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import {
    ProductLightbox, StickyFeatureSection, FloatingCTA,
    MobiliseAuthoritySection, IndustryGrid, VideoSection,
    ProductCTA, RobotFace,
} from "../../components/product";

/* ─── image assets ─────────────────────────────────────── */
const IMG_HERO = "https://static.keenon.com/uploads/2025/01/07/a63282db51454ced97f2d5174e7eaff3.jpg?x-oss-process=image/format,webp";
const IMG_GALLERY = [
    "https://static.keenon.com/uploads/2025/01/07/61d69fea4ef04a3991fba968f23fdf31.webp",
    "https://static.keenon.com/uploads/2025/01/07/4f9b22c3ec3e4e9790a29e0b4e14fc87.webp",
    "https://static.keenon.com/uploads/2025/01/07/9e53bbaec4874a1ab28b4312b0a9b543.webp",
];

/* ─── data ──────────────────────────────────────────────── */
const HERO_STATS = [
    { value: "40 kg", unit: "total", label: "Payload", icon: Gauge },
    { value: "18 hr", unit: "shift", label: "Battery", icon: Battery },
    { value: "VSLAM", unit: "fusion", label: "Navigation", icon: Navigation },
    { value: "3", unit: "trays", label: "Delivery", icon: Layers },
];

const FEATURE_CARDS = [
    {
        icon: Cog,
        title: "Vehicle-Grade Suspension",
        desc: "Spring-dampened chassis absorbs bumps, slopes, and uneven transitions — soup stays in the bowl, glasses stay upright, every trip.",
        stat: "≤ 5°",
        statLabel: "slope handling",
    },
    {
        icon: Eye,
        title: "VSLAM + 3D Vision",
        desc: "Visual SLAM navigation with 3D depth cameras for sub-centimeter positioning. Adapts in real-time to moving obstacles and crowded layouts.",
        stat: "VSLAM",
        statLabel: "fusion nav",
    },
    {
        icon: Battery,
        title: "18-Hour Endurance",
        desc: "Industry-leading battery life covers double shifts without charging. Optional contact-charge dock for hands-free top-up between runs.",
        stat: "18 hr",
        statLabel: "runtime",
    },
];

const EXPRESSION_SHOWCASE = [
    { emoji: "😊", label: "Welcome", desc: "Greets guests with a warm smile on arrival" },
    { emoji: "🎉", label: "Celebrate", desc: "Birthday and special occasion animations" },
    { emoji: "😋", label: "Serving", desc: "Playful expression during food delivery" },
    { emoji: "😴", label: "Standby", desc: "Cute sleep mode when idle at dock" },
    { emoji: "🎵", label: "Singing", desc: "Musical expressions with built-in speaker" },
    { emoji: "❤️", label: "Thank You", desc: "Appreciation after guest interaction" },
];

const SPECS = [
    { label: "Dimensions (W×D×H)", value: "500 × 527 × 1266 mm" },
    { label: "Weight", value: "45.2 kg" },
    { label: "Trays", value: "3 adjustable shelves" },
    { label: "Load Capacity", value: "40 kg total" },
    { label: "Max Speed", value: "1.2 m/s" },
    { label: "Battery Life", value: "≥ 18 hours" },
    { label: "Charging Time", value: "4.5 hours" },
    { label: "Battery", value: "DC 48V, 20Ah" },
    { label: "Display", value: "8\" Touchscreen" },
    { label: "Navigation", value: "VSLAM + 3D cameras" },
    { label: "Suspension", value: "Vehicle-grade spring" },
    { label: "Obstacle Avoidance", value: "360° multi-sensor" },
    { label: "Slope", value: "≤ 5°" },
    { label: "Passage Width", value: "≥ 55 cm" },
    { label: "Languages", value: "14+" },
    { label: "OS", value: "Android" },
];

const INDUSTRIES = [
    { title: "Restaurants", desc: "High-volume dining service with multi-table delivery and vehicle-grade stability.", img: "/images/products/t9/industry_restaurants.png" },
    { title: "Hotels", desc: "Room service and amenity delivery across multi-floor hotel properties.", img: "/images/products/t9/industry_hotels.png" },
    { title: "Healthcare", desc: "Medicine and meal delivery in hospitals with gentle, stable navigation.", img: "/images/products/t9/industry_healthcare.png" },
    { title: "Corporate", desc: "Office refreshment and document delivery across modern campuses.", img: "/images/products/t9/industry_corporate.png" },
    { title: "Events", desc: "Catering service at banquets, conferences, and exhibition halls.", img: "/images/products/t9/industry_events.png" },
];

const FEATURES = [
    { id: "suspension", title: "Vehicle-Grade Suspension System", image: IMG_GALLERY[0] },
    { id: "display", title: "Expressive 8\" Interactive Display", image: IMG_GALLERY[1] },
    { id: "navigation", title: "VSLAM Fusion Navigation", image: IMG_GALLERY[2] },
];

/* ─── main component ────────────────────────────────────── */
export function T9Page() {
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

            <ProductLightbox images={allImages} isOpen={lightboxOpen} currentIndex={lightboxIndex} onClose={closeLightbox} productName="T9" glowColor="rgba(245,158,11,0.15)" />
            <FloatingCTA bgColor="bg-amber-500" glowColor="rgba(245,158,11,0.4)" glowHoverColor="rgba(245,158,11,0.6)" />

            {/* ── Hero: Stage-Curtain Reveal ── */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
                    {!showVideo && (
                        <ImageWithFallback src={IMG_HERO} alt="KEENON T9" className="w-full h-full object-cover opacity-40" />
                    )}
                    {showVideo && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden scale-110">
                            <iframe
                                className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 aspect-video"
                                src="https://www.youtube.com/embed/5TP6MokvFnQ?autoplay=1&mute=1&controls=0&loop=1&playlist=5TP6MokvFnQ&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
                                title="KEENON T9 Hero Video"
                                allow="autoplay; fullscreen"
                            />
                        </motion.div>
                    )}
                    <div className="absolute inset-0 bg-transparent z-10" />
                </motion.div>
                {/* Spotlight cones */}
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse 40% 80% at 50% 20%, rgba(245,158,11,0.08) 0%, transparent 70%)" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/50 to-black/30" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 mb-6 uppercase tracking-[0.3em] font-black text-[10px] text-amber-400">
                            <Sparkles className="w-3.5 h-3.5" /> Expressive Delivery Robot
                        </div>

                        <div className="flex justify-center mb-6">
                            <RobotFace expressions={["🎭", "✨", "🎪", "🌟", "🎉", "💫"]} borderColor="border-amber-500/40" shadowColor="shadow-amber-500/20" />
                        </div>

                        <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-black leading-none tracking-tighter uppercase italic">
                            <span className="bg-gradient-to-br from-white via-amber-100 to-amber-500 bg-clip-text text-transparent">T9</span>
                        </h1>
                        <p className="text-2xl text-amber-400 font-black uppercase tracking-[0.15em] mt-2 italic">The Performer</p>
                        <p className="text-white/40 text-lg max-w-xl mx-auto mt-4 mb-10 font-light">
                            Vehicle-grade suspension. 18-hour battery. VSLAM navigation. The most expressive delivery robot in the KEENON lineup.
                        </p>

                        {/* Stats bar */}
                        <div className="inline-flex flex-wrap justify-center gap-4 md:gap-0 bg-white/5 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-4 md:divide-x md:divide-white/10">
                            {HERO_STATS.map((stat) => (
                                <div key={stat.label} className="px-6 md:px-8 py-2 text-center">
                                    <stat.icon className="w-5 h-5 text-amber-400 mx-auto mb-1.5" />
                                    <div className="text-2xl md:text-3xl font-black text-white tracking-tight">
                                        {stat.value} <span className="text-amber-400/60 text-xs font-bold">{stat.unit}</span>
                                    </div>
                                    <div className="text-[9px] text-white/30 uppercase tracking-widest font-black mt-0.5">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">Scroll to Discover</span>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-12 bg-gradient-to-b from-amber-500 to-transparent rounded-full" />
                </div>
            </section>

            {/* ── Mobilise Authority ── */}
            <MobiliseAuthoritySection variant="glow" accentColor="amber" />

            {/* ── Feature Cards ── */}
            <section className="py-32 bg-[#030710] border-t border-amber-500/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-amber-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Why T9</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            STAGE <span className="text-amber-500">PRESENCE.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {FEATURE_CARDS.map((card, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="group p-8 bg-[#0a101f] border border-amber-500/10 rounded-3xl hover:border-amber-500/40 transition-all">
                                <div className="mb-6 p-4 rounded-2xl bg-amber-500/5 w-fit group-hover:bg-amber-500/15 transition-colors">
                                    <card.icon className="w-8 h-8 text-amber-400" />
                                </div>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3">{card.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed mb-6">{card.desc}</p>
                                <div className="px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/20 inline-block">
                                    <span className="text-amber-400 font-black text-lg">{card.stat}</span>
                                    <span className="text-white/30 text-[10px] uppercase tracking-wider ml-2">{card.statLabel}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Expression Engine ── */}
            <section className="py-32 bg-[#050a14]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-amber-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Personality</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            EXPRESSION <span className="text-amber-500">ENGINE.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {EXPRESSION_SHOWCASE.map((expr, i) => (
                            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.08 }}
                                whileHover={{ y: -8, scale: 1.05 }}
                                className="group p-6 bg-[#0a101f] border border-amber-500/10 rounded-2xl hover:border-amber-500/40 transition-all text-center">
                                <div className="text-4xl mb-3">{expr.emoji}</div>
                                <h4 className="text-sm font-black text-amber-400 uppercase tracking-tight mb-1">{expr.label}</h4>
                                <p className="text-white/30 text-xs leading-relaxed">{expr.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Video Section ── */}
            <VideoSection videoId="n_MpADYaGN0" title="KEENON T9 — The Performer" variant="cinematic" accentColor="amber" />

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
                        <span className="text-amber-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Full Specifications</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            TECHNICAL <span className="text-amber-500">DATA.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {SPECS.map((spec, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.04 }}
                                className="group p-5 bg-[#0a101f] border border-amber-500/10 rounded-2xl hover:border-amber-500/40 transition-all">
                                <span className="block text-white/25 text-[10px] uppercase font-black tracking-widest mb-1">{spec.label}</span>
                                <span className="block text-amber-400 font-black text-sm uppercase tracking-tight group-hover:text-white transition-colors">{spec.value}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Industry Grid ── */}
            <IndustryGrid
                industries={INDUSTRIES}
                accentColor="amber"
                heading="Built for"
                headingAccent="Every Stage"
                label="Universal Performance"
                description="From fine dining to hospital wards, the T9 delivers with theatrical flair and vehicle-grade stability across every venue."
            />

            {/* ── CTA ── */}
            <ProductCTA
                heading="THEATRICAL"
                headingAccent="DELIVERY."
                subtitle="Experience expressive, suspension-stabilized delivery with 18-hour endurance. Engineered by KEENON, mastered by Mobilise."
                accentColor="amber"
                modelLabel="T9"
            />
        </div>
    );
}
