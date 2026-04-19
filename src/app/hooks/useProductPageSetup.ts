import { useEffect } from "react";
import { useDocumentTitle } from "./useDocumentTitle";
import { PRODUCTS } from "../data/products";
import { SITE } from "../../config/site";

/**
 * One-stop setup for product pages: updates document title, meta description,
 * Open Graph + Twitter tags, canonical URL, and injects a Product JSON-LD
 * script for rich search results.
 *
 * @param productId The product ID from PRODUCTS (e.g. "t3", "c40", "s100").
 */
export function useProductPageSetup(productId: string) {
  const product = PRODUCTS.find((p) => p.id === productId);

  useDocumentTitle(
    product ? `KEENON ${product.name} — ${product.tagline}` : "Product",
    product ? product.description : undefined
  );

  useEffect(() => {
    if (!product) return;
    const ld = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: `KEENON ${product.name}`,
      description: product.description,
      brand: {
        "@type": "Brand",
        name: "KEENON Robotics",
      },
      category: product.categoryLabel,
      image: product.image,
      manufacturer: {
        "@type": "Organization",
        name: "KEENON Robotics",
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: SITE.legalName,
          url: SITE.url,
        },
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.productLd = product.id;
    script.textContent = JSON.stringify(ld);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [product]);
}
