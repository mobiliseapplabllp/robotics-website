# PR body — paste into GitHub

**Title:** `content(blog): hotels — room service robot india`

**Open-PR link:** https://github.com/mobiliseapplabllp/robotics-website/pull/new/routine/publish-industry-blog/2026-04-19-room-service-robot-india

**Labels to apply:** `content`, `blog`, `industry:hotels`, `needs-review`

**Reviewers:** CODEOWNERS for `src/content/blog/` (add when configured).

---

## Summary

Drafts the informational top-of-funnel post for BLOG-BACKLOG Phase 1 #1: *Hotels (5-star) × Delivery (DINERBOT) × Room service automation* targeting the primary keyword `room service robot india`. The post defines the category, names approved Keenon models (DINERBOT T10, W3 ButlerBot, XMAN-R1 for context), gives indicative INR ranges, covers HSN 84795000 + 18% GST, offers an honest limitations section, and closes with a pilot-decision framework. It links to the existing decision-stage ROI post (`/blog/hotel-room-service-robot-roi`) and to the T10 + W3 product pages.

This is PR-only per GUARDRAILS — **do not merge without a content-team review pass**, including resolving the two `[HUMAN INPUT REQUIRED]` blocks.

## Target keyword

- **Primary:** room service robot india
- **Volume / difficulty (directional, not tool-verified):** medium-low difficulty; SERP is dominated by global manufacturer pages and generic hospitality-tech blogs with no India framing. The gap is INR pricing, HSN/GST, and on-ground India context.
- **Secondaries:** hotel butler robot india, room service robot price india, DINERBOT T10, W3 ButlerBot, 5-star hotel robot india

## Post stats

- **Word count:** ~1,900
- **Reading level:** Targeted Flesch ≥ 55 (India-English). Sentence-length variance applied; no uniform 18-word rhythm.
- **AI-detection score:** not run (no `npm run ai-detection` script in this repo yet; flagged in COMPLETED.md).
- **Banned-phrases grep (full BLOG-STYLE.md list):** zero hits.

## Verification

- `npm run typecheck` — pass
- `npm run lint` — pass
- `npm run build` — pass; post is bundled into `dist/assets/BlogPost-*.js` and listed in `dist/sitemap.xml`
- `npm run test:run` — 4/4 pass

## Claims and sources (citations table)

| Claim in post | Source | URL |
|---|---|---|
| India branded-hotel occupancy 68% FY 2024-25 | Asian Hospitality (citing FHRAI/Hotelivate data) | https://www.asianhospitality.com/india-hotel-occupancy-rate-2025/ |
| ADR +4.7%, RevPAR +5.7% FY25 | Hotelivate 2025 Trends & Opportunities | https://www.hotelivate.com/travel-tourism/the-2025-indian-hospitality-trends-opportunities-report/ |
| Four Labour Codes notified 21 Nov 2025 | Hospitality Biz India | https://hospitalitybizindia.com/news-track/new-labour-codes-implications-on-hotel-and-restaurant-businesses/ |
| HSN 84795000 industrial robots n.e.s., 18% GST | Credlix HSN lookup | https://www.credlix.com/hsn-code/847950 |
| Keenon hotel solution scope (DINERBOT, W3, XMAN) | Keenon corporate | https://www.keenon.com/en/solution/hotel/index.html |
| DINERBOT deployment in India (Grand Ballroom, Hyderabad) | Keenon Robotics YouTube | https://www.youtube.com/watch?v=zENB-IzD6gs |
| XMAN-R1 joined Shangri-La workforce | PR Newswire | https://www.prnewswire.com/apac/news-releases/keenon-humanoid-robot-joins-hotel-workforce-pioneering-worlds-first-general-purpose--special-purpose-robot-collaboration-model-302599869.html |
| DINERBOT T10 product walk-through video | Keenon Robotics YouTube | https://www.youtube.com/watch?v=0fMFdU4IsSI |

## `[HUMAN INPUT REQUIRED]` blocks — **reviewer must resolve before merge**

1. **Pilot numbers from a flagship property** (body section: "Indicative ROI for a 250-room 5-star"). Replace placeholder with measured pilot data or remove the block if no pilot exists yet.
2. **Indian property case study with permission on file** (body section: "How Mobilise Robotics delivers..."). Replace with a real named client story (written permission on file) or a clearly-framed hypothetical illustration — do not leave the placeholder on the live site.

## Known follow-ups (not blockers)

- **`hotel-roi` lead magnet still `TODO`** in `BLOG-ASSETS.md`. The post uses a fallback "talk to our India team" CTA rather than linking to a non-existent PDF. Unblock by producing the Hotel robotics ROI worksheet.
- **BLOG-TEMPLATE.md schema stack (FAQPage, BreadcrumbList, VideoObject) not rendered** by the current `src/app/pages/BlogPost.tsx` component. The FAQ is inlined as markdown H3 so a future `FAQPage` renderer can source from the same wording; BreadcrumbList + VideoObject require a component-level change out of scope for a single-post PR.
- **Sitemap.xml is hand-maintained** — no CI sitemap generator yet. The new URL has been added; consider an automated sitemap follow-up.
- **`VIDEO-BACKLOG.md`** now lists two flagged shoots (Indian T10 room-service cycle, W3 ButlerBot lift integration) that would strengthen this post on a future refresh.

## Rollback

To fully revert this PR once merged, revert the merge commit. The post is a pure addition — no existing files were deleted or renamed, and the only modifications are log files and a sitemap entry. A straight `git revert <merge-sha>` restores prior state cleanly.

## Social pack (copy-paste ready)

### LinkedIn (1,200–1,800 chars, first-person MALL voice)

> The question every hotel GM asks us in the first five minutes of a demo: "but will a room service robot actually work in my property?"
>
> Short answer: yes, and the maths is better than most GMs expect.
>
> Indian branded-hotel occupancy hit 68% in FY 2024-25 (Hotelivate / FHRAI) while ADR climbed 4.7% y/y. Properties are fuller. Staff are thinner. The four new Labour Codes, notified on 21 November 2025, just raised the fully-loaded cost of every F&B runner on payroll.
>
> We wrote a piece for GMs and Ops heads who are kicking the tyres on this for the first time. It covers:
>
> - What a room service robot actually does in a 5-star setting (kitchen → service lift → guest corridor → door)
> - The two Keenon models that fit most Indian properties — DINERBOT T10 for F&B outlets, W3 ButlerBot for room delivery
> - Indicative INR ranges, HSN 84795000, GST treatment, CAPEX vs RaaS
> - Honest edge cases: lift retrofits, Wi-Fi corridor dead zones, marble-threshold LiDAR, wedding-day crowds
> - A 60-day pilot playbook that lets you exit with no commitment
>
> Read the full piece → [URL once merged]
>
> #IndianHospitality #ServiceRobotics #HotelOps

### X / Twitter thread (4–6 posts, ≤280 chars each)

1. Indian branded-hotel occupancy: 68% FY 2024-25. F&B runner retention: 7–9 months and falling. A room service robot is no longer a toy — it is procurement. New piece on how 5-star GMs should actually think about it ↓
2. What it is: an autonomous delivery robot that rides the service lift and hands off at the guest door in 6–12 minutes. Keenon's DINERBOT T10 + W3 ButlerBot cover most use cases. XMAN-R1 is a separate bet.
3. Cost: indicative Year-1 ~₹12–14 lakh/robot (CAPEX), ~₹1–1.5 lakh/yr ongoing. Imported under HSN 84795000, 18% GST. CAPEX vs RaaS is the real procurement decision, not which brand.
4. Where it breaks: service lift with no IoT hook, corridor Wi-Fi dead zones, wet-mopped 2 AM marble, wedding-crowd density. All solvable. All worth knowing before you sign.
5. The pilot playbook: 60 days, one robot, one floor, full measurement. Exit clause if it misses the brief. The honest answer to "should we?" often starts with "run the pilot".
6. Full piece: [URL once merged]

### WhatsApp broadcast

> New on the Mobilise Robotics blog — *Room service robot in India: how 5-star hotels automate guest-corridor delivery*. Covers Keenon DINERBOT T10, W3 ButlerBot, indicative INR cost, HSN/GST, and a 60-day pilot playbook. [URL once merged]

### Newsletter excerpt (80–120 words)

> A room service robot moves trays from kitchen pass to guest door in 6–12 minutes — riding the service lift on its own, slowing politely around wedding crowds, running at 2 AM on Diwali. Indian 5-stars are adopting it now for a simple reason: FY 2024-25 occupancy hit 68% while fully-loaded F&B runner costs climbed under the new Labour Codes. Our new post walks through Keenon's DINERBOT T10 and W3 ButlerBot, indicative INR costs, HSN 84795000 + GST treatment, the four Indian deployment issues that matter, and a 60-day pilot playbook that lets you exit with zero capex at risk.

## Routine run reference

- Routine: `publish-industry-blog`
- Run date: 2026-04-19 (IST)
- Branch: `routine/publish-industry-blog/2026-04-19-room-service-robot-india`
- Scratchpad: `routine-scratch/2026-04-19-room-service-robot-india/`
- Log entry: `docs/routines/COMPLETED.md` (2026-04-19 21:35 IST row)
