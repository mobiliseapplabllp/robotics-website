import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
    ChevronRight, ArrowRight, X, ZoomIn, Bot,
    Navigation, Eye, Clock, Layers, Award, Shield, UserCheck,
    Monitor, Maximize2, Zap, ZapOff, Briefcase, Activity, Calendar
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

/* ─── image assets ─────────────────────────────────────── */
const IMG_HERO = "https://static.keenon.com/uploads/2025/08/27/d0e3350948ba4a86a0f604b7a4a23ba6.jpg?x-oss-process=image/format,webp";
const IMG_GALLERY = [
    "https://static.keenon.com/uploads/2025/08/27/bff71a3e19bc43f6ba5f7ee905555f1.jpg?x-oss-process=image/format,webp", // feature 1
    "https://static.keenon.com/uploads/2025/08/27/e5d5ba0f417346fbb0cbbdb038746f8a.jpg?x-oss-process=image/format,webp", // feature 2
    "https://static.keenon.com/uploads/2025/08/27/15eba5c9e4b54040a2048fd7dea74722.jpg?x-oss-process=image/format,webp", // feature 3
    "https://static.keenon.com/uploads/2025/09/01/aef7c671bab445fdbd46cea9cd50a781.png?x-oss-process=image/format,webp"  // feature 4
];

const INDUSTRIES = [
    {
        title: "Fine Dining",
        desc: "Sovereign delivery in narrow corridors with high-density patron seating.",
        img: "/images/products/t11/industry_fine_dining.png"
    },
    {
        title: "Corporate",
        desc: "Automated tray retrieval and catering service for modern tech campuses.",
        img: "/images/products/t11/industry_corporate.png"
    },
    {
        title: "Healthcare",
        desc: "Sterile-grade reliable transport for pharmaceutical and nutrition logistics.",
        img: "/images/products/t11/industry_healthcare.png"
    },
    {
        title: "Event Venues",
        desc: "18.5-inch marketing screen creates high-impact advertising and guest engagement.",
        img: "/images/products/t11/industry_events.png"
    },
    {
        title: "Hospitality",
        desc: "Compact guestroom deliveries and VIP service in luxury boutique hotels.",
        img: "/images/products/t11/industry_hospitality.png"
    }
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
    {
        id: "narrow_aisle",
        title: "The Narrow-Aisle Marketing Expert",
        image: IMG_GALLERY[1], // Tight space photo
    },
    {
        id: "advertising",
        title: "High-Impact 18.5\" Promotion Node",
        image: IMG_GALLERY[3], // Large screen photo
    },
    {
        id: "intelligence",
        title: "Self-Service Intelligent Sensing",
        image: IMG_GALLERY[2], // Tray interaction photo
    },
    {
        id: "stability",
        title: "Six-Wheel Shock Absorbing Chassis",
        image: IMG_GALLERY[0], // Lower chassis details
    }
];

/* ─── sub-components ────────────────────────────────────── */

function StickyFeatureSection({ img, index, text, openLightbox }: any) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

    return (
        <section ref={ref} className="relative h-[80vh] md:h-screen w-full overflow-hidden flex items-center justify-center">
            <motion.div className="absolute inset-0 w-full h-full scale-100">
                <ImageWithFallback src={img} alt={text} className="w-full h-full object-cover select-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
            </motion.div>

            <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="max-w-4xl text-center">
                    {/* Clean pure images as per C40 overhaul */}
                </motion.div>
            </div>

            <button onClick={() => openLightbox(index)}
                className="absolute inset-0 z-20 w-full h-full cursor-zoom-in" />
        </section>
    );
}

export function T11Page() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [showHangingCTA, setShowHangingCTA] = useState(false);

    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.8) setShowHangingCTA(true);
            else setShowHangingCTA(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const allImages = [IMG_HERO, ...IMG_GALLERY];
    function openLightbox(i: number) { setLightboxIndex(i); setLightboxOpen(true); }
    function closeLightbox() { setLightboxOpen(false); }

    return (
        <div className="min-h-screen bg-[#050a14] text-white overflow-x-hidden">

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 lg:p-12" onClick={closeLightbox}>
                        <button onClick={closeLightbox} className="absolute top-5 right-5 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white"><X className="w-5 h-5" /></button>
                        <motion.img key={lightboxIndex} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} src={allImages[lightboxIndex]}
                            className="max-w-full max-h-full object-contain rounded-2xl" onClick={(e) => e.stopPropagation()} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hanging CTA */}
            <motion.div initial={{ opacity: 0, scale: 0.8, x: 50 }} animate={{ opacity: 1, scale: 1, x: 0 }}
                className="fixed bottom-10 right-10 z-[80]">
                <Link to="/contact" className="group flex items-center gap-3 px-8 py-4 bg-blue-500 rounded-full text-white font-black text-lg shadow-[0_20px_60px_rgba(59,130,246,0.4)] hover:shadow-[0_25px_80px_rgba(59,130,246,0.6)] hover:scale-105 active:scale-95 transition-all">
                    Talk To Experts <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>

            {/* Video Hero Section */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <iframe
                        className="w-full h-[120%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-110 md:scale-100"
                        src="https://www.youtube.com/embed/9xLvVsv86KA?autoplay=1&mute=1&loop=1&playlist=9xLvVsv86KA&controls=0&showinfo=0&rel=0&iv_load_policy=3"
                        allow="autoplay; encrypted-media"
                        frameBorder="0"
                    />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-black/20 z-20" />

                <div className="relative z-30 w-full h-full pt-20">
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                        <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">Scroll to Discover</span>
                        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent rounded-full" />
                    </div>
                </div>
            </section>

            {/* Mobilise Authority Section */}
            <section className="py-32 bg-[#050a14] relative overflow-hidden border-b border-white/5">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[120px] rounded-full translate-x-1/2" />
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="text-blue-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">The Partner You Trust</motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter">
                        Global Technology.<br /><span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Local Mastery.</span>
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
                        className="max-w-3xl mx-auto text-white/50 text-lg leading-relaxed mb-12">
                        Dinerbot T11 is more than a robot; it&apos;s a marketing powerhouse. Developed by <span className="text-white font-semibold">Keenon</span> and expertly implemented by <span className="text-white font-semibold italic">Mobilise</span>, we ensure your intelligent delivery node integrates seamlessly into your brand&apos;s unique hospitality ecosystem.
                    </motion.p>
                </div>
            </section>

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
                    <StickyFeatureSection key={feat.id} img={feat.image} index={i} text={feat.title} openLightbox={openLightbox} />
                ))}
            </div>

            {/* Industry Solutions Grid */}
            <section className="py-24 bg-[#050a14] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-20 text-center">
                        <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-6">
                            Tailored for <span className="text-blue-500">Narrow Aisles</span>
                        </h2>
                        <p className="text-white/40 text-lg max-w-2xl mx-auto uppercase tracking-widest font-black">Intelligent Logic for Every Segment</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {INDUSTRIES.map((industry, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                                className="group relative h-[450px] overflow-hidden rounded-[2.5rem] bg-[#0d121c] border border-white/5">
                                <ImageWithFallback src={industry.img} alt={industry.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                <div className="absolute inset-0 flex flex-col justify-end p-8">
                                    <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{industry.title}</h4>
                                    <p className="text-white/40 text-xs font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{industry.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Decorative Background Text */}
            <div className="absolute -bottom-20 -right-20 text-[30rem] font-black text-white/[0.02] select-none leading-none -rotate-12 pointer-events-none">T11</div>

        </div>
    );
}
