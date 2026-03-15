import { useState, useRef } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Bot, Navigation, Zap, Shield } from "lucide-react";
import {
    ProductLightbox, StickyFeatureSection, FloatingCTA,
    MobiliseAuthoritySection, IndustryGrid, ProductCTA,
} from "../../components/product";

/* ─── local image assets ────────────────────────────────── */
const IMG_HERO = "/images/products/c40/c40_hero.webp";
const IMG_FEATURES = [
    "/images/products/c40/c40_feature_5.webp",
    "/images/products/c40/c40_feature_6.webp",
    "/images/products/c40/c40_feature_4.webp",
    "/images/products/c40/c40_feature_1.webp",
    "/images/products/c40/c40_feature_2.webp",
    "/images/products/c40/c40_feature_3.webp",
    "/images/products/c40/c40_feature_7.webp",
    "/images/products/c40/c40_feature_8.webp",
    "/images/products/c40/c40_feature_9.webp",
];

/* ─── data ──────────────────────────────────────────────── */
const SPECS = [
    {
        category: "Physical", items: [
            { label: "Dimensions (mm)", value: "578 × 500 × 690 (Basic)\n616 × 550 × 690 (w/ Squeegee)" },
            { label: "Operating Weight", value: "70 kg (inc. Battery)" },
        ]
    },
    {
        category: "Power & Runtime", items: [
            { label: "Battery Spec", value: "DC 25.6V, 50Ah" },
            { label: "Charging Type", value: "2h Quick Replacement" },
            { label: "Scrubbing Runtime", value: "Up to 5 Hours" },
            { label: "Sweeping Runtime", value: "Up to 12 Hours" },
        ]
    },
    {
        category: "Performance", items: [
            { label: "Sweeper Width", value: "560 mm (Dual Brush)" },
            { label: "Vacuum/Scrub Width", value: "400 mm" },
            { label: "Cleaning Efficiency", value: "Up to 1,100 m²/h" },
        ]
    },
    {
        category: "Capacity", items: [
            { label: "Clean Water Tank", value: "16 L" },
            { label: "Waste Water Tank", value: "14 L" },
            { label: "Dust Bag Capacity", value: "8 L" },
            { label: "Trash Bin Capacity", value: "0.7 L" },
        ]
    },
];

const INDUSTRIES = [
    { title: "Hospitality", desc: "Luxurious cleaning for marble lobbies and guest corridors with 5-star precision.", img: "/images/products/c40/industry_hospitality.png" },
    { title: "Healthcare", desc: "Maintaining sterile standards in clinics and corridors with anti-bacterial precision.", img: "/images/products/c40/industry_healthcare.png" },
    { title: "Retail", desc: "Spotless shopping experiences in high-traffic malls and luxury glass displays.", img: "/images/products/c40/industry_retail.png" },
    { title: "Corporate", desc: "Modern office environments demand quiet, efficient, and minimalist maintenance.", img: "/images/products/c40/industry_corporate.png" },
    { title: "Industrial", desc: "Precision cleaning in logistics hubs and high-tech clean-zone warehouses.", img: "/images/products/c40/industry_industrial.png" },
];

/* ─── main component ────────────────────────────────────── */
export function C40Page() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const allImages = [IMG_HERO, ...IMG_FEATURES];

    function openLightbox(i: number) { setLightboxIndex(i); setLightboxOpen(true); }
    function closeLightbox() { setLightboxOpen(false); }

    return (
        <div className="min-h-screen bg-[#050a14] text-white overflow-x-hidden selection:bg-orange-500 selection:text-white">

            {/* Lightbox */}
            <ProductLightbox
                images={allImages}
                isOpen={lightboxOpen}
                currentIndex={lightboxIndex}
                onClose={closeLightbox}
                productName="Industrial Cleaning Titan"
                glowColor="rgba(249,115,22,0.15)"
            />

            {/* Floating CTA */}
            <FloatingCTA
                bgColor="bg-orange-500"
                glowColor="rgba(249,115,22,0.4)"
                glowHoverColor="rgba(249,115,22,0.6)"
            />

            {/* Hero Section */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
                    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden scale-110">
                        <iframe
                            className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 aspect-video"
                            src="https://www.youtube.com/embed/Gd4mC4TcF6s?autoplay=1&mute=1&controls=0&loop=1&playlist=Gd4mC4TcF6s&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
                            title="KEENON C40 Hero Video"
                            allow="autoplay; fullscreen"
                        />
                    </div>
                    <div className="absolute inset-0 bg-transparent z-10" />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-black/40" />

                <div className="absolute bottom-12 right-12 z-20">
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
                        <Link to="/contact" className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full text-white font-black text-lg shadow-[0_0_40px_rgba(249,115,22,0.3)] hover:shadow-[0_0_60px_rgba(249,115,22,0.5)] transition-all flex items-center gap-3">
                            Talk To Experts <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">Scroll to Discover</span>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-12 bg-gradient-to-b from-orange-500 to-transparent rounded-full" />
                </div>
            </section>

            {/* Mobilise Authority Section */}
            <MobiliseAuthoritySection
                variant="lines"
                accentColor="orange"
                description='While Keenon builds the hardware, <span class="text-white font-bold">Mobilise App Lab Limited</span> delivers the mastery. We don&apos;t just sell robots; we architect end-to-end autonomous solutions that redefine facility management for the Indian market.'
            />

            {/* Sticky Reveal Gallery */}
            <div className="w-full relative z-20">
                {IMG_FEATURES.map((img, i) => (
                    <StickyFeatureSection
                        key={i}
                        img={img}
                        alt={`C40 Feature ${i + 1}`}
                        index={i}
                        openLightbox={(idx: number) => openLightbox(idx + 1)}
                    />
                ))}
            </div>

            {/* Comprehensive Specs */}
            <section className="py-32 bg-[#030712] relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter italic">Technical <span className="text-orange-500">Superiority.</span></h2>
                        <p className="text-white/40 text-xl max-w-2xl mx-auto">No placeholders. No compromises. Just pure industrial innovation.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {SPECS.flatMap(cat => cat.items).map((item, idx) => (
                            <div key={idx} className="group p-5 bg-[#050a14] border border-orange-500/10 hover:border-orange-500/50 rounded-2xl transition-all hover:bg-orange-500/[0.03] flex flex-col justify-between shadow-[0_0_20px_rgba(249,115,22,0.02)] hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
                                <div className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-3 group-hover:text-white/50 transition-colors">{item.label}</div>
                                <div className="text-orange-500 text-lg md:text-xl font-black tracking-tight leading-snug whitespace-pre-line group-hover:text-orange-400 transition-colors">{item.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Impact Grid */}
            <section className="py-32 bg-[#050a14]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none mb-6">Global <span className="text-orange-500">Impact.</span></h2>
                        <p className="text-white/40 text-xl font-light tracking-wide uppercase tracking-[0.2em]">KEENON Robotics • Worldwide Presence</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { label: "Daily Deliveries", val: "100K+", icon: Bot },
                            { label: "Global Coverage", val: "60+ Countries", icon: Navigation },
                            { label: "Uptime Rate", val: "99.9%", icon: Zap },
                            { label: "Certified Safety", val: "CE / RoHS", icon: Shield },
                        ].map((stat, i) => (
                            <div key={i} className="p-10 border border-white/5 bg-white/[0.01] rounded-3xl text-center">
                                <stat.icon className="w-10 h-10 text-orange-500 mx-auto mb-6" />
                                <div className="text-4xl font-black text-white mb-2">{stat.val}</div>
                                <div className="text-white/40 text-xs font-black uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Solutions Grid */}
            <IndustryGrid
                industries={INDUSTRIES}
                accentColor="orange"
                description="The C40 isn't just a robot; it's a specialist that adapts to the unique sanitation demands of every high-traffic sector."
            />

            {/* CTA Section */}
            <ProductCTA
                heading="TRANSFORM YOUR"
                headingAccent="FACILITY."
                subtitle="The future of autonomous cleaning is here. Engineered by KEENON, deployed by Mobilise."
                accentColor="orange"
                modelLabel="C40"
            />

        </div>
    );
}
