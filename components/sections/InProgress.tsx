"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function InProgress() {
  const inProgress = PROJECTS.filter((p) => p.status !== "Completed");

  return (
    <section className="py-16 md:py-24 lg:py-30" aria-labelledby="in-progress-heading">
      <div className="container-oa7">
        <SectionHeader
          id="in-progress-heading"
          eyebrow="In progress"
          title="Apps in testing and development"
          description="What I'm working on now. Two apps are in closed testing with 12 testers each. The other two are still under development."
          align="center"
          className="mx-auto"
        />

        <div className="mt-8 md:mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {inProgress.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
