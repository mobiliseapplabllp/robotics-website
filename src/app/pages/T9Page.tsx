import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
  ChevronRight, ArrowRight, Play, CheckCircle, Star, Zap, Shield, Battery,
  Wifi, Volume2, ChevronDown, Download, Phone, ExternalLink, Bot,
  Navigation, Eye, Clock, Layers, Award, TrendingUp, Users
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

/* ─── image assets ─────────────────────────────────────── */
const IMG_HERO        = "https://static.keenon.com/uploads/2025/01/07/2dc8bf76f6c24bd8abf5db546d36571e.webp";
const IMG_RESTAURANT  = "https://static.keenon.com/uploads/2025/01/07/2dc8bf76f6c24bd8abf5db546d36571e.webp";
const IMG_LIDAR       = "https://images.unsplash.com/photo-1763058673808-4e84af9f54cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900";
const IMG_HOSPITAL    = "https://images.unsplash.com/photo-1711343777918-6d395c16e37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900";
const IMG_HOTEL       = "https://images.unsplash.com/photo-1652118979927-aae9969e2622?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900";
const IMG_CHARGING    = "https://images.unsplash.com/photo-1690293358127-41c535523510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900";
const IMG_AI          = "https://images.unsplash.com/photo-1664526936810-ec0856d31b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900";
const IMG_NAV         = "https://images.unsplash.com/photo-1763788427927-87bc7c1fbcf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900";

/* ─── data ──────────────────────────────────────────────── */
const SPECS = [
  { category: "Dimensions & Weight", items: [
    { label: "Body Dimensions (L×W×H)", value: "540 × 470 × 1,270 mm" },
    { label: "Net Weight", value: "42 kg" },
    { label: "Tray Dimensions", value: "460 × 360 mm (each tray)" },
    { label: "Tray Quantity", value: "3 independent open trays" },
  ]},
  { category: "Performance", items: [
    { label: "Maximum Speed", value: "1.2 m/s" },
    { label: "Maximum Payload (per tray)", value: "10 kg" },
    { label: "Total Payload", value: "30 kg" },
    { label: "Gradeability", value: "≤ 3°" },
    { label: "Minimum Passable Width", value: "≥ 0.7 m" },
  ]},
  { category: "Navigation & Safety", items: [
    { label: "Navigation Technology", value: "LIDAR SLAM + Visual Fusion" },
    { label: "Positioning Accuracy", value: "± 50 mm" },
    { label: "Obstacle Avoidance", value: "360° multi-layer sensor fusion" },
    { label: "Cliff Detection", value: "Yes — infrared drop sensors" },
    { label: "Emergency Stop", value: "Physical + software dual stop" },
    { label: "Bump Sensor", value: "360° anti-collision bumper" },
  ]},
  { category: "Interaction & Display", items: [
    { label: "Screen Size", value: "10.1\" IPS Full HD touch display" },
    { label: "Screen Resolution", value: "1280 × 800 px" },
    { label: "Face Display", value: "Animated emotional expressions" },
    { label: "Voice Interaction", value: "Multi-language NLP (incl. Hindi & English)" },
    { label: "Microphone Array", value: "6-mic far-field array" },
    { label: "Speaker", value: "Built-in stereo speakers" },
  ]},
  { category: "Battery & Charging", items: [
    { label: "Battery Capacity", value: "48V / 22 Ah" },
    { label: "Battery Life", value: "12+ hours continuous operation" },
    { label: "Charging Time", value: "3 hours (standard)" },
    { label: "Auto-Docking Charging", value: "Yes — returns when battery low" },
    { label: "Charging Dock", value: "Included in package" },
    { label: "Standby Power", value: "< 5W" },
  ]},
  { category: "Connectivity & Integration", items: [
    { label: "Wi-Fi", value: "IEEE 802.11 a/b/g/n/ac (2.4 & 5 GHz)" },
    { label: "Bluetooth", value: "BT 5.0" },
    { label: "Elevator Integration", value: "Yes — IoT elevator control" },
    { label: "PMS Integration", value: "Yes — hotel property management" },
    { label: "POS Integration", value: "Yes — restaurant POS systems" },
    { label: "Fleet Management", value: "Cloud-based multi-robot management" },
    { label: "OTA Updates", value: "Over-the-air software updates" },
  ]},
  { category: "Environment", items: [
    { label: "Operating Temperature", value: "0°C to 45°C" },
    { label: "Noise Level", value: "< 55 dB" },
    { label: "IP Rating", value: "IP22 (splash-resistant)" },
    { label: "Surface Compatibility", value: "Tile, marble, hardwood, carpet (low pile)" },
    { label: "Elevator Compatibility", value: "Standard cabin elevators" },
  ]},
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
  cyan:   { text: "text-cyan-400",   bg: "bg-cyan-500/10",   border: "border-cyan-400/30",   glow: "shadow-cyan-500/20",   gradient: "from-cyan-500 to-cyan-700" },
  blue:   { text: "text-blue-400",   bg: "bg-blue-500/10",   border: "border-blue-400/30",   glow: "shadow-blue-500/20",   gradient: "from-blue-500 to-blue-700" },
  purple: { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-400/30", glow: "shadow-purple-500/20", gradient: "from-purple-500 to-purple-700" },
  green:  { text: "text-green-400",  bg: "bg-green-500/10",  border: "border-green-400/30",  glow: "shadow-green-500/20",  gradient: "from-green-500 to-green-700" },
  orange: { text: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-400/30", glow: "shadow-orange-500/20", gradient: "from-orange-500 to-orange-700" },
  pink:   { text: "text-pink-400",   bg: "bg-pink-500/10",   border: "border-pink-400/30",   glow: "shadow-pink-500/20",   gradient: "from-pink-500 to-pink-700" },
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

      {/* ── HERO ─────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* BG layers */}
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <ImageWithFallback src={IMG_HERO} alt="KEENON T9" className="w-full h-full object-cover opacity-15" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a14]/60 via-[#050a14]/40 to-[#050a14]" />
        {/* Radial glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(#00d4ff 1px,transparent 1px),linear-gradient(90deg,#00d4ff 1px,transparent 1px)", backgroundSize: "50px 50px" }} />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          {/* Breadcrumb */}
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

            {/* Animated face */}
            <div className="flex justify-center mb-8">
              <RobotFace />
            </div>

            <h1 className="text-7xl sm:text-8xl lg:text-[10rem] font-black leading-none mb-4 tracking-tighter">
              <span className="bg-gradient-to-br from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">T9</span>
            </h1>
            <div className="text-2xl sm:text-3xl font-black text-white/80 mb-4">KEENON T9</div>
            <p className="text-xl sm:text-2xl text-cyan-400 font-semibold mb-6 tracking-wide">
              "Make Serving Smarter"
            </p>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              The world's most expressive food delivery robot — combining an animated face display,
              triple-tray capacity, and precision SLAM navigation for restaurants, hotels, and hospitals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link to="/contact" className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white font-black text-lg shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all group">
                Request a Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#video" className="flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all">
                <Play className="w-5 h-5 text-cyan-400" /> Watch Video
              </a>
              <a href="https://www.keenon.com/en/product/T9/index.html" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/10 text-white/60 font-bold text-lg hover:bg-white/5 transition-all text-sm">
                <ExternalLink className="w-4 h-4" /> keenon.com
              </a>
            </div>

            {/* Hero quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { value: "3 Trays", label: "10 kg each" },
                { value: "12+ hrs", label: "Battery life" },
                { value: "1.2 m/s", label: "Max speed" },
                { value: "360°", label: "Obstacle detection" },
              ].map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
                  className="bg-white/5 border border-cyan-500/20 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="text-2xl font-black text-cyan-400">{s.value}</div>
                  <div className="text-white/40 text-xs mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scroll cue */}
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── KEY NUMBERS BAR ──────────────────────────────── */}
      <section className="bg-[#030710] border-y border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 text-center">
            {[
              { val: "60,000+", lbl: "Global Deployments" },
              { val: "100M+",   lbl: "Deliveries Made" },
              { val: "60+",     lbl: "Countries" },
              { val: "30 kg",   lbl: "Max Payload" },
              { val: "12 hrs",  lbl: "Battery Life" },
              { val: "40+",     lbl: "Languages" },
              { val: "#1",      lbl: "Market Share" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <div className="text-2xl font-black text-cyan-400">{s.val}</div>
                <div className="text-white/40 text-xs mt-0.5">{s.lbl}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE SECTIONS ─────────────────────────────── */}
      {FEATURES.map((feat, i) => {
        const c = COLOR_MAP[feat.color];
        const isEven = i % 2 === 0;
        return (
          <section key={feat.id} className={`py-28 relative overflow-hidden ${i % 2 === 0 ? "bg-[#050a14]" : "bg-[#030710]"}`}>
            <div className={`absolute ${isEven ? "right-0" : "left-0"} top-1/2 -translate-y-1/2 w-[500px] h-[500px] ${c.bg} rounded-full blur-3xl opacity-30 pointer-events-none`} />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={!isEven ? "lg:order-2" : ""}
                >
                  <div className={`relative rounded-3xl overflow-hidden border ${c.border} shadow-2xl ${c.glow}`}>
                    <ImageWithFallback src={feat.image} alt={feat.title} className="w-full aspect-[4/3] object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/60 to-transparent" />
                    <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-xl ${c.bg} border ${c.border}`}>
                      <span className={`text-xs font-bold uppercase tracking-wider ${c.text}`}>{feat.subtitle}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={!isEven ? "lg:order-1" : ""}
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${c.bg} border ${c.border} mb-6 text-2xl`}>
                    {feat.icon}
                  </div>
                  <div className={`text-xs font-bold uppercase tracking-widest ${c.text} mb-3`}>Feature {String(i + 1).padStart(2, "0")}</div>
                  <h2 className="text-4xl lg:text-5xl font-black text-white mb-3">{feat.title}</h2>
                  <p className={`text-lg font-semibold ${c.text} mb-6`}>{feat.subtitle}</p>
                  <p className="text-white/60 text-lg leading-relaxed mb-8">{feat.description}</p>

                  <div className="space-y-3">
                    {feat.highlights.map((h, j) => (
                      <motion.div key={j} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: j * 0.08 }}
                        className={`flex items-center gap-3 p-3 rounded-xl ${c.bg} border ${c.border}`}>
                        <CheckCircle className={`w-5 h-5 ${c.text} shrink-0`} />
                        <span className="text-white/80 text-sm font-medium">{h}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── USE CASES ─────────────────────────────────────── */}
      <section className="py-28 bg-[#030710] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-bold uppercase tracking-widest mb-4">Real-World Applications</div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Where the T9 <span className="text-cyan-400">Thrives</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto">Deployed in over 60 countries, the KEENON T9 has proven its value across diverse service environments in India and globally.</p>
          </motion.div>

          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {USE_CASES.map((uc, i) => (
              <button key={i} onClick={() => setActiveUseCase(i)}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeUseCase === i ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30" : "bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10"}`}>
                {uc.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeUseCase} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <ImageWithFallback src={USE_CASES[activeUseCase].image} alt={USE_CASES[activeUseCase].title} className="w-full aspect-[4/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/70 to-transparent" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-white mb-4">{USE_CASES[activeUseCase].title}</h3>
                <p className="text-white/60 text-lg leading-relaxed mb-8">{USE_CASES[activeUseCase].description}</p>
                <div className="space-y-3">
                  {USE_CASES[activeUseCase].stats.map((s, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-cyan-500/10 border border-cyan-400/20 rounded-xl">
                      <TrendingUp className="w-5 h-5 text-cyan-400 shrink-0" />
                      <span className="text-white font-semibold">{s}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-bold">
                  Request a Demo for This Industry <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── VIDEO GALLERY ─────────────────────────────────── */}
      <section id="video" className="py-28 bg-[#050a14] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-bold uppercase tracking-widest mb-4">Video Gallery</div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">See the T9 <span className="text-cyan-400">in Action</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto">Official KEENON product videos and real-world deployment demonstrations.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main player */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/5 mb-4">
                <div className="aspect-video bg-[#0d1525]">
                  <iframe
                    key={activeVideo.id}
                    width="100%" height="100%"
                    src={`https://www.youtube.com/embed/${activeVideo.id}?rel=0&modestbranding=1&autoplay=0`}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen className="w-full h-full"
                  />
                </div>
              </motion.div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-1">{activeVideo.type}</div>
                    <h3 className="text-white font-bold">{activeVideo.title}</h3>
                    <div className="text-white/40 text-sm mt-1">{activeVideo.duration}</div>
                  </div>
                  <a href={`https://www.youtube.com/watch?v=${activeVideo.id}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 text-white/40 hover:text-cyan-400 text-sm transition-colors shrink-0">
                    <ExternalLink className="w-4 h-4" /> YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Playlist */}
            <div className="space-y-3">
              <h3 className="text-white font-black text-lg mb-4">Video Library</h3>
              {VIDEOS.map((v) => (
                <button key={v.id} onClick={() => setActiveVideo(v)}
                  className={`w-full text-left flex items-center gap-3 p-4 rounded-xl border transition-all ${activeVideo.id === v.id ? "border-cyan-500/50 bg-cyan-500/10" : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20"}`}>
                  <div className={`w-12 h-10 rounded-lg flex items-center justify-center shrink-0 ${activeVideo.id === v.id ? "bg-cyan-500" : "bg-white/10"}`}>
                    <Play className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-xs font-bold uppercase tracking-wider mb-0.5 ${activeVideo.id === v.id ? "text-cyan-400" : "text-white/40"}`}>{v.type}</div>
                    <div className="text-white text-sm font-medium truncate">{v.title}</div>
                    <div className="text-white/30 text-xs">{v.duration}</div>
                  </div>
                </button>
              ))}

              <a href="https://www.keenon.com/en/product/T9/index.html" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full p-4 rounded-xl border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 font-semibold text-sm hover:bg-cyan-500/10 transition-colors">
                <ExternalLink className="w-4 h-4" /> More on keenon.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FULL SPECIFICATIONS ───────────────────────────── */}
      <section className="py-28 bg-[#030710] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-bold uppercase tracking-widest mb-4">Technical Specifications</div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Every Detail. <span className="text-cyan-400">Engineered.</span></h2>
          </motion.div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {SPECS.map((cat, i) => (
              <button key={i} onClick={() => setActiveSpecCat(i)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeSpecCat === i ? "bg-cyan-500 text-white" : "bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10"}`}>
                {cat.category}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeSpecCat} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <div className="grid md:grid-cols-2 gap-3">
                {SPECS[activeSpecCat].items.map((item, i) => (
                  <motion.div key={item.label} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/30 hover:bg-white/8 transition-all">
                    <span className="text-white/50 text-sm">{item.label}</span>
                    <span className="text-cyan-400 font-bold text-sm text-right ml-4">{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Downloads */}
          <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-black text-white mb-2">Download Full T9 Documentation</h3>
                <p className="text-white/50 text-sm">Datasheet, User Manual, API Guide, and Integration Handbook available on keenon.com</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Datasheet (PDF)", "User Manual", "API Guide"].map((doc) => (
                  <a key={doc} href="https://www.keenon.com/en/product/T9/index.html" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 rounded-xl text-white font-semibold text-sm hover:bg-white/15 transition-colors">
                    <Download className="w-4 h-4 text-cyan-400" /> {doc}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDIA-SPECIFIC SECTION ────────────────────────── */}
      <section className="py-28 bg-[#050a14] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-bold uppercase tracking-widest mb-6">🇮🇳 India Edition</div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                Built for <span className="text-orange-400">Bharat</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                The KEENON T9 deployed by Mobilise in India is specially configured for Indian environments — with regional language support, adapted navigation for Indian facility layouts, and a dedicated 24/7 support team across major cities.
              </p>
              <div className="space-y-4">
                {[
                  { flag: "🗣️", title: "10 Indian Languages", desc: "Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Bengali, Gujarati, Punjabi, and English" },
                  { flag: "🏨", title: "Indian PMS Integration", desc: "Works with IDS Next, Hotelogix, eZee Technosys, and other Indian hotel software" },
                  { flag: "🔧", title: "India Support Network", desc: "Certified technicians in Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, and Kolkata" },
                  { flag: "⚡", title: "Indian Power Standards", desc: "Configured for India's 230V/50Hz power grid with voltage stabilization" },
                  { flag: "🌡️", title: "India Climate Optimized", desc: "Enhanced cooling system for India's high ambient temperatures up to 45°C" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-orange-500/20 transition-colors">
                    <span className="text-2xl">{item.flag}</span>
                    <div>
                      <div className="text-white font-bold text-sm">{item.title}</div>
                      <div className="text-white/50 text-sm mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-3xl p-8">
                <h3 className="text-2xl font-black text-white mb-6">T9 in India — By the Numbers</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: "200+", lbl: "T9 units deployed" },
                    { val: "15+", lbl: "Indian cities" },
                    { val: "98.7%", lbl: "Uptime SLA" },
                    { val: "4.9/5", lbl: "Customer rating" },
                  ].map((s, i) => (
                    <div key={i} className="bg-white/10 rounded-2xl p-5 text-center">
                      <div className="text-3xl font-black text-orange-400">{s.val}</div>
                      <div className="text-white/50 text-sm mt-1">{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              {[
                { quote: "The T9 speaks Hindi to our guests and they absolutely love it. It's become our hotel's star attraction.", name: "The Leela Palace, New Delhi", stars: 5 },
                { quote: "Deployed 8 T9 units across our Mumbai outlets. Table turnover increased 35% in the first month.", name: "Social Offline, Mumbai", stars: 5 },
              ].map((t, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="flex gap-0.5 mb-3">
                    {Array(t.stars).fill(0).map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-white/70 italic mb-3">"{t.quote}"</p>
                  <div className="text-white font-bold text-sm">{t.name}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON ───────────────────────────────────── */}
      <section className="py-20 bg-[#030710] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">How T9 Compares to the <span className="text-cyan-400">T-Series</span></h2>
          </motion.div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-5 text-white/40 text-sm font-medium">Feature</th>
                  {["T8", "T9 ★", "T10", "T11"].map((m) => (
                    <th key={m} className={`py-4 px-5 text-sm font-black ${m.includes("T9") ? "text-cyan-400" : "text-white/60"}`}>{m}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Trays", vals: ["3", "3", "3", "4"] },
                  { feature: "Animated Face", vals: ["Basic", "★ Full HD", "Full HD", "Basic"] },
                  { feature: "Max Payload", vals: ["30 kg", "30 kg", "30 kg", "40 kg"] },
                  { feature: "Battery Life", vals: ["12 hrs", "★ 12 hrs", "14 hrs", "10 hrs"] },
                  { feature: "Screen Size", vals: ["10.1\"", "★ 10.1\"", "15.6\"", "10.1\""] },
                  { feature: "Navigation", vals: ["LIDAR SLAM", "★ LIDAR+Vision", "Fusion SLAM", "LIDAR SLAM"] },
                  { feature: "Expression Mode", vals: ["No", "★ Yes", "Yes", "No"] },
                  { feature: "Ideal For", vals: ["Restaurants", "★ Hotels+F&B", "Luxury Hotels", "Hospitals"] },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                    <td className="py-4 px-5 text-white/50 text-sm">{row.feature}</td>
                    {row.vals.map((v, j) => (
                      <td key={j} className={`py-4 px-5 text-sm text-center font-semibold ${j === 1 ? "text-cyan-400 bg-cyan-500/5" : "text-white/60"}`}>
                        {v.replace("★ ", "")}
                        {v.startsWith("★") && <span className="ml-1 text-yellow-400 text-xs">★</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-[#050a14] to-blue-900/30" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/8 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex justify-center mb-8"><RobotFace /></div>
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-6">
              Ready to Meet <span className="text-cyan-400">Your T9?</span>
            </h2>
            <p className="text-white/50 text-xl mb-10 max-w-2xl mx-auto">
              Book a free demo at your facility. Our team will bring a KEENON T9 to your restaurant, hotel, or hospital so you can see it in action.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white font-black text-xl shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all group">
                Book a Free Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:+919876543210" className="flex items-center gap-2 px-10 py-5 rounded-2xl border border-white/20 text-white font-bold text-xl hover:bg-white/10 transition-all">
                <Phone className="w-5 h-5 text-cyan-400" /> Call Us Now
              </a>
            </div>
            <p className="mt-6 text-white/30 text-sm">
              Or visit the official product page:{" "}
              <a href="https://www.keenon.com/en/product/T9/index.html" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                keenon.com/en/product/T9
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}