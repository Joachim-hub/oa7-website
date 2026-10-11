export interface Industry {
  slug: string;
  name: string;
  icon:
    | "car" | "hospital" | "school" | "hotel" | "utensils" | "home"
    | "dumbbell" | "scale" | "plane" | "hammer" | "landmark" | "briefcase";
}

export interface IndustryChallenge {
  title: string;
  description: string;
}

export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface IndustryDetail extends Industry {
  tagline: string;
  heroDescription: string;
  overview: string;
  challenges: IndustryChallenge[];
  ideas: string[];
  relatedServiceSlugs: string[];
  relatedTemplateSlugs: string[];
  relatedProjectSlugs: string[];
  faqs: IndustryFAQ[];
}

export const INDUSTRIES: IndustryDetail[] = [
  {
    slug: "car-dealership",
    name: "Car Dealership",
    icon: "car",
    tagline: "Turn inventory browsing into booked test drives.",
    heroDescription:
      "Ideas for what a website in this sector could include. These are concepts and sector notes, not past client work.",
    overview:
      "Car buyers do most of their research before they ever visit a lot. A dealership's website needs to support that with searchable inventory, real financing estimates, and a fast path to booking a test drive. Otherwise that research just ends on someone else's site. This is a sector I have thought about as a website idea. I have not done client work in it.",
    challenges: [
      { title: "Inventory that's hard to search", description: "Buyers give up when they can't filter by what actually matters to them: price, mileage, trim." },
      { title: "No financing clarity upfront", description: "Buyers hesitate to reach out without a rough sense of what payments would look like." },
      { title: "Booking friction", description: "A test drive request that requires a phone call loses buyers who'd rather do it online." },
    ],
    ideas: [
      "Searchable inventory with make/model/year/price filters",
      "Financing calculators and estimate tools",
      "Test drive and appointment booking",
      "Trade-in value request forms",
      "Vehicle detail pages with full spec sheets",
    ],
    relatedServiceSlugs: ["websites", "maintenance"],
    relatedTemplateSlugs: ["carlux-motors"],
    relatedProjectSlugs: [],
    faqs: [],
  },
  {
    slug: "hospital",
    name: "Hospital",
    icon: "hospital",
    tagline: "Make it easy to find the right provider and book time with them.",
    heroDescription:
      "Ideas for what a website in this sector could include. These are concepts and sector notes, not past client work.",
    overview:
      "Healthcare websites carry more weight than most. Patients are often anxious, comparing providers, or trying to solve something urgent. This is a sector I have thought about as a website idea. I have not done client work in it.",
    challenges: [
      { title: "Providers are hard to evaluate", description: "Patients can't tell who's the right fit without clear specialty and availability information." },
      { title: "Booking requires a phone call", description: "A booking process that only works during office hours loses patients who'd book at 9pm." },
      { title: "Internal systems don't scale", description: "Paper-based or spreadsheet scheduling breaks down as patient volume grows." },
    ],
    ideas: [
      "Provider directories with specialty filtering",
      "Appointment booking with real calendar availability",
      "Patient intake form templates",
      "Service and insurance information pages",
      "Internal scheduling and admin tools",
    ],
    relatedServiceSlugs: ["websites", "enterprise-software", "mobile-apps"],
    relatedTemplateSlugs: ["meridian-clinic"],
    relatedProjectSlugs: [],
    faqs: [],
  },
  {
    slug: "school",
    name: "School",
    icon: "school",
    tagline: "One site for admissions, parents, staff, and students.",
    heroDescription:
      "Ideas for what a website in this sector could include. These are concepts and sector notes, not past client work.",
    overview:
      "A school's website has to do admissions marketing and daily operational logistics at the same time, for people with very different needs. This is a sector I have thought about as a website idea. I have not done client work in it.",
    challenges: [
      { title: "One audience drowns out the others", description: "Admissions content and daily logistics compete for the same homepage space." },
      { title: "Manual admin processes", description: "Attendance, grading, and communication tracked by hand or across disconnected spreadsheets." },
      { title: "Parents can't get quick answers", description: "No single place for parents to check schedules, grades, or announcements." },
    ],
    ideas: [
      "Admissions funnels with inquiry forms",
      "Parent, student, and staff portal entry points",
      "News, events, and calendar systems",
      "Staff and department directories",
      "Multi-portal architecture with role-based access",
    ],
    relatedServiceSlugs: ["enterprise-software", "websites"],
    relatedTemplateSlugs: ["brightpath-academy"],
    relatedProjectSlugs: ["bright-future-academy"],
    faqs: [],
  },
  {
    slug: "hotel",
    name: "Hotel",
    icon: "hotel",
    tagline: "Sell rooms directly, without losing bookings to a third-party platform.",
    heroDescription:
      "Ideas for what a website in this sector could include. These are concepts and sector notes, not past client work.",
    overview:
      "Every booking that goes through a third-party platform costs a percentage. A hotel's own site should make direct booking genuinely the easiest option, with clear room comparisons and a flow that doesn't require creating an account. This is a sector I have thought about as a website idea. I have not done client work in it.",
    challenges: [
      { title: "Over-reliance on OTAs", description: "Third-party booking platforms take a cut that direct bookings wouldn't cost." },
      { title: "Room comparison is confusing", description: "Guests can't easily compare room types, rates, and what's included." },
      { title: "Booking flow is too long", description: "Multi-step booking processes that require an account lose guests who'd rather book fast." },
    ],
    ideas: [
      "Room availability and rate comparison",
      "Direct booking flow, no account required",
      "Photo-led room and amenity galleries",
      "Local guide and things-to-do sections",
      "Group and events inquiry forms",
    ],
    relatedServiceSlugs: ["websites", "design"],
    relatedTemplateSlugs: ["havenview-hotel"],
    relatedProjectSlugs: [],
    faqs: [],
  },
  {
    slug: "restaurant",
    name: "Restaurant",
    icon: "utensils",
    tagline: "A menu, a reservation flow, and a reason to choose you over the app.",
    heroDescription:
      "Ideas for what a website in this sector could include. These are concepts and sector notes, not past client work.",
    overview:
      "Restaurants often end up dependent on third-party delivery and reservation apps because their own site doesn't do the job well enough. This is a sector I have thought about as a website idea. I have not done client work in it.",
    challenges: [
      { title: "Menus that are hard to browse", description: "PDF menus or outdated pages that don't reflect what's actually being served." },
      { title: "Reservations require a phone call", description: "No online booking option loses guests who'd rather book outside business hours." },
      { title: "Dependence on delivery apps", description: "Every order through a third-party app costs a percentage that a direct channel wouldn't." },
    ],
    ideas: [
      "Digital menus that are easy to browse and update",
      "Online reservation booking",
      "Photo-led galleries of food and space",
      "Events and private dining inquiry forms",
      "Direct ordering flow where relevant",
    ],
    relatedServiceSlugs: ["websites", "mobile-apps"],
    relatedTemplateSlugs: [],
    relatedProjectSlugs: [],
    faqs: [],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "home",
    tagline: "Listings that lead straight to the right agent, not a generic inbox.",
    heroDescription:
      "Ideas for what a website in this sector could include. These are concepts and sector notes, not past client work.",
    overview:
      "Buyers want to browse listings fast and reach a real person when they find one they like. This is a sector I have thought about as a website idea. I have not done client work in it.",
    challenges: [
      { title: "Listings buried in navigation", description: "Buyers have to dig to find current listings instead of seeing them immediately." },
      { title: "Leads go to a generic inbox", description: "Interested buyers don't get a fast, personal response because inquiries aren't routed to a specific agent." },
      { title: "No way to browse by location", description: "Buyers who search by neighborhood or map can't do that on the site." },
    ],
    ideas: [
      "Map-based and filtered listing search",
      "Agent profiles tied directly to listings",
      "Mortgage estimate tools",
      "Saved search and favorites functionality",
      "Neighborhood guide pages",
    ],
    relatedServiceSlugs: ["websites", "mobile-apps"],
    relatedTemplateSlugs: ["forge-realty"],
    relatedProjectSlugs: [],
    faqs: [],
  },
  {
    slug: "gym",
    name: "Gym",
    icon: "dumbbell",
    tagline: "Turn browsing into a booked class or a signed-up membership.",
    heroDescription:
      "Ideas for what a website in this sector could include. These are concepts and sector notes, not past client work.",
    overview:
      "Gyms lose potential members the moment the class schedule is hard to find or sign-up feels like a chore. This is a sector I have thought about as a website idea. I have not done client work in it.",
    challenges: [
      { title: "Class schedules are hard to find", description: "A schedule buried in a PDF or a separate app that visitors have to hunt for." },
      { title: "Sign-up is too many steps", description: "A membership flow that asks for too much before someone's ready to commit." },
      { title: "No easy way to try before joining", description: "No clear path to a free trial or drop-in class." },
    ],
    ideas: [
      "Class schedules with filtering by type and trainer",
      "Trainer profiles",
      "Membership tiers and sign-up flow",
      "Free trial and drop-in booking",
      "Transformation and results galleries",
    ],
    relatedServiceSlugs: ["websites", "mobile-apps"],
    relatedTemplateSlugs: ["summit-fitness"],
    relatedProjectSlugs: [],
    faqs: [],
  },
  {
    slug: "law-firm",
    name: "Law Firm",
    icon: "scale",
    tagline: "Make it easy to find the right practice area and request a consultation.",
    heroDescription:
      "Ideas for what a website in this sector could include. These are concepts and sector notes, not past client work.",
    overview:
      "People searching for a lawyer are usually under some pressure, and a confusing site makes that worse. This is a sector I have thought about as a website idea. I have not done client work in it.",
    challenges: [
      { title: "Practice areas aren't clear", description: "Visitors can't quickly tell if the firm handles their specific situation." },
      { title: "No direct path to a consultation", description: "A generic contact form instead of a clear, case-specific next step." },
      { title: "Attorney credibility isn't obvious", description: "Thin attorney bios that don't build the trust needed to reach out." },
    ],
    ideas: [
      "Practice area pages with dedicated CTAs",
      "Attorney profiles with case history",
      "Consultation request forms with case-type routing",
      "Case results and outcomes sections",
      "Client resource libraries",
    ],
    relatedServiceSlugs: ["websites", "ai-solutions"],
    relatedTemplateSlugs: ["ironclad-legal"],
    relatedProjectSlugs: [],
    faqs: [],
  },
  {
    slug: "travel-agency",
    name: "Travel Agency",
    icon: "plane",
    tagline: "Make it easy to browse packages and start planning a trip.",
    heroDescription:
      "Ideas for what a website in this sector could include. These are concepts and sector notes, not past client work.",
    overview:
      "Travel sites often bury what actually matters (the destinations, the packages, the price range) under generic stock photography. This is a sector I have thought about as a website idea. I have not done client work in it.",
    challenges: [
      { title: "Packages are hard to compare", description: "Visitors can't easily see what's included or how packages differ." },
      { title: "Generic content that doesn't build trust", description: "Stock imagery and vague copy that doesn't reflect actual trips or expertise." },
      { title: "No clear path to inquire", description: "A contact form disconnected from the specific package someone was looking at." },
    ],
    ideas: [
      "Destination and package browsing pages",
      "Itinerary and pricing breakdowns",
      "Booking inquiry forms tied to specific packages",
      "Customer testimonial and trip gallery sections",
      "Seasonal and promotional page templates",
    ],
    relatedServiceSlugs: ["websites", "design"],
    relatedTemplateSlugs: [],
    relatedProjectSlugs: [],
    faqs: [],
  },
  {
    slug: "construction",
    name: "Construction",
    icon: "hammer",
    tagline: "Show the work, and make it easy for the right clients to reach out.",
    heroDescription:
      "Ideas for what a website in this sector could include. These are concepts and sector notes, not past client work.",
    overview:
      "Construction sites often undersell the work behind them. This is a sector I have thought about as a website idea. I have not done client work in it.",
    challenges: [
      { title: "Past work isn't showcased well", description: "Completed projects buried in a thin gallery instead of presented as real case studies." },
      { title: "Quote requests lack detail", description: "A generic contact form that doesn't capture project scope, so the first call is mostly information-gathering." },
      { title: "Certifications aren't visible", description: "Licensing and safety credentials that matter to commercial clients aren't easy to find." },
    ],
    ideas: [
      "Project galleries with scope and details",
      "Quote request forms with project specifications",
      "Service area and capability pages",
      "Certifications and compliance sections",
      "Team and equipment overview pages",
    ],
    relatedServiceSlugs: ["websites", "enterprise-software", "automation"],
    relatedTemplateSlugs: [],
    relatedProjectSlugs: [],
    faqs: [],
  },
  {
    slug: "finance",
    name: "Finance",
    icon: "landmark",
    tagline: "Build client trust before the first conversation happens.",
    heroDescription:
      "Ideas for what a website in this sector could include. These are concepts and sector notes, not past client work.",
    overview:
      "Financial services websites carry a particular kind of scrutiny. Visitors are evaluating whether to trust you with something significant. This is a sector I have thought about as a website idea. I have not done client work in it.",
    challenges: [
      { title: "Trust has to be earned fast", description: "Visitors decide quickly whether a firm feels credible, and vague design or copy undermines that." },
      { title: "Compliance-sensitive content", description: "Marketing content that has to stay accurate and defensible, not just persuasive." },
      { title: "Manual internal processes", description: "Client onboarding or reporting still handled through spreadsheets and email." },
    ],
    ideas: [
      "Service and advisory pages built around clarity, not hype",
      "Secure contact and inquiry forms",
      "Client portal entry points",
      "Internal dashboards and reporting tools",
      "Automated report generation",
    ],
    relatedServiceSlugs: ["websites", "enterprise-software", "automation", "ai-solutions"],
    relatedTemplateSlugs: [],
    relatedProjectSlugs: [],
    faqs: [],
  },
  {
    slug: "corporate",
    name: "Corporate",
    icon: "briefcase",
    tagline: "A site and internal systems that match how a serious company operates.",
    heroDescription:
      "Ideas for what a website in this sector could include. These are concepts and sector notes, not past client work.",
    overview:
      "Corporate sites and internal tools both need to do one thing well: reflect a company that's actually organized and capable. This is a sector I have thought about as a website idea. I have not done client work in it.",
    challenges: [
      { title: "Generic corporate templates", description: "A site that looks like every other corporate template, with nothing distinct about the business." },
      { title: "Internal tools that don't match operations", description: "Off-the-shelf software that forces teams to work around it instead of with it." },
      { title: "Disconnected departments", description: "Systems that don't share data, creating duplicate work across teams." },
    ],
    ideas: [
      "Corporate marketing sites with service and case study pages",
      "Partner and enterprise client portal UI",
      "Internal dashboards and admin tools",
      "Quote and RFP request flows",
      "Compliance and certifications sections",
    ],
    relatedServiceSlugs: ["websites", "enterprise-software", "design", "maintenance"],
    relatedTemplateSlugs: ["harborline-freight"],
    relatedProjectSlugs: [],
    faqs: [],
  },
];

export function getIndustryBySlug(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
