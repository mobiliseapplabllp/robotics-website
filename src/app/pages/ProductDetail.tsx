import { useParams, Link, useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, CheckCircle, Play, ChevronRight, Download, Phone, X, ZoomIn, ChevronLeft } from "lucide-react";
import { PRODUCTS } from "../data/products";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

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

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"overview" | "specs" | "video" | "gallery">("overview");
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
    ...(hasGallery ? [{ key: "gallery", label: `Gallery (${allImages.length})` }] : []),
    { key: "video", label: "Video & Media" },
  ] as { key: typeof activeTab; label: string }[];

  return (
    <div className="min-h-screen bg-[#050a14] pt-20">

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
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl"
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
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-2">
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
      <section className={`relative overflow-hidden bg-gradient-to-br ${product.heroColor} py-24`}>
        <div className="absolute inset-0">
          <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-${product.accentColor}-500/10 rounded-full blur-3xl`} />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/30 rounded-full blur-3xl" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/40 text-sm mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <span className={accent.text}>KEENON {product.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${accent.border} ${accent.bg} mb-6`}>
                <span className={`text-sm font-bold uppercase tracking-wider ${accent.text}`}>{product.categoryLabel}</span>
              </div>

              <h1 className="text-6xl lg:text-8xl font-black text-white mb-2">
                KEENON <span className={accent.text}>{product.name}</span>
              </h1>
              <p className="text-2xl text-white/70 font-semibold mb-6">{product.tagline}</p>
              <p className="text-white/60 text-lg leading-relaxed mb-8">{product.description}</p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${accent.gradient} rounded-xl text-white font-bold shadow-lg ${accent.shadow} hover:opacity-90 transition-opacity`}
                >
                  Request a Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://www.keenon.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-bold hover:bg-white/10 transition-colors"
                >
                  <Download className="w-4 h-4" /> Download Catalogue
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {product.industries.map((ind) => (
                  <span key={ind} className={`px-3 py-1 rounded-lg border ${accent.border} ${accent.bg} ${accent.text} text-xs font-semibold`}>
                    {ind}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Hero Image + Thumbnails */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div
                className={`relative rounded-3xl overflow-hidden border ${accent.border} shadow-2xl ${accent.shadow} cursor-zoom-in group`}
                onClick={() => openLightbox(activeImage)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ImageWithFallback
                      src={allImages[activeImage]}
                      alt={`KEENON ${product.name}`}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className={`absolute inset-0 bg-gradient-to-tr ${product.heroColor} opacity-30`} />
                {/* Zoom hint */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
                <div className="absolute bottom-0 right-0 p-6">
                  <div className={`text-8xl font-black ${accent.text} opacity-20 leading-none`}>{product.name}</div>
                </div>
                {/* Image counter badge */}
                {hasGallery && (
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-black/50 backdrop-blur-sm rounded-lg text-white/70 text-xs font-semibold">
                    {activeImage + 1} / {allImages.length}
                  </div>
                )}
              </div>

              {/* Scrollable thumbnail strip */}
              {hasGallery && (
                <div className="flex gap-2.5 mt-4 overflow-x-auto pb-1 scrollbar-hide">
                  {allImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`relative rounded-xl overflow-hidden border-2 transition-all duration-200 shrink-0 ${
                        activeImage === i
                          ? `${accent.border} shadow-lg ${accent.shadow} scale-105`
                          : "border-white/10 opacity-50 hover:opacity-80 hover:scale-102"
                      }`}
                      style={{ width: 76, height: 56 }}
                    >
                      <ImageWithFallback
                        src={img}
                        alt={`KEENON ${product.name} view ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Tabs ── */}
      <div className="sticky top-[72px] z-30 bg-[#050a14]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`shrink-0 px-6 py-4 text-sm font-bold uppercase tracking-wider transition-all border-b-2 ${
                  activeTab === tab.key
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">

        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-16">
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
                                <img src={allImages[imgIdx]} alt="" className="w-full h-full object-cover" />
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

                {/* Use Cases */}
                <div>
                  <h3 className="text-2xl font-black text-white mb-6">Use Cases in India</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {product.useCases.map((uc, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                        <div className={`w-8 h-8 rounded-lg ${accent.bg} flex items-center justify-center mb-3`}>
                          <span className={`text-lg font-black ${accent.text}`}>{i + 1}</span>
                        </div>
                        <p className="text-white font-semibold text-sm">{uc}</p>
                      </div>
                    ))}
                  </div>
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
                          <img src={img} alt="" className="w-full h-full object-cover" />
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
          </motion.div>
        )}

        {/* SPECS */}
        {activeTab === "specs" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
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

        {/* GALLERY */}
        {activeTab === "gallery" && hasGallery && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-black text-white">Photo Gallery</h2>
                <p className="text-white/40 mt-1">Official KEENON {product.name} product photography — {allImages.length} images</p>
              </div>
              <span className={`px-4 py-2 rounded-xl border ${accent.border} ${accent.bg} ${accent.text} text-sm font-bold`}>
                {allImages.length} Photos
              </span>
            </div>

            {/* Featured image + grid layout */}
            <div className="grid grid-cols-12 gap-4 mb-4">
              {/* Large featured */}
              <div className="col-span-12 lg:col-span-8">
                <button
                  onClick={() => openLightbox(0)}
                  className={`relative w-full rounded-2xl overflow-hidden border ${accent.border} group cursor-zoom-in`}
                >
                  <img src={allImages[0]} alt={`KEENON ${product.name} — main`} className="w-full aspect-[16/9] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm font-semibold flex items-center gap-2">
                      <ZoomIn className="w-4 h-4" /> View full size
                    </span>
                  </div>
                </button>
              </div>
              {/* Right 2-stack */}
              <div className="col-span-12 lg:col-span-4 grid grid-rows-2 gap-4">
                {allImages.slice(1, 3).map((img, i) => (
                  <button
                    key={i}
                    onClick={() => openLightbox(i + 1)}
                    className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all group cursor-zoom-in"
                  >
                    <img src={img} alt={`KEENON ${product.name} — view ${i + 2}`} className="w-full h-full object-cover aspect-[4/3]" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Remaining images: responsive grid */}
            {allImages.length > 3 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {allImages.slice(3).map((img, i) => {
                  const realIdx = i + 3;
                  const feature = product.features[realIdx] ?? null;
                  return (
                    <motion.button
                      key={realIdx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => openLightbox(realIdx)}
                      className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all group cursor-zoom-in"
                    >
                      <img
                        src={img}
                        alt={`KEENON ${product.name} — view ${realIdx + 1}`}
                        className="w-full aspect-square object-cover"
                      />
                      {/* Hover overlay with feature label */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                        {feature && (
                          <p className="text-white text-xs font-semibold leading-tight text-left">{feature}</p>
                        )}
                        <div className="flex items-center justify-end mt-1">
                          <ZoomIn className="w-4 h-4 text-white/70" />
                        </div>
                      </div>
                      {/* Image number badge */}
                      <div className="absolute top-2 left-2 w-6 h-6 bg-black/50 rounded-full flex items-center justify-center text-white/60 text-xs font-bold">
                        {realIdx + 1}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            )}

            <p className="text-center text-white/30 text-sm mt-8">
              Click any image to open full-screen viewer · Scroll to navigate
            </p>
          </motion.div>
        )}

        {/* VIDEO */}
        {activeTab === "video" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-3xl font-black text-white mb-8">Video & Media</h2>
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
                <h3 className="text-lg font-black text-white">Related Content</h3>
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
                  <p className="text-sm text-white/60 mb-3">Watch the full KEENON product catalogue on their official website.</p>
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
          </motion.div>
        )}
      </div>

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
    </div>
  );
}
