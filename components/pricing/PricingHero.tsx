"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, LayoutTemplate, Wrench } from "lucide-react";
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

export function PricingHero() {
  return (
    <section className="relative overflow-hidden pb-14 pt-24 md:pb-16 md:pt-28 lg:pb-24 lg:pt-40">
      <div className="container-oa7 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <Badge variant="accent">Work with me</Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-secondary-0 md:text-6xl"
          >
            Working together.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-lg text-lg leading-relaxed text-secondary-400">
            OA7 is early-stage, so there is no price list and nothing to buy off the shelf.
            If you have something in mind, tell me about it and we can see whether I am the right fit.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact" size="lg" iconRight={<ArrowRight className="h-4 w-4" />}>
              Get in touch
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              View projects
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1"
        >
          <motion.div
            variants={item}
            className="rounded-lg border border-border-subtle bg-surface-raised p-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent-400/10 text-accent-ink">
              <LayoutTemplate className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="mt-4 font-semibold text-secondary-0">Template concepts</h2>
            <p className="mt-2 text-sm leading-relaxed text-secondary-500">
              Design ideas only. Not for sale and no live demos.
            </p>
            <p className="mt-4 text-2xl font-semibold text-accent-ink">Not for sale</p>
            <Link
              href="/templates"
              className="mt-3 inline-block text-sm font-medium text-secondary-300 underline decoration-border-strong underline-offset-4 hover:text-secondary-0"
            >
              See the concepts
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="rounded-lg border border-border-subtle bg-surface-raised p-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent-400/10 text-accent-ink">
              <Wrench className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="mt-4 font-semibold text-secondary-0">Projects and roles</h2>
            <p className="mt-2 text-sm leading-relaxed text-secondary-500">
              Discussed individually, by email, before anything is agreed.
            </p>
            <p className="mt-4 text-2xl font-semibold text-accent-ink">Let&rsquo;s talk</p>
            <Link
              href="/contact"
              className="mt-3 inline-block text-sm font-medium text-secondary-300 underline decoration-border-strong underline-offset-4 hover:text-secondary-0"
            >
              Tell me what you need
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
