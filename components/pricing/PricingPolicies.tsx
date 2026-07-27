"use client";

import { motion } from "framer-motion";
import type { PolicyItem } from "@/data/pricing";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function PricingPolicies({ policies }: { policies: PolicyItem[] }) {
  return (
    <section className="py-24 md:py-30" aria-labelledby="policies-heading">
      <div className="container-oa7">
        <SectionHeader
          eyebrow="The fine print, in plain language"
          title="Revisions, support, and payment"
        />

        <dl className="mt-12 divide-y divide-border-subtle border-y border-border-subtle">
          {policies.map((policy, i) => (
            <motion.div
              key={policy.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 gap-2 py-8 md:grid-cols-[220px_1fr] md:gap-8"
            >
              <dt className="font-semibold text-secondary-0">{policy.title}</dt>
              <dd className="text-sm leading-relaxed text-secondary-400">{policy.description}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
