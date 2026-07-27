"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { Industry } from "@/data/industries";
import { INDUSTRY_ICONS } from "@/components/shared/industryIcons";
import { Button } from "@/components/ui/Button";
import { SignalField } from "@/components/shared/SignalField";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

interface IndustryHeroProps {
  slug: string;
  name: string;
  icon: Industry["icon"];
  tagline: string;
  description: string;
}

export function IndustryHero({ slug, name, icon, tagline, description }: IndustryHeroProps) {
  const Icon = INDUSTRY_ICONS[icon];

  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-24 md:pt-40">
      <div className="signal-grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <SignalField className="pointer-events-none absolute inset-x-0 top-0 h-[560px] opacity-40" />

      <div className="container-oa7 relative">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-secondary-500">
          <Link href="/industries" className="hover:text-secondary-100">
            Industries
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-secondary-300" aria-current="page">
            {name}
          </span>
        </nav>

        <motion.div variants={container} initial="hidden" animate="show" className="mt-8 max-w-2xl">
          <motion.div
            variants={item}
            className="flex h-12 w-12 items-center justify-center rounded-md bg-accent-400/10 text-accent-ink"
          >
            <Icon className="h-6 w-6" aria-hidden="true" />
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-secondary-0 md:text-6xl"
          >
            {tagline}
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-secondary-400">
            {description}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              href={`/contact?industry=${slug}&intent=inquiry`}
              size="lg"
              iconRight={<ArrowRight className="h-4 w-4" />}
            >
              Start a project
            </Button>
            <Button href="/templates" variant="outline" size="lg">
              Browse templates
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
