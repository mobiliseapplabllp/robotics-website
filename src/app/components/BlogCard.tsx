import { Link } from "react-router";
import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { MonogramAvatar } from "./MonogramAvatar";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { BlogPost, BlogCategory } from "../../content/blog/types";

interface BlogCardProps {
  post: BlogPost;
  /** Visual variant. "featured" is larger — for the latest post at the top of the index. */
  variant?: "default" | "featured";
  /** Stagger delay for grid animations (seconds). */
  index?: number;
}

const CATEGORY_STYLES: Record<BlogCategory, string> = {
  Company: "text-cyan-400 border-cyan-400/30 bg-cyan-500/10",
  Industry: "text-amber-400 border-amber-400/30 bg-amber-500/10",
  Product: "text-emerald-400 border-emerald-400/30 bg-emerald-500/10",
  Customer: "text-pink-400 border-pink-400/30 bg-pink-500/10",
  Engineering: "text-violet-400 border-violet-400/30 bg-violet-500/10",
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });
}

export function BlogCard({ post, variant = "default", index = 0 }: BlogCardProps) {
  const isFeatured = variant === "featured";
  const categoryStyle = CATEGORY_STYLES[post.category] ?? CATEGORY_STYLES.Company;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={isFeatured ? "lg:col-span-2" : ""}
    >
      <Link
        to={`/blog/${post.slug}`}
        className="group block bg-white/5 border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-cyan-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a14] h-full"
      >
        {/* Hero image or gradient */}
        <div
          className={`relative w-full overflow-hidden ${
            isFeatured ? "aspect-[2/1]" : "aspect-video"
          }`}
        >
          {post.heroImage ? (
            <ImageWithFallback
              src={post.heroImage}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
          ) : (
            <div
              className="w-full h-full bg-gradient-to-br from-[#0d1525] via-[#0a1a35] to-[#050a14]"
              aria-hidden="true"
            >
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 30%, rgba(34,211,238,0.3), transparent 60%), radial-gradient(circle at 70% 70%, rgba(59,130,246,0.2), transparent 60%)`,
                }}
              />
              <div className="absolute bottom-4 left-6 right-6 text-white/15 font-black text-[8rem] leading-none select-none pointer-events-none truncate" aria-hidden="true">
                {post.category.slice(0, 1)}
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/80 via-transparent to-transparent" aria-hidden="true" />
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${categoryStyle}`}>
            {post.category}
          </div>
        </div>

        {/* Body */}
        <div className={isFeatured ? "p-8" : "p-6"}>
          <h2 className={`font-black text-white mb-3 leading-tight ${isFeatured ? "text-3xl" : "text-xl"}`}>
            {post.title}
          </h2>
          <p className={`text-white/70 leading-relaxed mb-5 ${isFeatured ? "text-base line-clamp-3" : "text-sm line-clamp-2"}`}>
            {post.excerpt}
          </p>

          {/* Meta row */}
          <div className="flex items-center justify-between gap-3 pt-5 border-t border-white/10">
            <div className="flex items-center gap-3 min-w-0">
              <MonogramAvatar
                name={post.author.avatarInitials ?? post.author.name}
                className="w-8 h-8 rounded-full text-xs shrink-0"
              />
              <div className="min-w-0">
                <div className="text-white/90 text-sm font-semibold truncate">{post.author.name}</div>
                <div className="flex items-center gap-2 text-white/50 text-xs">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3" aria-hidden="true" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" aria-hidden="true" />
                    {post.readMinutes} min read
                  </span>
                </div>
              </div>
            </div>
            <ArrowRight
              className="w-5 h-5 text-white/30 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0"
              aria-hidden="true"
            />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
