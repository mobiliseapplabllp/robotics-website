import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Filter, Minimize2, Sparkles } from "lucide-react";
import {
    ProductLightbox, ParallaxGalleryItem, FloatingCTA,
    MobiliseAuthoritySection, IndustryGrid, VideoSection, ProductCTA,
} from "../../components/product";

/* ─── image assets ─────────────────────────────────────── */
const IMG_HERO = "https://static.keenon.com/uploads/2025/05/30/3c032df429624ffa92ac6637b5dabe04.jpg?x-oss-process=image/format,webp";
const IMG_GALLERY = [
    "https://static.keenon.com/uploads/2025/05/30/92729e51aaa74750b1d077c75c631a2b.jpg?x-oss-process=image/format,webp",
    "https://static.keenon.com/uploads/2025/05/30/cecf06ebc4bb492688f605e2412e4052.jpg?x-oss-process=image/format,webp",
    "https://static.keenon.com/uploads/2025/05/30/be9a556dec134c0ca696adad0952edd3.jpg?x-oss-process=image/format,webp",
    "https://static.keenon.com/uploads/2025/04/10/bffedda3ed8a49fb9d48db0731dafa3b.png?x-oss-process=image/format,webp",
];

/* ─── data ──────────────────────────────────────────────── */
const NOISE_COMPARISON = [
    { label: "Jet Engine", db: 140, width: "100%" },
    { label: "Concert", db: 110, width: "78%" },
    { label: "City Traffic", db: 85, width: "60%" },
    { label: "Normal Talk", db: 60, width: "42%" },
    { label: "C20 Operating", db: 52, width: "37%", highlight: true },
    { label: "Library", db: 40, width: "28%" },
    { label: "Whisper", db: 30, width: "21%" },
];

const COMPACT_FEATURES = [
    {
        icon: Minimize2,
        title: "351mm Ultra-Low Profile",
        desc: "At just 351mm tall and 22 kg, the C20 fits under furniture, shelving, and through tight spaces where larger robots cannot operate.",
    },
    {
        icon: Sparkles,
        title: "3-in-1 Cleaning",
        desc: "Sweeping (450mm), scrubbing (285mm), and mopping in a single pass. One robot replaces three separate cleaning processes.",
    },
    {
        icon: Filter,
        title: "Professional Filtration",
        desc: "Multi-surface cleaning across tile, marble, vinyl, and hardwood with precision edge-following for thorough coverage.",
    },
];

const SPECS = [
    { label: "Dimensions (W×D×H)", value: "523 × 400 × 351 mm" },
    { label: "Weight", value: "22 kg" },
    { label: "Sweeping Width", value: "450 mm" },
    { label: "Scrubbing Width", value: "285 mm" },
    { label: "Cleaning Efficiency", value: "400 m²/h" },
    { label: "Clean Water Tank", value: "7 L" },
    { label: "Dirty Water Tank", value: "5 L" },
    { label: "Charging Time", value: "4 hours" },
    { label: "Navigation", value: "LiDAR + Visual SLAM" },
    { label: "Operation Modes", value: "Auto / Manual / Schedule" },
    { label: "Connectivity", value: "Wi-Fi / 4G" },
    { label: "Multi-Surface", value: "Tile, Marble, Vinyl, Wood" },
];

const INDUSTRIES = [
    { title: "Clinics", desc: "Whisper-quiet cleaning in patient-sensitive environments with medical-grade surface care.", img: "/images/products/c20/industry_clinic.png" },
    { title: "Hotels", desc: "Nighttime cleaning in guest corridors and lobbies without disturbing rest hours.", img: "/images/products/c20/industry_hotel.png" },
    { title: "Libraries", desc: "Silent autonomous maintenance for study halls, reading rooms, and archive areas.", img: "/images/products/c20/industry_library.png" },
    { title: "Retail", desc: "Ultra-compact maneuvering between display aisles and under shelving units.", img: "/images/products/c20/industry_retail.png" },
    { title: "Offices", desc: "Scheduled after-hours cleaning for co-working spaces and corporate floors.", img: "/images/products/c20/industry_office.png" },
];

const GALLERY_FEATURES = [
    { id: "compact", text: "Ultra-Compact 351mm Profile" },
    { id: "cleaning", text: "3-in-1 Sweep, Scrub & Mop" },
];

/* ─── main component ────────────────────────────────────── */
export function C20Page() {
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
                productName="C20"
                glowColor="rgba(163,230,53,0.15)"
            />

            {/* Floating CTA */}
            <FloatingCTA
                bgColor="bg-lime-500"
                glowColor="rgba(163,230,53,0.4)"
                glowHoverColor="rgba(163,230,53,0.6)"
            />

            {/* ── Hero ── */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={IMG_HERO}
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/videos/c20-hero.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-transparent z-10" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-transparent" />
                <div className="relative z-10" />
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">Scroll to Discover</span>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-12 bg-gradient-to-b from-lime-500 to-transparent rounded-full" />
                </div>
            </section>

            {/* ── Mobilise Authority ── */}
            <MobiliseAuthoritySection
                variant="minimal"
                accentColor="lime"
                description='While Keenon builds the hardware, <strong class="text-white">Mobilise App Lab Limited</strong> delivers the mastery. We deploy ultra-compact cleaning solutions for India&apos;s most space-constrained and noise-sensitive commercial environments.'
            />

            {/* ── Noise Comparison Visualization ── */}
            <section className="py-32 bg-[#030710] border-t border-lime-500/10">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-lime-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Silence Engineered</span>
                        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic leading-none">
                            HOW QUIET IS <span className="text-lime-500">52 dB?</span>
                        </h2>
                    </div>

                    <div className="space-y-3">
                        {NOISE_COMPARISON.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className={`flex items-center gap-4 p-4 rounded-xl ${item.highlight ? "bg-lime-500/10 border border-lime-500/30" : "bg-white/[0.02]"}`}
                            >
                                <span className={`text-xs font-black uppercase tracking-wider w-28 shrink-0 ${item.highlight ? "text-lime-400" : "text-white/30"}`}>
                                    {item.label}
                                </span>
                                <div className="flex-1 h-6 bg-white/5 rounded-full overflow-hidden relative">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: item.width }}
                                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                                        className={`h-full rounded-full ${item.highlight ? "bg-gradient-to-r from-lime-500 to-green-400" : "bg-white/10"}`}
                                    />
                                </div>
                                <span className={`text-sm font-black w-16 text-right ${item.highlight ? "text-lime-400" : "text-white/40"}`}>
                                    {item.db} dB
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Compact Features: 3-Column ── */}
            <section className="py-32 bg-[#050a14]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-lime-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Compact Engineering</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            FITS <span className="text-lime-500">EVERYWHERE.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {COMPACT_FEATURES.map((feat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="group p-8 bg-[#0a101f] border border-lime-500/10 rounded-3xl hover:border-lime-500/40 transition-all"
                            >
                                <div className="mb-6 p-4 rounded-2xl bg-lime-500/5 w-fit group-hover:bg-lime-500/15 transition-colors">
                                    <feat.icon className="w-8 h-8 text-lime-400" />
                                </div>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3">{feat.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed">{feat.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Video Section ── */}
            <VideoSection
                videoId="EW4Td73DFEI"
                title="KEENON C20 — Ultra-Compact 3-in-1 Cleaning Robot"
                variant="inline"
                accentColor="lime"
            />

            {/* ── Parallax Gallery ── */}
            <div className="w-full">
                {GALLERY_FEATURES.map((feat, i) => (
                    <ParallaxGalleryItem
                        key={feat.id}
                        img={IMG_GALLERY[i] || IMG_HERO}
                        index={i + 1}
                        featureText={feat.text}
                        accentBorder="border-lime-500"
                        openLightbox={openLightbox}
                    />
                ))}
            </div>

            {/* ── Spec Grid ── */}
            <section className="py-32 bg-[#050a14]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-lime-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Compact Powerhouse</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            TECHNICAL <span className="text-lime-500">SUPERIORITY.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {SPECS.map((spec, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="group p-5 bg-[#0a101f] border border-lime-500/10 rounded-2xl hover:border-lime-500/40 transition-all"
                            >
                                <span className="block text-white/25 text-[10px] uppercase font-black tracking-widest mb-1">{spec.label}</span>
                                <span className="block text-lime-400 font-black text-sm uppercase tracking-tight group-hover:text-white transition-colors">{spec.value}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Industry Grid ── */}
            <IndustryGrid
                industries={INDUSTRIES}
                accentColor="lime"
                heading="Engineered for"
                headingAccent="Quiet Spaces"
                label="Silent Deployment"
                description="The C20 excels in noise-sensitive and space-constrained environments where traditional cleaning equipment simply cannot operate."
            />

            {/* ── CTA ── */}
            <ProductCTA
                heading="SILENT"
                headingAccent="CLEAN."
                subtitle="Experience ultra-compact autonomous cleaning that disturbs no one. Engineered by KEENON, mastered by Mobilise."
                accentColor="lime"
                modelLabel="C20"
            />
        </div>
    );
}
