import { motion } from "motion/react";
import { Link } from "react-router";
import { Award, Globe, Users, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const TIMELINE = [
  { year: "2010", event: "KEENON Robotics founded in Hangzhou, China" },
  { year: "2015", event: "First commercial deployment in Chinese restaurant chains" },
  { year: "2018", event: "Global expansion begins — 30+ countries" },
  { year: "2020", event: "COVID-19 accelerates contactless robot adoption worldwide" },
  { year: "2022", event: "60,000+ business deployments achieved globally" },
  { year: "2024", event: "Mobilise becomes KEENON's official India partner" },
  { year: "2025", event: "400+ deployments across India in 12 months" },
  { year: "2026", event: "Pan-India network — all major cities covered" },
];

const TEAM = [
  {
    name: "Arjun Mehta",
    role: "CEO & Co-Founder",
    bio: "15+ years in robotics and automation across APAC. Former head of automation at Reliance Industries.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    bio: "IIT Bombay alumna. Expert in AI, SLAM navigation, and IoT integration for service robotics.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Rohan Kapoor",
    role: "VP Sales — India",
    bio: "Built distribution networks across 200+ Indian cities. Expert in hospitality and healthcare sectors.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
];

export function About() {
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
                <span className="text-cyan-400 text-sm font-semibold">About Mobilise for Robotics</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
                Bringing the <span className="text-cyan-400">Robot Revolution</span> to India
              </h1>
              <p className="text-white/60 text-xl leading-relaxed mb-8">
                Mobilise for Robotics is India's exclusive authorized partner for KEENON Robotics — the world's leading manufacturer of service robots. We bridge the gap between cutting-edge Chinese robotics innovation and India's rapidly growing automation market.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "400+", label: "India Deployments" },
                  { value: "₹200 Cr+", label: "Client ROI Generated" },
                  { value: "15+", label: "Cities Covered" },
                  { value: "24/7", label: "Support Available" },
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
                    <div className="text-cyan-400 font-bold text-sm mb-1">Official Partnership</div>
                    <div className="text-white/70 text-sm">Mobilise × KEENON Robotics — Authorized Indian Distributor & Service Partner</div>
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
                Founded in 2010 and headquartered in Hangzhou, China, KEENON Robotics is the world's largest manufacturer of commercial service robots. With a team of 3,000+ engineers and a portfolio spanning delivery, cleaning, and service robots, KEENON has deployed over 60,000 robots in 60+ countries.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                KEENON's robots are powered by proprietary AI algorithms, advanced SLAM navigation, and deep machine learning — making them the most reliable and intelligent service robots available today. Their manufacturing facility in Hangzhou produces 50,000 robots annually, ensuring consistent quality and timely delivery.
              </p>
              <div className="space-y-3">
                {[
                  "World's #1 commercial delivery robot manufacturer",
                  "ISO 9001:2015 quality certified",
                  "CE, FCC, RoHS compliant for global markets",
                  "100+ patents in robotics & AI navigation",
                  "Trusted by Fortune 500 companies globally",
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
                { icon: Award, title: "World Leader", desc: "#1 commercial service robot manufacturer globally with the largest robot fleet deployed across 60+ countries." },
                { icon: Globe, title: "Global Presence", desc: "Operating in USA, UK, UAE, Singapore, Japan, South Korea, and now rapidly expanding across India." },
                { icon: Users, title: "Innovation Driven", desc: "3,000+ R&D engineers continuously advancing AI navigation, NLP, and robot intelligence." },
                { icon: Zap, title: "Proven ROI", desc: "Average client achieves full ROI within 18 months, with 3x service efficiency improvements documented." },
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-black text-white text-center mb-4">Leadership <span className="text-cyan-400">Team</span></h2>
          <p className="text-white/50 text-center mb-12 max-w-2xl mx-auto">
            Mobilise's leadership team combines deep expertise in robotics, technology, and Indian market dynamics.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-colors"
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-white font-black text-lg">{member.name}</h3>
                  <p className="text-cyan-400 text-sm font-semibold mb-3">{member.role}</p>
                  <p className="text-white/50 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Partner with <span className="text-cyan-400">Mobilise</span></h2>
          <p className="text-white/50 text-xl mb-10">Join 400+ businesses across India that trust Mobilise for their robotics needs.</p>
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
