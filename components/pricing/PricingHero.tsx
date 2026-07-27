"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, LayoutTemplate, Wrench } from "lucide-react";
import { TEMPLATES } from "@/data/templates";
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
  const fixedPriced = TEMPLATES.filter((t) => t.price !== null).map((t) => t.price as number);
  const minPrice = Math.min(...fixedPriced);
  const maxPrice = Math.max(...fixedPriced);

  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-24 md:pt-40">
      <div className="container-oa7 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <Badge variant="accent">Pricing</Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-secondary-0 md:text-6xl"
          >
            Two ways to work with us.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-lg text-lg leading-relaxed text-secondary-400">
            Buy a template at a fixed price and launch fast, or scope a custom project and get a
            quote built around what you&rsquo;re actually asking for. No arbitrary numbers either way.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact" size="lg" iconRight={<ArrowRight className="h-4 w-4" />}>
              Get a quote
            </Button>
            <Button href="/templates" variant="outline" size="lg">
              Browse templates
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
            <h2 className="mt-4 font-semibold text-secondary-0">Templates</h2>
            <p className="mt-2 text-sm leading-relaxed text-secondary-500">
              Production-ready, fixed price. Customize it and launch.
            </p>
            <p className="mt-4 text-2xl font-semibold text-accent-ink">
              ${minPrice}&ndash;${maxPrice}
            </p>
            <Link
              href="/templates"
              className="mt-3 inline-block text-sm font-medium text-secondary-300 underline decoration-border-strong underline-offset-4 hover:text-secondary-0"
            >
              See what&rsquo;s available
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="rounded-lg border border-border-subtle bg-surface-raised p-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent-400/10 text-accent-ink">
              <Wrench className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="mt-4 font-semibold text-secondary-0">Custom projects</h2>
            <p className="mt-2 text-sm leading-relaxed text-secondary-500">
              Scoped to what you&rsquo;re building. Quoted after discovery.
            </p>
            <p className="mt-4 text-2xl font-semibold text-accent-ink">Request a quote</p>
            <Link
              href="/contact"
              className="mt-3 inline-block text-sm font-medium text-secondary-300 underline decoration-border-strong underline-offset-4 hover:text-secondary-0"
            >
              Tell us what you need
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
