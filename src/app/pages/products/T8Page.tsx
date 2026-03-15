import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import {
    ArrowRight, Compass, Zap, Eye, Battery, Clock,
    Building2, Gauge, Scan, Hand,
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import {
    ProductLightbox, StickyFeatureSection, FloatingCTA,
    MobiliseAuthoritySection, IndustryGrid, VideoSection, ProductCTA,
} from "../../components/product";

/* ─── image assets ─────────────────────────────────────── */
const IMG_HERO = "https://static.keenon.com/uploads/2025/01/07/70b4d698984f428ca5d4238f03cbe183.jpg?x-oss-process=image/format,webp";
const IMG_GALLERY = [
    "https://static.keenon.com/uploads/2025/01/07/3f1030d1ed7f419e8d1fe25536af2051.webp",
    "https://static.keenon.com/uploads/2024/12/30/1e6802e656064293af36c6feb0ab7e2b.webp",
];

/* ─── data ──────────────────────────────────────────────── */
const DEPLOY_STATS = [
    { value: "60,000+", label: "Businesses", icon: Building2 },
    { value: "55 cm", label: "Min Passage", icon: Compass },
    { value: "15 hr", label: "Battery Life", icon: Battery },
    { value: "300°", label: "Tray Access", icon: Scan },
];

const FEATURE_CARDS = [
    {
        icon: Compass,
        title: "Narrow Space Navigation",
        desc: "Navigate passages as tight as 55 cm — the narrowest in its class. Perfect for crowded Indian restaurants and boutique hotel corridors where every centimeter counts.",
        stats: [{ value: "55 cm", label: "passage" }, { value: "34 kg", label: "robot weight" }],
    },
    {
        icon: Hand,
        title: "Smart Self-Pickup",
        desc: "Tray-level weight and infrared sensors detect when guests pick up their orders. Friendly voice prompts in 10+ Indian languages guide the process automatically.",
        stats: [{ value: "300°", label: "tray access" }, { value: "10+", label: "languages" }],
    },
    {
        icon: Eye,
        title: "204° Vision Coverage",
        desc: "Three stereo vision sensors with 204° dynamic real-time obstacle detection — including objects under 5 cm. The T8 sees what others miss.",
        stats: [{ value: "204°", label: "coverage" }, { value: "3", label: "stereo sensors" }],
    },
];

const SPECS = [
    { label: "Dimensions (W×D×H)", value: "384 × 468 × 1111 mm" },
    { label: "Weight", value: "34 kg" },
    { label: "Load Capacity", value: "20 kg total" },
    { label: "Max Speed", value: "1.0 m/s" },
    { label: "Battery Life", value: "Up to 15 hours" },
    { label: "Charging Time", value: "4 hours (15%–100%)" },
    { label: "Min Passage Width", value: "55 cm" },
    { label: "Slope", value: "≤ 5°" },
    { label: "Display", value: "10.1\" Touch Screen" },
    { label: "Sensors", value: "3 stereo vision (204°)" },
    { label: "Tray Access", value: "300° open design" },
    { label: "Navigation", value: "SLAM + LIDAR + IMU + UWB" },
    { label: "Connectivity", value: "Wi-Fi 2.4/5 GHz" },
];

const INDUSTRIES = [
    { title: "Hospitality", desc: "Compact delivery through narrow hotel corridors and multi-floor properties.", img: "/images/products/t8/industry_hospitality.png" },
    { title: "Healthcare", desc: "Contactless meal delivery in hospital wards with minimal passage requirements.", img: "/images/products/t8/industry_healthcare.png" },
    { title: "F&B", desc: "High-density restaurant layouts with smart self-pickup tray guidance.", img: "/images/products/t8/industry_fb.png" },
    { title: "Corporate", desc: "Office pantry and document delivery across modern workspaces.", img: "/images/products/t8/industry_corporate.png" },
    { title: "Events", desc: "Banquet hall and conference catering delivery at scale.", img: "/images/products/t8/industry_events.png" },
];

const FEATURES = [
    { id: "narrow", title: "55cm Ultra-Narrow Navigation", image: IMG_GALLERY[0] },
    { id: "tray", title: "300° Open Tray Smart Pickup", image: IMG_GALLERY[1] },
];

/* ─── main component ────────────────────────────────────── */
export function T8Page() {
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

            <ProductLightbox images={allImages} isOpen={lightboxOpen} currentIndex={lightboxIndex} onClose={closeLightbox} productName="T8" glowColor="rgba(56,189,248,0.15)" />
            <FloatingCTA bgColor="bg-sky-500" glowColor="rgba(56,189,248,0.4)" glowHoverColor="rgba(56,189,248,0.6)" />

            {/* ── Hero: Blueprint Technical ── */}
            <section ref={heroRef} className="relative h-screen flex items-end overflow-hidden">
                <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0">
                    {!showVideo && (
                        <ImageWithFallback src={IMG_HERO} alt="KEENON T8" className="w-full h-full object-cover" />
                    )}
                    {showVideo && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden scale-110">
                            <iframe
                                className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 aspect-video"
                                src="https://www.youtube.com/embed/5CU5m77TQTA?autoplay=1&mute=1&controls=0&loop=1&playlist=5CU5m77TQTA&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
                                title="KEENON T8 Hero Video"
                                allow="autoplay; fullscreen"
                            />
                        </motion.div>
                    )}
                    <div className="absolute inset-0 bg-transparent z-10" />
                </motion.div>

                {/* Blueprint grid overlay */}
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
                    style={{ backgroundImage: "linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/50 to-black/20" />

                {/* Outlined typography */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}>
                        <h1 className="text-[12rem] sm:text-[16rem] lg:text-[22rem] font-black leading-none tracking-tighter uppercase italic text-transparent"
                            style={{ WebkitTextStroke: "2px rgba(56,189,248,0.12)" }}>
                            T8
                        </h1>
                    </motion.div>
                </div>

                {/* Dimension annotations */}
                <div className="absolute top-1/3 right-[15%] hidden lg:block pointer-events-none">
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}
                        className="text-sky-400/60 font-mono text-xs border-l border-sky-400/30 pl-3">
                        <div>384 × 468 × 1111 mm</div>
                        <div className="text-white/20 mt-1">Compact Chassis</div>
                    </motion.div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }}>
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-sky-500/40 bg-sky-500/10 mb-6 uppercase tracking-[0.3em] font-black text-[10px] text-sky-400">
                            <Compass className="w-3.5 h-3.5" /> Compact Agility Champion
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black leading-none mb-3 tracking-tighter uppercase italic">
                            <span className="text-white">THE</span>{" "}
                            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">WORKHORSE.</span>
                        </h2>
                        <p className="text-white/40 text-lg max-w-xl mb-8 font-light">
                            55 cm ultra-narrow passage. 15-hour endurance. Trusted by 60,000+ businesses worldwide. The industry's most agile delivery robot.
                        </p>

                        <div className="flex flex-wrap gap-4 items-center">
                            <Link to="/contact" className="group px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full text-white font-black text-lg shadow-[0_0_40px_rgba(56,189,248,0.3)] hover:shadow-[0_0_60px_rgba(56,189,248,0.5)] transition-all flex items-center gap-3">
                                Talk To Experts <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">Scroll to Discover</span>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-12 bg-gradient-to-b from-sky-500 to-transparent rounded-full" />
                </div>
            </section>

            {/* ── Mobilise Authority ── */}
            <MobiliseAuthoritySection variant="lines" accentColor="sky" />

            {/* ── Deployment Counter ── */}
            <section className="py-24 bg-[#030710] border-t border-sky-500/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {DEPLOY_STATS.map((stat, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                                className="text-center p-8 bg-[#0a101f] border border-sky-500/10 rounded-3xl hover:border-sky-500/30 transition-all">
                                <stat.icon className="w-8 h-8 text-sky-400 mx-auto mb-4" />
                                <div className="text-4xl font-black text-white tracking-tight">{stat.value}</div>
                                <div className="text-[10px] text-white/30 uppercase tracking-widest font-black mt-2">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Precision Engineering ── */}
            <section className="py-32 bg-[#050a14]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-sky-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Core Technology</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            PRECISION <span className="text-sky-500">ENGINEERING.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {FEATURE_CARDS.map((card, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="group p-8 bg-[#0a101f] border border-sky-500/10 rounded-3xl hover:border-sky-500/40 transition-all">
                                <div className="mb-6 p-4 rounded-2xl bg-sky-500/5 w-fit group-hover:bg-sky-500/15 transition-colors">
                                    <card.icon className="w-8 h-8 text-sky-400" />
                                </div>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3">{card.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed mb-6">{card.desc}</p>
                                <div className="flex gap-3">
                                    {card.stats.map((st) => (
                                        <div key={st.label} className="px-3 py-2 rounded-xl bg-sky-500/10 border border-sky-500/20">
                                            <span className="text-sky-400 font-black text-sm">{st.value}</span>
                                            <span className="text-white/30 text-[10px] uppercase tracking-wider ml-1">{st.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Video Section ── */}
            <VideoSection videoId="n_MpADYaGN0" title="KEENON T8 — The Workhorse in Action" variant="cinematic" accentColor="sky" />

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
                        <span className="text-sky-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Technical Data Sheet</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            TECHNICAL <span className="text-sky-500">SUPERIORITY.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {SPECS.map((spec, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.04 }}
                                className="group p-5 bg-[#0a101f] border border-sky-500/10 rounded-2xl hover:border-sky-500/40 transition-all">
                                <span className="block text-white/25 text-[10px] uppercase font-black tracking-widest mb-1 font-mono">{spec.label}</span>
                                <span className="block text-sky-400 font-black text-sm uppercase tracking-tight group-hover:text-white transition-colors font-mono">{spec.value}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Industry Grid ── */}
            <IndustryGrid
                industries={INDUSTRIES}
                accentColor="sky"
                heading="Trusted by"
                headingAccent="60,000+ Businesses"
                label="Global Deployment"
                description="The T8 is the world's most deployed compact delivery robot — proven across restaurants, hotels, and hospitals on every continent."
            />

            {/* ── CTA ── */}
            <ProductCTA
                heading="COMPACT"
                headingAccent="AUTHORITY."
                subtitle="Experience 55cm passage capability at industrial scale. Engineered by KEENON, mastered by Mobilise."
                accentColor="sky"
                modelLabel="T8"
            />
        </div>
    );
}
