import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { DoorOpen, Layers, ShieldCheck, Route, Footprints, Lock, Thermometer, Box } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import {
    ProductLightbox, ParallaxGalleryItem, FloatingCTA,
    MobiliseAuthoritySection, IndustryGrid, VideoSection, ProductCTA,
} from "../../components/product";

/* ─── image assets ─────────────────────────────────────── */
const IMG_HERO = "https://static.keenon.com/uploads/2025/01/07/0a4ae5b928164780870b214d28ce872e.jpg?x-oss-process=image/format,webp";
const IMG_GALLERY = [
    "https://static.keenon.com/uploads/2025/01/07/2f6e0938cdf14d17ae050fdee9d9b42c.webp",
    "https://static.keenon.com/uploads/2024/12/30/3913f366f6bd405fa392f50f011c88bd.webp",
];

/* ─── data ──────────────────────────────────────────────── */
const HERO_STATS = [
    { value: "180L", label: "Cabin Volume", icon: Box },
    { value: "40 kg", label: "Load Capacity", icon: Layers },
    { value: "12 hr", label: "Battery Life", icon: Thermometer },
];

const HYGIENE_FEATURES = [
    {
        icon: Footprints,
        title: "Step-Activated Doors",
        desc: "Contactless foot-step activation enables zero-touch door operation, maintaining sterile delivery conditions in healthcare and catering environments.",
    },
    {
        icon: Lock,
        title: "Password-Secured Access",
        desc: "Individual password protection on each compartment ensures private, secure delivery for pharmaceuticals, confidential documents, and premium room service.",
    },
    {
        icon: ShieldCheck,
        title: "Spill-Proof Enclosure",
        desc: "Fully enclosed 180L cabin with adjustable layer heights (23cm, 38cm, 69cm) prevents contamination and protects temperature-sensitive cargo during transport.",
    },
];

const SPECS = [
    { label: "Dimensions (W×D×H)", value: "496 × 623 × 1351 mm" },
    { label: "Weight", value: "71 kg (inc. battery)" },
    { label: "Cabin Volume", value: "180 L" },
    { label: "Load Capacity", value: "40 kg total" },
    { label: "Adjustable Heights", value: "23 / 38 / 69 cm" },
    { label: "Layer Size", value: "422 × 575 mm" },
    { label: "Door Type", value: "Step-activated & Password" },
    { label: "Speed", value: "0.1 – 1.0 m/s" },
    { label: "Battery Life", value: "Up to 12 hours" },
    { label: "Min Passage Width", value: "75 cm" },
    { label: "Navigation", value: "Precise Positioning + vSLAM" },
    { label: "Avoidance", value: "3D Perception Fusion" },
];

const INDUSTRIES = [
    { title: "Healthcare", desc: "Sterile transport for pharmaceuticals, lab specimens, and medical supplies across hospital floors.", img: "/images/products/t3/industry_healthcare.png" },
    { title: "Fine Dining", desc: "Private, spill-proof dish delivery for VIP dining rooms and high-end restaurant service.", img: "/images/products/t3/industry_dining.png" },
    { title: "Catering", desc: "Hygienic bulk food transport for banquets, conference centers, and large-scale catering operations.", img: "/images/products/t3/industry_catering.png" },
    { title: "Hotels", desc: "Secure room service delivery with password-protected compartments for guest privacy.", img: "/images/products/t3/industry_hotel.png" },
    { title: "Pharma", desc: "Temperature-controlled enclosed delivery for pharmaceutical logistics and laboratory supply chains.", img: "/images/products/t3/industry_pharma.png" },
];

const GALLERY_FEATURES = [
    { id: "doors", text: "Step-Activated Automatic Doors" },
    { id: "capacity", text: "180L Enclosed Cabin Volume" },
];

/* ─── main component ────────────────────────────────────── */
export function T3Page() {
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
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

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
                productName="T3"
                glowColor="rgba(20,184,166,0.15)"
            />

            {/* Floating CTA */}
            <FloatingCTA
                bgColor="bg-teal-500"
                glowColor="rgba(20,184,166,0.4)"
                glowHoverColor="rgba(20,184,166,0.6)"
            />

            {/* ── Hero ── */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0">
                    {!showVideo && (
                        <ImageWithFallback src={IMG_HERO} alt="KEENON T3" className="w-full h-full object-cover" />
                    )}
                    {showVideo && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden scale-110">
                            <iframe
                                className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 aspect-video"
                                src="https://www.youtube.com/embed/cN2EAXcqVL4?autoplay=1&mute=1&controls=0&loop=1&playlist=cN2EAXcqVL4&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
                                title="KEENON T3 Hero Video"
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
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-12 bg-gradient-to-b from-teal-500 to-transparent rounded-full" />
                </div>
            </section>

            {/* ── Mobilise Authority ── */}
            <MobiliseAuthoritySection
                variant="minimal"
                accentColor="teal"
                description='While Keenon builds the hardware, <strong class="text-white">Mobilise App Lab Limited</strong> delivers the mastery. We architect end-to-end hygienic delivery solutions for India&apos;s leading hospitals, hotels, and premium F&B establishments.'
            />

            {/* ── Hygiene Architecture: 3-Column Blueprint Cards ── */}
            <section className="py-32 bg-[#050a14] relative">
                {/* Blueprint grid lines */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: "linear-gradient(rgba(20,184,166,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
                />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-teal-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Engineered for Hygiene</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            HYGIENE <span className="text-teal-500">ARCHITECTURE.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {HYGIENE_FEATURES.map((feat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="group p-8 bg-[#0a101f] border border-teal-500/10 rounded-3xl hover:border-teal-500/40 transition-all relative overflow-hidden"
                            >
                                {/* Corner markers */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-teal-500/30 rounded-tl-3xl" />
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-teal-500/30 rounded-br-3xl" />

                                <div className="mb-6 p-4 rounded-2xl bg-teal-500/5 w-fit group-hover:bg-teal-500/15 transition-colors">
                                    <feat.icon className="w-8 h-8 text-teal-400" />
                                </div>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3">{feat.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed">{feat.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Door-Opening Animation Sequence ── */}
            <section className="py-24 bg-[#030710] border-t border-teal-500/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-teal-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Contactless Access</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic">
                            ZERO-TOUCH <span className="text-teal-500">DELIVERY.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { step: "01", icon: Footprints, title: "Step Activation", desc: "A simple foot-step on the sensor pad triggers the door mechanism — no hands needed." },
                            { step: "02", icon: DoorOpen, title: "Door Opens", desc: "Automatic doors slide open smoothly, revealing the adjustable-height delivery trays inside." },
                            { step: "03", icon: Route, title: "Auto Reseal", desc: "After item retrieval, doors close automatically and the T3 continues to its next delivery point." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                                className="relative"
                            >
                                <div className="text-[6rem] font-black text-teal-500/10 leading-none absolute -top-4 -left-2 select-none">{item.step}</div>
                                <div className="relative pt-16 pl-4">
                                    <div className="p-3 rounded-xl bg-teal-500/10 w-fit mb-4">
                                        <item.icon className="w-6 h-6 text-teal-400" />
                                    </div>
                                    <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">{item.title}</h3>
                                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                                {i < 2 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-teal-500/40 to-transparent" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Video Section ── */}
            <VideoSection
                videoId="y4R8lJ3R2Gg"
                title="KEENON T3 — Hygienic Delivery Robot"
                variant="theater"
                accentColor="teal"
            />

            {/* ── Parallax Gallery ── */}
            <div className="w-full">
                {GALLERY_FEATURES.map((feat, i) => (
                    <ParallaxGalleryItem
                        key={feat.id}
                        img={IMG_GALLERY[i] || IMG_HERO}
                        index={i + 1}
                        featureText={feat.text}
                        accentBorder="border-teal-500"
                        openLightbox={openLightbox}
                    />
                ))}
            </div>

            {/* ── Spec Grid: Clinical Dashboard ── */}
            <section className="py-32 bg-[#050a14]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-teal-500 text-sm font-black uppercase tracking-[0.4em] mb-4 block">Clinical Data Sheet</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                            TECHNICAL <span className="text-teal-500">SUPERIORITY.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {SPECS.map((spec, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="group p-5 bg-[#0a101f] border border-teal-500/10 rounded-2xl hover:border-teal-500/40 transition-all"
                            >
                                <span className="block text-white/25 text-[10px] uppercase font-black tracking-widest mb-1">{spec.label}</span>
                                <span className="block text-teal-400 font-black text-sm uppercase tracking-tight group-hover:text-white transition-colors">{spec.value}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Industry Grid ── */}
            <IndustryGrid
                industries={INDUSTRIES}
                accentColor="teal"
                heading="Tailored for"
                headingAccent="Sterile Delivery"
                label="Hygienic Precision"
                description="The T3 is engineered for environments where hygiene, privacy, and spill-proof transport are non-negotiable requirements."
            />

            {/* ── CTA ── */}
            <ProductCTA
                heading="HYGIENIC"
                headingAccent="DELIVERY."
                subtitle="Experience sterile, spill-proof autonomous delivery. Engineered by KEENON, mastered by Mobilise."
                accentColor="teal"
                modelLabel="T3"
            />
        </div>
    );
}
