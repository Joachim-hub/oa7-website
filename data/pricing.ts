export const PRICING_FACTORS = [
  "How many distinct user roles or portals the system needs",
  "Whether it connects to tools or data you already have",
  "How much content, and how many pages or screens, are involved",
  "Whether there's a CMS, admin dashboard, or internal tool to build",
  "How much of it is fully custom versus built on an existing template",
  "The timeline. A compressed schedule takes more concurrent effort, not just more hours",
];

export const WHATS_INCLUDED = [
  {
    title: "Source code, yours to keep",
    description: "No licensing fees, no dependency on us staying in business. The code is yours.",
  },
  {
    title: "A tested build before final payment",
    description: "You see and use the real thing before the last invoice, not a description of it.",
  },
  {
    title: "Documentation",
    description: "Written or recorded notes for anything your team needs to operate day to day.",
  },
  {
    title: "Agreed revision rounds",
    description: "Built into the process from the start, not something you have to negotiate for later.",
  },
];

export interface PolicyItem {
  title: string;
  description: string;
}

export const PRICING_POLICIES: PolicyItem[] = [
  {
    title: "Revisions",
    description:
      "Every project includes an agreed number of revision rounds during the review stage. Anything beyond that gets scoped and quoted as its own small addition, so it's never a surprise charge.",
  },
  {
    title: "Support after launch",
    description:
      "Every project includes a support window right after launch. Ongoing maintenance plans are available after that if you want us to keep improving things.",
  },
  {
    title: "Payment structure",
    description:
      "Templates are paid in full at purchase, since there's no scoping involved. Custom projects are split across milestones, typically a deposit to start and further payments tied to agreed checkpoints.",
  },
];

export const PRICING_FAQ = [
  {
    question: "Why don't custom projects have listed prices?",
    answer:
      "Because listing a number before we've scoped the work would be a guess, not a quote. Two projects that sound similar on paper can take very different amounts of work depending on integrations, content, and how many people need to use the system.",
  },
  {
    question: "How do I actually get a quote?",
    answer:
      "Reach out through Contact with what you're building. We'll ask a few scoping questions and follow up with a fixed price for the project as discussed, not a range.",
  },
  {
    question: "Can I start with a template and add custom features later?",
    answer:
      "Yes, and it's a common path. Start from a template to launch faster, then scope custom additions once you know what you actually need from real usage.",
  },
  {
    question: "Do you require full payment upfront?",
    answer:
      "No. Templates are paid in full at purchase since there's no ongoing scoping involved. Custom projects are split across milestones instead.",
  },
  {
    question: "What happens if a project runs over the agreed scope?",
    answer:
      "We'll tell you before doing the extra work, not after. Anything outside the agreed scope gets quoted separately, so there's nothing unexpected on the final invoice.",
  },
];
