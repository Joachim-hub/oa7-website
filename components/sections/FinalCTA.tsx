"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SignalField } from "@/components/shared/SignalField";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-30" aria-labelledby="final-cta-heading">
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
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-secondary-400">
            Tell us what you&rsquo;re building. We&rsquo;ll follow up with a clear scope and timeline. No obligation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg" iconRight={<ArrowRight className="h-4 w-4" />}>
              Start a project
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              See pricing
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
