import Link from "next/link";
import { Globe, Smartphone, Building2, Sparkles, Figma, Wrench, Workflow, ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import type { ServiceIcon } from "@/data/services-detail";
import { Card } from "@/components/ui/Card";

const ICONS: Record<ServiceIcon, typeof Globe> = {
  globe: Globe,
  smartphone: Smartphone,
  building: Building2,
  sparkles: Sparkles,
  figma: Figma,
  wrench: Wrench,
  workflow: Workflow,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = ICONS[service.icon];

  return (
    <Link href={`/services/${service.slug}`} className="block h-full">
      <Card hoverable className="group flex h-full flex-col">
        <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent-400/10 text-accent-ink">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <h3 className="mt-5 flex items-center gap-1.5 text-lg font-semibold text-secondary-0">
          {service.title}
          <ArrowUpRight
            className="h-4 w-4 -translate-y-0.5 translate-x-0 opacity-0 transition-all duration-200 ease-out-expo group-hover:translate-x-0.5 group-hover:opacity-100"
            aria-hidden="true"
          />
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-secondary-500">{service.summary}</p>
      </Card>
    </Link>
  );
}
