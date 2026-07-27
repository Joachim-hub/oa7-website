"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Industry } from "@/data/industries";
import { INDUSTRY_ICONS } from "@/components/shared/industryIcons";

export function IndustryGrid({ industries }: { industries: Industry[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {industries.map((industry, i) => {
        const Icon = INDUSTRY_ICONS[industry.icon];
        return (
          <motion.div
            key={industry.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (i % 8) * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={`/industries/${industry.slug}`}
              className="group flex flex-col items-start gap-3 rounded-lg border border-border-subtle bg-surface-raised p-4 transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-accent-400/30 hover:shadow-glow"
            >
              <Icon className="h-6 w-6 text-accent-ink" aria-hidden="true" />
              <span className="flex items-center gap-1 text-sm font-medium text-secondary-100">
                {industry.name}
                <ArrowUpRight
                  className="h-3.5 w-3.5 opacity-0 transition-all duration-200 ease-out-expo group-hover:translate-x-0.5 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
