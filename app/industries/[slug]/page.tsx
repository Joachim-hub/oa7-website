import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INDUSTRIES, getIndustryBySlug } from "@/data/industries";
import { getServiceBySlug } from "@/data/services";
import { getTemplateBySlug } from "@/data/templates";
import { getProjectBySlug } from "@/data/projects";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { IndustryHero } from "@/components/industries/IndustryHero";
import { ProblemsSolved } from "@/components/services/ProblemsSolved";
import { ServiceFeatureGrid } from "@/components/services/ServiceFeatureGrid";
import { FAQSection } from "@/components/shared/FAQSection";
import { RelatedServices } from "@/components/shared/RelatedServices";
import { RelatedProjects } from "@/components/shared/RelatedProjects";
import { RelatedTemplates } from "@/components/shared/RelatedTemplates";
import { FinalCTA } from "@/components/sections/FinalCTA";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) return {};

  return {
    title: industry.name,
    description: industry.heroDescription,
    openGraph: {
      title: `${industry.name} — OA7`,
      description: industry.heroDescription,
    },
  };
}

export default function IndustryDetailsPage({ params }: PageProps) {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) notFound();

  const relatedServices = industry.relatedServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const relatedTemplates = industry.relatedTemplateSlugs
    .map((slug) => getTemplateBySlug(slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const relatedProjects = industry.relatedProjectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div>
      <IndustryHero
        slug={industry.slug}
        name={industry.name}
        icon={industry.icon}
        tagline={industry.tagline}
        description={industry.heroDescription}
      />

      {/* Overview */}
      <section className="py-4 md:py-6" aria-labelledby="overview-heading">
        <div className="container-oa7">
          <SectionHeader eyebrow="Overview" title="How we approach this" className="max-w-3xl" />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-secondary-400">
            {industry.overview}
          </p>
        </div>
      </section>

      <ProblemsSolved
        problems={industry.challenges}
        eyebrow="Challenges"
        title="What this industry usually runs into"
        description="The recurring problems we're typically brought in to solve."
      />

      <ServiceFeatureGrid
        features={industry.whatWeBuild}
        eyebrow="What we build"
        title="Typical deliverables"
      />

      <FAQSection
        items={industry.faqs.map((faq, i) => ({
          id: `faq-${i}`,
          question: faq.question,
          answer: faq.answer,
        }))}
      />

      <div className="container-oa7">
        <RelatedServices services={relatedServices} />
        <RelatedProjects projects={relatedProjects} />
        <RelatedTemplates templates={relatedTemplates} />
      </div>

      <div className="mt-24">
        <FinalCTA />
      </div>
    </div>
  );
}
