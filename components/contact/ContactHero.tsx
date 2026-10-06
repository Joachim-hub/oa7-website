"use client";

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="pb-8 pt-24 md:pb-12 md:pt-32 lg:pb-16 lg:pt-40">
      <div className="container-oa7">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <h1 className="text-4xl font-semibold tracking-tight text-secondary-0 md:text-5xl">
            Tell us what you&rsquo;re building.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-secondary-400">
            A few lines is enough to start. We&rsquo;ll follow up with questions, not a sales pitch.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
