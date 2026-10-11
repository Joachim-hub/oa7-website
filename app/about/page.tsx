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
  description: `Who is behind ${SITE.name}: Joachim Osafo Amoateng, a Mathematics graduate and independent software developer in Ghana. His background, values and current projects.`,
};

export default function AboutPage() {
  return (
    <div>
      <AboutHero />

      {/* Story */}
      <section className="py-4 md:py-6" aria-labelledby="story-heading">
        <div className="container-oa7">
          <SectionHeader id="story-heading" eyebrow="My story" title="About OA7 Software" className="max-w-3xl" />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-secondary-400">{STORY}</p>
        </div>
      </section>

      <MissionVision mission={MISSION} vision={VISION} />

      <BenefitsSection
        benefits={CORE_VALUES}
        eyebrow="What I try to work by"
        title="Core values"
        description="The principles I try to follow when I build and describe my work."
        columns={3}
      />

      {/* Brand philosophy */}
      <section className="py-16 md:py-24 lg:py-30" aria-labelledby="philosophy-heading">
        <div className="container-oa7">
          <SectionHeader id="philosophy-heading" eyebrow="Philosophy" title="How I think about software" className="max-w-3xl" />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-secondary-400">{PHILOSOPHY}</p>
        </div>
      </section>

      <WhyOA7 />

      <FounderSection name={FOUNDER.name} role={FOUNDER.role} bio={FOUNDER.bio} />

      <ProcessTimeline
        eyebrow="How I work"
        title="A simple, visible process"
        description="How I approach a project, from first conversation to release."
        steps={PROCESS_STEPS}
        variant="base"
      />

      <ProcessTimeline
        eyebrow="Where things stand"
        title="Timeline"
        description="OA7 is early-stage. This is where things stand today."
        steps={COMPANY_TIMELINE}
        variant="raised"
      />

      <TechnologyStack
        stack={ABOUT_TECH_STACK}
        eyebrow="Skills"
        title="Technologies I've learned and used"
      />

      <FAQSection
        items={ABOUT_FAQ.map((faq, i) => ({ id: `faq-${i}`, question: faq.question, answer: faq.answer }))}
      />

      <div className="mt-24">
        <FinalCTA />
      </div>
    </div>
  );
}
