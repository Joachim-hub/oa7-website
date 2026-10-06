import type { Industry } from "@/data/industries";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { IndustryGrid } from "@/components/shared/IndustryGrid";

interface RelevantIndustriesProps {
  industries: Industry[];
  note?: string;
}

export function RelevantIndustries({ industries, note }: RelevantIndustriesProps) {
  if (industries.length === 0) return null;

  return (
    <section className="bg-surface-raised py-16 md:py-24 lg:py-30" aria-labelledby="industries-heading">
      <div className="container-oa7">
        <SectionHeader
          eyebrow="Where this fits"
          title="Industries that use this"
          description={note}
        />
        <div className="mt-8 md:mt-12">
          <IndustryGrid industries={industries} />
        </div>
      </div>
    </section>
  );
}
