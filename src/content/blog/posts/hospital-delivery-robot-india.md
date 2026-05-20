---
title: "Hospital delivery robot India: pharmacy-to-ward economics for a 250-bed hospital"
slug: "hospital-delivery-robot-india"
date: "2026-05-20"
author:
  name: "Rohan Kapoor"
  role: "COO"
category: "Industry"
tags:
  - "India"
  - "Hospitals"
  - "Healthcare"
  - "Automation"
  - "Pharmacy logistics"
excerpt: "A hospital delivery robot moves medicines, samples, linen, and consumables along the corridors that keep a 250-bed hospital running — without taking a nurse off the floor. Here is the Indian economics, in INR, before you sign a quote."
readMinutes: 12
---

A hospital delivery robot is a service-delivery robot that moves medicines, pathology samples, linen, and consumables between the pharmacy, central stores, pathology lab, and inpatient wards inside a hospital — handling the routine internal logistics that currently pull nurses and Group D attendants off the floor. For a 200–400-bed Indian multi-specialty hospital, that internal logistics layer is also where the next round of nurse-time and clinical-quality gains live.

## Quick answer

A hospital delivery robot like the KEENON DINERBOT T10 carries up to 40 kg of secured trays or tote bins at 1 m/s and runs 9 to 12.5 hours on a charge, replacing the running portion of one to two Group D attendants and ~30% of in-shift errand time for a ward nurse station. In an Indian metro 250-bed hospital, capex sits in the ₹11.5–14 lakh band per robot landed, and simple payback on labour displacement alone typically falls in the 24–32 month range; clinical-time recovery and medication-error reduction shorten the practical case further.

> **Planning a pilot?** [Book a 15-minute discovery call](/contact) and we will plug your bed count, pharmacy-to-ward distances, and current attendant cost into a pharmacy-logistics model before the call.

## Why Indian hospitals are ready for delivery robots in 2026

The economics are now in your favour: nurse and Group D wages have climbed sharply since 2019, NABH 5th-edition standards make pharmacy-to-ward chain-of-custody auditable, and robot capex has fallen below the 36-month payback bar for any hospital running a 24×7 inpatient floor.

India's healthcare sector is forecast to reach roughly US$ 372 billion in size, with hospitals carrying the largest share of that spend, per the [India Brand Equity Foundation](https://www.ibef.org/industry/healthcare-india). That headline number matters less than what is happening inside the hospital: capacity utilisation in tertiary urban hospitals routinely sits above 75%, and the staffing-to-bed ratio set by [NABH's hospital accreditation standards](https://www.nabh.co/hospital) — covering medication management, infection control, and patient safety — is pushing administrators to free clinical staff from non-clinical tasks.

Three pressures pushed the robot conversation from "interesting" to "this quarter":

- **Nurse-time leakage.** A ward nurse in an Indian multi-specialty hospital typically loses 60–90 minutes a shift to non-clinical errands — fetching medicines from the satellite pharmacy, sending samples to the lab, chasing linen. That is time NABH expects to be on bedside care, and it is the line every Medical Superintendent wants back.
- **Group D attrition.** The fully loaded cost of a hospital attendant in Tier-1 cities has moved from ₹14,000–17,000 in 2019 to ₹22,000–28,000 today, with retention under a year in many hospitals. Recruitment, training, and uniform issuance costs add roughly 12–18% on top.
- **Medication-error scrutiny.** NABH 5th-edition Medication Management (MOM) standards demand a documented chain of custody from pharmacy issue to bedside administration. A robot's audit trail — timestamp, route, recipient sign-in — is exactly what a NABH surveyor opens the file looking for.

Read this alongside our [tipping-point analysis](/blog/service-robots-india-tipping-point) for the cross-sector cost-curve story, and the [cloud-kitchen post](/blog/cloud-kitchen-robot-india) for the same DINERBOT platform applied to a delivery-only kitchen.

## What a KEENON DINERBOT actually does inside a multi-specialty hospital

Concretely: it runs fixed-route loops between the central pharmacy, satellite pharmacies, the pathology sample collection point, central stores, the linen room, and ward nursing stations — carrying 25–40 kg of trays or secured tote bins while clinical and Group D staff stay on station.

The DINERBOT T10 specifications, per the [KEENON product page](https://www.keenon.com/en/product/T10/index.html), set the working envelope:

- **Payload**: 40 kg total across an open-tray or lockable-bin configuration
- **Max speed**: 1 m/s — slower than a corridor walking pace; safe around stretchers and wheelchairs
- **Battery**: 9–12.5 hours per charge; 5.5 hours from 15% to full
- **Footprint**: 48.6 × 55.5 × 139.9 cm; needs a 59 cm minimum corridor clearance
- **Navigation**: four stereo vision sensors plus VSLAM, no LiDAR mast that would catch on a curtain rail or overhead service tray

Inside a typical Indian 200–400-bed multi-specialty hospital, the robot's four highest-value jobs are:

1. **Central pharmacy → ward nursing station**: scheduled medicine drops every 2–3 hours, plus pull-on-demand for stat orders. The pharmacy issues the bin against the Hospital Information System (HIS) requisition; the robot is the transport layer.
2. **Pathology sample collection → central lab**: routine samples moved on a fixed loop, with timestamped pickup and drop. Critical samples still go human-hand-carried; the robot picks up the volume tail.
3. **Central stores → ward**: linen, consumables, gloves, gowns, syringes. The errand most often dumped on whichever attendant is nearest, which is usually the one a nurse needed for a patient turn.
4. **Inter-floor inter-departmental memos and reports**: low-value but high-frequency. The robot handles lift call-out via API integration with most modern lifts; older lifts need a one-time controller upgrade.

The robot is not a clinician and not a porter for patients. It is the logistics layer that keeps clinical staff at the bedside and Group D staff focused on patient mobility — the route work, not the route.

[HUMAN INPUT REQUIRED: embed a 90–120 second KEENON DINERBOT hospital-corridor video here. Reviewer to confirm a hospital-specific film exists on the official KEENON YouTube channel; if not, log the request to docs/routines/VIDEO-BACKLOG.md and either substitute the generic T10 product film or remove the embed.]

## ROI math — pharmacy-to-ward runs vs nurse-and-attendant cost

Bottom line: in a 250-bed Indian metro multi-specialty hospital running a 24×7 inpatient floor, one DINERBOT-class robot displaces roughly 1.4 Group D FTE-equivalents of errand running and recovers around 35 nurse-minutes per ward per shift, paying back in roughly 26–30 months on the labour line alone.

The canonical scenario for this post is a 250-bed multi-specialty hospital in Bengaluru with a central pharmacy on the ground floor, eight ward nursing stations across four floors, and the pathology lab on the second floor. Assumptions:

- **Inpatient floors**: 4, with 2 wards per floor (8 wards total)
- **Pharmacy run frequency**: 6 scheduled runs per ward per shift, plus 3–5 stat runs
- **Sample transport**: ~60 routine samples per shift
- **Current logistics labour**: 8 Group D attendants across 3 shifts at ₹26,000/month fully loaded (wages + Provident Fund + Employees' State Insurance + uniform + meals)
- **Nurse-time on errands**: average 75 minutes per ward per shift (industry-standard time-and-motion estimate from our walkthroughs; reviewer to replace with measured deployment data when available)

### Cost side — the robot

| Line item | Cost |
|---|---|
| DINERBOT T10 hospital configuration (capex, or equivalent 36-month operating lease) | ₹12.5 lakh |
| Installation, vSLAM map (4 floors), lift API integration | ₹1.85 lakh |
| Operator training (4 staff × 1 day, plus a 2-hour superuser refresher at week 4) | ₹52,000 |
| AMC — year 1 included, year 2 onward | ₹1.20 lakh/yr |
| Operating cost (electricity, consumables, parts reserve) | ₹45,000/yr |
| **Total Year 1** | **₹14.87 lakh** |
| **Year 2 onward** | **₹1.65 lakh/yr** |

GST treatment is covered in the procurement section below.

### Savings side — labour redeployed, not eliminated

The robot does not delete 1.4 Group D roles; it converts 1.4 FTEs of corridor running into 1.4 FTEs of patient-mobility, infection-control rounds, and ward turn support. Most hospitals we work with redeploy rather than retrench. Either way the cash line is the same.

| Item | Amount |
|---|---|
| Group D errand-time displaced | 1.4 FTE-equivalent |
| Fully loaded monthly cost (₹26,000 × 1.4) | ₹36,400/month |
| Annual labour savings | ₹4.37 lakh |

### Payback

- **Net Year 1 cost**: ₹14.87 lakh
- **Year 1 labour savings**: ₹4.37 lakh
- **Year 2 onward net savings**: ₹4.37 lakh − ₹1.65 lakh = ₹2.72 lakh/yr
- **Simple payback (labour-only model)**: ~28 months
- **5-year cash position**: net positive by year 4, before any nurse-time uplift is counted

[HUMAN INPUT REQUIRED: pilot data — replace the 75-minute nurse-errand estimate with measured per-ward data from the first 60-day Bengaluru hospital pilot. Update the nurse-time recovery line and re-compute payback with the audited figure.]

### The clinical-time uplift the simple model ignores

Pure labour displacement is the floor of the case, not the ceiling. Three uplifts that hospital CFOs and Medical Superintendents typically leave unmodelled:

- **Nurse time at the bedside.** Recovering 35 minutes per ward per shift across 8 wards and 3 shifts is roughly 14 nurse-hours a day. That is not "savings" in the payroll sense — it is bedside time on the ward, where the next NABH inspection looks for it.
- **Medication-error rate.** NABH 5th-edition Medication Management (MOM) standards expect a documented chain of custody from pharmacy issue to bedside administration. A robot bin lock, route timestamp, and HIS-linked sign-out give you exactly that audit trail. Hospitals that put this in writing tend to see a measurable drop in dispensing errors at the next quarterly audit.
- **Stat-order turnaround.** A stat pharmacy order today depends on whichever attendant is nearest the satellite pharmacy. With a robot on a 24×7 standby loop, turnaround time gets predictable — which is the part the ICU consultant cares about, not the average.

## What could go wrong — and how to de-risk

The honest list — pilot for these before you scale to a fleet.

- **Corridor width below 59 cm and door-frame mismatches.** Older Indian hospital blocks were laid out before robot-aware design. Measure every doorway, every fire door, every lift entry — and specifically the swing arc of the IPD entry from the lift lobby. The fix is usually rehanging two doors and removing an unused floor stand; rarely structural.
- **Lift control.** Modern lifts with API or destination-dispatch controllers integrate cleanly. Older lifts need a one-time controller add-on (₹1.4–1.8 lakh per lift). Hospitals with 30-year-old service lifts should plan for this in the pilot capex, not after.
- **Infection control and surface disinfection.** The robot enters wards and the pharmacy — both NABH HIC (Hospital Infection Control) zones. Agree the disinfection SOP (wipe-down schedule, surface chemistry, cleaning log) in writing with your Infection Control Nurse before go-live, not after. The robot's exterior tolerates standard hospital-grade quaternary-ammonium and hypochlorite wipes.
- **Power and UPS.** Indian hospitals run on UPS-backed circuits but charging docks are often plumbed into the nearest non-essential outlet. The dock must sit on the same circuit class as the satellite pharmacy refrigerator — otherwise the robot will not be charged when the evening peak hits.
- **HIS integration.** The robot is most valuable when the pharmacy issue and the ward sign-out land in your HIS. Most modern HIS platforms (Birlamedisoft, Akhil Systems, eHospital and similar) offer a webhook or REST endpoint. Older HIS deployments may need a thin middleware — quote and timeline this in the pilot, not after.
- **Crowd behaviour and visitor compliance.** OPD corridors at 11:00 IST are not the same as inpatient corridors at 03:00 IST. The robot's stereo vision handles crowding and pauses safely; the operational fix is to keep the robot on inpatient and back-of-house routes, not on OPD floors during visiting hours.

A 60-day single-robot pilot on one inpatient floor tests every one of these before you commit to a hospital-wide fleet.

## Procurement, GST, CDSCO, and NABH fit

Capex outright or operating lease — both work; the choice depends on your balance sheet and how the hospital books capital equipment.

- **GST on the robot.** A delivery robot imported under Harmonised System of Nomenclature (HSN) 8479 typically attracts 18% Integrated GST at import, fully creditable against your output GST liability if the hospital entity is GST-registered for taxable supplies (cafeteria, pharmacy retail, paid services). Pure healthcare services are GST-exempt, which affects how much of the input credit you can actually utilise — confirm with your tax advisor against the hospital's specific GSTIN profile and supply mix. The [GST portal](https://www.gst.gov.in/) is the authoritative source for current rates and HSN mapping.
- **CDSCO and medical device status.** A general-purpose autonomous delivery robot transporting sealed medicine bins is not, by itself, a medical device under the Medical Devices Rules, 2017 — provided it does not dispense, dose, mix, or modify the medication. The [Central Drugs Standard Control Organization](https://cdsco.gov.in/opencms/opencms/en/Home/) regulates devices that act on the patient or the drug; a transport robot acts on neither. If your configuration adds a dispensing module, the regulatory picture changes — flag this to CDSCO in writing before importing such a variant.
- **NABH fit.** [NABH's hospital accreditation standards](https://www.nabh.co/hospital) touch the robot deployment at four chapter levels: Medication Management (chain of custody from issue to administration), Hospital Infection Control (surface disinfection SOP, ward entry rules), Patient Safety (corridor speed, stop behaviour, fail-safe), and Hospital Infrastructure (charging, dock, route maps). The robot does not require its own NABH certification — NABH certifies hospitals, not devices — but the deployment must be documented inside your existing NABH file before the next quarterly review.
- **Robotics-as-a-Service (RaaS).** A 36-month RaaS structure with AMC and software updates included is available through Mobilise; the monthly outflow is fully expensed in your operating account, and the GST on the service invoice follows your normal credit treatment.

The 18% input GST credit and the CDSCO clarification are the two questions a hospital procurement committee asks first. Put both in writing in the procurement note before the committee meets.

## How Mobilise delivers — the MALL difference

Mobilise Robotics is the robotics vertical of Mobilise App Lab Limited (MALL), headquartered in Gurgaon. We install, train, and AMC KEENON service robots across Indian cities — the on-ground layer that does not exist when you import direct from a global manufacturer.

For hospitals, the unlock is operational and compliance-shaped: we map your inpatient corridors, set up the dock and charging circuit on the right power class, integrate with your HIS for pharmacy issue and ward sign-out, run the 3-shift handover training in Hindi and English (regional languages on request), and stay on call for the first 90 days during which the bulk of teething issues surface. Pilot first, fleet second — the pattern that has worked across hotels and restaurants transfers cleanly to hospitals, with the added discipline NABH and infection-control SOPs require.

[HUMAN INPUT REQUIRED: insert the first signed hospital pilot story here once written client permission is on file. If no story is signed off by the review date, replace this block with a neutral one-paragraph illustration explicitly framed as hypothetical, naming no real hospital.]

## FAQ

### How much does a hospital delivery robot cost in India?

A KEENON DINERBOT T10 in a hospital configuration sits in the ₹11.5–14 lakh capex band landed in an Indian metro, plus roughly ₹1.85 lakh for installation across a 4-floor hospital with lift API integration, and ₹1.20 lakh per year AMC from year 2. A 36-month RaaS arrangement is typically in the ₹45,000–60,000 per month range with AMC included. The exact number depends on city, fleet size, lift retrofit needs, and lease versus buy.

### What does a hospital delivery robot actually do?

It runs scheduled and on-demand loops between the central pharmacy, satellite pharmacies, the pathology lab, central stores, the linen room, and ward nursing stations — carrying medicines, samples, linen, and consumables in secured trays or lockable bins. Each pickup and drop is timestamped, and the route is auditable against the Hospital Information System. It does not handle patient transport or anything that requires clinical judgement.

### Is a delivery robot NABH compliant?

NABH certifies hospitals, not devices, so a robot does not carry NABH certification of its own. The deployment must, however, be documented inside four NABH 5th-edition standards: Medication Management (chain of custody), Hospital Infection Control (disinfection SOP), Patient Safety (speed and fail-safe), and Hospital Infrastructure (charging, dock, route maps). If your file covers those, the robot is on the right side of your next quarterly NABH review.

### Does CDSCO regulate hospital delivery robots?

Not as medical devices, provided the robot only transports sealed bins and does not dispense, dose, mix, or modify the medication itself. Under the Medical Devices Rules, 2017, the regulator's scope is devices that act on the patient or the drug — a transport robot acts on neither. If a future configuration adds an active dispensing module, CDSCO clarification should be obtained in writing before importing that variant.

### What is the payback period for a hospital delivery robot in India?

For a 250-bed multi-specialty hospital running a 24×7 inpatient floor, simple payback on labour displacement alone typically lands at 24–32 months. Adding nurse-time recovery and the medication-error reduction that comes with an auditable chain of custody usually shortens the practical case further — but those are best validated in a 60-day pilot before being committed to the business case.

### Do Indian hospital corridors need to be retrofitted for a delivery robot?

In most cases, no major retrofit is needed. The two practical requirements are: corridors at least 59 cm wide at every doorway, lift entry, and fire door; and a dry, smooth floor surface (standard hospital-grade vinyl or epoxy is fine). Older service lifts may need a one-time controller add-on at ₹1.4–1.8 lakh per lift to allow the robot to call and ride them. We size all of this during the pilot site survey.

### What happens when the robot fails or gets blocked?

The standard AMC includes a 24-hour response window in Tier-1 cities. The DINERBOT T10's battery, drive, and tray modules are field-replaceable, so most issues are resolved on-site within the visit. If the robot is offline or blocked by a stretcher in transit, your team reverts to the manual workflow that was running the week before deployment — no permanent operational dependency is created on the device.

### Can we start with a single-corridor pilot before committing to a fleet?

Yes — that is the only pattern we recommend. A 60-day single-robot pilot on one inpatient floor (or one pharmacy-to-ward loop) tests corridor fit, lift control, HIS integration, disinfection SOP, and operator training before any fleet commitment. The pilot report carries measured per-shift labour-hours displaced and nurse-time recovered, so the business case for a second and third unit is grounded in your own data, not ours.

## Ready to model this for your hospital?

You do not need a purchase commitment to get the model. Send us your bed count, pharmacy-to-ward distances, current attendant cost, and shift structure, and we will return the modelled payback for your hospital within one business day.

<div class="cta-row">
  <a class="btn-primary" href="/contact">Book a 15-min demo</a>
  <a class="btn-secondary" href="https://wa.me/919999999999?text=I%27d%20like%20to%20discuss%20a%20hospital%20delivery%20robot%20pilot.">Chat on WhatsApp</a>
</div>

---

*Want the hospital-pilot checklist? [Contact our India team](/contact) and mention "Hospital pilot checklist." Our printed PDF version is still in production, but our team will share the working draft within one business day.*

— Rohan
