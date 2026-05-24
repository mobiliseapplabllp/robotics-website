import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowLeft,
  Wrench,
  Compass,
  Eye,
  Battery,
  Building2,
  Scan,
  Hand,
  Cog,
  Package,
  Wifi,
  DoorClosed,
  Activity,
  ShieldCheck,
  Sparkles,
  Truck,
  Hotel,
  Stethoscope,
  Utensils,
  ShoppingBag,
  Plane,
  Briefcase,
  Network,
  Users,
  MessageSquare,
  Brush,
  Droplet,
  Boxes,
  Gauge,
  Ruler,
  Zap,
  Cpu,
  Radar,
  MonitorSmartphone,
  MapPin,
  BadgeCheck,
  Headphones,
  Wallet,
  Layers,
  PlayCircle,
  ChevronDown,
  FileText,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PRODUCTS } from "../data/products";
import { ALL_POSTS } from "../../content/blog/loader";
import { getProductDetailBySlug } from "../../content/products/detail";
import type { ProductDetail, ProductIconName } from "../../content/products/types";
import type { Product } from "../data/products";
import { Breadcrumbs } from "../components/product/Breadcrumbs";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { SITE } from "../../config/site";

/* ────────────────────────────────────────────────────────────
 *  Static maps — kept at module scope so they're shared across
 *  every render. The icon map exists because data files store
 *  icons as string names (pure data, no React coupling).
 * ────────────────────────────────────────────────────────── */

const ICON_MAP: Record<ProductIconName, LucideIcon> = {
  Wrench, Compass, Eye, Battery, Building2, Scan, Hand, Cog, Package, Wifi,
  DoorClosed, Activity, ShieldCheck, Sparkles, Truck, Hotel, Stethoscope,
  Utensils, ShoppingBag, Plane, Briefcase, Network, Users, MessageSquare,
  Brush, Droplet, Boxes, Gauge, Ruler, Zap, Cpu, Radar, MonitorSmartphone,
  MapPin, BadgeCheck, Headphones, Wallet, Layers,
};

/**
 * Single accent per product family. Reduces visual noise across 15 pages while
 * still differentiating delivery / cleaning / service at a glance. All classes
 * are fully spelled out so Tailwind picks them up in the safelist scan.
 */
type AccentTheme = {
  text: string;
  textBright: string;
  bg10: string;
  bg20: string;
  border20: string;
  border40: string;
  ring: string;
  gradientFrom: string;
  gradientTo: string;
  glow: string;
};

const ACCENT_THEMES: Record<Product["category"], AccentTheme> = {
  delivery: {
    text: "text-cyan-400",
    textBright: "text-cyan-300",
    bg10: "bg-cyan-500/10",
    bg20: "bg-cyan-500/20",
    border20: "border-cyan-500/20",
    border40: "border-cyan-500/40",
    ring: "focus-visible:ring-cyan-400",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-blue-600",
    glow: "shadow-cyan-500/30",
  },
  cleaning: {
    text: "text-emerald-400",
    textBright: "text-emerald-300",
    bg10: "bg-emerald-500/10",
    bg20: "bg-emerald-500/20",
    border20: "border-emerald-500/20",
    border40: "border-emerald-500/40",
    ring: "focus-visible:ring-emerald-400",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-green-600",
    glow: "shadow-emerald-500/30",
  },
  service: {
    text: "text-violet-400",
    textBright: "text-violet-300",
    bg10: "bg-violet-500/10",
    bg20: "bg-violet-500/20",
    border20: "border-violet-500/20",
    border40: "border-violet-500/40",
    ring: "focus-visible:ring-violet-400",
    gradientFrom: "from-violet-500",
    gradientTo: "to-purple-600",
    glow: "shadow-violet-500/30",
  },
};

/* ────────────────────────────────────────────────────────────
 *  JSON-LD — Product, BreadcrumbList, FAQPage emitted from
 *  the SAME page for SEO rich-result density. Cleanup on unmount.
 * ────────────────────────────────────────────────────────── */

function useProductJsonLd(product: Product, detail: ProductDetail) {
  useEffect(() => {
    const url = `${SITE.url}/products/${product.id}`;
    const image = product.image.startsWith("http") ? product.image : `${SITE.url}${product.image}`;

    const productLd = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: `KEENON ${product.name}`,
      description: detail.positioning,
      brand: { "@type": "Brand", name: "KEENON Robotics" },
      category: product.categoryLabel,
      image,
      manufacturer: { "@type": "Organization", name: "KEENON Robotics", url: "https://www.keenon.com/" },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "INR",
        url,
        seller: { "@type": "Organization", name: SITE.legalName, url: SITE.url },
      },
    };

    const breadcrumbLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.url}/products` },
        { "@type": "ListItem", position: 3, name: `KEENON ${product.name}`, item: url },
      ],
    };

    const faqLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: detail.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };

    const scripts = [productLd, breadcrumbLd, faqLd].map((ld, i) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.productPageLd = `${product.id}-${i}`;
      s.textContent = JSON.stringify(ld);
      document.head.appendChild(s);
      return s;
    });

    return () => {
      scripts.forEach((s) => s.remove());
    };
  }, [product, detail]);
}

/* ────────────────────────────────────────────────────────────
 *  Section components
 * ────────────────────────────────────────────────────────── */

function Hero({ product, detail, accent }: { product: Product; detail: ProductDetail; accent: AccentTheme }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className={`absolute top-0 right-0 w-[600px] h-[600px] ${accent.bg10} rounded-full blur-3xl`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Breadcrumbs items={[{ label: "Products", href: "/products" }, { label: `KEENON ${product.name}` }]} />

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center pt-8">
          {/* Left: copy + CTAs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${accent.border20} ${accent.bg10} mb-5`}>
              <span className={`${accent.text} text-xs font-bold uppercase tracking-wider`}>
                KEENON {product.categoryLabel}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 tracking-tight">
              KEENON <span className={accent.text}>{product.name}</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
              {detail.positioning}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 min-h-11 bg-gradient-to-r ${accent.gradientFrom} ${accent.gradientTo} rounded-xl text-white font-bold shadow-lg ${accent.glow} hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a14]`}
              >
                Book a pilot at your property
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 min-h-11 rounded-xl border border-white/20 text-white font-bold hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 ${accent.ring}`}
              >
                Request spec sheet
                <FileText className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Quick facts strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {detail.quickFacts.map((fact) => {
                const Icon = ICON_MAP[fact.icon];
                return (
                  <div key={fact.label} className={`p-3 rounded-xl bg-white/5 border border-white/10`}>
                    <Icon className={`w-5 h-5 ${accent.text} mb-2`} aria-hidden="true" />
                    <div className="text-white font-black text-sm sm:text-base leading-tight">{fact.value}</div>
                    <div className="text-white/50 text-[10px] uppercase tracking-wider mt-1">{fact.label}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: hero image */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <div className={`relative rounded-3xl overflow-hidden border ${accent.border20}`}>
              <ImageWithFallback
                src={product.image}
                alt={`KEENON ${product.name} — ${product.tagline}`}
                className="w-full aspect-[4/3] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/40 via-transparent to-transparent" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AtAGlance({ detail, accent }: { detail: ProductDetail; accent: AccentTheme }) {
  return (
    <section className="py-16 sm:py-20 bg-[#030710] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Why operators choose <span className={accent.text}>this robot</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">Three concrete differentiators — each tied to a real spec, not a slogan.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {detail.differentiators.map((d, i) => {
            const Icon = ICON_MAP[d.icon];
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`bg-white/5 border border-white/10 rounded-2xl p-6 hover:${accent.border40} transition-colors`}
              >
                <div className={`w-12 h-12 rounded-xl ${accent.bg10} border ${accent.border20} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${accent.text}`} aria-hidden="true" />
                </div>
                <h3 className="text-white font-black text-lg mb-2">{d.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{d.desc}</p>
                <div className={`inline-block px-3 py-1 rounded-lg ${accent.bg10} border ${accent.border20} ${accent.text} text-xs font-bold`}>
                  {d.proof}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HowItWorks({ detail, accent }: { detail: ProductDetail; accent: AccentTheme }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            How it <span className={accent.text}>works</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">Four steps from order to return — the same workflow every shift, every day.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {/* Connecting line on desktop */}
          <div className={`hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent`} aria-hidden="true" />
          {detail.workflow.map((step, i) => {
            const Icon = ICON_MAP[step.icon];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                <div className={`w-12 h-12 mx-auto rounded-full ${accent.bg20} border ${accent.border40} flex items-center justify-center mb-4 relative z-10 bg-[#050a14]`}>
                  <Icon className={`w-6 h-6 ${accent.text}`} aria-hidden="true" />
                </div>
                <div className="text-center">
                  <div className={`${accent.text} text-xs font-black tracking-wider mb-2`}>STEP {step.step}</div>
                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Specs({ detail, accent }: { detail: ProductDetail; accent: AccentTheme }) {
  return (
    <section className="py-16 sm:py-20 bg-[#030710] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              <span className={accent.text}>Specifications</span>
            </h2>
            <p className="text-white/50 max-w-2xl">Grouped by what you'd want to compare. The full PDF spec sheet is available on request.</p>
          </div>
          <Link
            to="/contact"
            className={`inline-flex items-center gap-2 px-5 py-2.5 min-h-11 rounded-xl border border-white/20 text-white font-bold text-sm hover:bg-white/10 transition-colors self-start focus:outline-none focus-visible:ring-2 ${accent.ring}`}
          >
            Download spec sheet (PDF)
            <FileText className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {detail.specGroups.map((group, gi) => {
            const Icon = ICON_MAP[group.icon];
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                <div className={`flex items-center gap-3 p-4 border-b border-white/10 ${accent.bg10}`}>
                  <Icon className={`w-5 h-5 ${accent.text}`} aria-hidden="true" />
                  <h3 className="text-white font-bold text-base">{group.title}</h3>
                </div>
                <dl className="divide-y divide-white/5">
                  {group.rows.map((row) => (
                    <div key={row.label} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-3 px-4 py-3 text-sm">
                      <dt className="text-white/50">{row.label}</dt>
                      <dd className="text-white font-semibold">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IndustryFits({ detail, accent }: { detail: ProductDetail; accent: AccentTheme }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Where it <span className={accent.text}>fits</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">Indian use cases by industry, with a recommended pilot scope to get started.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {detail.industryFits.map((fit, i) => (
            <motion.div
              key={fit.industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:${accent.border40} transition-colors`}
            >
              <div className={`${accent.text} text-xs font-black uppercase tracking-wider mb-3`}>{fit.industry}</div>
              <p className="text-white/80 leading-relaxed mb-4 flex-1">{fit.scenario}</p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 mb-4">
                <div className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Recommended pilot</div>
                <div className="text-white/80 text-sm">{fit.recommendedPilot}</div>
              </div>
              <Link
                to={`/solutions/${fit.solutionsSlug}`}
                className={`inline-flex items-center gap-2 ${accent.text} font-bold text-sm group focus:outline-none focus-visible:ring-2 ${accent.ring} rounded`}
              >
                See the full {fit.industry} guide
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Commercials({ detail, accent }: { detail: ProductDetail; accent: AccentTheme }) {
  const c = detail.commercials;
  const items = [
    { icon: Wallet, label: "Indicative CapEx", value: c.capexBand },
    { icon: BadgeCheck, label: "AMC structure", value: c.amcStructure },
    { icon: Sparkles, label: "Pilot offer", value: c.pilotOffer },
    { icon: Zap, label: "Operating cost", value: c.operatingCost },
    { icon: Truck, label: "Lead time", value: c.leadTime },
  ].filter((i) => i.value);

  return (
    <section className="py-16 sm:py-20 bg-[#030710] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Commercials &amp; <span className={accent.text}>ownership</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Indicative bands only — exact quotes depend on property scope, fleet size, and AMC tier. Talk to sales for a property-specific number.
          </p>
        </div>

        {items.length === 0 ? (
          <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <p className="text-white/70">Commercials shared on request — they vary by configuration, fleet count, and property requirements.</p>
            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 mt-4 px-5 py-2.5 min-h-11 bg-gradient-to-r ${accent.gradientFrom} ${accent.gradientTo} rounded-xl text-white font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-white`}
            >
              Talk to sales
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <item.icon className={`w-4 h-4 ${accent.text}`} aria-hidden="true" />
                  <div className={`${accent.text} text-xs font-black uppercase tracking-wider`}>{item.label}</div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function FamilyCompare({ detail, accent }: { detail: ProductDetail; accent: AccentTheme }) {
  if (detail.familyMembers.length === 0) return null;
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Compare with the <span className={accent.text}>family</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">Common siblings to evaluate alongside this one.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {detail.familyMembers.map((m) => (
            <Link
              key={m.slug}
              to={`/products/${m.slug}`}
              className={`group bg-white/5 border border-white/10 rounded-2xl p-5 hover:${accent.border40} transition-colors focus:outline-none focus-visible:ring-2 ${accent.ring}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-white font-black text-2xl">KEENON {m.model}</div>
                <ArrowRight className={`w-5 h-5 text-white/30 group-hover:${accent.text} group-hover:translate-x-0.5 transition-all`} aria-hidden="true" />
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{m.differentiator}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Lazy-loaded YouTube embed. Renders the thumbnail until the user clicks
 * — avoids loading ~700 KB of YouTube iframe JS on every product-page view.
 */
function VideoSection({ product, accent }: { product: Product; accent: AccentTheme }) {
  const [playing, setPlaying] = useState(false);
  const thumbnail = `https://i.ytimg.com/vi/${product.videoId}/hqdefault.jpg`;

  return (
    <section className="py-16 sm:py-20 bg-[#030710] border-y border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            See it in <span className={accent.text}>action</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">Watch the KEENON {product.name} in real-world operation.</p>
        </div>
        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black">
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${product.videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={`KEENON ${product.name} video`}
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className={`absolute inset-0 group w-full h-full focus:outline-none focus-visible:ring-2 ${accent.ring}`}
              aria-label={`Play KEENON ${product.name} video`}
            >
              <img
                src={thumbnail}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-20 h-20 rounded-full ${accent.bg20} border-2 ${accent.border40} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <PlayCircle className={`w-10 h-10 ${accent.text}`} aria-hidden="true" />
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function FAQ({ detail, accent }: { detail: ProductDetail; accent: AccentTheme }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Frequently asked <span className={accent.text}>questions</span>
          </h2>
          <p className="text-white/50">Common buyer questions. Don't see yours? <Link to="/contact" className={`${accent.text} hover:underline`}>Ask us.</Link></p>
        </div>
        <div className="space-y-3">
          {detail.faqs.map((f) => (
            <details
              key={f.q}
              className="group bg-white/5 border border-white/10 rounded-2xl"
            >
              <summary className="cursor-pointer flex items-center justify-between gap-4 p-5 list-none">
                <h3 className="text-white font-bold text-base sm:text-lg pr-2">{f.q}</h3>
                <ChevronDown className={`w-5 h-5 ${accent.text} shrink-0 transition-transform group-open:rotate-180`} aria-hidden="true" />
              </summary>
              <div className="px-5 pb-5 text-white/70 leading-relaxed text-sm sm:text-base">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaAndRelated({ product, detail, accent }: { product: Product; detail: ProductDetail; accent: AccentTheme }) {
  const related = (detail.relatedPostSlugs ?? [])
    .map((slug) => ALL_POSTS.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-r ${accent.gradientFrom} ${accent.gradientTo} opacity-10`} aria-hidden="true" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Ready to pilot the <span className={accent.text}>{product.name}?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A 30-day paid pilot at your property. We bring the robot, the engineer, and the measurement framework. You bring one floor.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Link
            to="/contact"
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 min-h-11 bg-gradient-to-r ${accent.gradientFrom} ${accent.gradientTo} rounded-2xl text-white font-black text-lg shadow-2xl ${accent.glow} hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a14]`}
          >
            Book a pilot conversation
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 min-h-11 rounded-2xl border border-white/20 text-white font-bold hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Browse all robots
          </Link>
        </div>

        {related.length > 0 && (
          <div>
            <div className="text-white/40 text-xs uppercase tracking-wider font-bold text-center mb-5">Related reading</div>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className={`group block bg-white/5 border border-white/10 rounded-2xl p-5 hover:${accent.border40} transition-colors focus:outline-none focus-visible:ring-2 ${accent.ring}`}
                >
                  <div className={`${accent.text} text-[10px] uppercase tracking-wider font-bold mb-2`}>{p.category} · {p.readMinutes} min read</div>
                  <h3 className="text-white font-bold text-base sm:text-lg mb-2">{p.title}</h3>
                  <p className="text-white/60 text-sm line-clamp-2">{p.excerpt}</p>
                  <div className={`inline-flex items-center gap-1 ${accent.text} text-sm font-bold mt-3 group-hover:translate-x-0.5 transition-transform`}>
                    Read post <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
 *  Top-level page
 * ────────────────────────────────────────────────────────── */

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find((p) => p.id === slug);
  const detail = getProductDetailBySlug(slug);

  // Hooks must run unconditionally — supply safe fallbacks for the missing case.
  useDocumentTitle(
    product ? `KEENON ${product.name} — ${product.tagline}` : "Product",
    product ? product.description : undefined,
  );
  useProductJsonLd(
    product ?? ({ id: "", name: "", categoryLabel: "", description: "", image: "" } as Product),
    detail ?? ({ slug: "", positioning: "", faqs: [] } as unknown as ProductDetail),
  );

  if (!product || !detail) return <Navigate to="/products" replace />;

  const accent = ACCENT_THEMES[product.category];

  return (
    <div className="min-h-screen bg-[#050a14] text-white pt-20">
      <Hero product={product} detail={detail} accent={accent} />
      <AtAGlance detail={detail} accent={accent} />
      <HowItWorks detail={detail} accent={accent} />
      <Specs detail={detail} accent={accent} />
      <IndustryFits detail={detail} accent={accent} />
      <Commercials detail={detail} accent={accent} />
      <FamilyCompare detail={detail} accent={accent} />
      <VideoSection product={product} accent={accent} />
      <FAQ detail={detail} accent={accent} />
      <CtaAndRelated product={product} detail={detail} accent={accent} />
    </div>
  );
}
