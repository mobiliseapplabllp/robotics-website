import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Building2, Package, Wifi, Battery, Gauge, Eye, DoorClosed, Layers } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import {
    ProductLightbox, StickyFeatureSection, FloatingCTA,
    MobiliseAuthoritySection, IndustryGrid, VideoSection, ProductCTA,
} from "../../components/product";

/* ─── image assets ─────────────────────────────────────── */
const IMG_HERO = "https://static.keenon.com/uploads/2025/01/07/66c020578366481596e71cfedc10aa25.jpg?x-oss-process=image/format,webp";
const IMG_GALLERY = [
    "https://static.keenon.com/uploads/2025/01/07/a8179615751d47d587d41b6301deb648.webp",
    "https://static.keenon.com/uploads/images/10becb8073c94840b6bb9e3b03535780.webp",
];

/* ─── data ──────────────────────────────────────────────── */
const GAUGE_STATS = [
    { value: "120+", unit: "per day", label: "Deliveries", icon: Package },
    { value: "4", unit: "cabins", label: "Compartments", icon: Layers },
    { value: "12 hr", unit: "shift", label: "Battery Life", icon: Battery },
    { value: "90 L", unit: "total", label: "Internal Volume", icon: DoorClosed },
];

const PIPELINE_STEPS = [
    { step: "01", title: "Guest Orders", desc: "Room service request is placed via hotel system or reception desk, automatically dispatched to W3.", icon: Building2 },
    { step: "02", title: "Secure Loading", desc: "Staff loads items into enclosed compartments with automatic doors. Ventilation keeps items fresh.", icon: Package },
    { step: "03", title: "IoT Elevator Ride", desc: "W3 autonomously calls and rides elevators to reach the correct floor — no human escort needed.", icon: Wifi },
    { step: "04", title: "Private Delivery", desc: "W3 navigates to the room, calls the guest, and opens the correct compartment for contactless pickup.", icon: DoorClosed },
];

const SPECS = [
    { label: "Dimensions (W×D×H)", value: "459 × 549 × 1081 mm" },
    { label: "Weight", value: "48 kg" },
    { label: "Load Capacity", value: "20 kg total" },
    { label: "Compartments", value: "Up to 4 (modular)" },
    { label: "Compartment Size", value: "390 × 385 × 300 mm" },
    { label: "Internal Volume", value: "90 L" },
    { label: "Max Speed", value: "0.8 m/s" },
    { label: "Battery Life", value: "9 – 12 hours" },
    { label: "Charging Time", value: "6.5 hours (15%–100%)" },
    { label: "Display", value: "11.6\" HD Touchscreen" },
    { label: "Min Passage Width", value: "70 cm" },
    { label: "Slope", value: "≤ 7°" },
    { label: "Navigation", value: "SLAM + AI path planning" },
    { label: "Sensors", value: "Dual stereo + 270° LiDAR" },
    { label: "Languages", value: "14+" },
    { label: "Multi-Floor", value: "IoT elevator integration" },
];

const INDUSTRIES = [
    { title: "Hotels", desc: "Private room service delivery with enclosed compartments and IoT elevator integration.", img: "/images/products/w3/industry_hotel.png" },
    { title: "Healthcare", desc: "Sterile pharmacy and meal rounds with contactless, hygienic delivery across hospital floors.", img: "/images/products/w3/industry_healthcare.png" },
    { title: "Corporate", desc: "Autonomous document and parcel delivery across multi-floor office campuses.", img: "/images/products/w3/industry_corporate.png" },
    { title: "Residential", desc: "Concierge-level delivery for premium residential buildings and serviced apartments.", img: "/images/products/w3/industry_residential.png" },
    { title: "Logistics", desc: "Internal cross-floor delivery automation for warehouses and distribution centers.", img: "/images/products/w3/industry_logistics.png" },
];

const FEATURES = [
    { id: "compartments", title: "4 Enclosed Private Compartments", image: IMG_GALLERY[0] },
    { id: "elevator", title: "IoT Elevator Cross-Floor Delivery", image: IMG_GALLERY[1] },
];

/* ─── main component ────────────────────────────────────── */
export function W3Page() {
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

            {/* Lightbox */}
            <ProductLightbox
                images={allImages}
                isOpen={lightboxOpen}
                currentIndex={lightboxIndex}
                onClose={closeLightbox}
                productName="W3"
                glowColor="rgba(34,197,94,0.15)"
            />

            {/* Floating CTA */}
            <FloatingCTA
                bgColor="bg-green-500"
                glowColor="rgba(34,197,94,0.4)"
                glowHoverColor="rgba(34,197,94,0.6)"
            />

            {/* ── Hero: Industrial Gauge ── */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
                    {!showVideo && (
                        <ImageWithFallback src={IMG_HERO} alt="KEENON W3" className="w-full h-full object-cover opacity-50" />
                    )}
                    {showVideo && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden scale-110">
                            <iframe
                                className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 aspect-video"
                                src="https://www.youtube.com/embed/U-SSXOVIpXg?autoplay=1&mute=1&controls=0&loop=1&playlist=U-SSXOVIpXg&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
                                title="KEENON W3 Hero Video"
                                allow="autoplay; fullscreen"
                            />
                        </motion.div>
                    )}
                    <div className="absolute inset-0 bg-transparent z-10" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/60 to-black/40" />

                {/* Steel texture overlay */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,197,94,0.3) 2px, rgba(34,197,94,0.3) 3px)" }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-green-500/40 bg-green-500/10 mb-6 uppercase tracking-[0.3em] font-black text-[10px] text-green-400">
                            <Building2 className="w-3.5 h-3.5" /> Autonomous Hotel Delivery Butler
                        </div>
                        <h1 className="text-7xl sm:text-8xl lg:text-[10rem] font-black leading-none mb-2 tracking-tighter uppercase italic">
                            <span className="bg-gradient-to-br from-white via-green-100 to-green-500 bg-clip-text text-transparent">W3</span>
                        </h1>
                        <p className="text-2xl text-green-400 font-black uppercase tracking-[0.15em] mb-6 italic drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                            The Industrial Powerhouse
                        </p>
                        <p className="text-white/40 text-lg max-w-2xl mx-auto mb-12 font-light">
                            4 enclosed compartments. IoT elevator integration. 120+ autonomous deliveries per day across unlimited floors.
                        </p>

                        {/* Gauge Stats Bar */}
                        <div className="inline-flex flex-wrap justify-center gap-4 md:gap-0 bg-white/5 backdrop-blur-xl border border-green-500/20 rounded-2xl p-4 md:divide-x md:divide-white/10">
                            {GAUGE_STATS.map((stat) => (
                                <div key={stat.label} className="px-6 md:px-8 py-2 text-center">
                                    <stat.icon className="w-5 h-5 text-green-400 mx-auto mb-1.5" />
                                    <div className="text-2xl md:text-3xl font-black text-white tracking-tight">
                                        {stat.value} <span className="text-green-400/60 text-xs font-bold">{stat.unit}</span>
                                    </div>
                                    <div className="text-[9px] text-white/30 uppercase tracking-widest font-black mt-0.5">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="absolute bottom-12 right-12 z-20">
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
                        <Link to="/contact" className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-white font-black text-lg shadow-[0_0_40px_rgba(34,197,94,0.3)] hover:shadow-[0_0_60px_rgba(34,197,94,0.5)] transition-all flex items-center gap-3">
                            Talk To Experts <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">Scroll to Discover</span>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-12 bg-gradient-to-b from-green-500 to-transparent rounded-full" />
                </div>
            </section>

            {/* ── Mobilise Authority ── */}
            <MobiliseAuthoritySection
                variant="minimal"
                accentColor="green"
                description='While Keenon builds the hardware, <strong class="text-white">Mobilise App Lab Limited</strong> delivers the mastery. We deploy and manage autonomous hotel delivery fleets across India&apos;s premium hospitality and healthcare properties.'
            />

            {/* ── Delivery Pipeline: 4-Step Process ── */}
            <section className="py-32 bg-[#030710] border-t border-green-500/10 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-green-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Delivery Pipeline</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            ORDER TO <span className="text-green-500">DOORSTEP.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 relative">
                        {/* Connection line */}
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent -translate-y-1/2" />

                        {PIPELINE_STEPS.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className="relative bg-[#0a101f] border border-green-500/15 rounded-2xl p-6 hover:border-green-500/50 transition-all group"
                            >
                                <div className="absolute -top-3 -left-2 text-[4rem] font-black text-green-500/10 leading-none select-none">{item.step}</div>
                                <div className="relative pt-10">
                                    <div className="p-3 rounded-xl bg-green-500/10 w-fit mb-4 group-hover:bg-green-500/20 transition-colors">
                                        <item.icon className="w-6 h-6 text-green-400" />
                                    </div>
                                    <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">{item.title}</h3>
                                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Video Section ── */}
            <VideoSection
                videoId="IhBv7JIJQ5M"
                title="KEENON W3 — Autonomous Hotel Delivery Butler"
                variant="inline"
                accentColor="green"
            />

            {/* ── Sticky Feature Sections ── */}
            <div className="w-full">
                {FEATURES.map((feat, i) => (
                    <StickyFeatureSection
                        key={feat.id}
                        img={feat.image}
                        alt={feat.title}
                        index={i}
                        openLightbox={openLightbox}
                    />
                ))}
            </div>

            {/* ── Spec Grid: Industrial Data Sheet ── */}
            <section className="py-32 bg-[#050a14]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-green-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Technical Data Sheet</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            TECHNICAL <span className="text-green-500">SUPERIORITY.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {SPECS.map((spec, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.04 }}
                                className="group p-5 bg-[#0a101f] border border-green-500/10 rounded-2xl hover:border-green-500/40 transition-all"
                            >
                                <span className="block text-white/25 text-[10px] uppercase font-black tracking-widest mb-1 font-mono">{spec.label}</span>
                                <span className="block text-green-400 font-black text-sm uppercase tracking-tight group-hover:text-white transition-colors font-mono">{spec.value}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Industry Grid ── */}
            <IndustryGrid
                industries={INDUSTRIES}
                accentColor="green"
                heading="Built for"
                headingAccent="Multi-Floor Ops"
                label="Cross-Floor Delivery"
                description="The W3 is engineered for autonomous multi-floor delivery in the most demanding hospitality and healthcare environments."
            />

            {/* ── CTA ── */}
            <ProductCTA
                heading="AUTONOMOUS"
                headingAccent="DELIVERY."
                subtitle="Experience cross-floor autonomous delivery at scale. Engineered by KEENON, mastered by Mobilise."
                accentColor="green"
                modelLabel="W3"
            />
        </div>
    );
}
