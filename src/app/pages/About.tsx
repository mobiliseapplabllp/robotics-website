import { motion } from "motion/react";
import { Link } from "react-router";
import { Award, Globe, Users, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const TIMELINE = [
  { year: "2010", event: "KEENON Robotics founded in Shanghai, China" },
  { year: "2021", event: "$200M Series D led by SoftBank Vision Fund 2 — largest round to date for a service robot company" },
  { year: "2024", event: "100,000+ KEENON service robots shipped cumulatively, ranked #1 in catering delivery robot exports" },
  { year: "2025", event: "DINERBOT T10 wins iF Design Award 2025; KEENON present in 60+ countries and 600+ cities" },
  { year: "2026", event: "Mobilise scales KEENON deployments across Indian hospitality, healthcare, retail, and facility management" },
];

export function About() {
  useDocumentTitle(
    "About Mobilise",
    "Mobilise App Lab Limited is an authorized KEENON Robotics partner in India — bringing autonomous service robots to Indian hospitality, healthcare, retail, and facility management."
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
                <span className="text-cyan-400 text-sm font-semibold">About Mobilise App Lab Limited</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
                Service Robots for <span className="text-cyan-400">Indian Operations</span>
              </h1>
              <p className="text-white/60 text-xl leading-relaxed mb-8">
                Mobilise App Lab Limited is an authorized KEENON Robotics partner in India. We handle sales, installation, operator training, AMC, and on-ground service for KEENON's delivery, cleaning, and reception robots — the same platform deployed in 60+ countries and 600+ cities worldwide.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "60+", label: "Countries KEENON Operates In" },
                  { value: "600+", label: "Cities Globally" },
                  { value: "100K+", label: "KEENON Robots Shipped Worldwide" },
                  { value: "24/7", label: "MALL Support in IST Hours" },
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
                  src="https://images.unsplash.com/photo-1708924908152-aa8df3576b86?w=800"
                  alt="India Technology Innovation"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-[#050a14]/80 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                    <div className="text-cyan-400 font-bold text-sm mb-1">Authorized Partnership</div>
                    <div className="text-white/70 text-sm">Mobilise × KEENON Robotics — sales, installation, training, and AMC support in India.</div>
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
              <h2 className="text-4xl font-black text-white mb-6">About <span className="text-cyan-400">KEENON Robotics</span></h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Founded in 2010 and headquartered in Shanghai, KEENON Robotics builds autonomous service robots across delivery (DINERBOT), cleaning (KLEENBOT), guiding, disinfection, and humanoid (XMAN) categories. The platform is in service across more than 60 countries and 600 cities.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                In 2024, KEENON crossed 100,000 service robots shipped cumulatively and was ranked #1 in catering delivery robot exports. The company raised a $200M Series D from SoftBank Vision Fund 2 in 2021 — the largest funding round to date for a service robot manufacturer.
              </p>
              <div className="space-y-3">
                {[
                  "Founded 2010, headquartered in Shanghai",
                  "Present in 60+ countries and 600+ cities (per keenon.com)",
                  "100,000+ service robots shipped cumulatively (KEENON, 2024)",
                  "DINERBOT T10 — iF Design Award 2025 winner",
                  "Keenon Cloud holds GDPR certification (since 2023)",
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
                { icon: Award, title: "Award-Recognised Design", desc: "DINERBOT T10 named an iF Design Award 2025 winner — selected from nearly 11,000 entries across 66 countries." },
                { icon: Globe, title: "Proven Global Footprint", desc: "Deployed across the U.S., Germany, France, U.A.E., Japan, South Korea, Thailand, and Vietnam, among 60+ countries." },
                { icon: Users, title: "Service Robotics Specialist", desc: "Fifteen years focused on autonomous positioning, perception, and multi-robot dispatch for commercial environments." },
                { icon: Zap, title: "Authorized India Support", desc: "Mobilise handles installation, operator training, spare parts, and AMC for KEENON deployments in India." },
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

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-black text-white text-center mb-16">Our <span className="text-cyan-400">Journey</span></h2>
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

      {/* Team */}
      <section className="py-20 bg-[#030710] border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Leadership <span className="text-cyan-400">Team</span></h2>
          <p className="text-white/50 mb-8">
            Mobilise is operated by Mobilise App Lab Limited (MALL). Named leadership profiles will appear here once approved by the marketing team.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            Meet the team on a demo call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Partner with <span className="text-cyan-400">Mobilise</span></h2>
          <p className="text-white/50 text-xl mb-10">Talk to our team about a scoped pilot or full deployment of KEENON robots in your facility.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white font-black text-lg shadow-2xl shadow-cyan-500/30"
          >
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
