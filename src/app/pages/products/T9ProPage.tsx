import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import {
    ArrowRight, Layers, Gauge, Battery, Navigation,
    Eye, Cog, Crown, Sparkles, ShieldCheck, Zap,
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import {
    ProductLightbox, StickyFeatureSection, FloatingCTA,
    MobiliseAuthoritySection, IndustryGrid, VideoSection,
    ProductCTA, RobotFace,
} from "../../components/product";

/* ─── image assets ─────────────────────────────────────── */
const IMG_HERO = "https://static.keenon.com/uploads/2025/01/07/6d44b8bf2d9c4e5f8f19ec05b4ebcc83.jpg?x-oss-process=image/format,webp";
const IMG_GALLERY = [
    "https://static.keenon.com/uploads/2025/01/07/8c99c69ee7074d0ba63e8a5e13b96cee.webp",
    "https://static.keenon.com/uploads/2025/01/07/2e8ead20e5334ed6812197a6a3f3e2ea.webp",
];

/* ─── data ──────────────────────────────────────────────── */
const HERO_STATS = [
    { value: "40 kg", unit: "total", label: "Payload", icon: Gauge },
    { value: "15 hr", unit: "shift", label: "Battery", icon: Battery },
    { value: "Stereo", unit: "vision", label: "Navigation", icon: Eye },
    { value: "3", unit: "trays", label: "Delivery", icon: Layers },
];

const PRO_UPGRADES = [
    {
        aspect: "Vision System",
        pro: "Enhanced stereo 3D depth cameras with wider FOV",
        standard: "Standard 3D depth cameras",
        icon: Eye,
    },
    {
        aspect: "Obstacle Detection",
        pro: "Advanced multi-sensor fusion with predictive avoidance",
        standard: "Standard 360° obstacle avoidance",
        icon: ShieldCheck,
    },
    {
        aspect: "Suspension",
        pro: "Tuned vehicle-grade spring-dampened chassis",
        standard: "Vehicle-grade suspension",
        icon: Cog,
    },
    {
        aspect: "Build Quality",
        pro: "Premium materials with refined finish",
        standard: "Standard industrial build",
        icon: Crown,
    },
];

const SPECS = [
    { label: "Dimensions (W×D×H)", value: "500 × 527 × 1266 mm" },
    { label: "Weight", value: "46 kg" },
    { label: "Trays", value: "3 adjustable shelves" },
    { label: "Load Capacity", value: "40 kg total" },
    { label: "Max Speed", value: "1.2 m/s" },
    { label: "Battery Life", value: "≥ 15 hours" },
    { label: "Charging Time", value: "4.5 hours" },
    { label: "Battery", value: "DC 48V, 20Ah" },
    { label: "Display", value: "8\" Touchscreen" },
    { label: "Navigation", value: "Stereo Vision + VSLAM" },
    { label: "Suspension", value: "Tuned vehicle-grade" },
    { label: "Obstacle Avoidance", value: "Enhanced 360° fusion" },
    { label: "Slope", value: "≤ 5°" },
    { label: "Languages", value: "14+" },
    { label: "Passage Width", value: "≥ 55 cm" },
    { label: "OS", value: "Android" },
];

const INDUSTRIES = [
    { title: "Fine Dining", desc: "Premium restaurant service with refined aesthetics and ultra-stable delivery.", img: "/images/products/t9pro/industry_finedining.png" },
    { title: "Luxury Hotels", desc: "5-star room service and VIP amenity delivery with premium build quality.", img: "/images/products/t9pro/industry_hotels.png" },
    { title: "Premium Healthcare", desc: "Private hospital and clinic delivery with enhanced obstacle avoidance.", img: "/images/products/t9pro/industry_healthcare.png" },
    { title: "Corporate HQ", desc: "Executive-level refreshment and document delivery in premium office spaces.", img: "/images/products/t9pro/industry_corporate.png" },
    { title: "Events", desc: "High-end catering at galas, award ceremonies, and exclusive private events.", img: "/images/products/t9pro/industry_events.png" },
];

const FEATURES = [
    { id: "stereo", title: "Enhanced Stereo Vision System", image: IMG_GALLERY[0] },
    { id: "build", title: "Premium Build & Finish", image: IMG_GALLERY[1] },
];

/* ─── main component ────────────────────────────────────── */
export function T9ProPage() {
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

            <ProductLightbox images={allImages} isOpen={lightboxOpen} currentIndex={lightboxIndex} onClose={closeLightbox} productName="T9 Pro" glowColor="rgba(234,179,8,0.15)" />
            <FloatingCTA bgColor="bg-yellow-500" glowColor="rgba(234,179,8,0.4)" glowHoverColor="rgba(234,179,8,0.6)" />

            {/* ── Hero: Automotive Luxury Reveal ── */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
                    {!showVideo && (
                        <ImageWithFallback src={IMG_HERO} alt="KEENON T9 Pro" className="w-full h-full object-cover" />
                    )}
                    {showVideo && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden scale-110">
                            <iframe
                                className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 aspect-video"
                                src="https://www.youtube.com/embed/5TP6MokvFnQ?autoplay=1&mute=1&controls=0&loop=1&playlist=5TP6MokvFnQ&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
                                title="KEENON T9 Pro Hero Video"
                                allow="autoplay; fullscreen"
                            />
                        </motion.div>
                    )}
                    <div className="absolute inset-0 bg-transparent z-10" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-transparent" />
                <div className="relative z-10" />

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">Scroll to Discover</span>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-12 bg-gradient-to-b from-yellow-500 to-transparent rounded-full" />
                </div>
            </section>

            {/* ── Mobilise Authority ── */}
            <MobiliseAuthoritySection variant="glow" accentColor="yellow" />

            {/* ── Pro vs Standard Comparison ── */}
            <section className="py-32 bg-[#030710] border-t border-yellow-500/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-yellow-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Pro Upgrade</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            BEYOND <span className="text-yellow-500">STANDARD.</span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {PRO_UPGRADES.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                                className="grid md:grid-cols-[1fr_2fr_2fr] gap-4 items-center p-6 bg-[#0a101f] border border-yellow-500/10 rounded-2xl hover:border-yellow-500/30 transition-all">
                                <div className="flex items-center gap-3">
                                    <item.icon className="w-6 h-6 text-yellow-400" />
                                    <span className="text-white font-black uppercase text-sm">{item.aspect}</span>
                                </div>
                                <div className="px-4 py-3 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                                    <span className="text-[9px] text-yellow-400 uppercase tracking-widest font-black block mb-1">T9 Pro</span>
                                    <span className="text-white/70 text-sm">{item.pro}</span>
                                </div>
                                <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl">
                                    <span className="text-[9px] text-white/30 uppercase tracking-widest font-black block mb-1">Standard T9</span>
                                    <span className="text-white/40 text-sm">{item.standard}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Video Section ── */}
            <VideoSection videoId="0nPaHJVqO8k" title="KEENON T9 Pro — The Gold Standard" variant="cinematic" accentColor="yellow" />

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
                        <span className="text-yellow-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Full Specifications</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            TECHNICAL <span className="text-yellow-500">EXCELLENCE.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {SPECS.map((spec, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.04 }}
                                className="group p-5 bg-[#0a101f] border border-yellow-500/10 rounded-2xl hover:border-yellow-500/40 transition-all">
                                <span className="block text-white/25 text-[10px] uppercase font-black tracking-widest mb-1">{spec.label}</span>
                                <span className="block text-yellow-400 font-black text-sm uppercase tracking-tight group-hover:text-white transition-colors">{spec.value}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Industry Grid ── */}
            <IndustryGrid
                industries={INDUSTRIES}
                accentColor="yellow"
                heading="Built for"
                headingAccent="Premium Venues"
                label="Luxury Deployment"
                description="The T9 Pro is crafted for operators who demand the best — from Michelin-starred restaurants to 5-star hotel properties."
            />

            {/* ── CTA ── */}
            <ProductCTA
                heading="PREMIUM"
                headingAccent="DELIVERY."
                subtitle="Experience the gold standard in autonomous delivery. Engineered by KEENON, mastered by Mobilise."
                accentColor="yellow"
                modelLabel="T9 Pro"
            />
        </div>
    );
}
