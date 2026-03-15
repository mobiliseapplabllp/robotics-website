import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import {
    ArrowRight, Monitor, Eye, Globe, Users, MessageSquare,
    MapPin, HandMetal, Sparkles, Languages, ScanFace,
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import {
    ProductLightbox, StickyFeatureSection, FloatingCTA,
    MobiliseAuthoritySection, IndustryGrid, VideoSection,
    ProductCTA, RobotFace,
} from "../../components/product";

/* ─── image assets ─────────────────────────────────────── */
const IMG_HERO = "https://static.keenon.com/uploads/2025/10/10/b8a2c1d4e5f6a7b8c9d0e1f2a3b4c5d6.jpg?x-oss-process=image/format,webp";
const IMG_GALLERY = [
    "https://static.keenon.com/uploads/2025/10/10/f1e2d3c4b5a6978869504132a7b8c9d0.jpg?x-oss-process=image/format,webp",
    "https://static.keenon.com/uploads/2025/10/10/a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d7.jpg?x-oss-process=image/format,webp",
];

/* ─── data ──────────────────────────────────────────────── */
const HERO_STATS = [
    { value: "40+", unit: "langs", label: "Languages", icon: Globe },
    { value: "Dual", unit: "screen", label: "Display", icon: Monitor },
    { value: "Face", unit: "ID", label: "Recognition", icon: ScanFace },
    { value: "24/7", unit: "active", label: "Operation", icon: Users },
];

const GUEST_JOURNEY = [
    { step: "01", title: "Arrival", desc: "G1 detects guest approach via depth sensors and initiates greeting protocol.", icon: Eye },
    { step: "02", title: "Recognition", desc: "Face recognition identifies returning VIPs and retrieves personalized preferences.", icon: ScanFace },
    { step: "03", title: "Greeting", desc: "Multilingual welcome in the guest's preferred language with branded content display.", icon: MessageSquare },
    { step: "04", title: "Escort", desc: "Autonomous navigation guides guests to their destination — room, meeting, or facility.", icon: MapPin },
    { step: "05", title: "Farewell", desc: "Personalized departure message with satisfaction survey and loyalty program integration.", icon: HandMetal },
];

const SPECS = [
    { label: "Dimensions (approx.)", value: "~600 × 500 × 1450 mm" },
    { label: "Weight", value: "~70 kg" },
    { label: "Display (Main)", value: "Dual advertising screens" },
    { label: "Face Recognition", value: "AI-powered identification" },
    { label: "Navigation", value: "LiDAR SLAM + Vision" },
    { label: "Languages", value: "40+" },
    { label: "Battery Life", value: "12+ hours" },
    { label: "Obstacle Avoidance", value: "360° multi-sensor" },
    { label: "Voice", value: "Bidirectional microphone" },
    { label: "Speaker", value: "4× surround array" },
    { label: "Escort Mode", value: "Autonomous path guidance" },
    { label: "Integration", value: "PMS / CRM / Access Control" },
];

const INDUSTRIES = [
    { title: "Hotels", desc: "Luxury lobby concierge with VIP recognition and room escort across multi-floor properties.", img: "/images/products/g1/industry_hotels.png" },
    { title: "Corporate HQ", desc: "Visitor reception, badge printing, and conference room escort for enterprise campuses.", img: "/images/products/g1/industry_corporate.png" },
    { title: "Hospitals", desc: "Patient and visitor wayfinding with multilingual support across sprawling medical campuses.", img: "/images/products/g1/industry_hospitals.png" },
    { title: "Museums", desc: "Interactive guided tours with multilingual narration and exhibit-specific content delivery.", img: "/images/products/g1/industry_museums.png" },
    { title: "Government", desc: "Public service kiosk with queue management, form assistance, and facility navigation.", img: "/images/products/g1/industry_government.png" },
];

const FEATURES = [
    { id: "display", title: "Dual Advertising Display System", image: IMG_GALLERY[0] },
    { id: "face", title: "AI-Powered Face Recognition", image: IMG_GALLERY[1] },
];

/* ─── main component ────────────────────────────────────── */
export function G1Page() {
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

            <ProductLightbox images={allImages} isOpen={lightboxOpen} currentIndex={lightboxIndex} onClose={closeLightbox} productName="G1" glowColor="rgba(217,70,239,0.15)" />
            <FloatingCTA bgColor="bg-fuchsia-500" glowColor="rgba(217,70,239,0.4)" glowHoverColor="rgba(217,70,239,0.6)" />

            {/* ── Hero: Luxury Lobby ── */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
                    {!showVideo && (
                        <ImageWithFallback src={IMG_HERO} alt="KEENON G1" className="w-full h-full object-cover opacity-30" />
                    )}
                    {showVideo && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden scale-110">
                            <iframe
                                className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 aspect-video"
                                src="https://www.youtube.com/embed/eqOReEjlZSk?autoplay=1&mute=1&controls=0&loop=1&playlist=eqOReEjlZSk&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
                                title="KEENON G1 Hero Video"
                                allow="autoplay; fullscreen"
                            />
                        </motion.div>
                    )}
                    <div className="absolute inset-0 bg-transparent z-10" />
                </motion.div>
                {/* Soft radial glow */}
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse 50% 60% at 50% 40%, rgba(217,70,239,0.06) 0%, transparent 70%)" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/50 to-black/40" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-fuchsia-500/40 bg-fuchsia-500/10 mb-6 uppercase tracking-[0.3em] font-black text-[10px] text-fuchsia-400">
                            <Sparkles className="w-3.5 h-3.5" /> AI Service & Reception Robot
                        </div>

                        <div className="flex justify-center mb-6">
                            <RobotFace expressions={["🎀", "✨", "💜", "🌸", "⭐", "💫"]} borderColor="border-fuchsia-500/40" shadowColor="shadow-fuchsia-500/20" />
                        </div>

                        <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-black leading-none tracking-tighter uppercase italic">
                            <span className="bg-gradient-to-br from-white via-fuchsia-100 to-fuchsia-500 bg-clip-text text-transparent">G1</span>
                        </h1>
                        <p className="text-2xl text-fuchsia-400 font-black uppercase tracking-[0.15em] mt-2 italic">The Digital Concierge</p>
                        <p className="text-white/40 text-lg max-w-xl mx-auto mt-4 mb-10 font-light">
                            40+ languages. Face recognition. Dual advertising screens. The AI-powered service and reception robot for premium hospitality.
                        </p>

                        {/* Stats bar */}
                        <div className="inline-flex flex-wrap justify-center gap-4 md:gap-0 bg-white/5 backdrop-blur-xl border border-fuchsia-500/20 rounded-2xl p-4 md:divide-x md:divide-white/10">
                            {HERO_STATS.map((stat) => (
                                <div key={stat.label} className="px-6 md:px-8 py-2 text-center">
                                    <stat.icon className="w-5 h-5 text-fuchsia-400 mx-auto mb-1.5" />
                                    <div className="text-2xl md:text-3xl font-black text-white tracking-tight">
                                        {stat.value} <span className="text-fuchsia-400/60 text-xs font-bold">{stat.unit}</span>
                                    </div>
                                    <div className="text-[9px] text-white/30 uppercase tracking-widest font-black mt-0.5">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">Scroll to Discover</span>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-12 bg-gradient-to-b from-fuchsia-500 to-transparent rounded-full" />
                </div>
            </section>

            {/* ── Mobilise Authority ── */}
            <MobiliseAuthoritySection variant="lines" accentColor="fuchsia" />

            {/* ── Guest Journey Timeline ── */}
            <section className="py-32 bg-[#030710] border-t border-fuchsia-500/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-fuchsia-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Guest Experience</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            GUEST <span className="text-fuchsia-500">JOURNEY.</span>
                        </h2>
                    </div>

                    {/* Horizontal timeline on desktop, vertical on mobile */}
                    <div className="grid md:grid-cols-5 gap-4 relative">
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent -translate-y-1/2" />
                        {GUEST_JOURNEY.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.12 }}
                                className="relative bg-[#0a101f] border border-fuchsia-500/15 rounded-2xl p-5 hover:border-fuchsia-500/50 transition-all group">
                                <div className="absolute -top-3 -left-2 text-[3rem] font-black text-fuchsia-500/10 leading-none select-none">{item.step}</div>
                                <div className="relative pt-8">
                                    <div className="p-3 rounded-xl bg-fuchsia-500/10 w-fit mb-3 group-hover:bg-fuchsia-500/20 transition-colors">
                                        <item.icon className="w-5 h-5 text-fuchsia-400" />
                                    </div>
                                    <h3 className="text-base font-black text-white uppercase tracking-tight mb-2">{item.title}</h3>
                                    <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Video Section ── */}
            <VideoSection videoId="mZv4UEyFGQg" title="KEENON G1 — The Digital Concierge" variant="cinematic" accentColor="fuchsia" />

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
                        <span className="text-fuchsia-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Full Specifications</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            TECHNICAL <span className="text-fuchsia-500">DATA.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {SPECS.map((spec, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.04 }}
                                className="group p-5 bg-[#0a101f] border border-fuchsia-500/10 rounded-2xl hover:border-fuchsia-500/40 transition-all">
                                <span className="block text-white/25 text-[10px] uppercase font-black tracking-widest mb-1">{spec.label}</span>
                                <span className="block text-fuchsia-400 font-black text-sm uppercase tracking-tight group-hover:text-white transition-colors">{spec.value}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Industry Grid ── */}
            <IndustryGrid
                industries={INDUSTRIES}
                accentColor="fuchsia"
                heading="Built for"
                headingAccent="Premium Service"
                label="Concierge Deployment"
                description="The G1 transforms guest experiences across luxury hospitality, corporate campuses, and public service environments with AI-powered interaction."
            />

            {/* ── CTA ── */}
            <ProductCTA
                heading="DIGITAL"
                headingAccent="CONCIERGE."
                subtitle="Experience AI-powered guest service with 40+ languages and face recognition. Engineered by KEENON, mastered by Mobilise."
                accentColor="fuchsia"
                modelLabel="G1"
            />
        </div>
    );
}
