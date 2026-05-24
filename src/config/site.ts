/**
 * Single source of truth for site-wide metadata.
 *
 * IMPORTANT: Update `url` to match the deployed domain before going to
 * production. Sitemap, canonical tags, OG tags, and JSON-LD all read from here.
 */

export const SITE = {
  name: "Mobilise Robotics",
  legalName: "Mobilise App Lab Limited",
  tagline: "Authorized KEENON Robotics Partner in India",
  description:
    "Mobilise Robotics is India's authorized KEENON Robotics partner. Autonomous delivery, cleaning, and service robots for hospitality, healthcare, retail, and enterprise.",
  url: "https://fmrobots.in",
  ogImage: "/og-image.jpg", // TODO: add a 1200x630 PNG/JPG at public/og-image.jpg
  email: "sales@mobilise.co.in",
  phone: "+91-9599194330",
  address: {
    street: "Plot No. 62/B, HSIIDC, Sector 31",
    locality: "Faridabad",
    region: "Haryana",
    postalCode: "121006",
    country: "IN",
  },
  social: {
    linkedin: "",
    twitter: "",
    youtube: "",
    instagram: "",
  },
} as const;
