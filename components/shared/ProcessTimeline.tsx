"use client";

import { motion } from "framer-motion";
import type { ServiceProcessStep } from "@/data/services-detail";
import type { ProcessStageDetail } from "@/data/process";
import { SectionHeader } from "@/components/shared/SectionHeader";

interface ProcessTimelineProps {
  eyebrow: string;
  title: string;
  description: string;
  steps: ServiceProcessStep[];
  variant?: "raised" | "base";
  layout?: "horizontal" | "vertical";
}

export function ProcessTimeline({
  eyebrow,
  title,
  description,
  steps,
  variant = "raised",
  layout = "horizontal",
}: ProcessTimelineProps) {
  return (
    <section
      className={variant === "raised" ? "bg-surface-raised py-24 md:py-30" : "py-24 md:py-30"}
      aria-labelledby="process-heading"
    >
      <div className="container-oa7">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />

        {layout === "vertical" ? (
          <VerticalTimeline steps={steps as ProcessStageDetail[]} />
        ) : (
          <HorizontalTimeline steps={steps} />
        )}
      </div>
    </section>
  );
}

function HorizontalTimeline({ steps }: { steps: ServiceProcessStep[] }) {
  return (
    <ol className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6">
      <div
        className="absolute left-0 right-0 top-6 hidden h-px bg-border-DEFAULT md:block"
        aria-hidden="true"
      />
      {steps.map((step, i) => (
        <motion.li
          key={step.number}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border-strong bg-surface-base font-semibold text-accent-ink">
            {step.number}
          </div>
          <h3 className="mt-5 font-semibold text-secondary-0">{step.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-secondary-500">
            {step.description}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}

// Used where each stage carries more than a title and a sentence — a
// left-aligned running spine with deliverables and client involvement
// called out per stage, rather than forcing rich content into the same
// five-across card grid used everywhere else.
function VerticalTimeline({ steps }: { steps: ProcessStageDetail[] }) {
  return (
    <ol className="relative mt-16 space-y-0">
      <div
        className="absolute left-6 top-2 bottom-2 hidden w-px bg-border-DEFAULT sm:block"
        aria-hidden="true"
      />
      {steps.map((step, i) => (
        <motion.li
          key={step.number}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: Math.min(i, 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="relative border-t border-border-subtle py-8 first:border-t-0 sm:pl-20"
        >
          <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-border-strong bg-surface-base font-semibold text-accent-ink sm:absolute sm:left-0 sm:top-8 sm:mb-0">
            {step.number}
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h3 className="text-lg font-semibold text-secondary-0">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary-400">{step.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <p className="text-label font-semibold uppercase text-secondary-600">Deliverables</p>
                <ul className="mt-2 space-y-1.5">
                  {step.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-secondary-300">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-label font-semibold uppercase text-secondary-600">Client involvement</p>
                <p className="mt-2 text-sm leading-relaxed text-secondary-300">{step.clientInvolvement}</p>
              </div>
            </div>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
