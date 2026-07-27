import type { Metadata } from "next";
import {
  PROJECT_LIFECYCLE, COMMUNICATION_CHANNELS, QUALITY_PRINCIPLES, PROCESS_FAQ,
} from "@/data/process";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProcessTimeline } from "@/components/shared/ProcessTimeline";
import { ServiceFeatureGrid } from "@/components/services/ServiceFeatureGrid";
import { FAQSection } from "@/components/shared/FAQSection";
import { ProcessHero } from "@/components/process/ProcessHero";
import { CommunicationWorkflow } from "@/components/process/CommunicationWorkflow";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "How OA7 delivers a project from first contact to long-term support: the full ten-stage lifecycle, what you receive at each stage, and how we communicate along the way.",
};

export default function ProcessPage() {
  return (
    <div>
      <ProcessHero />

      {/* Methodology overview */}
      <section className="py-4 md:py-6" aria-labelledby="methodology-heading">
        <div className="container-oa7">
          <SectionHeader eyebrow="Methodology" title="The same process, every time" className="max-w-3xl" />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-secondary-400">
            Every project, whether it&rsquo;s a single landing page or a multi-portal system, moves through the same
            ten stages below. What changes is how much time each stage takes, not whether it happens.
            A stage only gets skipped when it genuinely doesn&rsquo;t apply, like training on a project with
            nothing for a client to operate. That consistency is what keeps scope, cost, and quality
            predictable, project to project.
          </p>
        </div>
      </section>

      <ProcessTimeline
        eyebrow="The lifecycle"
        title="Every stage, start to finish"
        description="What we deliver and what we need from you, at each point along the way."
        steps={PROJECT_LIFECYCLE}
        layout="vertical"
        variant="base"
      />

      <CommunicationWorkflow channels={COMMUNICATION_CHANNELS} />

      <ServiceFeatureGrid
        features={QUALITY_PRINCIPLES}
        eyebrow="Quality assurance"
        title="How we keep quality consistent"
      />

      <FAQSection
        items={PROCESS_FAQ.map((faq, i) => ({ id: `faq-${i}`, question: faq.question, answer: faq.answer }))}
      />

      <div className="mt-24">
        <FinalCTA />
      </div>
    </div>
  );
}
