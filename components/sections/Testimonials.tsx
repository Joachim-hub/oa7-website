"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 lg:py-30" aria-labelledby="testimonials-heading">
      <div className="container-oa7">
        <SectionHeader
          eyebrow="Client feedback"
          title="What clients say"
          align="center"
          className="mx-auto"
        />

        <div className="mt-8 md:mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start rounded-lg border border-dashed border-border-strong bg-surface-raised/40 p-6"
            >
              <Quote className="h-6 w-6 text-secondary-600" aria-hidden="true" />
              <p className="mt-4 text-sm leading-relaxed text-secondary-500">
                Client testimonials will appear here as projects wrap and reviews come in.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-secondary-200/10" aria-hidden="true" />
                <div>
                  <p className="h-3 w-24 rounded bg-secondary-200/10" aria-hidden="true" />
                  <p className="mt-2 h-2.5 w-16 rounded bg-secondary-200/8" aria-hidden="true" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
