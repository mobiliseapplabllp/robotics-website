import { useEffect } from "react";
import { SITE } from "../../config/site";

/**
 * Sets the document.title and updates per-route SEO tags (meta description,
 * Open Graph, Twitter Card, canonical link) when the page mounts, and
 * restores the prior values on unmount.
 *
 * Usage:
 *   useDocumentTitle("Contact", "Description shown in Google search results and OG cards.")
 *   useDocumentTitle("KEENON W3", "Per-product description.", "/images/products/w3/hero.webp")
 *
 * @param title  Page-specific title. Site name is appended automatically.
 * @param description  Optional meta description (160 chars max recommended).
 * @param ogImage  Optional path or full URL for the per-page Open Graph image.
 *                 If absent the site-wide SITE.ogImage is used.
 */
export function useDocumentTitle(title: string, description?: string, ogImage?: string) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE.name}` : SITE.name;
    const desc = description ?? SITE.description;
    const url = typeof window !== "undefined" ? window.location.href : SITE.url;
    const imageUrl = (() => {
      const raw = ogImage ?? SITE.ogImage;
      if (raw.startsWith("http")) return raw;
      return `${SITE.url}${raw}`;
    })();

    const previous = {
      title: document.title,
      description: getMetaContent('meta[name="description"]'),
      ogTitle: getMetaContent('meta[property="og:title"]'),
      ogDescription: getMetaContent('meta[property="og:description"]'),
      ogUrl: getMetaContent('meta[property="og:url"]'),
      ogImage: getMetaContent('meta[property="og:image"]'),
      twitterTitle: getMetaContent('meta[name="twitter:title"]'),
      twitterDescription: getMetaContent('meta[name="twitter:description"]'),
      twitterImage: getMetaContent('meta[name="twitter:image"]'),
      canonical: getLinkHref('link[rel="canonical"]'),
    };

    document.title = fullTitle;
    setMeta('meta[name="description"]', desc);
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', desc);
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[property="og:image"]', imageUrl);
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', desc);
    setMeta('meta[name="twitter:image"]', imageUrl);
    setCanonical(url);

    return () => {
      document.title = previous.title;
      if (previous.description !== null) setMeta('meta[name="description"]', previous.description);
      if (previous.ogTitle !== null) setMeta('meta[property="og:title"]', previous.ogTitle);
      if (previous.ogDescription !== null) setMeta('meta[property="og:description"]', previous.ogDescription);
      if (previous.ogUrl !== null) setMeta('meta[property="og:url"]', previous.ogUrl);
      if (previous.ogImage !== null) setMeta('meta[property="og:image"]', previous.ogImage);
      if (previous.twitterTitle !== null) setMeta('meta[name="twitter:title"]', previous.twitterTitle);
      if (previous.twitterDescription !== null) setMeta('meta[name="twitter:description"]', previous.twitterDescription);
      if (previous.twitterImage !== null) setMeta('meta[name="twitter:image"]', previous.twitterImage);
      if (previous.canonical !== null) setCanonical(previous.canonical);
    };
  }, [title, description, ogImage]);
}

function getMetaContent(selector: string): string | null {
  const el = document.querySelector<HTMLMetaElement>(selector);
  return el ? el.content : null;
}

function getLinkHref(selector: string): string | null {
  const el = document.querySelector<HTMLLinkElement>(selector);
  return el ? el.href : null;
}

function setMeta(selector: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const nameMatch = selector.match(/\[name="([^"]+)"\]/);
    const propMatch = selector.match(/\[property="([^"]+)"\]/);
    if (nameMatch) el.setAttribute("name", nameMatch[1]);
    if (propMatch) el.setAttribute("property", propMatch[1]);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(url: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = url;
}
