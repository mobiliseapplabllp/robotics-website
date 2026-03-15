import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
    Eye, Clock, Layers, UserCheck,
    Monitor, Maximize2, Zap, Activity
} from "lucide-react";
import {
    ProductLightbox, StickyFeatureSection, FloatingCTA,
    MobiliseAuthoritySection, IndustryGrid, ProductCTA,
} from "../../components/product";

/* ─── image assets ─────────────────────────────────────── */
const IMG_HERO = "/images/products/t11/t11_hero.webp";
const IMG_GALLERY = [
    "/images/products/t11/t11_feature_1.webp",
    "/images/products/t11/t11_feature_2.webp",
    "/images/products/t11/t11_feature_3.webp",
    "/images/products/t11/t11_feature_4.webp",
];

const INDUSTRIES = [
    { title: "Fine Dining", desc: "Sovereign delivery in narrow corridors with high-density patron seating.", img: "/images/products/t11/industry_fine_dining.png" },
    { title: "Corporate", desc: "Automated tray retrieval and catering service for modern tech campuses.", img: "/images/products/t11/industry_corporate.png" },
    { title: "Healthcare", desc: "Sterile-grade reliable transport for pharmaceutical and nutrition logistics.", img: "/images/products/t11/industry_healthcare.png" },
    { title: "Event Venues", desc: "18.5-inch marketing screen creates high-impact advertising and guest engagement.", img: "/images/products/t11/industry_events.png" },
    { title: "Hospitality", desc: "Compact guestroom deliveries and VIP service in luxury boutique hotels.", img: "/images/products/t11/industry_hospitality.png" },
];

const SPECS = [
    { label: "Narrow-Aisle Access", value: "49 cm (Industry Limit)", icon: Maximize2, highlight: true },
    { label: "Display Size", value: "18.5-inch Ads Screen", icon: Monitor, highlight: true },
    { label: "Self-Pickup Accuracy", value: "99% AI Detection", icon: UserCheck, highlight: true },
    { label: "Total Payload", value: "20 kg Capacity", icon: Layers },
    { label: "Battery Endurance", value: "13.5 Hours Shift", icon: Zap },
    { label: "Stability System", value: "6-Wheel Independent", icon: Activity },
    { label: "Obstacle Avoidance", value: "LiDAR + Depth Vision", icon: Eye },
    { label: "Delivery Speed", value: "0.1 - 1.0 m/s", icon: Clock },
];

const FEATURES = [
    { id: "narrow_aisle", title: "The Narrow-Aisle Marketing Expert", image: IMG_GALLERY[1] },
    { id: "advertising", title: "High-Impact 18.5\" Promotion Node", image: IMG_GALLERY[3] },
    { id: "intelligence", title: "Self-Service Intelligent Sensing", image: IMG_GALLERY[2] },
    { id: "stability", title: "Six-Wheel Shock Absorbing Chassis", image: IMG_GALLERY[0] },
];

/* ─── main component ────────────────────────────────────── */
export function T11Page() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

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
            />

            {/* Floating CTA */}
            <FloatingCTA
                bgColor="bg-blue-500"
                glowColor="rgba(59,130,246,0.4)"
                glowHoverColor="rgba(59,130,246,0.6)"
            />

            {/* Video Hero Section */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
                    <div className="absolute inset-0 bg-transparent z-10" />
                    <iframe
                        className="w-full h-[120%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-110 md:scale-100"
                        src="https://www.youtube.com/embed/9xLvVsv86KA?autoplay=1&mute=1&loop=1&playlist=9xLvVsv86KA&controls=0&showinfo=0&rel=0&iv_load_policy=3"
                        allow="autoplay; encrypted-media"
                        frameBorder="0"
                    />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-transparent z-20" />

                <div className="relative z-30 w-full h-full pt-20">
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                        <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">Scroll to Discover</span>
                        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent rounded-full" />
                    </div>
                </div>
            </section>

            {/* Mobilise Authority Section */}
            <MobiliseAuthoritySection
                variant="glow"
                accentColor="blue"
                showBorder
                description='While <span class="text-white font-semibold">Keenon</span> builds the hardware, <span class="text-white font-semibold italic">Mobilise App Lab Limited</span> delivers the mastery. We don&apos;t just sell robots; we architect end-to-end autonomous solutions that redefine facility management for the Indian market.'
            />

            {/* Technical Superiority Cards */}
            <section className="py-24 bg-[#050a14]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16 text-center md:text-left">
                        <h3 className="text-white/30 text-xs font-black uppercase tracking-[0.5em] mb-4">Dinerbot T11</h3>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase">Technical <span className="text-blue-500">Superiority</span></h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {SPECS.map((spec, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                                className={`p-8 rounded-3xl border ${spec.highlight ? 'border-blue-500/30 bg-blue-500/5' : 'border-white/5 bg-white/[0.02]'} group hover:border-blue-500 transition-all cursor-default`}>
                                <div className="mb-6 p-3 rounded-2xl bg-white/5 w-fit group-hover:bg-blue-500/20 transition-colors">
                                    <spec.icon className={`w-8 h-8 ${spec.highlight ? 'text-blue-500' : 'text-white/40'} group-hover:text-blue-400`} />
                                </div>
                                <h4 className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-black mb-1">{spec.label}</h4>
                                <p className={`text-xl font-black italic uppercase ${spec.highlight ? 'text-blue-400' : 'text-white'}`}>{spec.value}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sticky Parallax Reveal */}
            <div className="w-full">
                {FEATURES.map((feat, i) => (
                    <StickyFeatureSection
                        key={feat.id}
                        img={feat.image}
                        alt={feat.title}
                        index={i}
                        openLightbox={openLightbox}
                        parallax={false}
                        showZoomIcon={false}
                    />
                ))}
            </div>

            {/* Industry Solutions Grid */}
            <IndustryGrid
                industries={INDUSTRIES}
                accentColor="blue"
                heading="Tailored for"
                headingAccent="Narrow Aisles"
                label="Intelligent Logic for Every Segment"
            />

            {/* Decorative Background Text */}
            <div className="absolute -bottom-20 -right-20 text-[30rem] font-black text-white/[0.02] select-none leading-none -rotate-12 pointer-events-none">T11</div>

        </div>
    );
}
