export type ServiceIcon = "globe" | "smartphone" | "building" | "sparkles" | "figma" | "wrench" | "workflow";

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
  cardSummary: string;
  tagline: string;
  heroDescription: string;
  overview: string;
  problems: ServiceBenefit[];
  benefits: ServiceBenefit[];
  features: string[];
  techStack: string[];
  process: ServiceProcessStep[];
  industrySlugs: string[];
  industryNote?: string;
  faqs: ServiceFAQ[];
  relatedProjectSlugs: string[];
  relatedTemplateSlugs: string[];
}

export const SERVICES_DETAIL: ServiceDetail[] = [
  {
    slug: "websites",
    name: "Website Development",
    icon: "globe",
    cardSummary: "Marketing sites, storefronts, and web apps engineered for speed and conversion.",
    tagline: "Websites built to convert, not just to look good.",
    heroDescription:
      "We build marketing sites, storefronts, and web apps that load fast, rank well, and get visitors to actually do something. A homepage that just looks polished isn't worth much on its own.",
    overview:
      "A website is usually the first real interaction someone has with your business. Most of them lose that visitor before the page even finishes loading. We treat design, engineering, and content as one process instead of three separate handoffs, so the site that ships is fast, structured for search, and built around getting someone to actually contact you, book something, or buy.",
    problems: [
      {
        title: "Slow, bloated sites",
        description: "Heavy page builders and unoptimized assets that lose visitors before the page finishes loading.",
      },
      {
        title: "Generic templates",
        description: "A site that looks like every other site in your industry, with nothing that reflects the business behind it.",
      },
      {
        title: "Traffic without conversion",
        description: "Visitors show up, but there's no clear next step. No path to a call, a booking, or a sale. The site just sits there.",
      },
    ],
    benefits: [
      {
        title: "Faster by default",
        description: "Every page is built against a performance budget from day one, not optimized after the fact.",
      },
      {
        title: "Built to convert",
        description: "A deliberate path from a first visit to a lead or a sale. Not just a homepage that looks nice.",
      },
      {
        title: "You own the code",
        description: "The codebase is yours. No lock-in to a page builder or platform you're renting access to.",
      },
      {
        title: "SEO from the ground up",
        description: "Semantic markup, metadata, and structured data are part of the build, not an afterthought.",
      },
    ],
    features: [
      "Fully responsive design across every breakpoint",
      "SEO-optimized markup, metadata, and structured data",
      "Content structure ready for a CMS if you need one",
      "Performance budget enforced at build time",
      "Analytics and conversion tracking wired in from launch",
      "Accessible by default (WCAG AA), not retrofitted",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    process: [
      { number: "01", title: "Discovery & content audit", description: "We map your goals, audience, and existing content before any design starts." },
      { number: "02", title: "Information architecture", description: "Site structure and navigation designed around how people actually look for what you offer." },
      { number: "03", title: "Visual design", description: "High-fidelity design reviewed with you at each stage, not just delivered at the end." },
      { number: "04", title: "Build & integrate", description: "Production code from day one, with any third-party tools or systems wired in." },
      { number: "05", title: "QA, launch & handoff", description: "Cross-device testing, performance and accessibility checks, then a clean launch with documentation." },
    ],
    industrySlugs: ["car-dealership", "real-estate", "restaurant", "hotel", "law-firm", "corporate"],
    faqs: [
      {
        question: "Do you build on WordPress or a page builder?",
        answer: "No. We build with Next.js and React, which gets you faster load times, real ownership of the code, and no platform lock-in. If you need a CMS-driven workflow on top of that, we can wire one in.",
      },
      {
        question: "How long does a website take to build?",
        answer: "A template-based site usually ships in 1–2 weeks. A fully custom build typically takes 4–8 weeks depending on scope. We give you a firm timeline after discovery, not before it.",
      },
      {
        question: "Will I be able to update content myself afterward?",
        answer: "Yes, if that's part of the scope. We can wire the site to a headless CMS so you can update text, images, and listings yourself.",
      },
    ],
    relatedProjectSlugs: [],
    relatedTemplateSlugs: ["carlux-motors", "forge-realty", "havenview-hotel"],
  },
  {
    slug: "mobile-apps",
    name: "Mobile App Development",
    icon: "smartphone",
    cardSummary: "iOS and Android apps that feel native, from first prototype to store launch.",
    tagline: "Mobile apps that feel native, because they're built like it.",
    heroDescription:
      "We build iOS and Android apps from the first prototype through store submission, with the performance and polish people expect from an app they use every day.",
    overview:
      "Most mobile projects stall in one of two places: an unclear scope that never turns into a real build, or a first version that ships but nobody can maintain afterward. We build with Flutter so a single, well-structured codebase covers both platforms, and we architect every project so it's still maintainable a year after launch, not just on day one.",
    problems: [
      {
        title: "Apps that feel web-wrapped",
        description: "Sluggish transitions and inconsistent behavior that give away that an app wasn't built natively.",
      },
      {
        title: "Ideas stuck in prototype",
        description: "A concept that never turns into a real build because the scope was never pinned down.",
      },
      {
        title: "Unmaintainable after launch",
        description: "An app that works at launch, but a year later nobody, including the team that built it, can safely touch it.",
      },
    ],
    benefits: [
      {
        title: "One codebase, both platforms",
        description: "Flutter lets us ship iOS and Android from a single codebase, without doubling the cost or the bugs.",
      },
      {
        title: "Native performance",
        description: "Smooth animations and fast load times. Not a website wrapped in an app shell and passed off as native.",
      },
      {
        title: "Built to scale",
        description: "Clean architecture and state management from day one, so new features don't mean a rewrite.",
      },
      {
        title: "Store-ready",
        description: "We handle the App Store and Play Store submission requirements, not just the app itself.",
      },
    ],
    features: [
      "Offline-first data handling where it matters",
      "Push notifications",
      "Role-based experiences for different user types",
      "Secure in-app payments",
      "Real-time features like chat and live updates",
      "Analytics and crash reporting from launch",
    ],
    techStack: ["Flutter", "Dart", "Riverpod", "Firebase / Supabase", "REST & GraphQL APIs"],
    process: [
      { number: "01", title: "Discovery & user flows", description: "We map who's using the app, what they need to do, and in what order." },
      { number: "02", title: "UI/UX prototyping", description: "Interactive prototypes you can test on a real device before a line of production code is written." },
      { number: "03", title: "Development in increments", description: "Built in testable chunks, with working builds you can check in on along the way." },
      { number: "04", title: "Device & platform QA", description: "Tested across real devices and both platforms before anything goes near a store." },
      { number: "05", title: "Store submission & launch", description: "We handle App Store and Play Store requirements and stay on through launch." },
    ],
    industrySlugs: ["gym", "restaurant", "real-estate", "travel-agency", "hospital"],
    faqs: [
      {
        question: "iOS, Android, or both?",
        answer: "Both, usually. Flutter lets us build for both platforms from one codebase, so there's rarely a reason to pick just one.",
      },
      {
        question: "Do you handle App Store and Play Store submission?",
        answer: "Yes. Account setup guidance, store listing assets, and the submission itself are part of the engagement.",
      },
      {
        question: "What happens after the app is live?",
        answer: "We offer maintenance plans for ongoing fixes, OS updates, and new features. Check the Maintenance & Support page for what that covers.",
      },
    ],
    relatedProjectSlugs: ["farmlink-ghana"],
    relatedTemplateSlugs: [],
  },
  {
    slug: "enterprise-software",
    name: "Enterprise Software Development",
    icon: "building",
    cardSummary: "Internal platforms and tools built to hold up under real operational load.",
    tagline: "Internal software that holds up under real operational load.",
    heroDescription:
      "We build the platforms a business runs on internally: admissions systems, staff portals, operational dashboards. Designed for the people who use them every day, not just whoever approved the budget.",
    overview:
      "Enterprise software usually fails for the same reason: it's built around a generic workflow instead of the business's actual one. We start by mapping how your teams really work. Who needs to see what. Who approves what. Where the bottleneck actually is. Then we build a system around that, with permissions that match reality and a data model that holds up as the organization grows.",
    problems: [
      {
        title: "Spreadsheets that don't scale",
        description: "Manual processes and shared spreadsheets that start breaking down as the team or the data grows.",
      },
      {
        title: "Off-the-shelf software that fights your workflow",
        description: "A tool bought to solve the problem that ends up forcing your team to work around it instead.",
      },
      {
        title: "Departments that can't talk to each other",
        description: "Separate systems holding the same data in incompatible formats, with no single source of truth.",
      },
    ],
    benefits: [
      {
        title: "Built around your actual workflow",
        description: "Not a generic template. The system reflects how your teams actually get work done.",
      },
      {
        title: "Real role-based access",
        description: "Each user sees exactly what's relevant to their role, nothing more, nothing less.",
      },
      {
        title: "Built to be maintained",
        description: "Documented, structured code that your team, or ours, can safely extend later.",
      },
      {
        title: "Integrates with what you already use",
        description: "Designed to connect to existing tools and data sources rather than replace everything at once.",
      },
    ],
    features: [
      "Multi-portal, role-based architecture",
      "Admin dashboards with real, enforced permissions",
      "Audit trails and activity logs",
      "Data import/export tooling",
      "API-first design so future integrations aren't a rebuild",
      "Documentation handed over alongside the code",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Node.js", "REST APIs"],
    process: [
      { number: "01", title: "Discovery & workflow mapping", description: "We map how the organization actually operates before designing anything." },
      { number: "02", title: "Data & permissions architecture", description: "The data model and access rules are designed up front, since they're the hardest thing to change later." },
      { number: "03", title: "Iterative module delivery", description: "Built and delivered in working modules, not one large release at the end." },
      { number: "04", title: "Internal user testing", description: "Tested by the actual people who'll use it daily, not just by us." },
      { number: "05", title: "Rollout & training", description: "A staged rollout with documentation and training so the transition doesn't stall adoption." },
    ],
    industrySlugs: ["school", "hospital", "corporate", "finance", "construction"],
    faqs: [
      {
        question: "Can this replace our spreadsheets without disrupting operations?",
        answer: "Yes. We typically roll out in stages, so your team keeps operating on familiar tools until each module is proven. No single high-risk cutover.",
      },
      {
        question: "How do you handle data migration?",
        answer: "We scope migration as part of discovery: mapping your existing data structure to the new system and validating it before anything goes live.",
      },
      {
        question: "What about support after rollout?",
        answer: "Enterprise systems need ongoing attention as your organization changes. See Maintenance & Support for what an ongoing plan looks like.",
      },
    ],
    relatedProjectSlugs: ["bright-future-academy"],
    relatedTemplateSlugs: ["brightpath-academy", "harborline-freight"],
  },
  {
    slug: "automation",
    name: "Business Automation",
    icon: "workflow",
    cardSummary: "Replace manual, repetitive processes with systems that run themselves.",
    tagline: "Remove the manual work from your operations.",
    heroDescription:
      "We build automation into the tools you already use, so the repetitive, error-prone parts of your operations run themselves instead of eating your team's time.",
    overview:
      "Most operational bottlenecks aren't a people problem. They're a process problem: a manual step that happens the same way every time, done by hand because nobody's built the alternative yet. We start by looking at where your team's time actually goes, then automate that specific step using the tools you already run. Not a wholesale replacement.",
    problems: [
      {
        title: "Manual work that doesn't scale",
        description: "The same repetitive task done by hand every time, getting slower and more error-prone as volume grows.",
      },
      {
        title: "Data scattered across tools",
        description: "Information copied by hand between systems that don't talk to each other.",
      },
      {
        title: "Bottlenecks tied to one person",
        description: "A process that only works because one specific person remembers every step.",
      },
    ],
    benefits: [
      {
        title: "Time back for your team",
        description: "Hours spent on repetitive tasks go back to the work that actually needs a person.",
      },
      {
        title: "Fewer manual errors",
        description: "Automated steps do the same thing correctly every time, without fatigue.",
      },
      {
        title: "Connects what you already use",
        description: "Built to work with your existing tools, not a demand to replace everything at once.",
      },
      {
        title: "Scales with volume",
        description: "Systems designed to handle more volume without needing more manual effort to match.",
      },
    ],
    features: [
      "Workflow automation between existing tools and APIs",
      "Scheduled and triggered tasks: reports, reminders, notifications",
      "Data sync between systems (CRM, spreadsheets, inventory)",
      "Automated document generation",
      "Approval and routing workflows",
      "Custom internal dashboards for visibility into what's running",
    ],
    techStack: ["Node.js", "Custom API integrations", "REST APIs", "PostgreSQL"],
    process: [
      { number: "01", title: "Process audit", description: "We map where time actually goes, not where it's assumed to go." },
      { number: "02", title: "Automation scoping", description: "Deciding what to automate first, based on effort saved versus effort to build." },
      { number: "03", title: "Build & integrate", description: "Built directly against the tools and systems you already use." },
      { number: "04", title: "Test against real data", description: "Validated against real operational data, not a clean demo case." },
      { number: "05", title: "Monitoring & handover", description: "Set up with visibility into what's running, and documentation for your team." },
    ],
    industrySlugs: ["corporate", "finance", "construction", "car-dealership"],
    faqs: [
      {
        question: "What kinds of tasks can actually be automated?",
        answer: "Anything repetitive, rule-based, and currently done by hand. Data entry between systems, scheduled reports, approval routing, and notifications are the usual starting points.",
      },
      {
        question: "Will this replace roles on my team?",
        answer: "Usually not. Most engagements free people from repetitive manual work so they can spend time on things that actually need judgment.",
      },
      {
        question: "What if the tools I use don't have an API?",
        answer: "We check during scoping. Most modern tools do, and for the ones that don't, there's usually a workable alternative.",
      },
    ],
    relatedProjectSlugs: [],
    relatedTemplateSlugs: [],
  },
  {
    slug: "ai-solutions",
    name: "AI Solutions",
    icon: "sparkles",
    cardSummary: "Applied AI features that solve a specific problem, integrated cleanly into your product.",
    tagline: "Applied AI that solves one problem well.",
    heroDescription:
      "We build specific, practical AI features into real products. Not chatbots for their own sake. If AI is the right tool for a problem you have, we'll tell you. If it isn't, we'll tell you that too.",
    overview:
      "The most common AI project failure isn't technical. It's building a feature nobody asked for, just because AI was available. We start by scoping the actual problem, decide honestly whether AI is the right tool for it, and if it is, build it into your existing product instead of bolting on a separate chatbot with no context on anything else you've built.",
    problems: [
      {
        title: "AI bolted on, not built in",
        description: "A chatbot or AI feature that doesn't actually solve a problem your users have.",
      },
      {
        title: "Unclear what AI can realistically do",
        description: "A general sense that AI could help, without a specific, scoped problem it would solve.",
      },
      {
        title: "Cost and reliability concerns",
        description: "Uncertainty about ongoing API costs, response quality, or what happens when the model gets something wrong.",
      },
    ],
    benefits: [
      {
        title: "Scoped to a real problem",
        description: "Every AI feature starts with one specific, measurable thing it's supposed to do. Not a vague capability.",
      },
      {
        title: "Built into your product",
        description: "Integrated into your existing app or platform, not a separate tool your users have to context-switch to.",
      },
      {
        title: "Honest about limitations",
        description: "We'll tell you where the model is unreliable and design around it, rather than overselling what it can do.",
      },
      {
        title: "Cost-aware by design",
        description: "API usage is architected to stay predictable, with caching and rate-limiting where it matters.",
      },
    ],
    features: [
      "Natural language / semantic search over your content or data",
      "Document and data extraction from unstructured sources",
      "Automated drafting for reports or repetitive content",
      "Recommendation and matching systems",
      "Conversational interfaces, where they genuinely help",
      "Human-in-the-loop review for anything high-stakes",
    ],
    techStack: ["Anthropic Claude API", "OpenAI API", "Python", "Vector databases", "Next.js"],
    process: [
      { number: "01", title: "Problem scoping", description: "Including an honest answer to whether AI is actually the right tool for this problem." },
      { number: "02", title: "Data & integration assessment", description: "We check what data and systems the feature would need access to, and what that requires." },
      { number: "03", title: "Prototype & evaluate", description: "A working prototype tested against real inputs before committing to full integration." },
      { number: "04", title: "Production integration", description: "Built into your actual product, with error handling for when the model gets it wrong." },
      { number: "05", title: "Monitoring & refinement", description: "Usage and output quality monitored after launch, with room to adjust the approach." },
    ],
    industrySlugs: ["law-firm", "real-estate", "finance", "corporate"],
    faqs: [
      {
        question: "How do you decide if AI is actually the right solution?",
        answer: "We scope the problem first, independent of AI. If a simpler rule-based approach solves it more reliably and cheaply, we'll tell you that instead.",
      },
      {
        question: "What about data privacy?",
        answer: "We review what data would be sent to a third-party model provider as part of scoping, and design around any sensitive data that shouldn't leave your systems.",
      },
      {
        question: "What does this cost to run long-term?",
        answer: "API usage costs are estimated during scoping based on expected volume, and we design for caching and rate-limiting so costs stay predictable as usage grows.",
      },
    ],
    relatedProjectSlugs: [],
    relatedTemplateSlugs: [],
  },
  {
    slug: "design",
    name: "UI/UX Design",
    icon: "figma",
    cardSummary: "Interfaces designed around how people actually work, tested before they ship.",
    tagline: "Interfaces people trust on first look.",
    heroDescription:
      "We design how your product looks, feels, and works, grounded in how people actually use software. Not just what looks good in a static mockup.",
    overview:
      "Design that only exists as a static mockup tends to fall apart the moment it meets real content, real edge cases, and real development constraints. We design in systems: components, states, tokens. And we stay involved through the build, so what ships is what was actually designed, not a rough approximation of it.",
    problems: [
      {
        title: "Mockups that fall apart in real use",
        description: "Designs that look great as a static frame but break down with real content, empty states, or edge cases.",
      },
      {
        title: "Inconsistent design",
        description: "Screens that don't feel like they belong to the same product, because there's no underlying system.",
      },
      {
        title: "Design and development that don't talk",
        description: "A handoff that loses fidelity, so what ships is a rough approximation of what was designed.",
      },
    ],
    benefits: [
      {
        title: "Design systems, not one-off screens",
        description: "Reusable components and tokens so the product feels consistent as it grows.",
      },
      {
        title: "Prototypes you can test",
        description: "Interactive prototypes validated with real usage patterns before development starts.",
      },
      {
        title: "No lost-in-translation handoff",
        description: "Design and development happen on the same team, so nothing gets lost between the two.",
      },
      {
        title: "Accessible by default",
        description: "Contrast, focus states, and semantic structure are part of the design, not fixed afterward.",
      },
    ],
    features: [
      "User flow mapping",
      "Wireframing and interactive prototyping",
      "Full design systems: components, tokens, and states",
      "Usability review before development starts",
      "Motion and interaction design",
      "Developer-ready handoff, in Figma and in code",
    ],
    techStack: ["Figma", "Tailwind CSS", "Framer Motion", "Design tokens"],
    process: [
      { number: "01", title: "Research & user flows", description: "Understanding who's using the product and what they're trying to accomplish." },
      { number: "02", title: "Wireframes", description: "Low-fidelity structure reviewed before any visual design work begins." },
      { number: "03", title: "Visual design & systemization", description: "High-fidelity design built as a reusable system, not disconnected screens." },
      { number: "04", title: "Prototype & review", description: "An interactive prototype tested and refined before build." },
      { number: "05", title: "Handoff to development", description: "Specs, components, and tokens handed off in a form development can build from directly." },
    ],
    industrySlugs: ["hotel", "gym", "hospital", "corporate"],
    faqs: [
      {
        question: "Do you do design-only projects, or only as part of a full build?",
        answer: "Both. We take on design-only engagements, though most clients stay with us into development since the handoff is smoother that way.",
      },
      {
        question: "What do we actually receive at the end?",
        answer: "A full Figma file with the design system, components, and states, plus developer-ready specs. Not just a set of static screens.",
      },
      {
        question: "How do you handle feedback rounds?",
        answer: "We build in structured review points at each stage rather than one big reveal at the end, so feedback happens while it's still cheap to act on.",
      },
    ],
    relatedProjectSlugs: ["farmlink-ghana", "bright-future-academy"],
    relatedTemplateSlugs: ["carlux-motors", "meridian-clinic", "summit-fitness"],
  },
  {
    slug: "maintenance",
    name: "Maintenance & Support",
    icon: "wrench",
    cardSummary: "Ongoing fixes, updates, and improvements after your project goes live.",
    tagline: "Launch day isn't the finish line.",
    heroDescription:
      "We stay on after launch to fix issues, keep dependencies current, and extend what we've built as your needs change. Most software doesn't fail on launch day. It fails quietly, months later, once nobody's watching it anymore.",
    overview:
      "Most problems after launch aren't dramatic. A dependency goes stale. A small bug never gets fixed. A feature request has nowhere to go. A maintenance plan gives you a direct line to the people who built the product, with a defined scope so you know exactly what's covered.",
    problems: [
      {
        title: "Quiet decay after launch",
        description: "Dependencies and libraries aging past the point of safe, easy updates.",
      },
      {
        title: "No one to call",
        description: "The team that built it has moved on, and something breaks with no clear path to a fix.",
      },
      {
        title: "Small requests with nowhere to go",
        description: "Minor feature requests and tweaks that pile up because there's no ongoing engagement to route them through.",
      },
    ],
    benefits: [
      {
        title: "Direct line to the builders",
        description: "You reach the people who actually built the product, not a generic support queue.",
      },
      {
        title: "Proactive updates",
        description: "Security patches and dependency updates handled before they become a problem.",
      },
      {
        title: "Clearly scoped",
        description: "You know exactly what's covered under the plan and what counts as new work.",
      },
      {
        title: "Flexible engagement",
        description: "From occasional fixes to ongoing feature development, sized to what you actually need.",
      },
    ],
    features: [
      "Bug fixes and issue triage",
      "Security and dependency updates",
      "Performance monitoring",
      "Small feature additions",
      "Uptime and error monitoring setup",
      "Regular status reviews",
    ],
    techStack: ["Git-based version control", "CI/CD pipelines", "Uptime monitoring", "Error tracking"],
    process: [
      { number: "01", title: "Support scope agreement", description: "We define exactly what's covered, response expectations, and what falls outside the plan." },
      { number: "02", title: "Monitoring setup", description: "Uptime and error monitoring configured so issues surface before your users report them." },
      { number: "03", title: "Ongoing fixes & updates", description: "Bugs, dependency updates, and small improvements handled on an agreed cadence." },
      { number: "04", title: "Regular status review", description: "A periodic check-in on what's been done and what's coming up." },
      { number: "05", title: "Scale up when needed", description: "The plan flexes into larger feature work when you need it, without starting a new engagement from scratch." },
    ],
    industrySlugs: ["car-dealership", "school", "real-estate", "hospital", "hotel", "corporate"],
    industryNote: "Every project we build can move onto a maintenance plan. These are just where ongoing retainers are most common.",
    faqs: [
      {
        question: "Do I have to sign a long-term contract?",
        answer: "No. Plans are typically month-to-month, sized to how much ongoing work you actually expect.",
      },
      {
        question: "What's included in a maintenance plan versus a one-off fix?",
        answer: "A plan includes proactive monitoring and updates, not just reactive fixes. The difference is catching a problem before it affects users, not after.",
      },
      {
        question: "What if you didn't build the original site or app?",
        answer: "We can take on maintenance for projects we didn't originally build, after a short audit to understand the existing codebase.",
      },
    ],
    relatedProjectSlugs: [],
    relatedTemplateSlugs: [],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES_DETAIL.find((s) => s.slug === slug);
}
