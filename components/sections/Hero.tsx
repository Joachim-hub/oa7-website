"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SignalField } from "@/components/shared/SignalField";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 md:pb-20 md:pt-32 lg:pb-32 lg:pt-48">
      <div className="signal-grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <SignalField className="pointer-events-none absolute inset-x-0 top-0 h-[720px] opacity-70" />

      <div className="container-oa7 relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={item} className="flex justify-center">
            <Badge variant="accent">Now onboarding new clients</Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-secondary-0 md:text-7xl"
          >
            Technology,
            <br />
            built to be trusted.
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-secondary-400"
          >
            OA7 designs and builds premium websites, mobile applications, and
            enterprise software for businesses that expect their technology
            to simply work.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg" iconRight={<ArrowRight className="h-4 w-4" />}>
              Start a project
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              View our work
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
