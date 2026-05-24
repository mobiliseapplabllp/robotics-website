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
  Moon,
  TrendingDown,
  Search,
  Wrench,
  Activity,
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

/**
 * Engagement stepper — three steps from first call to operational robot.
 * Drives the compact horizontal-stepper section that sits after the
 * "How robots fit your FM stack" map and before "Why Mobilise".
 */
const ENGAGEMENT_STEPS = [
  {
    number: "01",
    title: "Audit",
    icon: Search,
    description: "Free 30-minute facility walkthrough + SLA gap analysis + ROI estimate. You keep the written report — whether you sign or not.",
  },
  {
    number: "02",
    title: "Deploy",
    icon: Wrench,
    description: "On-site engineer for installation, mapping, BMS/lift integration, and operator certification. Your robot is operational within 48 hours of arrival.",
  },
  {
    number: "03",
    title: "Operate",
    icon: Activity,
    description: "24/7 SLA-aligned support, India spare-parts pipeline, per-shift logs into your CMMS, AMC plans for predictable opex.",
  },
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

      {/* ───────── The value robotics add to your FM operations (3 pillars, alternating layout) ───────── */}
      <section
        className="py-20 sm:py-24 lg:py-32 relative"
        aria-labelledby="fm-value-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a14] to-[#030710]" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm font-semibold mb-4 uppercase tracking-wider">
              What robotics deliver
            </div>
            <h2
              id="fm-value-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight"
            >
              The value robotics add to your <span className="text-cyan-400">FM operations</span>
            </h2>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Cost. Reliability. Compliance. The three things facility management directors lose sleep over — and what autonomous robots do to each of them.
            </p>
          </motion.div>

          {/* Value pillars */}
          <div className="space-y-20 sm:space-y-24 lg:space-y-32">
            {/* ── Pillar 1: RELIABILITY (image left, text right on lg) ── */}
            <article className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1583416750470-965b2707b355?w=1200&auto=format&fit=crop&q=80"
                alt="Aircraft at a jet bridge in a quiet airport terminal at dusk — autonomous KEENON robots run 24/7 facility coverage when human FM crews aren't on shift"
                width={1200}
                height={900}
              />
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  <Moon className="w-3.5 h-3.5" aria-hidden="true" />
                  01 — Reliability
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-5 leading-tight tracking-tight">
                  Hit every SLA — <span className="text-cyan-400">even at 2 AM. Even on Diwali.</span>
                </h3>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6">
                  Night-shift crews don't always show. Festival shifts get skipped. Sick days turn into SLA breaches you end up explaining to the client. KEENON robots don't have those problems — they run autonomous 22-hour duty cycles, park themselves to recharge, and start the next round on schedule. Cleaning happens. Mailroom runs happen. Reception covers Tier-2 hours. Your SLA score stops being a calendar lottery.
                </p>
                <ul className="space-y-2.5 mb-7 text-white/80 text-sm sm:text-base">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>22-hour autonomous duty cycles per robot</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>Self-charging — zero operator dependency</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>Runs through festivals, monsoons, and labour shocks</span>
                  </li>
                </ul>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 min-h-11 rounded-xl border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/60 font-bold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  Explore the robot lineup
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </motion.div>
            </article>

            {/* ── Pillar 2: COST PREDICTABILITY (text left, image right on lg) ── */}
            <article className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:order-1"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  <TrendingDown className="w-3.5 h-3.5" aria-hidden="true" />
                  02 — Cost predictability
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-5 leading-tight tracking-tight">
                  Trade variable labour for <span className="text-cyan-400">fixed AMC.</span> CFO-defensible.
                </h3>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6">
                  Your labour line has climbed 35–55% since 2019. Wage inflation, retention bonuses, festival overtime — none of it is coming down. Robotic economics work the opposite way: hardware + AMC + power is a flat number you plug into a 3-year P&amp;L. Most customers pick the operating-lease model, which keeps the spend pure opex. One line. Predictable. Defensible.
                </p>
                <ul className="space-y-2.5 mb-7 text-white/80 text-sm sm:text-base">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>Fixed-cost AMC + spare-parts plans</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>Operating-lease (OpEx-only) model available</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>Typical payback inside 12–18 months</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 min-h-11 rounded-xl border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/60 font-bold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  Get a free ROI estimate
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </motion.div>
              <div className="lg:order-2">
                <ParallaxImage
                  src="/images/products/c55/hero.webp"
                  alt="KEENON C55 commercial-grade autonomous floor scrubber on duty — a flagship industrial cleaning robot used by Indian facility management teams to convert variable cleaning-crew labour into predictable AMC opex"
                  width={1200}
                  height={900}
                />
              </div>
            </article>

            {/* ── Pillar 3: AUDIT-READY DATA (image left, text right on lg) ── */}
            <article className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80"
                alt="Real-time operations dashboard showing per-shift cleaning logs, robot uptime, and SLA compliance metrics — the audit-grade data Mobilise-deployed robots feed into customer CMMS and BMS systems for IGBC, LEED, NABH, and ISO 41001 reporting"
                width={1200}
                height={900}
              />
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  <ClipboardCheck className="w-3.5 h-3.5" aria-hidden="true" />
                  03 — Audit-ready data
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-5 leading-tight tracking-tight">
                  Every shift logged. <span className="text-cyan-400">Audit-ready by default.</span>
                </h3>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6">
                  NABH, IGBC, LEED, ISO 41001 — every facility audit now expects evidence your supervisor's clipboard can't deliver. Every Mobilise-deployed robot logs every shift: square footage cleaned, route taken, exceptions raised, materials consumed. The data flows into your CMMS or sits on a dashboard your auditor can read. Compliance becomes a query, not a quarterly panic.
                </p>
                <ul className="space-y-2.5 mb-7 text-white/80 text-sm sm:text-base">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>Per-shift logs to your CMMS / BMS in real time</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>Live fleet dashboard with SLA-breach flags</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>ISO 41001 / IGBC / NABH evidence on demand</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 min-h-11 rounded-xl border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/60 font-bold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  See the data your auditor sees
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </motion.div>
            </article>
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

      {/* ───────── Engagement stepper (3 steps from first call to operational robot) ───────── */}
      <section
        className="py-20 sm:py-24 lg:py-28 bg-[#030710] relative"
        aria-labelledby="engagement-stepper-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm font-semibold mb-4 uppercase tracking-wider">
              How to engage
            </div>
            <h2
              id="engagement-stepper-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight"
            >
              From first call to <span className="text-cyan-400">operational robot</span> in three steps
            </h2>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Our engagement model is short, paid, and reversible. Most FM teams start with a free audit and a 60-day pilot — and decide to scale within six weeks.
            </p>
          </motion.div>

          {/* Stepper — ordered list, semantic.
              Mobile: stacks vertically (one column).
              md+: horizontal 3-column with a connecting line behind the circles. */}
          <ol className="relative grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 md:gap-6 max-w-5xl mx-auto">
            {/* Decorative connector line — md+ only */}
            <div
              className="hidden md:block absolute top-12 left-[calc(16.667%+1rem)] right-[calc(16.667%+1rem)] h-0.5 bg-gradient-to-r from-cyan-500/40 via-cyan-400/60 to-cyan-500/40 z-0"
              aria-hidden="true"
            />

            {ENGAGEMENT_STEPS.map(({ number, title, icon: Icon, description }, i) => (
              <li key={number} className="relative z-10 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Number + icon circle (gradient ring + inner panel) */}
                  <div className="relative mx-auto w-24 h-24 mb-6 group">
                    <div
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-2xl shadow-cyan-500/30 transition-transform group-hover:scale-105"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-[3px] rounded-full bg-[#030710] flex flex-col items-center justify-center">
                      <Icon className="w-6 h-6 text-cyan-400 mb-0.5" aria-hidden="true" />
                      <span className="text-white text-[10px] sm:text-xs font-black tracking-[0.2em]">
                        {number}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-3 tracking-tight">
                    {title}
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                    {description}
                  </p>
                </motion.div>
              </li>
            ))}
          </ol>

          {/* Single combined CTA below stepper */}
          <div className="text-center mt-12 sm:mt-16">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 min-h-11 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-2xl text-white font-bold text-base sm:text-lg transition-all shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#030710]"
            >
              Book your facility audit
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <p className="text-white/60 text-xs sm:text-sm mt-4">
              No commitment — just a 30-minute call to see if robotics fit your operations.
            </p>
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
