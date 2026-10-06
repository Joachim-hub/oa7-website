import type { Metadata } from "next";
import { INDUSTRIES } from "@/data/industries";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { IndustryGrid } from "@/components/shared/IndustryGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Websites, apps, and internal systems built around how car dealerships, hospitals, schools, hotels, and other industries actually operate.",
};

export default function IndustriesPage() {
  return (
    <div className="pb-24 pt-36 md:pb-30 md:pt-44">
      <div className="container-oa7">
        <SectionHeader
          as="h1"
          eyebrow="Industries"
          title="Built for how your industry actually works."
          description="Every industry has its own workflows and expectations. Pick yours to see what we typically build and where to start."
        />

        <div className="mt-8 md:mt-12">
          <IndustryGrid industries={INDUSTRIES} />
        </div>
      </div>

      <div className="mt-24">
        <FinalCTA />
      </div>
    </div>
  );
}
