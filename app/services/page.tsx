import type { Metadata } from "next";
import { SERVICES } from "@/data/services";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceCard } from "@/components/services/ServiceCard";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, mobile apps, enterprise software, AI solutions, UI/UX design, and maintenance & support, all from one team.",
};

export default function ServicesPage() {
  return (
    <div className="pb-24 pt-36 md:pb-30 md:pt-44">
      <div className="container-oa7">
        <SectionHeader
          as="h1"
          eyebrow="Services"
          title="Seven disciplines, one accountable team."
          description="From a first prototype to the system it takes to keep a product running, every engagement draws on the same team. No handoffs between agencies, no gaps in ownership."
        />

        <div className="mt-8 md:mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>

      <div className="mt-24">
        <FinalCTA />
      </div>
    </div>
  );
}
