import type { Metadata } from "next";
import { TEMPLATES } from "@/data/templates";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TemplatesExplorer } from "@/components/templates/TemplatesExplorer";

export const metadata: Metadata = {
  title: "Template Concepts",
  description:
    "Website template concepts by OA7 Software for sectors such as automotive, healthcare, education and real estate. Concepts only: not for sale, and no live demos.",
};

export default function TemplatesPage() {
  return (
    <div className="pb-24 pt-36 md:pb-30 md:pt-44">
      <div className="container-oa7">
        <SectionHeader
          as="h1"
          eyebrow="Concepts"
          title="Website template concepts."
          description="Ideas for website designs in different sectors. They are concepts only: they are not for sale, they have no prices and there are no live demos. My real work is on the Portfolio page."
        />

        <div className="mt-8 md:mt-12">
          <TemplatesExplorer templates={TEMPLATES} />
        </div>
      </div>
    </div>
  );
}
