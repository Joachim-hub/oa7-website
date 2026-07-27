"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export function ProcessHero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-24 md:pt-40">
      {/* Large outlined stage counter — a motif specific to this page's
          subject (a ten-stage process), not a reused decorative pattern. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 hidden select-none font-semibold leading-none text-transparent xl:block"
        style={{
          fontSize: "clamp(14rem, 18vw, 20rem)",
          WebkitTextStroke: "1.5px rgba(0, 240, 255, 0.14)",
        }}
      >
        10
      </span>

      <div className="container-oa7 relative">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <motion.div variants={item}>
            <Badge variant="accent">Our process</Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-secondary-0 md:text-6xl"
          >
            Ten stages. Every project, no exceptions.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-secondary-400">
            A landing page moves through this quickly. A multi-portal system moves through it more
            deliberately. Neither one skips a stage. That&rsquo;s what keeps scope, cost, and quality
            predictable no matter what you&rsquo;re building.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact" size="lg" iconRight={<ArrowRight className="h-4 w-4" />}>
              Start a project
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              See it in practice
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
