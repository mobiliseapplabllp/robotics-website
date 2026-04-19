import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router";
import { motion } from "motion/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { getPostBySlug, getRelatedPosts } from "../../content/blog/loader";
import { BlogCard } from "../components/BlogCard";
import { MonogramAvatar } from "../components/MonogramAvatar";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { SITE } from "../../config/site";
import type { BlogCategory } from "../../content/blog/types";

const CATEGORY_STYLES: Record<BlogCategory, string> = {
  Company: "text-cyan-400 border-cyan-400/30 bg-cyan-500/10",
  Industry: "text-amber-400 border-amber-400/30 bg-amber-500/10",
  Product: "text-emerald-400 border-emerald-400/30 bg-emerald-500/10",
  Customer: "text-pink-400 border-pink-400/30 bg-pink-500/10",
  Engineering: "text-violet-400 border-violet-400/30 bg-violet-500/10",
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
}

function useBlogPostingJsonLd(params: {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  authorName: string;
  heroImage?: string;
}) {
  useEffect(() => {
    const url = `${SITE.url}/blog/${params.slug}`;
    const imageUrl = params.heroImage
      ? (params.heroImage.startsWith("http") ? params.heroImage : `${SITE.url}${params.heroImage}`)
      : `${SITE.url}${SITE.ogImage}`;

    const ld = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: params.title,
      description: params.description,
      image: imageUrl,
      datePublished: params.datePublished,
      author: { "@type": "Person", name: params.authorName },
      publisher: {
        "@type": "Organization",
        name: SITE.legalName,
        logo: { "@type": "ImageObject", url: `${SITE.url}/favicon.svg` },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.blogLd = params.slug;
    script.textContent = JSON.stringify(ld);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [params.slug, params.title, params.description, params.datePublished, params.authorName, params.heroImage]);
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  // Hooks must run unconditionally — call them before any early returns.
  useDocumentTitle(post ? post.title : "Post", post ? post.excerpt : undefined);
  useBlogPostingJsonLd({
    slug: post?.slug ?? "",
    title: post?.title ?? "",
    description: post?.excerpt ?? "",
    datePublished: post?.date ?? "",
    authorName: post?.author.name ?? "",
    heroImage: post?.heroImage,
  });

  if (!post) return <Navigate to="/blog" replace />;

  const related = getRelatedPosts(post, 3);
  const categoryStyle = CATEGORY_STYLES[post.category] ?? CATEGORY_STYLES.Company;

  const share = async () => {
    const url = `${window.location.origin}/blog/${post.slug}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: post.title, text: post.excerpt, url });
      } catch {
        // User cancelled — ignore
      }
    } else {
      await navigator.clipboard.writeText(url).catch(() => void 0);
    }
  };

  return (
    <div className="min-h-screen bg-[#050a14] pt-20">
      {/* Header */}
      <article>
        <header className="relative py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/60 hover:text-cyan-400 text-sm font-semibold mb-8 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to all posts
            </Link>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className={`inline-block px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider mb-5 ${categoryStyle}`}>
                {post.category}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                {post.title}
              </h1>

              <p className="text-xl text-white/70 leading-relaxed mb-8">
                {post.excerpt}
              </p>

              {/* Author + meta */}
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <MonogramAvatar
                    name={post.author.avatarInitials ?? post.author.name}
                    className="w-11 h-11 rounded-full text-sm"
                  />
                  <div>
                    <div className="text-white font-bold text-sm">{post.author.name}</div>
                    {post.author.role && (
                      <div className="text-white/50 text-xs">{post.author.role}</div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    {post.readMinutes} min read
                  </span>
                </div>
                <button
                  type="button"
                  onClick={share}
                  aria-label="Share this post"
                  className="ml-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <Share2 className="w-4 h-4" aria-hidden="true" />
                  Share
                </button>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Hero image */}
        {post.heroImage && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/10">
              <ImageWithFallback
                src={post.heroImage}
                alt=""
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
          <div
            className="
              prose prose-invert prose-lg max-w-none
              prose-headings:font-black prose-headings:text-white prose-headings:tracking-tight
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-5
              prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
              prose-p:text-white/80 prose-p:leading-relaxed
              prose-strong:text-white prose-strong:font-bold
              prose-a:text-cyan-400 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
              prose-ul:text-white/80 prose-ol:text-white/80
              prose-li:marker:text-cyan-400
              prose-blockquote:border-l-cyan-400 prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-white/90
              prose-code:text-cyan-400 prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-code:font-semibold
              prose-pre:bg-[#0a101f] prose-pre:border prose-pre:border-white/10
              prose-table:text-white/80 prose-th:text-white prose-th:border-white/20 prose-td:border-white/10
              prose-hr:border-white/10
            "
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-2">
              <span className="text-white/50 text-xs uppercase tracking-wider font-bold mr-2 self-center">Tags</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-[#030710] border-t border-white/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-black text-white mb-8">Keep reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((p, i) => (
                <BlogCard key={p.slug} post={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/20" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to explore what robots can do for <span className="text-cyan-400">your facility?</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Book a no-commitment call with our India team. We'll walk through your operations and suggest where to start.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-2xl text-white font-black text-lg transition-all shadow-2xl shadow-cyan-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a14]"
          >
            Talk to our team
          </Link>
        </div>
      </section>
    </div>
  );
}
