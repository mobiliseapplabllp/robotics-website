import fm from "front-matter";
import type { BlogPost, BlogPostFrontmatter } from "./types";

/**
 * Vite glob import — returns a record of { path: rawFileContents }.
 * Runs at build time; posts are inlined into the bundle (the blog doesn't
 * need a backend or runtime fetch).
 */
const rawPosts = import.meta.glob<string>("./posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

/** Words-per-minute baseline for a general technical/business audience. */
const READING_WPM = 220;

function computeReadMinutes(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / READING_WPM));
}

function parsePost(raw: string): BlogPost {
  const parsed = fm<BlogPostFrontmatter>(raw);
  const attrs = parsed.attributes;
  const content = parsed.body;

  if (!attrs.title || !attrs.slug || !attrs.date) {
    throw new Error(`Blog post missing required frontmatter (title/slug/date): ${attrs.title ?? "untitled"}`);
  }

  return {
    ...attrs,
    content,
    readMinutes: attrs.readMinutes ?? computeReadMinutes(content),
  };
}

/** All blog posts, newest first, drafts excluded. */
export const ALL_POSTS: BlogPost[] = Object.values(rawPosts)
  .map(parsePost)
  .filter((p) => !p.draft)
  .sort((a, b) => b.date.localeCompare(a.date));

export function getPostBySlug(slug: string): BlogPost | undefined {
  return ALL_POSTS.find((p) => p.slug === slug);
}

/**
 * Posts related to a given post. Matches by shared category first, then by
 * overlapping tags. Excludes the current post. Caps at `limit`.
 */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const others = ALL_POSTS.filter((p) => p.slug !== post.slug);
  const sameCategory = others.filter((p) => p.category === post.category);
  const tagOverlap = others
    .filter((p) => p.category !== post.category)
    .map((p) => ({
      post: p,
      overlap: p.tags.filter((t) => post.tags.includes(t)).length,
    }))
    .filter((x) => x.overlap > 0)
    .sort((a, b) => b.overlap - a.overlap)
    .map((x) => x.post);

  return [...sameCategory, ...tagOverlap].slice(0, limit);
}

/** Unique categories that have at least one published post. */
export function getCategories(): string[] {
  return [...new Set(ALL_POSTS.map((p) => p.category))].sort();
}
