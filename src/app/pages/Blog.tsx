import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { ALL_POSTS, getCategories } from "../../content/blog/loader";
import { BlogCard } from "../components/BlogCard";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { FileText } from "lucide-react";

export function Blog() {
  useDocumentTitle(
    "Insights on service robotics in India",
    "Thoughts on the economics, deployment, and operations of autonomous service robots across Indian hospitality, healthcare, retail, and corporate facilities — from Mobilise Robotics."
  );

  const categories = useMemo(() => ["All", ...getCategories()], []);
  const [activeCategory, setActiveCategory] = useState("All");

  const visiblePosts = useMemo(
    () => (activeCategory === "All" ? ALL_POSTS : ALL_POSTS.filter((p) => p.category === activeCategory)),
    [activeCategory],
  );

  const featured = visiblePosts[0];
  const rest = visiblePosts.slice(1);

  return (
    <div className="min-h-screen bg-[#050a14] pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
              <FileText className="w-4 h-4 text-cyan-400" aria-hidden="true" />
              <span className="text-cyan-400 text-sm font-semibold">The Mobilise Blog</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              Insights on service robotics in <span className="text-cyan-400">India</span>
            </h1>
            <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
              Honest writing on the economics, deployment, and operations of service robots across Indian hospitality, healthcare, retail, corporate, and aviation facilities. No marketing fluff — the kind of content our own team reads on a Tuesday.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
        <div
          role="tablist"
          aria-label="Filter posts by category"
          className="flex flex-wrap items-center gap-3"
        >
          <span className="text-white/60 text-sm mr-2">Filter:</span>
          {categories.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isActive
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                    : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
          <span className="ml-auto text-white/60 text-sm" aria-live="polite">
            {visiblePosts.length} {visiblePosts.length === 1 ? "post" : "posts"}
          </span>
        </div>
      </div>

      {/* Posts grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        {visiblePosts.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-white/60 text-lg">No posts in this category yet — check back soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured && <BlogCard post={featured} variant="featured" index={0} />}
            {rest.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i + 1} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
