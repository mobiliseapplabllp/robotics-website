import { Link } from "react-router";
import { Bot, ArrowRight, Home as HomeIcon } from "lucide-react";
import { motion } from "motion/react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function NotFound() {
  useDocumentTitle("Page not found");

  return (
    <section className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full text-center"
      >
        <div className="inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 items-center justify-center shadow-lg shadow-cyan-500/30 mb-8">
          <Bot className="w-10 h-10 text-white" aria-hidden="true" />
        </div>

        <p className="text-cyan-400 text-sm font-bold tracking-[0.3em] uppercase mb-4">
          Error 404
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
          This page went off-route
        </h1>
        <p className="text-white/60 text-lg leading-relaxed mb-10">
          The page you're looking for doesn't exist or has been moved. Our robots are good at navigating — but even they need a valid address.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl text-sm font-bold text-white transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
          >
            <HomeIcon className="w-4 h-4" aria-hidden="true" />
            Back to home
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl text-sm font-bold text-white transition-all"
          >
            Browse robots
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
