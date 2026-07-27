import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { TEMPLATES, getTemplateBySlug, getRelatedTemplates } from "@/data/templates";
import { Badge } from "@/components/ui/Badge";
import { Tabs } from "@/components/ui/Tabs";
import { Accordion } from "@/components/ui/Accordion";
import { RelatedTemplates } from "@/components/shared/RelatedTemplates";
import { Gallery } from "@/components/shared/Gallery";
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
    title: template.name,
    description: template.shortDescription,
    openGraph: {
      title: `${template.name} — OA7 Templates`,
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
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-secondary-500">
          <Link href="/templates" className="hover:text-secondary-100">
            Templates
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-secondary-300" aria-current="page">
            {template.name}
          </span>
        </nav>

        {/* Header */}
        <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <Gallery labels={template.gallery} title={template.name} />
          </div>

          <div>
            <div className="flex items-center gap-3">
              <Badge variant="neutral">{template.category}</Badge>
              {template.featured && <Badge variant="accent">Featured</Badge>}
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-secondary-0 md:text-5xl">
              {template.name}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-secondary-400">{template.shortDescription}</p>

            <p className="mt-6 text-3xl font-semibold text-accent-ink">
              {template.price !== null ? `$${template.price}` : "Request a quote"}
            </p>

            <div className="mt-8">
              <TemplateCTAButtons template={template} />
            </div>

            <ul className="mt-8 flex flex-wrap gap-1.5">
              {template.tech.map((tech) => (
                <li key={tech} className="rounded-full bg-secondary-200/8 px-2.5 py-1 text-xs text-secondary-400">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tabs: Overview / Features / Tech Stack / What's Included */}
        <div className="mt-20 max-w-3xl">
          <Tabs
            ariaLabel="Template information"
            items={[
              {
                id: "overview",
                label: "Overview",
                content: (
                  <p className="text-base leading-relaxed text-secondary-400">{template.longDescription}</p>
                ),
              },
              {
                id: "features",
                label: "Features",
                content: (
                  <ul className="space-y-3">
                    {template.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-secondary-300">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                ),
              },
              {
                id: "stack",
                label: "Tech Stack",
                content: (
                  <ul className="flex flex-wrap gap-2">
                    {template.tech.map((tech) => (
                      <li key={tech}>
                        <Badge variant="neutral">{tech}</Badge>
                      </li>
                    ))}
                  </ul>
                ),
              },
              {
                id: "included",
                label: "What's Included",
                content: (
                  <ul className="space-y-3">
                    {template.whatsIncluded.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-secondary-300">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ),
              },
            ]}
          />
        </div>

        {/* FAQs */}
        {template.faqs.length > 0 && (
          <div className="mt-20 max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-secondary-0">
              Questions about {template.name}
            </h2>
            <div className="mt-6">
              <Accordion
                items={template.faqs.map((faq, i) => ({
                  id: `faq-${i}`,
                  question: faq.question,
                  answer: faq.answer,
                }))}
              />
            </div>
          </div>
        )}

        <RelatedTemplates templates={related} />
      </div>

      <div className="mt-24">
        <FinalCTA />
      </div>
    </div>
  );
}
