"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((project, i) => (
        <motion.div
          key={project.slug}
          layout
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, delay: (i % 6) * 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
}
