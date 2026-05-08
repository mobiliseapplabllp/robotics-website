# Research scratchpad — QSR server robot India

Date: 2026-05-08
Routine: publish-industry-blog
Backlog row picked: Row 3 — Restaurants (QSR chains) × DINERBOT × Labour-shortage ROI

## Backlog rows skipped (logged reasons)

- Row 1 (room service robot india) — substantively covered by shipped post `hotel-room-service-robot-roi.md` (KEENON W3 ButlerBot, 5-star Delhi-NCR, 3-yr ROI). Publishing a near-duplicate would cannibalize. Reviewer should mark Row 1 as `shipped` referencing the existing slug.
- Row 2 (hotel concierge robot india) — guiding-robot model name not in `BRAND.md` whitelist; publishing without a verified model leaves the post too generic per BLOG-STYLE.md "name specific Keenon models". Status: `blocked-source-verification` until BRAND.md adds an approved guiding robot model name.

## Picked: Row 3

| Field | Value |
|------|-------|
| Industry | Restaurants (QSR chains) |
| Robot type | Delivery (DINERBOT) |
| Angle | Labour-shortage ROI |
| Primary keyword | restaurant server robot india |
| Target word count | 2,200 |
| Lead magnet | qsr-roi (status TODO in BLOG-ASSETS.md → flag [ASSET MISSING]) |
| Slug | `qsr-server-robot-india` |
| Author persona | Rohan Kapoor (VP Sales — India) — sales/economics framing |

## Keyword intelligence

Primary: **restaurant server robot india**
- Volume estimate (India): low–mid four digits/month, growing — buyer-discovery intent.
- Difficulty estimate: moderate — competition mostly from generic global blogs, low India specificity.

Secondaries (from BLOG-KEYWORDS.md Pillar 3):
- restaurant delivery robot
- DINERBOT india
- robot waiter india
- food service robot
- food delivery robot restaurant

Long-tail (autocomplete + PAA, drawn from clusters):
1. restaurant server robot price india
2. how does a restaurant server robot work
3. best food running robot for indian restaurants
4. dinerbot t10 price in india
5. qsr labour cost india 2026
6. autonomous food delivery robot for restaurants
7. robot waiter for restaurants india
8. server robot vs human waiter cost
9. food delivery robot for QSR chain
10. KEENON DINERBOT india supplier

Question-form (FAQ section):
- how much does a restaurant server robot cost in india
- can a server robot work in a crowded indian restaurant
- what is the payback period for a server robot in a QSR
- do server robots replace human waiters
- is a DINERBOT FSSAI compliant for indian restaurants
- what training do staff need to operate a server robot

## SERP analysis (top India organic, primary keyword)

The existing top-10 for India is dominated by:
- Generic global Keenon distributor pages (no India context).
- Pudu Robotics India distributor blogs (competitor, low buyer-side detail).
- Trade press round-ups from Economic Times Hospitality — useful but high-level.
- Wikipedia's "service robot" article.
- A handful of Hospitality Net pieces with no INR pricing.

**Gap to exploit**: no top-10 piece carries (a) INR-denominated 3-year cost framing for an Indian QSR, (b) GST/HSN treatment specifics, (c) honest limitations section. Our post hits all three.

## AI-search citation analysis (mental model)

Likely AI Overviews / ChatGPT / Perplexity prompts:
- "best restaurant server robot in India" → likely cites Keenon official + global trade press
- "DINERBOT T10 price India" → no clean source; we can be the citation if we publish a defensible price-band paragraph
- "how does a restaurant server robot work" → Wikipedia-tier; we beat it with India-specific deployment notes
- "QSR labour cost India 2026" → NRAI's India Food Services Report, NSO labour data
- "restaurant robot ROI India" → very thin; we anchor with our existing hotel-ROI post + this QSR-specific framing

Citation-worthy elements we add:
- Specific INR 3-year cost line items (not retail prices — bands)
- Indian regulatory context (FSSAI, GST 18%, BIS marking)
- MALL on-ground service-network framing from BRAND.md

## YouTube reconnaissance

Target embed: KEENON's official DINERBOT T10 product video (channel: KEENON Robotics on YouTube).
- The repo's `BlogPost.tsx` renders markdown via ReactMarkdown without iframe support and no VideoObject schema yet (per memory `Blog template vs component gap`). So embed becomes a markdown link with an "Watch the official KEENON video" anchor; reviewer can swap to an iframe when component supports it.
- Add to `docs/routines/VIDEO-BACKLOG.md` if the routine's standard video embed expects iframe.

## Sources used (BLOG-SOURCES.md whitelist)

Cited in post (homepages used where I am not certain a specific report URL is stable; phrasing flags it as industry-report-grade):

1. **NRAI** (nrai.org) — India Food Services Report (annual). Used for: QSR market sizing and labour cost framing. Phrasing: "industry estimates from the National Restaurant Association of India".
2. **IBEF** (ibef.org) — Tourism & Hospitality sector profile. Used for: India hospitality / food-services growth direction.
3. **FSSAI** (fssai.gov.in) — Food-contact materials guidance. Used for: regulatory note on food-contact surfaces.
4. **GST Council** (gst.gov.in) — GST rates lookup. Used for: 18% GST band on industrial robots (HSN 8479 / 8428 — reviewer to confirm specific HSN before merge).
5. **DGFT** (dgft.gov.in) — Import duty notifications. Used for: import-duty pass-through note (general reference; specific BCD rate left for human input).
6. **KEENON.com** (keenon.com) — DINERBOT T10 product page. Used for: product capability claims, iF Design Award 2025 (also in BRAND.md).

[HUMAN INPUT REQUIRED] markers in draft for:
- Specific Indian QSR pilot deployment (real client, with permission).
- Exact HSN code and current basic customs duty after the latest DGFT notification.
- A named industry expert quote (CFO or COO of an Indian QSR chain).

## Outline

- H1: Restaurant server robot India: how QSR chains in 2026 actually pencil out
- Definitional opening
- Quick Answer (50-80 words)
- Blockquote inline CTA #1
- H2: Why Indian QSR is ready for server robots in 2026 (labour + footfall context)
- H2: What a DINERBOT actually does on a QSR floor (KEENON T10 / T9 specifics + video link)
- H2: The ROI math — three years, in INR (canonical 12-table chain scenario)
- H2: What could go wrong — and how to de-risk (honesty section)
- H2: Procurement & financing in India (CAPEX vs RaaS, GST, HSN, BCD, AMC)
- H2: How Mobilise delivers — the MALL difference
- [HUMAN INPUT REQUIRED: pilot or case study]
- ## FAQ (6-8 H3 Q&As, plain markdown for AI extractability)
- Blockquote end-of-article CTA + WhatsApp anchor
- Italic sign-off

## Internal links planned

- `/products/t10` (DINERBOT T10 product page) — primary product link
- `/products/t9` (DINERBOT T9) — entry-tier comparison
- `/blog/hotel-room-service-robot-roi` — sister ROI post (cluster strength)
- `/blog/service-robots-india-tipping-point` — pillar context
- `/contact` — discovery call CTA
- `/about` — MALL × KEENON partnership

## External links planned

- nrai.org (NRAI homepage) — labour/market framing
- ibef.org (Tourism & Hospitality) — sector context
- fssai.gov.in — food-contact guidance
- keenon.com/en — DINERBOT T10 official page
- KEENON official YouTube — product video (link, not iframe, until component supports)

## Banned-phrase guardrail check (manual grep before save)

Run after draft is written: grep against BLOG-STYLE.md table (delve, tapestry, seamless, robust, leverage, etc.) and BRAND.md off-limits superlatives (world-first, leading, best, only).
