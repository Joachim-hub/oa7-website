"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SignalField } from "@/components/shared/SignalField";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-24 md:pt-40">
      <div className="signal-grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <SignalField className="pointer-events-none absolute inset-x-0 top-0 h-[560px] opacity-40" />

      <div className="container-oa7 relative">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <motion.div variants={item}>
            <Badge variant="accent">About OA7</Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-secondary-0 md:text-6xl"
          >
            Software built with the same discipline as everything else on this site.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-secondary-400">
            OA7 exists to bring real engineering rigor to businesses that don&rsquo;t usually get access to it.
            not just for the products we sell, but for how we run the company behind them.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact" size="lg" iconRight={<ArrowRight className="h-4 w-4" />}>
              Start a project
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              See our work
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
