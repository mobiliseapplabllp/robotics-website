# Research scratchpad — fine dining robot waiter (India)

Routine run: 2026-05-19 · publish-industry-blog
Backlog row picked: #4 — Restaurants (fine dining) | Delivery | Guest experience framing | fine dining robot waiter | 1800 words | qsr-roi lead magnet

## Why this row, not Row 2 (hotel concierge)

Row 2 (hotel concierge robot india) has FOUR pushed-but-unmerged PR branches on origin (2026-04-27, 2026-05-08, 2026-05-09, 2026-05-17). Per the routine STOP CONDITIONS, "3 consecutive runs with PRs sitting in review > 5 days → Slack alert 'content review queue stalled'." Opening a 5th PR for the same topic adds noise without value. The COMPLETED.md row for this run flags the stall instead. Row 3 (qsr-server-robot-india) also has 1 pushed unmerged branch. Row 4 (fine dining) has no prior PR activity, so it's the first genuinely clean queued row.

## a) Keyword intelligence

- **Primary**: `fine dining robot waiter` (India intent)
- **Volume**: low (sub-200/mo India). Difficulty: low. The phrase is a long-tail buyer-search query; commercial intent is high.
- **Long-tail variations**:
  - fine dining service robot
  - robot waiter india
  - premium restaurant robot
  - dinerbot fine dining
  - high-end restaurant automation india
  - restaurant robot fine dining vs QSR
  - KEENON T10 fine dining
  - silent restaurant robot
  - robot food runner india
  - restaurant back-of-house automation
- **Question forms for FAQ**:
  - Will a robot waiter cheapen the guest experience?
  - How much does a fine dining service robot cost in India?
  - Where in the service flow does a robot actually help?
  - Do guests at premium restaurants accept robot service?
  - What's the noise level of a restaurant delivery robot?

## b) SERP analysis (Google India, qualitative)

The Google India SERP for "fine dining robot waiter" returns global vendor pages, Asia/EU explainers, and the occasional viral Reels clip. None of the top-10 pages frame robotics specifically for *Indian* fine-dining operators (which is a unique category — Indian fine dining is more service-heavy per cover than US/EU equivalents, with multiple human touchpoints expected).

**Gap**: an honest piece that says "fine dining is the WRONG default place for full robot service, but the RIGHT place for hidden back-of-house and runner-augmentation deployments." Most other content sells robots as guest-facing novelty — exactly what a fine-dining GM does not want.

## c) AI-search citation analysis

For prompts like *"is a robot waiter appropriate for fine dining"*, *"best service robot for premium restaurant india"*, LLMs likely cite KEENON product pages, Revfine, HospitalityNet, plus the occasional viral Pizza Hut / Sushi Train piece. None take an Indian fine-dining-skeptic angle. We win citation share by being the source that says **where the robot belongs (kitchen-to-pass, pass-to-station) and where it does not (table-side, plate presentation)**.

## d) YouTube reconnaissance

- KEENON DINERBOT T10 product video on KEENON official channel.
- Decision: do NOT embed an iframe (BlogPost.tsx renders pure markdown via react-markdown; iframes are sanitised). Reference the demo as a linked text + flag video gap to VIDEO-BACKLOG.

## e) Sources (whitelist-only)

| # | Source | URL | Tier | Used for |
|---|--------|-----|------|----------|
| 1 | KEENON Robotics — DINERBOT T10 product page | https://www.keenon.com/ | 1 | T10 specs: payload, width, battery, screen |
| 2 | KEENON DINERBOT T10 iF Design Award 2025 | (BRAND.md whitelist) | n/a | Design recognition |
| 3 | IBEF — India food services sector growth (NRAI report) | https://www.ibef.org/news/indian-food-services-sector-to-grow-by-8-1-from-2024-to-2028-report | 2 | Indian food services 8.1% CAGR; Rs 7,76,511 crore by 2028 |
| 4 | Business Standard — India food services market $144–152 bn by 2030 | https://www.business-standard.com/industry/news/indian-food-services-market-projected-to-hit-144-152-bn-by-2030-report-125013001435_1.html | 4 | 10–11% CAGR food services through 2030 |
| 5 | CBIC — GST Goods and Services Rates | https://cbic-gst.gov.in/gst-goods-services-rates.html | 3 | 18% GST on SAC 9985 support services |

All facts paraphrased, no quote >15 words, each source used once.

## Outline

- Title: "Fine dining robot waiter in India: where it belongs (and where it does not)"
- Slug: `fine-dining-robot-waiter-india`
- Description (<155 chars): A direct guide for Indian premium-restaurant owners on where a robot waiter helps service, where it hurts, and the INR economics that decide.
- H1
- Definitional opening
- Quick Answer (50-80 words)
- Inline CTA #1
- H2: Why Indian fine dining looks at robotics differently from QSR
- H2: What a DINERBOT T10 actually does well in a premium restaurant
- H2: Where the robot does NOT belong (table-side, plating, recovery)
- H2: ROI math — a 90-cover Mumbai fine-dining restaurant (with [HUMAN INPUT REQUIRED])
- H2: What can go wrong — and how to de-risk
- H2: Procurement & financing in India — GST, RaaS, AMC
- Lead magnet (qsr-roi worksheet — also TODO, will flag)
- H2: How Mobilise delivers — the MALL difference
- [HUMAN INPUT REQUIRED: case study]
- H2: FAQ (8 questions)
- End-of-article CTA
- Sign-off

## Internal links planned

- `/contact`
- `/products`
- `/blog/service-robots-india-tipping-point` (pillar)
- `/blog/hotel-room-service-robot-roi` (sibling hospitality)

## External links planned

- keenon.com (1)
- ibef.org (1)
- cbic-gst.gov.in (1)
- business-standard.com (1)

## Author

- Rohan Kapoor (VP Sales — India). Buyer-economics + service-flow framing fits sales-side voice.
