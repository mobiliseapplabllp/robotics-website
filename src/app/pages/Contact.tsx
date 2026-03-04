import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Bot } from "lucide-react";

const OFFICES = [
  { city: "Mumbai (HQ)", address: "Level 12, One BKC, Bandra Kurla Complex, Mumbai - 400051", phone: "+91 98765 43210", email: "mumbai@mobilise.in" },
  { city: "Delhi NCR", address: "DLF Cyber City, Tower A, Sector 25, Gurugram - 122002", phone: "+91 98765 43211", email: "delhi@mobilise.in" },
  { city: "Bengaluru", address: "RMZ Eco World, Outer Ring Road, Devarabisanahalli - 560037", phone: "+91 98765 43212", email: "bangalore@mobilise.in" },
];

const INQUIRY_TYPES = [
  "Product Demo Request",
  "Pricing Inquiry",
  "Partnership / Dealership",
  "Technical Support",
  "General Inquiry",
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    city: "",
    inquiry: "",
    product: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#050a14] pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
              <span className="text-cyan-400 text-sm font-semibold">Contact & Demo Requests</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
              Let's <span className="text-cyan-400">Talk Robots</span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl mx-auto">
              Ready to automate your business? Our India team will help you find the perfect KEENON robot solution.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            {/* Quick contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 shadow-2xl shadow-cyan-500/20"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-black text-xl mb-2">Book a Free Demo</h3>
              <p className="text-white/80 text-sm mb-4">See KEENON robots at your facility — zero commitment, zero cost.</p>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-white font-bold">
                <Phone className="w-4 h-4" /> +91 98765 43210
              </a>
            </motion.div>

            {/* Info tiles */}
            <div className="space-y-4">
              {[
                { icon: Clock, label: "Response Time", value: "Within 2 business hours" },
                { icon: MapPin, label: "Offices", value: "Mumbai • Delhi • Bengaluru" },
                { icon: Mail, label: "Email", value: "info@mobilise.in" },
              ].map(({ icon: Icon, label, value }, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-wider">{label}</div>
                    <div className="text-white font-semibold text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Offices */}
            <div>
              <h3 className="text-white font-black text-lg mb-4">Our Offices</h3>
              <div className="space-y-4">
                {OFFICES.map((office, i) => (
                  <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                    <div className="text-cyan-400 font-bold text-sm mb-2">{office.city}</div>
                    <div className="text-white/50 text-xs leading-relaxed mb-2">{office.address}</div>
                    <div className="flex flex-col gap-1">
                      <a href={`tel:${office.phone}`} className="text-white/60 text-xs hover:text-cyan-400 transition-colors">{office.phone}</a>
                      <a href={`mailto:${office.email}`} className="text-white/60 text-xs hover:text-cyan-400 transition-colors">{office.email}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">Thank You!</h3>
                  <p className="text-white/60 max-w-sm mx-auto">
                    We've received your inquiry. Our team will reach out within 2 business hours to schedule your demo.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-6 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-black text-white mb-2">Send Us a Message</h2>
                  <p className="text-white/50 text-sm mb-8">Fill the form and we'll get back to you within 2 hours.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Full Name *</label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Rajesh Kumar"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Work Email *</label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rajesh@company.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Phone Number *</label>
                        <input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Company Name *</label>
                        <input
                          required
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your Company Pvt Ltd"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">City</label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="Mumbai, Delhi, Bengaluru..."
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Inquiry Type</label>
                        <select
                          value={formData.inquiry}
                          onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                          className="w-full bg-[#0d1525] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-all text-sm"
                        >
                          <option value="">Select type...</option>
                          {INQUIRY_TYPES.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Product of Interest</label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full bg-[#0d1525] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-all text-sm"
                      >
                        <option value="">Select robot model...</option>
                        {["T8", "T9", "T10", "T11", "W3", "C20", "C40", "S100", "S300", "Multiple / Not Sure"].map((m) => (
                          <option key={m} value={m}>KEENON {m}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">Message</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        placeholder="Tell us about your facility, number of robots needed, specific requirements..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl text-white font-black text-lg transition-all shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50"
                    >
                      <Send className="w-5 h-5" /> Send Message
                    </button>

                    <p className="text-white/30 text-xs text-center">
                      By submitting, you agree to be contacted by Mobilise for Robotics regarding your inquiry.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
