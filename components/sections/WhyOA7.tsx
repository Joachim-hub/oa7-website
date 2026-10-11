"use client";

import { motion } from "framer-motion";
import { MessageSquare, Sigma, Hammer, ShieldCheck } from "lucide-react";
import type { Reason } from "@/data/why-oa7";
import { WHY_OA7 } from "@/data/why-oa7";
import { PROJECTS } from "@/data/projects";
import { SectionHeader } from "@/components/shared/SectionHeader";

const ICONS: Record<Reason["icon"], typeof Sigma> = {
  message: MessageSquare,
  sigma: Sigma,
  hammer: Hammer,
  shield: ShieldCheck,
};

export function WhyOA7() {
  // Counts come straight from the project data so they cannot drift from the portfolio.
  const completed = PROJECTS.filter((p) => p.status === "Completed").length;
  const testing = PROJECTS.filter((p) => p.status === "Closed testing").length;
  const developing = PROJECTS.filter((p) => p.status === "In development").length;

  return (
    <section className="py-16 md:py-24 lg:py-30" aria-labelledby="why-oa7-heading">
      <div className="container-oa7 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeader
            id="why-oa7-heading"
            eyebrow="How I work"
            title="Practical, direct and honest"
            description="The approach I take to building software, and the limits of my experience so far."
          />

          <dl className="mt-8 md:mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
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
              <p className="eyebrow">Portfolio at a glance</p>
              <p className="mt-3 text-6xl font-semibold tracking-tight text-secondary-0">
                {PROJECTS.length}
              </p>
              <p className="mt-1 text-sm text-secondary-500">independent projects</p>
            </div>
            <dl className="grid grid-cols-3 gap-4 border-t border-border-subtle pt-6">
              <div>
                <dd className="text-3xl font-semibold text-secondary-0">{completed}</dd>
                <dt className="mt-1 text-xs text-secondary-500">Completed</dt>
              </div>
              <div>
                <dd className="text-3xl font-semibold text-secondary-0">{testing}</dd>
                <dt className="mt-1 text-xs text-secondary-500">Closed testing</dt>
              </div>
              <div>
                <dd className="text-3xl font-semibold text-secondary-0">{developing}</dd>
                <dt className="mt-1 text-xs text-secondary-500">In development</dt>
              </div>
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
