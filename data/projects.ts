export type ProjectStatus = "Live" | "In Development" | "Delivered";

export interface Project {
  slug: string;
  name: string;
  client: string;
  category: string;
  industry: string;
  status: ProjectStatus;
  summary: string;
  overview: string;
  challenge: string;
  solution: string;
  outcomes: string[]; // qualitative delivery outcomes, not fabricated metrics
  stack: string[];
  gallery: string[]; // labels for placeholder screenshots — no real assets yet
  liveUrl?: string;
  featured: boolean;
  popularity: number;
  date: string; // ISO date — most recent significant milestone
  relatedSlugs: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "farmlink-ghana",
    name: "FarmLink Ghana",
    client: "FarmLink Ghana",
    category: "Mobile App",
    industry: "Agriculture",
    status: "In Development",
    summary:
      "A full-stack marketplace connecting Ghanaian farmers directly to buyers and suppliers.",
    overview:
      "FarmLink Ghana is a mobile marketplace built to give farmers a direct line to buyers and input suppliers, instead of routing every sale and purchase through intermediaries. The app supports three distinct user roles (farmers, buyers, and suppliers), each with its own tailored experience inside a single codebase.",
    challenge:
      "Farmers, buyers, and suppliers each need very different things from the same marketplace: farmers need to list produce and reach buyers directly, buyers need to search and negotiate, and suppliers need a storefront for farm inputs. Serving all three well without the app feeling generic was the core design problem.",
    solution:
      "We built three role-based experiences on a shared Flutter codebase, with Riverpod managing state and GoRouter handling role-aware navigation. Produce listings, in-app farmer-buyer chat, an input supply shop, Paystack-powered payments, and OneSignal push notifications were all built to work together rather than as bolted-on features.",
    outcomes: [
      "Three role-based UIs (farmer, buyer, supplier) shipped from one Flutter codebase",
      "In-app chat connects farmers and buyers directly, without a middleman",
      "Integrated Paystack payments and OneSignal push notifications",
      "Supabase backend chosen after evaluating billing constraints on alternatives",
    ],
    stack: ["Flutter", "Riverpod", "GoRouter", "Supabase", "Paystack", "OneSignal"],
    gallery: ["Farmer home", "Produce listing", "In-app chat", "Input shop"],
    featured: true,
    popularity: 78,
    date: "2026-06-10",
    relatedSlugs: ["bright-future-academy"],
  },
  {
    slug: "bright-future-academy",
    name: "Bright Future Academy",
    client: "Bright Future Academy",
    category: "Enterprise Software",
    industry: "Education",
    status: "In Development",
    summary:
      "A multi-portal school management system for a Ghanaian JHS/SHS institution.",
    overview:
      "Bright Future Academy needed a public-facing site and, behind it, a full school ERP: separate portals for administrators, teachers, students, and parents, each with different data and permissions. The public site is built and live-ready; the portal builds are the current phase of work.",
    challenge:
      "A JHS/SHS institution runs on four very different workflows at once: admissions and public communication, staff administration, student records, and parent visibility into their child's progress. Building these as one monolithic system risked making all four worse.",
    solution:
      "The project is structured as a multi-portal system from the ground up: a completed public site handling admissions and general communication, with dedicated Admin, Student, Teacher, and Parent portals being built next as clearly separated modules that share a common data layer.",
    outcomes: [
      "Public-facing site (admissions, communication) built and largely complete",
      "Multi-portal architecture defined for Admin, Student, Teacher, and Parent access",
      "Built with vanilla HTML/CSS/JS for a lightweight footprint on the institution's infrastructure",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    gallery: ["Public homepage", "Admissions", "Portal architecture", "Staff directory"],
    featured: true,
    popularity: 70,
    date: "2026-05-20",
    relatedSlugs: ["farmlink-ghana"],
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getRelatedProjects(project: Project) {
  return project.relatedSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => Boolean(p));
}

export const PROJECT_CATEGORIES = [
  "All",
  ...Array.from(new Set(PROJECTS.map((p) => p.category))),
] as const;
