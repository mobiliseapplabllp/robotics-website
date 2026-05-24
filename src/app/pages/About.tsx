import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Award,
  Globe,
  Users,
  Zap,
  ArrowRight,
  CheckCircle,
  Wrench,
  HeartHandshake,
  Headphones,
  Building2,
  Hotel,
  Network,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

/**
 * Public claims here are constrained to facts on `docs/routines/BRAND.md`
 * (KEENON: Shanghai HQ, 60+ countries, 600+ cities, DINERBOT T1 first autonomous
 * catering delivery robot, KEENON Cloud GDPR-certified 2023, iF Design Award 2025 T10).
 * Indian deployment counts and named customers are intentionally omitted — we
 * haven't shipped to a named Indian customer yet.
 */

const TIMELINE = [
  { year: "2010", event: "KEENON Robotics founded in Shanghai, China" },
  { year: "2015", event: "DINERBOT T1 launched — first autonomous catering delivery robot" },
  { year: "2018", event: "KEENON enters European, Middle Eastern, and Southeast Asian markets" },
  { year: "2020", event: "Pandemic accelerates demand for contactless service robots worldwide" },
  { year: "2023", event: "KEENON Cloud achieves GDPR certification — global data-residency posture" },
  { year: "2025", event: "DINERBOT T10 wins the iF Design Award 2025" },
  { year: "2026", event: "Mobilise App Lab Limited (MALL) becomes KEENON's authorised India partner — pilots opening across Indian hospitality, healthcare, and corporate facilities" },
];

/**
 * Three capability pillars that define how a Mobilise deployment lands in India.
 * Used in place of named-individual leadership cards while the team page is built out.
 */
const CAPABILITIES = [
  {
    icon: Wrench,
    title: "Field deployment",
    desc: "KEENON-certified engineers handle installation, lift integration, and on-site commissioning. Operator training in Hindi, English, and regional languages on request.",
  },
  {
    icon: Network,
    title: "India operations",
    desc: "Domestic spare-parts inventory from day one and a regional service network designed to keep robots in production — not waiting on a customs queue.",
  },
  {
    icon: Headphones,
    title: "Customer success",
    desc: "Paid 30-day pilots, ROI modelling against your own occupancy and wage data, post-deployment performance reviews, and an escalation path to KEENON HQ on roadmap requests.",
  },
];

/**
 * Three audiences we invite to partner — calibrated to the kinds of conversations
 * we actually want to have right now.
 */
const PARTNER_AUDIENCES = [
  {
    icon: Hotel,
    title: "Hospitality, healthcare & retail operators",
    desc: "Run a paid pilot at a flagship property. We bring the robot, the engineer, and the measurement framework. You bring one floor.",
    cta: "Book a pilot conversation",
  },
  {
    icon: Building2,
    title: "Facility-management firms & IFM partners",
    desc: "Add KEENON delivery and cleaning robotics to your service catalogue. White-label integrations and regional sub-distribution available.",
    cta: "Discuss a partnership",
  },
  {
    icon: HeartHandshake,
    title: "Channel partners & advisors",
    desc: "Help us scale the deployment network across India's tier-1 and tier-2 cities. We're actively building the regional service-partner panel.",
    cta: "Get in touch",
  },
];

export function About() {
  useDocumentTitle(
    "About Mobilise",
    "Mobilise App Lab Limited is India's authorised KEENON Robotics partner — bringing 14+ years of global service-robot expertise to Indian facilities.",
  );
  return (
    <div className="min-h-screen bg-[#050a14] pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
                <span className="text-cyan-400 text-sm font-semibold">Mobilise App Lab Limited × KEENON Robotics</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
                Bringing global service-robot <span className="text-cyan-400">expertise</span> to India
              </h1>
              <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-8">
                Mobilise App Lab Limited is KEENON Robotics' authorised India partner. We bring 14+ years of deployment know-how — proven across 60+ countries and 600+ cities — to Indian hotels, hospitals, malls, restaurants, airports, and corporate campuses. We're now in pilot conversations with our first Indian customers.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "60+", label: "Countries with KEENON robots" },
                  { value: "600+", label: "Cities served globally" },
                  { value: "Since 2010", label: "KEENON Robotics established" },
                  { value: "2026", label: "Mobilise × KEENON partnership" },
                ].map((s, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-2xl font-black text-cyan-400">{s.value}</div>
                    <div className="text-white/50 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80"
                  alt="Modern Indian corporate environment — representative of the facility-management market Mobilise serves"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/80 via-[#050a14]/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-[#050a14]/85 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                    <div className="text-cyan-400 font-bold text-sm mb-1">Official Partnership</div>
                    <div className="text-white/80 text-sm">Mobilise × KEENON Robotics — Authorised Indian Distributor &amp; Service Partner</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About KEENON */}
      <section className="py-20 bg-[#030710] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                About <span className="text-cyan-400">KEENON Robotics</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Founded in 2010 and headquartered in Shanghai, KEENON Robotics is a major commercial service-robot manufacturer. Their portfolio spans the DINERBOT delivery series, the KLEENBOT cleaning series, guiding and disinfection robots, and the XMAN humanoid platform. KEENON's DINERBOT T1 — launched in 2015 — was the world's first autonomous catering delivery robot.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                KEENON robots run on proprietary AI navigation algorithms, SLAM-based mapping, and multi-sensor fusion across LiDAR, stereo vision, and IMU. The platform's reliability has been refined across five generations of commercial deployment — the kind of maturity that turns service robots from experiments into appliances.
              </p>
              <div className="space-y-3">
                {[
                  "Present in 60+ countries and 600+ cities worldwide",
                  "CB certification on most products",
                  "KEENON Cloud achieved GDPR certification in 2023",
                  "DINERBOT T10 awarded iF Design Award 2025",
                  "Continuous R&D investment in navigation, perception, and human–robot interaction",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span className="text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="space-y-4">
              {[
                {
                  icon: Globe,
                  title: "Global footprint",
                  desc: "KEENON robots operate across 60+ countries and 600+ cities — hospitality flagships, hospital networks, retail, airports, and corporate campuses on five continents.",
                },
                {
                  icon: Award,
                  title: "Mature product lines",
                  desc: "Five generations of delivery, cleaning, guiding, and humanoid robotics since the 2015 DINERBOT T1 — the world's first autonomous catering delivery robot.",
                },
                {
                  icon: Users,
                  title: "Multi-vertical fit",
                  desc: "Proven use cases across hospitality, healthcare, food & beverage, retail, aviation, and corporate — the same six verticals we focus on in India.",
                },
                {
                  icon: Zap,
                  title: "Operations-grade hardware",
                  desc: "Commercial-grade chassis, 9–18 hour runtimes per platform, IoT lift integration, and AMC-friendly mechanical design. Built to run, not to demo.",
                },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold mb-1">{title}</div>
                    <div className="text-white/50 text-sm">{desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Mobilise */}
      <section className="py-20 bg-[#050a14] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 text-center">
            About <span className="text-cyan-400">Mobilise App Lab Limited</span>
          </h2>
          <p className="text-white/60 leading-relaxed mb-5 text-center max-w-3xl mx-auto">
            Mobilise App Lab Limited (MALL) is an India-headquartered technology firm operating across enterprise SaaS and connected hardware. Our core platforms — OPSuit, SCM Pro, iDo Pro, and HREVO — serve operations, supply-chain, and workforce management across Indian enterprises. Our hardware portfolio spans biometrics, RFID, thermal printers, 4G CCTV with computer vision, IoT monitoring, and GPS tracking.
          </p>
          <p className="text-white/60 leading-relaxed text-center max-w-3xl mx-auto">
            Mobilise Robotics is our newest vertical — launched in 2026 to bring KEENON's commercial service robots to Indian facilities. We chose KEENON because their hardware is mature, their installed base is large, and their roadmap is grounded in operational realities — not lab demos.
          </p>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm">
              <span className="text-cyan-400 font-semibold">Registered office:</span>
              <span>Unit 201, Tower B, Unitech Cyber Park, Sector 39, Gurgaon, Haryana — 122002</span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-4">
            Our <span className="text-cyan-400">Journey</span>
          </h2>
          <p className="text-white/50 text-center mb-16 max-w-2xl mx-auto">
            KEENON's 14-year product evolution and Mobilise's path to becoming the authorised India partner.
          </p>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-16 h-16 shrink-0 rounded-full border-2 border-cyan-500/50 bg-[#050a14] flex items-center justify-center z-10">
                    <span className="text-cyan-400 font-black text-xs">{item.year}</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex-1 mt-3">
                    <p className="text-white/70">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How we work — replaces named-leadership cards */}
      <section className="py-20 bg-[#030710] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-4">
            How We <span className="text-cyan-400">Work</span>
          </h2>
          <p className="text-white/50 text-center mb-12 max-w-2xl mx-auto">
            Three capability pillars define a Mobilise deployment — and what we commit to before signing a contract.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {CAPABILITIES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-cyan-400" aria-hidden="true" />
                </div>
                <h3 className="text-white font-black text-lg mb-2">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner with us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Partner with <span className="text-cyan-400">Mobilise</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We're actively in conversations across three partnership tracks. If any of these describe you, we'd like to hear from you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PARTNER_AUDIENCES.map(({ icon: Icon, title, desc, cta }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:border-cyan-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-cyan-400" aria-hidden="true" />
                </div>
                <h3 className="text-white font-black text-lg mb-2">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">{desc}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-cyan-400 font-bold text-sm group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                >
                  {cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            Start the <span className="text-cyan-400">conversation</span>
          </h2>
          <p className="text-white/60 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            Tell us about your facility, your operational pain points, or the partnership you have in mind. We'll respond within one business day.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 min-h-11 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white font-black text-lg shadow-2xl shadow-cyan-500/30 hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a14]"
          >
            Get in touch <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
