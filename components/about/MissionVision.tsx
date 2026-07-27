"use client";

import { motion } from "framer-motion";
import { Target, Telescope } from "lucide-react";

interface MissionVisionProps {
  mission: string;
  vision: string;
}

export function MissionVision({ mission, vision }: MissionVisionProps) {
  const cards = [
    { icon: Target, label: "Mission", text: mission },
    { icon: Telescope, label: "Vision", text: vision },
  ];

  return (
    <section className="py-24 md:py-30" aria-labelledby="mission-vision-heading">
      <div className="container-oa7">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-lg border border-border-subtle bg-surface-raised p-8"
            >
              <card.icon className="h-6 w-6 text-accent-ink" aria-hidden="true" />
              <h2 className="mt-5 text-label font-semibold uppercase text-secondary-500">{card.label}</h2>
              <p className="mt-3 text-lg leading-relaxed text-secondary-200">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
