export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: "delivery" | "cleaning" | "service";
  categoryLabel: string;
  description: string;
  longDescription: string;
  heroColor: string;
  accentColor: string;
  specs: ProductSpec[];
  features: string[];
  useCases: string[];
  industries: string[];
  videoId: string;
  image: string;
  images?: string[]; // optional additional gallery images
  thumbnailBg: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "t8",
    name: "T8",
    tagline: "The Smart Food Delivery Robot",
    category: "delivery",
    categoryLabel: "Delivery Robot",
    description:
      "KEENON T8 is a versatile multi-tray food delivery robot designed for restaurants, hotels, and hospitals. It autonomously navigates complex environments, delivering meals with precision and efficiency.",
    longDescription:
      "The KEENON T8 is engineered for the food & beverage industry with its elegant design and intelligent navigation system. Equipped with advanced LIDAR sensors and simultaneous localization and mapping (SLAM) technology, the T8 navigates autonomously through restaurants, hotel corridors, and healthcare facilities. With three independent trays accommodating up to 10 kg each, it handles multiple orders in a single trip. Its intuitive face display allows guests to interact naturally, making it the perfect blend of technology and hospitality. The T8 is trusted by over 60,000 businesses worldwide and has made over 100 million successful deliveries.",
    heroColor: "from-blue-900 to-slate-900",
    accentColor: "blue",
    specs: [
      { label: "Tray Capacity", value: "3 Trays × 10 kg each" },
      { label: "Max Speed", value: "1.2 m/s" },
      { label: "Battery Life", value: "Up to 12 hours" },
      { label: "Charging Time", value: "2.5 hours" },
      { label: "Navigation", value: "LIDAR + SLAM" },
      { label: "Obstacle Avoidance", value: "Multi-sensor fusion" },
      { label: "Display", value: "10.1\" Touch Screen" },
      { label: "Voice Interaction", value: "Yes (Multi-language incl. Hindi)" },
      { label: "Weight", value: "40 kg" },
      { label: "Dimensions", value: "540×470×1270 mm" },
      { label: "Connectivity", value: "Wi-Fi 5 GHz / 2.4 GHz" },
      { label: "Elevator Integration", value: "Yes (IoT compatible)" },
    ],
    features: [
      "Triple-tray autonomous delivery",
      "360° obstacle detection & avoidance",
      "Automatic recharging when battery low",
      "Multi-language voice interaction including Hindi",
      "IoT integration with hotel PMS systems",
      "Elevator & door control integration",
      "Real-time delivery tracking dashboard",
      "Gesture & touch interaction",
      "UV-C disinfection mode available",
      "Cloud-based fleet management",
    ],
    useCases: [
      "Restaurant food delivery",
      "Hotel room service",
      "Hospital meal distribution",
      "Office pantry service",
      "Banquet hall assistance",
    ],
    industries: ["Hospitality", "Healthcare", "F&B", "Corporate"],
    videoId: "7PaZSanCbHI",
    image: "https://static.keenon.com/uploads/2025/01/07/70b4d698984f428ca5d4238f03cbe183.jpg?x-oss-process=image/format,webp",
    images: [
      // Feature 1 — Triple-tray autonomous delivery
      "https://static.keenon.com/uploads/2025/01/07/70b4d698984f428ca5d4238f03cbe183.jpg?x-oss-process=image/format,webp",
      // Feature 2 — 360° obstacle detection & avoidance
      "https://static.keenon.com/uploads/2025/01/07/3f1030d1ed7f419e8d1fe25536af2051.webp",
    ],
    thumbnailBg: "from-blue-600 to-blue-900",
  },
  {
    id: "t9",
    name: "T9",
    tagline: "Next-Gen Intelligent Delivery Robot",
    category: "delivery",
    categoryLabel: "Delivery Robot",
    description:
      "KEENON T9 elevates the delivery experience with an expressive face display, enhanced tray system, and superior AI-powered navigation making it the most guest-friendly robot in its class.",
    longDescription:
      "The KEENON T9 represents a leap forward in robotic service delivery. Its signature animated face display creates a warm, approachable presence that guests and patients love. The T9 features an upgraded LIDAR system with 3D obstacle avoidance for unmatched navigation accuracy even in dynamic, crowded environments. With its three open trays and optional cover trays, it's the ideal delivery companion for upscale hotels, fine-dining restaurants, and healthcare facilities across India. The T9 integrates seamlessly with property management systems and can be customized with hotel branding. Its extended 12+ hour battery life ensures it keeps pace with even the busiest service periods.",
    heroColor: "from-cyan-900 to-slate-900",
    accentColor: "cyan",
    specs: [
      { label: "Tray Capacity", value: "3 Trays × 10 kg each" },
      { label: "Max Speed", value: "1.2 m/s" },
      { label: "Battery Life", value: "12+ hours" },
      { label: "Charging Time", value: "3 hours" },
      { label: "Navigation", value: "LIDAR 3D + SLAM" },
      { label: "Obstacle Avoidance", value: "3D depth camera + LIDAR" },
      { label: "Display", value: "10.1\" Animated Face Display" },
      { label: "Voice Interaction", value: "AI-powered NLP (Hindi/English)" },
      { label: "Weight", value: "42 kg" },
      { label: "Dimensions", value: "540×470×1290 mm" },
      { label: "Connectivity", value: "Wi-Fi 6 / 4G LTE optional" },
      { label: "Elevator Integration", value: "Yes" },
    ],
    features: [
      "Expressive animated face display for guest delight",
      "Enhanced 3D obstacle avoidance with depth cameras",
      "Tray open/close detection with alerts",
      "Brand customization options",
      "Proactive greeting interactions",
      "Multi-floor autonomous navigation",
      "Over-the-air (OTA) software updates",
      "Anti-collision bumper array",
      "Optional meal cover trays",
      "Advanced fleet coordination for multi-robot operations",
    ],
    useCases: [
      "5-star hotel room service",
      "Fine dining restaurants",
      "Hospital ward delivery",
      "Senior care facilities",
      "Club & lounge service",
    ],
    industries: ["Luxury Hospitality", "Healthcare", "F&B", "Senior Care"],
    videoId: "n_MpADYaGN0",
    image: "https://static.keenon.com/uploads/2025/01/07/5b5be29c47bb403fa173285a3deba3d7.jpg?x-oss-process=image/format,webp",
    images: [
      // Feature 1 — Expressive animated face display for guest delight
      "https://static.keenon.com/uploads/2025/01/07/5b5be29c47bb403fa173285a3deba3d7.jpg?x-oss-process=image/format,webp",
      // Feature 2 — Enhanced 3D obstacle avoidance with depth cameras
      "https://static.keenon.com/uploads/2025/01/07/2e1806fa93a4413da0364159c2a7f611.webp",
      // Feature 3 — Tray open/close detection with alerts
      "https://static.keenon.com/uploads/2025/01/07/b46b83afb7cc4912a9e4bcad83ae4c6d.jpg?x-oss-process=image/format,webp",
      // Feature 4 — Brand customization options
      "https://static.keenon.com/uploads/2025/01/07/2dc8bf76f6c24bd8abf5db546d36571e.webp",
    ],
    thumbnailBg: "from-cyan-600 to-cyan-900",
  },
  {
    id: "t10",
    name: "T10",
    tagline: "Premium Butler Robot for Elite Hospitality",
    category: "delivery",
    categoryLabel: "Delivery Robot",
    description:
      "The KEENON T10 is the flagship delivery robot for premium hospitality settings, featuring an ultra-wide screen, sophisticated AI, and impeccable build quality for discerning establishments.",
    longDescription:
      "Designed for the world's most prestigious hotels, resorts, and healthcare facilities, the KEENON T10 sets the gold standard in service robotics. Its commanding presence features a large, high-resolution display that can showcase personalized messages, hotel branding, and interactive content. The T10's AI-driven navigation handles complex environments including curved corridors, tight spaces, and busy lobbies with remarkable grace. In the Indian context, the T10 is already being deployed across leading 5-star properties in Mumbai, Delhi, and Bengaluru. Its multi-language capability with Hindi, Tamil, Telugu, and 40+ other languages ensures seamless interaction with guests across India's diverse linguistic landscape.",
    heroColor: "from-violet-900 to-slate-900",
    accentColor: "violet",
    specs: [
      { label: "Tray Capacity", value: "3 Open Trays × 10 kg" },
      { label: "Max Speed", value: "1.5 m/s" },
      { label: "Battery Life", value: "14 hours" },
      { label: "Display", value: "15.6\" Full HD Touchscreen" },
      { label: "Navigation", value: "Fusion SLAM (LIDAR + Vision)" },
      { label: "Camera", value: "Front 3D depth + Rear HD" },
      { label: "Voice", value: "40+ languages incl. 10 Indian languages" },
      { label: "Weight", value: "45 kg" },
      { label: "Payload", value: "30 kg total" },
      { label: "Connectivity", value: "Wi-Fi 6E / 5G ready" },
      { label: "Integration", value: "PMS, POS, IoT, BMS" },
      { label: "IP Rating", value: "IP44 splash-proof" },
    ],
    features: [
      "15.6\" HD display with custom branding",
      "Fusion SLAM for precision navigation",
      "10 Indian regional language support",
      "PMS & POS system integration",
      "BMS (Building Management System) integration",
      "Custom livery and color options",
      "RFID room key interaction",
      "Priority queue management",
      "Guest satisfaction analytics dashboard",
      "Dedicated India support & maintenance",
    ],
    useCases: [
      "5-star & luxury hotel service",
      "Resort amenity delivery",
      "Corporate executive floor service",
      "Integrated healthcare delivery",
      "Premium retail assistance",
    ],
    industries: ["Luxury Hotels", "Resorts", "Healthcare", "Corporate"],
    videoId: "0nPaHJVqO8k",
    image: "https://static.keenon.com/uploads/2025/03/17/e7528c3637714e85b36d5fa830ee0939.jpg?x-oss-process=image/format,webp",
    images: [
      // Feature 1 — 15.6" HD display with custom branding
      "https://static.keenon.com/uploads/2025/03/17/e7528c3637714e85b36d5fa830ee0939.jpg?x-oss-process=image/format,webp",
      // Feature 2 — Fusion SLAM for precision navigation
      "https://static.keenon.com/uploads/2025/01/07/29ecca741b734c61b7a345e384ad6f2a.jpg?x-oss-process=image/format,webp",
      // Feature 3 — 10 Indian regional language support
      "https://static.keenon.com/uploads/2025/01/07/4dd7ee05dfa64deebe34cf14b5f2f755.jpg?x-oss-process=image/format,webp",
    ],
    thumbnailBg: "from-violet-600 to-violet-900",
  },
  {
    id: "t11",
    name: "T11",
    tagline: "High-Capacity Smart Delivery Robot",
    category: "delivery",
    categoryLabel: "Delivery Robot",
    description:
      "The KEENON T11 offers maximum payload capacity with four large compartments, purpose-built for high-volume delivery environments in hospitals, hotels, and large-scale F&B operations.",
    longDescription:
      "When volume matters, the KEENON T11 delivers. Featuring four spacious delivery compartments and the highest payload capacity in the KEENON delivery range, the T11 is engineered for high-throughput environments. Hospitals can use it for linen distribution, pharmacy rounds, and meal service simultaneously. Large hotels can dispatch it for multi-room amenity delivery in a single trip. Each compartment can be locked individually, ensuring secure, contactless delivery for sensitive items. The T11's robust chassis and high-torque motors handle heavy loads effortlessly across Indian facility types — from sprawling AIIMS campuses to multi-tower ITC hotel complexes. Its intelligent routing optimizes delivery sequences for maximum efficiency.",
    heroColor: "from-amber-900 to-slate-900",
    accentColor: "amber",
    specs: [
      { label: "Compartments", value: "4 Independent Locked Trays" },
      { label: "Total Payload", value: "Up to 40 kg" },
      { label: "Per Tray Payload", value: "10 kg" },
      { label: "Max Speed", value: "1.2 m/s" },
      { label: "Battery Life", value: "10+ hours" },
      { label: "Display", value: "10.1\" Interactive Screen" },
      { label: "Navigation", value: "LIDAR SLAM + 3D Vision" },
      { label: "Compartment Lock", value: "Electronic individual lock" },
      { label: "Weight", value: "55 kg" },
      { label: "Dimensions", value: "560×500×1350 mm" },
      { label: "Connectivity", value: "Wi-Fi 5 GHz" },
      { label: "Charging", value: "Auto-docking charging" },
    ],
    features: [
      "4 lockable independent compartments",
      "40 kg total payload capacity",
      "Contactless secure delivery",
      "Individual tray electronic locking",
      "High-torque motors for heavy loads",
      "Auto-return to charging dock",
      "Multi-stop delivery routing",
      "Hospital-grade hygiene materials",
      "Real-time delivery notifications",
      "Integration with nurse call systems",
    ],
    useCases: [
      "Hospital linen & pharmacy distribution",
      "Multi-room hotel amenity delivery",
      "Document & specimen transport",
      "Retail stock replenishment",
      "Corporate mailroom automation",
    ],
    industries: ["Healthcare", "Hospitality", "Pharmaceutical", "Corporate"],
    videoId: "XVh7BkgMhuk",
    image: "https://static.keenon.com/uploads/2025/08/27/d0e3350948ba4a86a0f604b7a4a23ba6.jpg?x-oss-process=image/format,webp",
    images: [
      // Feature 1 — 4 lockable independent compartments
      "https://static.keenon.com/uploads/2025/08/27/d0e3350948ba4a86a0f604b7a4a23ba6.jpg?x-oss-process=image/format,webp",
      // Feature 2 — 40 kg total payload capacity
      "https://static.keenon.com/uploads/2025/08/27/bff71a3e19bc43f6ba5f7ee9055555f1.jpg?x-oss-process=image/format,webp",
      // Feature 3 — Contactless secure delivery
      "https://static.keenon.com/uploads/2025/08/27/e5d5ba0f417346fbb0cbbdb038746f8a.jpg?x-oss-process=image/format,webp",
      // Feature 4 — Individual tray electronic locking
      "https://static.keenon.com/uploads/2025/08/27/15eba5c9e4b54040a2048fd7dea74722.jpg?x-oss-process=image/format,webp",
      // Feature 5 — High-torque motors for heavy loads
      "https://static.keenon.com/uploads/2025/08/27/f485683db03e444a8ccf48e2e158e77b.jpg?x-oss-process=image/format,webp",
      // Feature 6 — Auto-return to charging dock
      "https://static.keenon.com/uploads/2025/09/01/aef7c671bab445fdbd46cea9cd50a781.png?x-oss-process=image/format,webp",
    ],
    thumbnailBg: "from-amber-600 to-amber-900",
  },
  {
    id: "w3",
    name: "W3",
    tagline: "Intelligent Commercial Scrubbing Robot",
    category: "cleaning",
    categoryLabel: "Cleaning Robot",
    description:
      "The KEENON W3 is a compact yet powerful commercial floor scrubbing robot designed for small to medium spaces, delivering consistent cleaning quality with zero fatigue.",
    longDescription:
      "The KEENON W3 brings professional-grade floor cleaning to the realm of intelligent automation. Designed for small-to-medium commercial environments, the W3 combines scrubbing, mopping, and drying in one smart machine. Its intelligent path planning ensures complete floor coverage with no missed areas, while its obstacle avoidance system safely navigates around furniture, equipment, and people. The W3 is particularly effective in Indian contexts — it handles the unique cleaning challenges of food courts, hotel lobbies, office spaces, and retail stores. With automatic dirty water discharge and clean water refill capability, the W3 maximizes uptime and minimizes manual intervention. It is compliant with Indian Bureau of Standards for commercial cleaning equipment.",
    heroColor: "from-teal-900 to-slate-900",
    accentColor: "teal",
    specs: [
      { label: "Cleaning Width", value: "520 mm" },
      { label: "Cleaning Efficiency", value: "Up to 1,500 m²/h" },
      { label: "Clean Water Tank", value: "45 L" },
      { label: "Dirty Water Tank", value: "45 L" },
      { label: "Battery Life", value: "3+ hours continuous" },
      { label: "Charging Time", value: "4 hours" },
      { label: "Navigation", value: "LIDAR SLAM" },
      { label: "Noise Level", value: "<65 dB" },
      { label: "Weight", value: "128 kg" },
      { label: "Brush Pressure", value: "Adjustable 30-60 N" },
      { label: "Suction Power", value: "180W brushless motor" },
      { label: "Display", value: "7\" touchscreen control panel" },
    ],
    features: [
      "Combined scrub, mop, and dry in one pass",
      "Intelligent coverage path planning",
      "Obstacle detection and avoidance",
      "Auto water management system",
      "Customizable cleaning schedules",
      "Real-time cleaning progress monitoring",
      "Low-noise operation for occupied spaces",
      "Detergent dosing control",
      "Multi-zone cleaning management",
      "Remote monitoring via mobile app",
    ],
    useCases: [
      "Hotel lobby & corridors",
      "Food court & cafeteria",
      "Office floor cleaning",
      "Retail store floors",
      "School & college campuses",
    ],
    industries: ["Hospitality", "Retail", "Education", "Corporate"],
    videoId: "IhBv7JIJQ5M",
    image: "https://static.keenon.com/uploads/2025/01/07/66c020578366481596e71cfedc10aa25.jpg?x-oss-process=image/format,webp",
    images: [
      // Feature 1 — Combined scrub, mop, and dry in one pass
      "https://static.keenon.com/uploads/2025/01/07/66c020578366481596e71cfedc10aa25.jpg?x-oss-process=image/format,webp",
      // Feature 2 — Intelligent coverage path planning
      "https://static.keenon.com/uploads/2025/01/07/a8179615751d47d587d41b6301deb648.webp",
    ],
    thumbnailBg: "from-teal-600 to-teal-900",
  },
  {
    id: "c20",
    name: "C20",
    tagline: "Compact Autonomous Cleaning Robot",
    category: "cleaning",
    categoryLabel: "Cleaning Robot",
    description:
      "The KEENON C20 is a compact, agile autonomous cleaning robot that excels in tight spaces, delivering consistent hygiene standards across hospitality, healthcare, and commercial facilities.",
    longDescription:
      "The KEENON C20 redefines compact commercial cleaning with its slim-profile design that navigates narrow aisles, under furniture, and through tight doorways with ease. Its dual-mode operation — autonomous scheduled cleaning and manual remote control — makes it adaptable to any operational workflow. In Indian hospitality settings, the C20 is perfect for maintaining cleanliness throughout the day in busy areas like restaurant dining rooms, hotel corridors, and retail floors. Its whisper-quiet operation means it can clean during business hours without disturbing guests or customers. The C20's HEPA filtration system captures fine dust particles, making it ideal for healthcare environments where air quality is critical.",
    heroColor: "from-green-900 to-slate-900",
    accentColor: "green",
    specs: [
      { label: "Cleaning Width", value: "400 mm" },
      { label: "Cleaning Area", value: "Up to 1,000 m²/charge" },
      { label: "Water Tank", value: "25 L clean / 25 L dirty" },
      { label: "Battery Life", value: "2.5 hours" },
      { label: "Navigation", value: "LIDAR + Visual SLAM" },
      { label: "Noise Level", value: "<60 dB" },
      { label: "Weight", value: "85 kg" },
      { label: "Dimensions", value: "680×420×950 mm" },
      { label: "Filtration", value: "HEPA H13" },
      { label: "Connectivity", value: "Wi-Fi / 4G" },
      { label: "Operation Modes", value: "Auto / Manual / Schedule" },
      { label: "IP Rating", value: "IP55" },
    ],
    features: [
      "Ultra-slim profile for tight spaces",
      "HEPA H13 filtration for air quality",
      "Whisper-quiet <60 dB operation",
      "Dual autonomous & manual modes",
      "Scheduled cleaning via app",
      "Auto return to charging station",
      "Multi-surface cleaning (tile, marble, vinyl)",
      "UV-C sanitization option",
      "Cloud-based fleet management",
      "Customizable cleaning intensity zones",
    ],
    useCases: [
      "Restaurant dining area",
      "Hotel room corridor",
      "Clinic & hospital floors",
      "Retail store aisles",
      "Airport lounges",
    ],
    industries: ["F&B", "Hospitality", "Healthcare", "Retail", "Aviation"],
    videoId: "EW4Td73DFEI",
    image: "https://static.keenon.com/uploads/2025/05/30/3c032df429624ffa92ac6637b5dabe04.jpg?x-oss-process=image/format,webp",
    images: [
      // Feature 1 — Ultra-slim profile for tight spaces
      "https://static.keenon.com/uploads/2025/05/30/3c032df429624ffa92ac6637b5dabe04.jpg?x-oss-process=image/format,webp",
      // Feature 2 — HEPA H13 filtration for air quality
      "https://static.keenon.com/uploads/2025/05/30/92729e51aaa74750b1d077c75c631a2b.jpg?x-oss-process=image/format,webp",
      // Feature 3 — Whisper-quiet <60 dB operation
      "https://static.keenon.com/uploads/2025/05/30/cecf06ebc4bb492688f605e2412e4052.jpg?x-oss-process=image/format,webp",
      // Feature 4 — Dual autonomous & manual modes
      "https://static.keenon.com/uploads/2025/05/30/be9a556dec134c0ca696adad0952edd3.jpg?x-oss-process=image/format,webp",
      // Feature 5 — Scheduled cleaning via app
      "https://static.keenon.com/uploads/2025/05/30/6c9b261c52044095a31aa1f23f545b4a.jpg?x-oss-process=image/format,webp",
      // Feature 6 — Auto return to charging station
      "https://static.keenon.com/uploads/2025/05/30/8de4f733546a4716a6aff684744638e3.jpg?x-oss-process=image/format,webp",
    ],
    thumbnailBg: "from-green-600 to-green-900",
  },
  {
    id: "c40",
    name: "C40",
    tagline: "Industrial-Grade Smart Cleaning Robot",
    category: "cleaning",
    categoryLabel: "Cleaning Robot",
    description:
      "The KEENON C40 is a heavy-duty industrial cleaning robot built for large-scale environments like airports, shopping malls, and logistics centers, delivering powerful cleaning performance 24/7.",
    longDescription:
      "When the cleaning challenge is massive, the KEENON C40 rises to the occasion. This industrial-grade cleaning robot features the largest water tanks, widest cleaning path, and most powerful motors in the KEENON cleaning lineup. Designed for India's mega infrastructure — international airports, sprawling shopping malls, convention centers, and large manufacturing facilities — the C40 maintains pristine floors at scale. Its intelligent multi-floor mapping capability allows it to manage cleaning across different levels using elevator integration. With 8-hour continuous operation, the C40 handles an entire shift without human intervention. Its advanced AI map-building creates optimal cleaning routes that maximize coverage while minimizing energy consumption.",
    heroColor: "from-orange-900 to-slate-900",
    accentColor: "orange",
    specs: [
      { label: "Cleaning Width", value: "720 mm" },
      { label: "Cleaning Efficiency", value: "Up to 4,000 m²/h" },
      { label: "Clean Water Tank", value: "120 L" },
      { label: "Dirty Water Tank", value: "120 L" },
      { label: "Battery Life", value: "8 hours continuous" },
      { label: "Charging Time", value: "6 hours" },
      { label: "Navigation", value: "Industrial LIDAR SLAM" },
      { label: "Mapping Area", value: "Up to 50,000 m²" },
      { label: "Weight", value: "280 kg" },
      { label: "Brush Motor", value: "2 × 400W industrial brushes" },
      { label: "Suction", value: "500W industrial suction" },
      { label: "Connectivity", value: "Wi-Fi / 4G / Ethernet" },
    ],
    features: [
      "4,000 m²/h industrial cleaning capacity",
      "120 L large-capacity water tanks",
      "8-hour continuous autonomous operation",
      "Multi-floor intelligent mapping",
      "Industrial-grade brush motors",
      "High-pressure water jet option",
      "24/7 remote monitoring & alerts",
      "Integration with facility management systems",
      "Predictive maintenance diagnostics",
      "Auto water station docking",
    ],
    useCases: [
      "International airports",
      "Large shopping malls",
      "Convention & exhibition centers",
      "Manufacturing plant floors",
      "Metro station concourses",
    ],
    industries: ["Aviation", "Retail", "Manufacturing", "Infrastructure"],
    videoId: "mZv4UEyFGQg",
    image: "https://static.keenon.com/uploads/2025/10/23/6d9c3aecae374928bd63182f0bfa0cc6.jpg?x-oss-process=image/format,webp",
    images: [
      // Feature 1 — 4,000 m²/h industrial cleaning capacity
      "https://static.keenon.com/uploads/2025/10/23/6d9c3aecae374928bd63182f0bfa0cc6.jpg?x-oss-process=image/format,webp",
      // Feature 2 — 120 L large-capacity water tanks
      "https://static.keenon.com/uploads/2025/10/23/9ec78776e1b449d3830725428ff82995.jpg?x-oss-process=image/format,webp",
      // Feature 3 — 8-hour continuous autonomous operation
      "https://static.keenon.com/uploads/2025/10/23/6bdd3272e28843b99c5045737fd91c8c.jpg?x-oss-process=image/format,webp",
      // Feature 4 — Multi-floor intelligent mapping
      "https://static.keenon.com/uploads/2025/10/23/f22eda50233f408db703157999d0efb5.jpg?x-oss-process=image/format,webp",
      // Feature 5 — Industrial-grade brush motors
      "https://static.keenon.com/uploads/2025/10/23/cb71962afa6d46839249407aa6187136.jpg?x-oss-process=image/format,webp",
      // Feature 6 — High-pressure water jet option
      "https://static.keenon.com/uploads/2025/10/23/dc7e88d4f8ed4a35a1c47ce7066ce2db.jpg?x-oss-process=image/format,webp",
      // Feature 7 — 24/7 remote monitoring & alerts
      "https://static.keenon.com/uploads/2025/10/23/519c148a10db489fbd6f8aecaa82bdea.jpg?x-oss-process=image/format,webp",
      // Feature 8 — Integration with facility management systems
      "https://static.keenon.com/uploads/2025/10/23/5a3d119620fd4f2a9a5bfad4bac52390.jpg?x-oss-process=image/format,webp",
      // Feature 9 — Predictive maintenance diagnostics
      "https://static.keenon.com/uploads/2025/10/23/91a57ab35b0449dba02713ec06ac98aa.jpg?x-oss-process=image/format,webp",
      // Feature 10 — Auto water station docking
      "https://static.keenon.com/uploads/2025/12/05/682f0af604684cdda41c8d32ca146e02.jpg?x-oss-process=image/format,webp",
      // Bonus gallery — additional view
      "https://static.keenon.com/uploads/2025/10/23/8caa33e9ace1498389cbf4db0ad0c763.jpg?x-oss-process=image/format,webp",
    ],
    thumbnailBg: "from-orange-600 to-orange-900",
  },
  {
    id: "s100",
    name: "S100",
    tagline: "Intelligent Reception & Service Robot",
    category: "service",
    categoryLabel: "Service Robot",
    description:
      "The KEENON S100 is a sophisticated reception and service robot that greets visitors, provides information, escorts guests, and handles inquiries — reimagining front-of-house service.",
    longDescription:
      "The KEENON S100 transforms the reception experience with its human-friendly design, expressive display, and advanced conversational AI. Standing at optimal interaction height with a large, vivid touchscreen face, the S100 greets visitors with warmth, answers questions in multiple languages, and can escort guests to their destinations — all autonomously. In India's booming corporate and hospitality sectors, the S100 is making a significant impact at tech parks, luxury hotels, hospitals, and government offices. Its integration with access control systems enables it to verify visitor identity and issue passes. The S100's AI is continuously trained on Indian cultural contexts, regional languages, and local knowledge bases, making it uniquely suited for Indian deployments.",
    heroColor: "from-pink-900 to-slate-900",
    accentColor: "pink",
    specs: [
      { label: "Display", value: "21.5\" Full HD Interactive Screen" },
      { label: "Height", value: "1350 mm" },
      { label: "Navigation", value: "LIDAR + Visual SLAM" },
      { label: "Languages", value: "40+ incl. 10 Indian languages" },
      { label: "AI Engine", value: "NLP-powered conversational AI" },
      { label: "Camera", value: "Face recognition HD camera" },
      { label: "Battery Life", value: "8+ hours" },
      { label: "Charging", value: "Auto-docking" },
      { label: "Payload Tray", value: "5 kg (document/card delivery)" },
      { label: "Connectivity", value: "Wi-Fi 6 / 4G" },
      { label: "Integration", value: "Access control, CRM, ERP" },
      { label: "Weight", value: "60 kg" },
    ],
    features: [
      "21.5\" HD interactive face display",
      "Conversational AI in 10 Indian languages",
      "Face recognition for VIP identification",
      "Autonomous guest escorting",
      "Visitor management system integration",
      "Access control & badge printing",
      "Real-time information kiosk mode",
      "Product & service promotional display",
      "Queue management assistance",
      "Analytics & visitor insights dashboard",
    ],
    useCases: [
      "Hotel lobby reception",
      "Corporate office reception",
      "Hospital patient guidance",
      "Government office visitor management",
      "Tech park & IT hub reception",
    ],
    industries: ["Hospitality", "Corporate", "Healthcare", "Government"],
    videoId: "nWFOEiiLzTc",
    image: "https://static.keenon.com/uploads/2025/01/07/da5945d838104e25a86b225b448ac7f9.jpg?x-oss-process=image/format,webp",
    images: [
      // Feature 1 — 21.5" HD interactive face display
      "https://static.keenon.com/uploads/2025/01/07/da5945d838104e25a86b225b448ac7f9.jpg?x-oss-process=image/format,webp",
      // Feature 2 — Conversational AI in 10 Indian languages
      "https://static.keenon.com/uploads/2025/02/10/23658280543b4d7d9302e689b6981ce5.png?x-oss-process=image/format,webp",
      // Feature 3 — Face recognition for VIP identification
      "https://static.keenon.com/uploads/2025/02/10/13ec3c5471fc426da62aa2b187f9d8b0.png?x-oss-process=image/format,webp",
      // Feature 4 — Autonomous guest escorting
      "https://static.keenon.com/uploads/2025/02/10/f05a9c18115b40b7abe2efa0ed2500b0.png?x-oss-process=image/format,webp",
      // Feature 5 — Visitor management system integration
      "https://static.keenon.com/uploads/2025/02/10/63fb6bd56821412bb8f63899c8ce492f.png?x-oss-process=image/format,webp",
      // Feature 6 — Access control & badge printing
      "https://static.keenon.com/uploads/2025/01/07/cd3e59fada7941daa220cd9e773ac962.jpg?x-oss-process=image/format,webp",
    ],
    thumbnailBg: "from-pink-600 to-pink-900",
  },
  {
    id: "s300",
    name: "S300",
    tagline: "Advanced Multi-Function Service Robot",
    category: "service",
    categoryLabel: "Service Robot",
    description:
      "The KEENON S300 is a powerful multi-purpose service robot combining reception, delivery, and guidance capabilities in one impressive platform for high-traffic environments.",
    longDescription:
      "The KEENON S300 is the Swiss Army knife of service robots — equally capable of welcoming guests, delivering items, providing information, and guiding visitors. Its larger form factor features multiple interaction points including a main display, secondary tray for delivery, and surround sound speakers for clear voice interaction in noisy environments like airports, malls, and event spaces. In India, the S300 is being deployed in smart city projects, major international airports, and leading healthcare systems as part of the national Digital India initiative. Its robust build handles the demands of 24/7 operation in high-traffic environments, and its advanced cooling system ensures reliable performance even in India's varied climate conditions.",
    heroColor: "from-indigo-900 to-slate-900",
    accentColor: "indigo",
    specs: [
      { label: "Main Display", value: "27\" 4K Ultra HD Touchscreen" },
      { label: "Secondary Display", value: "10.1\" Info Screen" },
      { label: "Height", value: "1480 mm" },
      { label: "Navigation", value: "360° LIDAR + Stereo Vision" },
      { label: "Languages", value: "50+ languages" },
      { label: "Payload", value: "15 kg delivery tray" },
      { label: "Speakers", value: "4 × Surround Sound" },
      { label: "Battery Life", value: "10+ hours" },
      { label: "Speed", value: "1.5 m/s" },
      { label: "Weight", value: "85 kg" },
      { label: "Connectivity", value: "Wi-Fi 6E / 5G / Ethernet" },
      { label: "IP Rating", value: "IP54" },
    ],
    features: [
      "27\" 4K ultra-HD main display",
      "Multi-function: reception + delivery + guidance",
      "360° surround sound interaction",
      "Stereo vision depth sensing",
      "Smart crowd management navigation",
      "API-first integration architecture",
      "Digital twin simulation support",
      "Indoor GPS positioning option",
      "Emergency broadcast capability",
      "Designed for India's Smart City mission",
    ],
    useCases: [
      "International airport concourse",
      "Shopping mall information point",
      "Smart government service center",
      "Large hospital campus navigation",
      "Exhibition & event hall guide",
    ],
    industries: ["Aviation", "Smart Cities", "Healthcare", "Retail", "Events"],
    videoId: "GST1_KOT54Q",
    image: "https://static.keenon.com/uploads/2025/10/10/6c16f280020b4a258e0a1235ee5da218.jpg?x-oss-process=image/format,webp",
    images: [
      // Feature 1 — 27" 4K ultra-HD main display
      "https://static.keenon.com/uploads/2025/10/10/6c16f280020b4a258e0a1235ee5da218.jpg?x-oss-process=image/format,webp",
      // Feature 2 — Multi-function: reception + delivery + guidance
      "https://static.keenon.com/uploads/2025/10/10/646128197b974c6badd6e5fbae0aa822.jpg?x-oss-process=image/format,webp",
      // Feature 3 — 360° surround sound interaction
      "https://static.keenon.com/uploads/2025/10/10/afee143ed7e340768a026d42c25a81b2.jpg?x-oss-process=image/format,webp",
    ],
    thumbnailBg: "from-indigo-600 to-indigo-900",
  },
];

export const PRODUCT_CATEGORIES = [
  { id: "all", label: "All Robots" },
  { id: "delivery", label: "Delivery Robots" },
  { id: "cleaning", label: "Cleaning Robots" },
  { id: "service", label: "Service Robots" },
];

export const SOLUTIONS = [
  {
    id: "hospitality",
    title: "Hospitality & Hotels",
    icon: "hotel",
    description: "Transform guest experience with autonomous food delivery, lobby assistance, and 24/7 service robots in 5-star hotels and resorts across India.",
    robots: ["T8", "T9", "T10", "T11", "S100"],
    stats: "40% reduction in service time | 95% guest satisfaction",
    image: "https://images.unsplash.com/photo-1534679541758-8dc76ff8081d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    cases: ["Room service delivery", "Lobby guidance", "Amenity distribution", "Reception assistance"],
  },
  {
    id: "healthcare",
    title: "Healthcare & Hospitals",
    icon: "hospital",
    description: "Minimize human contact, reduce cross-contamination risk, and streamline operations in hospitals, clinics, and care facilities with KEENON robots.",
    robots: ["T11", "S100", "C20", "W3"],
    stats: "60% reduction in logistics staff | Zero contamination incidents",
    image: "https://images.unsplash.com/photo-1767966769495-dbb5e14cab5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    cases: ["Medication delivery", "Meal distribution", "Specimen transport", "Ward floor cleaning"],
  },
  {
    id: "foodbev",
    title: "Restaurants & F&B",
    icon: "utensils",
    description: "Solve labor challenges, delight customers, and increase table turnover with KEENON's smart food delivery robots — India's new restaurant revolution.",
    robots: ["T8", "T9", "T10"],
    stats: "3x more tables served | 30% increase in revenue",
    image: "https://images.unsplash.com/photo-1767966926615-748201123f94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    cases: ["Food delivery to tables", "Dirty dish collection", "Menu recommendations", "Kids entertainment"],
  },
  {
    id: "retail",
    title: "Retail & Shopping",
    icon: "shopping",
    description: "Guide shoppers, manage queues, answer product queries, and maintain pristine store floors with an integrated KEENON robot solution for retail.",
    robots: ["S100", "S300", "C20", "C40"],
    stats: "25% increase in footfall conversion | 50% reduction in cleaning cost",
    image: "https://images.unsplash.com/photo-1764795849833-6e9d6e399a77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    cases: ["Product location guidance", "Promotions display", "Queue management", "Store floor cleaning"],
  },
  {
    id: "aviation",
    title: "Airports & Aviation",
    icon: "plane",
    description: "Enhance passenger experience at India's world-class airports with KEENON robots for wayfinding, assistance, cleaning, and information services.",
    robots: ["S300", "C40", "S100"],
    stats: "Deployed across 15 major airports globally",
    image: "https://images.unsplash.com/photo-1771945029451-da143c6ea0e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    cases: ["Passenger wayfinding", "Terminal cleaning", "Duty-free assistance", "Accessibility support"],
  },
  {
    id: "corporate",
    title: "Corporate & Tech Parks",
    icon: "building",
    description: "Automate reception, food delivery, visitor management, and facility maintenance in India's booming IT parks, SEZs, and corporate campuses.",
    robots: ["S100", "T8", "T11", "C20"],
    stats: "500+ corporate campuses worldwide | India rollout in progress",
    image: "https://images.unsplash.com/photo-1708924908152-aa8df3576b86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    cases: ["Visitor reception", "Cafeteria delivery", "Document distribution", "Office floor cleaning"],
  },
];