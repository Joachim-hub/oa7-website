import type { Metadata } from "next";
import { SITE } from "@/constants/site";
import {
  STORY, MISSION, VISION, PHILOSOPHY, CORE_VALUES, FOUNDER,
  COMPANY_TIMELINE, ABOUT_TECH_STACK, ABOUT_FAQ,
} from "@/data/about";
import { PROCESS_STEPS } from "@/data/process";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProcessTimeline } from "@/components/shared/ProcessTimeline";
import { FAQSection } from "@/components/shared/FAQSection";
import { TechnologyStack } from "@/components/services/TechnologyStack";
import { BenefitsSection } from "@/components/services/BenefitsSection";
import { AboutHero } from "@/components/about/AboutHero";
import { MissionVision } from "@/components/about/MissionVision";
import { FounderSection } from "@/components/about/FounderSection";
import { WhyOA7 } from "@/components/sections/WhyOA7";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About",
  description: `The story, mission, and values behind ${SITE.name}.`,
};

export default function AboutPage() {
  return (
    <div>
      <AboutHero />

      {/* Story */}
      <section className="py-4 md:py-6" aria-labelledby="story-heading">
        <div className="container-oa7">
          <SectionHeader eyebrow="Our story" title="Why OA7 exists" className="max-w-3xl" />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-secondary-400">{STORY}</p>
        </div>
      </section>

      <MissionVision mission={MISSION} vision={VISION} />

      <BenefitsSection
        benefits={CORE_VALUES}
        eyebrow="What we stand for"
        title="Core values"
        description="The principles that shape how every project gets scoped, built, and delivered."
        columns={3}
      />

      {/* Brand philosophy */}
      <section className="py-16 md:py-24 lg:py-30" aria-labelledby="philosophy-heading">
        <div className="container-oa7">
          <SectionHeader eyebrow="Brand philosophy" title="How we think about design" className="max-w-3xl" />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-secondary-400">{PHILOSOPHY}</p>
        </div>
      </section>

      <WhyOA7 />

      <FounderSection name={FOUNDER.name} role={FOUNDER.role} bio={FOUNDER.bio} />

      <ProcessTimeline
        eyebrow="How we work"
        title="A process built for visibility, not surprises."
        description="You'll always know what stage your project is in and what happens next."
        steps={PROCESS_STEPS}
        variant="base"
      />

      <ProcessTimeline
        eyebrow="Where we're headed"
        title="Company timeline"
        description="OA7 is early. Here's where things stand and what's next, without pretending otherwise."
        steps={COMPANY_TIMELINE}
        variant="raised"
      />

      <TechnologyStack stack={ABOUT_TECH_STACK} />

      <FAQSection
        items={ABOUT_FAQ.map((faq, i) => ({ id: `faq-${i}`, question: faq.question, answer: faq.answer }))}
      />

      <div className="mt-24">
        <FinalCTA />
      </div>
    </div>
  );
}
