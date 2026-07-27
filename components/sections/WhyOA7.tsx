"use client";

import { motion } from "framer-motion";
import { Users, Gauge, ShieldCheck, Headset } from "lucide-react";
import type { Reason } from "@/data/why-oa7";
import { WHY_OA7 } from "@/data/why-oa7";
import { SectionHeader } from "@/components/shared/SectionHeader";

const ICONS: Record<Reason["icon"], typeof Users> = {
  users: Users,
  gauge: Gauge,
  shield: ShieldCheck,
  headset: Headset,
};

export function WhyOA7() {
  return (
    <section className="py-24 md:py-30" aria-labelledby="why-oa7-heading">
      <div className="container-oa7 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Why OA7"
            title="Software that earns your trust before you launch."
            description="We treat every engagement the way we'd want ours treated: honestly scoped, clearly communicated, and built to last."
          />

          <dl className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {WHY_OA7.map((reason, i) => {
              const Icon = ICONS[reason.icon];
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent-400/10 text-accent-ink">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <dt className="mt-4 font-semibold text-secondary-0">{reason.title}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-secondary-500">
                    {reason.description}
                  </dd>
                </motion.div>
              );
            })}
          </dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-square w-full max-w-md justify-self-center rounded-2xl border border-border-subtle bg-surface-raised p-8 shadow-raised lg:justify-self-end"
        >
          <div className="signal-grid-bg absolute inset-0 rounded-2xl opacity-60" aria-hidden="true" />
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <p className="eyebrow">Uptime, last 12 months</p>
              <p className="mt-3 text-6xl font-semibold tracking-tight text-secondary-0">99.9%</p>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-semibold text-secondary-0">&lt;200ms</p>
                <p className="mt-1 text-sm text-secondary-500">Avg. response time</p>
              </div>
              <div className="h-16 w-24" aria-hidden="true">
                <svg viewBox="0 0 96 64" fill="none" className="h-full w-full">
                  <path
                    d="M0 48 L16 40 L32 44 L48 20 L64 26 L80 8 L96 14"
                    stroke="#00F0FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
