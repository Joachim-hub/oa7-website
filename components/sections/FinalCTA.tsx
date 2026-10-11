"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SignalField } from "@/components/shared/SignalField";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-30" aria-labelledby="final-cta-heading">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <SignalField className="h-full w-full" />
      </div>

      <div className="container-oa7 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl rounded-2xl border border-border-subtle bg-surface-raised px-8 py-16 text-center shadow-raised md:px-16"
        >
          <h2 id="final-cta-heading" className="text-3xl font-semibold tracking-tight text-secondary-0 md:text-4xl">
            Want to talk?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-secondary-400">
            Whether you are hiring, have a small project in mind, or want to collaborate, send me a message. I reply by email.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg" iconRight={<ArrowRight className="h-4 w-4" />}>
              Get in touch
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              View projects
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
