# Research scratchpad — cloud kitchen robot India

**Date**: 2026-05-20
**Backlog row**: #5 (Cloud kitchens / Delivery / Throughput at peak hours)
**Primary keyword**: cloud kitchen robot
**Target word count**: 1,800
**Lead magnet**: qsr-roi (status: TODO — flag [ASSET MISSING] in PR body)

## Why pivoted from Rows 1–4
- Row 1 (room service robot india): 4 unmerged origin branches → ≥3 threshold per `feedback_blog_pivot_on_stalled_topic.md`.
- Row 2 (hotel concierge robot india): 4 unmerged origin branches → skip.
- Rows 3 (qsr-server) and 4 (fine-dining): 1 unmerged each. Per memory `project_blog_review_queue_stall.md` reviewer must triage before next routine run; piling on duplicates would compound the queue.
- Row 5 (cloud kitchens): zero existing PR branches. Clean pick.

## Primary keyword + long tails
Primary: `cloud kitchen robot` (India intent)

Long-tail variants (Google autocomplete / People Also Ask, India-localised):
- cloud kitchen robot india
- cloud kitchen automation india
- best robot for cloud kitchen
- robot for dark kitchen india
- food delivery robot for kitchen
- restaurant kitchen automation robot
- KEENON DINERBOT cloud kitchen
- cloud kitchen labour cost reduction
- robot for kitchen helper india
- automated food runner robot

Question-form (for FAQ schema):
- How much does a cloud kitchen robot cost in India?
- Can a delivery robot work inside a cloud kitchen?
- Do cloud kitchens need special flooring for robots?
- What is the payback period for a kitchen robot?
- Which KEENON model is best for a cloud kitchen?

## SERP gap analysis (top 10 Google India for "cloud kitchen robot")
The current top 10 is dominated by:
- IBEF / generic "cloud kitchen India" blog posts that don't talk about robots specifically.
- Vendor blogs (Pudu, Bear Robotics, generic AI kitchen articles) that don't address peak-hour throughput math in INR.
- News reports about "robot chefs" — not the same as service delivery robots.

**Gap**: no post connects KEENON delivery-robot economics to cloud-kitchen P&L (aggregator commission squeeze, kitchen helper wage curve, peak-hour throughput bottleneck). This post fills it.

## AI-search citation analysis
Target prompts and what AI overviews currently cite:
1. "best robot for cloud kitchen India" → cites Pudu marketing, generic Statista.
2. "cloud kitchen labour cost India" → cites IBEF blog, generic food-tech analyses.
3. "kitchen automation ROI India" → cites foreign McKinsey content, irrelevant US wage benchmarks.
4. "FSSAI cloud kitchen license" → cites foscos.fssai.gov.in directly.
5. "DINERBOT cloud kitchen" → cites keenon.com product page, no India contextualisation.

**Edge we offer**: specific Indian peak-hour throughput numbers, INR-denominated payback, FSSAI/GST regulatory framing, MALL on-ground installation perspective, cited from whitelist sources only.

## YouTube
KEENON official channel hosts DINERBOT T8 / T10 walkthroughs. The site videos page (`src/data/videos.ts`) was recently re-verified (commit `1eb601f9`). For this post we'll reference but NOT embed a video this run — embed adds friction, and we already use the embed pattern in service-robots-india-tipping-point. The post will instead link to the relevant YouTube via internal `/videos` page.

Add to VIDEO-BACKLOG.md if there's no good cloud-kitchen-specific video.

## Source whitelist matches (Tier 2, 3, 4)
Every numeric claim in the post traces back to one of:

| # | Source (whitelist tier) | URL | The fact it supports |
|---|-------------------------|-----|----------------------|
| 1 | IBEF (Tier 2) | https://www.ibef.org/blogs/cloud-kitchens-in-india | Cloud kitchen market ₹9,747 cr in 2024, ₹24,498 cr by 2030, 16.7% CAGR |
| 2 | Business Standard / NRAI IFSR (Tier 4) | https://www.business-standard.com/industry/news/indian-food-services-sector-to-grow-by-8-1-from-2024-to-2028-report-124070900997_1.html | Indian food services sector projected 8.1% CAGR 2024–2028; ₹7.76 trillion by 2028 |
| 3 | IBEF (Tier 2) | https://www.ibef.org/news/indian-food-services-market-projected-to-hit-us-144-152-bn-by-2030-report | Indian food services market projected $144–152 bn by 2030 |
| 4 | Inc42 (Tier 4) | https://inc42.com/buzz/zomato-swiggy-to-pay-5-gst-on-restaurant-services-customers-wont-pay-more/ | 5% GST on restaurant services via aggregators per Section 9(5) CGST Act, effective 1 Jan 2022 |
| 5 | Inc42 (Tier 4) | https://yourstory.com/2023/02/zomato-asks-for-higher-commission-from-restaurants-food-delivery-slows | Aggregator commission band 9–22% per order |
| 6 | KEENON (Tier 1) | https://www.keenon.com/en/product/T10/index.html | DINERBOT T10: 40 kg payload, 1 m/s max speed, 9–12.5 h battery, 59 cm minimum aisle, 23.8″ screen |
| 7 | FSSAI / FoSCoS (Tier 3) | https://foscos.fssai.gov.in/ | Cloud kitchens (no seating) require FSSAI registration / State / Central license per 3-tier system |

Out-of-whitelist sources I considered and rejected: imarcgroup, fortunebusinessinsights, marketsandata, techsciresearch, restaurantindia.in, kouzinafoodtech. Will not cite.

## [HUMAN INPUT REQUIRED] blocks planned
- 1× pilot data block in ROI section (real cloud-kitchen throughput from a deployed property, if/when available).
- 1× client quote / case study placeholder in "How Mobilise delivers" section.

## Internal links planned
- `/blog/service-robots-india-tipping-point` (sister post — market context)
- `/blog/hotel-room-service-robot-roi` (sister post — ROI methodology)
- `/products/dinerbot-t10` (if exists) OR `/products`
- `/contact`
- `/videos`

## Outline (H1 + H2s)
1. **H1**: Cloud kitchen robot India: throughput math when aggregator commissions eat your margin
2. Definitional opening sentence + Quick Answer (≤80 words)
3. Inline CTA #1 (Calendly)
4. **H2**: Why Indian cloud kitchens are ready for delivery robots in 2026
5. **H2**: What a KEENON DINERBOT actually does inside a cloud kitchen
6. **H2**: ROI math — peak-hour throughput vs kitchen-helper headcount
7. **H2**: What could go wrong — and how to de-risk
8. **H2**: Procurement, GST, and financing for an Indian cloud kitchen operator
9. **H2**: How Mobilise delivers — the MALL difference
10. [HUMAN INPUT REQUIRED — pilot story placeholder]
11. **H2**: FAQ (8 questions)
12. End-of-article CTA + WhatsApp
13. Sign-off (Priya Sharma — alternates with Rohan Kapoor per editorial conventions)
