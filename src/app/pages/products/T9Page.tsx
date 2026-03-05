import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
    ChevronRight, ArrowRight, Play, CheckCircle, Star, Zap, Shield, Battery,
    Wifi, Volume2, ChevronDown, Download, Phone, ExternalLink, Bot,
    Navigation, Eye, Clock, Layers, Award, TrendingUp, Users
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

/* ─── image assets ─────────────────────────────────────── */
const IMG_HERO = "https://static.keenon.com/uploads/2025/01/07/2dc8bf76f6c24bd8abf5db546d36571e.webp";
const IMG_RESTAURANT = "https://static.keenon.com/uploads/2025/01/07/2dc8bf76f6c24bd8abf5db546d36571e.webp";
const IMG_LIDAR = "https://images.unsplash.com/photo-1763058673808-4e84af9f54cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900";
const IMG_HOSPITAL = "https://images.unsplash.com/photo-1711343777918-6d395c16e37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900";
const IMG_HOTEL = "https://images.unsplash.com/photo-1652118979927-aae9969e2622?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900";
const IMG_CHARGING = "https://images.unsplash.com/photo-1690293358127-41c535523510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900";
const IMG_AI = "https://images.unsplash.com/photo-1664526936810-ec0856d31b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900";
const IMG_NAV = "https://images.unsplash.com/photo-1763788427927-87bc7c1fbcf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900";

/* ─── data ──────────────────────────────────────────────── */
const SPECS = [
    {
        category: "Dimensions & Weight", items: [
            { label: "Body Dimensions (L×W×H)", value: "540 × 470 × 1,270 mm" },
            { label: "Net Weight", value: "42 kg" },
            { label: "Tray Dimensions", value: "460 × 360 mm (each tray)" },
            { label: "Tray Quantity", value: "3 independent open trays" },
        ]
    },
    {
        category: "Performance", items: [
            { label: "Maximum Speed", value: "1.2 m/s" },
            { label: "Maximum Payload (per tray)", value: "10 kg" },
            { label: "Total Payload", value: "30 kg" },
            { label: "Gradeability", value: "≤ 3°" },
            { label: "Minimum Passable Width", value: "≥ 0.7 m" },
        ]
    },
    {
        category: "Navigation & Safety", items: [
            { label: "Navigation Technology", value: "LIDAR SLAM + Visual Fusion" },
            { label: "Positioning Accuracy", value: "± 50 mm" },
            { label: "Obstacle Avoidance", value: "360° multi-layer sensor fusion" },
            { label: "Cliff Detection", value: "Yes — infrared drop sensors" },
            { label: "Emergency Stop", value: "Physical + software dual stop" },
            { label: "Bump Sensor", value: "360° anti-collision bumper" },
        ]
    },
    {
        category: "Interaction & Display", items: [
            { label: "Screen Size", value: "10.1\" IPS Full HD touch display" },
            { label: "Screen Resolution", value: "1280 × 800 px" },
            { label: "Face Display", value: "Animated emotional expressions" },
            { label: "Voice Interaction", value: "Multi-language NLP (incl. Hindi & English)" },
            { label: "Microphone Array", value: "6-mic far-field array" },
            { label: "Speaker", value: "Built-in stereo speakers" },
        ]
    },
    {
        category: "Battery & Charging", items: [
            { label: "Battery Capacity", value: "48V / 22 Ah" },
            { label: "Battery Life", value: "12+ hours continuous operation" },
            { label: "Charging Time", value: "3 hours (standard)" },
            { label: "Auto-Docking Charging", value: "Yes — returns when battery low" },
            { label: "Charging Dock", value: "Included in package" },
            { label: "Standby Power", value: "< 5W" },
        ]
    },
    {
        category: "Connectivity & Integration", items: [
            { label: "Wi-Fi", value: "IEEE 802.11 a/b/g/n/ac (2.4 & 5 GHz)" },
            { label: "Bluetooth", value: "BT 5.0" },
            { label: "Elevator Integration", value: "Yes — IoT elevator control" },
            { label: "PMS Integration", value: "Yes — hotel property management" },
            { label: "POS Integration", value: "Yes — restaurant POS systems" },
            { label: "Fleet Management", value: "Cloud-based multi-robot management" },
            { label: "OTA Updates", value: "Over-the-air software updates" },
        ]
    },
    {
        category: "Environment", items: [
            { label: "Operating Temperature", value: "0°C to 45°C" },
            { label: "Noise Level", value: "< 55 dB" },
            { label: "IP Rating", value: "IP22 (splash-resistant)" },
            { label: "Surface Compatibility", value: "Tile, marble, hardwood, carpet (low pile)" },
            { label: "Elevator Compatibility", value: "Standard cabin elevators" },
        ]
    },
];

const FEATURES = [
    {
        id: "face",
        icon: "😊",
        iconComponent: Eye,
        title: "Expressive Animated Face",
        subtitle: "Rich Emotional Interactions",
        description: "The T9's signature feature is its animated face display that communicates joy, greetings, and service status through rich emoji-style expressions. Guests are naturally drawn to it, creating memorable moments that drive repeat business. The face is fully programmable with custom brand expressions.",
        image: IMG_HERO,
        color: "cyan",
        highlights: [
            "Custom animated emoji expressions",
            "Eye contact tracking with guests",
            "Gesture-responsive reactions",
            "Brand-customizable animations",
        ],
    },
    {
        id: "delivery",
        icon: "🛎",
        iconComponent: Layers,
        title: "Triple-Tray Smart Delivery",
        subtitle: "Serve More. Waste Less.",
        description: "Three independent open trays each support 10 kg, enabling multi-table, multi-order delivery in a single trip. The T9 announces arrival with a friendly voice prompt, waits for the guest to retrieve their order, and automatically returns to the kitchen — boosting turnover by up to 3x.",
        image: IMG_RESTAURANT,
        color: "blue",
        highlights: [
            "3 trays × 10 kg = 30 kg total capacity",
            "Multi-stop delivery routing",
            "Voice announcement at each table",
            "Auto-return to starting point",
        ],
    },
    {
        id: "navigation",
        icon: "🗺",
        iconComponent: Navigation,
        title: "Precision SLAM Navigation",
        subtitle: "Never Gets Lost. Never Bumps.",
        description: "Powered by KEENON's proprietary fusion SLAM algorithm combining LIDAR laser scanning with visual camera input, the T9 builds and updates a real-time 3D map of its environment. It navigates narrow aisles, crowded dining rooms, and dynamic spaces with sub-50mm precision.",
        image: IMG_LIDAR,
        color: "purple",
        highlights: [
            "360° LIDAR laser scanning",
            "Visual + depth camera fusion",
            "±50 mm positioning accuracy",
            "Dynamic obstacle re-routing",
        ],
    },
    {
        id: "battery",
        icon: "⚡",
        iconComponent: Battery,
        title: "12-Hour Marathon Battery",
        subtitle: "From Breakfast to Last Call.",
        description: "A high-density 48V/22Ah lithium battery keeps the T9 running for over 12 hours on a single charge — enough for a full restaurant shift. When the battery drops to a preset threshold, the T9 automatically returns to its dock, charges in 3 hours, and resumes its route.",
        image: IMG_CHARGING,
        color: "green",
        highlights: [
            "12+ hours continuous operation",
            "48V / 22 Ah high-density battery",
            "Autonomous return to charging dock",
            "3-hour full recharge",
        ],
    },
    {
        id: "ai",
        icon: "🧠",
        iconComponent: Bot,
        title: "Intelligent AI Brain",
        subtitle: "Learns. Adapts. Improves.",
        description: "KEENON's proprietary AI platform enables the T9 to learn from operational data, improve navigation routes, recognize frequent guests, and adapt to seasonal layout changes. Cloud-connected fleet management allows operators to monitor all robots in real time from a central dashboard.",
        image: IMG_AI,
        color: "orange",
        highlights: [
            "Deep learning navigation optimization",
            "Cloud fleet management dashboard",
            "Real-time performance analytics",
            "OTA remote software updates",
        ],
    },
    {
        id: "integration",
        icon: "🔗",
        iconComponent: Wifi,
        title: "Seamless System Integration",
        subtitle: "Plugs Right Into Your Operations.",
        description: "The T9 integrates natively with industry-standard POS, PMS, and IoT systems. In hotels, it connects to the property management system to receive room service orders automatically. In restaurants, it links to the POS so orders dispatch the robot the moment they're placed.",
        image: IMG_NAV,
        color: "pink",
        highlights: [
            "POS & PMS system integration",
            "IoT elevator & door control",
            "Open API for custom integrations",
            "Works with all major hotel software",
        ],
    },
];

const USE_CASES = [
    {
        title: "Fine Dining Restaurants",
        description: "The T9 handles food delivery from kitchen to table, dramatically reducing wait staff walking distances and allowing them to focus on elevated guest interactions.",
        image: IMG_RESTAURANT,
        stats: ["3× more tables served per hour", "40% staff cost reduction", "92% guest satisfaction score"],
    },
    {
        title: "5-Star Hotels & Resorts",
        description: "From in-room breakfast trays to poolside amenity delivery and floor service, the T9 becomes the face of technology-forward hospitality.",
        image: IMG_HOTEL,
        stats: ["24/7 room service capability", "15-min average delivery time", "Zero missed deliveries"],
    },
    {
        title: "Hospitals & Healthcare",
        description: "Contactless meal delivery to patient wards reduces cross-contamination risk and frees nursing staff from logistics duties to focus on care.",
        image: IMG_HOSPITAL,
        stats: ["100% contactless delivery", "60% nursing time saved on logistics", "Zero infection incidents"],
    },
];

const VIDEOS = [
    { id: "5TP6MokvFnQ", title: "KEENON T9 — Official Product Video", duration: "Official", type: "Product Overview" },
    { id: "7PaZSanCbHI", title: "T9 in Action — Restaurant Deployment", duration: "3:12", type: "Use Case" },
    { id: "0nPaHJVqO8k", title: "KEENON T9 — Hotel Room Service Demo", duration: "1:58", type: "Hospitality" },
    { id: "XVh7BkgMhuk", title: "T9 Navigation & Obstacle Avoidance", duration: "2:05", type: "Technology" },
];

const COLOR_MAP: Record<string, { text: string; bg: string; border: string; glow: string; gradient: string }> = {
    cyan: { text: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-400/30", glow: "shadow-cyan-500/20", gradient: "from-cyan-500 to-cyan-700" },
    blue: { text: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-400/30", glow: "shadow-blue-500/20", gradient: "from-blue-500 to-blue-700" },
    purple: { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-400/30", glow: "shadow-purple-500/20", gradient: "from-purple-500 to-purple-700" },
    green: { text: "text-green-400", bg: "bg-green-500/10", border: "border-green-400/30", glow: "shadow-green-500/20", gradient: "from-green-500 to-green-700" },
    orange: { text: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-400/30", glow: "shadow-orange-500/20", gradient: "from-orange-500 to-orange-700" },
    pink: { text: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-400/30", glow: "shadow-pink-500/20", gradient: "from-pink-500 to-pink-700" },
};

/* ─── animated face component ───────────────────────────── */
function RobotFace() {
    const [mood, setMood] = useState(0);
    const moods = ["😊", "😄", "🤖", "👋", "✨", "🎯"];

    useEffect(() => {
        const t = setInterval(() => setMood((m) => (m + 1) % moods.length), 2000);
        return () => clearInterval(t);
    }, []);

    return (
        <motion.div
            className="w-32 h-32 rounded-3xl bg-gradient-to-br from-slate-700 to-slate-900 border-2 border-cyan-500/40 flex items-center justify-center shadow-2xl shadow-cyan-500/20"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={mood}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-6xl select-none"
                >
                    {moods[mood]}
                </motion.span>
            </AnimatePresence>
        </motion.div>
    );
}

/* ─── main component ────────────────────────────────────── */
export function T9Page() {
    const [activeSpecCat, setActiveSpecCat] = useState(0);
    const [activeVideo, setActiveVideo] = useState(VIDEOS[0]);
    const [activeUseCase, setActiveUseCase] = useState(0);
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <div className="min-h-screen bg-[#050a14] text-white overflow-x-hidden">

            {/* Hero */}
            <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                <motion.div style={{ y: heroY }} className="absolute inset-0">
                    <ImageWithFallback src={IMG_HERO} alt="KEENON T9" className="w-full h-full object-cover opacity-15" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#050a14]/60 via-[#050a14]/40 to-[#050a14]" />

                <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <div className="flex items-center justify-center gap-2 text-white/30 text-sm mb-8">
                        <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/products" className="hover:text-white/60 transition-colors">Products</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-cyan-400">KEENON T9</span>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 mb-6">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest">Delivery Robot</span>
                        </div>

                        <div className="flex justify-center mb-8"><RobotFace /></div>

                        <h1 className="text-7xl sm:text-8xl lg:text-[10rem] font-black leading-none mb-4 tracking-tighter">
                            <span className="bg-gradient-to-br from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">T9</span>
                        </h1>
                        <div className="text-2xl sm:text-3xl font-black text-white/80 mb-4">KEENON T9</div>
                        <p className="text-xl sm:text-2xl text-cyan-400 font-semibold mb-6 tracking-wide">"Make Serving Smarter"</p>
                        <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                            The world's most expressive food delivery robot — combining an animated face display,
                            triple-tray capacity, and precision SLAM navigation.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Link to="/contact" className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white font-black text-lg shadow-2xl shadow-cyan-500/30 group">
                                Request a Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Feature Sections */}
            {FEATURES.map((feat, i) => {
                const c = COLOR_MAP[feat.color];
                const isEven = i % 2 === 0;
                return (
                    <section key={feat.id} className={`py-28 relative overflow-hidden ${i % 2 === 0 ? "bg-[#050a14]" : "bg-[#030710]"}`}>
                        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                            <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? "lg:order-last" : ""}`}>
                                <motion.div initial={{ opacity: 0, x: isEven ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                    <div className={`relative rounded-3xl overflow-hidden border ${c.border} shadow-2xl`}>
                                        <ImageWithFallback src={feat.image} alt={feat.title} className="w-full aspect-[4/3] object-cover" />
                                    </div>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, x: isEven ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-3">{feat.title}</h2>
                                    <p className={`text-lg font-semibold ${c.text} mb-6`}>{feat.subtitle}</p>
                                    <p className="text-white/60 text-lg leading-relaxed mb-8">{feat.description}</p>
                                    <div className="space-y-3">
                                        {feat.highlights.map((h, j) => (
                                            <div key={j} className={`flex items-center gap-3 p-3 rounded-xl ${c.bg} border ${c.border}`}>
                                                <CheckCircle className={`w-5 h-5 ${c.text} shrink-0`} />
                                                <span className="text-white/80 text-sm font-medium">{h}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* Full Specs */}
            <section className="py-28 bg-[#030710] border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-16 text-center">Technical <span className="text-cyan-400">Specifications</span></h2>
                    <div className="grid md:grid-cols-2 gap-3">
                        {SPECS.flatMap(c => c.items).slice(0, 10).map((item) => (
                            <div key={item.label} className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-xl">
                                <span className="text-white/50 text-sm">{item.label}</span>
                                <span className="text-cyan-400 font-bold text-sm">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 relative overflow-hidden text-center">
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h2 className="text-5xl lg:text-7xl font-black text-white mb-6">Ready for the <span className="text-cyan-400">Future?</span></h2>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white font-black text-xl shadow-2xl shadow-cyan-500/40">Book a Free Demo <ArrowRight className="w-5 h-5" /></Link>
                </div>
            </section>
        </div>
    );
}
