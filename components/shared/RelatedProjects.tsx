import type { Project } from "@/data/projects";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProjectGrid } from "@/components/ui/ProjectGrid";

export function RelatedProjects({ projects, title = "Related projects" }: { projects: Project[]; title?: string }) {
  if (projects.length === 0) return null;

  return (
    <div className="mt-24">
      <SectionHeader eyebrow="Keep exploring" title={title} />
      <div className="mt-8">
        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
}
