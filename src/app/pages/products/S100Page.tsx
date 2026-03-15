import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
    Weight, Battery, Route, Shield, Clock,
    Package, Truck, WifiOff, Zap, Navigation, Gauge,
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import {
    ProductLightbox, StickyFeatureSection, FloatingCTA,
    MobiliseAuthoritySection, IndustryGrid, VideoSection, ProductCTA,
} from "../../components/product";

/* ─── image assets ─────────────────────────────────────── */
const IMG_HERO = "https://static.keenon.com/uploads/2025/10/10/c2f2f2bff40b48718b70e8b2f8a1ae44.jpg?x-oss-process=image/format,webp";
const IMG_GALLERY = [
    "https://static.keenon.com/uploads/2025/10/10/3a5fd78d1c4b4ce78a8bb4b43c1c5d4f.jpg?x-oss-process=image/format,webp",
    "https://static.keenon.com/uploads/2025/10/10/a9d49a2aff6e44b496f8f5001b3ef14c.jpg?x-oss-process=image/format,webp",
    "https://static.keenon.com/uploads/2025/10/10/d1e65db5cd994f2cb2b91a0f59e8f1a7.jpg?x-oss-process=image/format,webp",
];

/* ─── data ──────────────────────────────────────────────── */
const TRIPLE_ROLES = [
    {
        num: "01",
        title: "Heavy-Load",
        accent: "Courier",
        desc: "Carry 100+ kg payloads autonomously — linen carts, supply bins, equipment trolleys — across hospital corridors, hotel service areas, and factory floors without a single manual push.",
        stats: [
            { label: "Payload", value: "100+ kg" },
            { label: "Battery Swap", value: "15 seconds" },
        ],
        icon: Weight,
    },
    {
        num: "02",
        title: "Multi-Point",
        accent: "Routing",
        desc: "Intelligent loop and multi-stop delivery routes that adapt in real-time. Queue tasks, set priorities, and let the S100 optimize its own path through complex facility layouts.",
        stats: [
            { label: "Modes", value: "Loop / Direct / Queue" },
            { label: "Runtime", value: "8+ hours" },
        ],
        icon: Route,
    },
    {
        num: "03",
        title: "24/7",
        accent: "Operation",
        desc: "15-second hot-swap battery design enables true round-the-clock deployment. No charging downtime — swap and resume instantly from where the robot left off.",
        stats: [
            { label: "Swap Time", value: "15 seconds" },
            { label: "Availability", value: "24/7 continuous" },
        ],
        icon: Battery,
    },
];

const SPECS = [
    { label: "Dimensions (W×D×H)", value: "925 × 620 × 1282 mm" },
    { label: "Weight", value: "87.5 kg" },
    { label: "Load Capacity", value: "100+ kg" },
    { label: "Max Speed", value: "1.0 m/s" },
    { label: "Battery Life", value: "8+ hours" },
    { label: "Battery Swap", value: "15 seconds" },
    { label: "Navigation", value: "LiDAR SLAM + Stereo Vision" },
    { label: "Safety", value: "360° obstacle avoidance" },
    { label: "Deployment", value: "Marker-free" },
    { label: "Delivery Modes", value: "Loop, Direct, Multi-point" },
    { label: "Slope", value: "≤ 5°" },
    { label: "Offline Mode", value: "Network-independent" },
];

const INDUSTRIES = [
    { title: "Healthcare", desc: "Hospital linen, pharmacy, and sterile supply transport across multi-floor campuses.", img: "/images/products/s100/industry_healthcare.png" },
    { title: "Hospitality", desc: "Hotel back-of-house logistics — towels, amenities, and F&B supplies delivered autonomously.", img: "/images/products/s100/industry_hospitality.png" },
    { title: "Manufacturing", desc: "Factory floor material shuttle between stations, warehouses, and loading docks.", img: "/images/products/s100/industry_manufacturing.png" },
    { title: "Logistics", desc: "Internal warehouse sortation and last-mile delivery within large distribution centers.", img: "/images/products/s100/industry_logistics.png" },
    { title: "Corporate", desc: "Campus-wide document, package, and supply delivery for large enterprise facilities.", img: "/images/products/s100/industry_corporate.png" },
];

const FEATURES = [
    { id: "chassis", title: "Low-Profile Heavy-Load Chassis", image: IMG_GALLERY[0] },
    { id: "navigation", title: "LiDAR SLAM Navigation System", image: IMG_GALLERY[1] },
    { id: "safety", title: "360° Safety Shield", image: IMG_GALLERY[2] },
];

/* ─── main component ────────────────────────────────────── */
export function S100Page() {
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
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

    const allImages = [IMG_HERO, ...IMG_GALLERY];
    function openLightbox(i: number) { setLightboxIndex(i); setLightboxOpen(true); }
    function closeLightbox() { setLightboxOpen(false); }

    return (
        <div className="min-h-screen bg-[#050a14] text-white overflow-x-hidden">

            <ProductLightbox images={allImages} isOpen={lightboxOpen} currentIndex={lightboxIndex} onClose={closeLightbox} productName="S100" glowColor="rgba(236,72,153,0.15)" />
            <FloatingCTA bgColor="bg-pink-500" glowColor="rgba(236,72,153,0.4)" glowHoverColor="rgba(236,72,153,0.6)" />

            {/* ── Hero: Cinematic Low-Angle ── */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0">
                    {!showVideo && (
                        <ImageWithFallback src={IMG_HERO} alt="KEENON S100" className="w-full h-full object-cover" />
                    )}
                    {showVideo && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden scale-110">
                            <iframe
                                className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 aspect-video"
                                src="https://www.youtube.com/embed/KGtbV6l5aJQ?autoplay=1&mute=1&controls=0&loop=1&playlist=KGtbV6l5aJQ&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
                                title="KEENON S100 Hero Video"
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
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-12 bg-gradient-to-b from-pink-500 to-transparent rounded-full" />
                </div>
            </section>

            {/* ── Mobilise Authority ── */}
            <MobiliseAuthoritySection variant="glow" accentColor="pink" />

            {/* ── Triple Role: Z-Pattern Cards ── */}
            <section className="py-32 bg-[#030710] border-t border-pink-500/10 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-pink-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Triple Capability</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            ONE ROBOT. <span className="text-pink-500">THREE ROLES.</span>
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {TRIPLE_ROLES.map((role, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: i * 0.15 }}
                                className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
                            >
                                <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="text-[5rem] font-black text-pink-500/15 leading-none select-none">{role.num}</div>
                                        <div>
                                            <div className="p-3 rounded-xl bg-pink-500/10 w-fit mb-2">
                                                <role.icon className="w-6 h-6 text-pink-400" />
                                            </div>
                                            <h3 className="text-3xl font-black text-white uppercase tracking-tight">
                                                {role.title} <span className="text-pink-400">{role.accent}</span>
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-white/40 text-base leading-relaxed mb-6">{role.desc}</p>
                                    <div className="flex gap-6">
                                        {role.stats.map((stat) => (
                                            <div key={stat.label} className="bg-pink-500/5 border border-pink-500/15 rounded-xl px-4 py-3">
                                                <span className="block text-[9px] text-white/30 uppercase tracking-widest font-black mb-0.5">{stat.label}</span>
                                                <span className="block text-pink-400 font-black text-sm">{stat.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={`${i % 2 === 1 ? "md:order-1" : ""} h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent hidden md:block`} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Video Section ── */}
            <VideoSection videoId="nWFOEiiLzTc" title="KEENON S100 — Heavy-Load Autonomous Courier" variant="cinematic" accentColor="pink" />

            {/* ── Sticky Feature Sections ── */}
            <div className="w-full">
                {FEATURES.map((feat, i) => (
                    <StickyFeatureSection key={feat.id} img={feat.image} alt={feat.title} index={i} openLightbox={openLightbox} />
                ))}
            </div>

            {/* ── Spec Grid ── */}
            <section className="py-32 bg-[#050a14]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-pink-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Industrial Grade</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            TECHNICAL <span className="text-pink-500">SUPERIORITY.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {SPECS.map((spec, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.04 }}
                                className="group p-5 bg-[#0a101f] border border-pink-500/10 rounded-2xl hover:border-pink-500/40 transition-all">
                                <span className="block text-white/25 text-[10px] uppercase font-black tracking-widest mb-1">{spec.label}</span>
                                <span className="block text-pink-400 font-black text-sm uppercase tracking-tight group-hover:text-white transition-colors">{spec.value}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Industry Grid ── */}
            <IndustryGrid
                industries={INDUSTRIES}
                accentColor="pink"
                heading="Built for"
                headingAccent="Heavy Logistics"
                label="Industrial Deployment"
                description="The S100 is engineered for autonomous heavy-load courier operations — from hospital supply chains to hotel back-of-house logistics."
            />

            {/* ── CTA ── */}
            <ProductCTA
                heading="HEAVY-LOAD"
                headingAccent="COURIER."
                subtitle="Experience 100+ kg autonomous delivery with 15-second battery swap. Engineered by KEENON, mastered by Mobilise."
                accentColor="pink"
                modelLabel="S100"
            />
        </div>
    );
}
