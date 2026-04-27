import { useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import { SOLUTIONS } from "../data/products";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function Solutions() {
  useDocumentTitle(
    "Industry Solutions",
    "KEENON robot solutions for hospitality, healthcare, retail, corporate, and aviation industries across India."
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
              KEENON robots run across hospitality, healthcare, retail, corporate, and aviation environments. Mobilise scopes the right model for your floor plan, integrates it with your existing operations, and supports it on the ground in India.
            </p>
          </motion.div>
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

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-bold hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20"
              >
                Get a Solution Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* India coverage section */}
      <section className="py-20 bg-[#030710] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">KEENON Robots Across <span className="text-cyan-400">India</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Mobilise supports KEENON deployments in India's major metros. Pilot installations are scoped per facility — request a site survey to plan yours.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { city: "Mumbai", sector: "Hospitality & retail" },
              { city: "Delhi NCR", sector: "Healthcare & corporate" },
              { city: "Bengaluru", sector: "Tech parks & hotels" },
              { city: "Hyderabad", sector: "Pharma & hospitality" },
              { city: "Chennai", sector: "Manufacturing & F&B" },
              { city: "Kolkata", sector: "Retail & healthcare" },
              { city: "Pune", sector: "Hospitality & corporate" },
              { city: "Ahmedabad", sector: "Hospitality & retail" },
            ].map((city, i) => (
              <motion.div
                key={city.city}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-cyan-500/30 transition-colors"
              >
                <div className="text-white font-bold text-base">{city.city}</div>
                <div className="text-white/40 text-xs mt-1">{city.sector}</div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-white/30 text-xs mt-8 max-w-2xl mx-auto">
            City-level deployment counts will appear here once verified with our sales team. Talk to us for case-study references under NDA.
          </p>
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
