export interface CommunicationChannel {
  channel: string;
  purpose: string;
}

export const COMMUNICATION_CHANNELS: CommunicationChannel[] = [
  {
    channel: "Email",
    purpose: "Day-to-day updates, files, and anything that needs a written record.",
  },
  {
    channel: "WhatsApp",
    purpose: "Quick questions and fast turnarounds during active build phases.",
  },
  {
    channel: "Scheduled calls",
    purpose: "Kickoff, design review, and pre-launch. The points where a conversation beats a message thread.",
  },
];

export const QUALITY_PRINCIPLES = [
  "Nothing reaches you for review until it's been checked against real devices, not just a browser preview",
  "Accessibility is checked against WCAG AA criteria, not just eyeballed for contrast",
  "Performance is measured against a budget agreed during planning, not tuned after the fact",
  "Every revision request gets scoped and confirmed before work starts on it",
  "Deployment includes a rollback plan, not just a forward path",
  "QA happens before your review window, not during it",
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStageDetail extends ProcessStep {
  deliverables: string[];
  clientInvolvement: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "We map your goals, users, and constraints before a single screen gets designed.",
  },
  {
    number: "02",
    title: "Design",
    description: "Wireframes, then high-fidelity design, reviewed with you at each stage. Not just at the end.",
  },
  {
    number: "03",
    title: "Development",
    description: "Production code from day one, built in the open with regular working checkpoints.",
  },
  {
    number: "04",
    title: "Testing & QA",
    description: "Cross-device testing, accessibility checks, and performance audits before anything ships.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description: "We handle deployment and stay on afterward for fixes, refinements, and new features.",
  },
];

// The full ten-stage lifecycle behind the five-step summary above —
// used by the standalone Process page.
export const PROJECT_LIFECYCLE: ProcessStageDetail[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understanding your goals, your users, and what actually counts as success before any design work starts.",
    deliverables: ["Discovery brief covering goals, scope, and constraints", "Initial project scope outline"],
    clientInvolvement: "A structured discovery conversation and a short intake questionnaire.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Turning discovery into a concrete plan: scope boundaries, the page or feature list, and how the work gets sequenced.",
    deliverables: ["Project plan and scope document", "Sitemap or feature list"],
    clientInvolvement: "Reviewing and signing off on scope before design begins.",
  },
  {
    number: "03",
    title: "Research",
    description:
      "Looking at how comparable problems get solved, what your audience actually needs, and where the real technical or content constraints are.",
    deliverables: ["Research notes informing design decisions", "Technical feasibility notes, where relevant"],
    clientInvolvement: "Sharing existing brand assets, content, and any prior research you have.",
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "Wireframes progressing to high-fidelity design, built as a reusable system rather than one-off screens.",
    deliverables: ["Wireframes", "High-fidelity designs", "A reviewable, interactive prototype"],
    clientInvolvement: "Structured review at each stage. Wireframes first, then visual design. Not a single reveal at the end.",
  },
  {
    number: "05",
    title: "Development",
    description:
      "Production code built in testable increments, with working builds along the way rather than one long silent build phase.",
    deliverables: ["Working builds at agreed checkpoints", "Source code in a version-controlled repository"],
    clientInvolvement: "Optional check-ins on working builds; available to supply real content or data as needed.",
  },
  {
    number: "06",
    title: "Testing & Quality Assurance",
    description:
      "Cross-device testing, accessibility checks, and performance review, done before anything reaches you for final review. Not after.",
    deliverables: ["QA checklist results", "List of known issues and how they were resolved"],
    clientInvolvement: "None required. This stage is our responsibility before anything reaches you.",
  },
  {
    number: "07",
    title: "Client Review & Revisions",
    description:
      "A structured window where you test the real, working product, not a description of it, with a defined process for requesting changes.",
    deliverables: ["Scoped, prioritized revision list", "Updated build reflecting agreed changes"],
    clientInvolvement: "Hands-on testing and structured feedback within an agreed review window.",
  },
  {
    number: "08",
    title: "Deployment",
    description:
      "Moving the project from staging to production, covering domain, hosting, monitoring, and a rollback plan if anything needs to be reversed.",
    deliverables: ["Live, deployed project", "Deployment documentation"],
    clientInvolvement: "Providing access to domain and hosting accounts, or approving OA7-managed hosting.",
  },
  {
    number: "09",
    title: "Training",
    description:
      "For projects with a CMS, admin portal, or internal tool, walking your team through how to actually use it day to day. Skipped where there's nothing for a client to operate.",
    deliverables: ["Walkthrough session", "Written or recorded reference material"],
    clientInvolvement: "Attending the walkthrough with whoever will use the system day to day.",
  },
  {
    number: "10",
    title: "Maintenance & Continuous Improvement",
    description:
      "What happens after launch: fixes, dependency updates, and room to keep improving the product as your needs change.",
    deliverables: ["Support plan scope, if continuing under a maintenance plan", "Monitoring setup, where included"],
    clientInvolvement: "Flagging issues as they come up, plus periodic check-ins on plan scope.",
  },
];

export interface ProcessFAQ {
  question: string;
  answer: string;
}

export const PROCESS_FAQ: ProcessFAQ[] = [
  {
    question: "Do you provide a fixed price or an estimate?",
    answer: "A fixed price, agreed after discovery and planning. Once scope is defined, the price is set. It doesn't drift like an open-ended estimate can.",
  },
  {
    question: "What happens if requirements change mid-project?",
    answer: "Changes get scoped like anything else. We'll tell you honestly whether it fits inside the current plan or needs to be treated as a separate addition, before any work starts on it.",
  },
  {
    question: "What if I need more revisions than expected?",
    answer: "The review stage includes an agreed number of revision rounds. Additional rounds beyond that are scoped and quoted separately, so there's never a surprise charge.",
  },
  {
    question: "Is training included?",
    answer: "For anything with a CMS, admin portal, or internal tool for your team to operate, yes. For a simple marketing site with nothing to operate, that stage is skipped.",
  },
];
