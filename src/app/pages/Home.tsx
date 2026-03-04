import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Zap, Shield, Globe, Award, ChevronRight, Star } from "lucide-react";
import { PRODUCTS, SOLUTIONS } from "../data/products";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { VideoCarousel } from "../components/VideoCarousel";

const STATS = [
  { value: "60,000+", label: "Businesses Served Globally" },
  { value: "100M+", label: "Successful Deliveries" },
  { value: "60+", label: "Countries Deployed" },
  { value: "9", label: "Robot Models Available" },
];

const CATEGORY_COLORS: Record<string, string> = {
  delivery: "cyan",
  cleaning: "green",
  service: "pink",
};

const ACCENT_CLASS: Record<string, string> = {
  cyan: "text-cyan-400 border-cyan-400/30 bg-cyan-500/10",
  green: "text-green-400 border-green-400/30 bg-green-500/10",
  pink: "text-pink-400 border-pink-400/30 bg-pink-500/10",
};

export function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* BG gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050a14] via-[#071628] to-[#050a14]" />
        <div className="absolute inset-0">
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
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-sm font-semibold">Official KEENON Robotics Partner — India</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-none mb-6">
              <span className="text-white">The Future of</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Service Robotics
              </span>
              <br />
              <span className="text-white">is Here</span>
            </h1>

            <p className="text-white/60 text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Mobilise brings KEENON's world-leading autonomous robots to India — transforming hospitality, healthcare,
              retail, and beyond with intelligent automation that delivers, cleans, and serves 24/7.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/products"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-2xl text-white font-bold text-lg transition-all shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 group"
              >
                Explore Robots <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/solutions"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all"
              >
                View Solutions
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
                <div className="text-white/50 text-sm">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products showcase */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a14] via-[#071220] to-[#050a14]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/60 text-sm font-semibold mb-4 uppercase tracking-wider">
              Our Product Range
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              9 Intelligent Robots.
              <br />
              <span className="text-cyan-400">Infinite Possibilities.</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              From compact delivery robots to industrial cleaning machines and sophisticated reception robots — KEENON's lineup covers every automation need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product, i) => {
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
                    className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/40 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10"
                  >
                    <div className={`relative h-48 bg-gradient-to-br ${product.thumbnailBg} overflow-hidden`}>
                      <ImageWithFallback
                        src={product.image}
                        alt={`KEENON ${product.name}`}
                        className="w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 flex flex-col justify-between p-5">
                        <div className={`self-start px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${accentClass}`}>
                          {product.categoryLabel}
                        </div>
                        <div>
                          <div className="text-5xl font-black text-white/20 leading-none">{product.name}</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-black text-white">KEENON {product.name}</h3>
                          <p className="text-cyan-400 text-sm font-semibold">{product.tagline}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all mt-1 shrink-0" />
                      </div>
                      <p className="text-white/50 text-sm line-clamp-2 leading-relaxed">{product.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {product.industries.slice(0, 3).map((ind) => (
                          <span key={ind} className="px-2 py-0.5 rounded-md bg-white/10 text-white/50 text-xs">{ind}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Video Carousel */}
      <VideoCarousel />

      {/* Solutions section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a14] to-[#030710]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/60 text-sm font-semibold mb-4 uppercase tracking-wider">
              Industry Solutions
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Built for <span className="text-cyan-400">Every Industry</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              KEENON robots are deployed across diverse industries globally, with tailored solutions for India's unique business environment.
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
                  className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-44 overflow-hidden">
                    <ImageWithFallback
                      src={sol.image}
                      alt={sol.title}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-black text-white mb-2">{sol.title}</h3>
                    <p className="text-white/50 text-sm mb-3 line-clamp-2">{sol.description}</p>
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

      {/* Why Mobilise */}
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
              <p className="text-white/50 text-lg mb-8 leading-relaxed">
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
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="text-white font-bold text-sm">{title}</div>
                    <div className="text-white/40 text-xs mt-0.5">{desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { name: "The Oberoi Hotels", review: "KEENON T9 robots have transformed our room service. Guest satisfaction scores are at an all-time high.", rating: 5, role: "Director of Operations" },
                { name: "Fortis Healthcare", review: "The T11 robots handle our hospital logistics with zero errors. A game-changer for patient care.", rating: 5, role: "Hospital Administrator" },
                { name: "Phoenix Palladium Mall", review: "C40 cleaning robots keep our 1 million sq ft facility spotless. ROI achieved in 6 months.", rating: 5, role: "Facilities Manager" },
              ].map((t, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="flex gap-1 mb-3">
                    {Array(t.rating).fill(0).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/70 text-sm italic mb-4">"{t.review}"</p>
                  <div>
                    <div className="text-white font-bold text-sm">{t.name}</div>
                    <div className="text-white/40 text-xs">{t.role}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/40 via-blue-900/40 to-purple-900/40" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
              Ready to Automate <span className="text-cyan-400">Your Business?</span>
            </h2>
            <p className="text-white/60 text-xl mb-10">
              Book a free demo and see how KEENON robots can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-2xl text-white font-black text-lg transition-all shadow-2xl shadow-cyan-500/40"
              >
                Book a Free Demo
              </Link>
              <Link
                to="/products"
                className="px-10 py-4 rounded-2xl border border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-all"
              >
                Browse All Robots
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}