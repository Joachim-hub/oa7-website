import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES_DETAIL, getServiceBySlug } from "@/data/services-detail";
import { getIndustryBySlug } from "@/data/industries";
import { getTemplateBySlug } from "@/data/templates";
import { getProjectBySlug } from "@/data/projects";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ProblemsSolved } from "@/components/services/ProblemsSolved";
import { BenefitsSection } from "@/components/services/BenefitsSection";
import { ServiceFeatureGrid } from "@/components/services/ServiceFeatureGrid";
import { TechnologyStack } from "@/components/services/TechnologyStack";
import { RelevantIndustries } from "@/components/services/RelevantIndustries";
import { ProcessTimeline } from "@/components/shared/ProcessTimeline";
import { FAQSection } from "@/components/shared/FAQSection";
import { RelatedProjects } from "@/components/shared/RelatedProjects";
import { RelatedTemplates } from "@/components/shared/RelatedTemplates";
import { FinalCTA } from "@/components/sections/FinalCTA";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return SERVICES_DETAIL.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.heroDescription,
    openGraph: {
      title: `${service.name} — OA7`,
      description: service.heroDescription,
    },
  };
}

export default function ServiceDetailsPage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const industries = service.industrySlugs
    .map((slug) => getIndustryBySlug(slug))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  const relatedTemplates = service.relatedTemplateSlugs
    .map((slug) => getTemplateBySlug(slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const relatedProjects = service.relatedProjectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div>
      <ServiceHero
        slug={service.slug}
        name={service.name}
        icon={service.icon}
        tagline={service.tagline}
        description={service.heroDescription}
      />

      {/* Overview */}
      <section className="py-4 md:py-6" aria-labelledby="overview-heading">
        <div className="container-oa7">
          <SectionHeader eyebrow="Overview" title="How we approach this" className="max-w-3xl" />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-secondary-400">
            {service.overview}
          </p>
        </div>
      </section>

      <ProblemsSolved problems={service.problems} />
      <BenefitsSection benefits={service.benefits} />
      <ServiceFeatureGrid features={service.features} />
      <TechnologyStack stack={service.techStack} />

      <ProcessTimeline
        eyebrow="How we work"
        title={`Our process for ${service.name.toLowerCase()}`}
        description="You'll always know what stage your project is in and what happens next."
        steps={service.process}
      />

      <RelevantIndustries industries={industries} note={service.industryNote} />

      <FAQSection
        items={service.faqs.map((faq, i) => ({
          id: `faq-${i}`,
          question: faq.question,
          answer: faq.answer,
        }))}
      />

      <div className="container-oa7">
        <RelatedProjects projects={relatedProjects} />
        <RelatedTemplates templates={relatedTemplates} />
      </div>

      <div className="mt-24">
        <FinalCTA />
      </div>
    </div>
  );
}
