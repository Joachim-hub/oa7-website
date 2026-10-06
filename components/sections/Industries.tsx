import { INDUSTRIES } from "@/data/industries";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { IndustryGrid } from "@/components/shared/IndustryGrid";

export function Industries() {
  return (
    <section className="py-16 md:py-24 lg:py-30" aria-labelledby="industries-heading">
      <div className="container-oa7">
        <SectionHeader
          eyebrow="Industries"
          title="Built for how your industry actually works."
          description="Every industry has its own workflows and expectations. Our starting points already account for them."
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
