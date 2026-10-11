export type ProjectStatus = "Completed" | "Closed testing" | "In development";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  category: "Mobile App" | "Website";
  /** Optional subject area, shown as a badge and used in search. */
  domain?: string;
  status: ProjectStatus;
  /** Overrides the status badge text when "Completed" needs qualifying. */
  statusLabel?: string;
  /** Plain statement of where the project is and who can use it today. */
  availability: string;
  summary: string;
  overview: string;
  /** What exists today. Keep to things that are true of the finished work. */
  built: string[];
  /** Ideas and functionality that are NOT built yet. */
  planned: string[];
  /** Only technologies that are confirmed for this project. */
  stack: string[];
  links?: ProjectLink[];
  relatedSlugs: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "farmlink-ghana",
    name: "FarmLink Ghana",
    category: "Mobile App",
    domain: "Agriculture",
    status: "Completed",
    availability:
      "Completed independent portfolio project. Not publicly published and not client work.",
    summary:
      "A mobile marketplace app connecting Ghanaian farmers with buyers and input suppliers.",
    overview:
      "FarmLink Ghana is an application I built on my own to practise delivering a complete mobile product. The idea is a marketplace for Ghanaian agriculture that brings farmers, buyers and input suppliers into one app. It was not commissioned by a client, and it has not been published to an app store or hosted publicly.",
    built: [
      "A completed mobile application, built with Flutter",
      "Designed around three kinds of user: farmers, buyers and input suppliers",
    ],
    planned: [],
    stack: ["Flutter"],
    relatedSlugs: ["bright-future-academy", "hitzplay"],
  },
  {
    slug: "bright-future-academy",
    name: "Bright Future Academy",
    category: "Website",
    domain: "Education",
    status: "Completed",
    statusLabel: "Website completed",
    availability:
      "Independent website practice project. Not commissioned by a school and not hosted publicly.",
    summary:
      "A school website concept built as a practice project, with a school portal system planned.",
    overview:
      "Bright Future Academy is a school website I built independently to practise front-end development. It is a concept: no school commissioned it, and it has not been put online. The public-facing website is finished. The portal functionality described below has not been built.",
    built: ["A completed public-facing school website, built with HTML, CSS and JavaScript"],
    planned: [
      "Separate portals for administrators, teachers, students and parents",
      "A shared data layer behind those portals",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    relatedSlugs: ["farmlink-ghana", "hitzplay"],
  },
  {
    slug: "hitzplay",
    name: "Hitzplay",
    category: "Mobile App",
    domain: "Music",
    status: "Closed testing",
    availability: "In Google Play closed testing with 12 testers. Not publicly released.",
    summary: "A music application currently in Google Play closed testing with 12 testers.",
    overview:
      "Hitzplay is a music application I am developing. It is currently in Google Play closed testing with 12 testers, so it is not yet available to the general public.",
    built: ["A working build distributed to 12 testers through Google Play closed testing"],
    planned: [],
    stack: [],
    links: [{ label: "Privacy policy", href: "/legal/privacy" }],
    relatedSlugs: ["unit-converter", "puzzleplay"],
  },
  {
    slug: "unit-converter",
    name: "Unit Converter",
    category: "Mobile App",
    domain: "Utilities",
    status: "Closed testing",
    availability: "In closed testing with 12 testers. Not publicly released.",
    summary: "A unit converter mobile application currently in closed testing with 12 testers.",
    overview:
      "Unit Converter is a mobile application I am developing. It is currently in closed testing with 12 testers and has not been publicly released.",
    built: ["A working build distributed to 12 testers through closed testing"],
    planned: [],
    stack: [],
    relatedSlugs: ["hitzplay", "puzzleplay"],
  },
  {
    slug: "puzzleplay",
    name: "Puzzleplay",
    category: "Mobile App",
    status: "In development",
    availability: "Under development. Not yet released or in testing.",
    summary: "A mobile application that is currently under development.",
    overview:
      "Puzzleplay is a mobile application I am currently developing. It is still in development and has not been released or put into testing.",
    built: [],
    planned: [],
    stack: [],
    relatedSlugs: ["health-wellness-app", "hitzplay"],
  },
  {
    slug: "health-wellness-app",
    name: "Health & Wellness App",
    category: "Mobile App",
    domain: "Health & wellness",
    status: "In development",
    availability: "Under development. Not yet released or in testing.",
    summary: "A health and wellness mobile application that is currently under development.",
    overview:
      "The Health & Wellness App is a mobile application I am currently developing. It is still in development and has not been released or put into testing.",
    built: [],
    planned: [],
    stack: [],
    relatedSlugs: ["puzzleplay", "unit-converter"],
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

export function statusBadgeVariant(status: ProjectStatus): "success" | "accent" | "warning" {
  switch (status) {
    case "Completed":
      return "success";
    case "Closed testing":
      return "accent";
    default:
      return "warning";
  }
}

export const PROJECT_CATEGORIES = [
  "All",
  ...Array.from(new Set(PROJECTS.map((p) => p.category))),
] as const;
