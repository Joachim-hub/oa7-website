"use client";

import { motion } from "framer-motion";
import { CircleAlert } from "lucide-react";
import type { ServiceBenefit } from "@/data/services-detail";
import { SectionHeader } from "@/components/shared/SectionHeader";

interface ProblemsSolvedProps {
  problems: ServiceBenefit[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function ProblemsSolved({
  problems,
  eyebrow = "The problem",
  title = "What usually goes wrong here",
  description = "Before we talk about what we build, here's what we're building against.",
}: ProblemsSolvedProps) {
  return (
    <section className="py-16 md:py-24 lg:py-30" aria-labelledby="problems-heading">
      <div className="container-oa7">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />

        <div className="mt-8 md:mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-lg border border-border-subtle bg-surface-raised p-6"
            >
              <CircleAlert className="h-5 w-5 text-error-ink" aria-hidden="true" />
              <h3 className="mt-4 font-semibold text-secondary-0">{problem.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary-500">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
