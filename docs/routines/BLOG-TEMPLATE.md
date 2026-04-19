# Blog post structural template

Every post follows this structure. Sections marked [REQUIRED] are non-negotiable; the routine will not open a PR without them. Sections marked [CONDITIONAL] appear when their condition is met.

---

## Frontmatter (MDX or equivalent)

```yaml
---
title: <Primary Keyword> | <Unique Angle> | Mobilise Robotics
slug: /blog/<industry>/<primary-keyword-hyphenated>
description: <≤155 chars, benefit-led, primary keyword once, ends with verb>
industry: <industry slug>
robotType: <delivery|cleaning|guiding|humanoid|mixed>
primaryKeyword: <keyword>
secondaryKeywords: [..., ..., ...]
publishedAt: <ISO date>
updatedAt: <ISO date>
author: mobilise-editorial
featuredImage: <path>
featuredImageAlt: <descriptive alt including primary keyword — on featured image only>
readingTime: <minutes>
leadMagnet: <slug from BLOG-ASSETS.md or null>
---
```

---

## H1 [REQUIRED]

Same as title intent, not identical wording. One H1 per page.

## Definitional opening sentence [REQUIRED]

Pattern: `<Primary keyword> is a <category> that <differentiator for this industry>.`

The first 150 tokens of the page carry disproportionate weight in AI retrieval, so this sentence is non-negotiable.

## Quick Answer block [REQUIRED — plain paragraph, NOT a callout box]

50–80 words. Directly answers the implicit question in the post's title. First sentence must contain the primary keyword. Plain `<p>` so AI engines extract it cleanly — no blockquote, no aside, no card.

## Inline CTA #1 [REQUIRED]

One-sentence value pitch + button: "Book a 15-min discovery call for <industry>" → Calendly link.

## H2: Why <industry> in India is ready for <robot-type> [REQUIRED]

Answer-first: lead with 1–2 sentences stating the bottom line. Then India-specific context: market size, labour economics in INR, regulatory drivers, recent shifts. Minimum 2 cited numbers.

## H2: What <robot-type> actually does in a <industry> setting [REQUIRED]

Specific use cases — present tense, concrete verbs. Name Keenon models. Include 1 YouTube embed with VideoObject schema.

## H2: ROI math — [HUMAN INPUT REQUIRED: real deployment numbers if available] [REQUIRED]

INR-denominated cost comparison: human labour cost vs robot over 3 years. Include capex, AMC, training, downtime. Use conservative assumptions and cite the source for each.

If a real deployment number exists, reviewer fills it in at the `[HUMAN INPUT REQUIRED]` block before merge.

## H2: What could go wrong — and how to de-risk [REQUIRED]

Honest section on limitations: floor conditions, WiFi coverage, integration with existing ops, staff training, edge cases (crowded events, power fluctuations). Builds trust and is highly AEO-worthy because AI engines reward even-handed content.

## H2: Procurement & financing in India [REQUIRED]

CAPEX vs RaaS (robotics-as-a-service), GST treatment (rate + HSN code), import duty status, financing partners, government schemes (Make in India, PLI where applicable). Citations required for every regulatory claim.

## Lead magnet block [CONDITIONAL — if asset exists in BLOG-ASSETS.md]

Card layout:
- Heading: asset title.
- 2-line description of what's inside.
- Button: "Download the <industry> <asset type> (PDF)".
- Form: email + industry, routes to CRM.

## H2: How Mobilise delivers — the MALL difference [REQUIRED]

On-ground India service network, Keenon partnership framing (per `BRAND.md`), pilot-to-scale methodology, support in Hindi/regional languages, AMC terms. Do NOT invent customer names.

## [HUMAN INPUT REQUIRED: case study or pilot] [REQUIRED placeholder, always present]

The routine always leaves this block. Reviewer fills in with a real client story (with permission on file) before merging. If no story yet, reviewer replaces with a neutral illustration paragraph explicitly framed as hypothetical.

## H2: FAQ [REQUIRED — 6 to 10 questions]

Each question phrased as a real buyer would search. Answer in 40–80 words. Matches `FAQPage` schema exactly. Question wording in the schema must match the visible `<h3>` wording.

Recommended FAQ topics to cover (pick 6–10 most relevant):
- What is the cost in India?
- What's the payback period?
- Do we need special flooring or WiFi?
- What happens when it fails?
- What training do staff need?
- Who handles installation?
- What AMC options exist?
- Is the device BIS/FSSAI/NABH certified?
- Can we start with a pilot?
- What's the delivery timeline?

## End-of-article CTA block [REQUIRED]

Two buttons side-by-side:
- "Book a demo" → Calendly.
- "Chat on WhatsApp" → wa.me link with prefilled message.

Brief 2-line pitch above the buttons. No stock photos. No fake testimonials.

## Related posts grid [REQUIRED]

Three auto-selected posts from the same industry cluster or robot-type cluster. Component reads post metadata.

## Newsletter block [REQUIRED]

Value prop: "Monthly India robotics briefing — 2-minute read, free."
Form: email only. Routes to email platform (Mailchimp / Brevo / MailerLite / HubSpot).

---

## Schema stack [REQUIRED — JSON-LD in `<head>`]

All of:
- `Article` — headline, datePublished, dateModified, author, publisher (Mobilise Robotics with logo URL), mainEntityOfPage, image, wordCount.
- `FAQPage` — one Question/Answer per FAQ above. Wording must match visible HTML.
- `BreadcrumbList` — Home > Blog > Industry > Post.

Conditionally:
- `VideoObject` — for each YouTube embed. Include name, description, uploadDate, duration (ISO 8601), thumbnailUrl, contentUrl, embedUrl.
- `HowTo` — when the post is structured as a how-to guide. Include step list.
- `Product` — when a specific Keenon model is the primary subject. Include brand (Keenon), offers (price range in INR if permitted per BRAND.md — otherwise omit price).

Always (site-wide, not per post):
- `Organization` — Mobilise Robotics (subsidiary of Mobilise App Lab Limited). Include logo URL, sameAs array (LinkedIn, X, YouTube), contactPoint for India.

---

## Word count targets by post type

- **Use-case / industry post**: 1,500–2,000 words.
- **Buyer's guide / comparison**: 2,500–3,500 words.
- **Pillar page**: 3,000–4,500 words.
- **News/announcement**: 600–900 words (routine does not generate these; human only).

---

## Image requirements

Every post needs:
- 1 featured image (16:9, ≥ 1200×675, < 200KB after WebP conversion).
- 2–4 body images — diagrams, product shots from Keenon media kit, or `[HUMAN INPUT REQUIRED: photo from pilot]` placeholder.

Alt text rules:
- Featured image: describe the image AND naturally include the primary keyword.
- Body images: describe the image only. Do not force the keyword in.
- Decorative images (none expected on blog): `alt=""`.

Never use AI-generated images on the blog. They tank trust signals.
