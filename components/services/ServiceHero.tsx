"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Smartphone, Building2, Sparkles, Figma, Wrench, Workflow, ArrowRight, ChevronRight } from "lucide-react";
import type { ServiceIcon } from "@/data/services-detail";
import { Button } from "@/components/ui/Button";
import { SignalField } from "@/components/shared/SignalField";

const ICONS: Record<ServiceIcon, typeof Globe> = {
  globe: Globe,
  smartphone: Smartphone,
  building: Building2,
  sparkles: Sparkles,
  figma: Figma,
  wrench: Wrench,
  workflow: Workflow,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

interface ServiceHeroProps {
  slug: string;
  name: string;
  icon: ServiceIcon;
  tagline: string;
  description: string;
}

export function ServiceHero({ slug, name, icon, tagline, description }: ServiceHeroProps) {
  const Icon = ICONS[icon];

  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-24 md:pt-40">
      <div className="signal-grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <SignalField className="pointer-events-none absolute inset-x-0 top-0 h-[560px] opacity-40" />

      <div className="container-oa7 relative">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-secondary-500">
          <Link href="/services" className="hover:text-secondary-100">
            Services
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
              href={`/contact?service=${slug}&intent=inquiry`}
              size="lg"
              iconRight={<ArrowRight className="h-4 w-4" />}
            >
              Start a project
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              See pricing
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
