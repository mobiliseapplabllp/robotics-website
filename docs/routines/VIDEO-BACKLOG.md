# Video production backlog

The `publish-industry-blog` routine scans YouTube for Keenon-official or MALL-official videos that match each post's topic. When no good match exists, it appends a row here.

This is the queue the content team picks from when planning an original video shoot. Never fabricate a video embed — if the video doesn't exist, ask for one.

---

| Date flagged | Topic | Blog post that needs it | Priority | Status | Assigned | Target publish |
|--------------|-------|-------------------------|----------|--------|----------|-----------------|
| _example 2026-04-20_ | _DINERBOT T10 in a Mumbai five-star hotel room service cycle_ | _hotels / room service robot india_ | _high_ | _planned_ | _—_ | _TBD_ |
| 2026-04-19 | DINERBOT T10 delivering to a guest corridor in an Indian 5-star hotel | /blog/room-service-robot-india | high | planned | — | TBD |
| 2026-04-19 | W3 ButlerBot lift integration in an Indian high-rise hotel | /blog/room-service-robot-india | medium | planned | — | TBD |

---

## Video types that move the needle

- **60–90 second product demo**: robot in action in the target industry. Shot at a real deployment or realistic mock-up.
- **Customer interview**: 2–3 minutes, named client on-camera describing their pilot experience. Requires signed release.
- **Explainer / how-it-works**: 90–120 seconds, voiceover + animated diagram. Good for pillar pages.
- **ROI breakdown**: 2–3 minutes, whiteboard-style, concrete numbers. Highest conversion correlation.
- **Installation walkthrough**: 3–5 minutes, a MALL engineer setting up a robot. Builds service credibility.

## Minimum production standards

- 1080p minimum; 4K preferred.
- Clean audio — lavalier mic on any speaker, no phone mics for interviews.
- On-screen captions in English. Add Hindi captions if the spoken language differs.
- Brand bumper: 2-second Mobilise Robotics + Keenon co-brand at the start. Exact rules in `BRAND.md` §5.
- Upload to the Mobilise Robotics YouTube channel (create one if missing).
- Publish with a full video description including links to the relevant blog post, product page, and contact CTA.
- Add chapters (YouTube timestamps) for anything over 2 minutes.

## What the routine does once a video exists

Once a video is uploaded and its URL is added to this file's `Status` column with `published: <url>`, the routine will:

1. Embed the video in the specific blog post(s) that flagged it.
2. Add `VideoObject` schema with upload date, duration, thumbnail, contentUrl, embedUrl.
3. Generate a written summary beside the embed so the content stays indexable and AI-citable.
4. Add a "Watch on YouTube" link with UTM tagging.

## YouTube SEO for each video

When producing the video, apply:

- Title: `<Primary keyword>: <specific angle> | Mobilise Robotics` — ≤ 70 characters.
- Description: first 150 characters include the primary keyword. Full description ≥ 250 words, includes timestamps, links, and a CTA.
- Tags: 10–15 tags including primary keyword, industry, robot model, "India".
- End screens and cards pointing to related videos and the blog post.
- Thumbnail: custom, high-contrast, readable at 120×67 px. No clickbait arrows or "you won't believe" overlays.
