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
  whatWeBuild: string[];
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
      "We build dealership websites that make it easy to search inventory, estimate financing, and book a test drive. No phone call required to get started.",
    overview:
      "Car buyers do most of their research before they ever visit a lot. A dealership's website needs to support that with searchable inventory, real financing estimates, and a fast path to booking a test drive. Otherwise that research just ends on someone else's site.",
    challenges: [
      { title: "Inventory that's hard to search", description: "Buyers give up when they can't filter by what actually matters to them: price, mileage, trim." },
      { title: "No financing clarity upfront", description: "Buyers hesitate to reach out without a rough sense of what payments would look like." },
      { title: "Booking friction", description: "A test drive request that requires a phone call loses buyers who'd rather do it online." },
    ],
    whatWeBuild: [
      "Searchable inventory with make/model/year/price filters",
      "Financing calculators and estimate tools",
      "Test drive and appointment booking",
      "Trade-in value request forms",
      "Vehicle detail pages with full spec sheets",
    ],
    relatedServiceSlugs: ["websites", "maintenance"],
    relatedTemplateSlugs: ["carlux-motors"],
    relatedProjectSlugs: [],
    faqs: [
      { question: "Can this connect to our existing inventory feed?", answer: "Yes. We build a data layer designed to sit in front of common dealership inventory feeds." },
      { question: "Do you handle financing calculations accurately?", answer: "The calculator is an estimator, clearly labeled as such. It's meant to qualify interest, not replace a real financing conversation." },
    ],
  },
  {
    slug: "hospital",
    name: "Hospital",
    icon: "hospital",
    tagline: "Make it easy to find the right provider and book time with them.",
    heroDescription:
      "We build websites and portals for clinics and hospitals that help patients find the right provider and book an appointment without friction, and give staff tools that don't get in the way of care.",
    overview:
      "Healthcare websites carry more weight than most. Patients are often anxious, comparing providers, or trying to solve something urgent. We design around that: clear provider information, simple booking, and enough restraint to avoid overpromising anything clinical.",
    challenges: [
      { title: "Providers are hard to evaluate", description: "Patients can't tell who's the right fit without clear specialty and availability information." },
      { title: "Booking requires a phone call", description: "A booking process that only works during office hours loses patients who'd book at 9pm." },
      { title: "Internal systems don't scale", description: "Paper-based or spreadsheet scheduling breaks down as patient volume grows." },
    ],
    whatWeBuild: [
      "Provider directories with specialty filtering",
      "Appointment booking with real calendar availability",
      "Patient intake form templates",
      "Service and insurance information pages",
      "Internal scheduling and admin tools",
    ],
    relatedServiceSlugs: ["websites", "enterprise-software", "mobile-apps"],
    relatedTemplateSlugs: ["meridian-clinic"],
    relatedProjectSlugs: [],
    faqs: [
      { question: "Do you handle patient health data?", answer: "Not by default. Our templates collect appointment logistics only, and any handling of health records requires a compliance-reviewed backend we scope separately." },
      { question: "Can this support multiple providers or locations?", answer: "Yes, provider and location profiles are built as repeatable content, so adding more doesn't mean rebuilding the site." },
    ],
  },
  {
    slug: "school",
    name: "School",
    icon: "school",
    tagline: "One site for admissions, parents, staff, and students.",
    heroDescription:
      "We build school websites and management systems that serve three very different audiences: prospective parents, current families, and staff, without burying any of them in the wrong navigation.",
    overview:
      "A school's website has to do admissions marketing and daily operational logistics at the same time, for people with very different needs. We build multi-portal systems that keep those audiences separate at the entry point, backed by a shared, well-structured data layer.",
    challenges: [
      { title: "One audience drowns out the others", description: "Admissions content and daily logistics compete for the same homepage space." },
      { title: "Manual admin processes", description: "Attendance, grading, and communication tracked by hand or across disconnected spreadsheets." },
      { title: "Parents can't get quick answers", description: "No single place for parents to check schedules, grades, or announcements." },
    ],
    whatWeBuild: [
      "Admissions funnels with inquiry forms",
      "Parent, student, and staff portal entry points",
      "News, events, and calendar systems",
      "Staff and department directories",
      "Multi-portal architecture with role-based access",
    ],
    relatedServiceSlugs: ["enterprise-software", "websites"],
    relatedTemplateSlugs: ["brightpath-academy"],
    relatedProjectSlugs: ["bright-future-academy"],
    faqs: [
      { question: "Can this handle multiple campuses?", answer: "Yes. The content structure supports multiple campus or branch pages without duplicating the whole site." },
      { question: "Is portal login functional out of the box?", answer: "Portal entry points and UI are included; authentication and backend logic get wired in during customization based on your student information system." },
    ],
  },
  {
    slug: "hotel",
    name: "Hotel",
    icon: "hotel",
    tagline: "Sell rooms directly, without losing bookings to a third-party platform.",
    heroDescription:
      "We build hotel and boutique property websites that make direct booking the easy option: clear rates, real photos, and a booking flow short enough to finish on a phone.",
    overview:
      "Every booking that goes through a third-party platform costs a percentage. A hotel's own site should make direct booking genuinely the easiest option, with clear room comparisons and a flow that doesn't require creating an account.",
    challenges: [
      { title: "Over-reliance on OTAs", description: "Third-party booking platforms take a cut that direct bookings wouldn't cost." },
      { title: "Room comparison is confusing", description: "Guests can't easily compare room types, rates, and what's included." },
      { title: "Booking flow is too long", description: "Multi-step booking processes that require an account lose guests who'd rather book fast." },
    ],
    whatWeBuild: [
      "Room availability and rate comparison",
      "Direct booking flow, no account required",
      "Photo-led room and amenity galleries",
      "Local guide and things-to-do sections",
      "Group and events inquiry forms",
    ],
    relatedServiceSlugs: ["websites", "design"],
    relatedTemplateSlugs: ["havenview-hotel"],
    relatedProjectSlugs: [],
    faqs: [
      { question: "Does this include a payment gateway?", answer: "Not by default. The booking flow is built to hand off to a payment or booking engine of your choice during customization." },
      { question: "Can you integrate with our existing PMS?", answer: "We check during scoping. Most modern property management systems have an API we can connect to." },
    ],
  },
  {
    slug: "restaurant",
    name: "Restaurant",
    icon: "utensils",
    tagline: "A menu, a reservation flow, and a reason to choose you over the app.",
    heroDescription:
      "We build restaurant websites that show off the food, make reservations easy, and give you a direct channel that doesn't take a cut of every order.",
    overview:
      "Restaurants often end up dependent on third-party delivery and reservation apps because their own site doesn't do the job well enough. We build sites where the menu, the reservation flow, and the atmosphere all come through clearly, and where a direct order or booking is the easy choice.",
    challenges: [
      { title: "Menus that are hard to browse", description: "PDF menus or outdated pages that don't reflect what's actually being served." },
      { title: "Reservations require a phone call", description: "No online booking option loses guests who'd rather book outside business hours." },
      { title: "Dependence on delivery apps", description: "Every order through a third-party app costs a percentage that a direct channel wouldn't." },
    ],
    whatWeBuild: [
      "Digital menus that are easy to browse and update",
      "Online reservation booking",
      "Photo-led galleries of food and space",
      "Events and private dining inquiry forms",
      "Direct ordering flow where relevant",
    ],
    relatedServiceSlugs: ["websites", "mobile-apps"],
    relatedTemplateSlugs: [],
    relatedProjectSlugs: [],
    faqs: [
      { question: "Can guests book a table directly through the site?", answer: "Yes. Reservation booking is a standard part of a restaurant build, either as a custom flow or connected to a reservation platform you already use." },
      { question: "Do you build ordering or delivery functionality?", answer: "We can, scoped to your specific needs. It's a larger build than a standard marketing site, so we treat it as its own project phase." },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "home",
    tagline: "Listings that lead straight to the right agent, not a generic inbox.",
    heroDescription:
      "We build real estate websites that put listings front and center, with map-based search and every listing tied to the agent who can actually answer questions about it.",
    overview:
      "Buyers want to browse listings fast and reach a real person when they find one they like. We build sites where search is genuinely useful, by map or by filter, and where every lead lands with a specific agent instead of a shared inbox.",
    challenges: [
      { title: "Listings buried in navigation", description: "Buyers have to dig to find current listings instead of seeing them immediately." },
      { title: "Leads go to a generic inbox", description: "Interested buyers don't get a fast, personal response because inquiries aren't routed to a specific agent." },
      { title: "No way to browse by location", description: "Buyers who search by neighborhood or map can't do that on the site." },
    ],
    whatWeBuild: [
      "Map-based and filtered listing search",
      "Agent profiles tied directly to listings",
      "Mortgage estimate tools",
      "Saved search and favorites functionality",
      "Neighborhood guide pages",
    ],
    relatedServiceSlugs: ["websites", "mobile-apps"],
    relatedTemplateSlugs: ["forge-realty"],
    relatedProjectSlugs: [],
    faqs: [
      { question: "Can this connect to an MLS feed?", answer: "Yes. The listings data layer is designed to accept a feed import, scoped to your specific MLS provider." },
      { question: "Can each agent manage their own listings?", answer: "That can be built in as part of an agent portal, scoped based on how your brokerage is structured." },
    ],
  },
  {
    slug: "gym",
    name: "Gym",
    icon: "dumbbell",
    tagline: "Turn browsing into a booked class or a signed-up membership.",
    heroDescription:
      "We build gym and studio websites and apps that make class schedules easy to browse and membership sign-up a short, single flow.",
    overview:
      "Gyms lose potential members the moment the class schedule is hard to find or sign-up feels like a chore. We build sites and apps where the schedule is front and center, trainers get real profiles, and joining takes a minute, not a phone call.",
    challenges: [
      { title: "Class schedules are hard to find", description: "A schedule buried in a PDF or a separate app that visitors have to hunt for." },
      { title: "Sign-up is too many steps", description: "A membership flow that asks for too much before someone's ready to commit." },
      { title: "No easy way to try before joining", description: "No clear path to a free trial or drop-in class." },
    ],
    whatWeBuild: [
      "Class schedules with filtering by type and trainer",
      "Trainer profiles",
      "Membership tiers and sign-up flow",
      "Free trial and drop-in booking",
      "Transformation and results galleries",
    ],
    relatedServiceSlugs: ["websites", "mobile-apps"],
    relatedTemplateSlugs: ["summit-fitness"],
    relatedProjectSlugs: [],
    faqs: [
      { question: "Can this connect to our membership or billing platform?", answer: "Yes. The sign-up flow is built to hand off to a membership and billing platform of your choice." },
      { question: "Do you build a companion app for members?", answer: "We can, as a separate mobile app engagement. Useful for class booking and progress tracking on the go." },
    ],
  },
  {
    slug: "law-firm",
    name: "Law Firm",
    icon: "scale",
    tagline: "Make it easy to find the right practice area and request a consultation.",
    heroDescription:
      "We build law firm websites that route visitors to the right practice area fast and make requesting a consultation the obvious next step, built for people who are often stressed and searching urgently.",
    overview:
      "People searching for a lawyer are usually under some pressure, and a confusing site makes that worse. We build sites organized clearly by practice area, with attorney profiles that build confidence and a consultation request flow with no unnecessary friction.",
    challenges: [
      { title: "Practice areas aren't clear", description: "Visitors can't quickly tell if the firm handles their specific situation." },
      { title: "No direct path to a consultation", description: "A generic contact form instead of a clear, case-specific next step." },
      { title: "Attorney credibility isn't obvious", description: "Thin attorney bios that don't build the trust needed to reach out." },
    ],
    whatWeBuild: [
      "Practice area pages with dedicated CTAs",
      "Attorney profiles with case history",
      "Consultation request forms with case-type routing",
      "Case results and outcomes sections",
      "Client resource libraries",
    ],
    relatedServiceSlugs: ["websites", "ai-solutions"],
    relatedTemplateSlugs: ["ironclad-legal"],
    relatedProjectSlugs: [],
    faqs: [
      { question: "Can consultation requests route to different attorneys by case type?", answer: "Yes. The intake form supports case-type routing rules configured during setup." },
      { question: "Do you handle client confidentiality considerations in the forms?", answer: "We design forms to collect only what's needed to route the inquiry, and can scope stronger data handling if your firm requires it." },
    ],
  },
  {
    slug: "travel-agency",
    name: "Travel Agency",
    icon: "plane",
    tagline: "Make it easy to browse packages and start planning a trip.",
    heroDescription:
      "We build travel agency websites that showcase destinations and packages clearly, with a straightforward path from browsing to an actual booking inquiry.",
    overview:
      "Travel sites often bury what actually matters (the destinations, the packages, the price range) under generic stock photography. We build sites that lead with real content about what you offer and make starting a booking inquiry simple.",
    challenges: [
      { title: "Packages are hard to compare", description: "Visitors can't easily see what's included or how packages differ." },
      { title: "Generic content that doesn't build trust", description: "Stock imagery and vague copy that doesn't reflect actual trips or expertise." },
      { title: "No clear path to inquire", description: "A contact form disconnected from the specific package someone was looking at." },
    ],
    whatWeBuild: [
      "Destination and package browsing pages",
      "Itinerary and pricing breakdowns",
      "Booking inquiry forms tied to specific packages",
      "Customer testimonial and trip gallery sections",
      "Seasonal and promotional page templates",
    ],
    relatedServiceSlugs: ["websites", "design"],
    relatedTemplateSlugs: [],
    relatedProjectSlugs: [],
    faqs: [
      { question: "Can we update packages and pricing ourselves?", answer: "Yes, if that's part of the scope. We can wire the site to a CMS so your team can update packages without touching code." },
      { question: "Do you handle payment for bookings?", answer: "We can integrate a payment flow for deposits or full payment, scoped based on how your bookings currently work." },
    ],
  },
  {
    slug: "construction",
    name: "Construction",
    icon: "hammer",
    tagline: "Show the work, and make it easy for the right clients to reach out.",
    heroDescription:
      "We build construction and contracting websites that showcase completed projects clearly and make requesting a quote straightforward for the commercial or residential clients you actually want.",
    overview:
      "Construction sites often undersell the work behind them. We build sites that present completed projects the way a portfolio should: clear photos, project scope, and a quote request flow that captures what a project actually needs upfront.",
    challenges: [
      { title: "Past work isn't showcased well", description: "Completed projects buried in a thin gallery instead of presented as real case studies." },
      { title: "Quote requests lack detail", description: "A generic contact form that doesn't capture project scope, so the first call is mostly information-gathering." },
      { title: "Certifications aren't visible", description: "Licensing and safety credentials that matter to commercial clients aren't easy to find." },
    ],
    whatWeBuild: [
      "Project galleries with scope and details",
      "Quote request forms with project specifications",
      "Service area and capability pages",
      "Certifications and compliance sections",
      "Team and equipment overview pages",
    ],
    relatedServiceSlugs: ["websites", "enterprise-software", "automation"],
    relatedTemplateSlugs: [],
    relatedProjectSlugs: [],
    faqs: [
      { question: "Can this handle project-specific photo galleries?", answer: "Yes. The content structure supports adding new projects as a repeatable type, so growing the gallery doesn't mean rebuilding the site." },
      { question: "Do you build tools for project or job tracking?", answer: "That falls under Enterprise Software or Business Automation depending on scope. We can talk through what your team actually needs." },
    ],
  },
  {
    slug: "finance",
    name: "Finance",
    icon: "landmark",
    tagline: "Build client trust before the first conversation happens.",
    heroDescription:
      "We build websites and internal tools for financial services firms where clarity and trust matter more than almost anything else: clean information architecture, honest copy, and systems that hold up to scrutiny.",
    overview:
      "Financial services websites carry a particular kind of scrutiny. Visitors are evaluating whether to trust you with something significant. We build sites and internal tools that earn that trust through clarity rather than persuasion tactics, and that meet the operational rigor financial services actually require.",
    challenges: [
      { title: "Trust has to be earned fast", description: "Visitors decide quickly whether a firm feels credible, and vague design or copy undermines that." },
      { title: "Compliance-sensitive content", description: "Marketing content that has to stay accurate and defensible, not just persuasive." },
      { title: "Manual internal processes", description: "Client onboarding or reporting still handled through spreadsheets and email." },
    ],
    whatWeBuild: [
      "Service and advisory pages built around clarity, not hype",
      "Secure contact and inquiry forms",
      "Client portal entry points",
      "Internal dashboards and reporting tools",
      "Automated report generation",
    ],
    relatedServiceSlugs: ["websites", "enterprise-software", "automation", "ai-solutions"],
    relatedTemplateSlugs: [],
    relatedProjectSlugs: [],
    faqs: [
      { question: "Can you help with compliance-sensitive content?", answer: "We're not a compliance authority, but we build content and forms that your compliance team can review before anything goes live." },
      { question: "Do you build client portals?", answer: "Yes, scoped under Enterprise Software. Typically including secure login, document sharing, and reporting access." },
    ],
  },
  {
    slug: "corporate",
    name: "Corporate",
    icon: "briefcase",
    tagline: "A site and internal systems that match how a serious company operates.",
    heroDescription:
      "We build corporate websites and internal platforms for businesses that need to present real operational capability: clear service pages, a credible brand presence, and internal tools that scale with the organization.",
    overview:
      "Corporate sites and internal tools both need to do one thing well: reflect a company that's actually organized and capable. We build both the public-facing presence and the internal systems it takes to run day-to-day operations, so neither one undersells the other.",
    challenges: [
      { title: "Generic corporate templates", description: "A site that looks like every other corporate template, with nothing distinct about the business." },
      { title: "Internal tools that don't match operations", description: "Off-the-shelf software that forces teams to work around it instead of with it." },
      { title: "Disconnected departments", description: "Systems that don't share data, creating duplicate work across teams." },
    ],
    whatWeBuild: [
      "Corporate marketing sites with service and case study pages",
      "Partner and enterprise client portal UI",
      "Internal dashboards and admin tools",
      "Quote and RFP request flows",
      "Compliance and certifications sections",
    ],
    relatedServiceSlugs: ["websites", "enterprise-software", "design", "maintenance"],
    relatedTemplateSlugs: ["harborline-freight"],
    relatedProjectSlugs: [],
    faqs: [
      { question: "Do you work with larger, multi-department organizations?", answer: "Yes. Enterprise engagements typically start with a discovery phase to map how different departments need to interact with the system." },
      { question: "Can this integrate with our existing ERP?", answer: "We check during discovery. The aim is always to integrate with what you already run, not force a replacement." },
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
