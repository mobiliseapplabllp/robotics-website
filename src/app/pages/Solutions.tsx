import { useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle, Globe, MapPin, Building2, Calendar, TrendingUp, ExternalLink } from "lucide-react";
import { SOLUTIONS } from "../data/products";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

/**
 * Global KEENON deployment context. Per BRAND.md, factual claims must be on
 * the approved whitelist — these are: 60+ countries, 600+ cities, six verticals
 * supported, and Mobilise's 30-day pilot offer. No India-specific deployment
 * counts are claimed (we haven't shipped to a named Indian customer yet).
 */
const INDIA_STATS = [
  { icon: Globe, value: "60+", label: "Countries with KEENON robots" },
  { icon: MapPin, value: "600+", label: "Cities served globally" },
  { icon: Building2, value: "6", label: "Verticals supported in India" },
  { icon: Calendar, value: "30-day", label: "Paid pilot window" },
];

/**
 * Maps products.ts SOLUTIONS id → /solutions/{slug} for the per-industry
 * landing pages. "foodbev" gets a cleaner SEO slug; others match 1:1.
 */
const DETAIL_SLUG: Record<string, string> = {
  hospitality: "hospitality",
  healthcare: "healthcare",
  foodbev: "food-beverage",
  retail: "retail",
  aviation: "aviation",
  corporate: "corporate",
};

export function Solutions() {
  useDocumentTitle(
    "Industry Solutions for Facility Management Automation",
    "Per-industry robotic automation solutions from Mobilise — hospitality, healthcare, food & beverage, retail, aviation, and corporate. KEENON robots proven across 60+ countries, now launching in India.",
  );
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#050a14] pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
              <span className="text-cyan-400 text-sm font-semibold">Industry Solutions — India Focus</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
              Robots for <span className="text-cyan-400">Every Industry</span>
            </h1>
            <p className="text-white/50 text-xl max-w-3xl mx-auto">
              KEENON's robots are deployed across 60+ countries in six verticals — hospitality, healthcare, food &amp; beverage, retail, aviation, and corporate. Mobilise brings that global deployment expertise to Indian facility-management operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* India stats */}
      <section className="py-12 bg-[#030710] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {INDIA_STATS.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-3xl font-black text-cyan-400 mb-1">{value}</div>
                <div className="text-white/40 text-sm">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 space-y-32">
        {SOLUTIONS.map((sol, i) => (
          <motion.div
            key={sol.id}
            id={sol.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
          >
            {/* Image */}
            <div className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/5">
                <ImageWithFallback
                  src={sol.image}
                  alt={sol.title}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-flex items-center gap-2 bg-cyan-500/90 text-white px-4 py-2 rounded-xl text-sm font-bold">
                    <TrendingUp className="w-4 h-4" /> {sol.stats}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold mb-6 uppercase tracking-wider">
                {sol.title}
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">{sol.title}</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">{sol.description}</p>

              {/* Use cases */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {sol.cases.map((c) => (
                  <div key={c} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-white/70 text-sm">{c}</span>
                  </div>
                ))}
              </div>

              {/* Robots used */}
              <div className="mb-8">
                <div className="text-white/40 text-xs uppercase tracking-wider mb-3">Recommended Robots</div>
                <div className="flex flex-wrap gap-3">
                  {sol.robots.map((r) => (
                    <Link
                      key={r}
                      to={`/products/${r.toLowerCase()}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all group"
                    >
                      <span className="text-white font-bold text-sm group-hover:text-cyan-400 transition-colors">KEENON {r}</span>
                      <ArrowRight className="w-3 h-3 text-white/30 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-3">
                {DETAIL_SLUG[sol.id] && (
                  <Link
                    to={`/solutions/${DETAIL_SLUG[sol.id]}`}
                    className="inline-flex items-center gap-2 px-6 py-3 min-h-11 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-bold hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a14]"
                    aria-label={`Read the full ${sol.title} solution guide`}
                  >
                    Explore the {sol.title.split(" ")[0]} guide <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                )}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 min-h-11 rounded-xl border border-white/20 text-white font-bold hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  Book an audit <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* India launch geography — cities we're actively in conversations across */}
      <section className="py-20 bg-[#030710] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Launching KEENON Robots Across <span className="text-cyan-400">India</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Pilot conversations underway across India's tier-1 metros. Spare-parts inventory and engineering response are scoped city-by-city as the first deployments go live.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { city: "Mumbai", focus: "Hospitality & Retail" },
              { city: "Delhi NCR", focus: "Healthcare & Corporate" },
              { city: "Bengaluru", focus: "Tech Parks & Hotels" },
              { city: "Hyderabad", focus: "Pharma & Hospitality" },
              { city: "Chennai", focus: "Manufacturing & F&B" },
              { city: "Kolkata", focus: "Retail & Healthcare" },
            ].map((city, i) => (
              <motion.div
                key={city.city}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-cyan-500/30 transition-colors"
              >
                <div className="text-white font-bold text-base mb-1">{city.city}</div>
                <div className="text-cyan-400/80 text-[10px] uppercase tracking-wider font-bold mb-2">Pilot focus</div>
                <div className="text-white/50 text-xs">{city.focus}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 to-blue-900/30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-6">
            Transform Your Business with <span className="text-cyan-400">KEENON Robotics</span>
          </h2>
          <p className="text-white/50 text-xl mb-10">
            Get a free consultation and customized solution proposal for your industry.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white font-black text-lg shadow-2xl shadow-cyan-500/30"
            >
              Schedule Free Consultation
            </Link>
            <Link
              to="/products"
              className="px-10 py-4 rounded-2xl border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all"
            >
              Browse Robots
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
