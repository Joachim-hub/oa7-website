"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/Button";

export function FeaturedProjects() {
  return (
    <section className="bg-surface-raised py-24 md:py-30" aria-labelledby="featured-projects-heading">
      <div className="container-oa7">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Recent work"
            title="Projects we've shipped"
            description="A sample of the products and platforms we've built, start to finish."
            className="max-w-xl"
          />
          <Button href="/portfolio" variant="outline" iconRight={<ArrowRight className="h-4 w-4" />}>
            View full portfolio
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
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
