# Blog backlog

Prioritized queue of blog topics for the `publish-industry-blog` routine. The routine takes the first unshipped, unblocked row on each run. Reorder rows by moving them; that's the only way to change priority.

**Status legend**: `queued` · `in-progress` · `pr-open` · `shipped` · `blocked-<reason>`

---

## Phase 1 — industry × robot type × angle (30 posts)

| # | Status | Industry | Robot type | Angle | Primary keyword (India) | Target word count | Lead magnet ref |
|---|--------|----------|------------|-------|-------------------------|-------------------|-----------------|
| 1 | queued | Hotels (5-star) | Delivery (DINERBOT) | Room service automation | room service robot india | 2000 | hotel-roi |
| 2 | queued | Hotels (business/mid) | Guiding | Check-in concierge | hotel concierge robot india | 1800 | hotel-roi |
| 3 | queued | Restaurants (QSR chains) | Delivery | Labor shortage ROI | restaurant server robot india | 2200 | qsr-roi |
| 4 | queued | Restaurants (fine dining) | Delivery | Guest experience framing | fine dining robot waiter | 1800 | qsr-roi |
| 5 | pr-open | Cloud kitchens | Delivery | Throughput at peak hours | cloud kitchen robot | 1800 | qsr-roi |
| 6 | queued | Hospitals (multi-specialty) | Delivery | Pharmacy-to-ward supply chain | hospital delivery robot india | 2500 | hospital-pilot |
| 7 | queued | Hospitals (infection control) | Disinfection/UV | Post-COVID ICU protocols | hospital disinfection robot | 2200 | hospital-pilot |
| 8 | queued | Elder care homes | Guiding + delivery | Staff augmentation, dignity | elder care robot india | 2000 | — |
| 9 | queued | Diagnostic chains | Delivery | Sample transport automation | lab sample transport robot | 1800 | hospital-pilot |
| 10 | queued | Shopping malls | Cleaning (KLEENBOT) | After-hours floor cleaning | mall cleaning robot india | 2000 | mall-rfp |
| 11 | queued | Supermarkets | Cleaning | Aisle cleaning during trading hours | supermarket cleaning robot | 1800 | mall-rfp |
| 12 | queued | Airports | Cleaning (C55 large-area) | Terminal floor care SLAs | airport cleaning robot india | 2500 | airport-sla |
| 13 | queued | Airports | Guiding | Wayfinding & info desk | airport guide robot | 2000 | airport-sla |
| 14 | queued | Corporate campuses | Cleaning + delivery | Facility cost reduction | office cleaning robot india | 2200 | — |
| 15 | queued | Corporate campuses | Humanoid (XMAN) | Reception / brand statement | humanoid receptionist robot india | 1800 | — |
| 16 | queued | Co-working spaces | Delivery | Café + mailroom automation | coworking robot | 1500 | — |
| 17 | queued | Banks (flagship branches) | Guiding | Customer service deflection | bank branch robot | 1800 | — |
| 18 | queued | Logistics hubs | Cleaning (C55) | Warehouse floor maintenance | warehouse cleaning robot india | 2200 | — |
| 19 | queued | Factories (pharma / F&B) | Cleaning | GMP-compliant cleaning | GMP cleaning robot | 2000 | — |
| 20 | queued | Universities | Guiding + delivery | Campus tours + mailroom | university robot india | 1800 | — |
| 21 | queued | Schools (K-12 premium) | Guiding | STEM showcase + hygiene | school robot india | 1500 | — |
| 22 | queued | Museums / galleries | Guiding | Tour guide robot | museum robot india | 1500 | — |
| 23 | queued | Cinemas / multiplexes | Delivery | F&B delivery to seats | cinema food delivery robot | 1800 | — |
| 24 | queued | Casinos / gaming (Goa) | Delivery | High-ROI F&B | casino robot | 1500 | — |
| 25 | queued | Event venues | Delivery | Banquet service at scale | banquet robot india | 2000 | — |
| 26 | queued | Luxury residential (high-rise) | Guiding + delivery | Amenity differentiation | residential robot concierge | 1800 | — |
| 27 | queued | Religious sites (large temples) | Cleaning | Footfall cleaning at scale | temple cleaning robot | 1500 | — |
| 28 | queued | Government offices | Cleaning | Tendered procurement pathway | government cleaning robot tender | 2200 | — |
| 29 | queued | Indian Railways stations | Cleaning | Platform cleaning SLAs | railway station cleaning robot | 2000 | — |
| 30 | queued | Metro stations | Guiding + cleaning | Swachh Metro programmes | metro station robot india | 2000 | — |

## Phase 2 — cross-cutting pillar & buyer guides

These sit at the top of the internal link graph. Schedule them interleaved with Phase 1 rows every 4th week.

| # | Status | Type | Primary keyword (India) | Target word count |
|---|--------|------|-------------------------|-------------------|
| P1 | queued | Pillar | service robots india | 3500 |
| P2 | queued | Pillar | cleaning robots india | 3200 |
| P3 | queued | Pillar | delivery robots india | 3200 |
| P4 | queued | Pillar | humanoid robots india | 2800 |
| P5 | queued | Buyer's guide | service robot cost india | 3000 |
| P6 | queued | Buyer's guide | service robot ROI calculator india | 2800 |
| P7 | queued | Buyer's guide | how to choose service robot india | 2500 |
| P8 | queued | Comparison | keenon vs pudu robotics | 2500 |
| P9 | queued | Comparison | service robot lease vs buy india | 2200 |
| P10 | queued | Procurement | service robot GST import duty india | 2000 |
| P11 | queued | Procurement | RaaS robotics as a service india | 2000 |
| P12 | queued | Operational | service robot AMC maintenance india | 1800 |

## How the routine picks

1. Take the top row from Phase 1 with status `queued`. If none, take top from Phase 2.
2. If the row's lead magnet is listed in `BLOG-ASSETS.md` as `TODO`, the routine still ships the post but flags `[ASSET MISSING]` in the PR.
3. If the row is blocked (dependency, missing source, legal review needed), skip to the next unblocked row.

## How you add or reorder

- Insert rows in the intended order.
- Adjust `status` column by hand when planning a batch.
- Never delete a shipped row — leave it with status `shipped` for audit.
