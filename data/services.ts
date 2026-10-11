import { SERVICES_DETAIL } from "@/data/services-detail";
import type { ServiceIcon, ServiceStatus } from "@/data/services-detail";

export type { ServiceIcon, ServiceStatus };

export interface Service {
  icon: ServiceIcon;
  title: string;
  slug: string;
  summary: string;
  status: ServiceStatus;
}

// Derived from the single source of truth in services-detail.ts, so the
// Home page preview cards and the full /services pages never drift apart.
export const SERVICES: Service[] = SERVICES_DETAIL.map((s) => ({
  icon: s.icon,
  title: s.name,
  slug: s.slug,
  summary: s.cardSummary,
  status: s.status,
}));

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function serviceStatusVariant(status: ServiceStatus): "success" | "accent" | "warning" {
  switch (status) {
    case "Hands-on experience":
      return "success";
    case "Developing":
      return "accent";
    default:
      return "warning";
  }
}
