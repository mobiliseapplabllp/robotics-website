# Voice, banned phrases, and India-English rules

The content routines enforce this file. CI runs a banned-phrases check on every blog PR; a single hit blocks the merge.

---

## 1. Voice

- **Business-direct**. Specific numbers beat adjectives. "A DINERBOT T10 carries a 40 kg payload across 100 m in 12 seconds" beats "a robust, high-capacity robot".
- **India-first framing**. The reader is an Indian CFO, COO, facilities head, hotel GM, or hospital administrator evaluating a capital purchase.
- **Confidence without hype**. Say what the product does, not how revolutionary it is.
- **First-person plural sparingly**. "We at Mobilise..." once per post maximum. The rest of the post describes Mobilise in third person to stay useful when content gets syndicated.
- **Humour**: rare, dry, never at a customer's expense, never at a competitor's expense.

---

## 2. Banned phrases (CI check — any hit blocks merge)

Case-insensitive match. If a banned phrase is essential inside a direct quote from a named human source, that's the only exception and the reviewer annotates it in the PR.

| Phrase | Why banned |
|--------|------------|
| delve, delving | classic AI tell |
| tapestry | AI cliché |
| navigate the complexities | AI cliché |
| in today's fast-paced world | filler |
| unlock the potential | filler |
| revolutionary, revolutionise | unprovable, hype |
| game-changer, game-changing | hype |
| cutting-edge | hype (allow only inside direct quotes) |
| seamless, seamlessly | filler |
| empower, empowering | vague, use specific verb instead |
| holistic | filler |
| leverage (as a verb) | use "use" |
| synergy, synergies | filler |
| robust | pick a specific word |
| best-in-class | unprovable |
| world-class | unprovable |
| paradigm shift | cliché |
| at the end of the day | filler |
| moving forward, going forward | filler |
| it's worth noting that | filler |
| in conclusion | weak closer |
| stand out from the crowd | cliché |
| take your <x> to the next level | cliché |

Add new banned phrases via PR as you notice AI tells in drafts.

---

## 3. India-English rules

| Category | Rule |
|----------|------|
| Spelling | Centre (not center), metre (not meter), organise, analyse, realise, recognise, optimise, behaviour, colour, catalogue |
| Currency | Use `₹` symbol. Lakhs and crores acceptable — prefer them over "million" in India-addressed copy. State GST-inclusive or exclusive when quoting prices |
| Numerals | "5 crore" and "5 lakh" (singular) when preceded by a number — not "5 crores / 5 lakhs" |
| Time | State IST explicitly when referencing any time |
| Dates | DD Month YYYY (e.g., "20 April 2026") or YYYY-MM-DD in technical contexts. Not MM/DD/YYYY |
| City names | Bengaluru (not Bangalore) as the default; mention "Bangalore" only when referring to pre-2014 events. Mumbai, Kolkata, Chennai — current names always |
| Acronyms on first use | Spell out: "Goods and Services Tax (GST)" then GST thereafter |
| Addressing reader | "you" — direct. Not "businesses" or "enterprises" in body copy. Save those for meta descriptions |

---

## 4. Structure rules

- **Opening**: definitional first sentence matching the `[Primary keyword] is a [category] that [differentiator]` pattern.
- **Answer-first H2s**: every H2 followed by 1–2 sentence direct answer before supporting prose.
- **Paragraph length**: 2–4 sentences. No walls of text.
- **Sentence-length variance**: mix short (5–10 word) sentences with longer ones. Avoid the AI-typical uniform 18-word sentence rhythm.
- **Bullet lists**: used when the list has 3+ parallel items. Avoid single-bullet lists. Avoid two-bullet lists (use prose).
- **Reading level**: Flesch reading ease ≥ 55. Average sentence length ≤ 22 words. The CI readability check blocks merge if these fail.

---

## 5. Numbers, claims, and citations

- Every factual claim sourced from outside MALL's direct experience needs a citation from `BLOG-SOURCES.md`.
- Never invent a statistic. If you feel the urge to write "studies show that 73% of hospitals...", you need the study. If you don't have it, remove the claim.
- Round appropriately: "around 2,400 hotels in India are rated 4-star or above" — not "2,397.3 hotels".
- State uncertainty when it's real: "Industry estimates place..." / "FHRAI's 2024 report put..."

---

## 6. How MALL and Keenon are described

- **MALL's role**: on-ground India partner — sales, installation, training, AMC, support.
- **Keenon's role**: global robotics manufacturer; product owner.
- **Never claim exclusivity unless BRAND.md confirms the agreement uses that word.**
- **Never speak for Keenon**: describe Keenon's products and track record, not their plans or commitments.

---

## 7. Links and anchors

- Internal links: descriptive anchor text, never "click here" or "read more".
- External links: open in the same tab by default (accessibility preference). Use `rel="noopener"` on `target="_blank"` when justified.
- Every outbound link to a non-authoritative source should be justified in the draft notes — default is to not link out unless the source is on `BLOG-SOURCES.md`.

---

## 8. Images

- No AI-generated images on the blog. Period. They hurt trust and confuse Google's originality signals.
- Stock images only when absolutely unavoidable and clearly relevant; prefer photos from Keenon's media kit (if permitted) or `[HUMAN INPUT REQUIRED: photo from pilot]` placeholder.
- Every image has alt text describing the image content, not "image of X" (screen readers announce "image" themselves).

---

## 9. How to propose changes to this file

Open a regular PR. Justify each addition or removal with one sentence and one example of the phrase/rule in use. The routines read this file every run, so a change here applies to every subsequent blog.
