import { useEffect } from "react";
import { SITE } from "../../config/site";

/**
 * Sets the document.title and updates per-route SEO tags (meta description,
 * Open Graph, Twitter Card, canonical link) when the page mounts, and
 * restores the prior values on unmount.
 *
 * Usage:
 *   useDocumentTitle("Contact", "Description shown in Google search results and OG cards.")
 *
 * @param title  Page-specific title. Site name is appended automatically.
 * @param description  Optional meta description (160 chars max recommended).
 */
export function useDocumentTitle(title: string, description?: string) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE.name}` : SITE.name;
    const desc = description ?? SITE.description;
    const url = typeof window !== "undefined" ? window.location.href : SITE.url;

    const previous = {
      title: document.title,
      description: getMetaContent('meta[name="description"]'),
      ogTitle: getMetaContent('meta[property="og:title"]'),
      ogDescription: getMetaContent('meta[property="og:description"]'),
      ogUrl: getMetaContent('meta[property="og:url"]'),
      twitterTitle: getMetaContent('meta[name="twitter:title"]'),
      twitterDescription: getMetaContent('meta[name="twitter:description"]'),
      canonical: getLinkHref('link[rel="canonical"]'),
    };

    document.title = fullTitle;
    setMeta('meta[name="description"]', desc);
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', desc);
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', desc);
    setCanonical(url);

    return () => {
      document.title = previous.title;
      if (previous.description !== null) setMeta('meta[name="description"]', previous.description);
      if (previous.ogTitle !== null) setMeta('meta[property="og:title"]', previous.ogTitle);
      if (previous.ogDescription !== null) setMeta('meta[property="og:description"]', previous.ogDescription);
      if (previous.ogUrl !== null) setMeta('meta[property="og:url"]', previous.ogUrl);
      if (previous.twitterTitle !== null) setMeta('meta[name="twitter:title"]', previous.twitterTitle);
      if (previous.twitterDescription !== null) setMeta('meta[name="twitter:description"]', previous.twitterDescription);
      if (previous.canonical !== null) setCanonical(previous.canonical);
    };
  }, [title, description]);
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
