export interface TemplateFAQ {
  question: string;
  answer: string;
}

export interface Template {
  slug: string;
  name: string;
  category: string;
  price: number | null; // null = "Request Quote"
  shortDescription: string;
  longDescription: string;
  tech: string[];
  features: string[];
  whatsIncluded: string[];
  faqs: TemplateFAQ[];
  gallery: string[]; // labels for placeholder screenshots — no real assets yet
  demoUrl: string;
  featured: boolean;
  popularity: number; // 0-100, used for "Popular" sort
  releasedAt: string; // ISO date, used for "Newest" sort
  relatedSlugs: string[];
}

export const TEMPLATES: Template[] = [
  {
    slug: "carlux-motors",
    name: "CarLux Motors",
    category: "Automotive",
    price: 249,
    shortDescription:
      "A premium car dealership template with inventory filtering, financing calculator, and appointment booking.",
    longDescription:
      "CarLux Motors is built for dealerships that want their inventory to do the selling. Buyers can filter by make, model, year, and price, run financing estimates before they ever call, and book a test drive without leaving the page. The layout is built around large, trustworthy vehicle photography and a financing flow that reduces drop-off at the point buyers usually hesitate.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Inventory search with make/model/year/price filters",
      "Built-in financing calculator",
      "Appointment and test-drive booking flow",
      "Vehicle detail pages with spec sheets",
      "Trade-in value request form",
    ],
    whatsIncluded: [
      "Full Next.js + TypeScript source code",
      "Figma design file",
      "Inventory CMS integration guide",
      "30 days of email support",
    ],
    faqs: [
      {
        question: "Can I connect this to my existing inventory system?",
        answer:
          "Yes. The template ships with a documented data layer designed to sit in front of common dealership inventory feeds. We'll walk you through wiring it up during customization.",
      },
      {
        question: "Is the financing calculator legally binding?",
        answer:
          "No. It's an estimator only, clearly labeled as such, meant to qualify interest before a real financing conversation.",
      },
    ],
    gallery: ["Homepage", "Inventory search", "Vehicle detail", "Financing calculator"],
    demoUrl: "https://demo.oa7.dev/carlux-motors",
    featured: true,
    popularity: 92,
    releasedAt: "2026-05-12",
    relatedSlugs: ["forge-realty", "ironclad-legal"],
  },
  {
    slug: "meridian-clinic",
    name: "Meridian Clinic",
    category: "Healthcare",
    price: 279,
    shortDescription:
      "A calm, trustworthy template for clinics and private practices, with appointment scheduling built in.",
    longDescription:
      "Meridian Clinic is designed around the two things patients care about most: finding the right provider and getting an appointment without friction. Provider profiles surface specialties and availability up front, and the booking flow is short enough to complete on a phone in under a minute.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form"],
    features: [
      "Provider directory with specialty filtering",
      "Appointment booking with calendar availability",
      "Service and insurance information pages",
      "Patient intake form templates",
      "HIPAA-conscious contact form patterns",
    ],
    whatsIncluded: [
      "Full Next.js + TypeScript source code",
      "Figma design file",
      "Booking flow integration guide",
      "30 days of email support",
    ],
    faqs: [
      {
        question: "Does this template store patient health data?",
        answer:
          "No. As delivered, it collects only appointment logistics. Any handling of health records requires a compliance-reviewed backend, which we can scope separately.",
      },
      {
        question: "Can I add more providers later?",
        answer: "Yes. Provider profiles are a repeatable content type, so adding new ones doesn't require touching the layout code.",
      },
    ],
    gallery: ["Homepage", "Provider directory", "Booking flow", "Service page"],
    demoUrl: "https://demo.oa7.dev/meridian-clinic",
    featured: true,
    popularity: 81,
    releasedAt: "2026-06-02",
    relatedSlugs: ["brightpath-academy", "havenview-hotel"],
  },
  {
    slug: "brightpath-academy",
    name: "BrightPath Academy",
    category: "Education",
    price: 299,
    shortDescription:
      "A multi-portal school website template covering admissions, staff, and parent communication.",
    longDescription:
      "BrightPath Academy is built for schools juggling three very different audiences on one site: prospective parents evaluating the school, current parents who need quick access to logistics, and staff who need an efficient internal portal. Each has its own entry point instead of being buried in one generic navigation.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Admissions funnel with inquiry form",
      "Parent portal entry point",
      "Staff directory and department pages",
      "News and events calendar",
      "Multi-portal navigation architecture",
    ],
    whatsIncluded: [
      "Full Next.js + TypeScript source code",
      "Figma design file",
      "Portal architecture documentation",
      "30 days of email support",
    ],
    faqs: [
      {
        question: "Is the parent/staff portal login functional out of the box?",
        answer:
          "The template includes the portal entry points and UI; authentication and backend logic are scoped and wired in during customization based on your student information system.",
      },
      {
        question: "Can this handle multiple campuses?",
        answer: "Yes, the content structure supports multiple campus/branch pages without duplicating the whole site.",
      },
    ],
    gallery: ["Homepage", "Admissions", "Parent portal entry", "Staff directory"],
    demoUrl: "https://demo.oa7.dev/brightpath-academy",
    featured: true,
    popularity: 74,
    releasedAt: "2026-04-20",
    relatedSlugs: ["meridian-clinic", "carlux-motors"],
  },
  {
    slug: "havenview-hotel",
    name: "HavenView Hotel",
    category: "Hospitality",
    price: 259,
    shortDescription:
      "A boutique hotel template with room availability, gallery, and direct booking flow.",
    longDescription:
      "HavenView Hotel is built to sell rooms directly and reduce reliance on third-party booking platforms. Room types are presented with clear rate comparisons, and the booking flow is short enough to complete without an account.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Room availability and rate comparison",
      "Direct booking flow, no account required",
      "Photo-led room and amenity galleries",
      "Local guide / things-to-do section",
      "Group and events inquiry form",
    ],
    whatsIncluded: [
      "Full Next.js + TypeScript source code",
      "Figma design file",
      "Booking engine integration guide",
      "30 days of email support",
    ],
    faqs: [
      {
        question: "Does this include a payment gateway?",
        answer: "Not by default. The booking flow is built to hand off to a payment/booking engine of your choice during customization.",
      },
    ],
    gallery: ["Homepage", "Room gallery", "Booking flow", "Local guide"],
    demoUrl: "https://demo.oa7.dev/havenview-hotel",
    featured: false,
    popularity: 63,
    releasedAt: "2026-03-15",
    relatedSlugs: ["meridian-clinic", "forge-realty"],
  },
  {
    slug: "forge-realty",
    name: "Forge Realty",
    category: "Real Estate",
    price: 269,
    shortDescription: "A listings-first real estate template with map search and agent profiles.",
    longDescription:
      "Forge Realty puts listings front and center from the first scroll. Buyers can search by map or filters, and every listing links back to a specific agent, so leads never land in a generic inbox.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Map-based and filtered listing search",
      "Agent profiles tied to listings",
      "Mortgage estimate widget",
      "Saved search / favorites UI",
      "Neighborhood guide pages",
    ],
    whatsIncluded: [
      "Full Next.js + TypeScript source code",
      "Figma design file",
      "MLS/listings feed integration guide",
      "30 days of email support",
    ],
    faqs: [
      {
        question: "Can this connect to an MLS feed?",
        answer: "Yes. The listings data layer is designed to accept a feed import, and we scope the specific integration per MLS provider.",
      },
    ],
    gallery: ["Homepage", "Map search", "Listing detail", "Agent profile"],
    demoUrl: "https://demo.oa7.dev/forge-realty",
    featured: false,
    popularity: 68,
    releasedAt: "2026-02-28",
    relatedSlugs: ["carlux-motors", "havenview-hotel"],
  },
  {
    slug: "ironclad-legal",
    name: "Ironclad Legal",
    category: "Legal",
    price: 249,
    shortDescription:
      "A confident, no-nonsense template for law firms, with case-area pages and consultation requests.",
    longDescription:
      "Ironclad Legal is built around how people actually search for a lawyer: by practice area, urgently, and often stressed. Every practice area gets its own page with a direct path to requesting a consultation. No unnecessary steps in between.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form"],
    features: [
      "Practice area pages with dedicated CTAs",
      "Attorney profiles with case history",
      "Consultation request form with case-type routing",
      "Case results / outcomes section",
      "Client resource library",
    ],
    whatsIncluded: [
      "Full Next.js + TypeScript source code",
      "Figma design file",
      "Form routing configuration guide",
      "30 days of email support",
    ],
    faqs: [
      {
        question: "Can consultation requests route to different attorneys by case type?",
        answer: "Yes, the intake form supports case-type routing rules configured during setup.",
      },
    ],
    gallery: ["Homepage", "Practice area", "Attorney profile", "Consultation form"],
    demoUrl: "https://demo.oa7.dev/ironclad-legal",
    featured: false,
    popularity: 57,
    releasedAt: "2026-06-25",
    relatedSlugs: ["carlux-motors", "brightpath-academy"],
  },
  {
    slug: "harborline-freight",
    name: "Harborline Freight",
    category: "Corporate",
    price: null,
    shortDescription:
      "An enterprise logistics and freight template with shipment tracking and a partner portal.",
    longDescription:
      "Harborline Freight is built for logistics operators who need to present serious operational capability to enterprise clients while giving existing customers a functional shipment tracking entry point. Because every logistics operation's systems differ, this template ships as a scoped, quoted engagement rather than a fixed-price package.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Shipment tracking portal entry point",
      "Service network / coverage map",
      "Partner and enterprise client portal UI",
      "Quote request form with cargo specifications",
      "Compliance and certifications section",
    ],
    whatsIncluded: [
      "Full Next.js + TypeScript source code",
      "Figma design file",
      "Scoped integration plan for your tracking/ERP system",
      "Support window defined at quote stage",
    ],
    faqs: [
      {
        question: "Why is this template quote-only?",
        answer:
          "Freight and logistics operators each run different tracking and ERP systems, so the integration work varies enough that a fixed price wouldn't be honest. We scope it after a short discovery call.",
      },
    ],
    gallery: ["Homepage", "Tracking portal", "Coverage map", "Quote request"],
    demoUrl: "https://demo.oa7.dev/harborline-freight",
    featured: false,
    popularity: 41,
    releasedAt: "2026-01-18",
    relatedSlugs: ["forge-realty", "ironclad-legal"],
  },
  {
    slug: "summit-fitness",
    name: "Summit Fitness",
    category: "Fitness",
    price: 229,
    shortDescription: "A high-energy gym and studio template with class schedules and membership sign-up.",
    longDescription:
      "Summit Fitness is built to convert visitors into members before they leave the page. Class schedules are front and center, trainers get real profiles instead of a generic staff grid, and membership sign-up is a single short flow.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Class schedule with filtering by type and trainer",
      "Trainer profiles",
      "Membership tiers and sign-up flow",
      "Free trial / drop-in booking",
      "Transformation gallery section",
    ],
    whatsIncluded: [
      "Full Next.js + TypeScript source code",
      "Figma design file",
      "Membership platform integration guide",
      "30 days of email support",
    ],
    faqs: [
      {
        question: "Can this connect to my existing membership/billing platform?",
        answer: "Yes. The sign-up flow is built to hand off to a membership and billing platform of your choice during customization.",
      },
    ],
    gallery: ["Homepage", "Class schedule", "Trainer profile", "Membership sign-up"],
    demoUrl: "https://demo.oa7.dev/summit-fitness",
    featured: false,
    popularity: 71,
    releasedAt: "2026-06-30",
    relatedSlugs: ["meridian-clinic", "havenview-hotel"],
  },
];

export const TEMPLATE_CATEGORIES = [
  "All",
  ...Array.from(new Set(TEMPLATES.map((t) => t.category))),
] as const;

export function getTemplateBySlug(slug: string) {
  return TEMPLATES.find((t) => t.slug === slug);
}

export function getRelatedTemplates(template: Template) {
  return template.relatedSlugs
    .map((slug) => getTemplateBySlug(slug))
    .filter((t): t is Template => Boolean(t));
}
