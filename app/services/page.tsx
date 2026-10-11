import type { Metadata } from "next";
import { SERVICES } from "@/data/services";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceCard } from "@/components/services/ServiceCard";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "What OA7 Software builds: websites and mobile apps with hands-on project experience, data analysis and design as developing skills, and other areas not yet offered.",
};

export default function ServicesPage() {
  return (
    <div className="pb-24 pt-36 md:pb-30 md:pt-44">
      <div className="container-oa7">
        <SectionHeader
          as="h1"
          eyebrow="What I build"
          title="What I build, and how much experience is behind it."
          description="Each area shows its real status. Some are hands-on, with independent projects to show. Some are skills I am still developing. Some are not yet offered."
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
