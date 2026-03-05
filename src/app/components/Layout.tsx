import { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Bot, Phone, Mail, MapPin, ArrowRight, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";
import { PRODUCTS } from "../data/products";

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const deliveryRobots = PRODUCTS.filter((p) => p.category === "delivery");
  const cleaningRobots = PRODUCTS.filter((p) => p.category === "cleaning");
  const serviceRobots = PRODUCTS.filter((p) => p.category === "service");

  return (
    <div className="min-h-screen bg-[#050a14] text-white flex flex-col">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#050a14]/95 backdrop-blur-md border-b border-white/10 shadow-2xl" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-white font-black tracking-tight text-lg leading-none">Mobilise</div>
              <div className="text-cyan-400 text-[10px] font-semibold tracking-[0.2em] uppercase leading-none">For Robotics</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === "/" ? "text-cyan-400" : "text-white/70 hover:text-white"
                }`}
            >
              Home
            </Link>

            {/* Products dropdown */}
            <div className="relative" onMouseLeave={() => setProductsOpen(false)}>
              <button
                onMouseEnter={() => setProductsOpen(true)}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname.startsWith("/products") ? "text-cyan-400" : "text-white/70 hover:text-white"
                  }`}
              >
                Products <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
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
                              className="flex items-center gap-2 py-2 text-white/70 hover:text-cyan-400 transition-colors group"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors" />
                              <span className="text-sm font-semibold">KEENON {p.name}</span>
                              <span className="text-xs text-white/40 truncate">{p.tagline.split(" ").slice(0, 3).join(" ")}</span>
                            </Link>
                          ))}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-green-400 uppercase tracking-widest mb-3">Cleaning Robots</div>
                          {cleaningRobots.map((p) => (
                            <Link
                              key={p.id}
                              to={`/products/${p.id}`}
                              className="flex items-center gap-2 py-2 text-white/70 hover:text-green-400 transition-colors group"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 group-hover:bg-green-400 transition-colors" />
                              <span className="text-sm font-semibold">KEENON {p.name}</span>
                              <span className="text-xs text-white/40 truncate">{p.tagline.split(" ").slice(0, 3).join(" ")}</span>
                            </Link>
                          ))}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-pink-400 uppercase tracking-widest mb-3">Service Robots</div>
                          {serviceRobots.map((p) => (
                            <Link
                              key={p.id}
                              to={`/products/${p.id}`}
                              className="flex items-center gap-2 py-2 text-white/70 hover:text-pink-400 transition-colors group"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-pink-500/50 group-hover:bg-pink-400 transition-colors" />
                              <span className="text-sm font-semibold">KEENON {p.name}</span>
                              <span className="text-xs text-white/40 truncate">{p.tagline.split(" ").slice(0, 3).join(" ")}</span>
                            </Link>
                          ))}
                          <Link
                            to="/products"
                            className="mt-3 flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                          >
                            View All <ArrowRight className="w-3 h-3" />
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
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.href ? "text-cyan-400" : "text-white/70 hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl text-sm font-bold text-white transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
            >
              Get a Demo
            </Link>
          </div>

          {/* Mobile menu btn */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0d1525]/98 backdrop-blur-xl border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-2">
                <Link to="/" className="block px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 hover:text-white font-medium transition-colors">Home</Link>
                <div>
                  <button
                    onClick={() => setProductsOpen(!productsOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 font-medium"
                  >
                    Products <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {productsOpen && (
                    <div className="px-4 pt-2 pb-1 space-y-1">
                      {PRODUCTS.map((p) => (
                        <Link
                          key={p.id}
                          to={`/products/${p.id}`}
                          className="block px-4 py-2 rounded-lg text-white/60 hover:text-cyan-400 text-sm font-medium transition-colors"
                        >
                          KEENON {p.name} — {p.tagline}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link to="/solutions" className="block px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 hover:text-white font-medium transition-colors">Solutions</Link>
                <Link to="/about" className="block px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 hover:text-white font-medium transition-colors">About Us</Link>
                <Link to="/contact" className="block px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 hover:text-white font-medium transition-colors">Contact</Link>
                <Link to="/contact" className="block px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-center">Get a Demo</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#030710] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-black text-lg leading-none">Mobilise App Lab</div>
                  <div className="text-cyan-400 text-[10px] font-semibold tracking-[0.2em] uppercase">Limited</div>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                India's premier partner for KEENON Robotics — bringing world-class autonomous service robots to hospitality, healthcare, retail, and beyond.
              </p>
              <div className="flex gap-3">
                {[Linkedin, Twitter, Youtube, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-cyan-500/30 flex items-center justify-center transition-colors">
                    <Icon className="w-4 h-4 text-white/70" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Delivery Robots</div>
              <ul className="space-y-2">
                {deliveryRobots.map((p) => (
                  <li key={p.id}>
                    <Link to={`/products/${p.id}`} className="text-white/50 hover:text-cyan-400 text-sm transition-colors">KEENON {p.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Other Robots</div>
              <ul className="space-y-2">
                {[...cleaningRobots, ...serviceRobots].map((p) => (
                  <li key={p.id}>
                    <Link to={`/products/${p.id}`} className="text-white/50 hover:text-cyan-400 text-sm transition-colors">KEENON {p.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact Us</div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white/50 text-sm">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>Plot No. 62/B, HSIIDC, Sector 31, Faridabad, Haryana - 121006</span>
                </li>
                <li className="flex items-center gap-2 text-white/50 text-sm">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a href="tel:+919599194330" className="hover:text-cyan-400 transition-colors">+91-9599194330</a>
                </li>
                <li className="flex items-center gap-2 text-white/50 text-sm">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a href="mailto:sales@mobilise.co.in" className="hover:text-cyan-400 transition-colors">sales@mobilise.co.in</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">© 2026 Mobilise App Lab Limited. Authorized KEENON Robotics Partner in India.</p>
            <div className="flex gap-6">
              <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
