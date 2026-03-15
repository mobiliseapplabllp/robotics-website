import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Building2, Package, Wifi, Battery, DoorClosed, Layers } from "lucide-react";
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

            {/* ── Hero ── */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
                    {!showVideo && (
                        <ImageWithFallback src={IMG_HERO} alt="KEENON W3" className="w-full h-full object-cover" />
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-transparent" />
                <div className="relative z-10" />
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
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
