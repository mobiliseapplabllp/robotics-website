import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
    Weight, Truck, Shield, Battery, Navigation,
    Zap, Route, WifiOff, Package, Clock, Gauge
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import {
    ProductLightbox, StickyFeatureSection, FloatingCTA,
    MobiliseAuthoritySection, IndustryGrid, VideoSection, ProductCTA,
} from "../../components/product";

/* ─── image assets ─────────────────────────────────────── */
const IMG_HERO = "https://static.keenon.com/uploads/2025/10/10/6c16f280020b4a258e0a1235ee5da218.jpg?x-oss-process=image/format,webp";
const IMG_GALLERY = [
    "https://static.keenon.com/uploads/2025/10/10/646128197b974c6badd6e5fbae0aa822.jpg?x-oss-process=image/format,webp",
    "https://static.keenon.com/uploads/2025/10/10/afee143ed7e340768a026d42c25a81b2.jpg?x-oss-process=image/format,webp",
    "https://static.keenon.com/uploads/2025/10/10/22bd98fcf806487093402753e3fd5b86.png?x-oss-process=image/format,webp",
];

/* ─── data ──────────────────────────────────────────────── */
const TRIPLE_ROLES = [
    {
        num: "01",
        title: "Heavy Logistics",
        accent: "Transport",
        desc: "Move up to 300 kg of materials — pallets, cages, linen carts, supply bins — across sprawling facilities with zero manual labor. The ultra-low 23 cm chassis allows easy loading from standard pallet heights.",
        stats: [
            { label: "Payload", value: "300 kg" },
            { label: "Chassis", value: "23 cm" },
        ],
        icon: Weight,
    },
    {
        num: "02",
        title: "Loop Delivery",
        accent: "Distribution",
        desc: "Automated multi-point delivery loops for hospital supply rounds, manufacturing floor material shuttling, and warehouse internal logistics — running 24/7 with battery swap capability.",
        stats: [
            { label: "Modes", value: "Loop / Direct / Multi-point" },
            { label: "Runtime", value: "6 hours per charge" },
        ],
        icon: Route,
    },
    {
        num: "03",
        title: "Offline Operation",
        accent: "Resilience",
        desc: "Industry-unique offline control mode ensures uninterrupted operation even without network connectivity. Deploy in underground facilities, shielded areas, and network-restricted zones.",
        stats: [
            { label: "Network", value: "Independent operation" },
            { label: "Safety", value: "360° + triple E-stop" },
        ],
        icon: WifiOff,
    },
];

const SPECS = [
    { label: "Dimensions (W×D×H)", value: "925 × 640 × 1282 mm" },
    { label: "Weight", value: "115 kg" },
    { label: "Load Capacity", value: "300 kg" },
    { label: "Chassis Height", value: "23 cm (industry-low)" },
    { label: "Max Speed", value: "1.0 m/s" },
    { label: "Battery Life", value: "6 hours" },
    { label: "Charging Time", value: "3.5 hours" },
    { label: "Battery Swap", value: "Yes (24/7 operation)" },
    { label: "Navigation", value: "LiDAR SLAM + Stereo Vision" },
    { label: "Safety", value: "360° shield + 3× E-stops" },
    { label: "Deployment", value: "1 day (marker-free)" },
    { label: "Offline Mode", value: "Network-independent" },
    { label: "Delivery Modes", value: "Loop, Direct, Multi-point" },
];

const INDUSTRIES = [
    { title: "Healthcare", desc: "Heavy logistics for hospital linen, equipment, and sterile supply transport across multi-building campuses.", img: "/images/products/s300/industry_healthcare.png" },
    { title: "Manufacturing", desc: "Material shuttle on production floors — handling raw materials, WIP, and finished goods between stations.", img: "/images/products/s300/industry_manufacturing.png" },
    { title: "Logistics", desc: "Internal warehouse shuttle and sortation center material movement at scale.", img: "/images/products/s300/industry_logistics.png" },
    { title: "Aviation", desc: "Airport baggage handling, cargo logistics, and maintenance supply transport in terminals.", img: "/images/products/s300/industry_aviation.png" },
    { title: "Infrastructure", desc: "Large campus delivery for convention centers, government complexes, and commercial real estate.", img: "/images/products/s300/industry_infrastructure.png" },
];

const FEATURES = [
    { id: "chassis", title: "23cm Ultra-Low Chassis Loading", image: IMG_GALLERY[0] },
    { id: "navigation", title: "LiDAR SLAM Marker-Free Navigation", image: IMG_GALLERY[1] },
    { id: "safety", title: "360° Safety Shield System", image: IMG_GALLERY[2] },
];

/* ─── main component ────────────────────────────────────── */
export function S300Page() {
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

            {/* Lightbox */}
            <ProductLightbox
                images={allImages}
                isOpen={lightboxOpen}
                currentIndex={lightboxIndex}
                onClose={closeLightbox}
                productName="S300"
                glowColor="rgba(129,140,248,0.15)"
            />

            {/* Floating CTA */}
            <FloatingCTA
                bgColor="bg-indigo-500"
                glowColor="rgba(99,102,241,0.4)"
                glowHoverColor="rgba(99,102,241,0.6)"
            />

            {/* ── Hero: Cinematic Low-Angle Panoramic ── */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0">
                    {!showVideo && (
                        <ImageWithFallback src={IMG_HERO} alt="KEENON S300" className="w-full h-full object-cover" />
                    )}
                    {showVideo && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden scale-110">
                            <iframe
                                className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 aspect-video"
                                src="https://www.youtube.com/embed/rbSBAt1Hlvk?autoplay=1&mute=1&controls=0&loop=1&playlist=rbSBAt1Hlvk&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
                                title="KEENON S300 Hero Video"
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
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-12 bg-gradient-to-b from-indigo-500 to-transparent rounded-full" />
                </div>
            </section>

            {/* ── Mobilise Authority ── */}
            <MobiliseAuthoritySection
                variant="lines"
                accentColor="indigo"
                description='While Keenon builds the hardware, <span class="text-white font-bold">Mobilise App Lab Limited</span> delivers the mastery. We deploy and manage heavy-load autonomous logistics for India&apos;s largest hospitals, factories, and infrastructure projects.'
            />

            {/* ── Triple Role: Z-Pattern Cards ── */}
            <section className="py-32 bg-[#030710] border-t border-indigo-500/10 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-indigo-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Triple Capability</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            ONE ROBOT. <span className="text-indigo-500">THREE ROLES.</span>
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
                                        <div className="text-[5rem] font-black text-indigo-500/15 leading-none select-none">{role.num}</div>
                                        <div>
                                            <div className="p-3 rounded-xl bg-indigo-500/10 w-fit mb-2">
                                                <role.icon className="w-6 h-6 text-indigo-400" />
                                            </div>
                                            <h3 className="text-3xl font-black text-white uppercase tracking-tight">
                                                {role.title} <span className="text-indigo-400">{role.accent}</span>
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-white/40 text-base leading-relaxed mb-6">{role.desc}</p>
                                    <div className="flex gap-6">
                                        {role.stats.map((stat) => (
                                            <div key={stat.label} className="bg-indigo-500/5 border border-indigo-500/15 rounded-xl px-4 py-3">
                                                <span className="block text-[9px] text-white/30 uppercase tracking-widest font-black mb-0.5">{stat.label}</span>
                                                <span className="block text-indigo-400 font-black text-sm">{stat.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={`${i % 2 === 1 ? "md:order-1" : ""} h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent hidden md:block`} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Video Section ── */}
            <VideoSection
                videoId="GST1_KOT54Q"
                title="KEENON S300 — Heavy-Load Autonomous Delivery"
                variant="cinematic"
                accentColor="indigo"
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

            {/* ── Spec Grid ── */}
            <section className="py-32 bg-[#050a14]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-indigo-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Industrial Grade</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            TECHNICAL <span className="text-indigo-500">SUPERIORITY.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {SPECS.map((spec, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.04 }}
                                className="group p-5 bg-[#0a101f] border border-indigo-500/10 rounded-2xl hover:border-indigo-500/40 transition-all"
                            >
                                <span className="block text-white/25 text-[10px] uppercase font-black tracking-widest mb-1">{spec.label}</span>
                                <span className="block text-indigo-400 font-black text-sm uppercase tracking-tight group-hover:text-white transition-colors">{spec.value}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Industry Grid ── */}
            <IndustryGrid
                industries={INDUSTRIES}
                accentColor="indigo"
                heading="Built for"
                headingAccent="Heavy Logistics"
                label="Industrial Deployment"
                description="The S300 is engineered for the heaviest autonomous logistics demands — from hospital supply chains to manufacturing floor material transport."
            />

            {/* ── CTA ── */}
            <ProductCTA
                heading="HEAVY-LOAD"
                headingAccent="AUTOMATION."
                subtitle="Experience 300 kg autonomous delivery at industrial scale. Engineered by KEENON, mastered by Mobilise."
                accentColor="indigo"
                modelLabel="S300"
            />
        </div>
    );
}
