import type { Service } from "@/data/services";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceCard } from "@/components/services/ServiceCard";

export function RelatedServices({ services, title = "Related services" }: { services: Service[]; title?: string }) {
  if (services.length === 0) return null;

  return (
    <div className="mt-24">
      <SectionHeader eyebrow="How we can help" title={title} />
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </div>
  );
}
