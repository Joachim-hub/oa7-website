export type ServiceIcon = "globe" | "smartphone" | "building" | "sparkles" | "figma" | "wrench" | "workflow";

/**
 * How much real experience stands behind a service page.
 * - "Hands-on experience": I have built independent projects in this area.
 * - "Developing": skills I have learned and am building up, without finished projects to show yet.
 * - "Not yet offered": a direction or placeholder, not an established service.
 */
export type ServiceStatus = "Hands-on experience" | "Developing" | "Not yet offered";

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  icon: ServiceIcon;
  status: ServiceStatus;
  /** One plain sentence on what the status is based on. */
  statusNote: string;
  cardSummary: string;
  tagline: string;
  heroDescription: string;
  overview: string;
  /** Optional sections: pages only render the ones that have content. */
  problems: ServiceBenefit[];
  benefits: ServiceBenefit[];
  features: string[];
  featuresTitle: string;
  techStack: string[];
  process: ServiceProcessStep[];
  industrySlugs: string[];
  industryNote?: string;
  faqs: ServiceFAQ[];
  relatedProjectSlugs: string[];
  relatedTemplateSlugs: string[];
}

const ALL_SERVICES: ServiceDetail[] = [
  {
    slug: "websites",
    name: "Website Development",
    icon: "globe",
    status: "Hands-on experience",
    statusNote:
      "Based on independent projects, including the Bright Future Academy school website, and personal websites deployed on Vercel. Not client work.",
    cardSummary: "Responsive websites built with HTML, CSS and JavaScript.",
    tagline: "Websites built with care for how they read and work.",
    heroDescription:
      "I build websites with HTML, CSS and JavaScript. My experience so far is independent projects: a school website concept and personal sites, some of them deployed on Vercel.",
    overview:
      "A website is often the first thing someone sees of a person or an organisation. I write sites in HTML, CSS and JavaScript and pay attention to the basics: layouts that work on phones and desktops, readable text, and links and buttons that do what they say.",
    problems: [],
    benefits: [
      {
        title: "Responsive layouts",
        description: "Pages designed to work on small phone screens as well as on desktops.",
      },
      {
        title: "Clear structure",
        description: "Content organised so that a visitor can find what they came for.",
      },
      {
        title: "Direct communication",
        description: "You deal with the person who builds the site.",
      },
    ],
    features: [
      "Responsive layouts for phones and desktops",
      "Multi-page information websites, such as the Bright Future Academy concept",
      "Deployment to Vercel, which I use for my personal websites",
    ],
    featuresTitle: "What I do in this area",
    techStack: ["HTML", "CSS", "JavaScript"],
    process: [
      { number: "01", title: "Understand", description: "Work out what the site is for and who will read it." },
      { number: "02", title: "Plan the pages", description: "Decide on the pages, the navigation and the content." },
      { number: "03", title: "Build", description: "Write the HTML, CSS and JavaScript in small steps." },
      { number: "04", title: "Test", description: "Check the pages on a phone and on a desktop, and fix what breaks." },
      { number: "05", title: "Publish", description: "Put the site online and improve it from there." },
    ],
    industrySlugs: ["school"],
    industryNote: "The school sector is the one I have explored with a practice project.",
    faqs: [
      {
        question: "Have you built websites for clients?",
        answer:
          "Not in any substantial way. My websites are independent projects: the Bright Future Academy concept and personal sites, some deployed on Vercel.",
      },
      {
        question: "Do you use WordPress or a page builder?",
        answer:
          "My experience is with HTML, CSS and JavaScript. I have not listed WordPress or page builders among my skills.",
      },
    ],
    relatedProjectSlugs: ["bright-future-academy"],
    relatedTemplateSlugs: [],
  },
  {
    slug: "mobile-apps",
    name: "Mobile App Development",
    icon: "smartphone",
    status: "Hands-on experience",
    statusNote:
      "Based on independent apps: FarmLink Ghana (completed, not published), and Hitzplay and Unit Converter (closed testing). Not client work.",
    cardSummary: "Mobile apps built with Flutter, from first build to closed testing.",
    tagline: "Mobile apps, built with Flutter and tested with real people.",
    heroDescription:
      "I build mobile apps with Flutter. FarmLink Ghana is a completed independent project, and Hitzplay and Unit Converter are in closed testing with 12 testers each.",
    overview:
      "Most of my practical work is on mobile apps. I use Flutter, and I have taken apps as far as closed testing, which is where I learn the most from other people using what I build. None of my apps is publicly released yet, and none was built for a client.",
    problems: [],
    benefits: [
      {
        title: "Tested with real people",
        description: "Two of my apps are in closed testing with 12 testers each.",
      },
      {
        title: "One Flutter codebase",
        description:
          "Flutter can target Android and iOS from a single codebase. My release experience so far is on Google Play.",
      },
      {
        title: "Direct communication",
        description: "You deal with the person who builds the app.",
      },
    ],
    features: [
      "Apps built with Flutter",
      "Closed testing on Google Play (Hitzplay)",
      "Closed testing with 12 testers (Unit Converter)",
      "A completed marketplace app concept (FarmLink Ghana)",
    ],
    featuresTitle: "What I have done in this area",
    techStack: ["Flutter"],
    process: [
      { number: "01", title: "Understand", description: "Work out what the app should do and for whom." },
      { number: "02", title: "Sketch the screens", description: "Plan the main screens and how a user moves between them." },
      { number: "03", title: "Build", description: "Build the app in Flutter in small, testable steps." },
      { number: "04", title: "Test", description: "Try it on a device, then put it in front of testers." },
      { number: "05", title: "Improve", description: "Fix problems that testers find and keep improving it." },
    ],
    industrySlugs: [],
    faqs: [
      {
        question: "Are any of your apps on the app stores?",
        answer:
          "Not publicly. Hitzplay is in Google Play closed testing and Unit Converter is in closed testing, with 12 testers each. FarmLink Ghana is completed but not published.",
      },
      {
        question: "Do you build for iOS as well as Android?",
        answer:
          "Flutter supports both, but my testing and release experience so far is on Google Play.",
      },
    ],
    relatedProjectSlugs: ["farmlink-ghana", "hitzplay", "unit-converter"],
    relatedTemplateSlugs: [],
  },
  {
    slug: "enterprise-software",
    name: "Enterprise Software",
    icon: "building",
    status: "Not yet offered",
    statusNote:
      "I have not built enterprise software for any organisation. This page describes a direction, not a track record.",
    cardSummary: "Not yet offered. School-style portal systems are a direction I'm working toward.",
    tagline: "Larger systems are a direction, not a track record.",
    heroDescription:
      "I have not built enterprise software for any organisation. The nearest thing in my portfolio is the portal system planned for the Bright Future Academy concept, which has not been built.",
    overview:
      "This page exists so that the direction is visible and honest. The Bright Future Academy website is finished, but the separate portals for administrators, teachers, students and parents are only planned. Until I have built real systems like that, I do not present enterprise software as something I offer.",
    problems: [],
    benefits: [],
    features: [
      "Planned, not built: separate portals for administrators, teachers, students and parents (Bright Future Academy concept)",
    ],
    featuresTitle: "Where this stands",
    techStack: [],
    process: [],
    industrySlugs: ["school"],
    industryNote: "The only sector I have explored in this area is education.",
    faqs: [
      {
        question: "Have you built enterprise software?",
        answer: "No. The portal system for the Bright Future Academy concept is planned and has not been built.",
      },
    ],
    relatedProjectSlugs: ["bright-future-academy"],
    relatedTemplateSlugs: [],
  },
  {
    slug: "automation",
    name: "Data Analysis & Automation",
    icon: "workflow",
    status: "Developing",
    statusNote:
      "Tools I have learned and used, backed by a Mathematics degree. I have no finished data projects in my portfolio yet.",
    cardSummary: "Working with data and repetitive tasks using Excel, Power BI, SQL and Python.",
    tagline: "Making sense of data, and saving time on repetitive work.",
    heroDescription:
      "I have learned Microsoft Excel, Power BI, SQL and Python, and my Mathematics degree gives me a base for working with numbers. I have no finished data projects in my portfolio yet.",
    overview:
      "This is a skill area I am building, not a track record. The tools below are ones I have learned and used. If you have a small problem that involves organising, analysing or reporting on data, or automating a repetitive task, I am happy to talk about whether I can help.",
    problems: [],
    benefits: [],
    features: [
      "Organising and analysing data in Microsoft Excel",
      "Querying data with SQL",
      "Building reports and dashboards in Power BI",
      "Writing Python scripts for repetitive tasks",
    ],
    featuresTitle: "Tools I use for this",
    techStack: ["Microsoft Excel", "Power BI", "SQL", "Python"],
    process: [],
    industrySlugs: [],
    faqs: [
      {
        question: "Can you show me data projects you have done?",
        answer:
          "Not yet. There are none in my portfolio. I would say so honestly if a problem looked beyond what I have done before.",
      },
    ],
    relatedProjectSlugs: [],
    relatedTemplateSlugs: [],
  },
  {
    slug: "ai-solutions",
    name: "AI Solutions",
    icon: "sparkles",
    status: "Not yet offered",
    statusNote: "OA7 does not offer AI services, and none of my portfolio projects use AI.",
    cardSummary: "Not yet offered. This service is still under development.",
    tagline: "AI is not an offering yet.",
    heroDescription:
      "OA7 does not currently offer AI services, and none of my portfolio projects use AI. This page is a placeholder for a service that is still under development.",
    overview:
      "I would rather say this plainly than imply experience I do not have. If AI work becomes part of what I build, it will appear in the portfolio first, with its real status.",
    problems: [],
    benefits: [],
    features: [],
    featuresTitle: "Where this stands",
    techStack: [],
    process: [],
    industrySlugs: [],
    faqs: [
      {
        question: "Can you build an AI feature for me?",
        answer:
          "Not as an established service. If you would like to talk about what is realistic, get in touch.",
      },
    ],
    relatedProjectSlugs: [],
    relatedTemplateSlugs: [],
  },
  {
    slug: "design",
    name: "UI/UX Design",
    icon: "figma",
    status: "Developing",
    statusNote: "Part of building my own websites and apps, not a separate service.",
    cardSummary: "Interface design as part of building websites and apps.",
    tagline: "Design as part of building.",
    heroDescription:
      "I design the layouts and screens of the websites and apps I build. I do not offer design as a separate service.",
    overview:
      "When I build something, I decide how it looks and how a person moves through it. That work happens inside my web and mobile projects. I have not done standalone design engagements.",
    problems: [],
    benefits: [],
    features: [
      "Layouts and screens for my own websites and apps",
      "Responsive layouts that work on phones and desktops",
    ],
    featuresTitle: "What I do in this area",
    techStack: ["HTML", "CSS"],
    process: [],
    industrySlugs: [],
    faqs: [
      {
        question: "Do you do design-only projects?",
        answer: "I have not done any. My design work is part of building websites and apps.",
      },
    ],
    relatedProjectSlugs: ["bright-future-academy", "farmlink-ghana"],
    relatedTemplateSlugs: [],
  },
  {
    slug: "maintenance",
    name: "Maintenance & Support",
    icon: "wrench",
    status: "Not yet offered",
    statusNote: "I do not offer maintenance plans, support agreements or monitoring services.",
    cardSummary: "No formal plans. Follow-up work is agreed project by project.",
    tagline: "Follow-up, agreed case by case.",
    heroDescription:
      "I do not offer maintenance plans, support agreements or monitoring services. If we work on something together, any follow-up would be agreed as part of that project.",
    overview:
      "Software needs looking after once it is released, and I take that seriously. But I have not run a support service, so I do not advertise one.",
    problems: [],
    benefits: [],
    features: [],
    featuresTitle: "Where this stands",
    techStack: [],
    process: [],
    industrySlugs: [],
    faqs: [
      {
        question: "Do you offer maintenance plans?",
        answer: "No. Any follow-up work would be agreed with you as part of a project.",
      },
    ],
    relatedProjectSlugs: [],
    relatedTemplateSlugs: [],
  },
];

const STATUS_RANK: Record<ServiceStatus, number> = {
  "Hands-on experience": 0,
  Developing: 1,
  "Not yet offered": 2,
};

// Areas with real experience come first. Array.prototype.sort is stable, so the
// order within each status group is the order written above.
export const SERVICES_DETAIL: ServiceDetail[] = [...ALL_SERVICES].sort(
  (a, b) => STATUS_RANK[a.status] - STATUS_RANK[b.status]
);

export function getServiceBySlug(slug: string) {
  return SERVICES_DETAIL.find((s) => s.slug === slug);
}
