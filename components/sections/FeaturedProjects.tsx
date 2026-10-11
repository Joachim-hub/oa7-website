"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/Button";

export function FeaturedProjects() {
  const completed = PROJECTS.filter((p) => p.status === "Completed");

  return (
    <section className="bg-surface-raised py-16 md:py-24 lg:py-30" aria-labelledby="featured-projects-heading">
      <div className="container-oa7">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            id="featured-projects-heading"
            eyebrow="Portfolio"
            title="Completed independent projects"
            description="Two projects I built on my own to develop practical skills. Neither was commissioned by a client, and neither is publicly published."
            className="max-w-xl"
          />
          <Button href="/portfolio" variant="outline" iconRight={<ArrowRight className="h-4 w-4" />}>
            View all projects
          </Button>
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {completed.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
