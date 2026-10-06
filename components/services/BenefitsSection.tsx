"use client";

import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import type { ServiceBenefit } from "@/data/services-detail";
import { SectionHeader } from "@/components/shared/SectionHeader";

interface BenefitsSectionProps {
  benefits: ServiceBenefit[];
  eyebrow?: string;
  title?: string;
  description?: string;
  columns?: 2 | 3;
}

export function BenefitsSection({
  benefits,
  eyebrow = "Why it works",
  title = "Key benefits",
  description = "What you actually get from working with us on this.",
  columns = 2,
}: BenefitsSectionProps) {
  return (
    <section className="bg-surface-raised py-16 md:py-24 lg:py-30" aria-labelledby="benefits-heading">
      <div className="container-oa7">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />

        <dl
          className={
            columns === 3
              ? "mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
              : "mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2"
          }
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <CircleCheck className="h-5 w-5 text-accent-ink" aria-hidden="true" />
              <dt className="mt-4 font-semibold text-secondary-0">{benefit.title}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-secondary-500">{benefit.description}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
