import type { Metadata } from "next";
import { INDUSTRIES } from "@/data/industries";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { IndustryGrid } from "@/components/shared/IndustryGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "Sector notes and website ideas for car dealerships, hospitals, schools, hotels and other sectors. These are concepts, not past client work.",
};

export default function IndustriesPage() {
  return (
    <div className="pb-24 pt-36 md:pb-30 md:pt-44">
      <div className="container-oa7">
        <SectionHeader
          as="h1"
          eyebrow="Sectors"
          title="Website ideas by sector."
          description="Notes on what a website in each sector could include. These are concepts and general observations. I have not done client work in these sectors."
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
