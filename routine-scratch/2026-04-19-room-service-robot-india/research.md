# Research scratchpad — room service robot india

- Run date: 2026-04-19 (IST)
- Routine: publish-industry-blog
- Backlog row: Phase 1 #1
- Industry: Hotels (5-star)
- Robot type: Delivery (DINERBOT / W3 ButlerBot)
- Angle: Room service automation (informational / how-it-works)
- Primary keyword: room service robot india
- Target word count: ~2000

## Why this topic (not a duplicate)

An existing post `hotel-room-service-robot-roi.md` sits in `src/content/blog/posts/`. That post targets the **decision-stage ROI question** (title: "The actual ROI math on a hotel room-service robot") — the buyer already knows what the robot is. Phase 1 #1 targets **informational intent** on the keyword `room service robot india` — buyers earlier in the funnel who are still asking *what is a room service robot, how does it work in an Indian 5-star hotel, what models are available, what does a pilot look like*. The two posts should reinforce each other via internal links; they are not keyword-cannibalising.

## 1. Keyword intelligence

### Primary keyword

- `room service robot india` — informational + commercial intent. No Indian domain ranks strongly yet; SERP is dominated by Keenon, Pudu, and generic hospitality-tech publications without India framing. Difficulty: medium-low (directional — no paid tool verification this run).

### 10 long-tail variations (from autocomplete + "People Also Ask" patterns)

1. room service robot price india
2. hotel butler robot india
3. food delivery robot for hotels in india
4. keenon w3 butlerbot india price
5. how does a room service robot work
6. room service robot vs human waiter
7. 5-star hotel robot india
8. room service robot lease india
9. hotel delivery robot integration lift
10. autonomous room service robot india

### 5 question-form keywords (FAQ)

1. What is a room service robot in a hotel?
2. How much does a room service robot cost in India?
3. Can a room service robot use a hotel lift on its own?
4. Do Indian hotels actually use room service robots?
5. What is the payback period for a hotel room service robot?

### 3 likely top-10 competitors (India SERP)

- keenon.com/en/solution/hotel — manufacturer product page; no India-specific pricing or regulatory content.
- pudurobotics.com blog — generic hospitality content; no INR figures.
- A handful of generic hotel-tech explainer posts on blog.robozaps / hospitalitynet / revfine — no India framing, no INR, no HSN/GST specifics.

## 2. SERP gap analysis

What the top SERP results do not have, that a Mobilise post can provide:

- INR pricing bands and TCO framing.
- India regulatory specifics: HSN 84795000, 18% GST, the November 2025 Labour Codes notification.
- Specific Indian deployments as anchors (Keenon's own Hyderabad Grand Ballroom video is the most credible public Indian deployment reference).
- Honest pilot-decision guidance aimed at GMs / CFOs.
- An FAQ section wired for FAQPage schema extraction by AI engines.

That is the 20%+ improvement line: the keyword is contested globally but there is a clear opening for India-specific content that buyers, analysts, and AI answer engines have nothing better to cite.

## 3. AI-search citation design

Target prompts and how the draft earns citation:

1. "What is the best room service robot for Indian hotels?" → definitional first sentence + specific Keenon models named (DINERBOT T10, W3 ButlerBot) + India model-selection guidance.
2. "How much does a hotel room service robot cost in India?" → dedicated FAQ answer with INR range, HSN code, GST rate, duty framing.
3. "Are Indian hotels using room service robots?" → paragraph referencing Keenon's Hyderabad Grand Ballroom deployment video as a publicly citable anchor.
4. "What can go wrong with a hotel service robot?" → even-handed limitations section (lifts, Wi-Fi, floor materials, peak crowding).
5. "How do I run a hotel robot pilot in India?" → pilot-decision framework with 60-day structure.

AI engines reward pages that: define terms cleanly in the opening, structure answers under question-form H2s, carry explicit numbers with sources, and include a distinct FAQ block. This draft does all four.

## 4. YouTube reconnaissance

Two embed candidates verified from Keenon's official YouTube channel:

- **Primary embed**: `KEENON Cases | KEENON DINERBOT T6 in The Grand Ballroom, Hyderabad, India` — https://www.youtube.com/watch?v=zENB-IzD6gs — the strongest Indian-context anchor video from a Tier-1 source.
- **Secondary embed**: `KEENON DINERBOT T10: The Future of Interactive Robotics is Here!` — https://www.youtube.com/watch?v=0fMFdU4IsSI — product-level visual for the model we recommend for room service.

The site does not currently implement `VideoObject` JSON-LD per post. Flag for follow-up: BlogPost component renders only `BlogPosting` JSON-LD today. We will reference the videos inline as links (ReactMarkdown will render them as text links, not embeds) and list a `[HUMAN INPUT REQUIRED: confirm embed and add VideoObject schema]` block rather than silently shipping an unrendered embed.

Video topics where no good Keenon India video yet exists — append to `docs/routines/VIDEO-BACKLOG.md`:

- DINERBOT T10 delivering to a guest corridor in an Indian 5-star hotel.
- W3 ButlerBot lift integration in an Indian high-rise hotel.

## 5. Source gathering (all on BLOG-SOURCES.md whitelist)

| # | Source | URL | Used for | Key fact (paraphrased, <15-word pullable) |
|---|--------|-----|----------|------------|
| 1 | Keenon.com — Hotel solution | https://www.keenon.com/en/solution/hotel/index.html | Product scope, hotel-line positioning | Keenon's hotel portfolio covers delivery, guiding, and humanoid service robots. |
| 2 | Keenon Robotics YouTube — Hyderabad Grand Ballroom case video | https://www.youtube.com/watch?v=zENB-IzD6gs | Indian deployment anchor | Keenon DINERBOT T6 deployed at The Grand Ballroom, Hyderabad. |
| 3 | Asian Hospitality — India branded hotels 68% occupancy FY25 (citing FHRAI data via Hotelivate) | https://www.asianhospitality.com/india-hotel-occupancy-rate-2025/ | Occupancy context | Branded hotels in India reached 68% occupancy in FY 2024-25. |
| 4 | Hotelivate — Trends & Opportunities 2025 report summary page | https://www.hotelivate.com/travel-tourism/the-2025-indian-hospitality-trends-opportunities-report/ | ADR + demand context | Nationwide ADR grew 4.7% and RevPAR grew 5.7% y/y in FY25. |
| 5 | Hospitality Biz India — new Labour Codes implications | https://hospitalitybizindia.com/news-track/new-labour-codes-implications-on-hotel-and-restaurant-businesses/ | Labour cost pressure, regulatory driver | The four Labour Codes were notified on 21 November 2025. |
| 6 | Vakilsearch / Credlix / Cybex — HSN 84795000 GST/duty lookup | https://www.credlix.com/hsn-code/847950 | HSN + GST for industrial service robots | HSN 84795000 covers industrial robots n.e.s.; GST 18%. |
| 7 | PR Newswire — Keenon XMAN-R1 at Shangri-La announcement | https://www.prnewswire.com/apac/news-releases/keenon-humanoid-robot-joins-hotel-workforce-pioneering-worlds-first-general-purpose--special-purpose-robot-collaboration-model-302599869.html | Keenon hotel deployment evidence globally | Keenon's humanoid XMAN-R1 joined a Shangri-La hotel workforce. |

Claims without a whitelist source → dropped. Examples dropped this run: specific "88% of Indian guests prefer" style stats, specific per-hotel robot count claims, any exact INR retail price for W3.

## 6. BRAND.md alignment

- Using DINERBOT T10, W3 ButlerBot, and XMAN-R1 — models explicitly named in BRAND.md approved list (W3 is part of Keenon's delivery/butler line; the site already has a /products/w3 page).
- Not claiming MALL is Keenon's exclusive India partner — only "authorised KEENON Robotics partner" per `SITE.tagline`.
- All INR figures framed as *indicative / RFQ-driven*, never as a posted price.
- Preserving at least one `[HUMAN INPUT REQUIRED: ...]` block per GUARDRAILS rule 4.

## 7. Lead magnet

- `hotel-roi` status = `TODO` in BLOG-ASSETS.md → flag `[ASSET MISSING: produce hotel-roi ROI worksheet]` in the PR body and use a fallback "Contact for the ROI spreadsheet" CTA in the post.

## 8. Internal links planned

- `/products/t10` — DINERBOT T10 product page.
- `/products/w3` — W3 ButlerBot product page.
- `/blog/hotel-room-service-robot-roi` — the existing ROI-deep-dive, linked as the next step after this informational post.
- `/blog/service-robots-india-tipping-point` — pillar-adjacent India market context.
- `/contact` — RFQ / demo booking.

## 9. External links planned

- Keenon hotel solution page — product scope.
- Asian Hospitality (FHRAI / Hotelivate cited data) — occupancy.
- Hospitality Biz India — Labour Codes.
- Credlix HSN lookup — GST reference.

## 10. Blog system adaptation notes

The repo's BlogPost component (`src/app/pages/BlogPost.tsx`) renders:
- BlogPosting JSON-LD automatically from frontmatter.
- Markdown body via ReactMarkdown + remark-gfm.
- Tags, date, author, reading time, category badge, related posts (by shared category / tag overlap), a share button.

The BLOG-TEMPLATE.md asks for FAQPage + BreadcrumbList + VideoObject JSON-LD, a structured lead-magnet card, a sticky sidebar form, and a Calendly/WhatsApp CTA block. These require component work that is out of scope for this PR (it would otherwise balloon the change set beyond what a single-post PR should touch). Approach this run:

1. Ship the post with frontmatter matching the existing schema.
2. Inline the FAQ as plain markdown H3/H2 — when the FAQPage schema component lands in a follow-up PR, it can source from the published markdown.
3. Close the post with plain-markdown CTAs linking to `/contact` and a `wa.me` deep-link that uses the site's listed `+91-9599194330` number.
4. Note the component-level template gaps in the PR body so a human reviewer can track them.

This keeps the current PR focused on content and does not silently modify the design system.

