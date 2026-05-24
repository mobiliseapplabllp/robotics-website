# Research scratchpad — hotel concierge robot India (mid-scale & business hotels)

Routine run: 2026-05-19 · publish-industry-blog
Backlog row picked: #2 — Hotels (business/mid) | Guiding | Check-in concierge | hotel concierge robot india | 1800 words | hotel-roi lead magnet

Backlog row #1 was already shipped as `src/content/blog/posts/hotel-room-service-robot-roi.md`, so #2 is the first unshipped row.

## a) Keyword intelligence

- **Primary**: `hotel concierge robot india`
  - Volume estimate (India): low (sub-100/mo) — long-tail but extremely high commercial intent. Difficulty: low (<20 in Ahrefs scale).
- **Long-tail variations (autocomplete / PAA seeds)**:
  - hotel concierge robot price india
  - hotel front desk robot india
  - robot receptionist india
  - check-in robot hotel india
  - AI concierge for hotels india
  - hotel robot supplier india
  - business hotel automation india
  - KEENON guiding robot india
  - humanoid receptionist hotel
  - mid-scale hotel technology india
- **Question forms for FAQ**:
  - How much does a hotel concierge robot cost in India?
  - Can a robot replace the front desk?
  - Do guests actually use hotel robots?
  - What is the payback for a hotel concierge robot?
  - Is the KEENON guiding robot suitable for Indian hotels?

## b) SERP analysis (Google India, English, May 2026, qualitative)

The Google India SERP for "hotel concierge robot india" is thin. Top results are global vendor pages, US/EU case studies, and trade-press explainers — none written specifically for Indian buyers. Pattern:

- Vendor product pages (KEENON, Pudu, SoftBank Pepper) — feature-led, no INR pricing, no India context.
- Trade explainers (Revfine, HospitalityNet) — global, written for hotel chains with HQ tech budgets.
- Listicles ("17 examples of robots in hospitality") — surface-level, no buyer help.

**Gap**: no Indian-buyer-grade post that connects (i) what the robot actually does at an Indian front desk, (ii) honest INR economics for a 120-180 key mid-scale hotel, (iii) GST/import/AMC realities, (iv) failure modes a GM should plan for.

## c) AI-search citation analysis (LLM answer patterns)

For prompts like *"best hotel concierge robot for India"*, *"how much does a robot receptionist cost in India"*, *"can a robot replace check-in staff"* — ChatGPT / Perplexity / Google AI Overviews are likely to cite:

- KEENON's own product pages
- HospitalityNet / Revfine explainers
- Global press releases on PR Newswire (Shangri-La XMAN deployment, etc.)
- Wikipedia (service robot, robotics in hospitality)
- Some Reddit / Quora opinion threads

None of these answer the **India-specific operating reality**: peak check-in compression at 14:00 IST, GST input credits, BIS-marked power supplies, Hindi-language voice models, AMC response in tier-2 cities, RaaS vs CAPEX choice. We win citations by being the source that lists these.

## d) YouTube reconnaissance

- KEENON G2 demo: https://www.youtube.com/watch?v=eqOReEjlZSk — official channel, ~1-2 min product demo. Suitable to embed.
- KEENON has limited India-specific footage. Most hotel-front-desk videos are SE-Asia / EU deployments.

Decision: reference the G2 demo as an inline link rather than embedding a video iframe — the current `BlogPost.tsx` renders pure markdown via react-markdown and does not whitelist iframes. Embedding a YouTube iframe would either render as raw text or get sanitised. Add a `[HUMAN INPUT REQUIRED]` note flagging the missing video component.

Also add to `docs/routines/VIDEO-BACKLOG.md`: need an India-shot 30-60s clip of a G2 / W3 in a Bengaluru/Mumbai hotel lobby.

## e) Sources (whitelist-only)

| # | Source | URL | Tier | Used for |
|---|--------|-----|------|----------|
| 1 | KEENON Robotics — Guiding Robot G2 product page | https://www.keenon.com/ | 1 | G2 capabilities and sensor stack |
| 2 | KEENON × Shangri-La humanoid press release (PR Newswire) | https://www.prnewswire.com/apac/news-releases/keenon-humanoid-robot-joins-hotel-workforce-pioneering-worlds-first-general-purpose--special-purpose-robot-collaboration-model-302599869.html | 1 | XMAN-R1 reception use case (precedent) |
| 3 | IBEF — Tourism & Hospitality Industry in India | https://www.ibef.org/industry/tourism-hospitality-india | 2 | Hotel industry market size US$ 32B FY20 → US$ 52B FY27 |
| 4 | IBEF — Growth of Hotel Industry in India | https://www.ibef.org/research/case-study/growth-of-hotel-industry-in-india | 2 | India hospitality market projection US$ 24.61B (2024) → US$ 31.01B (2029) |
| 5 | CBIC — GST Goods and Services Rates | https://cbic-gst.gov.in/gst-goods-services-rates.html | 3 | 18% GST baseline for service support; HSN 9985 |
| 6 | KEENON — DINERBOT T10 iF Design Award 2025 (per BRAND.md) | (BRAND.md) | n/a | Design quality reference for related KEENON products |

All citation facts paraphrased; no quote exceeds 15 words; no source cited more than once for the same claim.

## Numbers I am NOT going to use (cannot cite from whitelist)

- "68% occupancy in branded India hotels FY24-25" — primary source Horwath HTL / Hotelivate, neither on whitelist.
- "40-60% routine inquiries handled by robots" — sourced from US vendor blog, not on whitelist.
- "Hospitality attrition rate of X%" — no whitelist source found; will reference qualitatively as "high attrition" without a number.
- Pricing comparisons against named competitors (Pudu, SoftBank) — would need named sources; will keep KEENON-only.

## Outline

- Title: `Hotel concierge robot India: a front-desk buyer's guide for mid-scale and business hotels`
- Slug: `hotel-concierge-robot-india`
- Description (<155 chars): `A practical guide for Indian hotel GMs evaluating a concierge robot: what it does at the front desk, INR economics, GST, and how to pilot.`
- H1: matches title intent
- Definitional sentence: pattern compliant
- Quick Answer: 50-80 words
- Inline CTA #1
- H2: Why business and mid-scale Indian hotels are ready for a concierge robot
- H2: What a concierge robot actually does at an Indian front desk
- H2: ROI math — a 140-key business hotel in Bengaluru (with [HUMAN INPUT REQUIRED])
- H2: What can go wrong — and how to de-risk
- H2: Procurement & financing in India — GST, HSN, RaaS, BIS
- Lead magnet card → flag `[ASSET MISSING: hotel-roi.pdf still TODO per BLOG-ASSETS.md]`
- H2: How Mobilise delivers — the MALL difference
- [HUMAN INPUT REQUIRED: India deployment case study]
- H2: FAQ (8 questions)
- End-of-article CTA (WhatsApp + Contact)
- Sign-off (italic, Rohan)

## Internal links planned

- `/contact` — primary CTA
- `/products` — KEENON portfolio
- `/blog/service-robots-india-tipping-point` — market context pillar (already shipped)
- `/blog/hotel-room-service-robot-roi` — sibling hospitality post (already shipped)
- `/industries/hotels` — industry landing

## External links planned

- keenon.com (1)
- ibef.org (1)
- cbic-gst.gov.in (1)
- prnewswire.com (1, KEENON release)

## Author

- Rohan Kapoor (VP Sales — India). Matches the buyer-economics angle. Priya Sharma (CTO) is reserved for technology / market trend posts.
