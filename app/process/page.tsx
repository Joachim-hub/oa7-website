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
  title: "How I Work",
  description:
    "How Joachim Osafo Amoateng approaches a software project, from understanding the problem to release, and how to get in touch.",
};

export default function ProcessPage() {
  return (
    <div>
      <ProcessHero />

      {/* Methodology overview */}
      <section className="py-4 md:py-6" aria-labelledby="methodology-heading">
        <div className="container-oa7">
          <SectionHeader id="methodology-heading" eyebrow="Approach" title="A simple process, kept honest" className="max-w-3xl" />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-secondary-400">
            This is the approach I follow on my own projects, written down. I have not run it on a
            client engagement, so I have kept it short and plain. Bigger or more regulated work would
            need more structure, and I would say so.
          </p>
        </div>
      </section>

      <ProcessTimeline
        eyebrow="The steps"
        title="From idea to release"
        description="What happens at each step and what I would need from you."
        steps={PROJECT_LIFECYCLE}
        layout="vertical"
        variant="base"
      />

      <CommunicationWorkflow channels={COMMUNICATION_CHANNELS} />

      <ServiceFeatureGrid
        features={QUALITY_PRINCIPLES}
        eyebrow="What I aim for"
        title="Standards I hold my work to"
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
