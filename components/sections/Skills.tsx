"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, BarChart3, Sigma } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Badge } from "@/components/ui/Badge";

const GROUPS = [
  {
    icon: Globe,
    title: "Web",
    items: ["HTML", "CSS", "JavaScript"],
    note: "Used for my website projects, including Bright Future Academy. Some personal sites are deployed on Vercel.",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    items: ["Flutter"],
    note: "Used for mobile app projects, including FarmLink Ghana.",
  },
  {
    icon: BarChart3,
    title: "Data and analysis",
    items: ["Python", "SQL", "Microsoft Excel", "Power BI"],
    note: "Tools I have learned for working with data, scripting and reporting.",
  },
  {
    icon: Sigma,
    title: "Mathematics",
    items: ["University of Mines and Technology (UMaT)"],
    note: "My degree is in Mathematics. It shapes how I break problems down and check my work.",
  },
];

export function Skills() {
  return (
    <section className="py-16 md:py-24 lg:py-30" aria-labelledby="skills-heading">
      <div className="container-oa7">
        <SectionHeader
          id="skills-heading"
          eyebrow="Skills"
          title="Technologies I've learned and used"
          description="What I work with across web, mobile and data."
        />

        <div className="mt-8 md:mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col rounded-lg border border-border-subtle bg-surface-raised p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent-400/10 text-accent-ink">
                <group.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-secondary-0">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge variant="neutral">{item}</Badge>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-secondary-500">{group.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
