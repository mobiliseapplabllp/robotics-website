# Product detail pages — revamp plan

**Status**: proposal — no code changes yet
**Author**: Mobilise web team
**Date**: 2026-05-24
**Covers**: all 15 product pages under `/products/{slug}` — T3 / T5 / T8 / T9 / T9-Pro / T10 / T11 / W3 / C20 / C30 / C40 / C55 / G1 / S100 / S300

---

## TL;DR

The 15 product pages today are **dense, inconsistent, marketing-heavy, and code-duplicated**. They were designed to look futuristic — not to help a facility manager decide whether to buy.

This plan converts them into a **single typed template** driven by per-model content data, with a section order optimised for the buyer's decision journey: positioning → quick facts → how it works → grouped specs → industry fit → commercials → comparison → FAQ → CTA.

We keep all 15 URLs and lose nothing the SEO crawler is indexing.

---

## 1. What's wrong today

Concrete issues found across `src/app/pages/products/*.tsx`:

### 1.1 Section order is inconsistent between products
| Section | T8 | T9 | W3 |
|---|---|---|---|
| Hero (100vh autoplay video) | ✓ | ✓ | ✓ |
| Mobilise Authority | ✓ | ✓ | ✓ |
| Deployment Counter | ✓ | ✗ | ✗ |
| Precision Engineering (3 feature cards) | ✓ | ✓ | ✗ |
| Delivery Pipeline (4 step cards) | ✗ | ✗ | ✓ |
| Video Section | ✓ | ✓ | ✓ |
| Sticky Feature Sections | 2 | 3 | 2 |
| Spec Grid (flat 4-col) | ✓ | ✓ | ✓ |
| Industry Grid | ✓ | ✓ | ✓ |
| CTA | ✓ | ✓ | ✓ |

The buyer scrolling between T8 and W3 sees different shapes for the same kind of content. Cognitive load is real.

### 1.2 Hero takes 100 vh with autoplay YouTube
- Image displayed, 3-second `setTimeout`, then swapped for a muted-autoplay YouTube iframe
- 100vh on mobile = user scrolls past zero textual context before learning anything
- YouTube iframe = ~700 KB of JS + autoplay video = bandwidth, battery, CWV hit
- "Scroll to Discover" footer adds no value; hero offers no above-the-fold proposition

### 1.3 Banned superlatives + borrowed claims
Direct violations of `docs/routines/BRAND.md` "off-limits" list:
- `"TECHNICAL SUPERIORITY"` heading on every page
- `"Trusted by 60,000+ Businesses"` industry-grid heading on T8 (KEENON global number — applied to a single product, misleading)
- `"world's most deployed compact delivery robot"` (T8)
- `"Engineered by KEENON, mastered by Mobilise"` (CTA on every page) — close to banned territory
- `"Industry-leading battery life"` (T9 feature card)
- `"Global Deployment"` label paired with T8 stats — implies T8-specific worldwide deployment

### 1.4 Specs are a flat 4-column grid of identical cards
Each product has 13–16 specs dumped as identically-styled cards in a `grid-cols-2 md:grid-cols-4` grid. Buyer must scan all of them to find the one they care about. No grouping by:
- Dimensions & weight
- Performance (speed, battery, charging, slope, passage)
- Sensing & navigation
- Software & connectivity
- Safety & environment

### 1.5 Feature cards vary in shape between products
- T8 / T9 / T10: 3 "Precision Engineering" cards
- W3: 4 "Delivery Pipeline" step cards (sequential, semantically different)
- C-series: another variant
This is the same buyer asking the same question — "what makes this robot different?" — getting three different presentation shapes.

### 1.6 No "at-a-glance" / quick facts above the fold
Buyer wants to know in 5 seconds:
- What is this robot for?
- How big / how heavy / how much load?
- What's the standout spec?
- What's the price band / pilot offer?

Today they have to scroll through 100 vh of hero + Authority section + Deployment Counter (sometimes) + Feature Cards before reaching any spec. SEO crawler suffers the same way.

### 1.7 No commercials anywhere on the page
- No indicative price band ("approximate CapEx: ₹X–Y lakhs")
- No AMC structure
- No pilot offer (the 30-day pilot is the most important Mobilise differentiator and it's not on the product page)
- No reference to the `/blog/hotel-room-service-robot-roi` ROI math post even on W3, where it's literally the same robot

### 1.8 No cross-product navigation
A buyer on `/products/t8` cannot:
- Compare T8 vs T9 vs T10 vs T11 inline
- See "robots like this" recommendations
- Jump to the right model for their use case without going back to `/products`

### 1.9 No link to `/solutions/{slug}` industry pages
The Industry Grid lists hospitality / healthcare / F&B / etc. as static cards. Each card should link to the matching `/solutions/{slug}` page (which we just built). Today: dead-end cards.

### 1.10 No FAQ → no FAQPage JSON-LD → SEO miss
Solution detail pages have FAQ + JSON-LD (built last week). Product pages don't. Buyer questions ("does it work without elevators?", "what's the noise level?", "languages supported?") aren't answered, and Google can't surface them in rich results.

### 1.11 Massive code duplication
Each product page file is 200–300 lines, ~85% identical structure to the next. To change a section once, we touch 15 files. The 15 files import the same 8 components with the same boilerplate setup (lightbox state, hero scroll transforms, video timeout, refs).

---

## 2. Proposed structure

A single section order, applied uniformly to all 15 robots, driven by per-model data.

```
┌──────────────────────────────────────────────────┐
│ 1. HERO (60vh, not 100vh)                        │
│    Breadcrumbs · Model name · 1-line positioning │
│    Hero image (no autoplay video by default)     │
│    Quick-facts strip: 4 key numbers              │
│    Primary CTA: "Book a pilot"                   │
│    Secondary CTA: "Download spec sheet" (PDF)    │
└──────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────┐
│ 2. AT A GLANCE                                   │
│    "Why operators choose [model]" — 3 cards      │
│    Each card = 1 specific differentiator         │
│    Tied to a real spec, not a slogan             │
└──────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────┐
│ 3. HOW IT WORKS                                  │
│    4-step process (consistent shape per robot)   │
│    Order → Load → Deliver → Return / Recharge    │
│    Model-specific copy in each step              │
└──────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────┐
│ 4. SPECIFICATIONS (grouped)                      │
│    Dimensions & weight                           │
│    Performance (speed, battery, charging, slope) │
│    Sensing & navigation                          │
│    Software & connectivity                       │
│    Safety & environment                          │
│    Per group: tidy 2-col label/value table       │
│    "Download full spec sheet (PDF)" CTA          │
└──────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────┐
│ 5. WHERE IT FITS                                 │
│    3–4 industry cards (hospitality, healthcare…) │
│    Each links to /solutions/{slug} page          │
│    Per industry: 1 scenario + recommended pilot  │
└──────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────┐
│ 6. COMMERCIALS & OWNERSHIP                       │
│    Indicative CapEx band (₹X–Y lakhs)            │
│    AMC: Y1 free, Y2+ approx ₹Z/yr                │
│    Pilot offer: 30-day paid, exit-clean          │
│    Operating cost band (electricity + parts)     │
│    "Talk to sales for a property-specific quote" │
└──────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────┐
│ 7. COMPARE WITH THE FAMILY                       │
│    Mini-table: this model vs 2–3 siblings        │
│    Differentiator per row (load / passage / cost)│
│    Each row links to that product page           │
└──────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────┐
│ 8. SEE IT IN ACTION (video)                      │
│    Single YouTube embed, lazy-loaded             │
│    Click-to-play (no autoplay)                   │
│    Below the fold; small thumbnail by default    │
└──────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────┐
│ 9. FAQ                                           │
│    5–8 buyer questions per robot                 │
│    <details> click-to-expand                     │
│    Emits FAQPage JSON-LD for rich results        │
└──────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────┐
│ 10. CTA + RELATED                                │
│    Primary: "Book a pilot at your property"      │
│    Secondary: "Read the ROI math" → blog post    │
│    Tertiary: "Browse all robots"                 │
│    Related resources: blog posts, solutions page │
└──────────────────────────────────────────────────┘
```

### Section-by-section rationale

| # | Section | Why it's here | What it replaces today |
|---|---|---|---|
| 1 | Hero (60vh) | Above-the-fold context + quick action | 100vh autoplay-video hero |
| 2 | At a glance | "Why this robot?" in 15 seconds | "Precision Engineering" feature cards (kept, restructured) |
| 3 | How it works | Demystify the workflow | Inconsistent "Pipeline"/"Engineering" sections |
| 4 | Grouped specs | Scannable, not a wall of cards | Flat 16-cell spec grid |
| 5 | Where it fits | Cross-link to /solutions/{slug} | Dead-end Industry Grid |
| 6 | Commercials | Buyer's #1 unanswered question | (Nothing) |
| 7 | Compare family | Help T8 buyers find T9 if needed | (Nothing) |
| 8 | Video | Optional supplement, not gate | 100vh autoplay video hero |
| 9 | FAQ | SEO + buyer questions | (Nothing) |
| 10 | CTA + related | Drive next action | "Engineered by KEENON, mastered by Mobilise" |

---

## 3. Implementation approach

### 3.1 Architecture: single template, data-driven

Pattern matches the `SolutionDetailPage` template we just shipped for `/solutions/{slug}`:

```
src/content/products/
├── types.ts                  ← ProductDetail interface
├── data/
│   ├── t8.ts                 ← per-model content
│   ├── t9.ts
│   ├── w3.ts
│   └── ... (15 files)
└── shared.ts                 ← cross-cutting (family map, FAQ helpers)

src/app/pages/
├── ProductDetailPage.tsx     ← single template renders all 15
└── products/                 ← (deleted after migration)
    └── (old per-product pages removed)

src/app/routes.ts             ← collapsed to one route: /products/:slug
```

### 3.2 `ProductDetail` type sketch

```ts
export interface ProductDetail {
  slug: string;                 // "t8"
  model: string;                // "T8"
  family: "delivery" | "cleaning" | "service";
  positioning: string;          // 1-line: "Compact delivery robot for narrow corridors"
  heroImage: string;
  videoId: string;              // YouTube ID, embedded lazily
  quickFacts: QuickFact[];      // 4 items for hero strip
  differentiators: Differentiator[];  // 3 cards for At a Glance
  workflow: WorkflowStep[];     // 4 steps
  specs: SpecGroup[];           // 5 groups
  industries: IndustryFit[];    // 3–4 with /solutions/{slug} links
  commercials: Commercials;
  familyMembers: string[];      // slugs of 2–3 siblings to show in compare
  faqs: FAQ[];                  // 5–8 items
  relatedPosts?: string[];      // blog post slugs
  accentColor: "sky" | "green" | "violet" | "amber"; // existing per-product accents
}
```

### 3.3 Migration sequence (PR-by-PR)

| PR | Scope | Robots | Risk |
|---|---|---|---|
| 1 | Schema + template + ONE robot (W3 as POC) | W3 | Low — old pages still live for other 14 |
| 2 | Migrate delivery family | T3, T5, T8, T9, T9-Pro, T10, T11 | Medium — bulk content authoring |
| 3 | Migrate cleaning family | C20, C30, C40, C55 | Medium |
| 4 | Migrate service family | G1, S100, S300 | Medium |
| 5 | Cleanup | Delete old per-product `*.tsx` files, simplify routes.ts | Low |

Total: 5 PRs across ~2–3 weeks of focused work, depending on how fast we get commercial inputs (price bands, AMC structure).

### 3.4 What we keep from today

Not everything is broken. Salvage:
- Existing product photography (`/public/images/products/{slug}/*.webp`) — high quality, reuse as-is
- Lightbox component (`ProductLightbox`) — works well, just lazy-load gallery images
- Breadcrumbs component — already there
- Existing video IDs in `products.ts` — keep, just stop autoplaying
- The per-product accent colour scheme (sky / green / violet / amber) — keeps visual variety

### 3.5 What we drop

- Full-viewport autoplay video hero
- "Scroll to Discover" decorations
- "Mobilise Authority" recurring filler section
- Sticky-feature sections (replaced by the structured At-a-Glance + How-it-Works pair)
- "TECHNICAL SUPERIORITY" / "PRECISION ENGINEERING" theatrical headings
- The hero scroll-fade-out transform (cute, costs CWV)

### 3.6 SEO impact

Net positive:
- FAQPage JSON-LD on every product page (currently zero)
- Product JSON-LD enriched with `offers`, `aggregateRating` (later), `brand`, `manufacturer`
- BreadcrumbList JSON-LD (currently has component but not JSON-LD)
- Better Core Web Vitals: lazy-loaded video, smaller hero, fewer animations
- Above-the-fold textual content for crawler (currently hero is image+video only)
- Cross-linking density: product ↔ solution ↔ blog post

No URLs change. No 301s needed.

---

## 4. What we need from you before starting

These are blockers Mobilise commercial side has to answer — content cannot be written without them:

1. **Indicative price bands per robot.** A ₹ range is fine (₹10–14 lakhs etc.). We will not display exact quotes.
2. **AMC structure.** Year 1 included? Year 2+ flat fee or percentage? Optional extended warranty?
3. **Pilot terms.** Confirmed 30-day duration? Cost (₹X / property / week)? What's included (engineer time, training, performance reports)? Exit terms (we pull the robot at no cost if pilot fails)?
4. **Lead times.** How long from PO to commissioning, in metros vs tier-2?
5. **Service levels.** Response time targets — by city, by issue severity? BRAND.md leaves these as TODO; we need them filled in before going on a public product page.
6. **Spec sheet PDFs.** Do we have a KEENON-approved spec sheet PDF per model that we can link as "Download spec sheet"? If not, we either generate one or remove the CTA.
7. **Compare-family decisions.** For each robot, which 2–3 siblings is it most likely to be compared against? (We can default to family-mates but you may want different recommendations for T9-Pro vs T9.)

If price/AMC numbers are confidential at this stage, we can ship the new layout with "Talk to sales for pricing" as a placeholder — the layout still helps, and the commercials section becomes the differentiator when those numbers land.

---

## 5. Recommended next step

**Approve the structure (sections 1–10) and the migration sequence (PR 1–5).**

Then we execute PR 1 — schema + template + W3 as proof of concept. W3 because:
- It's the robot the ROI blog post is about — we have ready commercial content
- It's a single-product use case (room service in hotels) — easier first content authoring pass than a multi-use-case robot like T10
- We have all the assets (hero image, gallery, video ID already in products.ts)

Once PR 1 ships, you see exactly what the new pages will look and feel like — then we proceed with PR 2–4 to migrate the other 14 robots.

---

## 6. Open questions for discussion

- Should the spec sheet PDF download be a real PDF or a print-stylesheet view of the page?
- Do we want a comparison page (`/products/compare?ids=t8,t9,t10`) as a separate enhancement, or is the inline "compare family" mini-table enough for v1?
- Video: keep YouTube embeds, or self-host the few we use most often for full CWV control?
- Do we want pricing visible to logged-out users, or behind a "Request pricing" form to capture leads?
