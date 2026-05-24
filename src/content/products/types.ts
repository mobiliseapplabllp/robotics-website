/**
 * Per-product detail schema for `/products/{slug}` pages.
 *
 * Drives `src/app/pages/ProductDetailPage.tsx`, the single template that
 * renders all 15 KEENON product pages. The catalog data (specs, features,
 * use cases, video IDs, hero images, accent colour) lives in
 * `src/app/data/products.ts` — this schema *adds* the new sections defined
 * in `docs/PRODUCT-PAGE-REVAMP-PLAN.md`: positioning, quick facts,
 * differentiators, workflow, grouped specs, industry fits with cross-links,
 * commercials, family comparison, FAQ.
 *
 * Joined to `products.ts` by `slug`.
 */

/**
 * Icon name as a string. Resolved to a lucide-react component by
 * `ProductDetailPage`'s ICON_MAP. Keeping icons as strings lets data files
 * stay pure-data without coupling to React.
 */
export type ProductIconName =
  | "Wrench"
  | "Compass"
  | "Eye"
  | "Battery"
  | "Building2"
  | "Scan"
  | "Hand"
  | "Cog"
  | "Package"
  | "Wifi"
  | "DoorClosed"
  | "Activity"
  | "ShieldCheck"
  | "Sparkles"
  | "Truck"
  | "Hotel"
  | "Stethoscope"
  | "Utensils"
  | "ShoppingBag"
  | "Plane"
  | "Briefcase"
  | "Network"
  | "Users"
  | "MessageSquare"
  | "Brush"
  | "Droplet"
  | "Boxes"
  | "Gauge"
  | "Ruler"
  | "Zap"
  | "Cpu"
  | "Radar"
  | "MonitorSmartphone"
  | "MapPin"
  | "BadgeCheck"
  | "Headphones"
  | "Wallet"
  | "Layers";

/** Single label/value spec, grouped under a `ProductSpecGroup`. */
export interface ProductSpecRow {
  label: string;
  value: string;
}

/** A logical grouping of specs (e.g. Dimensions, Performance, Sensing). */
export interface ProductSpecGroup {
  title: string;
  icon: ProductIconName;
  rows: ProductSpecRow[];
}

/** Hero "at-a-glance" fact — 4 of these render in the hero strip. */
export interface ProductQuickFact {
  icon: ProductIconName;
  label: string;
  value: string;
}

/** Buyer-facing differentiator card with a concrete proof spec. */
export interface ProductDifferentiator {
  icon: ProductIconName;
  title: string;
  desc: string;
  proof: string; // e.g. "55 cm passage width" — should match a real spec
}

/** One step in the consistent 4-step "How it works" section. */
export interface ProductWorkflowStep {
  step: string; // "01" "02" etc.
  icon: ProductIconName;
  title: string;
  desc: string;
}

/** Where the robot fits — links to /solutions/{slug} for cross-navigation. */
export interface ProductIndustryFit {
  industry: string;
  solutionsSlug: string; // matches the slug under /solutions/{slug}
  scenario: string;
  recommendedPilot: string;
}

/**
 * Commercials & ownership — all fields optional. When absent, the section
 * still renders but with a "Talk to sales for current pricing" placeholder.
 * Per BRAND.md we never display exact quotes — only indicative bands.
 */
export interface ProductCommercials {
  capexBand?: string;
  amcStructure?: string;
  pilotOffer?: string;
  operatingCost?: string;
  leadTime?: string;
}

/** Sibling robot in the same family, shown in compare table. */
export interface ProductFamilyMember {
  slug: string;
  model: string;
  differentiator: string; // 1-line: e.g. "ideal for X" / "compact alternative to Y"
}

/** FAQ item — emits FAQPage JSON-LD via the template. */
export interface ProductFAQ {
  q: string;
  a: string;
}

export interface ProductDetail {
  /** Slug — joins to `Product.id` in src/app/data/products.ts. */
  slug: string;
  /** 1-line under hero — what the robot is for, in plain English. */
  positioning: string;
  quickFacts: ProductQuickFact[]; // exactly 4
  differentiators: ProductDifferentiator[]; // exactly 3
  workflow: ProductWorkflowStep[]; // exactly 4
  specGroups: ProductSpecGroup[]; // typically 4–5
  industryFits: ProductIndustryFit[]; // 3–4
  commercials: ProductCommercials;
  familyMembers: ProductFamilyMember[]; // 2–3
  faqs: ProductFAQ[]; // 5–8
  /** Blog post slugs to surface in the "Related" section. */
  relatedPostSlugs?: string[];
}
