import type { Metadata } from "next";
import { TEMPLATES } from "@/data/templates";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TemplatesExplorer } from "@/components/templates/TemplatesExplorer";

export const metadata: Metadata = {
  title: "Templates",
  description:
    "Production-grade website templates for car dealerships, clinics, schools, hotels, real estate, law firms, and more. Customize and launch in days.",
};

export default function TemplatesPage() {
  return (
    <div className="pb-24 pt-36 md:pb-30 md:pt-44">
      <div className="container-oa7">
        <SectionHeader
          as="h1"
          eyebrow="Templates"
          title="Production-ready templates, built to customize."
          description="Every template here is real, working code, not a mockup. Preview it live, then customize it to your brand or request a quote for a fully custom build."
        />

        <div className="mt-8 md:mt-12">
          <TemplatesExplorer templates={TEMPLATES} />
        </div>
      </div>
    </div>
  );
}
