import type { ServiceBenefit, ServiceProcessStep, ServiceFAQ } from "@/data/services-detail";

export const STORY =
  "OA7 started from a straightforward frustration: too much software built for small and growing businesses looks unfinished, feels unreliable, or gets abandoned soon after launch. We wanted to apply the same engineering discipline used on large enterprise projects to the kind of work that usually doesn't get it. That's shown up first in the projects on our Portfolio page. A car dealership platform. A farmer-to-buyer marketplace. A school management system. Each one built the way we'd want software built for our own business, not cut down to fit a smaller budget.";

export const MISSION =
  "To give growing businesses technology that actually works: websites, apps, and internal systems built with the same rigor as enterprise software, without the enterprise price tag or timeline.";

export const VISION =
  "To be the team a business calls first when they need software that has to work, not just look like it does. Trusted enough to stay involved well past launch.";

export const PHILOSOPHY =
  "Software earns trust in the first few seconds. A slow load, an inconsistent layout, or a broken link is often the whole impression a visitor forms. Every OA7 project, from a landing page to a multi-portal system, is held to that standard: fast, clear, and clearly built with intent.";

export const CORE_VALUES: ServiceBenefit[] = [
  {
    title: "Honesty over hype",
    description: "We tell clients what a project actually needs, not what's easiest to sell. If a simpler approach solves the problem, we'll say so.",
  },
  {
    title: "Ownership",
    description: "The team that designs a project is the same team that builds, ships, and supports it. Nothing gets lost in a handoff.",
  },
  {
    title: "Built to last",
    description: "Code and systems are designed to be maintained years later, not just delivered and forgotten.",
  },
  {
    title: "Directness",
    description: "Clear communication and realistic timelines, without jargon used to obscure what's actually happening.",
  },
  {
    title: "Craftsmanship",
    description: "Attention to the details a user notices even when they can't quite name what's different.",
  },
];

export const FOUNDER = {
  name: "Joachim Osafo Amoateng",
  role: "Founder",
  bio: "Joachim founded OA7 to bring the same engineering discipline used on large enterprise projects to businesses that don't usually get access to it. He works directly across web development, mobile apps built with Flutter, and UI/UX design, the same disciplines behind every project on this site.",
};

export const COMPANY_TIMELINE: ServiceProcessStep[] = [
  {
    number: "01",
    title: "Foundation",
    description: "Building the core template library and taking on early client projects across web and mobile.",
  },
  {
    number: "02",
    title: "Public launch",
    description: "Bringing the OA7 brand and this website online as the front door for new work.",
  },
  {
    number: "03",
    title: "Expanding the library",
    description: "Growing the template catalog to cover more industries, ready to customize from day one.",
  },
  {
    number: "04",
    title: "Remote-first partnerships",
    description: "Extending OA7's reach beyond Ghana to work directly with clients anywhere.",
  },
];

export const ABOUT_TECH_STACK = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Flutter", "Dart", "Node.js", "PostgreSQL", "Supabase", "Figma",
];

export const ABOUT_FAQ: ServiceFAQ[] = [
  {
    question: "What makes OA7 different from a typical agency?",
    answer: "The same team designs, builds, and supports every project. No handoffs, and no account manager relaying messages secondhand from the people actually doing the work.",
  },
  {
    question: "Do you only work with certain industries?",
    answer: "No. The Industries page covers what we typically build, but we scope new industries case by case rather than turning away anything outside that list.",
  },
  {
    question: "Can I customize a template instead of starting from scratch?",
    answer: "Yes. Every template in our library is meant to be a starting point, not a finished product. See the Templates page for what's available now.",
  },
  {
    question: "How do I start a project?",
    answer: "Reach out through the Contact page with a short description of what you're building, and we'll follow up to scope it properly.",
  },
];
