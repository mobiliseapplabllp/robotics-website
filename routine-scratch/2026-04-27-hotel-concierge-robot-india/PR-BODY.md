# content(blog): hotels — hotel concierge robot india

## Summary

New industry post for the Phase-1 backlog: a 2,177-word, India-first walkthrough of what a hotel concierge robot is, what it actually does in an Indian property, what it costs in INR, and how to pilot one. Anchors on the KEENON G1 (lobby/concierge), W3 (in-room delivery), and S100 (luggage), with the XMAN-R1 referenced as a tracked-but-not-yet-shipping data point.

This is the second post in the Hotels cluster on disk. It complements the existing `hotel-room-service-robot-roi.md` (which sits at the 5-star room-service angle) by speaking to the 120–180 key business / upper-mid-market segment.

## Category

content / blog

## Files touched

- `src/content/blog/posts/hotel-concierge-robot-india.md` (new)
- `routine-scratch/2026-04-27-hotel-concierge-robot-india/` (research + outline + social pack — committed for audit)
- `docs/routines/COMPLETED.md` (log row)

## Backlog row

Phase 1 row #2 — Hotels (business/mid) | Guiding | Check-in concierge | "hotel concierge robot india" | 1800 word target | hotel-roi magnet
(Row #1 — 5-star room-service — already on disk under `hotel-room-service-robot-roi.md`, so we skipped it.)

## Target keyword

- **Primary:** `hotel concierge robot india`
- **Volume estimate (India, monthly):** ~30–80 (low absolute, very high commercial intent)
- **Difficulty estimate:** low–medium (SERP currently dominated by OEM brochure pages and competitor product listings; no in-depth editorial)

## Word count, reading level, AI-detection score

- **Word count:** 2,177 (use-case template band: 1,500–2,000 — modestly over by 9%; trimming would cut procurement substance, kept as-is)
- **Reading-level / banned-phrases / AI-detection scores:** scripts not wired in this repo per memory; manual banned-phrase grep run (no hits). Reading level intentionally aimed below 22 words per sentence on average with deliberate short-sentence variance.

## Lighthouse scores

Not run — `npm run lighthouse` script does not exist in this repo (per memory `project_verification_scripts`). Reviewer to run Lighthouse on the deployed preview before merge if required.

## Verifications run (the four that actually exist)

- `npm run typecheck` ✓
- `npm run lint` ✓
- `npm run test:run` ✓ (8/8)
- `npm run build` ✓

## Citations table

| # | Claim | Source (whitelist tier) | URL |
|---|-------|-------------------------|-----|
| 1 | Indian hotel industry: US$ 32B FY20 → projected US$ 52B by FY27 | IBEF (Tier 2) | https://www.ibef.org/industry/tourism-hospitality-india |
| 2 | Tourism supported 46.5M jobs in 2024 (~9.1% of India's employment) | IBEF (Tier 2) | https://www.ibef.org/industry/tourism-hospitality-india |
| 3 | Branded hotel rooms inventory to cross 3,00,000 by 2029 | IBEF (Tier 2) | https://www.ibef.org/news/india-s-branded-hotel-rooms-inventory-to-cross-3-00-000-by-2029-report |
| 4 | Skill-shortage / Ministry of Tourism trained-professional context | IBEF blog (Tier 2) | https://www.ibef.org/blogs/rising-from-adversity-exploring-the-job-boom-in-hospitality-industry |
| 5 | KEENON W3 specs (48 kg, 0.8 m/s, 12 hr battery, 20 kg payload, 70 cm passage) | KEENON (Tier 1) | https://www.keenon.com/en/product/W3/index.html |
| 6 | KEENON S100 specs (100 kg+ payload, 1 m/s, 8 hr battery, 90 cm passage) | KEENON (Tier 1) | https://www.keenon.com/en/product/S100/index.html |
| 7 | XMAN-R1 humanoid greeter at Shangri-La Traders Hongqiao, 31 Oct 2025 | KEENON / PRNewswire (Tier 1) | https://www.prnewswire.com/apac/news-releases/keenon-humanoid-robot-joins-hotel-workforce-pioneering-worlds-first-general-purpose--special-purpose-robot-collaboration-model-302599869.html |

INR ROI bands in the post are presented as conservative model assumptions — explicitly framed as such, with the "[HUMAN INPUT REQUIRED: pilot data]" block reminding the reviewer to substitute a real pilot number when one becomes available.

## [HUMAN INPUT REQUIRED] count

**3 markers — reviewer must address before merge:**
1. Featured image — none added; post currently has no `heroImage` frontmatter. Add one (Mobilise/KEENON media-kit photo or `[HUMAN INPUT REQUIRED: photo from pilot]` placeholder).
2. ROI section pilot-data block — replace the conservative model with a real Indian pilot number if one is available (with the property's permission).
3. Case study / pilot block — replace with a real client story (signed permission), or with a clearly-labelled hypothetical illustration.

## Component / template gaps flagged (per memory `project_blog_template_gap`)

The current `BlogPost.tsx` only emits `BlogPosting` JSON-LD. Per the memory note, this post:
- Authors the FAQ as **inline H3s in Markdown** (so AI engines can still extract Q/A pairs) instead of relying on a `FAQPage` schema block.
- References the KEENON G1 video as a **plain Markdown link** (not an iframe) because the Markdown pipeline (`react-markdown` + `remark-gfm`) does not render raw HTML.
- Does **not** include `BreadcrumbList` or `VideoObject` schema (component change required — out of scope for a content-only PR).
- Does **not** render a sidebar sticky form, lead-magnet card, or newsletter form (those components are not yet in the codebase).

These gaps are for a future component PR, not a blocker for content review.

## Asset status

`hotel-roi` lead magnet is still `TODO` in `docs/routines/BLOG-ASSETS.md`. The post includes an inline `[ASSET MISSING: produce hotel-roi PDF]` block with a graceful fallback (request the spreadsheet via the contact page). When the PDF lands at `/assets/leadmag/hotel-roi.pdf`, swap the block in this post (and in `hotel-room-service-robot-roi.md`) for a real lead-magnet card.

## Rollback

```sh
git revert <merge-commit-sha>
# or, on the routine branch:
git checkout main -- src/content/blog/posts/hotel-concierge-robot-india.md
```

The post is a single new file; deletion produces no orphaned routes (the loader picks files up via Vite glob).

## Social pack

See `routine-scratch/2026-04-27-hotel-concierge-robot-india/social-pack.md` (committed). It contains:
- LinkedIn post (1,200–1,800 chars, MALL voice, 3 hashtags)
- X / Twitter thread (6 posts)
- WhatsApp broadcast blurb
- Newsletter excerpt (80–120 words)

## Routine run

Routine: `publish-industry-blog`
Triggered: scheduled (2026-04-27 IST)
Branch: `routine/publish-industry-blog/2026-04-27-hotel-concierge-robot`
Compare URL (no `gh` CLI on this machine per memory):
https://github.com/mobiliseapplabllp/robotics-website/compare/main...routine/publish-industry-blog/2026-04-27-hotel-concierge-robot

## Labels

`content`, `blog`, `industry:hotels`, `needs-review`

## Slack note (for #site-content)

> 📝 New blog post PR — *Hotel concierge robot in India: what it does, what it costs* — for the Hotels (business/mid) backlog row. Anchors on KEENON G1 + W3 + S100, INR cost bands, India-specific procurement checklist. Three [HUMAN INPUT REQUIRED] blocks for the reviewer to fill before merge. → <PR link>

## Do NOT auto-merge

Per the routine's PR-only policy and per the routine guardrails (`docs/routines/GUARDRAILS.md`, "Escalation"). Content requires human review and case-study fill-in before going live.
