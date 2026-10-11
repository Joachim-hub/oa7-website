import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PROJECTS, getProjectBySlug, getRelatedProjects, statusBadgeVariant } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Tabs } from "@/components/ui/Tabs";
import { RelatedProjects } from "@/components/shared/RelatedProjects";
import { ProjectCTAButtons } from "@/components/portfolio/ProjectCTAButtons";
import { FinalCTA } from "@/components/sections/FinalCTA";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: project.name,
    description: `${project.summary} ${project.availability}`,
    openGraph: {
      title: `${project.name} — OA7 Portfolio`,
      description: project.summary,
    },
  };
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-secondary-300">
          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDetailsPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const related = getRelatedProjects(project);

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: <p className="text-base leading-relaxed text-secondary-400">{project.overview}</p>,
    },
    ...(project.built.length > 0
      ? [{ id: "built", label: "What's built", content: <BulletList items={project.built} /> }]
      : []),
    ...(project.planned.length > 0
      ? [
          {
            id: "planned",
            label: "Planned, not built",
            content: (
              <div>
                <p className="mb-4 text-sm text-secondary-500">
                  These items are ideas for later work. They do not exist yet.
                </p>
                <BulletList items={project.planned} />
              </div>
            ),
          },
        ]
      : []),
    ...(project.stack.length > 0
      ? [
          {
            id: "stack",
            label: "Tech stack",
            content: (
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech}>
                    <Badge variant="neutral">{tech}</Badge>
                  </li>
                ))}
              </ul>
            ),
          },
        ]
      : []),
  ];

  return (
    <div className="pb-24 pt-32 md:pb-30 md:pt-40">
      <div className="container-oa7">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-secondary-500">
          <Link href="/portfolio" className="hover:text-secondary-100">
            Portfolio
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-secondary-300" aria-current="page">
            {project.name}
          </span>
        </nav>

        {/* Header */}
        <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <div
              className="signal-grid-bg flex aspect-video items-center justify-center rounded-lg border border-border-subtle bg-surface-overlay"
              aria-hidden="true"
            >
              <span className="text-lg font-medium text-secondary-500">{project.name}</span>
            </div>

            <dl className="mt-4 grid grid-cols-1 gap-4 rounded-lg border border-border-subtle bg-surface-raised p-5 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-label font-semibold uppercase text-secondary-500">Status</dt>
                <dd className="mt-1 text-secondary-200">{project.statusLabel ?? project.status}</dd>
              </div>
              <div>
                <dt className="text-label font-semibold uppercase text-secondary-500">Type</dt>
                <dd className="mt-1 text-secondary-200">Independent project</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-label font-semibold uppercase text-secondary-500">Availability</dt>
                <dd className="mt-1 text-secondary-200">{project.availability}</dd>
              </div>
            </dl>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="accent">{project.category}</Badge>
              {project.domain && <Badge variant="neutral">{project.domain}</Badge>}
              <Badge variant={statusBadgeVariant(project.status)}>
                {project.statusLabel ?? project.status}
              </Badge>
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-secondary-0 md:text-5xl">
              {project.name}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-secondary-400">{project.summary}</p>

            <div className="mt-8">
              <ProjectCTAButtons project={project} />
            </div>

            {project.stack.length > 0 && (
              <ul className="mt-8 flex flex-wrap gap-1.5" aria-label="Technologies">
                {project.stack.map((tech) => (
                  <li key={tech} className="rounded-full bg-secondary-200/8 px-2.5 py-1 text-xs text-secondary-400">
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="mt-20 max-w-3xl">
          {tabs.length > 1 ? (
            <Tabs ariaLabel="Project information" items={tabs} />
          ) : (
            <div>
              <h2 className="text-label font-semibold uppercase text-secondary-500">Overview</h2>
              <p className="mt-3 text-base leading-relaxed text-secondary-400">{project.overview}</p>
            </div>
          )}
        </div>

        <RelatedProjects projects={related} />
      </div>

      <div className="mt-24">
        <FinalCTA />
      </div>
    </div>
  );
}
