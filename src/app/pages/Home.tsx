import { useRef } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  Shield,
  Globe,
  Zap,
  Award,
  ChevronRight,
  CheckCircle2,
  Bot,
  Headphones,
  Building2,
  Hotel,
  Heart,
  Plane,
  Factory,
  Warehouse,
  ShoppingBag,
  Briefcase,
  Brush,
  Truck,
  MessageSquare,
  Package,
  Users,
  Banknote,
  ClipboardCheck,
} from "lucide-react";
import { PRODUCTS } from "../data/products";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { VideoCarousel } from "../components/VideoCarousel";
import { BlogCard } from "../components/BlogCard";
import { ALL_POSTS } from "../../content/blog/loader";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

/**
 * Stats shown under the hero — FM-anchored.
 * KEENON globals are clearly attributed; Mobilise commitments are explicit.
 */
const STATS = [
  { icon: Bot, value: `${PRODUCTS.length}`, label: "Robots for every FM use case" },
  { icon: Globe, value: "60,000+", label: "KEENON robots deployed worldwide" },
  { icon: Zap, value: "<48 hrs", label: "Deployment at your facility" },
  { icon: Headphones, value: "24/7", label: "India support in IST" },
];

/**
 * "The FM math" — three pains every Indian facility leader is living with right now.
 * Numbers from NASSCOM, JLL, ICRA reports — see docs/personas.md for sourcing.
 */
const FM_PROBLEMS = [
  {
    icon: Users,
    headline: "Service roles are India's hardest to staff",
    body: "FM crews — runners, housekeeping, mailroom, reception — are 20–30 % short post-COVID. Replacements churn out in 6–8 months.",
  },
  {
    icon: Banknote,
    headline: "Cost-per-shift up 35–55 % since 2019",
    body: "Mandatory benefits, retention bonuses, overtime, and wage inflation stack up. Your SLA didn't loosen — your budget didn't grow.",
  },
  {
    icon: ClipboardCheck,
    headline: "Audit pressure keeps rising",
    body: "IGBC, LEED, NABH, ISO 41001 — every facility audit is tighter than the last. Thinner crews mean more breaches, more penalties, more rework.",
  },
];

/**
 * "How robots fit your FM stack" — 4 service areas, each mapped to specific robots
 * and the operational outcome an FM leader cares about.
 */
const FM_SERVICE_AREAS = [
  {
    icon: Brush,
    name: "Cleaning",
    accent: "emerald",
    href: "/solutions#cleaning",
    headline: "Replace night-shift crews. Audit every sq ft.",
    body: "Autonomous sweep, vacuum, scrub, and mop across mall floors, hospital corridors, airport terminals, and office campuses. Per-shift logs go straight into your CMMS.",
    robots: ["C20", "C30", "C40", "C55"],
    outcomeStat: "Up to 2,376 m²/hr cleaned",
  },
  {
    icon: Truck,
    name: "Internal Logistics",
    accent: "cyan",
    href: "/solutions#corporate",
    headline: "Move 100–300 kg without forklifts. Zero shift gaps.",
    body: "Heavy-load couriering for warehouses, hospitals, and large campuses. Plug-and-play deployment with 15-second battery swap for 24-hour duty cycles.",
    robots: ["S100", "S300"],
    outcomeStat: "Up to 300 kg per run",
  },
  {
    icon: MessageSquare,
    name: "Reception & Concierge",
    accent: "amber",
    href: "/solutions#hospitality",
    headline: "Greet every visitor. 24/7. Multi-lingual.",
    body: "Branded reception robots that handle wayfinding, visitor briefing, advertising, and concierge in office lobbies, mall atriums, and hotel lobbies.",
    robots: ["G1", "S100"],
    outcomeStat: "14+ languages supported",
  },
  {
    icon: Package,
    name: "Soft FM Delivery",
    accent: "cyan",
    href: "/solutions#hospitality",
    headline: "Cafeteria, mailroom, room service — autonomously.",
    body: "Multi-tray and enclosed-compartment delivery robots for canteens, internal mail, document drops, and hotel room service. Cross-floor with IoT-elevator integration.",
    robots: ["T8", "T9", "T11", "W3"],
    outcomeStat: "Up to 18-hour shifts",
  },
];

const ACCENT_RING: Record<string, string> = {
  cyan: "hover:border-cyan-500/40 hover:shadow-cyan-500/10",
  emerald: "hover:border-emerald-500/40 hover:shadow-emerald-500/10",
  amber: "hover:border-amber-500/40 hover:shadow-amber-500/10",
};

const ACCENT_ICON_BG: Record<string, string> = {
  cyan: "bg-cyan-500/15 border-cyan-400/30 text-cyan-400",
  emerald: "bg-emerald-500/15 border-emerald-400/30 text-emerald-400",
  amber: "bg-amber-500/15 border-amber-400/30 text-amber-400",
};

const ACCENT_BADGE: Record<string, string> = {
  cyan: "text-cyan-400 border-cyan-400/30 bg-cyan-500/10",
  emerald: "text-emerald-400 border-emerald-400/30 bg-emerald-500/10",
  amber: "text-amber-400 border-amber-400/30 bg-amber-500/10",
};

/**
 * Featured robots — re-curated by FM workload, not by category.
 * Cleaning leads (it's the FM bread-and-butter), then heavy logistics,
 * then a delivery robot for the cafeteria/mailroom story.
 */
const FEATURED_IDS = ["c55", "s100", "t9"];

/**
 * Facility-type chips in the hero — lets FM leaders self-segment in one click.
 */
const FACILITY_CHIPS = [
  { id: "corporate", label: "Office Tower", icon: Building2 },
  { id: "corporate", label: "Tech Park", icon: Briefcase },
  { id: "retail", label: "Mall", icon: ShoppingBag },
  { id: "healthcare", label: "Hospital", icon: Heart },
  { id: "hospitality", label: "Hotel", icon: Hotel },
  { id: "aviation", label: "Airport", icon: Plane },
  { id: "corporate", label: "Factory", icon: Factory },
  { id: "corporate", label: "Warehouse", icon: Warehouse },
];

const CATEGORY_COLORS: Record<string, string> = {
  delivery: "cyan",
  cleaning: "emerald",
  service: "amber",
};

const ACCENT_CLASS: Record<string, string> = {
  cyan: "text-cyan-400 border-cyan-400/30 bg-cyan-500/10",
  emerald: "text-emerald-400 border-emerald-400/30 bg-emerald-500/10",
  amber: "text-amber-400 border-amber-400/30 bg-amber-500/10",
};

/**
 * Image with a subtle scroll-linked parallax translation. Used in the
 * "How we work with FM teams" section to add depth without distraction.
 *
 * The inner `scale-110` compensates for the 40 px translate so edges never
 * peek out. `loading="lazy"` + width/height attrs prevent CLS and keep
 * Lighthouse happy.
 */
function ParallaxImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <div
      ref={ref}
      className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl shadow-cyan-500/5"
    >
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <ImageWithFallback
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </motion.div>
      {/* Subtle gradient overlay for dark-theme integration */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#050a14]/40 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}

export function Home() {
  useDocumentTitle(
    "Facility Management Automation for India",
    "Mobilise Robotics deploys KEENON autonomous cleaning, internal-logistics, reception, and delivery robots into India's largest offices, malls, hospitals, and hotels. Risk-free 60-day pilots.",
  );

  const featuredProducts = FEATURED_IDS
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is (typeof PRODUCTS)[number] => p !== undefined);

  const latestPosts = ALL_POSTS.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* ───────── Hero ───────── */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050a14] via-[#071628] to-[#050a14]" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/5 rounded-full blur-3xl" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
              <span className="text-cyan-400 text-sm font-semibold">Authorized KEENON Robotics Partner — India</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] mb-6 tracking-tight">
              <span className="text-white">Your facility runs 24/7.</span>
              <br className="hidden sm:inline" />
              <span className="text-white"> Now your </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">robots</span>
              <span className="text-white"> can too.</span>
            </h1>

            <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto mb-6 leading-relaxed">
              Mobilise Robotics is India's authorized KEENON partner — deploying autonomous <strong className="text-white">cleaning</strong>, <strong className="text-white">internal logistics</strong>, <strong className="text-white">reception</strong>, and <strong className="text-white">delivery robots</strong> into India's largest offices, malls, hospitals, and hotels. Reduce SLA breaches. Cut night-shift dependency. Audit every shift.
            </p>
            <p className="text-white/70 text-base max-w-2xl mx-auto mb-10">
              Most FM teams start with a <span className="text-cyan-400 font-semibold">60-day paid pilot</span> at one facility. Most decide to scale within 6 weeks.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-2xl text-white font-bold text-lg transition-all shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a14]"
              >
                Book a facility audit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link
                to="/products"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                Browse the robot catalog
              </Link>
            </div>
          </motion.div>

          {/* Facility-type chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14"
          >
            <div className="text-white/50 text-xs uppercase tracking-[0.2em] font-bold mb-4">
              I run a
            </div>
            <nav aria-label="Browse by facility type" className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {FACILITY_CHIPS.map(({ id, label, icon: Icon }) => (
                <Link
                  key={label}
                  to={`/solutions#${id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-semibold hover:bg-cyan-500/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 group"
                >
                  <Icon className="w-4 h-4 text-cyan-400/80 group-hover:text-cyan-300 transition-colors" aria-hidden="true" />
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {STATS.map(({ icon: Icon, value, label }, i) => (
              <div
                key={i}
                className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-sm overflow-hidden group hover:border-cyan-400/30 transition-colors"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" aria-hidden="true" />
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-400/20 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1">{value}</div>
                <div className="text-white/70 text-xs sm:text-sm leading-snug">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────── How we work with FM teams (3-step process, alternating layout) ───────── */}
      <section
        className="py-24 lg:py-32 relative"
        aria-labelledby="how-we-work-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a14] to-[#030710]" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold mb-4 uppercase tracking-wider">
              Our engagement model
            </div>
            <h2
              id="how-we-work-heading"
              className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight"
            >
              How we work with <span className="text-cyan-400">facility management teams</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              From the first conversation to ongoing operations — here's the path most FM directors, admins, and IFM partners take with Mobilise.
            </p>
          </motion.div>

          {/* Process rows */}
          <div className="space-y-24 lg:space-y-32">
            {/* ── Row 1: AUDIT (image left, text right on lg) ─────────────────── */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=80"
                alt="Modern corporate corridor with glass-walled offices — a typical Class-A facility Mobilise audits before recommending an FM automation plan"
                width={1200}
                height={900}
              />
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block text-cyan-400 text-sm font-bold uppercase tracking-[0.3em] mb-3">
                  Step 01 — Audit
                </span>
                <h3 className="text-3xl lg:text-4xl font-black text-white mb-5 leading-tight tracking-tight">
                  We audit your facility first
                </h3>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Before any pilot, our team walks your facility with you — measures cleaning sq ft, maps internal logistics flow, identifies SLA pain points, audits night-shift coverage. Free, 30-minute call. You get a written recommendation even if you don't end up buying a robot.
                </p>
                <ul className="space-y-2 mb-7 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" aria-hidden="true" />
                    <span>Site walkthrough + service-area mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" aria-hidden="true" />
                    <span>SLA gap analysis against current operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" aria-hidden="true" />
                    <span>ROI estimate + recommended robot mix</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/60 font-bold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  Book the audit <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </motion.div>
            </div>

            {/* ── Row 2: DEPLOY (text left, image right on lg) ────────────────── */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:order-1"
              >
                <span className="inline-block text-cyan-400 text-sm font-bold uppercase tracking-[0.3em] mb-3">
                  Step 02 — Deploy
                </span>
                <h3 className="text-3xl lg:text-4xl font-black text-white mb-5 leading-tight tracking-tight">
                  We deploy <span className="text-cyan-400">and train your team</span> — on-site
                </h3>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Engineers come to your facility for installation, calibration, mapping, and operator certification. Your existing FM staff runs the robot from day one — we don't ship a manual and leave. Most deployments are operational within 48 hours of robot arrival.
                </p>
                <ul className="space-y-2 mb-7 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" aria-hidden="true" />
                    <span>On-site engineer for setup and floor-mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" aria-hidden="true" />
                    <span>Half-day operator certification for your FM staff</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" aria-hidden="true" />
                    <span>BMS / lift / Wi-Fi integration handled end-to-end</span>
                  </li>
                </ul>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/60 font-bold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  Explore the robot catalog <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </motion.div>
              <div className="lg:order-2">
                <ParallaxImage
                  src="/images/products/c40/hero.webp"
                  alt="KEENON C40 autonomous cleaning robot deployed at a commercial facility — a flagship 4-in-1 floor cleaner used by FM teams across Indian malls, hospitals, and office campuses"
                  width={1200}
                  height={900}
                />
              </div>
            </div>

            {/* ── Row 3: SUPPORT (image left, text right on lg) ─────────────── */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80"
                alt="Operations dashboard showing per-shift logs, robot uptime, and SLA metrics — the Mobilise oversight tooling that lets facility management teams audit every cleaning shift, every internal-logistics run, and every visitor interaction"
                width={1200}
                height={900}
              />
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block text-cyan-400 text-sm font-bold uppercase tracking-[0.3em] mb-3">
                  Step 03 — Operate
                </span>
                <h3 className="text-3xl lg:text-4xl font-black text-white mb-5 leading-tight tracking-tight">
                  We stay accountable for <span className="text-cyan-400">every shift</span>
                </h3>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  24/7 SLA-aligned support, spare parts stocked in India, AMC plans for predictable opex. Per-shift logs flow into your CMMS — you can audit every square foot the robot cleaned, every kilo it carried, every visitor it greeted. Real accountability, not a black box.
                </p>
                <ul className="space-y-2 mb-7 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" aria-hidden="true" />
                    <span>Pan-India spare-parts warehouse + same-week turnaround</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" aria-hidden="true" />
                    <span>Per-shift audit logs feed your CMMS / BMS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" aria-hidden="true" />
                    <span>Dedicated account manager for every customer</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/60 font-bold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  Talk to our team <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── See them work (VideoCarousel) ───────── */}
      <VideoCarousel />

      {/* ───────── The FM math (problem statement) ───────── */}
      <section className="py-24 bg-[#050a14] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-300 text-sm font-semibold mb-4 uppercase tracking-wider">
              The FM math in 2026
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Every FM leader in India is fighting the <span className="text-cyan-400">same three battles.</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
              You can't keep solving them with the same crew model. Here's what the numbers look like — and why automation is the only way the math works after 2026.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FM_PROBLEMS.map(({ icon: Icon, headline, body }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-red-300" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black text-white mb-3 leading-tight">{headline}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── How robots fit your FM stack ───────── */}
      <section className="py-24 bg-[#030710] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold mb-4 uppercase tracking-wider">
              The solution map
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              How robots fit your <span className="text-cyan-400">FM stack</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
              Four workload categories, fifteen robots, one common operating system. Pick the workload that's hurting your budget most — start there.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FM_SERVICE_AREAS.map(({ icon: Icon, name, accent, href, headline, body, robots, outcomeStat }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={href}
                  className={`group block bg-white/5 border border-white/10 rounded-3xl p-7 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${ACCENT_RING[accent]}`}
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 ${ACCENT_ICON_BG[accent]}`}>
                      <Icon className="w-7 h-7" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-2xl font-black text-white mb-1">{name}</h3>
                      <p className={`text-sm font-semibold ${ACCENT_BADGE[accent].split(" ")[0]}`}>
                        {headline}
                      </p>
                    </div>
                    <ChevronRight className="w-6 h-6 text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all shrink-0" aria-hidden="true" />
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed mb-5">{body}</p>

                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    <span className="text-white/50 text-xs uppercase tracking-wider font-bold mr-1">Robots:</span>
                    {robots.map((r) => (
                      <span key={r} className={`px-2.5 py-1 rounded-lg border text-xs font-bold ${ACCENT_BADGE[accent]}`}>
                        KEENON {r}
                      </span>
                    ))}
                  </div>

                  <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                    <span className="text-white/60 text-xs uppercase tracking-wider font-bold">Outcome</span>
                    <span className="text-white font-bold text-sm">{outcomeStat}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Why Mobilise — trust before product ───────── */}
      <section className="py-24 bg-[#050a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold mb-6 uppercase tracking-wider">
                Why Choose Mobilise
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                Built for India's <span className="text-cyan-400">FM operators</span>
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Importing a robot is easy. Running it inside a 24/7 facility, year after year, against an SLA, with parts and engineers on-call when Diwali traffic doubles — that's what Mobilise is built for.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap, title: "Rapid Deployment", desc: "Operational in 48 hours" },
                  { icon: Shield, title: "SLA-Aligned Support", desc: "24/7, IST business hours" },
                  { icon: Globe, title: "Pan-India Coverage", desc: "All Tier-1 cities" },
                  { icon: Award, title: "Authorized Partner", desc: "Official KEENON dealer" },
                ].map(({ icon: Icon, title, desc }, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                    </div>
                    <div className="text-white font-bold text-sm">{title}</div>
                    <div className="text-white/60 text-xs mt-0.5">{desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6">
                What every FM customer gets
              </div>
              <h3 className="text-2xl font-black text-white mb-6">
                A full partnership, not just a purchase
              </h3>
              <ul className="space-y-4">
                {[
                  { title: "On-site setup & operator training", desc: "Our engineers install, calibrate, and certify your facility staff to operate the robot confidently from day one." },
                  { title: "Spare parts stocked in India", desc: "Common replacement parts warehoused in Faridabad. Same-week turnaround anywhere in India." },
                  { title: "24/7 SLA-aligned support", desc: "Dedicated account manager + technical support line. After-hours on-call for critical-facility customers." },
                  { title: "Warranty + AMC maintenance plans", desc: "Standard manufacturer warranty plus optional annual maintenance contracts for predictable opex." },
                  { title: "60-day pilot programme", desc: "Run the robot at one facility for 60 days. If it doesn't earn its cost, we pull it out — no charge for the deployment." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <div className="text-white font-semibold text-sm">{item.title}</div>
                      <div className="text-white/70 text-sm mt-0.5 leading-relaxed">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-6 pt-6 border-t border-white/10 text-white/60 text-xs">
                Customer case studies and named references available on request during demo calls.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────── Featured robots — by FM workload, not by category ───────── */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a14] via-[#071220] to-[#050a14]" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/70 text-sm font-semibold mb-4 uppercase tracking-wider">
              Three workhorses
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Three robots. Three FM workloads.
              <br />
              <span className="text-cyan-400">{PRODUCTS.length} more in the catalog.</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              The three robots that show up most in our pipeline — cleaning at scale, moving heavy loads, and serving the lunch peak.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, i) => {
              const color = CATEGORY_COLORS[product.category];
              const accentClass = ACCENT_CLASS[color];
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <Link
                    to={`/products/${product.id}`}
                    className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/40 hover:bg-white/8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <div className={`relative h-60 bg-gradient-to-br ${product.thumbnailBg} overflow-hidden`}>
                      <ImageWithFallback
                        src={product.image}
                        alt={`KEENON ${product.name}`}
                        loading="lazy"
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/70 via-transparent to-transparent" aria-hidden="true" />
                      <div className="absolute inset-0 flex flex-col justify-between p-5">
                        <div className={`self-start px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${accentClass}`}>
                          {product.categoryLabel}
                        </div>
                        <div>
                          <div className="text-5xl font-black text-white/30 leading-none" aria-hidden="true">{product.name}</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-black text-white">KEENON {product.name}</h3>
                          <p className="text-cyan-400 text-sm font-semibold">{product.tagline}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all mt-1 shrink-0" aria-hidden="true" />
                      </div>
                      <p className="text-white/70 text-sm line-clamp-2 leading-relaxed">{product.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {product.industries.slice(0, 3).map((ind) => (
                          <span key={ind} className="px-2 py-0.5 rounded-md bg-white/10 text-white/70 text-xs">{ind}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              View all {PRODUCTS.length} robots <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Latest from the blog ───────── */}
      {latestPosts.length > 0 && (
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050a14] to-[#030710]" aria-hidden="true" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
            >
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/70 text-sm font-semibold mb-4 uppercase tracking-wider">
                  Latest insights
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-white">
                  From the <span className="text-cyan-400">Mobilise blog</span>
                </h2>
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
              >
                Read all posts <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───────── Final CTA ───────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/40 via-blue-900/40 to-purple-900/40" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
              See it run in your facility — <span className="text-cyan-400">risk-free for 60 days.</span>
            </h2>
            <p className="text-white/80 text-xl mb-10 leading-relaxed">
              Pilot one robot at one location. No commitment beyond the trial. If it doesn't earn its cost back, we pull it out — no charge for deployment, training, or service. You owe us the rental, that's it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-2xl text-white font-black text-lg transition-all shadow-2xl shadow-cyan-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a14]"
              >
                Book a 30-min audit call
              </Link>
              <Link
                to="/products"
                className="px-10 py-4 rounded-2xl border border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                Browse the catalog
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
