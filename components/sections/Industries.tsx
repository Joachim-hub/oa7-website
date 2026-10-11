import { INDUSTRIES } from "@/data/industries";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { IndustryGrid } from "@/components/shared/IndustryGrid";

export function Industries() {
  return (
    <section className="py-16 md:py-24 lg:py-30" aria-labelledby="industries-heading">
      <div className="container-oa7">
        <SectionHeader
          id="industries-heading"
          eyebrow="Sectors"
          title="Website ideas by sector."
          description="Concepts and sector notes, not past client work."
          align="center"
          className="mx-auto"
        />
        <div className="mt-8 md:mt-12">
          <IndustryGrid industries={INDUSTRIES} />
        </div>
      </div>
    </section>
  );
}
