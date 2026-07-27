import { SERVICES_DETAIL } from "@/data/services-detail";
import type { ServiceIcon } from "@/data/services-detail";

export type { ServiceIcon };

export interface Service {
  icon: ServiceIcon;
  title: string;
  slug: string;
  summary: string;
}

// Derived from the single source of truth in services-detail.ts, so the
// Home page preview cards and the full /services pages never drift apart.
export const SERVICES: Service[] = SERVICES_DETAIL.map((s) => ({
  icon: s.icon,
  title: s.name,
  slug: s.slug,
  summary: s.cardSummary,
}));

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
