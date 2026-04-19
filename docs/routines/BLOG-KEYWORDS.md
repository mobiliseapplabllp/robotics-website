# Keyword strategy — Mobilise Robotics (India)

This file defines the keyword universe. Every blog post targets one primary keyword plus a set of secondaries drawn from its cluster. Never target the same primary keyword with two posts — that's keyword cannibalization.

---

## Pillar clusters

Each pillar page is a long-form (3,000+ words) hub that sits at the top of the internal link graph. Every blog post in a cluster links up to its pillar.

### Pillar 1 — service robots india

- **Pillar page**: `/services-robots-india` or `/products` depending on site IA
- **Primary**: service robots india
- **Secondary**: commercial service robots india, service robotics india, enterprise robots india
- **Long-tail**: best service robots for business in india, service robot suppliers in india, service robot companies in india, service robot market india
- **Question forms (AEO)**:
  - what are service robots
  - how do service robots work
  - what is the cost of service robots in india
  - which industries use service robots in india
  - are service robots worth it for indian businesses

### Pillar 2 — cleaning robots india (KLEENBOT family)

- **Primary**: cleaning robots india
- **Secondary**: commercial cleaning robot, industrial cleaning robot india, floor cleaning robot india, scrubbing robot india
- **Long-tail**: autonomous floor cleaning robot price india, mall cleaning robot suppliers, airport cleaning robot india, warehouse cleaning robot, KLEENBOT india
- **Question forms**:
  - what is the best cleaning robot for large spaces
  - how much does a commercial cleaning robot cost in india
  - can cleaning robots work during business hours
  - do cleaning robots handle wet and dry waste
  - what is the battery life of a commercial cleaning robot

### Pillar 3 — delivery robots india (DINERBOT family)

- **Primary**: delivery robots india
- **Secondary**: restaurant delivery robot, hospitality delivery robot, hospital delivery robot, food service robot
- **Long-tail**: robot waiter india, food delivery robot restaurant, DINERBOT india, robot server india, autonomous delivery robot price india
- **Question forms**:
  - how does a restaurant delivery robot work
  - can delivery robots navigate crowded restaurants
  - what is the payload of a food service robot
  - how much does a delivery robot cost in india
  - do delivery robots need special infrastructure

### Pillar 4 — humanoid robots india (XMAN)

- **Primary**: humanoid robots india
- **Secondary**: humanoid robot reception, XMAN robot, general purpose robot india
- **Long-tail**: humanoid robot for office reception india, humanoid robot price india, commercial humanoid robot
- **Question forms**:
  - what can a humanoid robot do today
  - are humanoid robots commercially available in india
  - how much does a humanoid robot cost

### Pillar 5 — ROI / TCO (bottom of funnel)

- **Primary**: service robot ROI india
- **Secondary**: service robot TCO, robot vs labor cost india, service robot payback period, service robot cost benefit india
- **Long-tail**: service robot ROI calculator india, return on investment commercial robot, robot leasing cost india
- **Question forms**:
  - what is the payback period for a service robot in india
  - how do i calculate ROI for a cleaning robot
  - is it cheaper to lease or buy a service robot
  - what is the total cost of ownership of a robot

---

## India-specific modifiers (layer on any cluster)

Add these as secondary or tertiary keywords when relevant:

- **Cities**: mumbai, delhi, new delhi, bengaluru/bangalore, hyderabad, chennai, kolkata, pune, ahmedabad, gurgaon/gurugram, noida, jaipur, chandigarh, kochi, goa
- **Commercial**: price, cost, supplier, dealer, distributor, vendor, buy, lease, rent, RaaS, AMC, service
- **Regulatory**: BIS certified, FSSAI compliant, GST, HSN code, import duty, make in india
- **Finance**: lease financing, capex, opex, subscription, monthly cost, EMI

---

## Do not target

- Generic global keywords like "best service robots 2026" (too competitive, wrong intent for India SMBs).
- Brand-protected terms of competitors as primary keywords (can mention in comparison posts as secondary).
- Any keyword you cannot honestly rank for given domain authority (see Ahrefs / Semrush difficulty scores).

---

## How a post uses this file

The `publish-industry-blog` routine:

1. Looks up the target industry's cluster.
2. Picks the primary keyword assigned in `BLOG-BACKLOG.md`.
3. Pulls 3–5 secondaries and 5–10 long-tails from the cluster in this file.
4. Generates the FAQ section from the question-form keywords.
5. Never targets a primary keyword already used in `COMPLETED.md`.

Update this file when you identify new keywords from Search Console, Ahrefs, or sales-team transcripts.
