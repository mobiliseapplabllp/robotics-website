# Mobilise Robotics — Website Roadmap

> A Now / Next / Later view of the website (mobilise-robotics.com). Scope: the marketing site only — *not* the KEENON products themselves or the business/sales operation. See `business-roadmap.md` for that.

---

## Guiding principle

**Every change on this roadmap should serve one or more of these outcomes:**
1. **Qualify better leads** — more demo requests from the right persona
2. **Shorten sales cycle** — website content pre-answers 70% of a sales call
3. **Build authority** — Google, LinkedIn, and peer operators treat us as *the* authority on service robots in India
4. **Reduce inbound friction** — no dead links, no placeholder content, no "contact us for everything"

If an initiative doesn't tie to one of those four, it's decoration.

---

## ✅ NOW — Shipped (Phase 1 & 2, April 2026)

### Foundation
- React 18 + TS + Vite 6 + Tailwind v4 + Motion · dark theme · Oklch palette
- 21 pages: Home, Products, 15 product detail, Solutions, About, Contact, Privacy, Terms, 404
- Per-page titles, meta, OG tags, canonical, JSON-LD (Product + Organization + WebSite schema)
- Sitemap, robots.txt, favicon, vercel.json with security + cache headers

### Accessibility
- WCAG 2.1 AA pass for critical paths
- Skip link · keyboard-navigable product dropdown · Escape-closes menus · focus trap in lightbox
- `prefers-reduced-motion` global CSS · muted video autoplay · 44×44 touch targets
- Form validation + labels + aria-invalid · mailto fallback for contact

### Performance
- 510 KB → 172 KB main bundle (66% drop)
- 18 routes code-split · lazy-loaded images · tree-shaken icons
- Motion + Lucide isolated in their own long-cache chunks
- **0 npm audit vulnerabilities** · 4.4s build
- 44 unused dependencies removed; entire unused shadcn `ui/` directory deleted

### Content
- Fake testimonials removed · replaced with honest "What every customer gets" panel
- Stock team photos replaced with branded MonogramAvatar components
- Solutions page gets 6 on-theme Unsplash industry photos (verified one-by-one)
- **All 15 KEENON product images downloaded locally** (67 WebP files) from official keenon.com CDN
- Product data verified against keenon.com (specs, taglines, descriptions)
- 2 legacy products (T5, G1) flagged in data with clear comments

### Tooling / developer experience
- TypeScript strict mode · `noUnusedLocals` + `noUnusedParameters` enforced
- ESLint 9 (flat config) · Prettier 3 · Vitest 3 with smoke test
- `npm run typecheck | lint | test:run | format | build | preview`
- `tsconfig.json`, `vercel.json`, `eslint.config.js`, `.prettierrc.json`, `vitest.config.ts`

### Deliverables alongside the site
- `docs/personas.md` — 6 synthetic buyer personas (Hospitality/Healthcare/F&B/Retail/Aviation/Corporate)
- `docs/website-roadmap.md` — this document
- `docs/business-roadmap.md` — company-level roadmap

---

## 🟡 NEXT — 0 to 4 weeks out

Pick 2–4 from this list per sprint. Order by business impact + effort.

### A. Deploy to production ⭐
- Point `mobilise-robotics.com` DNS at Vercel
- Swap `https://mobilise-robotics.com` placeholder in 4 places: `src/config/site.ts`, `public/robots.txt`, `public/sitemap.xml`, `index.html`
- Add `public/og-image.jpg` (1200×630) for social previews
- Submit sitemap to Google Search Console
- **Effort: ½ day · Impact: site actually has a URL**

### B. Apply `ProductHero` component across 15 pages
- Component is built and tested; applying it removes ~750 lines of duplication
- Each page becomes 3–6 lines of hero JSX instead of 30–50
- Enables single-point updates to hero behavior (scroll, fade, video swap)
- **Effort: 3–4 hrs · Impact: maintainability — one place to change hero**

### C. Contact form → real backend
- Current flow: validation ✓ → opens email client via mailto
- Better: Formspree, Web3Forms, or small serverless endpoint → writes to HubSpot/Salesforce + emails sales
- Auto-route by persona (the dropdown exists — wire it)
- **Effort: ½–1 day · Impact: 30–50% form completion improvement, CRM-ready leads**

### D. Replace generic About hero + body photos with real Mobilise deployment photos
- Current About page uses a generic Unsplash "India tech" shot
- If you have any real deployment photos (even partial — a hotel lobby with a KEENON T9 visible), use them
- **Effort: 1 hr + your photos · Impact: credibility**

### E. Fix W3 / T5 / G1 data inconsistencies honestly
- W3: currently categorized `delivery` as ButlerBot — confirmed correct. Move on.
- T5: flagged as legacy. Decide: keep, rebrand, or remove from catalog.
- G1: flagged as legacy. Decide: rebrand to G2 (current KEENON product), keep as G1 with "supersedes" note, or remove.
- **Effort: ½ day for rebrand decisions · Impact: honesty with prospects**

### F. Per-industry landing pages
- Current Solutions page is one stacked list. Each industry deserves its own URL:
  - `/solutions/hospitality`, `/solutions/healthcare`, `/solutions/food-beverage`, etc.
- Each page: industry-specific hero, pain points (from personas.md), 2–3 recommended robots, 1 case study (or "coming soon"), CTA
- Improves SEO (long-tail: "hospital delivery robots India", "hotel robots Mumbai")
- **Effort: 2 days · Impact: SEO + persona-specific conversion**

### G. Build `/comparison` tool for product matrix
- "T8 vs T9 vs T10" style side-by-side comparison
- Query params: `/comparison?ids=t8,t9,t10`
- Shows specs, use cases, price band (if disclosed)
- **Effort: 1–2 days · Impact: reduces decision paralysis — huge for delivery-robot category**

### H. FAQ page (`/faq`)
- 15–25 questions across: pricing, deployment, support, training, ROI, technical
- Each answer links to relevant product page
- Reduces form inbound volume by 30–50%
- **Effort: ½ day code + your content · Impact: sales team efficiency**

### I. Real analytics + conversion tracking
- Plausible (privacy-friendly) or PostHog
- Conversion events: demo request, product page time-on-page, scroll depth, comparison usage
- **Effort: 2 hrs · Impact: data-driven iteration**

### J. Performance: motion + icon tree-shaking, image sizes
- Current main chunk at 172 KB gzip 45 KB — good but can be ~30 KB with more aggressive splitting
- LCP (Largest Contentful Paint) optimization — hero images need `fetchpriority="high"`
- **Effort: ½ day · Impact: SEO ranking signal, mobile experience**

---

## 🔵 LATER — 1 to 6 months out

Strategic features. Scope each as its own mini-project when prioritizing.

### Lead generation & conversion

| # | Initiative | Why | Rough effort |
|---|---|---|---|
| 1 | **ROI calculator** — user inputs facility size + staff cost → payback period + PDF report | Qualifies leads; generates shareable artifact | 3–5 days |
| 2 | **Product recommendation quiz** — 4 questions → top 3 robots with rationale | Reduces "what do I need?" friction | 2–3 days |
| 3 | **Calendly / Cal.com integration** for direct demo booking | Reduces back-and-forth scheduling | 1 day |
| 4 | **Live chat or WhatsApp Business button** on every product page | India-appropriate channel | 1 day |
| 5 | **Exit-intent email capture** — "Download the KEENON T9 spec sheet" | Converts undecided traffic into nurture pipeline | 1 day |

### Content & SEO

| # | Initiative | Why | Rough effort |
|---|---|---|---|
| 6 | **Customer case studies** (3–5, one per industry) — real deployments with named brands, metrics, photos | Persona map says peer proof is the #1 decision driver | 1 day code + 1–2 weeks your content collection |
| 7 | **Video testimonials** (30–60s) from real customers | 10× more credible than text | Content work |
| 8 | **Blog / news hub** — monthly posts on industry trends, customer spotlights | SEO authority + reason to return | 1–2 days code + editorial hire |
| 9 | **City landing pages** (`/deployments/mumbai`, `/delhi`, etc.) | Ranks for "delivery robot Mumbai" etc. | 1 day per city × 8 cities |
| 10 | **Resource hub** (`/resources`) — datasheets (PDF), setup guides, training videos | Builds authority; reduces support load | 1–2 weeks (lots of content) |
| 11 | **Glossary / education pages** — "What is SLAM navigation?", "What is a service robot?" | Educates first-time buyers; ranks for informational queries | 2–3 days |

### Product showcase

| # | Initiative | Why | Rough effort |
|---|---|---|---|
| 12 | **Pricing transparency page** — even range bands ("T8 starts at ₹X lakhs") | Every inquiry currently starts cold | 1 day code + business decision |
| 13 | **"How it works" interactive demo** on Home page | Explains delivery/cleaning/service workflows visually | 3–5 days |
| 14 | **360° product viewer** for 3–5 flagship models | Premium feel; mimics Apple-style product page | 2–3 days + asset creation |
| 15 | **AR "see it in your facility"** via WebAR | Gimmicky but memorable demo tool | 1 week |

### Internal tools / team experience

| # | Initiative | Why | Rough effort |
|---|---|---|---|
| 16 | **Admin panel** to update products/solutions without code changes | Sales team writes copy; devs ship faster | 1 week (or use a headless CMS) |
| 17 | **A/B testing framework** (GrowthBook / Vercel Edge Config) | Data-driven optimization | 2–3 days |
| 18 | **Internationalization** (Hindi, Tamil, Bengali) | Expands beyond English-speaking buyers | 1 week + translation cost |

### Technical debt / hygiene

| # | Initiative | Effort |
|---|---|---|
| 19 | Migrate from mailto to serverless contact endpoint | ½ day |
| 20 | Set up CI/CD (GitHub Actions: typecheck + lint + test on PR) | ½ day |
| 21 | Lighthouse CI budget enforcement | ½ day |
| 22 | Upgrade dependencies + renovate bot | ½ day |
| 23 | Full accessibility audit (paid, with certified WCAG auditor) | 1 week + audit cost |
| 24 | Security headers audit (CSP fine-tuning, HSTS) | ½ day |

---

## Prioritization framework

When deciding what goes next, score each initiative:

| Criterion | Weight | Score 1–5 |
|---|---|---|
| **Business impact** — does it drive demos, shorten cycle, or build authority? | 3× | |
| **Effort** — inverse; lower = better | 2× | |
| **Unblocker for other work** — does finishing this unlock multiple others? | 1× | |
| **Strategic alignment** — does this serve all 6 personas or just 1? | 1× | |

**Keep a backlog in linear / Notion / whatever.** This doc should never be more than ~25 items long. Drop items that age without being picked.

---

## Cadence

- **Weekly** — pick 1–2 items from NEXT, finish them, ship
- **Monthly** — review LATER list, re-prioritize, promote 2–4 to NEXT
- **Quarterly** — re-evaluate strategy: is the website converting? Are personas right? Do we need a rewrite?

---

*Document version: 1.0 · Last updated: 2026-04-19 · Owner: Mobilise Engineering + Marketing*
