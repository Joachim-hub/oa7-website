import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { TEMPLATES, getTemplateBySlug, getRelatedTemplates } from "@/data/templates";
import { Badge } from "@/components/ui/Badge";
import { Tabs } from "@/components/ui/Tabs";
import { RelatedTemplates } from "@/components/shared/RelatedTemplates";
import { TemplateCTAButtons } from "@/components/templates/TemplateCTAButtons";
import { FinalCTA } from "@/components/sections/FinalCTA";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return TEMPLATES.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const template = getTemplateBySlug(params.slug);
  if (!template) return {};

  return {
    title: `${template.name} (concept)`,
    description: `${template.shortDescription} A concept only: not for sale, no live demo.`,
    openGraph: {
      title: `${template.name} concept — OA7`,
      description: template.shortDescription,
    },
  };
}

export default function TemplateDetailsPage({ params }: PageProps) {
  const template = getTemplateBySlug(params.slug);
  if (!template) notFound();

  const related = getRelatedTemplates(template);

  return (
    <div className="pb-24 pt-32 md:pb-30 md:pt-40">
      <div className="container-oa7">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-secondary-500">
          <Link href="/templates" className="hover:text-secondary-100">
            Concepts
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-secondary-300" aria-current="page">
            {template.name}
          </span>
        </nav>

        <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <div
            className="signal-grid-bg flex aspect-video items-center justify-center rounded-lg border border-border-subtle bg-surface-overlay"
            aria-hidden="true"
          >
            <span className="text-lg font-medium text-secondary-500">{template.name} concept</span>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <Badge variant="neutral">{template.category}</Badge>
              <Badge variant="warning">Concept</Badge>
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-secondary-0 md:text-5xl">
              {template.name}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-secondary-400">{template.shortDescription}</p>
            <p className="mt-4 text-sm text-secondary-500">
              This is a concept. It is not for sale, it has no price and there is no live demo.
            </p>

            <div className="mt-8">
              <TemplateCTAButtons template={template} />
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-3xl">
          <Tabs
            ariaLabel="Concept information"
            items={[
              {
                id: "overview",
                label: "Overview",
                content: (
                  <p className="text-base leading-relaxed text-secondary-400">
                    {template.name} is a design concept for a {template.category.toLowerCase()} website.
                    It is a starting idea, not a finished product. Nothing listed here should be read as
                    a feature that already exists.
                  </p>
                ),
              },
              {
                id: "ideas",
                label: "Ideas it could include",
                content: (
                  <ul className="space-y-3">
                    {template.ideas.map((idea) => (
                      <li key={idea} className="flex items-start gap-3 text-sm text-secondary-300">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                        {idea}
                      </li>
                    ))}
                  </ul>
                ),
              },
            ]}
          />
        </div>

        <RelatedTemplates templates={related} />
      </div>

      <div className="mt-24">
        <FinalCTA />
      </div>
    </div>
  );
}
