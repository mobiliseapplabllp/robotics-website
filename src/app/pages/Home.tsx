import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Zap, Shield, Globe, Award, ChevronRight, CheckCircle2 } from "lucide-react";
import { PRODUCTS, SOLUTIONS } from "../data/products";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { VideoCarousel } from "../components/VideoCarousel";
import { BlogCard } from "../components/BlogCard";
import { ALL_POSTS } from "../../content/blog/loader";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

/**
 * Stats shown under the hero.
 *
 * Honest about origin: the first three are KEENON's global record (clearly
 * attributed), the fourth is a Mobilise India commitment. We deliberately do
 * NOT claim KEENON's 60K/100M as Mobilise's — that would mislead visitors.
 */
const STATS = [
  { value: `${PRODUCTS.length}`, label: "KEENON robots in catalog" },
  { value: "60,000+", label: "KEENON robots deployed worldwide" },
  { value: "<48 hrs", label: "Setup at your facility" },
  { value: "24/7", label: "India support in IST" },
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
 * Three featured robots — one per category — instead of dumping all 15 on Home.
 * Curation, not enumeration. Full catalog lives at /products.
 */
const FEATURED_IDS = ["t9", "c40", "s100"];

export function Home() {
  useDocumentTitle(
    "Autonomous Service Robots for India",
    "Mobilise is India's authorized KEENON Robotics partner — autonomous delivery, cleaning, and service robots deployed across hospitality, healthcare, retail, and enterprise.",
  );

  const featuredProducts = FEATURED_IDS
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is (typeof PRODUCTS)[number] => p !== undefined);

  const latestPosts = ALL_POSTS.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* ───────── Hero ───────── */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* BG gradient + ambient orbs */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050a14] via-[#071628] to-[#050a14]" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/5 rounded-full blur-3xl" />
        </div>

        {/* Grid overlay */}
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
              <span className="text-cyan-400 text-sm font-semibold">Official KEENON Robotics Partner — India</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.95] mb-6 tracking-tight">
              <span className="text-white">Robots that</span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                deliver, clean, and serve
              </span>
              <span className="text-white"> — 24/7.</span>
            </h1>

            <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto mb-6 leading-relaxed">
              Mobilise is India's authorized KEENON Robotics partner. From hotel room service to hospital corridors to retail floors, our autonomous robots work the hours your team can't — reliably, safely, and without breaks.
            </p>
            <p className="text-white/60 text-base max-w-2xl mx-auto mb-10">
              Most clients start with a <span className="text-cyan-400 font-semibold">60-day paid pilot</span>. Most decide to scale within 6 weeks.
            </p>

            {/* Primary + secondary CTAs — primary is now conversion (Book Demo), not exploration */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-2xl text-white font-bold text-lg transition-all shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a14]"
              >
                Book a Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link
                to="/products"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                Explore Robots
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {STATS.map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl font-black text-cyan-400 mb-1">{s.value}</div>
                <div className="text-white/70 text-sm leading-snug">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────── Why Mobilise (moved to position 2 — trust before product) ───────── */}
      <section className="py-24 bg-[#030710]">
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
                India's Most Trusted <span className="text-cyan-400">Robotics Partner</span>
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                As KEENON's authorized partner in India, Mobilise provides end-to-end robotics solutions — from consultation and deployment to training, maintenance, and 24/7 support.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap, title: "Rapid Deployment", desc: "Operational in 48 hours" },
                  { icon: Shield, title: "Lifetime Support", desc: "24/7 dedicated team" },
                  { icon: Globe, title: "Pan-India Coverage", desc: "All major cities" },
                  { icon: Award, title: "Certified Partner", desc: "Official KEENON dealer" },
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
                What every customer gets
              </div>
              <h3 className="text-2xl font-black text-white mb-6">
                A full partnership, not just a purchase
              </h3>
              <ul className="space-y-4">
                {[
                  { title: "On-site setup & operator training", desc: "Engineers come to your facility to install, calibrate, and train your staff to run the robot confidently on day one." },
                  { title: "Spare parts stocked in India", desc: "No waiting on international shipping — common replacement parts are warehoused locally for same-week turnaround." },
                  { title: "24/7 support in IST business hours", desc: "A dedicated account manager and technical support line, staffed during Indian business hours and on-call after." },
                  { title: "Warranty + AMC maintenance plans", desc: "Standard manufacturer warranty plus optional annual maintenance contracts for long-term peace of mind." },
                  { title: "Pilot deployments available", desc: "Not sure where to start? Run a scoped pilot in one facility before committing to a broader rollout." },
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

      {/* ───────── Featured products (3 curated, not all 15) ───────── */}
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
              Featured robots
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Three robots, three problems solved.
              <br />
              <span className="text-cyan-400">{PRODUCTS.length} more where they came from.</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              One delivery, one cleaning, one service — the most-asked-about robots in our pipeline. Browse the full catalog when you're ready.
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

      {/* ───────── Video carousel ───────── */}
      <VideoCarousel />

      {/* ───────── Solutions ───────── */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a14] to-[#030710]" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/70 text-sm font-semibold mb-4 uppercase tracking-wider">
              Industry Solutions
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Where robots earn back <span className="text-cyan-400">their cost</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Hotels reclaim runner hours. Hospitals reclaim nursing time. Malls clean a million sq ft overnight. Here's how it adds up across the industries we serve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.map((sol, i) => (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/solutions#${sol.id}`}
                  className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <div className="relative h-44 overflow-hidden">
                    <ImageWithFallback
                      src={sol.image}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-transparent" aria-hidden="true" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-black text-white mb-2">{sol.title}</h3>
                    <p className="text-white/70 text-sm mb-3 line-clamp-2">{sol.description}</p>
                    <div className="flex items-center gap-1 text-cyan-400 text-xs font-semibold">
                      {sol.stats}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {sol.robots.map((r) => (
                        <span key={r} className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">{r}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Latest from the blog ───────── */}
      {latestPosts.length > 0 && (
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#030710] to-[#050a14]" aria-hidden="true" />
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
              See it in your facility — <span className="text-cyan-400">risk-free for 60 days.</span>
            </h2>
            <p className="text-white/80 text-xl mb-10 leading-relaxed">
              Pilot one robot at one location. No commitment beyond the trial. If it doesn't earn its keep, we pull it out — no charge for the deployment work.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-2xl text-white font-black text-lg transition-all shadow-2xl shadow-cyan-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a14]"
              >
                Book a Demo
              </Link>
              <Link
                to="/products"
                className="px-10 py-4 rounded-2xl border border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                Browse all robots
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
