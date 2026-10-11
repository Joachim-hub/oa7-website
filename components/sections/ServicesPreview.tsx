"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/data/services";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceCard } from "@/components/services/ServiceCard";

export function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 lg:py-30" aria-labelledby="services-heading">
      <div className="container-oa7">
        <SectionHeader
          id="services-heading"
          eyebrow="What I build"
          title="Websites and mobile apps, plus skills I'm developing."
          description="Each area shows how much real experience is behind it. Hands-on means I have independent projects to show. Developing means I am still building that skill. Not yet offered means it is not something I do yet."
        />

        <div className="mt-8 md:mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
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
