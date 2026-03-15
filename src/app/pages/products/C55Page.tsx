import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import {
    ArrowRight, Droplets, Zap, Eye, Battery, Gauge,
    RotateCcw, Waves, ScanLine, Timer,
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import {
    ProductLightbox, StickyFeatureSection, FloatingCTA,
    MobiliseAuthoritySection, IndustryGrid, VideoSection, ProductCTA,
} from "../../components/product";

/* ─── image assets ─────────────────────────────────────── */
const IMG_HERO = "https://static.keenon.com/uploads/2025/11/06/a3d819df7793438f972564c14317a30a.jpg?x-oss-process=image/format,webp";
const IMG_GALLERY = [
    "https://static.keenon.com/uploads/2025/11/06/f48c34667e804421b3adad48fd4a5554.jpg?x-oss-process=image/format,webp",
    "https://static.keenon.com/uploads/2025/11/06/81b0e062e21641709871839ebd0e51f5.jpg?x-oss-process=image/format,webp",
    "https://static.keenon.com/uploads/2025/11/06/c59144d457384c979a929e1ebd75ed66.jpg?x-oss-process=image/format,webp",
];

/* ─── data ──────────────────────────────────────────────── */
const HERO_STATS = [
    { value: "2,376", unit: "m²/h", label: "Efficiency" },
    { value: "5s", unit: "swap", label: "Battery" },
    { value: "550", unit: "mm", label: "Scrub Width" },
    { value: "360°", unit: "view", label: "Perception" },
];

const TRIPLE_VS_DUAL = [
    { aspect: "Debris Capture", triple: "Sweeps & scrubs in one pass", dual: "Requires separate sweep pass", icon: Droplets },
    { aspect: "Water Usage", triple: "Doubled efficiency per liter", dual: "Standard water consumption", icon: Waves },
    { aspect: "Coverage Speed", triple: "2,376 m²/h continuous", dual: "Lower throughput per cycle", icon: Gauge },
];

const BATTERY_STEPS = [
    { step: "01", title: "Dock", desc: "C55 returns to battery station automatically when charge is low.", icon: Battery },
    { step: "02", title: "Eject", desc: "Depleted battery pack slides out in under 3 seconds.", icon: RotateCcw },
    { step: "03", title: "Insert", desc: "Fresh battery snaps in — total swap time under 5 seconds.", icon: Zap },
    { step: "04", title: "Resume", desc: "Cleaning resumes instantly from where it stopped. Zero downtime.", icon: Timer },
];

const SPECS = [
    { label: "Dimensions (W×D×H)", value: "860 × 850 × 1082 mm" },
    { label: "Weight", value: "150 kg" },
    { label: "Scrub Width", value: "550 mm" },
    { label: "Cleaning Efficiency", value: "2,376 m²/h" },
    { label: "Clean Water Tank", value: "60 L" },
    { label: "Dirty Water Tank", value: "47 L" },
    { label: "Runtime", value: "5 hours per battery set" },
    { label: "Battery", value: "Dual hot-swappable (5s)" },
    { label: "Roller System", value: "Triple-roller (industry first)" },
    { label: "Obstacle Clearance", value: "Up to 5 cm" },
    { label: "Perception", value: "360° (LiDAR + 4 stereo cameras)" },
    { label: "Tank Design", value: "Patented 3-second flip" },
    { label: "Water Control", value: "Autonomous workstation" },
];

const INDUSTRIES = [
    { title: "Infrastructure", desc: "Underground parking, transit hubs, and large public facility cleaning at scale.", img: "/images/products/c55/industry_infrastructure.png" },
    { title: "Retail", desc: "Shopping mall and commercial center floor maintenance with zero disruption.", img: "/images/products/c55/industry_retail.png" },
    { title: "Aviation", desc: "Airport terminal cleaning with autonomous operation across massive floor areas.", img: "/images/products/c55/industry_aviation.png" },
    { title: "Manufacturing", desc: "Factory floor and warehouse cleaning with obstacle clearance up to 5 cm.", img: "/images/products/c55/industry_manufacturing.png" },
    { title: "Hospitality", desc: "Convention center and large hotel lobby cleaning with 24/7 operation.", img: "/images/products/c55/industry_hospitality.png" },
];

const FEATURES = [
    { id: "roller", title: "Triple-Roller Sweep & Scrub", image: IMG_GALLERY[0] },
    { id: "perception", title: "360° Panoramic Perception", image: IMG_GALLERY[1] },
    { id: "tank", title: "3-Second Flip Tank Design", image: IMG_GALLERY[2] },
];

/* ─── main component ────────────────────────────────────── */
export function C55Page() {
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
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

    const allImages = [IMG_HERO, ...IMG_GALLERY];
    function openLightbox(i: number) { setLightboxIndex(i); setLightboxOpen(true); }
    function closeLightbox() { setLightboxOpen(false); }

    return (
        <div className="min-h-screen bg-[#050a14] text-white overflow-x-hidden">

            <ProductLightbox images={allImages} isOpen={lightboxOpen} currentIndex={lightboxIndex} onClose={closeLightbox} productName="C55" glowColor="rgba(16,185,129,0.15)" />
            <FloatingCTA bgColor="bg-emerald-500" glowColor="rgba(16,185,129,0.4)" glowHoverColor="rgba(16,185,129,0.6)" />

            {/* ── Hero: Engineering Cutaway ── */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0">
                    {!showVideo && (
                        <ImageWithFallback src={IMG_HERO} alt="KEENON C55" className="w-full h-full object-cover" />
                    )}
                    {showVideo && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden scale-110">
                            <iframe
                                className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 aspect-video"
                                src="https://www.youtube.com/embed/WBlkoDMBsZI?autoplay=1&mute=1&controls=0&loop=1&playlist=WBlkoDMBsZI&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
                                title="KEENON C55 Hero Video"
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
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-12 bg-gradient-to-b from-emerald-500 to-transparent rounded-full" />
                </div>
            </section>

            {/* ── Mobilise Authority ── */}
            <MobiliseAuthoritySection variant="glow" accentColor="emerald" />

            {/* ── Triple vs Dual Comparison ── */}
            <section className="py-32 bg-[#030710] border-t border-emerald-500/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-emerald-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Innovation</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            TRIPLE-ROLLER <span className="text-emerald-500">ADVANTAGE.</span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {TRIPLE_VS_DUAL.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                                className="grid md:grid-cols-[1fr_2fr_2fr] gap-4 items-center p-6 bg-[#0a101f] border border-emerald-500/10 rounded-2xl hover:border-emerald-500/30 transition-all">
                                <div className="flex items-center gap-3">
                                    <item.icon className="w-6 h-6 text-emerald-400" />
                                    <span className="text-white font-black uppercase text-sm">{item.aspect}</span>
                                </div>
                                <div className="px-4 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                                    <span className="text-[9px] text-emerald-400 uppercase tracking-widest font-black block mb-1">C55 Triple</span>
                                    <span className="text-white/70 text-sm">{item.triple}</span>
                                </div>
                                <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl">
                                    <span className="text-[9px] text-white/30 uppercase tracking-widest font-black block mb-1">Standard Dual</span>
                                    <span className="text-white/40 text-sm">{item.dual}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Hot-Swap Battery System ── */}
            <section className="py-32 bg-[#050a14]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-emerald-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Zero Downtime</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            HOT-SWAP <span className="text-emerald-500">BATTERY.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 relative">
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent -translate-y-1/2" />
                        {BATTERY_STEPS.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.15 }}
                                className="relative bg-[#0a101f] border border-emerald-500/15 rounded-2xl p-6 hover:border-emerald-500/50 transition-all group">
                                <div className="absolute -top-3 -left-2 text-[4rem] font-black text-emerald-500/10 leading-none select-none">{item.step}</div>
                                <div className="relative pt-10">
                                    <div className="p-3 rounded-xl bg-emerald-500/10 w-fit mb-4 group-hover:bg-emerald-500/20 transition-colors">
                                        <item.icon className="w-6 h-6 text-emerald-400" />
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
            <VideoSection videoId="Bv9XN3S_DkI" title="KEENON C55 — Triple-Roller Revolution" variant="cinematic" accentColor="emerald" />

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
                        <span className="text-emerald-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Industrial Grade</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            TECHNICAL <span className="text-emerald-500">SUPERIORITY.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {SPECS.map((spec, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.04 }}
                                className="group p-5 bg-[#0a101f] border border-emerald-500/10 rounded-2xl hover:border-emerald-500/40 transition-all">
                                <span className="block text-white/25 text-[10px] uppercase font-black tracking-widest mb-1">{spec.label}</span>
                                <span className="block text-emerald-400 font-black text-sm uppercase tracking-tight group-hover:text-white transition-colors">{spec.value}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Industry Grid ── */}
            <IndustryGrid industries={INDUSTRIES} accentColor="emerald" heading="Built for" headingAccent="Industrial Scale" label="Commercial Deployment"
                description="The C55 is engineered for the largest commercial cleaning operations — from airport terminals to underground parking garages." />

            {/* ── CTA ── */}
            <ProductCTA heading="TRIPLE-ROLLER" headingAccent="REVOLUTION." subtitle="Experience industrial cleaning redefined. Engineered by KEENON, mastered by Mobilise." accentColor="emerald" modelLabel="C55" />
        </div>
    );
}
