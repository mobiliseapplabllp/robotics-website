/**
 * Per-robot detail content for `/products/{slug}` pages.
 *
 * Per BRAND.md: no banned superlatives ("world-first/best/leading/only"),
 * no India-specific deployment claims, no specific customer names. All
 * commercial bands are indicative — exact quotes are never displayed.
 *
 * Joined to src/app/data/products.ts by `slug`.
 */

import type { ProductDetail } from "./types";

const T3: ProductDetail = {
  slug: "t3",
  positioning:
    "Enclosed-cabin delivery robot for secure, hygienic, and private indoor distribution — fine dining, hospital wards, and hotel room service where contents must stay clean and unseen in transit.",
  seoDescription:
    "KEENON T3 enclosed-cabin delivery robot for India — secure pharmacy, hotel, and hospital ward delivery with step-activated doors and a 180 L cabin.",
  galleryCaptions: [
    "Step-activated automatic doors keep contents secured",
    "180 L cabin with adjustable shelf heights",
    "Vehicle-grade suspension protects every dish",
    "Private delivery for pharmacy, hotel, and fine dining",
  ],
  quickFacts: [
    { icon: "Boxes", label: "Cabin volume", value: "180 L" },
    { icon: "Package", label: "Payload", value: "40 kg" },
    { icon: "Battery", label: "Battery life", value: "Up to 12 hr" },
    { icon: "Ruler", label: "Min passage", value: "75 cm" },
  ],
  differentiators: [
    {
      icon: "DoorClosed",
      title: "Step-activated, password-secured doors",
      desc: "Cabin doors open hands-free and lock until a delivery code is entered — critical for medication, alcohol, and private dining contexts.",
      proof: "Step-activated & password-secured automatic doors",
    },
    {
      icon: "Layers",
      title: "Adjustable layers for mixed loads",
      desc: "Three shelf heights (23 / 38 / 69 cm) reconfigure on the fly — soup bowls, plated mains, and tall covered platters all fit on one trip.",
      proof: "Adjustable heights: 23 cm, 38 cm, 69 cm",
    },
    {
      icon: "Activity",
      title: "Vehicle-grade independent suspension",
      desc: "Independent shock absorption keeps soups level and dishes plated across thresholds, lift gaps, and uneven heritage flooring.",
      proof: "Slope tolerance ≤ 5° with full payload",
    },
  ],
  workflow: [
    { step: "01", icon: "MessageSquare", title: "Order assigned", desc: "Kitchen / pharmacy staff load the order via the touchscreen, set the destination, and dispatch." },
    { step: "02", icon: "DoorClosed", title: "Secure loading", desc: "Items go into the enclosed 180 L cabin. Doors lock; staff steps back." },
    { step: "03", icon: "Compass", title: "Autonomous delivery", desc: "vSLAM + 3D perception navigate to the destination, including through IoT-integrated lifts." },
    { step: "04", icon: "BadgeCheck", title: "Verified handover", desc: "Recipient enters the delivery code; correct cabin unlocks. Robot returns to dock or next task." },
  ],
  specGroups: [
    {
      title: "Dimensions & weight",
      icon: "Ruler",
      rows: [
        { label: "Footprint (W × D × H)", value: "496 × 623 × 1351 mm" },
        { label: "Weight", value: "71 kg" },
        { label: "Cabin volume", value: "180 L" },
        { label: "Layer sizes", value: "422 × 575 mm" },
      ],
    },
    {
      title: "Performance",
      icon: "Gauge",
      rows: [
        { label: "Load capacity", value: "40 kg total" },
        { label: "Speed", value: "0.1–1.0 m/s" },
        { label: "Battery life", value: "Up to 12 hours" },
        { label: "Min passage width", value: "75 cm" },
        { label: "Slope tolerance", value: "≤ 5°" },
      ],
    },
    {
      title: "Sensing & navigation",
      icon: "Radar",
      rows: [
        { label: "Navigation", value: "Precise positioning + vSLAM" },
        { label: "Obstacle avoidance", value: "Synergistic 3D perception" },
        { label: "Multi-robot dispatch", value: "Supported" },
      ],
    },
    {
      title: "Software & security",
      icon: "ShieldCheck",
      rows: [
        { label: "Door control", value: "Step-activated & password-secured" },
        { label: "Adjustable heights", value: "23 / 38 / 69 cm" },
        { label: "Fleet management", value: "KEENON Cloud (GDPR-certified)" },
      ],
    },
  ],
  industryFits: [
    { industry: "Healthcare", solutionsSlug: "healthcare", scenario: "Medication and meal rounds — locked cabins prevent tampering and cross-contamination.", recommendedPilot: "Single ward, 4-week pilot covering pharmacy + dietary delivery." },
    { industry: "Hospitality", solutionsSlug: "hospitality", scenario: "5-star private dining and butler-style room service where guests value privacy.", recommendedPilot: "One executive floor, dinner-shift only for 30 days." },
    { industry: "Food & Beverage", solutionsSlug: "food-beverage", scenario: "Banquets and catering where dishes must travel covered and unopened.", recommendedPilot: "One catering event-week, two robots paired with manual servers." },
  ],
  commercials: {
    pilotOffer: "30-day pilot at one property, one robot. Exit-clean if pilot KPIs aren't met.",
    leadTime: "8–12 weeks from PO to commissioning in tier-1 metros.",
  },
  familyMembers: [
    { slug: "w3", model: "W3", differentiator: "Multi-cabin variant of the enclosed delivery concept — ideal for high-volume cross-floor rounds." },
    { slug: "t11", model: "T11", differentiator: "Open-tray sibling for environments where speed of pickup beats privacy." },
  ],
  faqs: [
    { q: "Does the T3 work without lifts?", a: "Yes — the T3 is a single-floor robot by default. Cross-floor operation requires IoT-integrated lifts and is configured per property." },
    { q: "What's the noise level?", a: "Approximately 50–55 dB at 1 m — quieter than typical conversation. Suitable for hospital wards and fine-dining environments." },
    { q: "How many delivery codes can it support?", a: "The T3 supports per-delivery codes and admin overrides through the KEENON fleet management console." },
    { q: "What floor surfaces does it handle?", a: "Tile, polished stone, vinyl, hardwood, and short-pile carpet. Heritage uneven flooring is assessed during the site survey." },
    { q: "How long does deployment take?", a: "A typical T3 deployment takes 2–3 days: site survey, mapping, lift integration if needed, and operator training." },
    { q: "What happens if it encounters an unexpected obstacle?", a: "3D perception detects obstacles, stops the robot, and announces — staff or the obstructing person can clear the path before the T3 resumes." },
  ],
  relatedPostSlugs: ["hotel-room-service-robot-roi"],
};

const T5: ProductDetail = {
  slug: "t5",
  positioning:
    "Four-tray workhorse delivery robot for high-volume restaurants, hotels, and canteens — proven KEENON platform optimised for continuous double-shift service with multi-point delivery.",
  seoDescription:
    "KEENON T5 four-tray delivery robot for Indian restaurants, hotels, and corporate canteens — 40 kg payload, multi-point delivery, 12+ hour battery.",
  galleryCaptions: [
    "Four-tray multi-point delivery across busy dining rooms",
    "SLAM + LiDAR + 3D cameras for crowded layouts",
    "Animated 7-inch display with 14+ languages",
    "12-hour battery for full double-shift service",
  ],
  quickFacts: [
    { icon: "Layers", label: "Trays", value: "4 adjustable" },
    { icon: "Package", label: "Payload", value: "40 kg (10 kg/tray)" },
    { icon: "Battery", label: "Battery life", value: "≥ 12 hr" },
    { icon: "MessageSquare", label: "Languages", value: "14+" },
  ],
  differentiators: [
    {
      icon: "MapPin",
      title: "Multi-point delivery in one trip",
      desc: "Serve up to 3 different tables on a single dispatch — designed for the busy 7:30 pm rush where a single-stop robot would round-trip endlessly.",
      proof: "Up to 3 tables per order",
    },
    {
      icon: "Radar",
      title: "Multi-sensor fusion navigation",
      desc: "SLAM + LiDAR + RGBD cameras + collision sensors + infrared. Complex layouts with banquettes, kids, and waitstaff don't faze it.",
      proof: "5 sensor types fused via KEENON algorithms",
    },
    {
      icon: "MonitorSmartphone",
      title: "Hospitality-grade interface",
      desc: "7-inch Android touchscreen, 9 customisable facial expressions, 14+ languages — fits a multilingual Indian-tourist clientele without re-engineering.",
      proof: "7\" touchscreen, 14+ languages",
    },
  ],
  workflow: [
    { step: "01", icon: "Utensils", title: "Loaded at the pass", desc: "Kitchen plates onto adjustable trays — up to 10 kg per shelf. Single tap dispatches with destination set." },
    { step: "02", icon: "Compass", title: "Multi-stop routing", desc: "T5 visits up to 3 tables in a single trip. Voice prompts identify the table at each stop." },
    { step: "03", icon: "Hand", title: "Self-service pickup", desc: "Guests collect from the open trays. Tray-clear detection triggers the next stop." },
    { step: "04", icon: "Zap", title: "Autonomous return", desc: "Empty robot returns to the pass or auto-charging dock between rushes." },
  ],
  specGroups: [
    {
      title: "Dimensions & weight",
      icon: "Ruler",
      rows: [
        { label: "Footprint (W × D × H)", value: "506 × 502 × 1205 mm" },
        { label: "Weight", value: "55 kg" },
        { label: "Tray size (top)", value: "490 × 404 × 188 mm" },
        { label: "Tray size (others)", value: "490 × 404 × 176 mm" },
      ],
    },
    {
      title: "Performance",
      icon: "Gauge",
      rows: [
        { label: "Load capacity", value: "40 kg total (10 kg per tray)" },
        { label: "Max speed", value: "1.2 m/s (auto-slowed on slope)" },
        { label: "Battery life", value: "≥ 12 hours" },
        { label: "Charging time", value: "5 hours" },
        { label: "Min passage width", value: "70 cm" },
        { label: "Slope tolerance", value: "≤ 5°" },
      ],
    },
    {
      title: "Sensing & navigation",
      icon: "Radar",
      rows: [
        { label: "Navigation", value: "SLAM + LIDAR + 3D cameras + UWB" },
        { label: "Obstacle avoidance", value: "Collision sensors + infrared" },
        { label: "Multi-robot collaboration", value: "Supported" },
      ],
    },
    {
      title: "Software & connectivity",
      icon: "Cpu",
      rows: [
        { label: "OS", value: "Android" },
        { label: "Display", value: "7\" touchscreen (1024 × 600)" },
        { label: "Languages", value: "14+" },
        { label: "Expressions", value: "9 customisable facial expressions" },
      ],
    },
  ],
  industryFits: [
    { industry: "Food & Beverage", solutionsSlug: "food-beverage", scenario: "Casual-dining chains with ₹500–800 average covers and 100+ daily orders per outlet.", recommendedPilot: "One flagship outlet, two robots, lunch + dinner shifts for 30 days." },
    { industry: "Hospitality", solutionsSlug: "hospitality", scenario: "Mid-tier hotel F&B — buffet runners, banquet support, club-lounge service.", recommendedPilot: "One restaurant within the property, dinner shift only." },
    { industry: "Corporate", solutionsSlug: "corporate", scenario: "Cafeteria service in IT campuses with 1000+ daily covers across split lunch windows.", recommendedPilot: "Single canteen, peak lunch window, 2-week initial trial." },
  ],
  commercials: {
    pilotOffer: "30-day pilot. Two robots paired with manual servers to validate the routing-and-pickup workflow.",
    leadTime: "6–10 weeks from PO to commissioning.",
  },
  familyMembers: [
    { slug: "t8", model: "T8", differentiator: "Tighter passages (55 cm) and lighter chassis — better for boutique restaurants and narrow corridors." },
    { slug: "t9", model: "T9", differentiator: "Premium variant with vehicle-grade suspension and 18 hr battery — for higher-end properties." },
    { slug: "t10", model: "T10", differentiator: "Flagship with 23.8\" interactive display — for luxury properties prioritising guest engagement." },
  ],
  faqs: [
    { q: "Can the T5 work in a restaurant with steps or split levels?", a: "T5 handles slopes up to 5°. Stairs or vertical drops aren't supported — the site survey identifies route adjustments before deployment." },
    { q: "How does multi-point delivery work in practice?", a: "Staff selects up to 3 destinations at load time. T5 plans the optimal route and announces at each stop. Trays clear on pickup detection." },
    { q: "What languages are supported out of the box?", a: "14+ including Hindi, English, Tamil, Telugu, Bengali, Marathi, Kannada, and Mandarin. Custom voices and greetings are configurable." },
    { q: "Can it carry hot soup without spillage?", a: "Yes — speed auto-adjusts on slope and acceleration is dampened. We recommend lidded soup serveware as standard practice for any robot delivery." },
    { q: "What about charging during peak service?", a: "Battery life exceeds 12 hours — full double-shift on one charge. Auto-docking handles overnight recharge." },
    { q: "Does it interfere with existing kitchen workflow?", a: "T5 deploys in the pass / staging area. Staff plate as usual and tap to dispatch — no kitchen redesign required." },
  ],
};

const T8: ProductDetail = {
  slug: "t8",
  positioning:
    "Compact delivery robot for narrow corridors and boutique layouts — navigates passages as tight as 55 cm with smart self-pickup guidance and 204° vision coverage.",
  seoDescription:
    "KEENON T8 compact delivery robot for India — 55 cm passages, 204° vision, smart self-pickup. Ideal for boutique hotels and tight restaurant layouts.",
  galleryCaptions: [
    "55 cm passages — fits where bigger robots can't",
    "Three stereo sensors scan 204° for obstacles",
    "Smart self-pickup with tray-sensor confirmation",
    "10.1-inch touchscreen with multi-language voice",
  ],
  quickFacts: [
    { icon: "Ruler", label: "Min passage", value: "55 cm" },
    { icon: "Package", label: "Payload", value: "20 kg" },
    { icon: "Battery", label: "Battery life", value: "Up to 15 hr" },
    { icon: "Eye", label: "Vision coverage", value: "204°" },
  ],
  differentiators: [
    {
      icon: "Compass",
      title: "55 cm passage width",
      desc: "The narrowest in the KEENON delivery line. Heritage hotel corridors, boutique restaurants, and dense ward layouts that block bigger robots — T8 fits.",
      proof: "Min passage 55 cm — verified at commissioning",
    },
    {
      icon: "Hand",
      title: "Smart self-pickup",
      desc: "Tray weight + infrared sensors detect when guests collect orders. Voice prompts in 10+ Indian languages guide novice users automatically.",
      proof: "300° open tray + per-tray sensors",
    },
    {
      icon: "Eye",
      title: "204° dynamic obstacle detection",
      desc: "Three stereo vision sensors detect obstacles as low as 5 cm — children's bags, dropped napkins, pulled-out chair legs.",
      proof: "3 stereo sensors, sub-5 cm detection",
    },
  ],
  workflow: [
    { step: "01", icon: "Utensils", title: "Quick-load at pass", desc: "Open-tray design — no doors to wait on. Staff plates and dispatches in under 5 seconds." },
    { step: "02", icon: "Compass", title: "Narrow-route navigation", desc: "SLAM + LIDAR + IMU + UWB plot the safest route through 55 cm-wide passages." },
    { step: "03", icon: "Hand", title: "Guided pickup", desc: "Voice + tray-light prompts identify the right tray. Sensor confirms pickup before T8 moves on." },
    { step: "04", icon: "Zap", title: "Auto-dock", desc: "Returns to charging dock between runs. 4-hour charge from 15% to 100%." },
  ],
  specGroups: [
    {
      title: "Dimensions & weight",
      icon: "Ruler",
      rows: [
        { label: "Footprint (W × D × H)", value: "384 × 468 × 1111 mm" },
        { label: "Weight", value: "34 kg" },
        { label: "Tray access", value: "300° open design" },
      ],
    },
    {
      title: "Performance",
      icon: "Gauge",
      rows: [
        { label: "Load capacity", value: "20 kg total" },
        { label: "Max speed", value: "1.0 m/s" },
        { label: "Battery life", value: "Up to 15 hours" },
        { label: "Charging time", value: "4 hours (15% → 100%)" },
        { label: "Min passage width", value: "55 cm" },
        { label: "Slope tolerance", value: "≤ 5°" },
      ],
    },
    {
      title: "Sensing & navigation",
      icon: "Radar",
      rows: [
        { label: "Navigation", value: "SLAM + LiDAR + IMU + UWB" },
        { label: "Vision", value: "3 stereo sensors, 204° coverage" },
        { label: "Min obstacle detected", value: "Under 5 cm height" },
      ],
    },
    {
      title: "Software & connectivity",
      icon: "Cpu",
      rows: [
        { label: "Display", value: "10.1\" touchscreen" },
        { label: "Connectivity", value: "Wi-Fi 2.4 / 5 GHz" },
        { label: "Languages", value: "Multi-language voice (10+ Indian languages)" },
        { label: "Fleet management", value: "KEENON Cloud" },
      ],
    },
  ],
  industryFits: [
    { industry: "Hospitality", solutionsSlug: "hospitality", scenario: "Boutique hotels and heritage properties where standard 70 cm-passage robots can't operate.", recommendedPilot: "One floor or one wing, 30-day pilot through the narrowest corridor segment." },
    { industry: "Food & Beverage", solutionsSlug: "food-beverage", scenario: "Casual-dining chains with tight aisle layouts — typically 65–75 cm clearances between tables.", recommendedPilot: "One outlet, dinner shift only, two robots." },
    { industry: "Healthcare", solutionsSlug: "healthcare", scenario: "Ward-level meal distribution in older hospital buildings with narrower corridors.", recommendedPilot: "Single floor, breakfast + lunch round, 4 weeks." },
  ],
  commercials: {
    pilotOffer: "30-day pilot. Recommended start point for first-time operators because of the lower CapEx and quick payback.",
    leadTime: "6–8 weeks from PO to commissioning.",
  },
  familyMembers: [
    { slug: "t5", model: "T5", differentiator: "4-tray workhorse — more capacity but needs 70 cm passages." },
    { slug: "t9", model: "T9", differentiator: "Premium option with 18 hr battery, vehicle-grade suspension, and 11.6\" display." },
    { slug: "t11", model: "T11", differentiator: "Even narrower (49 cm) with 5 stereo sensors — bleeding-edge tight-space variant." },
  ],
  faqs: [
    { q: "Does 55 cm passage mean 55 cm robot width?", a: "T8 is 384 mm (38.4 cm) wide. 55 cm refers to the minimum clearance it needs to navigate safely with obstacle margin — not the physical robot width." },
    { q: "Can it climb steps?", a: "No. T8 handles slopes up to 5° (smooth ramps) but not stairs. Multi-floor operation requires IoT-integrated lifts." },
    { q: "How does self-pickup detection work?", a: "Each tray has a weight sensor and infrared. When weight drops on a tray and the IR confirms hand presence, the system marks that delivery complete." },
    { q: "What's the noise level?", a: "Approximately 55 dB at 1 m. Quieter than ambient restaurant chatter." },
    { q: "How long does mapping take during commissioning?", a: "Typically 2–4 hours per floor depending on layout complexity. Re-mapping after renovation is fully customer-controlled." },
    { q: "Can two T8s pass each other in a 55 cm corridor?", a: "No — that would require ≥120 cm clearance. Multi-robot fleets coordinate via KEENON Cloud to prevent head-on contention in narrow segments." },
  ],
};

const T9: ProductDetail = {
  slug: "t9",
  positioning:
    "Premium 3-tray delivery robot with vehicle-grade suspension and 18-hour battery — the longest-running KEENON delivery platform, built for double-shift hospitality and healthcare service.",
  seoDescription:
    "KEENON T9 premium delivery robot for India — 18-hour battery, vehicle-grade suspension, marker-free VSLAM. Built for 5-star hotels and tertiary hospitals.",
  galleryCaptions: [
    "Vehicle-grade suspension protects every dish",
    "18-hour battery for full double-shift service",
    "Marker-free VSLAM through busy corridors",
    "11.6-inch animated display engages every guest",
  ],
  quickFacts: [
    { icon: "Battery", label: "Battery life", value: "Up to 18 hr" },
    { icon: "Package", label: "Payload", value: "40 kg" },
    { icon: "Activity", label: "Suspension", value: "Vehicle-grade" },
    { icon: "MonitorSmartphone", label: "Display", value: "11.6\" HD" },
  ],
  differentiators: [
    {
      icon: "Activity",
      title: "CAE-simulated vehicle-grade suspension",
      desc: "Spring-dampened chassis tested in CAE simulation. Soups, cocktails, plated mains stay perfectly presented across thresholds, ramps, and lift gaps.",
      proof: "Independent suspension; trio-patented chassis design",
    },
    {
      icon: "Battery",
      title: "18-hour battery life",
      desc: "The longest runtime in the KEENON delivery family — full double-shift on one charge. Auto-docks overnight without operator intervention.",
      proof: "≥ 18 hr on a single charge",
    },
    {
      icon: "Compass",
      title: "Marker-free VSLAM deployment",
      desc: "No QR codes, magnetic strips, or floor markings. Mapping happens once during commissioning; T9 navigates from the resulting model directly.",
      proof: "VSLAM — Vision-based SLAM, infrastructure-free",
    },
  ],
  workflow: [
    { step: "01", icon: "Utensils", title: "Plate & dispatch", desc: "Three adjustable trays accept mixed payloads up to 40 kg total. Touch-dispatch to the destination." },
    { step: "02", icon: "Activity", title: "Suspended transit", desc: "Vehicle-grade chassis absorbs thresholds and minor floor unevenness. Speed adapts to load." },
    { step: "03", icon: "MessageSquare", title: "Arrival announcement", desc: "11.6\" animated display engages the guest. Voice prompt in their preferred language identifies the order." },
    { step: "04", icon: "Zap", title: "Return & charge", desc: "Empty robot returns to next task or charging dock. Marker-free routing means no infrastructure to maintain." },
  ],
  specGroups: [
    {
      title: "Dimensions & weight",
      icon: "Ruler",
      rows: [
        { label: "Footprint (W × D × H)", value: "500 × 527 × 1266 mm" },
        { label: "Weight", value: "45.2 kg" },
        { label: "Tray size (upper 3)", value: "486 × 384 mm" },
        { label: "Adjustable heights", value: "19.5 / 16.9 / 25.3 / 22.8 cm" },
      ],
    },
    {
      title: "Performance",
      icon: "Gauge",
      rows: [
        { label: "Load capacity", value: "40 kg total (3 trays × ~13 kg)" },
        { label: "Max speed", value: "0.8 m/s (slope-adaptive)" },
        { label: "Battery life", value: "Up to 18 hours" },
        { label: "Min passage width", value: "70 cm" },
        { label: "Slope tolerance", value: "≤ 5°" },
        { label: "Suspension", value: "Vehicle-grade, CAE-simulated" },
      ],
    },
    {
      title: "Sensing & navigation",
      icon: "Radar",
      rows: [
        { label: "Navigation", value: "VSLAM (marker-free)" },
        { label: "Perception", value: "Synergistic 3D with instant response" },
        { label: "Elevator integration", value: "Supported (IoT)" },
      ],
    },
    {
      title: "Software & connectivity",
      icon: "Cpu",
      rows: [
        { label: "Display", value: "11.6\" HD (1920 × 1080)" },
        { label: "Connectivity", value: "Wi-Fi / 4G LTE optional" },
        { label: "Branding", value: "Custom voice, expressions, livery" },
        { label: "Fleet management", value: "Multi-robot dispatch via KEENON Cloud" },
      ],
    },
  ],
  industryFits: [
    { industry: "Hospitality", solutionsSlug: "hospitality", scenario: "5-star property room service, club-lounge runs, banquet support — anywhere presentation matters.", recommendedPilot: "One floor or one F&B outlet, 30-day pilot covering dinner + late-night service." },
    { industry: "Healthcare", solutionsSlug: "healthcare", scenario: "Hospital ward meal rounds and pharmacy distribution in tertiary-care facilities.", recommendedPilot: "Single ward, breakfast + lunch + dinner rounds, 4 weeks." },
    { industry: "Food & Beverage", solutionsSlug: "food-beverage", scenario: "Fine-dining chains with curated plating where soup-level stability is a non-negotiable.", recommendedPilot: "Single outlet, dinner only, two robots." },
  ],
  commercials: {
    pilotOffer: "30-day pilot. Ideal fit for properties with brand-presentation sensitivity.",
    leadTime: "6–10 weeks from PO to commissioning.",
  },
  familyMembers: [
    { slug: "t8", model: "T8", differentiator: "Compact entry with 55 cm passages — better for tight-space outlets at half the CapEx." },
    { slug: "t9-pro", model: "T9 Pro", differentiator: "Ultra-premium with enhanced stereo sensors — for the most demanding luxury properties." },
    { slug: "t10", model: "T10", differentiator: "Flagship with 23.8\" interactive display — when the robot itself is the experience." },
  ],
  faqs: [
    { q: "What does 'CAE-simulated suspension' mean in practice?", a: "Each spring rate and damper coefficient was modelled in Computer-Aided Engineering simulation before manufacturing. The end result: soup doesn't slosh and wine stays in the glass over normal floor transitions." },
    { q: "Why is the battery life so much longer than T5/T8?", a: "T9 uses a higher-capacity 48V × 20Ah pack and more efficient motors. The trade-off is +10 kg vs T8 and longer charge time (4.5 hours)." },
    { q: "Does the 11.6\" display support custom branding?", a: "Yes — custom animations, hotel logos, voice prompts, and full livery skins. Most properties run a 'standby loop' showcasing amenities when the robot isn't actively delivering." },
    { q: "Can the T9 work across multiple floors?", a: "Yes, with IoT-integrated lifts. Lift integration takes 1–2 days during commissioning depending on the building system." },
    { q: "How does VSLAM handle environmental change?", a: "Minor changes (furniture rearrangement, new wall décor) are tolerated automatically. Major renovations require a 1–2 hour re-mapping session." },
    { q: "Is T9 quiet enough for late-night room service?", a: "Approximately 52 dB at 1 m — quieter than typical conversation. Suitable for 11 pm–3 am operation in guest corridors." },
  ],
  relatedPostSlugs: ["welcome-to-mobilise-robotics", "service-robots-india-tipping-point"],
};

const T9_PRO: ProductDetail = {
  slug: "t9-pro",
  positioning:
    "Ultra-premium variant of the T9 platform with enhanced stereo vision — for luxury hotels, fine dining, and high-stakes healthcare environments where service consistency is non-negotiable.",
  seoDescription:
    "KEENON T9 Pro ultra-premium delivery robot for India — enhanced stereo vision, vehicle-grade suspension, 4-hour fast charge. Built for luxury hospitality.",
  galleryCaptions: [
    "Enhanced stereo vision for luxury hotel corridors",
    "CAE-simulated suspension protects every plate",
    "11.6-inch HD animated display with custom livery",
    "4-hour fast charge for triple-shift premium service",
  ],
  quickFacts: [
    { icon: "Eye", label: "Vision", value: "Enhanced stereo + 3D depth" },
    { icon: "Package", label: "Payload", value: "40 kg" },
    { icon: "Battery", label: "Battery life", value: "Up to 15 hr" },
    { icon: "Zap", label: "Fast charge", value: "4 hr" },
  ],
  differentiators: [
    {
      icon: "Eye",
      title: "Enhanced stereo vision",
      desc: "Upgraded sensors over the standard T9. Performs better in dynamic environments with high foot traffic and complex visual conditions (low light, mixed lighting, reflective floors).",
      proof: "Enhanced stereo vision + 3D depth perception",
    },
    {
      icon: "Activity",
      title: "Vehicle-grade suspension",
      desc: "Same CAE-simulated chassis as T9 — independent suspension keeps Michelin-grade presentation intact across the property.",
      proof: "Independent suspension; trio-patented chassis",
    },
    {
      icon: "Zap",
      title: "4-hour fast charge",
      desc: "Faster recharge than standard T9 (4 vs 4.5 hours). Combined with 15-hour runtime, supports demanding three-shift premium operations.",
      proof: "15 hr runtime + 4 hr full recharge",
    },
  ],
  workflow: [
    { step: "01", icon: "Utensils", title: "Plate & dispatch", desc: "Three adjustable trays accept mixed payloads up to 40 kg. Touch-dispatch with destination." },
    { step: "02", icon: "Eye", title: "Enhanced perception", desc: "Improved sensor stack handles dynamic environments — busy lobbies, weddings, banquet halls — with smoother re-routing." },
    { step: "03", icon: "MessageSquare", title: "Branded arrival", desc: "Animated display and customised voice reinforce the property's brand at the point of delivery." },
    { step: "04", icon: "Zap", title: "Rapid turnaround", desc: "4-hour recharge means a single T9 Pro can cover three peak windows with one between-shift charge." },
  ],
  specGroups: [
    {
      title: "Dimensions & weight",
      icon: "Ruler",
      rows: [
        { label: "Footprint (W × D × H)", value: "500 × 527 × 1266 mm" },
        { label: "Weight", value: "45.2 kg" },
        { label: "Tray size (upper 3)", value: "486 × 384 mm" },
        { label: "Adjustable heights", value: "19.5 / 16.9 / 25.3 / 22.8 cm" },
      ],
    },
    {
      title: "Performance",
      icon: "Gauge",
      rows: [
        { label: "Load capacity", value: "40 kg total" },
        { label: "Max speed", value: "0.8 m/s" },
        { label: "Battery life", value: "Up to 15 hours" },
        { label: "Charging time", value: "4 hours" },
        { label: "Min passage width", value: "70 cm" },
        { label: "Slope tolerance", value: "≤ 5°" },
      ],
    },
    {
      title: "Sensing & navigation",
      icon: "Radar",
      rows: [
        { label: "Navigation", value: "VSLAM (marker-free)" },
        { label: "Perception", value: "Enhanced stereo + 3D depth" },
        { label: "Elevator integration", value: "Supported (IoT)" },
      ],
    },
    {
      title: "Software & connectivity",
      icon: "Cpu",
      rows: [
        { label: "Display", value: "11.6\" HD (1920 × 1080)" },
        { label: "Connectivity", value: "Wi-Fi / 4G LTE" },
        { label: "Branding", value: "Custom voice, expressions, livery" },
        { label: "Fleet management", value: "Multi-robot dispatch via KEENON Cloud" },
      ],
    },
  ],
  industryFits: [
    { industry: "Hospitality", solutionsSlug: "hospitality", scenario: "Luxury and ultra-luxury properties (5-star+, palace hotels, branded residences).", recommendedPilot: "One Presidential / executive floor, 30-day pilot." },
    { industry: "Food & Beverage", solutionsSlug: "food-beverage", scenario: "Michelin-trajectory and tasting-menu restaurants where service consistency is part of the product.", recommendedPilot: "Single outlet, dinner service, one robot paired with two manual servers." },
    { industry: "Healthcare", solutionsSlug: "healthcare", scenario: "VIP / executive ward delivery in tertiary-care facilities with premium-stay programmes.", recommendedPilot: "Single ward, all-shifts, 30 days." },
  ],
  commercials: {
    pilotOffer: "30-day pilot. Properties typically scale to 2–4 robots after a successful flagship pilot.",
    leadTime: "8–12 weeks from PO to commissioning.",
  },
  familyMembers: [
    { slug: "t9", model: "T9", differentiator: "Standard variant — same chassis, longer battery, lower CapEx." },
    { slug: "t10", model: "T10", differentiator: "Flagship with 23.8\" interactive display and adaptive head — when the robot is part of the experience." },
  ],
  faqs: [
    { q: "How is T9 Pro different from T9 in operation?", a: "Same chassis and software. The Pro adds enhanced stereo sensors (better in low-light / reflective environments) and faster charge cycle. For most properties, T9 standard is sufficient; T9 Pro is for properties where the highest service consistency is part of the brand promise." },
    { q: "Is the price difference worth it?", a: "Depends on the property. For ultra-luxury hospitality and Michelin-trajectory F&B, the Pro's improved performance in challenging visual conditions can justify the premium. For mid-tier properties, T9 standard delivers 95% of the experience at lower CapEx." },
    { q: "Can T9 Pro robots operate alongside T9 / T8 / T5 in a single property?", a: "Yes — KEENON Cloud manages mixed fleets. Routing and dispatch automatically respect each model's passage-width and load-capacity constraints." },
    { q: "What's the warranty on Pro variant?", a: "Same as T9 — standard manufacturer warranty + Mobilise Year-1 AMC. Year 2+ AMC tiers are configurable." },
    { q: "Does it support multi-language voice?", a: "Yes — same 14+ language voice stack as T9, including all major Indian languages." },
    { q: "How is the enhanced vision tested?", a: "KEENON validates Pro sensors in environments with rapid lighting changes (lobby-to-corridor), reflective surfaces (polished marble), and crowd density up to 4 people/m²." },
  ],
};

const T10: ProductDetail = {
  slug: "t10",
  positioning:
    "Flagship butler robot with 23.8-inch interactive display and adaptive head movements — built for luxury properties where the robot itself is part of the guest experience.",
  seoDescription:
    "KEENON T10 flagship butler robot for India — 23.8-inch interactive display, adaptive head movements, 360° vision. iF Design Award 2025 winner.",
  galleryCaptions: [
    "23.8-inch interactive display — the robot is the experience",
    "Adaptive head turns toward approaching guests",
    "Four stereo sensors deliver true 360° awareness",
    "Custom branding, skins, voices, and accessories",
  ],
  quickFacts: [
    { icon: "MonitorSmartphone", label: "Display", value: "23.8\" interactive" },
    { icon: "Eye", label: "Recognition", value: "360°" },
    { icon: "Package", label: "Payload", value: "40 kg (3 trays)" },
    { icon: "Ruler", label: "Min passage", value: "59 cm" },
  ],
  differentiators: [
    {
      icon: "MonitorSmartphone",
      title: "23.8\" interactive display",
      desc: "Largest in the KEENON family. Hosts hotel branding, guest greetings, upsell content, and concierge interactions. The display is the experience.",
      proof: "23.8\" touchscreen with branded content support",
    },
    {
      icon: "Activity",
      title: "Adaptive head movements",
      desc: "Head turns and tilts in response to touch and delivery events — creating a lifelike presence guests notice and remember. Earned the iF Design Award 2025.",
      proof: "iF Design Award 2025 — DINERBOT T10",
    },
    {
      icon: "Eye",
      title: "360° recognition",
      desc: "Four stereo vision sensors + one RGB camera + VSLAM combine for true 360° awareness — recognises guests, signage, dynamic obstacles in any direction.",
      proof: "4 stereo + 1 RGB + VSLAM fusion",
    },
  ],
  workflow: [
    { step: "01", icon: "Utensils", title: "Plate & dispatch", desc: "Three open-access trays with tray lights guide the kitchen on which slot is which order." },
    { step: "02", icon: "Compass", title: "Branded transit", desc: "23.8\" display runs the property's branded standby loop. Adaptive head turns toward approaching guests." },
    { step: "03", icon: "MessageSquare", title: "Guest interaction", desc: "Touch the display for upsell offers, concierge info, or wayfinding. Tray-light + voice direct to the correct tray." },
    { step: "04", icon: "Zap", title: "Discrete return", desc: "Empty robot returns to dock between dispatches. Standby loop keeps the brand front-of-mind." },
  ],
  specGroups: [
    {
      title: "Dimensions & weight",
      icon: "Ruler",
      rows: [
        { label: "Footprint (W × D × H)", value: "486 × 555 × 1399 mm" },
        { label: "Weight", value: "58 kg" },
        { label: "Trays", value: "3 open-access" },
      ],
    },
    {
      title: "Performance",
      icon: "Gauge",
      rows: [
        { label: "Load capacity", value: "40 kg total" },
        { label: "Max speed", value: "1.0 m/s" },
        { label: "Battery life", value: "9–12.5 hours" },
        { label: "Charging time", value: "5.5 hours" },
        { label: "Min passage width", value: "59 cm" },
      ],
    },
    {
      title: "Sensing & interaction",
      icon: "Radar",
      rows: [
        { label: "Navigation", value: "VSLAM + stereo vision" },
        { label: "Vision", value: "4 stereo + 1 RGB (360° recognition)" },
        { label: "Head movement", value: "Adaptive to touch / delivery events" },
      ],
    },
    {
      title: "Software & branding",
      icon: "Cpu",
      rows: [
        { label: "Display", value: "23.8\" interactive touchscreen" },
        { label: "Connectivity", value: "Wi-Fi / 4G" },
        { label: "Elevator integration", value: "Supported" },
        { label: "Customisation", value: "Head accessories, expressions, voices, full-body skins" },
      ],
    },
  ],
  industryFits: [
    { industry: "Hospitality", solutionsSlug: "hospitality", scenario: "Luxury hotels, resort properties, and palace hotels where brand impression matters as much as delivery itself.", recommendedPilot: "Lobby concierge + executive-floor delivery, 30 days." },
    { industry: "Corporate", solutionsSlug: "corporate", scenario: "Premium corporate reception areas — large-enterprise India HQ buildings and executive-floor visitor management.", recommendedPilot: "Single reception lobby, 30-day visitor-flow pilot." },
    { industry: "Healthcare", solutionsSlug: "healthcare", scenario: "Premium-stay wings in tertiary-care hospitals where guest-experience is positioned alongside medical care.", recommendedPilot: "Single premium-suite floor, 30 days." },
  ],
  commercials: {
    pilotOffer: "30-day pilot. Most T10 deployments start with a single flagship robot in a guest-facing role.",
    leadTime: "10–14 weeks from PO to commissioning (longer due to branding customisation).",
  },
  familyMembers: [
    { slug: "t9", model: "T9", differentiator: "Performance-tier alternative — smaller display, lower CapEx, more practical for back-of-house operations." },
    { slug: "t11", model: "T11", differentiator: "Compact open-tray with 18.5\" display — when you want T10's interactive feel at half the size." },
  ],
  faqs: [
    { q: "What's special about the 23.8-inch display?", a: "Beyond size, it's the integration: branded content during standby, guest greeting on approach, on-screen tray guidance during pickup, and concierge interactions on touch. Most operators say the display is what guests remember and talk about." },
    { q: "Why did the T10 win iF Design Award 2025?", a: "The award recognises the integration of adaptive head movement, interactive display, and serviceable industrial design. It's a third-party signal that the product is well-designed end-to-end, not just functionally adequate." },
    { q: "Can the property's IT team push content to the display?", a: "Yes — KEENON Cloud accepts uploaded branded content (images, video loops, custom UI themes) per property. Updates apply across the property's robot fleet." },
    { q: "Is the head movement really useful or just decorative?", a: "Both. Guests respond to the implied attention (head turning toward them) more positively than to a static screen. The behavioural effect is small but real and operators report better guest reception scores." },
    { q: "How long does branding customisation add to delivery timeline?", a: "Typically 2–4 weeks for full custom livery + UI + voice setup. Standard themes are deployment-day available." },
    { q: "Can T10 work in F&B as well as hospitality?", a: "Yes, but the 23.8\" display is over-spec'd for most F&B settings. T9 or T5 give the same delivery capability without the display premium." },
  ],
  relatedPostSlugs: ["hotel-room-service-robot-roi"],
};

const T11: ProductDetail = {
  slug: "t11",
  positioning:
    "Compact open-tray delivery robot with 49 cm passage capability and 5 stereo vision sensors — the tightest-spaces variant in the KEENON family, with an 18.5-inch interactive display.",
  seoDescription:
    "KEENON T11 compact open-tray delivery robot for India — 49 cm passages, 5 stereo sensors, 18.5-inch display. For tight hospital and retail corridors.",
  galleryCaptions: [
    "49 cm passages for heritage corridors and tight spaces",
    "Five stereo sensors for confident tight-space routing",
    "Six-wheel chassis absorbs thresholds and uneven floors",
    "18.5-inch interactive display for ward and lobby use",
  ],
  quickFacts: [
    { icon: "Ruler", label: "Min passage", value: "49 cm" },
    { icon: "MonitorSmartphone", label: "Display", value: "18.5\" interactive" },
    { icon: "Eye", label: "Stereo sensors", value: "5" },
    { icon: "Battery", label: "Battery life", value: "Up to 13.5 hr" },
  ],
  differentiators: [
    {
      icon: "Compass",
      title: "49 cm minimum passage",
      desc: "The narrowest in the KEENON delivery family. Heritage hospital corridors, retrofit malls, and dense office mailroom layouts open up.",
      proof: "Min passage 49 cm — verified at commissioning",
    },
    {
      icon: "Eye",
      title: "5-sensor stereo VSLAM",
      desc: "Comprehensive vision coverage means T11 navigates confidently through unpredictable foot traffic — pharma corridors, OPD waiting areas, retail aisles.",
      proof: "5 stereo sensors fused via VSLAM",
    },
    {
      icon: "Activity",
      title: "6-wheel shock-absorbing chassis",
      desc: "Innovative 6-wheel design absorbs thresholds and uneven floors better than 4-wheel designs — important for specimen and pharmaceutical transport.",
      proof: "6-wheel shock-absorbing chassis",
    },
  ],
  workflow: [
    { step: "01", icon: "Package", title: "Compact loading", desc: "Three open trays — 5+5+10 kg distribution. Optimised for small-item high-frequency runs." },
    { step: "02", icon: "Compass", title: "Tight-passage routing", desc: "5-sensor VSLAM plots optimal route through 49 cm corridors and around dynamic obstacles." },
    { step: "03", icon: "MonitorSmartphone", title: "Interactive arrival", desc: "18.5\" display shows recipient name, item, and pickup instructions. Voice prompts in 14+ languages." },
    { step: "04", icon: "Zap", title: "Auto-dock", desc: "Auto-docking and full-shift battery management." },
  ],
  specGroups: [
    {
      title: "Dimensions & weight",
      icon: "Ruler",
      rows: [
        { label: "Footprint (W × D × H)", value: "463 × 384 × 1123 mm" },
        { label: "Weight", value: "38 kg" },
        { label: "Trays", value: "3 open-access" },
      ],
    },
    {
      title: "Performance",
      icon: "Gauge",
      rows: [
        { label: "Payload", value: "20 kg total (5 + 5 + 10 kg)" },
        { label: "Max speed", value: "0.1–1.0 m/s" },
        { label: "Battery life", value: "Up to 13.5 hours" },
        { label: "Min passage width", value: "49 cm" },
        { label: "Chassis", value: "6-wheel shock-absorbing" },
      ],
    },
    {
      title: "Sensing & navigation",
      icon: "Radar",
      rows: [
        { label: "Navigation", value: "VSLAM" },
        { label: "Vision", value: "5 stereo sensors" },
        { label: "Multi-stop routing", value: "Supported" },
      ],
    },
    {
      title: "Software & connectivity",
      icon: "Cpu",
      rows: [
        { label: "Display", value: "18.5\" interactive touchscreen" },
        { label: "Connectivity", value: "Wi-Fi" },
        { label: "Charging", value: "Auto-docking" },
        { label: "Fleet management", value: "KEENON Cloud" },
      ],
    },
  ],
  industryFits: [
    { industry: "Healthcare", solutionsSlug: "healthcare", scenario: "Pharmacy and specimen delivery through narrow hospital corridors, OPDs, lab routing.", recommendedPilot: "Hospital pharmacy → ward route, 4-week pilot with 1 robot." },
    { industry: "Hospitality", solutionsSlug: "hospitality", scenario: "Heritage hotels and boutique properties where standard delivery robots can't navigate the corridor widths.", recommendedPilot: "Single floor of a heritage wing." },
    { industry: "Retail", solutionsSlug: "retail", scenario: "Stockroom-to-floor restock in dense retail layouts with sub-60 cm aisles.", recommendedPilot: "One department, off-peak hours initially." },
    { industry: "Corporate", solutionsSlug: "corporate", scenario: "Mailroom and document distribution in cubicle-dense office floors.", recommendedPilot: "Single floor, single mailroom route, 30 days." },
  ],
  commercials: {
    pilotOffer: "30-day pilot. Recommended for any operator with sub-60 cm passages.",
    leadTime: "8–10 weeks from PO to commissioning.",
  },
  familyMembers: [
    { slug: "t8", model: "T8", differentiator: "55 cm passages but heavier payload (20 kg) — better suited for restaurant service." },
    { slug: "t3", model: "T3", differentiator: "Enclosed-cabin sibling — when contents need to stay private and secured rather than open-tray." },
    { slug: "w3", model: "W3", differentiator: "Multi-cabin variant for cross-floor private deliveries." },
  ],
  faqs: [
    { q: "How is 49 cm passage possible if the robot is 46.3 cm wide?", a: "The 49 cm figure is the minimum clearance T11 needs to navigate safely with obstacle margin. The robot body is 46.3 cm wide, leaving ~1.4 cm per side for sensor accuracy and dynamic obstacle response." },
    { q: "Why 5 stereo sensors instead of 3?", a: "Tight-space environments have more 'just-out-of-frame' obstacles per metre travelled. Five sensors give T11 a wider awareness cone in any direction, which compensates for the reduced reaction-distance physics at 49 cm clearances." },
    { q: "Can it carry trays in addition to open-tray contents?", a: "Yes — the open-tray surface accepts standard cafeteria trays, hospital UDs, or pharmacy bins. Per-tray capacity is the limiting factor (5/5/10 kg)." },
    { q: "What's the typical use case in Indian hospitals?", a: "Pharmacy-to-ward dispensing rounds, lab-to-OPD specimen transport, and linen distribution in retrofit wards where corridors are narrower than newer-build hospital standards." },
    { q: "How quiet is the 6-wheel design?", a: "~50 dB at 1 m. The extra wheels actually reduce per-wheel noise vs a heavier 4-wheel design." },
    { q: "Does it integrate with hospital HIS / pharmacy systems?", a: "T11 ships with API hooks. Integration with HIS / pharmacy systems is a 2–4 week project scoped during the pilot phase." },
  ],
};

const W3: ProductDetail = {
  slug: "w3",
  positioning:
    "Enclosed multi-cabin butler robot with IoT lift integration — autonomous cross-floor private delivery for hotels, hospitals, and corporate towers. The closest KEENON has to a true digital concierge.",
  seoDescription:
    "KEENON W3 enclosed multi-cabin butler robot for India — IoT lift integration, 4 private cabins, cross-floor delivery. Built for hotel room service.",
  galleryCaptions: [
    "Four private cabins for cross-floor room service",
    "IoT lift integration — autonomous transit between floors",
    "Dual stereo + 270° LiDAR panoramic sensing",
    "11.6-inch HD touchscreen in 14+ languages",
  ],
  quickFacts: [
    { icon: "Boxes", label: "Cabins", value: "Up to 4 modular" },
    { icon: "Wifi", label: "Cross-floor", value: "IoT lift integration" },
    { icon: "Battery", label: "Battery life", value: "9–12 hr" },
    { icon: "MessageSquare", label: "Languages", value: "14+" },
  ],
  differentiators: [
    {
      icon: "DoorClosed",
      title: "4 enclosed, private cabins",
      desc: "Modular cabin configuration (2/3/4 cabins) with automatic doors and ventilation. Room service, pharmacy, document delivery — contents stay private, hygienic, and tamper-evident.",
      proof: "Up to 4 cabins, 90 L total internal volume",
    },
    {
      icon: "Wifi",
      title: "IoT elevator integration",
      desc: "Autonomously calls and rides lifts via standardised IoT protocols. Cross-floor delivery happens without staff escort — the W3 is purpose-built for lift-first multi-floor operation.",
      proof: "Cross-floor autonomous via IoT lift integration",
    },
    {
      icon: "Radar",
      title: "Dual stereo + 270° LiDAR",
      desc: "Panoramic sensing handles crowded hotel corridors, busy hospital wards, and dynamic office environments without operator intervention.",
      proof: "Dual stereo vision + 270° LiDAR",
    },
  ],
  workflow: [
    { step: "01", icon: "MessageSquare", title: "Order placed", desc: "Room-service request via PMS / staff app dispatches to W3 with destination floor and room." },
    { step: "02", icon: "DoorClosed", title: "Secure loading", desc: "Items go into a designated cabin. Door locks. W3 announces ready and departs." },
    { step: "03", icon: "Wifi", title: "IoT lift ride", desc: "W3 calls the lift, rides to the destination floor, and exits autonomously — no escort needed." },
    { step: "04", icon: "BadgeCheck", title: "Private delivery", desc: "Arrives at the room, calls the guest, and opens the correct cabin for contactless pickup. Returns to dock or next task." },
  ],
  specGroups: [
    {
      title: "Dimensions & weight",
      icon: "Ruler",
      rows: [
        { label: "Footprint (W × D × H)", value: "459 × 549 × 1081 mm" },
        { label: "Weight", value: "48 kg" },
        { label: "Cabin size (each)", value: "390 × 385 × 300 mm" },
        { label: "Internal volume", value: "90 L total" },
      ],
    },
    {
      title: "Performance",
      icon: "Gauge",
      rows: [
        { label: "Payload", value: "20 kg total" },
        { label: "Cabins", value: "Up to 4 (modular 2/3/4 configurations)" },
        { label: "Max speed", value: "0.8 m/s" },
        { label: "Battery life", value: "9–12 hours" },
        { label: "Charging time", value: "6.5 hours (15% → 100%)" },
        { label: "Min passage width", value: "70 cm" },
        { label: "Slope tolerance", value: "≤ 7°" },
      ],
    },
    {
      title: "Sensing & navigation",
      icon: "Radar",
      rows: [
        { label: "Navigation", value: "SLAM + AI path planning" },
        { label: "Vision", value: "Dual stereo + 270° LiDAR panoramic" },
        { label: "Lift integration", value: "IoT-standard cross-floor" },
      ],
    },
    {
      title: "Software & connectivity",
      icon: "Cpu",
      rows: [
        { label: "Display", value: "11.6\" HD touchscreen" },
        { label: "Languages", value: "14+ (incl. major Indian languages)" },
        { label: "PMS integration", value: "Available via KEENON API" },
        { label: "Fleet management", value: "KEENON Cloud" },
      ],
    },
  ],
  industryFits: [
    { industry: "Hospitality", solutionsSlug: "hospitality", scenario: "Multi-floor hotels with active room service operations — 100+ daily orders, cross-floor delivery, late-night service.", recommendedPilot: "One executive floor or one wing, 30-day pilot. ROI math published on our blog." },
    { industry: "Healthcare", solutionsSlug: "healthcare", scenario: "Tertiary hospitals: pharmacy rounds, sterile meal delivery, lab specimen transport across floors.", recommendedPilot: "Single floor + IoT lift integration, 4 weeks." },
    { industry: "Corporate", solutionsSlug: "corporate", scenario: "Multi-floor corporate campuses — internal document, parcel, and reception-floor delivery.", recommendedPilot: "Single tower, 30-day mailroom-to-floor pilot." },
  ],
  commercials: {
    pilotOffer: "30-day pilot at one property. Includes engineer time, training, and weekly performance reviews. Full ROI math on our blog.",
    leadTime: "10–14 weeks from PO to commissioning (lift integration scoping adds 2–4 weeks).",
  },
  familyMembers: [
    { slug: "t3", model: "T3", differentiator: "Single-cabin enclosed alternative — for single-floor private delivery where lift integration isn't needed." },
    { slug: "t9", model: "T9", differentiator: "Open-tray premium delivery — when service-speed beats privacy on the same floor." },
    { slug: "s100", model: "S100", differentiator: "Heavy-load courier sibling for back-of-house logistics (linen, supplies, larger parcels)." },
  ],
  faqs: [
    { q: "Does W3 work in buildings without smart lifts?", a: "Most modern lifts (Otis Gen2, KONE EcoSpace, Schindler 5500, Mitsubishi NexWay) support IoT integration with adapter modules. Older lifts can be retrofitted; cost varies. Site survey identifies feasibility before commitment." },
    { q: "What's the actual delivery time vs a human runner?", a: "10–12 minutes average kitchen-to-room for a standard 8-floor property, vs 15–22 minutes for a manual runner. Detailed math is published on our blog." },
    { q: "Can guests refuse robot delivery and request a human?", a: "Yes — PMS integration lets guests opt in/out at check-in or per-order. Properties typically see <8% opt-out rate after the first 4 weeks." },
    { q: "What happens if the wrong cabin is opened?", a: "Each cabin has a discrete unlock code per delivery. Wrong-cabin attempts are logged; correct cabin only unlocks after the right code." },
    { q: "How long is the lift integration project?", a: "Typical 2–5 day project including site survey, vendor coordination with the lift manufacturer, and testing. Variable based on lift make/model and building IT environment." },
    { q: "Does W3 work in single-floor properties?", a: "Yes — IoT lift is optional. Many properties run W3 on a single floor initially and expand to multi-floor in phase 2." },
    { q: "What's the noise level inside a guest corridor at night?", a: "Approximately 48–52 dB at 1 m. Quieter than a human runner walking with a serving tray. Suitable for 11 pm–3 am service." },
  ],
  relatedPostSlugs: ["hotel-room-service-robot-roi", "welcome-to-mobilise-robotics"],
};

const C20: ProductDetail = {
  slug: "c20",
  positioning:
    "Ultra-compact 3-in-1 commercial cleaner (sweep + scrub + mop) in a 351 mm low-profile chassis — fits under furniture and into spaces larger cleaners can't reach.",
  seoDescription:
    "KEENON C20 compact 3-in-1 commercial cleaner for India — 351 mm low profile fits under furniture. Sweep, scrub, and mop in one pass at 400 m²/hr.",
  galleryCaptions: [
    "351 mm low profile cleans under furniture and seating",
    "Three-in-one: sweep, scrub, and mop in one pass",
    "22 kg light chassis moves between zones easily",
    "Map-based routing via LiDAR and visual SLAM",
  ],
  quickFacts: [
    { icon: "Ruler", label: "Height", value: "351 mm low profile" },
    { icon: "Gauge", label: "Efficiency", value: "400 m²/hr" },
    { icon: "Droplet", label: "Tank", value: "7 L clean / 5 L dirty" },
    { icon: "Brush", label: "Cleaning modes", value: "3-in-1" },
  ],
  differentiators: [
    {
      icon: "Ruler",
      title: "351 mm low-profile chassis",
      desc: "Lowest-profile commercial cleaner in the KEENON range. Cleans under hotel furniture, retail displays, restaurant banquettes, and clinic seating where standard cleaners can't reach.",
      proof: "351 mm height; 22 kg total weight",
    },
    {
      icon: "Brush",
      title: "3-in-1 cleaning in one pass",
      desc: "Sweeps 450 mm and scrubs/mops 285 mm in a single traverse. Removes the need for sequential operator passes with separate machines.",
      proof: "Sweep 450 mm + scrub 285 mm + mop in one pass",
    },
    {
      icon: "Network",
      title: "Easy redeployment",
      desc: "At 22 kg it's the lightest cleaner in the KEENON range — manually movable between zones, lift-friendly, and easy to transport between sites for shared deployments.",
      proof: "22 kg total weight",
    },
  ],
  workflow: [
    { step: "01", icon: "MessageSquare", title: "Schedule or dispatch", desc: "Set a cleaning schedule in the KEENON app or trigger an on-demand clean of a specific zone." },
    { step: "02", icon: "Compass", title: "Map-based routing", desc: "LiDAR + visual SLAM follow the saved cleaning map. Avoids obstacles and people on the path." },
    { step: "03", icon: "Brush", title: "3-in-1 clean", desc: "Sweep + scrub + mop in one pass at 400 m²/hr. Water dispensing matches floor type." },
    { step: "04", icon: "Zap", title: "Return & report", desc: "Returns to charging dock. Cleaning report (area covered, time, water usage) lands in the app." },
  ],
  specGroups: [
    {
      title: "Dimensions & weight",
      icon: "Ruler",
      rows: [
        { label: "Footprint (W × D × H)", value: "523 × 400 × 351 mm" },
        { label: "Weight", value: "22 kg" },
        { label: "Sweeping width", value: "450 mm" },
        { label: "Scrubbing width", value: "285 mm" },
      ],
    },
    {
      title: "Performance",
      icon: "Gauge",
      rows: [
        { label: "Cleaning efficiency", value: "400 m²/h" },
        { label: "Clean water tank", value: "7 L" },
        { label: "Dirty water tank", value: "5 L" },
        { label: "Charging time", value: "4 hours" },
      ],
    },
    {
      title: "Sensing & navigation",
      icon: "Radar",
      rows: [
        { label: "Navigation", value: "LIDAR + visual SLAM" },
        { label: "Operating modes", value: "Auto / Manual / Schedule" },
      ],
    },
    {
      title: "Software & connectivity",
      icon: "Cpu",
      rows: [
        { label: "Connectivity", value: "Wi-Fi / 4G" },
        { label: "App control", value: "KEENON App (scheduling, reports)" },
        { label: "Compatible surfaces", value: "Tile, marble, vinyl, hardwood" },
      ],
    },
  ],
  industryFits: [
    { industry: "Food & Beverage", solutionsSlug: "food-beverage", scenario: "Restaurant floor cleaning between services — under banquettes, around chair legs.", recommendedPilot: "Single outlet, post-service nightly cleans for 30 days." },
    { industry: "Hospitality", solutionsSlug: "hospitality", scenario: "Hotel corridor and ground-floor public area daily maintenance in mid-sized properties.", recommendedPilot: "Single floor lobby + corridor, daily clean." },
    { industry: "Healthcare", solutionsSlug: "healthcare", scenario: "Clinic and small-hospital floor cleaning where staff hours are scarce and after-hours operation matters.", recommendedPilot: "OPD area, 4-week pilot." },
    { industry: "Retail", solutionsSlug: "retail", scenario: "Boutique retail and small mall outlets where larger cleaners can't navigate the aisle widths.", recommendedPilot: "Single store, off-peak hours initially." },
  ],
  commercials: {
    pilotOffer: "30-day pilot. Often paired with C40 in larger properties for floor + lobby coverage.",
    leadTime: "4–6 weeks from PO to commissioning.",
  },
  familyMembers: [
    { slug: "c30", model: "C30", differentiator: "Dry-only 3-in-1 (sweep + vacuum + dust mop) for hard floors and low-pile carpet." },
    { slug: "c40", model: "C40", differentiator: "4-in-1 with bigger tanks (16/14 L) and multi-floor capability for large properties." },
    { slug: "c55", model: "C55", differentiator: "Industrial sweep + scrub for malls, airports, and underground parking." },
  ],
  faqs: [
    { q: "Can C20 climb a small step at a doorway?", a: "C20 handles minor floor transitions (up to ~1.5 cm). Anything taller requires a ramp or zone-segmented cleaning." },
    { q: "How loud is it during operation?", a: "Approximately 60 dB at 1 m. Suitable for after-hours operation but on the louder side of the KEENON cleaner family." },
    { q: "Does it need a water source nearby?", a: "Clean water tank is filled manually. 7 L lasts approximately 90 minutes of scrub-mop operation. Larger properties pair C20 with a fill station per floor." },
    { q: "Can it clean carpets?", a: "C20 is optimised for hard floors (tile, marble, vinyl, hardwood). Short-pile carpet is supported with mode adjustment; not recommended for thick-pile or rugs." },
    { q: "What's the run time on a full charge?", a: "~3 hours of mixed sweep + scrub + mop operation. Auto-recharge between sessions." },
    { q: "How often does the dirty water tank need emptying?", a: "Roughly every 45–60 minutes of scrub-mop operation. The app notifies when nearing capacity." },
  ],
};

const C30: ProductDetail = {
  slug: "c30",
  positioning:
    "Dry 3-in-1 commercial cleaner — sweep, vacuum, dust mop — covering 2,500 m² per charge with 19,000 Pa suction. For hard-floor properties where dry cleaning is the daily routine and wet cleaning happens on schedule.",
  seoDescription:
    "KEENON C30 dry 3-in-1 commercial cleaner for India — sweep, vacuum, dust mop. 19,000 Pa suction, 2,500 m² per charge for hotels, malls, and offices.",
  galleryCaptions: [
    "19,000 Pa suction handles fine dust to coarse debris",
    "2,500 m² coverage per charge for large public areas",
    "Manual mapping handle for fast initial setup",
    "Sweep, vacuum, and dust mop in one pass",
  ],
  quickFacts: [
    { icon: "Gauge", label: "Coverage", value: "2,500 m² per charge" },
    { icon: "Zap", label: "Suction", value: "19,000 Pa" },
    { icon: "Brush", label: "Modes", value: "Sweep + vacuum + dust mop" },
    { icon: "Battery", label: "Sweep runtime", value: "Up to 6 hr" },
  ],
  differentiators: [
    {
      icon: "Zap",
      title: "19,000 Pa suction",
      desc: "Industrial-grade suction handles fine dust to coarse particles — restaurant crumbs, retail debris, lobby grit — without re-passes.",
      proof: "19,000 Pa suction power",
    },
    {
      icon: "Gauge",
      title: "2,500 m² coverage per charge",
      desc: "Single-charge coverage equivalent to a full mid-sized hotel public area or mid-sized retail outlet. No mid-shift recharge interruption.",
      proof: "2,500 m² per charge / 600 m²/hr efficiency",
    },
    {
      icon: "Hand",
      title: "Extendable handle for manual mapping",
      desc: "Operator pushes the C30 manually around the space to capture the initial map — no specialised mapping engineer needed.",
      proof: "Extendable handle + KEENON App-controlled mapping",
    },
  ],
  workflow: [
    { step: "01", icon: "Hand", title: "Map (one-time)", desc: "Push C30 manually using the extendable handle to capture the initial cleaning map. Edit zones in the app." },
    { step: "02", icon: "MessageSquare", title: "Schedule or dispatch", desc: "Set daily / weekly schedules or trigger ad-hoc cleans via app." },
    { step: "03", icon: "Brush", title: "Dry 3-in-1 clean", desc: "Sweep + vacuum + dust mop at 600 m²/hr across the routed zone." },
    { step: "04", icon: "Zap", title: "Return & report", desc: "Auto-docks at the charging station. Cleaning report (zone, time, debris collected) per session." },
  ],
  specGroups: [
    {
      title: "Dimensions & weight",
      icon: "Ruler",
      rows: [
        { label: "Footprint (W × D × H)", value: "490 × 520 × 750 mm" },
        { label: "Weight", value: "35 kg" },
        { label: "Cleaning width", value: "610 mm" },
      ],
    },
    {
      title: "Performance",
      icon: "Gauge",
      rows: [
        { label: "Cleaning efficiency", value: "600 m²/h" },
        { label: "Cleaning area per charge", value: "2,500 m²" },
        { label: "Suction power", value: "19,000 Pa" },
        { label: "Max speed", value: "0.8 m/s" },
        { label: "Battery (sweep)", value: "6 hours" },
        { label: "Battery (mop mode)", value: "10 hours" },
        { label: "Charging time", value: "5–6 hours" },
      ],
    },
    {
      title: "Sensing & navigation",
      icon: "Radar",
      rows: [
        { label: "Navigation", value: "SLAM + obstacle avoidance" },
        { label: "Operating modes", value: "3-in-1 dry: sweep + vacuum + dust mop" },
      ],
    },
    {
      title: "Software & connectivity",
      icon: "Cpu",
      rows: [
        { label: "Control", value: "Extendable handle + KEENON App" },
        { label: "Surfaces", value: "Hard floors + low-pile carpet" },
      ],
    },
  ],
  industryFits: [
    { industry: "Hospitality", solutionsSlug: "hospitality", scenario: "Hotel lobby, ballroom, and corridor dry maintenance — daily clean between events.", recommendedPilot: "Lobby + ballroom, post-event nightly clean for 30 days." },
    { industry: "Retail", solutionsSlug: "retail", scenario: "Mall corridors and large-format retail floor maintenance during off-peak / overnight hours.", recommendedPilot: "Single mall floor, overnight clean for 4 weeks." },
    { industry: "Corporate", solutionsSlug: "corporate", scenario: "Large-floor IT campus dust mopping in cubicle and cafeteria zones.", recommendedPilot: "Single floor, after-hours clean, 30 days." },
  ],
  commercials: {
    pilotOffer: "30-day pilot. Properties typically deploy C30 for daily dry routes + C40 / C55 for periodic wet scrubs.",
    leadTime: "6–8 weeks from PO to commissioning.",
  },
  familyMembers: [
    { slug: "c20", model: "C20", differentiator: "Smaller, lower-profile sibling for under-furniture and tight spaces (incl. wet)." },
    { slug: "c40", model: "C40", differentiator: "4-in-1 (adds wet scrub) with multi-floor capability for larger properties." },
    { slug: "c55", model: "C55", differentiator: "Industrial-grade for malls, airports, and parking garages." },
  ],
  faqs: [
    { q: "Why dry-only vs C40's wet+dry?", a: "Many properties prefer dry-only daily cleans (lower water consumption, faster, no slip-risk during business hours) with periodic deep wet scrubs by C40 or external contractors. C30 is optimised for that daily-dry workflow." },
    { q: "How is the dust collected?", a: "C30 has a 19,000 Pa vacuum that pulls debris into an onboard collection bag. Empty manually (every 1–3 days depending on dust load) or schedule via app." },
    { q: "Can C30 work during business hours in a retail store?", a: "Yes — operating mode adjusts speed and avoids customer-dense zones. Most retail operators run C30 during early-morning open hours or late evening." },
    { q: "How does manual mapping with the handle actually work?", a: "Switch C30 to mapping mode in the app, extend the handle, and walk it around the area you want cleaned. Save the map. Done — usually 15–30 minutes per floor." },
    { q: "Does it work on textured tile or grout-recessed flooring?", a: "Yes for sweep + vacuum. For deep grout cleaning, a wet scrubber (C40 / C55) achieves better results." },
    { q: "What's the warranty and parts replacement schedule?", a: "Standard 1-year manufacturer warranty + Mobilise Year-1 AMC. Brushes/filters: replace every 6–12 months depending on duty cycle." },
  ],
};

const C40: ProductDetail = {
  slug: "c40",
  positioning:
    "Professional 4-in-1 cleaner — sweep, vacuum, scrub, mop — with multi-floor autonomy via lift integration. 1,100 m²/hr efficiency for hotels, malls, and corporate campuses.",
  seoDescription:
    "KEENON C40 professional 4-in-1 floor cleaner for India — sweep, vacuum, scrub, mop. Multi-floor autonomy via lift integration. 1,100 m²/hr efficiency.",
  galleryCaptions: [
    "Four-in-one: sweep, vacuum, scrub, and mop",
    "IoT lift integration for multi-floor autonomy",
    "1,100 m² per hour across hotels and malls",
    "360° blind-spot-free safety with LiDAR and ToF",
  ],
  quickFacts: [
    { icon: "Gauge", label: "Efficiency", value: "1,100 m²/hr" },
    { icon: "Droplet", label: "Tank", value: "16 L clean / 14 L dirty" },
    { icon: "Battery", label: "Runtime", value: "Up to 12 hr sweep" },
    { icon: "Wifi", label: "Multi-floor", value: "Lift integration" },
  ],
  differentiators: [
    {
      icon: "Brush",
      title: "4-in-1 cleaning in one platform",
      desc: "Sweep + vacuum + scrub + mop — the full daily-cleaning workflow in one autonomous unit. Eliminates separate machines and operator passes.",
      proof: "4-in-1: sweep + vacuum + scrub + mop",
    },
    {
      icon: "Wifi",
      title: "Multi-floor autonomy",
      desc: "IoT elevator integration lets C40 autonomously move between floors. Schedule a clean across a 12-floor tower; C40 figures out the rest.",
      proof: "Elevator integration; multi-floor autonomous",
    },
    {
      icon: "Zap",
      title: "2-hour fast charge",
      desc: "Fast 2-hour full recharge. Combined with 12-hour sweep runtime, supports full-day operations with one short between-shift charge.",
      proof: "2 hr charge / 12 hr sweep / 5 hr scrub",
    },
  ],
  workflow: [
    { step: "01", icon: "MessageSquare", title: "Schedule across floors", desc: "Define cleaning routes per floor in the app. Schedule continuous multi-floor cleans." },
    { step: "02", icon: "Wifi", title: "Cross-floor execution", desc: "C40 calls the lift, transits between floors, and continues cleaning at each destination." },
    { step: "03", icon: "Brush", title: "4-in-1 clean", desc: "Sweep + vacuum + scrub + mop in one pass at 1,100 m²/hr. Water dispensing adapts to floor type." },
    { step: "04", icon: "Zap", title: "Autonomous workstation", desc: "Returns to workstation for water exchange (fresh/dirty) and recharging." },
  ],
  specGroups: [
    {
      title: "Dimensions & weight",
      icon: "Ruler",
      rows: [
        { label: "Footprint (W × D × H)", value: "578 × 500 × 690 mm" },
        { label: "Weight", value: "70 kg" },
      ],
    },
    {
      title: "Performance",
      icon: "Gauge",
      rows: [
        { label: "Cleaning efficiency", value: "1,100 m²/h" },
        { label: "Clean water tank", value: "16 L" },
        { label: "Dirty water tank", value: "14 L" },
        { label: "Battery (sweep)", value: "12 hours" },
        { label: "Battery (scrub)", value: "5 hours" },
        { label: "Charging time", value: "2 hours" },
      ],
    },
    {
      title: "Sensing & safety",
      icon: "Radar",
      rows: [
        { label: "Navigation", value: "LiDAR SLAM + 3D perception" },
        { label: "Safety", value: "360° blind-spot-free (LiDAR + ToF + stereo)" },
        { label: "Multi-floor", value: "IoT elevator integration" },
      ],
    },
    {
      title: "Software & operations",
      icon: "Cpu",
      rows: [
        { label: "Modes", value: "4-in-1: sweep + vacuum + scrub + mop" },
        { label: "Connectivity", value: "Wi-Fi / KEENON App" },
        { label: "Workstation", value: "Autonomous water/power exchange" },
      ],
    },
  ],
  industryFits: [
    { industry: "Hospitality", solutionsSlug: "hospitality", scenario: "Multi-floor hotel lobbies, corridors, ballrooms, and back-of-house. Replaces a multi-machine night-cleaning routine.", recommendedPilot: "Single tower over 5 floors, nightly cleans for 30 days." },
    { industry: "Retail", solutionsSlug: "retail", scenario: "Shopping malls — overnight floor maintenance across multiple levels.", recommendedPilot: "Single mall, single level + lift integration, 30 days." },
    { industry: "Corporate", solutionsSlug: "corporate", scenario: "Large IT campuses and Class-A office towers — multi-floor daily maintenance.", recommendedPilot: "Single tower, daily clean across 8 floors for 4 weeks." },
    { industry: "Healthcare", solutionsSlug: "healthcare", scenario: "Hospital atriums, OPDs, and main corridors during low-traffic windows.", recommendedPilot: "Atrium + OPD, overnight scrub-mop, 30 days." },
  ],
  commercials: {
    pilotOffer: "30-day pilot. Recommended start for any multi-floor property with daily cleaning needs.",
    leadTime: "8–12 weeks from PO to commissioning (longer with lift integration).",
  },
  familyMembers: [
    { slug: "c20", model: "C20", differentiator: "Compact 3-in-1 for under-furniture and tight spaces — pairs well with C40 for full property coverage." },
    { slug: "c30", model: "C30", differentiator: "Dry-only 3-in-1 for daily routes — pairs with C40 for periodic wet scrubs." },
    { slug: "c55", model: "C55", differentiator: "Industrial triple-roller scrub for malls, parking garages, and airport terminals." },
  ],
  faqs: [
    { q: "What's the difference between C40 scrub and C55 scrub?", a: "C40 is optimised for mixed environments (lobbies, corridors, retail floors) with a focus on safe operation around people. C55 is industrial-grade for parking, warehouses, and large open spaces where throughput beats finesse." },
    { q: "Can C40 work during business hours?", a: "Yes — speed adapts to crowd density and the 360° safety system stops on people-proximity. Most properties prefer overnight or low-traffic-window scheduling for full-throughput operation." },
    { q: "How does the autonomous workstation work?", a: "The workstation is a docking station with mains-water connection, drainage, and power. C40 autonomously refills clean water, drains dirty water, and recharges between cleaning sessions." },
    { q: "Does it handle different floor types in one route?", a: "Yes — mode adjusts per zone (sweep-only on carpet, full scrub on tile, dry mop on hardwood). Zones are defined during initial mapping." },
    { q: "What's the throughput on a 10,000 m² office floor?", a: "Approximately 9–10 hours of continuous 4-in-1 operation including water exchanges. Typical office floor: ~30,000 m² across multiple floors, scheduled across 2–3 nights." },
    { q: "Can the property's facility management team operate C40 directly?", a: "Yes — KEENON App is designed for FM team self-service. Mobilise provides initial training and remote support; day-to-day operation is in-house." },
  ],
};

const C55: ProductDetail = {
  slug: "c55",
  positioning:
    "Industrial triple-roller sweep-and-scrub robot — 2,376 m²/hr efficiency with hot-swappable dual battery for 24/7 operation. For malls, airports, parking garages, and convention centres.",
  seoDescription:
    "KEENON C55 industrial triple-roller cleaner for India — sweep and scrub at 2,376 m²/hr. Hot-swap battery for 24/7 operation in malls and airports.",
  galleryCaptions: [
    "Triple-roller sweep and scrub for industrial floors",
    "5-second hot-swap battery for true 24/7 operation",
    "2,376 m² per hour for malls, airports, and parking",
    "60 L clean water tank with patented 3-second flip",
  ],
  quickFacts: [
    { icon: "Gauge", label: "Efficiency", value: "2,376 m²/hr" },
    { icon: "Battery", label: "Battery swap", value: "5-second hot-swap" },
    { icon: "Droplet", label: "Tank", value: "60 L clean / 47 L dirty" },
    { icon: "Brush", label: "Roller system", value: "Triple-roller" },
  ],
  differentiators: [
    {
      icon: "Brush",
      title: "Triple-roller sweep + scrub in one pass",
      desc: "Three counter-rotating rollers combine sweep and scrub in a single traverse — outperforming traditional dual-roller scrubbers and eliminating the second-pass requirement.",
      proof: "Triple-roller design; 550 mm scrub width",
    },
    {
      icon: "Battery",
      title: "5-second hot-swap dual battery",
      desc: "Two batteries; swap in 5 seconds. Zero downtime — C55 operates 24/7 across long shifts and overnight cycles without scheduled charging gaps.",
      proof: "Dual hot-swappable battery; 5-second swap",
    },
    {
      icon: "Radar",
      title: "360° panoramic perception",
      desc: "Four stereo cameras + top-mounted LiDAR = full panoramic awareness. Critical for industrial environments with forklifts, palettes, foot traffic, and shifting layouts.",
      proof: "4 stereo cameras + LiDAR; 360° panoramic",
    },
  ],
  workflow: [
    { step: "01", icon: "MessageSquare", title: "Industrial scheduling", desc: "Set 24/7 shift schedules across mall levels, terminal zones, or parking decks via app or IoT platform." },
    { step: "02", icon: "Brush", title: "Triple-roller clean", desc: "Sweep + scrub in one pass at 2,376 m²/hr. Handles 5 cm thresholds without stopping." },
    { step: "03", icon: "Battery", title: "Hot-swap on the move", desc: "When battery low, ops crew swaps battery in 5 seconds at any safe stop. No charging downtime." },
    { step: "04", icon: "Droplet", title: "Autonomous water cycle", desc: "Returns to autonomous workstation for water refill and drainage. 60/47 L tanks support extended runtime." },
  ],
  specGroups: [
    {
      title: "Dimensions & weight",
      icon: "Ruler",
      rows: [
        { label: "Footprint (W × D × H)", value: "860 × 850 × 1082 mm" },
        { label: "Weight", value: "150 kg" },
        { label: "Scrub width", value: "550 mm" },
      ],
    },
    {
      title: "Performance",
      icon: "Gauge",
      rows: [
        { label: "Cleaning efficiency", value: "2,376 m²/h" },
        { label: "Clean water tank", value: "60 L" },
        { label: "Dirty water tank", value: "47 L" },
        { label: "Runtime per battery set", value: "5 hours" },
        { label: "Battery swap time", value: "5 seconds" },
        { label: "Obstacle clearance", value: "Up to 5 cm" },
      ],
    },
    {
      title: "Sensing & safety",
      icon: "Radar",
      rows: [
        { label: "Perception", value: "360° panoramic (4 stereo cameras + LiDAR)" },
        { label: "Roller system", value: "Triple-roller sweep + scrub" },
        { label: "Tank design", value: "Patented 3-second flip" },
      ],
    },
    {
      title: "Software & operations",
      icon: "Cpu",
      rows: [
        { label: "Modes", value: "Manual + Automatic" },
        { label: "Connectivity", value: "IoT platform integration" },
        { label: "Workstation", value: "Autonomous water supply + drainage" },
      ],
    },
  ],
  industryFits: [
    { industry: "Retail", solutionsSlug: "retail", scenario: "Large shopping malls — overnight floor cleaning across 50,000+ m² of public area.", recommendedPilot: "Single floor of a mall, overnight cleaning for 30 days." },
    { industry: "Aviation", solutionsSlug: "aviation", scenario: "Airport terminals — passenger area maintenance, gate-area cleaning between flights.", recommendedPilot: "Single terminal segment, off-peak hours, 30 days." },
    { industry: "Hospitality", solutionsSlug: "hospitality", scenario: "Convention centre and exhibition hall cleaning between events.", recommendedPilot: "Single event week, post-event nightly cleans." },
  ],
  commercials: {
    pilotOffer: "30-day pilot. Workstation installation is included in pilot for like-for-like measurement.",
    leadTime: "10–14 weeks from PO to commissioning including workstation install.",
  },
  familyMembers: [
    { slug: "c40", model: "C40", differentiator: "4-in-1 with multi-floor autonomy — better for hotel / office daily maintenance." },
    { slug: "c30", model: "C30", differentiator: "Dry 3-in-1 for daily routes; pair with C55 for periodic wet scrubs in large properties." },
  ],
  faqs: [
    { q: "What's the difference between triple-roller and dual-roller?", a: "Dual-roller scrubbers sweep with one roller and scrub with the other. Triple-roller adds a third counter-rotating element that catches debris missed by the first pass — measurably better on heavy-soil floors common in malls and airports." },
    { q: "How does the 5-second battery swap work?", a: "Two pluggable batteries on the chassis. An ops crew member opens the battery bay, removes the depleted battery, inserts a charged one, closes the bay. C55 resumes — 5 seconds. The depleted battery charges at a separate station." },
    { q: "Can C55 operate during business hours in a mall?", a: "Possible but uncommon. 360° safety stops on people-proximity, but the throughput-optimised speed and roller noise make off-hours operation typical." },
    { q: "What's the noise level during operation?", a: "Approximately 72 dB at 1 m. Designed for low-traffic / off-hours operation in public spaces; suitable for any time of day in industrial / back-of-house contexts." },
    { q: "Can it handle deep oil stains in a parking garage?", a: "Yes — the triple-roller + 60 L clean water capacity is specifically designed for parking-garage workloads. Deep oil stains may require a second pass." },
    { q: "How big is the workstation footprint?", a: "Approximately 2 × 1.5 m. Requires mains water connection, drainage, and a 16A power circuit. Site survey identifies the installation point." },
  ],
};

const S100: ProductDetail = {
  slug: "s100",
  positioning:
    "Heavy-load autonomous courier robot — 100+ kg payload with 15-second battery swap for 24/7 operation. For hospital logistics, warehouse internal transport, and manufacturing floor courier runs.",
  seoDescription:
    "KEENON S100 heavy-load courier robot for India — 100+ kg payload, 15-second battery swap. Hospital pharmacy, warehouse, and manufacturing logistics.",
  galleryCaptions: [
    "100+ kg payload for heavy logistics shifts",
    "15-second battery swap for zero downtime",
    "360° anti-collision strip for safe staff zones",
    "Plug-and-play deployment with pre-installed OS",
  ],
  quickFacts: [
    { icon: "Package", label: "Payload", value: "100+ kg" },
    { icon: "Battery", label: "Battery swap", value: "15-second swap" },
    { icon: "Battery", label: "Runtime", value: "8 hr per battery" },
    { icon: "Ruler", label: "Min passage", value: "90 cm" },
  ],
  differentiators: [
    {
      icon: "Package",
      title: "100+ kg heavy-load courier",
      desc: "Carries up to 100 kg per trip — pharmacy supply trolleys, hospital linen carts, manufacturing parts bins. The robot replaces the trolley-and-pusher workflow entirely.",
      proof: "100+ kg payload, industrial-grade chassis",
    },
    {
      icon: "Battery",
      title: "15-second battery swap",
      desc: "Plug-and-play battery exchange means zero downtime across 24/7 operations. Critical for hospitals and manufacturing where service interruption isn't acceptable.",
      proof: "15-second hot-swap dual battery",
    },
    {
      icon: "ShieldCheck",
      title: "360° anti-collision strip",
      desc: "Full-perimeter contact sensor stops the robot on any contact. Layered with LiDAR SLAM + stereo vision = safe operation around staff, patients, and equipment.",
      proof: "360° anti-collision strip + LiDAR SLAM",
    },
  ],
  workflow: [
    { step: "01", icon: "Package", title: "Load the chassis", desc: "Wheel a cart or load items directly onto the S100 chassis. Tap the destination on the touchscreen." },
    { step: "02", icon: "Compass", title: "Plug-and-play dispatch", desc: "Pre-installed OS means no setup. Dispatch via direct, loop, or multi-point delivery modes." },
    { step: "03", icon: "Battery", title: "24/7 operation", desc: "When battery low, ops crew swaps in 15 seconds. S100 continues without scheduled charging windows." },
    { step: "04", icon: "BadgeCheck", title: "Verified delivery", desc: "Recipient confirms via touchscreen. Logged in fleet management for compliance audit trails." },
  ],
  specGroups: [
    {
      title: "Dimensions & weight",
      icon: "Ruler",
      rows: [
        { label: "Footprint (W × D × H)", value: "925 × 620 × 1282 mm" },
        { label: "Weight", value: "87.5 kg (without payload)" },
        { label: "Min passage width", value: "90 cm" },
      ],
    },
    {
      title: "Performance",
      icon: "Gauge",
      rows: [
        { label: "Load capacity", value: "100+ kg" },
        { label: "Max speed", value: "1.0 m/s" },
        { label: "Battery life", value: "8 hours per battery" },
        { label: "Battery swap time", value: "15 seconds" },
        { label: "Charging time", value: "2.5 hours" },
      ],
    },
    {
      title: "Sensing & safety",
      icon: "Radar",
      rows: [
        { label: "Navigation", value: "LiDAR SLAM + stereo vision" },
        { label: "Safety", value: "360° anti-collision strip" },
        { label: "Delivery modes", value: "Direct / loop / multi-point / transport" },
      ],
    },
    {
      title: "Software & connectivity",
      icon: "Cpu",
      rows: [
        { label: "Deployment", value: "Plug-and-play (pre-installed OS)" },
        { label: "Connectivity", value: "Wi-Fi / 4G" },
        { label: "Fleet management", value: "KEENON Cloud" },
      ],
    },
  ],
  industryFits: [
    { industry: "Healthcare", solutionsSlug: "healthcare", scenario: "Hospital pharmacy → ward bulk supply, linen distribution, central-sterile services.", recommendedPilot: "Single shift's pharmacy-to-ward route, 4 weeks." },
    { industry: "Corporate", solutionsSlug: "corporate", scenario: "Large campus parcel and supply delivery across multiple buildings.", recommendedPilot: "Single building → reception route, 30 days." },
    { industry: "Aviation", solutionsSlug: "aviation", scenario: "Airport back-of-house: catering trolley positioning, supply replenishment, baggage logistics support.", recommendedPilot: "Single terminal back-of-house route, off-peak hours, 30 days." },
  ],
  commercials: {
    pilotOffer: "30-day pilot. Heavy-load logistics typically benefit from a 60-day extended pilot to capture full operational rhythm — discuss with sales.",
    leadTime: "8–12 weeks from PO to commissioning.",
  },
  familyMembers: [
    { slug: "s300", model: "S300", differentiator: "Up to 300 kg payload — for pallet-scale and cage-load logistics." },
    { slug: "w3", model: "W3", differentiator: "Enclosed multi-cabin delivery — for private smaller-payload room service." },
  ],
  faqs: [
    { q: "What does '100+ kg' mean exactly?", a: "S100 is rated for 100 kg continuous payload. Short-burst overload to 130 kg is supported but reduces battery life and is not recommended for sustained use." },
    { q: "Can it operate in hospitals with patient traffic?", a: "Yes — the 360° anti-collision strip and LiDAR-based slowdown around people make patient-corridor operation feasible. Speed reduces to 0.4 m/s in patient zones." },
    { q: "How does the battery swap work in practice?", a: "Two batteries onboard. An ops crew member opens the battery bay (no tools), removes the empty, inserts a charged spare, closes. 15 seconds. The empty battery charges at a separate dock." },
    { q: "What's the load surface like?", a: "Flat-deck chassis with integrated tie-down points. Carts and bins ride directly on the deck; loose items can ride in optional containment frames." },
    { q: "Can it dock at fixed loading stations?", a: "Yes — S100 supports docking at fixed stations for predictable cycle times in manufacturing / warehouse loops." },
    { q: "What's the typical use case in Indian hospitals?", a: "Pharmacy → ward bulk supply (1 trip = 8–12 patient orders), CSSD → OT delivery, linen distribution across floors. Replaces 1.5–2 FTE of trolley-pushing workforce per shift." },
  ],
};

const S300: ProductDetail = {
  slug: "s300",
  positioning:
    "Heavy-load 300 kg payload courier with ultra-low 23 cm chassis — pallet and cage-load logistics for manufacturing, warehouses, and large hospital networks.",
  seoDescription:
    "KEENON S300 heavy-load delivery robot for India — 300 kg payload, 23 cm low chassis, offline operation. Pallet and cage logistics for industry.",
  galleryCaptions: [
    "300 kg payload for pallet and cage logistics",
    "23 cm low chassis — forklifts load directly",
    "Offline operation in network-patchy warehouses",
    "Triple emergency stops with 360° safety shield",
  ],
  quickFacts: [
    { icon: "Package", label: "Payload", value: "300 kg" },
    { icon: "Ruler", label: "Chassis height", value: "23 cm (industry-low)" },
    { icon: "Battery", label: "Runtime", value: "6 hr per battery" },
    { icon: "ShieldCheck", label: "Safety", value: "Triple emergency stops" },
  ],
  differentiators: [
    {
      icon: "Package",
      title: "300 kg payload",
      desc: "The heaviest-load KEENON courier. Carries pallet-scale and cage-load shipments across manufacturing floors, hospital networks, and large logistics campuses.",
      proof: "300 kg rated payload — pallet / cage compatible",
    },
    {
      icon: "Ruler",
      title: "23 cm ultra-low chassis",
      desc: "23 cm low chassis height makes pallet and cage loading effortless — no forklifts or ramps needed. Forklifts can drop loads directly onto S300.",
      proof: "23 cm chassis height (industry-low)",
    },
    {
      icon: "Cpu",
      title: "Offline-capable operation",
      desc: "Continues operating without network connectivity — critical for warehouse / industrial environments where Wi-Fi coverage is patchy.",
      proof: "Network-independent operation",
    },
  ],
  workflow: [
    { step: "01", icon: "Package", title: "Pallet load", desc: "Forklift drops a pallet or cage directly onto the 23 cm chassis. Tap destination on the touchscreen." },
    { step: "02", icon: "Compass", title: "Multi-mode dispatch", desc: "Loop, direct, multi-point, or transport mode — selected via app or directly on the robot." },
    { step: "03", icon: "ShieldCheck", title: "Safe transit", desc: "360° safety shield + triple emergency stops handle even busy warehouse and manufacturing floor traffic." },
    { step: "04", icon: "Battery", title: "Battery swap continuous", desc: "Battery swap supports 24/7 operation. Auto-charging when in dock between shifts." },
  ],
  specGroups: [
    {
      title: "Dimensions & weight",
      icon: "Ruler",
      rows: [
        { label: "Footprint (W × D × H)", value: "925 × 640 × 1282 mm" },
        { label: "Weight", value: "115 kg (without payload)" },
        { label: "Chassis height", value: "23 cm" },
      ],
    },
    {
      title: "Performance",
      icon: "Gauge",
      rows: [
        { label: "Load capacity", value: "300 kg" },
        { label: "Max speed", value: "1.0 m/s" },
        { label: "Battery life", value: "6 hours per battery" },
        { label: "Charging time", value: "3.5 hours" },
        { label: "Battery swap", value: "Supported (24/7 operation)" },
      ],
    },
    {
      title: "Sensing & safety",
      icon: "Radar",
      rows: [
        { label: "Navigation", value: "LiDAR SLAM + stereo vision" },
        { label: "Safety", value: "360° shield + triple emergency stops" },
        { label: "Deployment", value: "1-day setup (no tape / QR codes)" },
        { label: "Offline mode", value: "Network-independent operation" },
      ],
    },
    {
      title: "Software & connectivity",
      icon: "Cpu",
      rows: [
        { label: "Delivery modes", value: "Loop / direct / multi-point / transport" },
        { label: "Auto-planning", value: "Dynamic LiDAR + stereo fusion" },
        { label: "Fleet management", value: "KEENON Cloud + offline operation" },
      ],
    },
  ],
  industryFits: [
    { industry: "Healthcare", solutionsSlug: "healthcare", scenario: "Large hospital networks: heavy linen / equipment / pharmacy bulk distribution across campus buildings.", recommendedPilot: "CSSD → OT route, 4-week pilot covering peak surgical days." },
    { industry: "Aviation", solutionsSlug: "aviation", scenario: "Airport baggage cart positioning, catering pallet movement, supply chain logistics.", recommendedPilot: "Single terminal segment, off-peak operation, 30 days." },
    { industry: "Corporate", solutionsSlug: "corporate", scenario: "Manufacturing campus material handling — parts bins, assembly kits, finished goods movement.", recommendedPilot: "Single assembly line → warehouse loop, 30 days." },
  ],
  commercials: {
    pilotOffer: "30-day pilot. Heavy-logistics deployments often benefit from extended 60-day pilots — discuss with sales.",
    leadTime: "10–14 weeks from PO to commissioning.",
  },
  familyMembers: [
    { slug: "s100", model: "S100", differentiator: "Half the payload (100 kg) — for trolley-scale rather than pallet-scale logistics." },
    { slug: "w3", model: "W3", differentiator: "Enclosed multi-cabin delivery for private smaller-payload room service." },
  ],
  faqs: [
    { q: "Can S300 carry standard EU and US pallets?", a: "Yes — chassis dimensions accommodate standard 1200 × 800 mm EU and 1200 × 1000 mm US pallets within payload limits." },
    { q: "What's '23 cm chassis height' mean practically?", a: "The deck on which loads sit is 23 cm above the floor — vs ~40+ cm for most AMR competitors. Forklifts can drop loads directly without intermediate ramps or staging." },
    { q: "How does offline operation work?", a: "S300's onboard compute runs SLAM, path planning, and safety logic without cloud connectivity. Fleet management syncs when connectivity returns. Useful for warehouses with patchy Wi-Fi." },
    { q: "What's the typical use case in Indian manufacturing?", a: "Replacing tug-and-trolley material movement between assembly lines and warehouses. Typical: 12–18 trips/shift carrying 150–250 kg per trip." },
    { q: "Can multiple S300s operate in the same facility?", a: "Yes — KEENON Cloud manages multi-robot fleets with traffic coordination. Most large facilities run 2–8 S300s simultaneously." },
    { q: "How much site preparation is needed?", a: "No magnetic tape or QR codes required. Initial mapping is a 1-day exercise; ongoing operation needs no site infrastructure beyond standard charging stations." },
  ],
};

const G1: ProductDetail = {
  slug: "g1",
  positioning:
    "Reception and guiding robot with dual-sided advertising display and face recognition — for hotel lobbies, corporate receptions, exhibition halls, and museum wayfinding.",
  seoDescription:
    "KEENON G1 reception and guiding robot for India — dual-sided HD displays, face recognition, multi-language voice. For hotel lobbies and corporate receptions.",
  galleryCaptions: [
    "Dual-sided HD displays greet and advertise",
    "Face recognition for VIP and returning guests",
    "Five sensors for safe lobby navigation",
    "Wayfinding, concierge, and promotion in one robot",
  ],
  quickFacts: [
    { icon: "MonitorSmartphone", label: "Display", value: "Dual-sided HD screens" },
    { icon: "Users", label: "Face recognition", value: "VIP identification" },
    { icon: "MessageSquare", label: "Voice", value: "Multi-language interaction" },
    { icon: "Battery", label: "Battery life", value: "8+ hr" },
  ],
  differentiators: [
    {
      icon: "MonitorSmartphone",
      title: "Dual-sided advertising display",
      desc: "High-resolution screens on both sides — guest-facing greetings on the front, branded promotional content on the back. Doubles as digital signage.",
      proof: "Dual-sided HD advertising screens",
    },
    {
      icon: "Users",
      title: "Face recognition for VIPs",
      desc: "Recognises returning guests and VIPs registered in the property's CRM — personalised greetings, automatic concierge alerts, premium handling.",
      proof: "Face recognition + CRM integration",
    },
    {
      icon: "Radar",
      title: "Multi-sensor navigation",
      desc: "LiDAR + machine vision + depth sensors + sonar + infrared. Handles dynamic lobby environments — luggage carts, large groups, suitcases, children.",
      proof: "5 sensor types fused for lobby-grade safety",
    },
  ],
  workflow: [
    { step: "01", icon: "Users", title: "Visitor approach", desc: "G1 detects approach via vision. Face-recognition checks CRM for VIP / returning guest." },
    { step: "02", icon: "MessageSquare", title: "Greeting & menu", desc: "Voice + screen offer wayfinding, concierge call, info display in the visitor's preferred language." },
    { step: "03", icon: "Compass", title: "Escort to destination", desc: "If wayfinding requested, G1 guides the visitor — restaurant, room, meeting room, exhibition hall." },
    { step: "04", icon: "Zap", title: "Return to lobby", desc: "Returns to standby position. Display switches to branded promotional content for ambient marketing." },
  ],
  specGroups: [
    {
      title: "Dimensions & weight",
      icon: "Ruler",
      rows: [
        { label: "Footprint (W × D × H)", value: "~600 × 500 × 1450 mm" },
        { label: "Weight", value: "~70 kg" },
      ],
    },
    {
      title: "Performance",
      icon: "Gauge",
      rows: [
        { label: "Max speed", value: "1.0 m/s" },
        { label: "Battery life", value: "8+ hours" },
        { label: "Charging time", value: "4 hours" },
        { label: "Charging mode", value: "Autonomous or manual" },
        { label: "Slope tolerance", value: "≤ 5°" },
      ],
    },
    {
      title: "Sensing & interaction",
      icon: "Radar",
      rows: [
        { label: "Navigation", value: "LiDAR + machine vision + depth sensor" },
        { label: "Additional sensors", value: "Sonar + infrared" },
        { label: "Face recognition", value: "VIP identification + CRM lookup" },
        { label: "Voice", value: "Multi-language smart voice" },
      ],
    },
    {
      title: "Software & branding",
      icon: "Cpu",
      rows: [
        { label: "Display", value: "Dual-sided HD advertising" },
        { label: "Content management", value: "KEENON Cloud" },
        { label: "Customisation", value: "Greetings, voice, branding" },
      ],
    },
  ],
  industryFits: [
    { industry: "Hospitality", solutionsSlug: "hospitality", scenario: "Hotel lobby concierge: guest greeting, F&B wayfinding, promotion display, VIP-arrival flagging.", recommendedPilot: "Single lobby, 30-day pilot with measured guest interactions per day." },
    { industry: "Corporate", solutionsSlug: "corporate", scenario: "Visitor management at corporate reception — pre-registered visitor recognition, wayfinding to meeting rooms.", recommendedPilot: "Single reception lobby, 4-week pilot." },
    { industry: "Aviation", solutionsSlug: "aviation", scenario: "Airport information kiosks — replace static signage with interactive wayfinding.", recommendedPilot: "Single terminal info-zone, 30 days." },
    { industry: "Healthcare", solutionsSlug: "healthcare", scenario: "Hospital reception wayfinding — directing patients to OPDs, labs, pharmacies.", recommendedPilot: "Main hospital lobby, 4 weeks." },
  ],
  commercials: {
    pilotOffer: "30-day pilot. Strongest results when paired with CRM integration during the pilot window.",
    leadTime: "6–10 weeks from PO to commissioning.",
  },
  familyMembers: [
    { slug: "t10", model: "T10", differentiator: "Premium delivery + reception robot with 23.8\" display — when one robot handles both lobby greeting AND delivery." },
    { slug: "s100", model: "S100", differentiator: "Heavy-load courier sibling — for properties wanting reception + back-of-house logistics from the same vendor stack." },
  ],
  faqs: [
    { q: "Is face recognition GDPR / DPDP-compliant?", a: "KEENON Cloud is GDPR-certified globally and supports DPDP-aligned data handling for Indian deployments. Face data is processed on-property; only matched-identity metadata syncs to the CRM. Consent flows are configured per property." },
    { q: "How does the property update promotional content?", a: "KEENON Cloud has a content-management UI. The property's marketing team uploads images, videos, and standby loops. Updates apply across the property's G1 fleet." },
    { q: "What if a visitor doesn't speak any of the supported languages?", a: "G1 falls back to gesture-based and text-based interaction. Touchscreen menus support visual navigation without spoken language." },
    { q: "Does it integrate with our existing CRM (Salesforce, HubSpot, etc.)?", a: "G1 ships with API hooks. Integration with most major CRMs is a 2–4 week project scoped during the pilot." },
    { q: "What's the typical lifespan of the display?", a: "5+ years for the LCD panel, longer for the chassis. Display replacements are field-serviceable." },
    { q: "Can it work in multi-G1 lobby fleets?", a: "Yes — multiple G1s coordinate via KEENON Cloud to avoid overlap and present unified branding." },
  ],
};

export const PRODUCT_DETAILS: ProductDetail[] = [
  T3,
  T5,
  T8,
  T9,
  T9_PRO,
  T10,
  T11,
  W3,
  C20,
  C30,
  C40,
  C55,
  S100,
  S300,
  G1,
];

export const PRODUCT_DETAILS_BY_SLUG: Record<string, ProductDetail> = Object.fromEntries(
  PRODUCT_DETAILS.map((p) => [p.slug, p]),
);

export function getProductDetailBySlug(slug: string | undefined): ProductDetail | undefined {
  if (!slug) return undefined;
  return PRODUCT_DETAILS_BY_SLUG[slug];
}
