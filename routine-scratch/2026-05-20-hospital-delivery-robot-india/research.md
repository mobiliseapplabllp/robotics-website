# Research scratchpad — hospital delivery robot india

Date: 2026-05-20 (IST)
Routine: publish-industry-blog
Topic source: BLOG-BACKLOG.md Row 6 (Hospitals multi-specialty / Delivery DINERBOT / pharmacy-to-ward / 2,500 words / hospital-pilot lead magnet)

## Pivot rationale

| Row | Status check | Action |
|---|---|---|
| 1 — room service robot india | Already shipped as `src/content/blog/posts/hotel-room-service-robot-roi.md` (backlog drift per memory) | Skip — also has 3 unmerged origin branches |
| 2 — hotel concierge robot india | 4 unmerged origin branches (2026-04-27, 05-08, 05-09, 05-17) → triggers ≥3 pivot rule | Skip |
| 3 — restaurant server robot india | 1 unmerged origin branch from 2026-05-08, 12 days stalled | Skip (review queue stall per memory) |
| 4 — fine dining robot waiter | 1 unmerged origin branch from 2026-05-19 | Skip (duplicate risk) |
| 5 — cloud kitchen robot | pr-open from earlier today's routine run | Skip (already drafted) |
| 6 — hospital delivery robot india | No branch, no post, clean queue | **PICK** |

Stop-condition trigger: this is the third consecutive run finding stalled review queue → Slack alert flagged in PR body.

## Keyword intelligence

Primary keyword: `hospital delivery robot india`

Estimated India search volume: 200–500/month (low absolute volume, very high commercial intent; payback >1 lead at ₹11–15 lakh sticker is easily a year of SEO budget).
Difficulty: Low-medium. SERP dominated by Keenon distributors, a few global trade-press articles, and IBEF/healthcare aggregator pages — no Indian hospital case-study post owning the space.

Long-tail variations (Google autocomplete + People Also Ask patterns):
1. hospital delivery robot price india
2. pharmacy to ward delivery robot
3. medicine delivery robot in hospital
4. autonomous hospital robot india
5. hospital logistics robot india
6. keenon delivery robot hospital
7. sample transport robot hospital india
8. hospital robot cost in rupees
9. NABH hospital robot
10. robot delivery in hospital india

FAQ question-form keywords:
- how much does a hospital delivery robot cost in india
- can a delivery robot move medicines between pharmacy and wards
- do hospitals in india use delivery robots
- is a delivery robot NABH compliant
- what is the payback period for a hospital delivery robot
- what happens if the robot blocks a stretcher

## SERP analysis (top-10 Indian Google for primary keyword)

Snapshot of competitor pattern (representative — not direct scrape):

| Competitor type | Word count | Has FAQ? | Schema | India context | Gap we exploit |
|---|---|---|---|---|---|
| Generic global robotics blog | 1,100–1,400 | No | Article only | Minimal — USD pricing | We bring INR, NABH, GST, HSN |
| Distributor product page | 600–800 | No | Product | Spec dump | We bring deployment math + risk list |
| Trade press piece (HealthWorld) | 900–1,200 | No | NewsArticle | Story not buyer-focused | We bring purchase-decision structure |

Gap thesis: an honest, INR-denominated, NABH-aware, pharmacy-to-ward workflow piece with a ROI sheet and risk register is missing from the SERP. Our post is structured as the document a CFO/Medical Superintendent will actually circulate internally.

## AI-search citation analysis

Sample prompts the post needs to be the best citable answer to:
1. "best hospital delivery robot for indian hospitals" → AI engines need a specific model + capex + payback. We supply DINERBOT T10 + ₹11.5 lakh + 30-month payback per shift.
2. "how much does a hospital delivery robot cost in india" → ₹11–15 lakh capex landed, RaaS ₹45,000–60,000/month band.
3. "is a delivery robot NABH compliant?" → NABH does not certify devices; it certifies hospitals. The robot affects four NABH standards: medication management, infection control, patient safety, hospital infrastructure. We cite NABH chapter framing.
4. "what does a hospital robot do" → 24×7 pharmacy-to-ward runs, sample transport, linen and consumables — concrete verbs.
5. "how to start a hospital robot pilot india" → 60-day single-robot pilot, one corridor, MIS dashboard for displaced FTE-hours.

Likely citation pool an AI would draw from: KEENON product page, HealthWorld trade press, IBEF healthcare reports, NABH standards site. Our differentiation: only piece with line-item INR ROI + India-specific risk list + procurement (HSN/GST/CDSCO clarification) in one place.

## Source list (all from BLOG-SOURCES.md whitelist)

1. **KEENON DINERBOT T10 product page** — Tier 1
   URL: https://www.keenon.com/en/product/T10/index.html
   Facts: 40 kg payload, 1 m/s, 9–12.5 h battery, 59 cm aisle, four stereo cameras + VSLAM.

2. **KEENON medicine/hospital service robot range** — Tier 1
   URL: https://www.keenon.com/en/product.html
   Facts: existence of DINERBOT-T series for non-restaurant transport; corroborates use in hospital corridors.

3. **IBEF — Healthcare Industry in India** — Tier 2
   URL: https://www.ibef.org/industry/healthcare-india
   Facts: Indian healthcare market size ~US$ 372 bn by 2025; hospital sector specifically projected at strong CAGR; pertinent backdrop for capital purchase pitch.

4. **IBEF — Indian Pharmaceuticals Industry** — Tier 2
   URL: https://www.ibef.org/industry/pharmaceutical-india
   Facts: in-hospital pharma logistics volume; supplementary backdrop.

5. **NABH — Accreditation Standards for Hospitals** — Tier 3
   URL: https://www.nabh.co/hospital
   Facts: 5th edition standards (post-2020) cover medication management (MOM), infection control (HIC), patient safety, hospital infrastructure (HIB); these are the four standards a delivery-robot deployment touches.

6. **CDSCO — Central Drugs Standard Control Organization** — Tier 3
   URL: https://cdsco.gov.in/opencms/opencms/en/Home/
   Facts: CDSCO regulates medical devices; a delivery robot transporting medicines is NOT a medical device unless it actively dispenses or modifies dose (Medical Devices Rules 2017). This clarifies a common procurement question.

7. **GST Council / gst.gov.in — HSN 8479** — Tier 3
   URL: https://www.gst.gov.in/
   Facts: industrial machinery not elsewhere classified — 18% IGST applicable on imported autonomous mobile robots typically under HSN 8479.50.00.
   (HSN classification supported by DGFT notifications — secondary reference.)

8. **Economic Times HealthWorld — hospital automation coverage** — Tier 4
   URL: https://health.economictimes.indiatimes.com/news/health-it
   Facts: India healthcare-IT and automation adoption uptrend post-COVID; framing only, no hard numbers cited.

9. **Robotics & Automation News — service robotics market** — Tier 4
   URL: https://roboticsandautomationnews.com/
   Facts: service-robot category overview for cross-checking model availability framing.

## YouTube reconnaissance

Search performed for "KEENON hospital robot", "DINERBOT T10 hospital", "Keenon medicine delivery hospital".

Selected embed candidates (verify URL live in PR review before merge):
- KEENON official channel — DINERBOT T10 product film (general purpose, includes hospital sequences). URL placeholder for reviewer to swap if a better hospital-specific film exists.
  Channel: KEENON Robotics (official)
  Duration: ~2 min

If no hospital-specific KEENON film exists, log to `docs/routines/VIDEO-BACKLOG.md` (see note below).

VIDEO-BACKLOG candidate to log:
> Topic: Indian hospital deployment of DINERBOT — request KEENON for a film or capture one at first MALL hospital pilot.

## Outline

Title: "Hospital delivery robot India: pharmacy-to-ward economics for a 250-bed hospital"
Slug: hospital-delivery-robot-india
Meta description (≤155 chars): "Hospital delivery robot India: INR payback, NABH fit, and the pharmacy-to-ward workflow that frees nurses for clinical work."

H1: Hospital delivery robot India: the pharmacy-to-ward case for a 250-bed hospital

Sections:
- Definitional opener
- Quick answer (50–80 words, plain paragraph)
- Inline CTA #1
- H2: Why Indian hospitals are ready for delivery robots in 2026
- H2: What a DINERBOT actually does inside a multi-specialty hospital
- H2: ROI math — pharmacy-to-ward runs vs nurse-and-attendant cost
- H2: What could go wrong — and how to de-risk
- H2: Procurement, GST, CDSCO, and NABH fit
- H2: How Mobilise delivers — the MALL difference
- [HUMAN INPUT REQUIRED — case study]
- H2: FAQ (8 questions)
- End-of-article CTA
- Sign-off

Primary keyword placements planned: title, H1, definitional sentence, quick answer first sentence, one H2, one FAQ, meta description, featured-image alt, last paragraph. ~8 placements across 2,500 words = ~0.3% density, on target.

Internal links planned:
1. Pillar — `/blog/service-robots-india-tipping-point` (cross-sector context)
2. Sibling — `/blog/cloud-kitchen-robot-india` (sister industry post, related-by-author voice)
3. Sibling — `/blog/hotel-room-service-robot-roi` (same DINERBOT model, different vertical)
4. Product — `/products/keenon-dinerbot-t10` (model page — verify route)
5. Contact — `/contact`

External links planned: KEENON product page, IBEF healthcare, NABH standards page, CDSCO home, gst.gov.in.

Lead magnet placement: hospital-pilot is TODO in BLOG-ASSETS.md → flag `[ASSET MISSING: produce hospital-pilot pilot checklist PDF]` in PR body. Do not link a dead URL; mention the asset in prose with `/contact` fallback.

YouTube embed placement: one in the "What a DINERBOT actually does..." section.

[HUMAN INPUT REQUIRED] blocks planned: 2 — one in ROI math (real pilot data) and one for case-study / pilot illustration. Template floor satisfied.

## Word count plan

Target: 2,500 (per backlog row). Draft should land 2,400–2,700.

## Banned-phrase pre-check

Before commit: grep file for delve, tapestry, navigate the complexities, in today's fast-paced world, unlock the potential, revolutionary, revolutionise, game-changer, game-changing, cutting-edge, seamless, seamlessly, empower, empowering, holistic, leverage, synergy, robust, best-in-class, world-class, paradigm shift, at the end of the day, moving forward, going forward, it's worth noting that, in conclusion, stand out from the crowd, take your, world-first, India's first, only (in superlative sense), best, leading.

## India-English check

Centre / metre / organise / analyse / colour / behaviour / catalogue / Bengaluru. No "center", "meter", "organize", "Bangalore".

## Editorial conventions to enforce (per memory project_blog_editorial_conventions)

- KEENON all-caps wordmark.
- Author rotation — Rohan Kapoor this run (Priya did cloud-kitchen). Role: COO.
- Blockquote inline CTA after Quick answer.
- Italic sign-off — "— Rohan".
- ₹/lakh formatting.
