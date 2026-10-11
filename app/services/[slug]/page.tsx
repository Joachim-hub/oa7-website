import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES_DETAIL, getServiceBySlug } from "@/data/services-detail";
import { getIndustryBySlug } from "@/data/industries";
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
        status={service.status}
        statusNote={service.statusNote}
      />

      {/* Overview */}
      <section className="py-4 md:py-6" aria-labelledby="overview-heading">
        <div className="container-oa7">
          <SectionHeader id="overview-heading" eyebrow="Overview" title="Where this stands" className="max-w-3xl" />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-secondary-400">
            {service.overview}
          </p>
        </div>
      </section>

      {service.problems.length > 0 && <ProblemsSolved problems={service.problems} />}
      {service.benefits.length > 0 && (
        <BenefitsSection
          benefits={service.benefits}
          eyebrow="What to expect"
          title="What I focus on"
          description="The things I pay attention to in this kind of work."
        />
      )}
      {service.features.length > 0 && (
        <ServiceFeatureGrid
          features={service.features}
          eyebrow="Experience"
          title={service.featuresTitle}
        />
      )}
      {service.techStack.length > 0 && (
        <TechnologyStack stack={service.techStack} eyebrow="Tools" title="Technologies" />
      )}

      {service.process.length > 0 && (
        <ProcessTimeline
          eyebrow="How I approach it"
          title={`My approach to ${service.name.toLowerCase()}`}
          description="A simple outline of how I go about it."
          steps={service.process}
        />
      )}

      <RelevantIndustries industries={industries} note={service.industryNote} />

      {service.faqs.length > 0 && (
        <FAQSection
          items={service.faqs.map((faq, i) => ({
            id: `faq-${i}`,
            question: faq.question,
            answer: faq.answer,
          }))}
        />
      )}

      <div className="container-oa7">
        <RelatedProjects projects={relatedProjects} title="Related projects" />
      </div>

      <div className="mt-24">
        <FinalCTA />
      </div>
    </div>
  );
}
