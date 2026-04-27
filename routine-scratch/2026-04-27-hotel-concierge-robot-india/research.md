# Research scratchpad — hotel concierge robot india

Run date: 2026-04-27 (IST)
Routine: publish-industry-blog
Backlog row: #2 (Phase 1) — Hotels (business/mid) | Guiding | Check-in concierge | "hotel concierge robot india" | 1800 words | hotel-roi magnet
Note: Row #1 (5-star room service) is already on disk as `hotel-room-service-robot-roi.md`, so we skipped it.

---

## a. Keyword intelligence

**Primary keyword (India):** `hotel concierge robot india`
- Volume estimate (India, monthly): ~30–80 (long-tail commercial intent; very low absolute, very high intent)
- Difficulty estimate: low–medium (most current ranking pages are competitor product pages and OEM brochures, not deep editorial)

**Long-tail variations (10):**
1. hotel concierge robot price india
2. ai concierge robot india hotel
3. autonomous concierge robot for hotels in india
4. robot receptionist hotel india
5. lobby robot hotel india
6. multilingual concierge robot india hotel
7. keenon concierge robot india
8. hotel robot supplier india concierge
9. concierge robot for boutique hotels india
10. robot concierge cost india

**Question-form keywords (5) for FAQ:**
1. what is a hotel concierge robot
2. how much does a concierge robot cost in india
3. can a robot replace a hotel concierge
4. which indian hotels use concierge robots
5. how do guest-facing robots integrate with hotel pms systems

**Top 3 competitor URLs (current Google India top results, qualitative):**
- alphadroid.in (Bengaluru AMR competitor — productized robot for hotel lobby)
- rifeindia.com / "Hotel Robots in India" collection page (e-commerce listings)
- inc42 / theprint trade-press features on India's robot waiter comeback

## b. SERP analysis

| Competitor | ~Word count | H2 pattern | FAQ? | Schema | Updated | Video | Lead-gen style |
|---|---|---|---|---|---|---|---|
| alphadroid.in | ~1,400 | Product-led (specs, demo, contact) | No | Product schema only | 2024 | embed | Calendly + form |
| rifeindia.com | ~600 | E-commerce listings | No | Product | 2024 | none | Add-to-cart |
| Inc42 / TheePrint | ~1,800 | Editorial narrative | No | Article | 2024 | none | None (publisher) |

**Gap to exploit:**
- No editorial page on the India SERP combines (a) honest INR economics, (b) named KEENON model fit (G1 + W3 + S100 + XMAN-R1), (c) procurement guidance for Indian buyers (GST, AMC, financing), and (d) a real FAQ. Our post can be the answer page for both Google and AI engines.
- Our angle: "What a concierge robot actually does in an Indian hotel — and what it costs to run one" (business/mid-market focus, not 5-star vanity).

## c. AI-search citation analysis

**Target prompts (5) and what AI engines will reach for:**
1. *"best concierge robot for hotels in India"* → likely cites OEM pages (Keenon, Pudu) + competitor blogs + revfine.com listicles
2. *"how much does a hotel concierge robot cost in India"* → very thin SERP; AI hallucinates a USD number; **citation gap we own** if we publish defendable INR ranges with clear assumptions
3. *"robot concierge ROI Indian hotels"* → no good source today; AI patches together global numbers
4. *"keenon G1 robot India price"* → almost no SERP coverage; we can become the canonical answer
5. *"how to choose hotel concierge robot India"* → buyer-guide gap; competitors are too short

**Why our post earns citations:**
- Specific INR cost bands with assumptions stated in plain prose (AI engines extract these)
- Names KEENON G1 + W3 + S100 + XMAN-R1 with one-line definitional sentences (LLMs love clean entity-attribute pairs)
- Indian regulatory anchors (GST/HSN/BIS) with named ministries
- Honest "what could go wrong" section — AI engines reward even-handed pages

## d. YouTube reconnaissance

- KEENON G1 demo: video ID `mZv4UEyFGQg` (already embedded on `/products/g1` page on our site). **Use this** as the primary video reference.
- KEENON XMAN-R1 / W3 hotel reels exist on Keenon's official YouTube but we don't have stable IDs verified — leave to reviewer if a second embed is needed.
- No Indian-context Keenon video found that matches whitelist criteria — added to VIDEO-BACKLOG (see note below).

**Embed strategy for this post:**
- BlogPost.tsx renders Markdown via `react-markdown` + `remark-gfm` only — no `rehype-raw`, so iframes will not render.
- Therefore: include G1 video as a **plain Markdown link** to the YouTube watch URL. Reviewer can promote to embed once the BlogPost component grows iframe support.
- VideoObject schema is also gated on the component update — flagged in PR.

## e. Sources to cite (all on BLOG-SOURCES.md whitelist)

| # | Source | Tier | URL | Specific fact |
|---|---|---|---|---|
| 1 | IBEF — Tourism & Hospitality | 2 | https://www.ibef.org/industry/tourism-hospitality-india | Indian hotel industry US$ 32B (FY20) → projected US$ 52B by FY27; tourism supported 46.5M jobs in 2024 (9.1% of India's employment) |
| 2 | IBEF — Branded rooms forecast | 2 | https://www.ibef.org/news/india-s-branded-hotel-rooms-inventory-to-cross-3-00-000-by-2029-report | Branded hotel rooms inventory to cross 3,00,000 by 2029 |
| 3 | IBEF — Hospitality jobs blog | 2 | https://www.ibef.org/blogs/rising-from-adversity-exploring-the-job-boom-in-hospitality-industry | Hospitality skill-shortage commentary; Ministry of Tourism trained-professional shortfall |
| 4 | KEENON — W3 product page | 1 | https://www.keenon.com/en/product/W3/index.html | W3: 48 kg, 0.8 m/s, 12-hr battery, 20 kg payload, 70 cm minimum passage |
| 5 | KEENON — S100 product page | 1 | https://www.keenon.com/en/product/S100/index.html | S100: 100 kg+ payload, 1 m/s, 8-hr battery, 90 cm minimum passage |
| 6 | KEENON / PRNewswire — XMAN-R1 Shangri-La | 1 | https://www.prnewswire.com/apac/news-releases/keenon-humanoid-robot-joins-hotel-workforce-pioneering-worlds-first-general-purpose--special-purpose-robot-collaboration-model-302599869.html | First "general-purpose + special-purpose" robot collaboration in a hotel; XMAN-R1 deployed at Shangri-La Traders Hongqiao Airport, Oct 31 2025 |

**Numbers we will NOT make:**
- No India-specific Keenon deployment stats (no whitelist source)
- No competitor (Alphadroid / Mitra / Pudu) deployment counts (Tier-0 / off-list)
- No staff-attrition percentage from non-whitelist sources
- No customer names (no signed releases per BRD)

## f. Internal links plan (3+ pillar/related, 1 product, 1 contact)

- `/blog/service-robots-india-tipping-point` — pillar context
- `/blog/hotel-room-service-robot-roi` — sibling industry post (deep ROI math)
- `/blog/welcome-to-mobilise-robotics` — partnership / positioning
- `/products/g1` — primary product page (KEENON G1, the dedicated guide / digital concierge)
- `/products/w3` — secondary product page (W3 ButlerBot for in-room delivery)
- `/products/s100` — luggage robot (closes the lobby-arrival loop)
- `/products` — catalogue
- `/contact` — final CTA

## g. Lead magnet / asset status

- Asset slug per backlog: `hotel-roi`
- Status in BLOG-ASSETS.md: `TODO` — file not yet at `/assets/leadmag/hotel-roi.pdf`
- Action: include block as `[ASSET MISSING: produce hotel-roi PDF]` in the post body, flag in PR

## h. Component-level template gaps to flag in PR

Per memory `project_blog_template_gap.md`:
- BlogPost.tsx emits only `BlogPosting` JSON-LD (not FAQPage / BreadcrumbList / VideoObject). FAQ section will be authored as inline H3s in Markdown so it remains AEO-extractable; full FAQPage schema requires a component change (out of scope for content-only PR).
- No newsletter form / sidebar form / lead-magnet card components. Those CTAs degrade to plain Markdown buttons (links) until components ship.
- Markdown pipeline does not allow raw HTML iframes (`react-markdown` + `remark-gfm` only). YouTube references will be plain links.
- BlogCard related-posts grid IS already present in the BlogPost template and will render Related posts automatically.
