/**
 * Blog post schema.
 *
 * Posts are authored as markdown files in `src/content/blog/posts/*.md` with
 * YAML frontmatter matching this interface. The loader (./loader.ts) discovers
 * and parses them at build time.
 */

export interface BlogAuthor {
  name: string;
  role?: string;
  avatarInitials?: string; // optional override; defaults to computed initials
}

export type BlogCategory = "Company" | "Industry" | "Product" | "Customer" | "Engineering";

export interface BlogPostFrontmatter {
  title: string;
  slug: string;
  date: string; // ISO YYYY-MM-DD
  author: BlogAuthor;
  category: BlogCategory;
  tags: string[];
  excerpt: string;
  heroImage?: string; // optional public path, e.g. /images/blog/foo.jpg
  readMinutes?: number; // auto-computed if omitted
  draft?: boolean;
}

export interface BlogPost extends BlogPostFrontmatter {
  content: string; // markdown body (no frontmatter)
  readMinutes: number;
}
