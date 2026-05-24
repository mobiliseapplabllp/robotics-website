import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

/**
 * Per-industry solution-page content. Each industry gets its own
 * SEO-targeted landing page at /solutions/{slug}. The Solutions index
 * (/solutions) lists all of them and links into each.
 */

export type IconComponent = ComponentType<LucideProps>;

export interface PainPoint {
  icon: IconComponent;
  headline: string;
  body: string;
}

export interface ServiceArea {
  icon: IconComponent;
  name: string;
  description: string;
  /** Product IDs from src/app/data/products.ts. */
  robots: string[];
  outcomeStat: string;
}

export interface Scenario {
  headline: string;
  /** Short facility descriptor — "5-star hotel, Mumbai" / "Tertiary hospital, Bengaluru". */
  facility: string;
  body: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface IndustrySolution {
  /** URL slug — page lives at /solutions/{slug}. */
  slug: string;
  /** Stable id that matches the existing SOLUTIONS entry in products.ts for anchor back-compat. */
  id: string;
  /** Human-readable industry name (used in nav, breadcrumbs, headings). */
  name: string;

  // SEO meta
  metaTitle: string;
  metaDescription: string;

  // Hero
  h1: string;
  heroSubline: string;
  heroImage: string;
  heroImageAlt: string;

  // Above-the-fold quick stats
  stats: { value: string; label: string }[];

  // Intro / overview — 2-3 paragraphs
  overview: string[];

  // Pain points (3 cards)
  painPoints: PainPoint[];

  // FM workload service areas mapped to robots (3-4)
  serviceAreas: ServiceArea[];

  // Real-world vignettes (2-3)
  scenarios: Scenario[];

  // Robots to feature in the catalog cards block
  featuredRobotIds: string[];

  // FAQ (4-6) — also feeds FAQPage JSON-LD schema for rich-results
  faqs: FAQ[];
}
