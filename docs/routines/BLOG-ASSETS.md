# Lead magnet inventory

The `publish-industry-blog` routine reads this file to decide which industry-specific asset to offer in a post. If the target industry has no asset, the routine flags `[ASSET MISSING: produce <industry> <asset>]` in the PR body.

Action for the marketing owner: commission the top 3 assets (by sales-pipeline weight) before the routine starts running, so early posts have real CTAs and not dead links.

---

## Inventory

| Slug | Industry | Asset type | Title | File path | Status | Owner | Target date |
|------|----------|------------|-------|-----------|--------|-------|-------------|
| hotel-roi | Hotels | ROI worksheet | Hotel robotics ROI worksheet (PDF) | /assets/leadmag/hotel-roi.pdf | TODO | marketing | TBD |
| qsr-roi | Restaurants / QSR | ROI worksheet | QSR labour-vs-robot ROI worksheet | /assets/leadmag/qsr-roi.pdf | TODO | marketing | TBD |
| hospital-pilot | Hospitals | Pilot checklist | Hospital delivery robot pilot checklist | /assets/leadmag/hospital-pilot.pdf | TODO | marketing | TBD |
| mall-rfp | Shopping malls | RFP template | Mall cleaning robot RFP template | /assets/leadmag/mall-rfp.pdf | TODO | marketing | TBD |
| airport-sla | Airports | SLA template | Airport cleaning SLA template | /assets/leadmag/airport-sla.pdf | TODO | marketing | TBD |
| corporate-buyers-guide | Corporate facilities | Buyer's guide | Service robots for corporate campuses — buyer's guide | /assets/leadmag/corporate-buyers-guide.pdf | TODO | marketing | TBD |
| restaurant-pilot | Fine dining | Pilot checklist | Fine-dining delivery robot pilot checklist | /assets/leadmag/restaurant-pilot.pdf | TODO | marketing | TBD |
| raas-primer | Cross-industry | Primer | Robotics-as-a-Service (RaaS) in India — financial primer | /assets/leadmag/raas-primer.pdf | TODO | marketing | TBD |
| compliance-cheatsheet | Cross-industry | Cheat sheet | Service robots in India — compliance cheat sheet (BIS, FSSAI, GST, HSN) | /assets/leadmag/compliance-cheatsheet.pdf | TODO | marketing | TBD |

## How to mark an asset live

When an asset is produced and uploaded:

1. Move the file to the path listed above.
2. Change `Status` from `TODO` to `live`.
3. Add `Published` column with the date.

The routine will pick it up on the next run and start linking to it from matching industry posts.

## How to add a new asset

1. Add a new row with slug, industry, asset type, title, intended path.
2. Status starts as `TODO`.
3. When brief-ready, mark `in-progress`.
4. When published, mark `live`.

## Asset quality bar

Every lead magnet must:
- Solve a specific problem for the named industry.
- Be 2–10 pages (worksheets) or 8–20 pages (guides). Longer becomes intimidating; shorter feels thin.
- Include contact / demo booking CTAs on the last page.
- Be produced with Mobilise Robotics brand treatment (see `BRAND.md`).
- Carry a "Last updated" date and a named author.
- Be versioned — if you revise it, version in the filename (hotel-roi-v2.pdf) and update this file.

## Assets that should NOT exist yet

- Industry reports with proprietary statistics: these require a real survey or data collection exercise. Do not fake.
- Customer testimonial packs: need signed customer releases.
- Pricing PDFs on the public site: violate the BRD's "no public pricing" rule.
