import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Bot, AlertCircle } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const SALES_EMAIL = "ashish.sharma@mobilise.co.in";
const SALES_PHONE = "+91-9599194330";

const OFFICES = [
  {
    city: "Faridabad (HQ)",
    address: "Plot No. 62/B, HSIIDC, Sector 31, Faridabad, Haryana - 121006",
    phone: SALES_PHONE,
    email: SALES_EMAIL,
  },
];

const INQUIRY_TYPES = [
  "Product Demo Request",
  "Pricing Inquiry",
  "Partnership / Dealership",
  "Technical Support",
  "General Inquiry",
];

const PRODUCTS_FOR_SELECT = [
  "T3", "T5", "T8", "T9", "T9 Pro", "T10", "T11", "W3",
  "C20", "C30", "C40", "C55",
  "G1", "S100", "S300",
  "Multiple / Not Sure",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  city: string;
  inquiry: string;
  product: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const INITIAL: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  city: "",
  inquiry: "",
  product: "",
  message: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Please enter your full name.";
  if (!data.email.trim()) {
    errors.email = "Please enter your work email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!/^[+0-9\s()-]{7,}$/.test(data.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!data.company.trim()) errors.company = "Please enter your company name.";
  return errors;
}

function buildMailtoHref(data: FormData): string {
  const subject = `[Website Inquiry] ${data.inquiry || "General"}${data.product ? ` — KEENON ${data.product}` : ""}`;
  const bodyLines = [
    `Name: ${data.name}`,
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    data.city ? `City: ${data.city}` : null,
    data.inquiry ? `Inquiry type: ${data.inquiry}` : null,
    data.product ? `Product of interest: KEENON ${data.product}` : null,
    "",
    "Message:",
    data.message || "(no additional details)",
  ].filter((line): line is string => line !== null);
  const body = bodyLines.join("\n");
  return `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function Contact() {
  useDocumentTitle(
    "Contact & Demo Requests",
    "Request a free KEENON robot demo or contact Mobilise Robotics — India's authorized KEENON partner. Response within 2 business hours."
  );

  const [formData, setFormData] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(formData);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      // Move focus to first invalid field
      const firstKey = Object.keys(nextErrors)[0];
      const firstEl = document.getElementById(firstKey);
      firstEl?.focus();
      return;
    }
    // Open user's email client with pre-filled message
    window.location.href = buildMailtoHref(formData);
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData(INITIAL);
    setErrors({});
    setSubmitted(false);
  };

  const fieldClass = (hasError: boolean) =>
    `w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus:bg-white/10 transition-all text-sm ${
      hasError ? "border-red-500/60" : "border-white/10 focus:border-cyan-500/50"
    }`;

  const labelClass = "block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2";
  const errorClass = "mt-1.5 flex items-center gap-1.5 text-red-400 text-xs";

  return (
    <div className="min-h-screen bg-[#050a14] pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
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
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Ready to automate your business? Our India team will help you find the right KEENON robot for your facility.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <aside className="space-y-8" aria-label="Contact information">
            {/* Quick contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 shadow-2xl shadow-cyan-500/20"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h2 className="text-white font-black text-xl mb-2">Book a Free Demo</h2>
              <p className="text-white/90 text-sm mb-4">See KEENON robots at your facility — zero commitment, zero cost.</p>
              <a href={`tel:${SALES_PHONE.replace(/[^+0-9]/g, "")}`} className="inline-flex items-center gap-2 text-white font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">
                <Phone className="w-4 h-4" aria-hidden="true" /> {SALES_PHONE}
              </a>
            </motion.div>

            {/* Info tiles */}
            <ul className="space-y-4">
              {[
                { icon: Clock, label: "Response Time", value: "Within 2 business hours" },
                { icon: MapPin, label: "Offices", value: "Faridabad, Haryana" },
                { icon: Mail, label: "Email", value: SALES_EMAIL },
              ].map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-white/60 text-xs uppercase tracking-wider">{label}</div>
                    <div className="text-white font-semibold text-sm">{value}</div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Offices */}
            <div>
              <h2 className="text-white font-black text-lg mb-4">Our Offices</h2>
              <ul className="space-y-4">
                {OFFICES.map((office) => (
                  <li key={office.city} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                    <div className="text-cyan-400 font-bold text-sm mb-2">{office.city}</div>
                    <address className="not-italic text-white/70 text-xs leading-relaxed mb-2">{office.address}</address>
                    <div className="flex flex-col gap-1">
                      <a href={`tel:${office.phone.replace(/[^+0-9]/g, "")}`} className="text-white/70 text-xs hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">{office.phone}</a>
                      <a href={`mailto:${office.email}`} className="text-white/70 text-xs hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">{office.email}</a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              {submitted ? (
                <div className="text-center py-12" role="alert" aria-live="polite">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-400" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-black text-white mb-3">Almost there — finish in your email app</h2>
                  <p className="text-white/70 max-w-md mx-auto mb-4">
                    We've opened your email client with your inquiry pre-filled. Click <strong className="text-white">Send</strong> in your email app to deliver the message to our team.
                  </p>
                  <p className="text-white/60 text-sm max-w-md mx-auto">
                    If nothing opened, email us directly at{" "}
                    <a href={`mailto:${SALES_EMAIL}`} className="text-cyan-400 font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">{SALES_EMAIL}</a>
                    {" "}or call {SALES_PHONE}.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-8 px-6 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-black text-white mb-2">Send us a message</h2>
                  <p className="text-white/70 text-sm mb-8">
                    Fields marked <span aria-hidden="true" className="text-red-400">*</span> are required. Submitting opens your email app with the message pre-filled.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className={labelClass}>
                          Full Name <span aria-hidden="true" className="text-red-400">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={formData.name}
                          onChange={(e) => update("name", e.target.value)}
                          placeholder="Rajesh Kumar"
                          aria-required="true"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          className={fieldClass(!!errors.name)}
                        />
                        {errors.name && (
                          <p id="name-error" className={errorClass}>
                            <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className={labelClass}>
                          Work Email <span aria-hidden="true" className="text-red-400">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          inputMode="email"
                          value={formData.email}
                          onChange={(e) => update("email", e.target.value)}
                          placeholder="rajesh@company.com"
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          className={fieldClass(!!errors.email)}
                        />
                        {errors.email && (
                          <p id="email-error" className={errorClass}>
                            <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className={labelClass}>
                          Phone Number <span aria-hidden="true" className="text-red-400">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          inputMode="tel"
                          value={formData.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          placeholder="+91 98765 43210"
                          aria-required="true"
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? "phone-error" : undefined}
                          className={fieldClass(!!errors.phone)}
                        />
                        {errors.phone && (
                          <p id="phone-error" className={errorClass}>
                            <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="company" className={labelClass}>
                          Company Name <span aria-hidden="true" className="text-red-400">*</span>
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          value={formData.company}
                          onChange={(e) => update("company", e.target.value)}
                          placeholder="Your Company Pvt Ltd"
                          aria-required="true"
                          aria-invalid={!!errors.company}
                          aria-describedby={errors.company ? "company-error" : undefined}
                          className={fieldClass(!!errors.company)}
                        />
                        {errors.company && (
                          <p id="company-error" className={errorClass}>
                            <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                            {errors.company}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="city" className={labelClass}>City</label>
                        <input
                          id="city"
                          name="city"
                          type="text"
                          autoComplete="address-level2"
                          value={formData.city}
                          onChange={(e) => update("city", e.target.value)}
                          placeholder="Mumbai, Delhi, Bengaluru…"
                          className={fieldClass(false)}
                        />
                      </div>

                      <div>
                        <label htmlFor="inquiry" className={labelClass}>Inquiry Type</label>
                        <select
                          id="inquiry"
                          name="inquiry"
                          value={formData.inquiry}
                          onChange={(e) => update("inquiry", e.target.value)}
                          className="w-full bg-[#0d1525] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus:border-cyan-500/50 transition-all text-sm"
                        >
                          <option value="">Select type…</option>
                          {INQUIRY_TYPES.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="product" className={labelClass}>Product of Interest</label>
                      <select
                        id="product"
                        name="product"
                        value={formData.product}
                        onChange={(e) => update("product", e.target.value)}
                        className="w-full bg-[#0d1525] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus:border-cyan-500/50 transition-all text-sm"
                      >
                        <option value="">Select robot model…</option>
                        {PRODUCTS_FOR_SELECT.map((m) => (
                          <option key={m} value={m}>KEENON {m}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className={labelClass}>Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => update("message", e.target.value)}
                        rows={4}
                        placeholder="Tell us about your facility, number of robots needed, specific requirements…"
                        className={`${fieldClass(false)} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl text-white font-black text-lg transition-all shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a14]"
                    >
                      <Send className="w-5 h-5" aria-hidden="true" /> Send via Email
                    </button>

                    <p className="text-white/60 text-xs text-center">
                      By submitting, you agree to be contacted by Mobilise for Robotics regarding your inquiry.
                      We'll never share your details with third parties.
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
