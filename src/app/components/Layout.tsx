import { Suspense, useState, useEffect, useRef } from "react";
import { Link, useLocation, Outlet } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Bot, Phone, Mail, MapPin, ArrowRight, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";
import { PRODUCTS } from "../data/products";
import { PageLoader } from "./PageLoader";

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const productsBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
    setProductsOpen(false);
    // Scroll restoration: top of page on route change
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  // Escape key closes menus (a11y)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (productsOpen) {
        setProductsOpen(false);
        productsBtnRef.current?.focus();
      }
      if (mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [productsOpen, mobileOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const deliveryRobots = PRODUCTS.filter((p) => p.category === "delivery");
  const cleaningRobots = PRODUCTS.filter((p) => p.category === "cleaning");
  const serviceRobots = PRODUCTS.filter((p) => p.category === "service");

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <div className="min-h-screen bg-[#050a14] text-white flex flex-col">
      {/* Skip to main content (a11y) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-lg focus:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a14] text-sm font-bold"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#050a14]/95 backdrop-blur-md border-b border-white/10 shadow-2xl" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a14] rounded-lg" aria-label="Mobilise Robotics home">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all">
              <Bot className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <div>
              <div className="text-white font-black tracking-tight text-lg leading-none">Mobilise</div>
              <div className="text-cyan-400 text-[10px] font-semibold tracking-[0.2em] uppercase leading-none">For Robotics</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            <Link
              to="/"
              aria-current={isActive("/") ? "page" : undefined}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${isActive("/") ? "text-cyan-400" : "text-white/70 hover:text-white"
                }`}
            >
              Home
            </Link>

            {/* Products dropdown */}
            <div className="relative" onMouseLeave={() => setProductsOpen(false)}>
              <button
                ref={productsBtnRef}
                type="button"
                aria-haspopup="true"
                aria-expanded={productsOpen}
                aria-controls="products-menu"
                onMouseEnter={() => setProductsOpen(true)}
                onClick={() => setProductsOpen((o) => !o)}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${location.pathname.startsWith("/products") ? "text-cyan-400" : "text-white/70 hover:text-white"
                  }`}
              >
                Products <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    id="products-menu"
                    role="menu"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] bg-[#0d1525]/98 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Delivery Robots</div>
                          {deliveryRobots.map((p) => (
                            <Link
                              key={p.id}
                              to={`/products/${p.id}`}
                              role="menuitem"
                              className="flex items-center gap-2 py-2 text-white/70 hover:text-cyan-400 transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors" aria-hidden="true" />
                              <span className="text-sm font-semibold">KEENON {p.name}</span>
                              <span className="text-xs text-white/50 truncate">{p.tagline.split(" ").slice(0, 3).join(" ")}</span>
                            </Link>
                          ))}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">Cleaning Robots</div>
                          {cleaningRobots.map((p) => (
                            <Link
                              key={p.id}
                              to={`/products/${p.id}`}
                              role="menuitem"
                              className="flex items-center gap-2 py-2 text-white/70 hover:text-emerald-400 transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 transition-colors" aria-hidden="true" />
                              <span className="text-sm font-semibold">KEENON {p.name}</span>
                              <span className="text-xs text-white/50 truncate">{p.tagline.split(" ").slice(0, 3).join(" ")}</span>
                            </Link>
                          ))}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">Service Robots</div>
                          {serviceRobots.map((p) => (
                            <Link
                              key={p.id}
                              to={`/products/${p.id}`}
                              role="menuitem"
                              className="flex items-center gap-2 py-2 text-white/70 hover:text-amber-400 transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50 group-hover:bg-amber-400 transition-colors" aria-hidden="true" />
                              <span className="text-sm font-semibold">KEENON {p.name}</span>
                              <span className="text-xs text-white/50 truncate">{p.tagline.split(" ").slice(0, 3).join(" ")}</span>
                            </Link>
                          ))}
                          <Link
                            to="/products"
                            role="menuitem"
                            className="mt-3 flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                          >
                            View All <ArrowRight className="w-3 h-3" aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${isActive(link.href) ? "text-cyan-400" : "text-white/70 hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl text-sm font-bold text-white transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a14]"
            >
              Get a Demo
            </Link>
          </div>

          {/* Mobile menu btn */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="lg:hidden min-w-11 min-h-11 inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0d1525]/98 backdrop-blur-xl border-t border-white/10 overflow-hidden"
            >
              <nav className="px-4 py-4 space-y-2" aria-label="Mobile">
                <Link to="/" aria-current={isActive("/") ? "page" : undefined} className="block px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 hover:text-white font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">Home</Link>
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    aria-expanded={mobileProductsOpen}
                    aria-controls="mobile-products-menu"
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    Products <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  {mobileProductsOpen && (
                    <div id="mobile-products-menu" className="px-4 pt-2 pb-1 space-y-1">
                      {PRODUCTS.map((p) => (
                        <Link
                          key={p.id}
                          to={`/products/${p.id}`}
                          className="block px-4 py-2 rounded-lg text-white/60 hover:text-cyan-400 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                        >
                          KEENON {p.name} — {p.tagline}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link to="/solutions" aria-current={isActive("/solutions") ? "page" : undefined} className="block px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 hover:text-white font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">Solutions</Link>
                <Link to="/blog" aria-current={isActive("/blog") ? "page" : undefined} className="block px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 hover:text-white font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">Blog</Link>
                <Link to="/about" aria-current={isActive("/about") ? "page" : undefined} className="block px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 hover:text-white font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">About Us</Link>
                <Link to="/contact" aria-current={isActive("/contact") ? "page" : undefined} className="block px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 hover:text-white font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">Contact</Link>
                <Link to="/contact" className="block px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white">Get a Demo</Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page content */}
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="bg-[#030710] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-white font-black text-lg leading-none">Mobilise App Lab</div>
                  <div className="text-cyan-400 text-[10px] font-semibold tracking-[0.2em] uppercase">Limited</div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                India's premier partner for KEENON Robotics — bringing world-class autonomous service robots to hospitality, healthcare, retail, and beyond.
              </p>
              <ul className="flex gap-3" aria-label="Social media">
                {[
                  { Icon: Linkedin, label: "LinkedIn", href: "#" },
                  { Icon: Twitter, label: "Twitter / X", href: "#" },
                  { Icon: Youtube, label: "YouTube", href: "#" },
                  { Icon: Instagram, label: "Instagram", href: "#" },
                ].map(({ Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={`Mobilise on ${label}`}
                      className="w-11 h-11 rounded-lg bg-white/10 hover:bg-cyan-500/30 flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    >
                      <Icon className="w-4 h-4 text-white/80" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Delivery Robots</div>
              <ul className="space-y-2">
                {deliveryRobots.map((p) => (
                  <li key={p.id}>
                    <Link to={`/products/${p.id}`} className="text-white/60 hover:text-cyan-400 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">KEENON {p.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Cleaning & Service</div>
              <ul className="space-y-2">
                {[...cleaningRobots, ...serviceRobots].map((p) => (
                  <li key={p.id}>
                    <Link to={`/products/${p.id}`} className="text-white/60 hover:text-cyan-400 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">KEENON {p.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact Us</div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>Plot No. 62/B, HSIIDC, Sector 31, Faridabad, Haryana - 121006</span>
                </li>
                <li className="flex items-center gap-2 text-white/60 text-sm">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" aria-hidden="true" />
                  <a href="tel:+919599194330" className="hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">+91-9599194330</a>
                </li>
                <li className="flex items-center gap-2 text-white/60 text-sm">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" aria-hidden="true" />
                  <a href="mailto:sales@mobilise.co.in" className="hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">sales@mobilise.co.in</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">© 2026 Mobilise App Lab Limited. Authorized KEENON Robotics Partner in India.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-white/50 hover:text-white text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">Privacy Policy</Link>
              <Link to="/terms" className="text-white/50 hover:text-white text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
