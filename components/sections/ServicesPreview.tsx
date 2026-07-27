"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/data/services";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceCard } from "@/components/services/ServiceCard";

export function ServicesPreview() {
  return (
    <section className="py-24 md:py-30">
      <div className="container-oa7">
        <SectionHeader
          eyebrow="What we do"
          title="Seven disciplines, one standard."
          description="Every engagement draws on the same team. No handoffs between agencies, no gaps in ownership."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
