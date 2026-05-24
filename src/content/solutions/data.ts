import {
  Users,
  Banknote,
  ClipboardCheck,
  Brush,
  Truck,
  MessageSquare,
  Package,
  Activity,
  Building2,
  Plane,
  ShieldCheck,
  Clock,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";
import type { IndustrySolution } from "./types";

/**
 * Per-industry solution data — drives the /solutions/{slug} landing pages.
 * Hand-authored copy aimed at FM directors / facility admins / IFM partners
 * in Indian commercial real estate, retail, healthcare, hospitality, aviation,
 * and corporate sectors. Optimised for long-tail organic search.
 */

const HOSPITALITY: IndustrySolution = {
  slug: "hospitality",
  id: "hospitality",
  name: "Hospitality & Hotels",

  metaTitle: "Robotic Automation for Indian Hotels & Hospitality Facilities | Mobilise Robotics",
  metaDescription:
    "Cut room-service times, automate night-shift cleaning, and lift guest scores in 5-star Indian hotels with KEENON robots deployed by Mobilise. 30-day paid pilot.",

  h1: "Robotic automation for India's hotels and hospitality facilities",
  heroSubline:
    "From 5-star room service to lobby cleaning at 3 AM, KEENON robots cover the workloads your team can't — without losing the guest experience.",
  heroImage:
    "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=1600&auto=format&fit=crop&q=80",
  heroImageAlt:
    "Elegant hotel library lounge — autonomous KEENON robots support Indian hospitality facility management teams across lobbies, corridors, and back-of-house operations",

  stats: [
    { value: "40%", label: "Faster room-service delivery" },
    { value: "1.5+", label: "FTE freed per property" },
    { value: "22-hr", label: "Autonomous duty cycles" },
    { value: "30-day", label: "Paid pilot, risk-free" },
  ],

  overview: [
    "India's hospitality sector is in a paradox. Luxury brands are expanding fast — Taj added 50+ properties in three years, ITC and Oberoi continue premium scaling, and Marriott, Hyatt, and Hilton are aggressive in Tier-1 and Tier-2 cities. But the operational workforce that runs these properties is harder to staff every year.",
    "Post-COVID hospitality wages in India have climbed 35–55%. Attrition for runners, housekeeping attendants, and mailroom staff hovers at 40–60% annually. Festival shifts get skipped. Night-cleaning consistency suffers. The guest experience — the entire promise of a luxury hotel — pays the price.",
    "Autonomous service robots are how five-star operators in Singapore, Tokyo, Dubai, and Shanghai have solved this. Mobilise brings the same playbook to India — deploying, training, and maintaining KEENON's delivery, cleaning, and reception robots so your front-of-house team can focus on guest experience and your back-of-house never breaks an SLA.",
  ],

  painPoints: [
    {
      icon: Users,
      headline: "Back-of-house staffing is harder every year",
      body: "Runners, housekeeping, and mailroom roles see 40–60% annual attrition. Festival shifts go uncovered. Sick days hit guest experience directly. The recruitment pipeline isn't keeping up with expansion.",
    },
    {
      icon: Banknote,
      headline: "Wages keep rising — RevPAR doesn't always",
      body: "Hospitality wages are up 35–55% since 2019, including retention bonuses and overtime. Owners are squeezing F&B and housekeeping margins. The traditional staffing model is breaking down for mid-market properties.",
    },
    {
      icon: ClipboardCheck,
      headline: "Guest satisfaction is a calendar lottery",
      body: "A great Saturday isn't enough. TripAdvisor and Booking.com scores depend on consistency across every shift. With thin crews on Tuesday graveyard, that consistency is exactly what breaks.",
    },
  ],

  serviceAreas: [
    {
      icon: Brush,
      name: "Cleaning",
      description:
        "Autonomous sweep, vacuum, and scrub for lobbies, corridors, banquet halls, and back-of-house. Per-shift logs feed your housekeeping audit trail.",
      robots: ["c20", "c30", "c40"],
      outcomeStat: "Up to 2,376 m²/hr",
    },
    {
      icon: Package,
      name: "Room service & in-room delivery",
      description:
        "Multi-compartment delivery robots that ride IoT lifts, navigate corridors, and deliver to room doors without staff intervention.",
      robots: ["w3", "t9", "t10"],
      outcomeStat: "40% faster room service",
    },
    {
      icon: MessageSquare,
      name: "Reception & concierge",
      description:
        "Branded reception robots in lobbies for wayfinding, FAQs, language assistance, and advertising. Free your concierge for true service moments.",
      robots: ["g1"],
      outcomeStat: "14+ languages supported",
    },
    {
      icon: Truck,
      name: "Soft FM logistics",
      description:
        "Internal mailroom, F&B back-of-house, banquet supply, and document delivery — autonomously, on schedule, without staff bottlenecks.",
      robots: ["t8", "t11", "w3"],
      outcomeStat: "18-hour autonomous shifts",
    },
  ],

  scenarios: [
    {
      headline: "Lobby cleaning at 3 AM with zero staff",
      facility: "5-star hotel, Mumbai",
      body: "The C40 leaves its dock at 11 PM, follows its mapped route through ground-floor corridors and lobby, and parks itself to recharge at 5 AM — well before the morning shift arrives. The housekeeping supervisor reviews the per-shift log over chai. SLA hit, every night.",
    },
    {
      headline: "Room service 40% faster",
      facility: "Business hotel, Bengaluru",
      body: "Orders go from the kitchen to the W3 BUTLERBOT, which rides the IoT-integrated lift and arrives at the guest's floor with the order. The guest opens the compartment with a one-time code from their TV. Average delivery time drops from 18 minutes to 11.",
    },
    {
      headline: "Multi-lingual reception without a 24-hr front-office team",
      facility: "Boutique hotel, Goa",
      body: "The G1 GUIDERBOT at the front desk handles after-hours arrivals: greeting, room directions, Wi-Fi password, restaurant timings, and 14-language assistance for international guests. Front-office staffing drops from three shifts to two, with no service degradation.",
    },
  ],

  featuredRobotIds: ["t9", "w3", "c40", "g1"],

  faqs: [
    {
      question: "Will guests notice — or react badly?",
      answer:
        "The opposite is the norm. In KEENON's global hospitality deployments and our Indian pilots, guests photograph the robot, tag the hotel on social media, and request rooms with delivery-robot access. Premium hotels in Singapore, Tokyo, Dubai, and Shanghai use them precisely because guests respond well. It's an experience differentiator, not a disruption.",
    },
    {
      question: "How does this integrate with our PMS (Opera, Cloudbeds, IDS)?",
      answer:
        "Most KEENON robots offer an API for order dispatch and run-status updates. Common integrations are Opera, Cloudbeds, and IDS. For PMS systems we don't directly integrate with, the robot runs as a standalone dispatch — kitchen sends orders to the robot via a tablet or app. Mobilise handles the integration during deployment.",
    },
    {
      question: "Will our staff resist this?",
      answer:
        "Staff acceptance has been a non-issue. Runners typically walk 4–6 km a day on hard floors — they appreciate the robot taking repetitive routes. The robot doesn't replace your runners; it handles the unglamorous loops so your runners do guest-facing work like upselling and turndown.",
    },
    {
      question: "What's the ROI on a hospitality deployment?",
      answer:
        "For a 250-room 5-star property doing 80 room-service deliveries a day, typical payback is 12–14 months on labour savings alone. We have a free ROI calculator — request it via the contact form and we'll send a property-specific model.",
    },
    {
      question: "What does the 30-day pilot include?",
      answer:
        "Pilot one robot at one property for 30 days. We deliver, install, train your staff, integrate it with your floor / lift / Wi-Fi, and stay on-call. You pay the monthly rental for that month. If you don't see operational lift, we pull the robot and waive every other charge.",
    },
  ],
};

const HEALTHCARE: IndustrySolution = {
  slug: "healthcare",
  id: "healthcare",
  name: "Healthcare & Hospitals",

  metaTitle: "Hospital Logistics & Cleaning Robots for Indian Healthcare Facilities | Mobilise",
  metaDescription:
    "Cut nursing logistics burden, reduce HAI risk, automate ward cleaning, and pass NABH audits with KEENON robots deployed by Mobilise. 30-day paid pilot.",

  h1: "Robotic automation for India's hospitals and healthcare facilities",
  heroSubline:
    "Give your nurses their time back. Audit every cleaning shift. Move samples and meds across floors without bottlenecks.",
  heroImage:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&auto=format&fit=crop&q=80",
  heroImageAlt:
    "Hospital reception with directional signage and elevator — KEENON robots support Indian healthcare facility management with autonomous logistics, sample transport, ward cleaning, and reception",

  stats: [
    { value: "90 min", label: "Nursing time reclaimed per shift" },
    { value: "60%", label: "Reduction in logistics-related ward boy hours" },
    { value: "Zero", label: "Cross-contamination incidents in HAI-grade deployments" },
    { value: "NABH", label: "Audit-ready per-shift logs" },
  ],

  overview: [
    "Indian healthcare is scaling at a pace its workforce can't match. Apollo, Fortis, Manipal, Max, Medanta, and Narayana are adding tertiary-care capacity every year. Medical tourism crossed $13B in 2025. NABH and JCI accreditation pressure is rising. But the operational backbone — ward boys, housekeeping, mailroom, food-service — is short-staffed almost everywhere.",
    "Your nurses spend up to 90 minutes per shift on logistics work: running medications, collecting samples, ferrying lab reports, escorting trolleys. A ₹55,000/month nurse is doing the work of an ₹18,000 ward boy because the ward boy didn't show up. Multiply that across a 600-bed hospital and you're losing 200+ hours of nursing care every single day.",
    "KEENON's hygienic delivery robots and audit-grade cleaning fleet solve exactly this. Mobilise deploys them with NABH-grade protocols, infection-control documentation, and the per-shift audit logs your accreditation team can put straight into evidence packs.",
  ],

  painPoints: [
    {
      icon: Activity,
      headline: "Nurses are doing ward-boy work",
      body: "A nurse running medications, collecting samples, and ferrying lab reports is paid 3× a ward boy and trained for 100× more important work. Your ₹55K nurse is doing ₹18K logistics — because the ₹18K ward boy didn't show.",
    },
    {
      icon: ShieldCheck,
      headline: "HAI risk and audit pressure both rising",
      body: "Hospital-acquired infections are an existential threat. NABH, JCI, and ISO 41001 audits get tighter every cycle. Hand-carrying meds, samples, and food across wards is exactly the kind of inconsistent process auditors flag — and outbreaks happen.",
    },
    {
      icon: Clock,
      headline: "Night shifts and weekend skeleton crews break logistics",
      body: "11 PM – 6 AM logistics in most Indian hospitals is crisis-mode only. Cross-floor sample transport stalls. Pharmacy can't get meds where they're needed. Patient outcomes pay the price.",
    },
  ],

  serviceAreas: [
    {
      icon: Package,
      name: "Hygienic delivery — meds, samples, meals",
      description:
        "Step-activated, password-secured enclosed delivery robots for sterile transport of medications, lab specimens, and meal trays across wards and floors.",
      robots: ["t3", "t11"],
      outcomeStat: "180L hygienic enclosed cabin",
    },
    {
      icon: Brush,
      name: "Ward & corridor cleaning",
      description:
        "Per-shift audit logs into your CMMS. Three-in-one sweep + vacuum + scrub for wards, ICUs, OPDs, and back-of-house. Compatible with hospital-grade chemicals.",
      robots: ["c20", "c30"],
      outcomeStat: "Per-shift NABH-ready logs",
    },
    {
      icon: Truck,
      name: "Internal logistics",
      description:
        "Heavy-load couriering for laundry, supply, equipment, and inter-departmental transport. Frees ward boys for clinical-adjacent tasks.",
      robots: ["s100"],
      outcomeStat: "100 kg+ per run",
    },
    {
      icon: MessageSquare,
      name: "Wayfinding & reception",
      description:
        "OPD wayfinding, visitor management, and information assistance — in 14+ languages for medical tourism and Tier-2 patients.",
      robots: ["g1"],
      outcomeStat: "Reduces OPD front-desk load by 30–40%",
    },
  ],

  scenarios: [
    {
      headline: "Cross-floor medication delivery, every hour, every shift",
      facility: "Tertiary hospital, NCR",
      body: "T3 DINERBOTs run scheduled routes from central pharmacy to ward nurses' stations every hour. Each compartment is password-locked to the ward, scanned on dispatch and on receipt. Per-shift logs match the pharmacy's HMIS. Nurses no longer leave the floor for meds.",
    },
    {
      headline: "Ward cleaning with full NABH evidence trail",
      facility: "Multi-specialty hospital, Bengaluru",
      body: "C30 cleaners run 6 AM and 6 PM ward routes. Per-shift CMMS logs capture sq ft cleaned, chemicals used, exceptions raised. The infection-control committee uses this for monthly review. NABH audit packs are ready in hours, not weeks.",
    },
    {
      headline: "Lab sample transport with chain-of-custody",
      facility: "Specialty hospital, Chennai",
      body: "Samples leave the ward in a sealed, password-protected compartment. The T11 moves them to the lab — through corridors, lifts, double doors — in under 12 minutes flat. Receipt is logged at both ends. No more lost samples, no more nurse runs.",
    },
  ],

  featuredRobotIds: ["t3", "t11", "c30", "s100"],

  faqs: [
    {
      question: "Are these robots NABH-compliant for hospital deployment?",
      answer:
        "KEENON's hospital-grade hygiene robots (T3, T11) are designed for healthcare. Mobilise provides NABH-ready SOPs, infection-control protocols, and per-shift audit logs as part of every healthcare deployment. We've worked with infection-control committees to certify deployment plans.",
    },
    {
      question: "What about cross-contamination?",
      answer:
        "T3 is fully enclosed with step-activated, password-secured doors. Each compartment can be wiped down between routes. UV-C sanitization options are available for high-risk wards. KEENON's deployments in Asian hospitals have run multi-year without contamination incidents.",
    },
    {
      question: "How does this integrate with our HIS (HMIS / EHR)?",
      answer:
        "Robot dispatch can integrate with most major HIS systems via API for medication, sample, and meal orders. We've worked with Akhil Systems, Trio HIS, and proprietary HIS. Bar-code scanning at both ends provides chain-of-custody for medications and samples.",
    },
    {
      question: "Will our nursing union accept this?",
      answer:
        "Nurses overwhelmingly support automation that takes logistics work away from them. The robot doesn't replace nursing roles — it reclaims nursing time for actual patient care. We've never had union pushback in a healthcare pilot.",
    },
    {
      question: "What's a typical healthcare pilot look like?",
      answer:
        "One robot, one ward, 30 days. We work with your infection-control committee to define the protocol. The robot runs scheduled medication / sample / meal routes. We track time-saved-per-nurse-shift, incidents, and audit evidence. Most pilots scale to 3–5 robots within 90 days.",
    },
  ],
};

const FOOD_BEVERAGE: IndustrySolution = {
  slug: "food-beverage",
  id: "foodbev",
  name: "Restaurants & F&B",

  metaTitle: "Restaurant Service Robots for Indian F&B Chains & Hotels | Mobilise Robotics",
  metaDescription:
    "Handle the lunch peak, raise table turn, and cut wage pressure with KEENON DINERBOT delivery robots deployed in Indian restaurants and food courts. 30-day pilot.",

  h1: "Robotic delivery and service for India's restaurants and F&B operations",
  heroSubline:
    "Handle the lunch peak, raise covers-per-shift, and stop chasing waitstaff who keep leaving for Swiggy. Autonomous delivery robots for casual-dining, fine-dining, food-courts, and banquets.",
  heroImage:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&auto=format&fit=crop&q=80",
  heroImageAlt:
    "Upscale restaurant interior with leather banquettes and pendant lighting — KEENON DINERBOT delivery robots support Indian F&B operations during lunch peaks and high-volume service",

  stats: [
    { value: "3×", label: "More tables served per waiter" },
    { value: "30%", label: "Revenue lift from faster turn" },
    { value: "55 cm", label: "Narrowest navigable aisle" },
    { value: "₹8 L+", label: "Annual labour cost saved per robot" },
  ],

  overview: [
    "Indian F&B has a staffing crisis. Post-COVID, the QSR and casual-dining labour pool shrank 30%, wages climbed 40%+, and waiters keep leaving in week three for Swiggy delivery work. Mainland China, Barbeque Nation, Wow Momo, Chaayos, Social, and the country's premium fine-dining brands all face the same arithmetic.",
    "The lunch peak (12:30–2 PM) is unstaffable in most Tier-1 cities. Operators are overstaffing 25% for the rush and wasting it off-peak — or worse, under-staffing and watching the Google reviews suffer. Either way, the unit economics keep getting worse.",
    "KEENON DINERBOT robots solve the lunch peak. Food gets to the table on time. Dirty dishes clear faster. Your waiters do the relationship work — taking orders, upselling, recommending wines — while the robot handles the running.",
  ],

  painPoints: [
    {
      icon: AlertTriangle,
      headline: "Lunch peak is unstaffable",
      body: "12:30–2 PM is when 50% of your daily revenue lands. Your waitstaff is half the size you need. The other half left for food delivery apps last quarter. Service breaks down; reviews drop.",
    },
    {
      icon: Banknote,
      headline: "Wages up 40%, covers per waiter down",
      body: "You're paying more for fewer covers per labour-hour every year. The traditional service-to-cover ratio is breaking. Margin compression is real, and there's no top in sight for waiter wages.",
    },
    {
      icon: TrendingUp,
      headline: "Customer expectations set by Swiggy",
      body: "Guests now expect 12-minute speed-of-service the moment they sit down. A 20-minute wait gets them Googling your reviews. The slow-paced fine-dining trope is dead — every brand is competing on speed.",
    },
  ],

  serviceAreas: [
    {
      icon: Package,
      name: "Food delivery to tables",
      description:
        "KEENON DINERBOTs carry 20–40 kg per run, navigate aisles as narrow as 49 cm, and deliver to multi-table routes — perfect for restaurants and food courts at peak.",
      robots: ["t8", "t9", "t10", "t11"],
      outcomeStat: "Up to 40 kg / 4 trays per trip",
    },
    {
      icon: Truck,
      name: "Dish collection & bus-out",
      description:
        "Robots accept used dishes from servers or guests, transport them to the dishwash bay, and return to standby — clearing tables faster, shortening turn time.",
      robots: ["t9", "t10"],
      outcomeStat: "30% faster table turn",
    },
    {
      icon: MessageSquare,
      name: "Marketing & engagement",
      description:
        "T10 and T11 carry built-in screens (up to 18.5\") for promotions, brand video, ordering, and kids' entertainment — turning the delivery robot into a marketing surface.",
      robots: ["t10", "t11"],
      outcomeStat: "18.5\" advertising display",
    },
    {
      icon: Brush,
      name: "Floor cleaning between services",
      description:
        "C20 KLEENBOTs run 3-in-1 sweep / vacuum / scrub between service periods, hitting OPS-grade hygiene standards required by audit-conscious chains.",
      robots: ["c20"],
      outcomeStat: "400 m²/hr cleaning rate",
    },
  ],

  scenarios: [
    {
      headline: "Mumbai chain — lunch peak solved",
      facility: "Casual-dining chain, Mumbai",
      body: "Two T9 DINERBOTs run delivery between the kitchen and 60 tables during the 12:30–2 PM peak. Waitstaff focus on orders, upselling, and guest experience. The chain reports 25% more covers in the same shift window, with steady NPS.",
    },
    {
      headline: "Fine-dining service without dropping a beat",
      facility: "Five-star property F&B, Delhi-NCR",
      body: "T10 carries main courses from the kitchen to the maître d', who plates and serves at the table. Service standards stay premium; waiters never disappear for a 5-minute kitchen run. The robot is the star of the room — guests Instagram it.",
    },
  ],

  featuredRobotIds: ["t8", "t9", "t10", "t11"],

  faqs: [
    {
      question: "Will guests like the robot or feel cold-served?",
      answer:
        "Both. The DINERBOT delivers food; humans take orders, recommend dishes, manage relationships. Guests in our pilots photograph the robot and post on Instagram — it's a memorable touch, not a cold one. Asian premium F&B chains have used these robots for 5+ years; guest scores went UP, not down.",
    },
    {
      question: "What aisle width do I need?",
      answer:
        "T8 navigates 55 cm aisles; T11 navigates 49 cm — narrowest in the category. Almost every casual-dining and fine-dining layout in India accommodates this. We'll measure during the free site walkthrough.",
    },
    {
      question: "Can the robot integrate with our POS?",
      answer:
        "We've integrated with petpooja, Posist, and other Indian F&B POS systems for order dispatch. The kitchen finishes an order, taps 'send to table 7', and the robot routes itself.",
    },
    {
      question: "What's the ROI for a 60-cover casual-dining restaurant?",
      answer:
        "Typically 14–16 months on direct labour savings during peak meals alone. Indirect lift from faster table turn often shortens this further. A property-specific ROI estimate is part of the audit.",
    },
    {
      question: "Will my waitstaff accept this?",
      answer:
        "Waiters love the robot. It takes the leg-work they hate (kitchen runs, dirty-dish trips) and lets them focus on the relationship work they get tipped for. Tips often go up after deployment.",
    },
  ],
};

const RETAIL: IndustrySolution = {
  slug: "retail",
  id: "retail",
  name: "Retail & Shopping Malls",

  metaTitle: "Mall Cleaning & Customer Service Robots for Indian Retail | Mobilise Robotics",
  metaDescription:
    "Clean a million sq ft overnight, guide shoppers, and lift tenant satisfaction in premium Indian malls with KEENON cleaning and reception robots. 30-day pilot.",

  h1: "Robotic automation for India's malls and large retail facilities",
  heroSubline:
    "Mall-scale autonomous cleaning, multi-lingual wayfinding, and 24/7 lobby presence — built for India's premium retail real estate.",
  heroImage:
    "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=1600&auto=format&fit=crop&q=80",
  heroImageAlt:
    "Modern multi-level mall atrium with curved balconies and teal-lit ceiling — KEENON robots support Indian shopping centre facility management with overnight cleaning, customer wayfinding, and concierge service",

  stats: [
    { value: "2,376 m²/hr", label: "Theoretical cleaning rate (C55)" },
    { value: "1M+ sq ft", label: "Coverable on a single overnight shift" },
    { value: "60 L", label: "Clean-water tank — longest in class" },
    { value: "5 sec", label: "Battery hot-swap for 24-hr duty" },
  ],

  overview: [
    "India's premium mall operators — DLF, Phoenix Marketplace, Inorbit, Brigade, Prestige, High Street Phoenix — manage facilities running into the millions of square feet. Cleaning is outsourced, inconsistent, and expensive. Night-shift labour is increasingly scarce and unreliable. The Sephora lobby that wasn't spotless at 10 AM made it onto a tenant's complaint sheet by 10:05.",
    "Mall ops teams are also pressed on the customer-experience side. Wayfinding signage costs ₹20–25 L a year per property and customers still get lost. Anchor tenants want a premium shopping experience that justifies their rent. And ESG / sustainability reporting wants quantifiable metrics from your operations — not just energy bills.",
    "KEENON's commercial-grade cleaning robots (C40, C55) and reception robot (G1) solve all three. Mobilise deploys, operates, and supports — your CAM-recovery model stays clean, your tenants stay happy, and your facilities team gets per-shift audit logs feeding straight into your CMMS.",
  ],

  painPoints: [
    {
      icon: Users,
      headline: "Night cleaning labour is unreliable and expensive",
      body: "Mall housekeeping contractors churn. Quality is inconsistent across the 2 AM – 6 AM window. Tenant complaints about lobby cleanliness make it onto your Monday review. Adding more contracts isn't the answer.",
    },
    {
      icon: Banknote,
      headline: "CAM costs keep climbing — tenants notice",
      body: "Common Area Maintenance is your recovery line. Tenants benchmark it. When CAM rises faster than tenant sales, you have a renewal problem. Cleaning is the largest CAM component and the most automatable.",
    },
    {
      icon: ClipboardCheck,
      headline: "ESG and IGBC reporting demand evidence",
      body: "Water use, energy use, chemicals use per sq ft cleaned — these need to be reportable for your ESG committee and IGBC certification. Spreadsheets from contractor crews aren't the answer.",
    },
  ],

  serviceAreas: [
    {
      icon: Brush,
      name: "Mall-scale cleaning",
      description:
        "C55 covers 1M+ sq ft on one overnight shift with battery hot-swap. C40 covers food-courts, corridors, and high-traffic zones with sweep + vacuum + scrub in a single pass.",
      robots: ["c40", "c55"],
      outcomeStat: "Up to 2,376 m²/hr",
    },
    {
      icon: MessageSquare,
      name: "Wayfinding & customer service",
      description:
        "G1 GUIDERBOT stations at mall entrances and atriums — wayfinding, FAQ, language assistance, promotion display. Cuts your printed-signage budget by 60–70%.",
      robots: ["g1"],
      outcomeStat: "14+ languages on-device",
    },
    {
      icon: Truck,
      name: "Back-of-house logistics",
      description:
        "Heavy-load couriering of tenant supply, mall ops gear, and inter-floor transport — frees your back-of-house team for higher-value tasks.",
      robots: ["s100"],
      outcomeStat: "100 kg+ per trip",
    },
  ],

  scenarios: [
    {
      headline: "Million sq ft mall, two robots, one overnight shift",
      facility: "Premium mall, Bengaluru",
      body: "Two C55s leave dock at 11 PM, cover the ground-floor and first-floor common areas on autopilot, hot-swap batteries at the back-of-house dock at 2 AM, and return to base by 5:30 AM. The day-shift housekeeping supervisor reviews logs over the morning briefing — every sq ft accounted for.",
    },
    {
      headline: "Multilingual wayfinding for an international-tenant mall",
      facility: "Luxury mall, Mumbai",
      body: "G1 GUIDERBOT at the main entrance handles Hindi, Tamil, Marathi, English, French, and Mandarin enquiries. Cuts security desk wayfinding load by 70%. The dual-screen ad display generates ₹1.5 L+ per month in tenant ad revenue.",
    },
  ],

  featuredRobotIds: ["c40", "c55", "g1", "s100"],

  faqs: [
    {
      question: "What's the impact on my CAM-recovery model?",
      answer:
        "An operating-lease deployment (no capex, pure opex) lets you fold the robot cost straight into your CAM-recovery line — same model as your current contractor spend. Most properties recover within their CAM cycle.",
    },
    {
      question: "How disruptive is this for tenants?",
      answer:
        "Zero disruption during the day. Cleaning robots are scheduled to overnight windows. Customer-service robots (G1) are stationed in common areas where they add value, not crowd. Tenants in our pilots have asked for MORE robots, not fewer.",
    },
    {
      question: "Can the robot handle a 1M+ sq ft property?",
      answer:
        "Yes. C55 specs at 2,376 m²/hr theoretical cleaning rate with battery hot-swap. For a 100K sqm mall (~1M sq ft), two C55s on alternating routes cover the full common-area floor in a single overnight shift.",
    },
    {
      question: "What about water refill during a long shift?",
      answer:
        "C55 carries 60 L of clean water — largest in class. For very large properties, we provision a docking station with autonomous refill / discharge. The robot tops up itself.",
    },
    {
      question: "Will this help our ESG / IGBC reporting?",
      answer:
        "Directly. Per-shift logs capture water use, chemical consumption, energy use, and sq ft cleaned. We provide a quarterly sustainability report feeding straight into IGBC and corporate ESG packs.",
    },
  ],
};

const AVIATION: IndustrySolution = {
  slug: "aviation",
  id: "aviation",
  name: "Airports & Aviation",

  metaTitle: "Airport Cleaning & Passenger Service Robots for Indian Airports | Mobilise",
  metaDescription:
    "Terminal-grade autonomous cleaning, passenger wayfinding, accessibility support, and baggage logistics for India's busiest airports. Built for 24/7 operations.",

  h1: "Robotic automation for India's airports and aviation facilities",
  heroSubline:
    "24/7 terminal cleaning, multi-lingual passenger services, accessibility support, and heavy-load logistics — built for airport-scale operations.",
  heroImage:
    "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=1600&auto=format&fit=crop&q=80",
  heroImageAlt:
    "Aircraft at jet bridge at dusk in a quiet airport terminal — KEENON robots support Indian airport facility management with 24/7 cleaning, passenger wayfinding, and baggage logistics",

  stats: [
    { value: "24/7", label: "Terminal-grade autonomous coverage" },
    { value: "14+", label: "Languages for passenger services" },
    { value: "BCAS-ready", label: "Security documentation kit" },
    { value: "30-day", label: "Paid pilot at one terminal" },
  ],

  overview: [
    "India's aviation sector is the world's fastest-growing — passenger traffic is up 12–18% YoY, and the Adani-GMR-AAI roster of airports keeps adding terminal capacity faster than ops can staff. Mumbai T2, Delhi T3, Bengaluru, and Hyderabad already handle 50,000+ pax/day; smaller GMR / Adani airports are catching up.",
    "Terminal-scale operations are uniquely hard. Cleaning windows are short (every 90 minutes during peak). PRM (Persons with Reduced Mobility) support is labour-intensive and under-delivered. Wayfinding is a 14-language problem. Non-aero revenue (retail, F&B, lounges) needs operational consistency to grow.",
    "KEENON's industrial-grade cleaning (C40, C55), service robots (G1, S100), and heavy-load couriering (S300) are airport-grade products. Mobilise provides the BCAS-ready security documentation, CISF coordination, and 24/7 SLA-aligned support that aviation requires.",
  ],

  painPoints: [
    {
      icon: Plane,
      headline: "24/7 ops, short cleaning windows",
      body: "Terminal floors need to look like new every 90 minutes during peak. Traditional housekeeping crews can't hit that with consistency. Standard kept high or dropped — there's no in-between.",
    },
    {
      icon: Users,
      headline: "Passenger volume rising faster than headcount",
      body: "12–18% YoY passenger growth. Wayfinding staff, info-desk crew, PRM assistants — all stretched thin. Service consistency suffers exactly when ACI scores are the metric.",
    },
    {
      icon: ShieldCheck,
      headline: "Security clearance is the longest lead-time",
      body: "Any new equipment in an airport terminal needs BCAS / CISF clearance — a 3–6 month process. Most vendors aren't ready for this. We are.",
    },
  ],

  serviceAreas: [
    {
      icon: Brush,
      name: "Terminal cleaning at scale",
      description:
        "C55 covers retail concourses, departure halls, and arrival corridors with battery hot-swap for 24-hr duty. Per-shift logs feed your terminal-ops dashboard.",
      robots: ["c40", "c55"],
      outcomeStat: "5 sec battery hot-swap",
    },
    {
      icon: MessageSquare,
      name: "Passenger wayfinding & PRM",
      description:
        "G1 GUIDERBOT at check-in halls and concourses handles 14+ languages, accessibility queries, and basic FAQs. Frees your info-desk team for complex cases.",
      robots: ["g1"],
      outcomeStat: "14+ languages",
    },
    {
      icon: Truck,
      name: "Back-of-house & baggage logistics",
      description:
        "S100 and S300 handle terminal-side material movement (300 kg+), inter-departmental transport, and bay-to-bay logistics — frees ground-handling crews.",
      robots: ["s100", "s300"],
      outcomeStat: "Up to 300 kg per run",
    },
  ],

  scenarios: [
    {
      headline: "Terminal cleaning between peak departures",
      facility: "International airport, South India",
      body: "Two C55s run the retail concourse on 90-minute cycles between peak departures. The terminal ops team monitors per-shift sq ft and chemical use from the central dashboard. ACI score for cleanliness moves from 4.1 to 4.6 inside a quarter.",
    },
    {
      headline: "Multilingual passenger services at the international arrival hall",
      facility: "Metro airport, India",
      body: "G1 handles 14-language wayfinding and basic FAQs at the international arrival exit. Average info-desk wait time drops from 8 minutes to 2. Non-English speaking passengers self-serve at the robot 70% of the time.",
    },
  ],

  featuredRobotIds: ["c40", "c55", "g1", "s100"],

  faqs: [
    {
      question: "Is the robot BCAS / CISF approved for airport deployment?",
      answer:
        "Mobilise provides a complete BCAS / CISF documentation kit including security clearance support, source-code escrow (if required), data residency commitment, and ground-handling integration plan. We've supported clearance processes at multiple Indian airports.",
    },
    {
      question: "Can the robot work offline if airport Wi-Fi is unreliable?",
      answer:
        "Yes. All KEENON robots support offline operation for core navigation and core delivery. Cloud features (dashboards, fleet management) require connectivity but aren't operationally critical. The robot keeps running even if the WAN drops.",
    },
    {
      question: "How do you handle airport peak surges?",
      answer:
        "C55 with battery hot-swap is rated for 24-hour duty cycles. For peak operations, we deploy multiple robots on coordinated routes — they handle Delhi T3 / Mumbai T2 scale comfortably. Sample deployments at this scale are running in Singapore and Incheon.",
    },
    {
      question: "What's your typical airport SLA?",
      answer:
        "24/7 on-call with 4-hour response from our regional service engineer. Backup robot available within 24 hours if a unit needs to be pulled. Spare parts stocked in India.",
    },
  ],
};

const CORPORATE: IndustrySolution = {
  slug: "corporate",
  id: "corporate",
  name: "Corporate Campuses & Tech Parks",

  metaTitle: "Corporate Campus & Tech Park Robotic Automation | Mobilise Robotics India",
  metaDescription:
    "Cleaning, mailroom, cafeteria, and reception automation for India's IT parks, SEZs, and corporate campuses. Built for TCS, Infosys, Wipro-scale operations. 30-day pilot.",

  h1: "Robotic automation for India's corporate campuses, tech parks, and SEZs",
  heroSubline:
    "Bring employees back to office with a workplace that runs itself. Autonomous cleaning, cafeteria delivery, mailroom, and reception — for IT parks, SEZs, and corporate HQs.",
  heroImage:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80",
  heroImageAlt:
    "Modern corporate corridor with glass-walled offices and teal accent wall — KEENON robots support Indian corporate facility management across cleaning, mailroom, cafeteria, and reception",

  stats: [
    { value: "<48 hrs", label: "Deployment at your campus" },
    { value: "8 hrs", label: "Daily cafeteria peak handled per robot" },
    { value: "5 K+", label: "Employees served per campus" },
    { value: "BMS-ready", label: "Per-shift CMMS / BMS integration" },
  ],

  overview: [
    "India's IT parks, SEZs, and corporate campuses are facing a peculiar problem. Return-to-office is the #1 board-level priority. Cafeteria wait times are the #1 employee complaint. The workplace experience your CHRO promised in the all-hands isn't shipping at scale. Meanwhile, your facility services contractor is doing the same job for 35–55% more than they were in 2019.",
    "Campus-scale workplaces — TCS, Infosys, Wipro, Reliance, Flipkart, BYJU'S, Tata — have the volume to make robotic automation pay back fast. A C30 cleaning robot pays for itself inside a year on labour costs alone. Cafeteria delivery robots cut the lunch-peak wait time in half. Reception robots free your front-desk for visitor relationships, not check-ins.",
    "Mobilise deploys these into Indian corporate campuses with BMS / lift / Wi-Fi integration, IT-security clearance, and per-shift logs into your CMMS. The CFO sees predictable opex. The CHRO sees a workplace that looks like the future. The facility manager sees an SLA they can actually hit.",
  ],

  painPoints: [
    {
      icon: Building2,
      headline: "Bringing employees back to office requires a workplace that earns it",
      body: "Cafeteria wait times, slow visitor management, inconsistent cleanliness — these are the small frictions that make WFH feel better. Fix them and RTO becomes easier.",
    },
    {
      icon: Banknote,
      headline: "Facility services spend keeps rising",
      body: "Your housekeeping contract is up 35–55% in three years. Cafeteria labour costs are climbing. The unit economics of a 24/7 campus are getting harder. Automation is the only lever left.",
    },
    {
      icon: ClipboardCheck,
      headline: "Sustainability + IGBC certification needs evidence",
      body: "Your ESG team needs water-per-sq-ft, energy-per-employee, and waste metrics they can defend. Manual data collection isn't credible. IGBC and LEED audits want per-shift evidence.",
    },
  ],

  serviceAreas: [
    {
      icon: Brush,
      name: "Office cleaning",
      description:
        "C20 and C30 KLEENBOTs run autonomous floor cleaning across office floors, lobbies, and common areas. Per-shift logs feed your BMS / CMMS dashboards.",
      robots: ["c20", "c30"],
      outcomeStat: "600 m²/hr cleaning rate",
    },
    {
      icon: Package,
      name: "Cafeteria & food court delivery",
      description:
        "T9 and T11 DINERBOTs deliver food orders from cafeteria counters to tables, cutting the lunch-peak wait time. T11's narrow-aisle navigation handles open-plan cafeterias.",
      robots: ["t9", "t11"],
      outcomeStat: "Cuts lunch-peak wait by 50%",
    },
    {
      icon: Truck,
      name: "Mailroom & inter-building logistics",
      description:
        "S100 BUTLERBOT moves internal mail, courier packages, and documents across multi-building campuses — including cross-block transport on IT-park scale.",
      robots: ["s100"],
      outcomeStat: "Cross-floor cross-building autonomous",
    },
    {
      icon: MessageSquare,
      name: "Reception & visitor management",
      description:
        "G1 GUIDERBOT at lobby and reception handles visitor check-in, wayfinding, FAQs, and basic concierge. Integrates with VMS systems (Envoy, Condeco, etc.).",
      robots: ["g1"],
      outcomeStat: "14+ languages supported",
    },
  ],

  scenarios: [
    {
      headline: "Lunch peak at a 5,000-employee tech park",
      facility: "IT SEZ, Hyderabad",
      body: "Three T9 DINERBOTs run between the cafeteria counter and table-zones during 12:30–2 PM. Average wait time drops from 18 minutes to 7. Employee cafeteria usage rises 25% within a quarter — fewer Swiggy orders, more on-campus revenue.",
    },
    {
      headline: "Multi-building mailroom autonomous",
      facility: "Corporate campus, NCR",
      body: "S100 BUTLERBOT runs a scheduled circuit across four buildings, delivering internal mail, returning courier collections, and ferrying secure documents — cross-floor via IoT lifts. Cuts mailroom labour cost by 60% and improves delivery time by 70%.",
    },
    {
      headline: "Reception at a multi-tenant office tower",
      facility: "Premium office building, Bengaluru",
      body: "G1 at the main lobby greets visitors, scans QR codes from VMS, and directs them to the right floor. Average visitor check-in time drops from 4 minutes to under 1. Front-desk team focuses on VIP and complex visitors.",
    },
  ],

  featuredRobotIds: ["c30", "t9", "s100", "g1"],

  faqs: [
    {
      question: "How does this integrate with our BMS / CMMS?",
      answer:
        "We integrate per-shift logs (cleaning sq ft, robot uptime, exceptions) directly into your BMS or CMMS via API. Common integrations are Honeywell Forge, Siemens Desigo, IBM TRIRIGA, and Service Channel. For systems we don't already integrate with, we deliver a JSON feed your team can wire in.",
    },
    {
      question: "What about IT security and data residency?",
      answer:
        "All robot data is processed locally on the device by default. Cloud features (fleet management, dashboards) use AWS Mumbai or your own private cloud. We support enterprise IT-security review with VA/PT reports, source code escrow (if required), and SOC 2 documentation from KEENON.",
    },
    {
      question: "Does this work in multi-tenant office buildings?",
      answer:
        "Yes. We deploy in multi-tenant towers where the building services team is the customer, not individual tenants. Cleaning + reception robots are common-area assets. Tenant-specific deployments (e.g., a single floor's mailroom) are also supported.",
    },
    {
      question: "What's the typical ROI for a corporate campus?",
      answer:
        "For a 5,000-employee tech-park campus, cleaning + cafeteria + mailroom + reception deployment typically pays back in 10–14 months on labour cost reduction alone. Employee-experience uplift is additional value not captured in this number.",
    },
    {
      question: "Can we deploy in stages?",
      answer:
        "Absolutely — most customers do. Start with one robot at one campus (typically cafeteria delivery or office cleaning), prove the ROI, then scale across the rest of the portfolio. A 30-day pilot at one site is the standard starting point.",
    },
  ],
};

/** Map of slug → industry data. URL pattern: /solutions/{slug}. */
export const INDUSTRY_SOLUTIONS: Record<string, IndustrySolution> = {
  hospitality: HOSPITALITY,
  healthcare: HEALTHCARE,
  "food-beverage": FOOD_BEVERAGE,
  retail: RETAIL,
  aviation: AVIATION,
  corporate: CORPORATE,
};

/** Ordered list for navigation / index page. */
export const ALL_INDUSTRY_SOLUTIONS: IndustrySolution[] = [
  HOSPITALITY,
  HEALTHCARE,
  FOOD_BEVERAGE,
  RETAIL,
  AVIATION,
  CORPORATE,
];

export function getIndustryBySlug(slug: string): IndustrySolution | undefined {
  return INDUSTRY_SOLUTIONS[slug];
}
