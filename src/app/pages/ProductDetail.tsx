import { useParams, Link, useNavigate } from "react-router";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ArrowLeft, ArrowRight, CheckCircle, Play, ChevronRight, Download, Phone, X, ZoomIn, ChevronLeft, Bot } from "lucide-react";
import { PRODUCTS } from "../data/products";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState, useRef } from "react";

const ACCENT_COLOR: Record<string, { text: string; border: string; bg: string; gradient: string; shadow: string }> = {
  blue: { text: "text-blue-400", border: "border-blue-400/30", bg: "bg-blue-500/10", gradient: "from-blue-600 to-blue-800", shadow: "shadow-blue-500/20" },
  cyan: { text: "text-cyan-400", border: "border-cyan-400/30", bg: "bg-cyan-500/10", gradient: "from-cyan-600 to-cyan-800", shadow: "shadow-cyan-500/20" },
  violet: { text: "text-violet-400", border: "border-violet-400/30", bg: "bg-violet-500/10", gradient: "from-violet-600 to-violet-800", shadow: "shadow-violet-500/20" },
  amber: { text: "text-amber-400", border: "border-amber-400/30", bg: "bg-amber-500/10", gradient: "from-amber-600 to-amber-800", shadow: "shadow-amber-500/20" },
  teal: { text: "text-teal-400", border: "border-teal-400/30", bg: "bg-teal-500/10", gradient: "from-teal-600 to-teal-800", shadow: "shadow-teal-500/20" },
  green: { text: "text-green-400", border: "border-green-400/30", bg: "bg-green-500/10", gradient: "from-green-600 to-green-800", shadow: "shadow-green-500/20" },
  orange: { text: "text-orange-400", border: "border-orange-400/30", bg: "bg-orange-500/10", gradient: "from-orange-600 to-orange-800", shadow: "shadow-orange-500/20" },
  pink: { text: "text-pink-400", border: "border-pink-400/30", bg: "bg-pink-500/10", gradient: "from-pink-600 to-pink-800", shadow: "shadow-pink-500/20" },
  indigo: { text: "text-indigo-400", border: "border-indigo-400/30", bg: "bg-indigo-500/10", gradient: "from-indigo-600 to-indigo-800", shadow: "shadow-indigo-500/20" },
};

// Feature → image index mapping for rich gallery
const FEATURE_IMAGE_MAP: Record<string, number[]> = {
  c40: [0, 1, 2, 3, 4, 5, 6, 7, 8],
};

function ParallaxGalleryItem({ img, index, featureText, accent, openLightbox }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Premium transitions: scale up and fade out as the next section slides over
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.4]);

  return (
    <div ref={ref} className="relative h-screen w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#050a14]">
        {/* Cinematic Image Layer */}
        <motion.div
          style={{ scale, opacity }}
          className="absolute inset-0 w-full h-full"
        >
          <button
            onClick={() => openLightbox(index)}
            className="w-full h-full cursor-zoom-in relative block focus:outline-none"
          >
            <ImageWithFallback
              src={img}
              alt={featureText}
              className="w-full h-full object-cover"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 md:to-black/40" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <ZoomIn className="w-12 h-12 text-white opacity-0 hover:opacity-100 transition-opacity bg-black/40 p-3 rounded-full backdrop-blur-sm" />
            </div>
          </button>
        </motion.div>

        {/* Feature Text Caption */}
        {featureText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center w-full px-6 z-10 pointer-events-none"
          >
            <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-black mb-1">Feature {index + 1}</p>
            <h3 className="text-white text-2xl md:text-4xl font-black tracking-tight drop-shadow-2xl">{featureText}</h3>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"overview" | "specs">("overview");
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#050a14] flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Product not found</h2>
          <Link to="/products" className="text-cyan-400 hover:text-cyan-300">← Back to Products</Link>
        </div>
      </div>
    );
  }

  const accent = ACCENT_COLOR[product.accentColor] || ACCENT_COLOR.cyan;
  const currentIndex = PRODUCTS.findIndex((p) => p.id === id);
  const prevProduct = PRODUCTS[currentIndex - 1];
  const nextProduct = PRODUCTS[currentIndex + 1];
  const allImages = product.images ?? [product.image];
  const hasGallery = allImages.length > 1;

  function openLightbox(i: number) {
    setLightboxIndex(i);
    setLightboxOpen(true);
  }
  function closeLightbox() { setLightboxOpen(false); }
  function lightboxPrev() { setLightboxIndex((lightboxIndex - 1 + allImages.length) % allImages.length); }
  function lightboxNext() { setLightboxIndex((lightboxIndex + 1) % allImages.length); }

  const tabs = [
    { key: "overview", label: "Overview & Features" },
    { key: "specs", label: "Specifications" },
  ] as { key: typeof activeTab; label: string }[];

  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 1000], [0, 250]);

  return (
    <div className="min-h-screen bg-[#050a14]">

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm">
              {lightboxIndex + 1} / {allImages.length}
            </div>
            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              src={allImages[lightboxIndex]}
              alt={`KEENON ${product.name} — view ${lightboxIndex + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl relative z-10"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            {/* Thumbnail strip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-2 z-20">
              {allImages.map((img, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  className={`shrink-0 w-14 h-10 rounded-lg overflow-hidden border-2 transition-all ${i === lightboxIndex ? `${accent.border} scale-110` : "border-white/10 opacity-40 hover:opacity-70"}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hero ── */}
      {/* ── Modern Hero ── */}
      <section className="relative h-screen w-full overflow-hidden bg-black flex items-center">
        {/* Cinematic Background */}
        <motion.div style={{ y: heroBgY }} className="absolute inset-0 z-0">
          <ImageWithFallback
            src={allImages[activeImage]}
            alt={product.name}
            className="w-full h-full object-cover opacity-50 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050a14] via-[#050a14]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start pt-20">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest mb-12"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3" />
            <span className={accent.text}>{product.name}</span>
          </motion.div>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className={`inline-block px-4 py-1.5 rounded-full border ${accent.border} ${accent.bg} mb-6`}>
                <span className={`text-xs font-black uppercase tracking-widest ${accent.text}`}>{product.categoryLabel}</span>
              </div>

              <h1 className="text-7xl md:text-9xl font-black text-white mb-4 tracking-tighter leading-none select-none">
                KEENON <br />
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${accent.gradient}`}>{product.name}</span>
              </h1>

              <p className="text-2xl md:text-3xl text-white/80 font-bold mb-8 italic tracking-tight">{product.tagline}</p>

              <div className="flex flex-wrap gap-5 mt-10">
                <Link
                  to="/contact"
                  className={`px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-white/90 transition-all rounded-sm shadow-2xl flex items-center gap-2`}
                >
                  Book Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => openLightbox(activeImage)}
                  className="px-8 py-4 border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all rounded-sm flex items-center gap-2 backdrop-blur-sm"
                >
                  View Gallery <ZoomIn className="w-4 h-4" />
                </button>
              </div>

              {/* Industries tags */}
              <div className="mt-16 flex flex-wrap gap-3">
                {product.industries.map((ind) => (
                  <span key={ind} className="text-white/40 text-[10px] uppercase font-black tracking-widest border border-white/10 px-3 py-1 rounded-sm">
                    {ind}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 opacity-30"
        >
          <span className="text-[10px] text-white font-black uppercase tracking-[0.2em]">Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>

        {/* Subtle Side Thumbnails */}
        {hasGallery && (
          <div className="absolute right-10 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-3">
            {allImages.slice(0, 5).map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-16 h-12 rounded-sm overflow-hidden border-2 transition-all duration-300 ${activeImage === i ? `border-white scale-110 shadow-2xl` : 'border-white/10 opacity-30 hover:opacity-60'}`}
              >
                <ImageWithFallback src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* FULL WIDTH PARALLAX SECTIONS */}
      {hasGallery && (
        <div className="w-full">
          <div className="flex flex-col w-full">
            {allImages.map((img, i) => {
              const featureText = product.features[i] ?? "";
              return (
                <ParallaxGalleryItem
                  key={i}
                  img={img}
                  index={i}
                  featureText={featureText}
                  accent={accent}
                  openLightbox={openLightbox}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* ── Tabs ── */}
      <div className="sticky top-[72px] z-30 bg-[#050a14]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`shrink-0 px-6 py-4 text-sm font-bold uppercase tracking-wider transition-all border-b-2 ${activeTab === tab.key
                  ? `${accent.text} border-current`
                  : "text-white/40 border-transparent hover:text-white/70"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tab Content ── */}
      <div className="py-16">

        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Left: description + features */}
                <div className="lg:col-span-2 space-y-10">
                  <div>
                    <h2 className="text-3xl font-black text-white mb-4">About KEENON {product.name}</h2>
                    <p className="text-white/60 text-lg leading-relaxed">{product.longDescription}</p>
                  </div>

                  {/* Features paired with gallery images when available */}
                  <div>
                    <h3 className="text-2xl font-black text-white mb-6">Key Features</h3>
                    {hasGallery ? (
                      <div className="space-y-4">
                        {product.features.map((feature, i) => {
                          const imgIdx = i < allImages.length ? i : undefined;
                          return (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.04 }}
                              className={`flex items-center gap-4 p-4 rounded-2xl border ${accent.border} ${accent.bg} hover:bg-white/5 transition-colors group`}
                            >
                              {/* Thumbnail preview */}
                              {imgIdx !== undefined && (
                                <button
                                  onClick={() => { setActiveImage(imgIdx); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                                  className={`shrink-0 w-16 h-12 rounded-lg overflow-hidden border ${accent.border} opacity-70 group-hover:opacity-100 transition-opacity`}
                                >
                                  <img src={allImages[imgIdx]} alt="" className="w-full h-full object-contain p-1" />
                                </button>
                              )}
                              <CheckCircle className={`w-5 h-5 ${accent.text} shrink-0`} />
                              <span className="text-white/80 text-sm flex-1">{feature}</span>
                              {imgIdx !== undefined && (
                                <span className={`text-xs ${accent.text} opacity-60 font-semibold shrink-0`}>
                                  View ↑
                                </span>
                              )}
                            </motion.div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="grid sm:grid-cols-2 gap-3">
                        {product.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className={`flex items-start gap-3 p-4 rounded-xl border ${accent.border} ${accent.bg}`}
                          >
                            <CheckCircle className={`w-5 h-5 ${accent.text} mt-0.5 shrink-0`} />
                            <span className="text-white/80 text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-lg font-black text-white mb-4">Quick Specs</h3>
                    <div className="space-y-3">
                      {product.specs.slice(0, 6).map((spec) => (
                        <div key={spec.label} className="flex items-start justify-between gap-2 py-2 border-b border-white/5">
                          <span className="text-white/40 text-sm">{spec.label}</span>
                          <span className="text-white text-sm font-semibold text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                    <button onClick={() => setActiveTab("specs")} className={`mt-4 flex items-center gap-1 text-sm font-semibold ${accent.text}`}>
                      View all specs <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className={`border ${accent.border} ${accent.bg} rounded-2xl p-6`}>
                    <h3 className="text-white font-black mb-3">Get a Demo in India</h3>
                    <p className="text-white/60 text-sm mb-4">See KEENON {product.name} in action at your facility. Free demo available across India.</p>
                    <Link
                      to="/contact"
                      className={`flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r ${accent.gradient} rounded-xl text-white font-bold text-sm`}
                    >
                      <Phone className="w-4 h-4" /> Book Demo
                    </Link>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-white font-black mb-3">Industries</h3>
                    <div className="space-y-2">
                      {product.industries.map((ind) => (
                        <div key={ind} className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${accent.bg} border ${accent.border}`} />
                          <span className="text-white/60 text-sm">{ind}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick gallery preview in sidebar */}
                  {hasGallery && (
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <h3 className="text-white font-black mb-3">Photo Gallery</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {allImages.slice(0, 6).map((img, i) => (
                          <button
                            key={i}
                            onClick={() => openLightbox(i)}
                            className="relative aspect-square rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all group"
                          >
                            <img src={img} alt="" className="w-full h-full object-contain bg-white/5 p-2" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                              <ZoomIn className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </button>
                        ))}
                      </div>
                      {allImages.length > 6 && (
                        <button
                          onClick={() => setActiveTab("gallery")}
                          className={`mt-3 text-sm font-semibold ${accent.text} flex items-center gap-1`}
                        >
                          +{allImages.length - 6} more photos <ArrowRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Use Cases Section - Full Width */}
              <div className="mt-20">
                <h3 className="text-2xl font-black text-white mb-8 px-2">Use Cases in India</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {product.useCases.map((uc, i) => {
                    const ucData: Record<string, { icon: any; desc: string; img: string }> = {
                      "International airports": {
                        icon: Bot,
                        desc: "Maintaining pristine terminal floors with high-frequency coverage and smart obstacle avoidance.",
                        img: "https://images.unsplash.com/photo-1771945029451-da143c6ea0e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                      },
                      "Large shopping malls": {
                        icon: ZoomIn,
                        desc: "Quiet, efficient cleaning during peak hours in multi-level luxury shopping destinations.",
                        img: "https://images.unsplash.com/photo-1764795849833-6e9d6e399a77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                      },
                      "Convention & exhibition centers": {
                        icon: CheckCircle,
                        desc: "Industrial-scale cleaning for massive halls and high-traffic event spaces with precision.",
                        img: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                      },
                      "Manufacturing plant floors": {
                        icon: Download,
                        desc: "Heavy-duty cleaning for industrial floors, handling dust, debris, and tight corners autonomously.",
                        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                      },
                      "Metro station concourses": {
                        icon: Phone,
                        desc: "Fast, reliable cleaning for high-passenger-flow transit hubs, ensuring safety and hygiene.",
                        img: "https://images.unsplash.com/photo-1763788427927-87bc7c1fbcf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                      }
                    };

                    const data = ucData[uc] || {
                      icon: Bot,
                      desc: "Advanced autonomous cleaning solution tailored for dynamic Indian environments.",
                      img: "https://images.unsplash.com/photo-1664526936810-ec0856d31b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                    };
                    const Icon = data.icon;

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative h-72 overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm"
                      >
                        <img src={data.img} alt={uc} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 scale-105 group-hover:scale-100 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        <div className="relative h-full p-6 flex flex-col justify-end">
                          <div className={`w-10 h-10 rounded-xl ${accent.bg} border ${accent.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                            <Icon className={`w-5 h-5 ${accent.text}`} />
                          </div>
                          <h4 className="text-white font-black text-lg mb-2 leading-tight">{uc}</h4>
                          <p className="text-white/50 text-[10px] leading-relaxed opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-20 transition-all duration-500 overflow-hidden">{data.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* SPECS */}
        {activeTab === "specs" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-black text-white mb-8">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {product.specs.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-colors"
                >
                  <span className="text-white/50">{spec.label}</span>
                  <span className={`font-bold ${accent.text}`}>{spec.value}</span>
                </motion.div>
              ))}
            </div>

            <div className={`border ${accent.border} ${accent.bg} rounded-2xl p-8`}>
              <h3 className="text-xl font-black text-white mb-4">Product Resources</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { name: `KEENON ${product.name} Datasheet`, type: "PDF" },
                  { name: `KEENON ${product.name} User Manual`, type: "PDF" },
                  { name: `KEENON ${product.name} Catalogue`, type: "PDF" },
                ].map((doc) => (
                  <a
                    key={doc.name}
                    href="https://www.keenon.com/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white/10 border border-white/20 rounded-xl hover:bg-white/15 transition-colors group"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${accent.gradient} flex items-center justify-center shrink-0`}>
                      <Download className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">{doc.name}</div>
                      <div className="text-white/40 text-xs">{doc.type} Document</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}




      </div>

      {/* ── Video & Media Section ── */}
      <section className="bg-black/20 py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Video & Media</h2>
            <p className="text-white/40 text-lg">See the official KEENON {product.name} in action with our selection of videos.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-4">
                <div className="aspect-video bg-[#0d1525]">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${product.videoId}?rel=0&modestbranding=1`}
                    title={`KEENON ${product.name} Demo Video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
              <p className="text-white/40 text-sm">
                Official KEENON {product.name} product demonstration video. For more videos, visit{" "}
                <a href="https://www.keenon.com/en" target="_blank" rel="noopener noreferrer" className={`${accent.text} hover:underline`}>
                  keenon.com
                </a>
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-black text-white italic">Related Content</h3>
              {[
                { title: `KEENON ${product.name} — Full Product Tour`, duration: "3:42" },
                { title: `KEENON ${product.name} in Hotel Setting`, duration: "2:15" },
                { title: `How to Setup KEENON ${product.name}`, duration: "8:30" },
              ].map((video, i) => (
                <a
                  key={i}
                  href={`https://www.youtube.com/results?search_query=KEENON+${product.name}+robot`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group"
                >
                  <div className="w-12 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Play className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate">{video.title}</p>
                    <p className="text-white/40 text-xs">{video.duration}</p>
                  </div>
                </a>
              ))}

              <div className={`p-4 border ${accent.border} ${accent.bg} rounded-xl`}>
                <p className="text-sm text-white/60 mb-3 font-semibold">Watch the full KEENON product catalogue on their official website.</p>
                <a
                  href="https://www.keenon.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-sm font-bold ${accent.text}`}
                >
                  Visit keenon.com <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Prev / Next navigation ── */}
      <div className="border-t border-white/10 bg-[#030710]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex items-center justify-between gap-4">
          {prevProduct ? (
            <Link to={`/products/${prevProduct.id}`} className="flex items-center gap-3 group">
              <ArrowLeft className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
              <div>
                <div className="text-white/30 text-xs">Previous</div>
                <div className="text-white font-bold group-hover:text-cyan-400 transition-colors">KEENON {prevProduct.name}</div>
              </div>
            </Link>
          ) : <div />}

          <Link
            to="/products"
            className="px-5 py-2 rounded-xl border border-white/20 text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            All Products
          </Link>

          {nextProduct ? (
            <Link to={`/products/${nextProduct.id}`} className="flex items-center gap-3 group text-right">
              <div>
                <div className="text-white/30 text-xs">Next</div>
                <div className="text-white font-bold group-hover:text-cyan-400 transition-colors">KEENON {nextProduct.name}</div>
              </div>
              <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
            </Link>
          ) : <div />}
        </div>
      </div>
    </div >
  );
}
