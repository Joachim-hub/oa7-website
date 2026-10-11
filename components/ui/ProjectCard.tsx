import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { statusBadgeVariant } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border-subtle bg-surface-raised">
      <Link href={`/portfolio/${project.slug}`} className="block" tabIndex={-1} aria-hidden="true">
        <div
          className="signal-grid-bg flex aspect-[16/10] items-center justify-center border-b border-border-subtle bg-surface-overlay transition-transform duration-500 ease-out-expo group-hover:scale-[1.02]"
        >
          <span className="text-sm font-medium text-secondary-500">{project.name}</span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent">{project.category}</Badge>
          <Badge variant={statusBadgeVariant(project.status)}>
            {project.statusLabel ?? project.status}
          </Badge>
        </div>
        <Link href={`/portfolio/${project.slug}`}>
          <h3 className="mt-3 flex items-center gap-1.5 text-lg font-semibold text-secondary-0">
            {project.name}
            <ArrowUpRight
              className="h-4 w-4 -translate-y-0.5 opacity-0 transition-all duration-200 ease-out-expo group-hover:translate-x-0.5 group-hover:opacity-100"
              aria-hidden="true"
            />
          </h3>
        </Link>
        <p className="mt-2 text-sm leading-relaxed text-secondary-500">{project.summary}</p>
        <p className="mt-3 text-xs leading-relaxed text-secondary-500">{project.availability}</p>

        {project.stack.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
            {project.stack.map((tech) => (
              <li key={tech} className="rounded-full bg-secondary-200/8 px-2.5 py-1 text-xs text-secondary-400">
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-5">
          <div className="flex items-center gap-2 border-t border-border-subtle pt-4">
            <Button href={`/portfolio/${project.slug}`} variant="outline" size="sm" fullWidth>
              View project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
