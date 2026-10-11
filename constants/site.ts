import { SERVICES_DETAIL } from "@/data/services-detail";

export const SITE = {
  name: "OA7",
  legalName: "OA7 Software",
  tagline: "Technology, built to be trusted.",
  description:
    "OA7 Software is the independent software initiative of Joachim Osafo Amoateng, a Mathematics graduate in Ghana building websites and mobile apps.",
  // Set NEXT_PUBLIC_SITE_URL in your hosting environment to the real domain.
  // The fallback is a placeholder and should be confirmed before launch.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://oa7.dev",
  email: "osafoamoatengj@gmail.com",
  linkedin: "https://www.linkedin.com/in/joachim-osafo-0a55842b4/",
  github: "https://github.com/Joachim-hub",
  founder: "Joachim Osafo Amoateng",
};

const SERVICE_NAV_ITEMS = SERVICES_DETAIL.map((s) => ({
  label: s.name,
  href: `/services/${s.slug}`,
  description: s.cardSummary,
}));

export const MAIN_NAV = [
  {
    label: "What I Build",
    href: "/services",
    children: SERVICE_NAV_ITEMS,
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Concepts", href: "/templates" },
  { label: "Sectors", href: "/industries" },
  { label: "Work With Me", href: "/pricing" },
  { label: "About", href: "/about" },
] as const;

export const FOOTER_NAV = {
  services: SERVICE_NAV_ITEMS.map(({ label, href }) => ({ label, href })),
  resources: [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Template concepts", href: "/templates" },
    { label: "Sector ideas", href: "/industries" },
    { label: "How I work", href: "/process" },
    { label: "Work with me", href: "/pricing" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Use", href: "/legal/terms" },
    { label: "Cookie Policy", href: "/legal/cookies" },
  ],
};

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: SITE.linkedin },
  { label: "GitHub", href: SITE.github },
  { label: "Email", href: `mailto:${SITE.email}` },
];
