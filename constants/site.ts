import { SERVICES_DETAIL } from "@/data/services-detail";

export const SITE = {
  name: "OA7",
  legalName: "OA7 Technologies",
  tagline: "Technology, built to be trusted.",
  description:
    "OA7 designs and builds premium websites, mobile applications, and enterprise software for startups and established businesses.",
  url: "https://oa7.dev",
  email: "hello@oa7.dev",
  whatsapp: "+233000000000",
};

const SERVICE_NAV_ITEMS = SERVICES_DETAIL.map((s) => ({
  label: s.name,
  href: `/services/${s.slug}`,
  description: s.cardSummary,
}));

export const MAIN_NAV = [
  {
    label: "Services",
    href: "/services",
    children: SERVICE_NAV_ITEMS,
  },
  { label: "Templates", href: "/templates" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
] as const;

export const FOOTER_NAV = {
  services: SERVICE_NAV_ITEMS.map(({ label, href }) => ({ label, href })),
  resources: [
    { label: "Templates", href: "/templates" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Industries", href: "/industries" },
    { label: "Process", href: "/process" },
    { label: "Pricing", href: "/pricing" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Cookie Policy", href: "/legal/cookies" },
  ],
};

export const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://twitter.com/oa7" },
  { label: "LinkedIn", href: "https://linkedin.com/company/oa7" },
  { label: "GitHub", href: "https://github.com/oa7" },
  { label: "Instagram", href: "https://instagram.com/oa7" },
];
