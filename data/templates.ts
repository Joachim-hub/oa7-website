/**
 * Template CONCEPTS.
 *
 * These are ideas for website designs. They are not products for sale, they have
 * no price, and none has a live demo. Do not add prices, purchase links or demo
 * URLs here until a template genuinely exists and can be shown.
 */
export interface Template {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  /** Ideas for what the concept could include. None of these is claimed as built. */
  ideas: string[];
  relatedSlugs: string[];
}

export const TEMPLATES: Template[] = [
  {
    slug: "carlux-motors",
    name: "CarLux Motors",
    category: "Automotive",
    shortDescription:
      "A concept for a car dealership website with inventory search, a financing estimator and test-drive booking.",
    ideas: [
      "Inventory search with make, model, year and price filters",
      "A financing estimate calculator",
      "A test-drive and appointment booking request",
      "Vehicle detail pages with specifications",
      "A trade-in value request form",
    ],
    relatedSlugs: ["forge-realty", "ironclad-legal"],
  },
  {
    slug: "meridian-clinic",
    name: "Meridian Clinic",
    category: "Healthcare",
    shortDescription:
      "A concept for a clinic or private practice website with a provider directory and appointment requests.",
    ideas: [
      "A provider directory with specialty filtering",
      "An appointment request flow",
      "Service and insurance information pages",
      "A contact form that collects appointment details only",
    ],
    relatedSlugs: ["brightpath-academy", "havenview-hotel"],
  },
  {
    slug: "brightpath-academy",
    name: "BrightPath Academy",
    category: "Education",
    shortDescription:
      "A concept for a school website covering admissions, staff and parent communication.",
    ideas: [
      "An admissions information page with an inquiry form",
      "A staff directory and department pages",
      "A news and events calendar",
      "Separate entry points for prospective parents, current parents and staff",
    ],
    relatedSlugs: ["meridian-clinic", "carlux-motors"],
  },
  {
    slug: "havenview-hotel",
    name: "HavenView Hotel",
    category: "Hospitality",
    shortDescription:
      "A concept for a boutique hotel website with room galleries and a booking request.",
    ideas: [
      "Room pages with photo galleries",
      "A booking or enquiry request",
      "A local guide and things-to-do section",
      "A group and events enquiry form",
    ],
    relatedSlugs: ["meridian-clinic", "forge-realty"],
  },
  {
    slug: "forge-realty",
    name: "Forge Realty",
    category: "Real Estate",
    shortDescription:
      "A concept for a real estate website built around property listings and agent profiles.",
    ideas: [
      "Filtered property listings",
      "Agent profiles linked to listings",
      "A mortgage estimate calculator",
      "Neighbourhood guide pages",
    ],
    relatedSlugs: ["carlux-motors", "havenview-hotel"],
  },
  {
    slug: "ironclad-legal",
    name: "Ironclad Legal",
    category: "Legal",
    shortDescription:
      "A concept for a law firm website with practice-area pages and consultation requests.",
    ideas: [
      "Practice-area pages, each with its own call to action",
      "Attorney profile pages",
      "A consultation request form",
      "A resource library for clients",
    ],
    relatedSlugs: ["carlux-motors", "brightpath-academy"],
  },
  {
    slug: "harborline-freight",
    name: "Harborline Freight",
    category: "Corporate",
    shortDescription:
      "A concept for a logistics company website with a service overview and quote requests.",
    ideas: [
      "A services and coverage overview",
      "A quote request form with cargo details",
      "A certifications and compliance section",
      "An entry point for a shipment-tracking page, which would need a separate system behind it",
    ],
    relatedSlugs: ["forge-realty", "ironclad-legal"],
  },
  {
    slug: "summit-fitness",
    name: "Summit Fitness",
    category: "Fitness",
    shortDescription:
      "A concept for a gym or studio website with class schedules and membership information.",
    ideas: [
      "A class schedule filterable by type and trainer",
      "Trainer profile pages",
      "Membership tiers and a sign-up enquiry",
      "A free trial booking request",
    ],
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
