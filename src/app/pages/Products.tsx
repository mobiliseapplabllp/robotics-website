import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Filter } from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES } from "../data/products";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const ACCENT_BORDER: Record<string, string> = {
  delivery: "hover:border-cyan-500/50 hover:shadow-cyan-500/10",
  cleaning: "hover:border-green-500/50 hover:shadow-green-500/10",
  service: "hover:border-pink-500/50 hover:shadow-pink-500/10",
};

const CAT_BADGE: Record<string, string> = {
  delivery: "text-cyan-400 bg-cyan-500/10 border-cyan-400/30",
  cleaning: "text-green-400 bg-green-500/10 border-green-400/30",
  service: "text-pink-400 bg-pink-500/10 border-pink-400/30",
};

export function Products() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <div className="pt-20 min-h-screen bg-[#050a14]">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
              <span className="text-cyan-400 text-sm font-semibold">KEENON Robotics Product Range</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
              Meet the <span className="text-cyan-400">Robots</span>
            </h1>
            <p className="text-white/50 text-xl max-w-3xl mx-auto">
              Explore KEENON's complete lineup of intelligent autonomous robots — each engineered for specific environments, industries, and use cases across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-white/40 text-sm mr-2">
            <Filter className="w-4 h-4" /> Filter:
          </div>
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                active === cat.id
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
          <span className="ml-auto text-white/30 text-sm">{filtered.length} robots</span>
        </div>
      </div>

      {/* Products grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={`/products/${product.id}`}
                className={`group block bg-white/5 border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${ACCENT_BORDER[product.category]}`}
              >
                {/* Image area */}
                <div className={`relative h-60 bg-gradient-to-br ${product.thumbnailBg} overflow-hidden`}>
                  <ImageWithFallback
                    src={product.image}
                    alt={`KEENON ${product.name}`}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/80 to-transparent" />

                  {/* Model name large bg text */}
                  <div className="absolute bottom-0 right-0 text-8xl font-black text-white/10 leading-none pr-4 pb-2 select-none">
                    {product.name}
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${CAT_BADGE[product.category]}`}>
                      {product.categoryLabel}
                    </span>
                  </div>

                  {/* Play indicator */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h2 className="text-2xl font-black text-white">KEENON {product.name}</h2>
                      <p className={`text-sm font-semibold mt-0.5 ${
                        product.category === "delivery" ? "text-cyan-400" :
                        product.category === "cleaning" ? "text-green-400" : "text-pink-400"
                      }`}>{product.tagline}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all mt-2 shrink-0" />
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Quick specs */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {product.specs.slice(0, 4).map((spec) => (
                      <div key={spec.label} className="bg-white/5 rounded-lg p-2">
                        <div className="text-white/30 text-[10px] uppercase tracking-wider">{spec.label}</div>
                        <div className="text-white text-xs font-semibold mt-0.5 truncate">{spec.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Industries */}
                  <div className="flex flex-wrap gap-1.5">
                    {product.industries.map((ind) => (
                      <span key={ind} className="px-2 py-0.5 rounded-md bg-white/8 text-white/40 text-xs">{ind}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA bar */}
      <div className="border-t border-white/10 bg-[#030710] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-black text-white mb-4">Not Sure Which Robot is Right for You?</h3>
          <p className="text-white/50 mb-8">Our experts will assess your facility and recommend the perfect KEENON solution.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-bold text-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
          >
            Talk to an Expert <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
