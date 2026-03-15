import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Wind, Layers } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import {
    ProductLightbox, StickyFeatureSection, FloatingCTA,
    MobiliseAuthoritySection, IndustryGrid, ProductCTA,
} from "../../components/product";

/* ─── image assets ─────────────────────────────────────── */
const IMG_HERO = "https://static.keenon.com/uploads/2025/01/07/5bc901fd4a6a4f8d925eee15d5282b28.jpg?x-oss-process=image/format,webp";
const IMG_GALLERY = [
    "https://static.keenon.com/uploads/2025/01/07/de67edd2fbee407aaadd617ded3e9fdf.jpg?x-oss-process=image/format,webp"
];

/* ─── data ──────────────────────────────────────────────── */
const SPECS = [
    {
        category: "Physical", items: [
            { label: "Dimensions (mm)", value: "490 × 520 × 750 (Basic)" },
            { label: "Operating Weight", value: "35 kg (inc. Battery)" },
        ]
    },
    {
        category: "Power & Runtime", items: [
            { label: "Suction Power", value: "19,000 Pa (Industry Lead)" },
            { label: "Charging Time", value: "5-6h (Wall-Plug)" },
            { label: "Vacuum Runtime", value: "Up to 6 Hours" },
            { label: "Mop Runtime", value: "Up to 10 Hours" },
        ]
    },
    {
        category: "Performance", items: [
            { label: "Cleaning Width", value: "610 mm (Dual Brush)" },
            { label: "Moving Speed", value: "0.8 m/s" },
            { label: "Cleaning Efficiency", value: "Up to 600 m²/h" },
        ]
    },
    {
        category: "Capabilities", items: [
            { label: "3-in-1 Tech", value: "Sweep, Vacuum, Dust Mop" },
            { label: "Navigation", value: "AI + Hybrid Manual" },
            { label: "Surface Type", value: "All Hard Floors & Carpets" },
        ]
    },
];

const INDUSTRIES = [
    { title: "Retail Elite", desc: "Precision cleaning for luxury boutiques and high-traffic fashion floors.", img: "/images/products/c30/industry_retail.png" },
    { title: "Corporate", desc: "Low-noise vacuuming for cubicle corridors and minimalist office lounges.", img: "/images/products/c30/industry_office.png" },
    { title: "Healthcare", desc: "Sterile-grade dust maintenance in private clinics and pharmacy waiting areas.", img: "/images/products/c30/industry_healthcare.png" },
    { title: "Boutique", desc: "Intelligent floor care for cafes, art galleries, and luxury boutique hotels.", img: "/images/products/c30/industry_hospitality.png" },
    { title: "Education", desc: "Safe and silent operation in modern library halls and university classrooms.", img: "/images/products/c30/industry_education.png" },
];

const FEATURES = [
    {
        id: "dryclean",
        title: "3-in-1 Dry Cleaning",
        image: IMG_GALLERY[0],
    },
    {
        id: "hybrid",
        title: "Hybrid Control System",
        image: IMG_HERO,
    },
];

/* ─── main component ────────────────────────────────────── */
export function C30Page() {
    const [activeSpecCat, setActiveSpecCat] = useState(0);
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
            />

            {/* Floating CTA */}
            <FloatingCTA
                bgColor="bg-cyan-500"
                glowColor="rgba(6,182,212,0.4)"
                glowHoverColor="rgba(6,182,212,0.6)"
            />

            {/* Hero Section */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
                    {!showVideo && (
                        <ImageWithFallback src={IMG_HERO} alt="KEENON C30" className="w-full h-full object-cover opacity-60" />
                    )}
                    {showVideo && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden scale-110">
                            <iframe
                                className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 aspect-video"
                                src="https://www.youtube.com/embed/nHcg64XRxks?autoplay=1&mute=1&controls=0&loop=1&playlist=nHcg64XRxks&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
                                title="KEENON C30 Hero Video"
                                allow="autoplay; fullscreen"
                            />
                        </motion.div>
                    )}
                    <div className="absolute inset-0 bg-transparent z-10" />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-black/40" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 mb-6 uppercase tracking-[0.3em] font-black text-[10px] text-cyan-400">
                            3-in-1 Dry Cleaning Specialist
                        </div>
                        <h1 className="text-7xl sm:text-8xl lg:text-[10rem] font-black leading-none mb-4 tracking-tighter uppercase italic">
                            <span className="bg-gradient-to-br from-white via-cyan-100 to-cyan-500 bg-clip-text text-transparent">C30</span>
                        </h1>
                        <p className="text-2xl text-cyan-400 font-black uppercase tracking-[0.2em] mb-6 drop-shadow-[0_0_20px_rgba(6,182,212,0.3)] italic">"Intelligence You Can Handle"</p>
                        <p className="text-white/40 text-lg max-w-2xl mx-auto mb-10 font-light">
                            Professional vacuuming, sweeping, and dust mopping with 19,000 Pa suction and breakthrough hybrid manual control.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute bottom-12 right-12 z-20">
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
                        <Link to="/contact" className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-black text-lg shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:shadow-[0_0_60px_rgba(6,182,212,0.5)] transition-all flex items-center gap-3">
                            Talk To Experts <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">Scroll to Discover</span>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-transparent rounded-full" />
                </div>
            </section>

            {/* Mobilise Authority Section */}
            <MobiliseAuthoritySection
                variant="lines"
                accentColor="cyan"
                description='While Keenon builds the hardware, <span class="text-white font-bold">Mobilise App Lab Limited</span> delivers the mastery. We specialize in deploying high-precision dry-cleaning solutions for India&apos;s premier commercial and retail spaces.'
            />

            {/* Feature Parallax */}
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

            {/* Technical Superiority */}
            <section className="py-32 bg-[#050a14]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-cyan-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Power Meets Precision</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">Technical <span className="text-cyan-500">Superiority.</span></h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {SPECS.flatMap(cat => cat.items).map((item, idx) => (
                            <div key={idx} className="group p-5 bg-[#0a101f] border border-cyan-500/20 rounded-2xl hover:border-cyan-500/60 transition-all">
                                <span className="block text-white/30 text-[10px] uppercase font-black tracking-widest mb-1">{item.label}</span>
                                <span className="block text-cyan-400 font-black text-sm uppercase tracking-tighter transition-colors group-hover:text-white">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Solutions Grid */}
            <IndustryGrid
                industries={INDUSTRIES}
                accentColor="cyan"
                label="Specialist Deployment"
                description="The C30 is engineered for high-precision dry maintenance in the most detailed commercial environments."
            />

            {/* CTA Section */}
            <ProductCTA
                heading="PRECISION"
                headingAccent="DRY CLEAN."
                subtitle="Experience the ultimate in autonomous floor maintenance. Engineered by KEENON, mastered by Mobilise."
                accentColor="cyan"
                modelLabel="C30"
            />

        </div>
    );
}
