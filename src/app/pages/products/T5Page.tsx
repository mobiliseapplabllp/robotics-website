import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
    Layers, Gauge, Battery, Navigation,
    Maximize2, Utensils, Building2, PartyPopper,
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import {
    ProductLightbox, StickyFeatureSection, FloatingCTA,
    MobiliseAuthoritySection, IndustryGrid, VideoSection,
    ProductCTA,
} from "../../components/product";

/* ─── image assets ─────────────────────────────────────── */
const IMG_HERO = "https://static.keenon.com/uploads/2025/01/07/70b4d698984f428ca5d4238f03cbe183.jpg?x-oss-process=image/format,webp";
const IMG_GALLERY = [
    "https://static.keenon.com/uploads/2025/01/07/3f1030d1ed7f419e8d1fe25536af2051.webp",
];

/* ─── data ──────────────────────────────────────────────── */
const HERO_STATS = [
    { value: "4", unit: "trays", label: "Adjustable", icon: Layers },
    { value: "40 kg", unit: "total", label: "Payload", icon: Gauge },
    { value: "12+ hr", unit: "shift", label: "Battery", icon: Battery },
    { value: "1.2 m/s", unit: "speed", label: "Max Speed", icon: Navigation },
];

const WHY_CARDS = [
    {
        icon: Maximize2,
        title: "Compact Agility",
        desc: "At 506 mm wide with 70 cm passage capability, the T5 navigates crowded dining layouts and narrow hotel corridors where other robots can't fit.",
        stat: "70 cm",
        statLabel: "min passage",
    },
    {
        icon: Layers,
        title: "Multi-Point Delivery",
        desc: "Four adjustable trays carry up to 40 kg total. Serve up to 3 tables per trip with intelligent multi-stop routing and automatic return.",
        stat: "3 tables",
        statLabel: "per trip",
    },
    {
        icon: Navigation,
        title: "Smart Navigation",
        desc: "SLAM + LIDAR + 3D camera fusion provides sub-centimeter positioning accuracy. Auto-adapts speed on slopes and handles dynamic obstacles in real-time.",
        stat: "SLAM",
        statLabel: "fusion nav",
    },
];

const SPECS = [
    { label: "Dimensions (W×D×H)", value: "506 × 502 × 1205 mm" },
    { label: "Weight", value: "55 kg" },
    { label: "Trays", value: "4 adjustable shelves" },
    { label: "Load Capacity", value: "40 kg total (10 kg/tray)" },
    { label: "Shelf Size (Top)", value: "490 × 404 × 188 mm" },
    { label: "Shelf Size (Others)", value: "490 × 404 × 176 mm" },
    { label: "Max Speed", value: "1.2 m/s" },
    { label: "Battery Life", value: "≥ 12 hours" },
    { label: "Charging Time", value: "5 hours" },
    { label: "Battery", value: "DC 48V, 12Ah" },
    { label: "Display", value: "7\" Touchscreen (1024×600)" },
    { label: "Min Passage Width", value: "70 cm" },
    { label: "Slope", value: "≤ 5°" },
    { label: "Navigation", value: "SLAM + LIDAR + 3D cameras" },
    { label: "OS", value: "Android" },
    { label: "Languages", value: "14+" },
];

const INDUSTRIES = [
    { title: "Hospitality", desc: "Room service and amenity delivery across multi-floor hotel properties.", img: "/images/products/t5/industry_hospitality.png" },
    { title: "F&B", desc: "High-volume restaurant service with multi-table delivery in a single trip.", img: "/images/products/t5/industry_fb.png" },
    { title: "Corporate", desc: "Office tea, coffee, and document delivery across modern campuses.", img: "/images/products/t5/industry_corporate.png" },
    { title: "Events", desc: "Catering delivery at banquets, conferences, and exhibition halls.", img: "/images/products/t5/industry_events.png" },
    { title: "Cafes", desc: "Boutique café service with compact navigation and warm guest interactions.", img: "/images/products/t5/industry_cafes.png" },
];

const FEATURES = [
    { id: "trays", title: "4-Tray Adjustable Delivery System", image: IMG_GALLERY[0] },
];

/* ─── main component ────────────────────────────────────── */
export function T5Page() {
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

            <ProductLightbox images={allImages} isOpen={lightboxOpen} currentIndex={lightboxIndex} onClose={closeLightbox} productName="T5" glowColor="rgba(244,63,94,0.15)" />
            <FloatingCTA bgColor="bg-rose-500" glowColor="rgba(244,63,94,0.4)" glowHoverColor="rgba(244,63,94,0.6)" />

            {/* ── Hero ── */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
                    {!showVideo && (
                        <ImageWithFallback src={IMG_HERO} alt="KEENON T5" className="w-full h-full object-cover" />
                    )}
                    {showVideo && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden scale-110">
                            <iframe
                                className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 aspect-video"
                                src="https://www.youtube.com/embed/7USoOfg2aro?autoplay=1&mute=1&controls=0&loop=1&playlist=7USoOfg2aro&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
                                title="KEENON T5 Hero Video"
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
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-12 bg-gradient-to-b from-rose-500 to-transparent rounded-full" />
                </div>
            </section>

            {/* ── Mobilise Authority ── */}
            <MobiliseAuthoritySection variant="minimal" accentColor="rose" />

            {/* ── Why T5: Feature Cards ── */}
            <section className="py-32 bg-[#030710] border-t border-rose-500/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-rose-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Why T5</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            COMPACT <span className="text-rose-500">POWERHOUSE.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {WHY_CARDS.map((card, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="group p-8 bg-[#0a101f] border border-rose-500/10 rounded-3xl hover:border-rose-500/40 transition-all">
                                <div className="mb-6 p-4 rounded-2xl bg-rose-500/5 w-fit group-hover:bg-rose-500/15 transition-colors">
                                    <card.icon className="w-8 h-8 text-rose-400" />
                                </div>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3">{card.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed mb-6">{card.desc}</p>
                                <div className="px-4 py-3 rounded-xl bg-rose-500/10 border border-rose-500/20 inline-block">
                                    <span className="text-rose-400 font-black text-lg">{card.stat}</span>
                                    <span className="text-white/30 text-[10px] uppercase tracking-wider ml-2">{card.statLabel}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Video Section ── */}
            <VideoSection videoId="7PaZSanCbHI" title="KEENON T5 — Stable Heavy-Load Delivery" variant="inline" accentColor="rose" />

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
                        <span className="text-rose-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Full Specifications</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            TECHNICAL <span className="text-rose-500">DATA.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {SPECS.map((spec, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.04 }}
                                className="group p-5 bg-[#0a101f] border border-rose-500/10 rounded-2xl hover:border-rose-500/40 transition-all">
                                <span className="block text-white/25 text-[10px] uppercase font-black tracking-widest mb-1">{spec.label}</span>
                                <span className="block text-rose-400 font-black text-sm uppercase tracking-tight group-hover:text-white transition-colors">{spec.value}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Industry Grid ── */}
            <IndustryGrid
                industries={INDUSTRIES}
                accentColor="rose"
                heading="Built for"
                headingAccent="Every Venue"
                label="Universal Service"
                description="From boutique cafés to banquet halls, the T5 delivers consistent, high-capacity service across every hospitality environment."
            />

            {/* ── CTA ── */}
            <ProductCTA
                heading="COMPACT"
                headingAccent="BRILLIANCE."
                subtitle="Experience 4-tray heavy-load delivery in a compact frame. Engineered by KEENON, mastered by Mobilise."
                accentColor="rose"
                modelLabel="T5"
            />
        </div>
    );
}
