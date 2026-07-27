import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PROJECTS, getProjectBySlug, getRelatedProjects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Tabs } from "@/components/ui/Tabs";
import { RelatedProjects } from "@/components/shared/RelatedProjects";
import { Gallery } from "@/components/shared/Gallery";
import { ProjectCTAButtons } from "@/components/portfolio/ProjectCTAButtons";
import { FinalCTA } from "@/components/sections/FinalCTA";

interface PageProps {
  params: { slug: string };
}

const STATUS_VARIANT = {
  Live: "success",
  Delivered: "accent",
  "In Development": "warning",
} as const;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
    openGraph: {
      title: `${project.name} — OA7 Portfolio`,
      description: project.summary,
    },
  };
}

export default function ProjectDetailsPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const related = getRelatedProjects(project);

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
            <Gallery labels={project.gallery} title={project.name} />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="accent">{project.category}</Badge>
              <Badge variant="neutral">{project.industry}</Badge>
              <Badge variant={STATUS_VARIANT[project.status]}>{project.status}</Badge>
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-secondary-0 md:text-5xl">
              {project.name}
            </h1>
            <p className="mt-2 text-sm text-secondary-500">Client: {project.client}</p>
            <p className="mt-4 text-lg leading-relaxed text-secondary-400">{project.summary}</p>

            <div className="mt-8">
              <ProjectCTAButtons project={project} />
            </div>

            <ul className="mt-8 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <li key={tech} className="rounded-full bg-secondary-200/8 px-2.5 py-1 text-xs text-secondary-400">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tabs: Overview / Challenge & Solution / Tech Stack / Outcomes */}
        <div className="mt-20 max-w-3xl">
          <Tabs
            ariaLabel="Case study information"
            items={[
              {
                id: "overview",
                label: "Overview",
                content: (
                  <p className="text-base leading-relaxed text-secondary-400">{project.overview}</p>
                ),
              },
              {
                id: "challenge-solution",
                label: "Challenge & Solution",
                content: (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-secondary-500">
                        The challenge
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-secondary-400">{project.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-secondary-500">
                        Our approach
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-secondary-400">{project.solution}</p>
                    </div>
                  </div>
                ),
              },
              {
                id: "stack",
                label: "Tech Stack",
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
              {
                id: "outcomes",
                label: "Outcomes",
                content: (
                  <ul className="space-y-3">
                    {project.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-3 text-sm text-secondary-300">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                ),
              },
            ]}
          />
        </div>

        <RelatedProjects projects={related} />
      </div>

      <div className="mt-24">
        <FinalCTA />
      </div>
    </div>
  );
}
