"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";

interface ServiceFeatureGridProps {
  features: string[];
  eyebrow?: string;
  title?: string;
}

export function ServiceFeatureGrid({
  features,
  eyebrow = "What's included",
  title = "Features",
}: ServiceFeatureGridProps) {
  return (
    <section className="py-16 md:py-24 lg:py-30" aria-labelledby="features-heading">
      <div className="container-oa7">
        <SectionHeader eyebrow={eyebrow} title={title} />

        <ul className="mt-8 md:mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((feature, i) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-3 rounded-lg border border-border-subtle bg-surface-raised p-4"
            >
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-400/10 text-accent-ink">
                <Check className="h-3 w-3" aria-hidden="true" />
              </span>
              <span className="text-sm leading-relaxed text-secondary-200">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
