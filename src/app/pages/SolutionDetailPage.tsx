import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Breadcrumbs } from "../components/product/Breadcrumbs";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { getIndustryBySlug } from "../../content/solutions/data";
import { PRODUCTS } from "../data/products";
import { SITE } from "../../config/site";
import type { IndustrySolution } from "../../content/solutions/types";

/**
 * Inject FAQPage + BreadcrumbList JSON-LD for rich-results in Google.
 * Removed on unmount so we don't pollute other routes.
 */
function useIndustrySchema(industry: IndustrySolution) {
  useEffect(() => {
    const url = `${SITE.url}/solutions/${industry.slug}`;

    const faqLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: industry.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    };

    const breadcrumbLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE.url}/solutions` },
        { "@type": "ListItem", position: 3, name: industry.name, item: url },
      ],
    };

    const serviceLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Robotic automation for ${industry.name}`,
      provider: {
        "@type": "Organization",
        name: SITE.legalName,
        url: SITE.url,
      },
      areaServed: { "@type": "Country", name: "India" },
      serviceType: industry.name,
      description: industry.metaDescription,
      url,
    };

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.dataset.industryFaq = industry.slug;
    faqScript.textContent = JSON.stringify(faqLd);
    document.head.appendChild(faqScript);

    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
    breadcrumbScript.dataset.industryBreadcrumb = industry.slug;
    breadcrumbScript.textContent = JSON.stringify(breadcrumbLd);
    document.head.appendChild(breadcrumbScript);

    const serviceScript = document.createElement("script");
    serviceScript.type = "application/ld+json";
    serviceScript.dataset.industryService = industry.slug;
    serviceScript.textContent = JSON.stringify(serviceLd);
    document.head.appendChild(serviceScript);

    return () => {
      faqScript.remove();
      breadcrumbScript.remove();
      serviceScript.remove();
    };
  }, [industry]);
}

export function SolutionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? getIndustryBySlug(slug) : undefined;

  // Hooks must run unconditionally — call them before the early-return.
  useDocumentTitle(
    industry ? industry.metaTitle : "Solutions",
    industry ? industry.metaDescription : undefined,
  );
  useIndustrySchema(industry ?? {
    slug: "",
    id: "",
    name: "",
    metaTitle: "",
    metaDescription: "",
    h1: "",
    heroSubline: "",
    heroImage: "",
    heroImageAlt: "",
    stats: [],
    overview: [],
    painPoints: [],
    serviceAreas: [],
    scenarios: [],
    featuredRobotIds: [],
    faqs: [],
  });

  if (!industry) return <Navigate to="/solutions" replace />;

  const featuredRobots = industry.featuredRobotIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is (typeof PRODUCTS)[number] => p !== undefined);

  return (
    <div className="min-h-screen bg-[#050a14]">
      <Breadcrumbs
        items={[
          { label: "Solutions", href: "/solutions" },
          { label: industry.name },
        ]}
      />

      {/* ───────── Hero ───────── */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm font-semibold mb-5 uppercase tracking-wider">
                Industry solution — {industry.name}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-5 leading-[1.05] tracking-tight">
                {industry.h1}
              </h1>
              <p className="text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed mb-8">
                {industry.heroSubline}
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 min-h-11 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a14]"
                >
                  Book a facility audit
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 min-h-11 rounded-xl border border-white/20 text-white font-bold text-sm sm:text-base hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  Browse robots
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/5 relative"
            >
              <ImageWithFallback
                src={industry.heroImage}
                alt={industry.heroImageAlt}
                width={1600}
                height={1200}
                loading="eager"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#050a14]/40 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </motion.div>
          </div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {industry.stats.map((s, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-4 sm:p-5"
              >
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-cyan-400 mb-1">{s.value}</div>
                <div className="text-white/70 text-xs sm:text-sm leading-snug">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────── Overview ───────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#030710] border-y border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5 text-white/85 text-base sm:text-lg leading-relaxed"
          >
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              Why FM teams in {industry.name.toLowerCase()} adopt robots
            </h2>
            {industry.overview.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────── Pain points ───────── */}
      <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="pain-points-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-300 text-xs sm:text-sm font-semibold mb-4 uppercase tracking-wider">
              The pain
            </div>
            <h2 id="pain-points-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Where your <span className="text-cyan-400">FM operations</span> bleed today
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {industry.painPoints.map(({ icon: Icon, headline, body }, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-red-300" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white mb-3 leading-tight">{headline}</h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">{body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Service areas ───────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#030710] border-y border-white/10" aria-labelledby="service-areas-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm font-semibold mb-4 uppercase tracking-wider">
              The solution
            </div>
            <h2 id="service-areas-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              How robots fit your <span className="text-cyan-400">{industry.name.toLowerCase()} stack</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {industry.serviceAreas.map(({ icon: Icon, name, description, robots, outcomeStat }, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-cyan-400/30 transition-colors h-full"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-cyan-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white pt-2">{name}</h3>
                </div>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-5">{description}</p>
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="text-white/50 text-xs uppercase tracking-wider font-bold mr-1">Robots:</span>
                  {robots.map((r) => {
                    const p = PRODUCTS.find((prod) => prod.id === r);
                    return (
                      <Link
                        key={r}
                        to={`/products/${r}`}
                        className="px-2.5 py-1 rounded-lg border text-xs font-bold text-cyan-400 border-cyan-400/30 bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                      >
                        KEENON {p?.name ?? r.toUpperCase()}
                      </Link>
                    );
                  })}
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-white/60 text-xs uppercase tracking-wider font-bold">Outcome</span>
                  <span className="text-white font-bold text-sm">{outcomeStat}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Scenarios ───────── */}
      {industry.scenarios.length > 0 && (
        <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="scenarios-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/70 text-xs sm:text-sm font-semibold mb-4 uppercase tracking-wider">
                Real scenarios
              </div>
              <h2 id="scenarios-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                What this looks like <span className="text-cyan-400">in practice</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {industry.scenarios.map(({ headline, facility, body }, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-colors"
                >
                  <div className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">{facility}</div>
                  <h3 className="text-lg sm:text-xl font-black text-white mb-3 leading-tight">{headline}</h3>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">{body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───────── Featured robots ───────── */}
      {featuredRobots.length > 0 && (
        <section className="py-16 sm:py-20 lg:py-24 bg-[#030710] border-y border-white/10" aria-labelledby="featured-robots-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/70 text-xs sm:text-sm font-semibold mb-4 uppercase tracking-wider">
                Recommended for {industry.name.toLowerCase()}
              </div>
              <h2 id="featured-robots-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Robots that fit <span className="text-cyan-400">your operations</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {featuredRobots.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <Link
                    to={`/products/${product.id}`}
                    className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 h-full"
                  >
                    <div className={`relative aspect-[4/3] bg-gradient-to-br ${product.thumbnailBg} overflow-hidden`}>
                      <ImageWithFallback
                        src={product.image}
                        alt={`KEENON ${product.name} — ${product.tagline}`}
                        width={400}
                        height={300}
                        loading="lazy"
                        className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/70 via-transparent to-transparent" aria-hidden="true" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-black text-white mb-1">KEENON {product.name}</h3>
                      <p className="text-cyan-400 text-xs sm:text-sm font-semibold mb-2 line-clamp-1">{product.tagline}</p>
                      <p className="text-white/70 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-3">{product.description}</p>
                      <span className="inline-flex items-center gap-1 text-cyan-400 text-xs font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
                        View specs <ChevronRight className="w-3 h-3" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───────── FAQs ───────── */}
      <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="faqs-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/70 text-xs sm:text-sm font-semibold mb-4 uppercase tracking-wider">
              Frequently asked
            </div>
            <h2 id="faqs-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Questions FM teams ask
            </h2>
          </motion.div>

          <dl className="space-y-4">
            {industry.faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors"
              >
                <summary className="flex items-start justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-2xl">
                  <dt className="text-base sm:text-lg font-bold text-white pr-2 leading-snug">{faq.question}</dt>
                  <ChevronRight
                    className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0 transition-transform group-open:rotate-90"
                    aria-hidden="true"
                  />
                </summary>
                <dd className="px-5 sm:px-6 pb-5 sm:pb-6 text-white/75 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </dd>
              </motion.details>
            ))}
          </dl>
        </div>
      </section>

      {/* ───────── Final CTA ───────── */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/40 via-blue-900/40 to-purple-900/40" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight">
              Ready to pilot one robot at your facility?
            </h2>
            <p className="text-white/80 text-base sm:text-lg lg:text-xl mb-8 leading-relaxed">
              Book a free 30-minute facility audit. Walk us through your {industry.name.toLowerCase()} operation and we'll come back with a written recommendation — even if you don't end up running the pilot.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 min-h-11 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-2xl text-white font-bold text-base sm:text-lg transition-all shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a14]"
              >
                Book a facility audit
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 px-8 py-4 min-h-11 rounded-2xl border border-white/30 text-white font-bold text-base sm:text-lg hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                Other industries
              </Link>
            </div>
            <p className="text-white/60 text-xs sm:text-sm mt-5 inline-flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" aria-hidden="true" />
              No commitment — 30-minute call only
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
