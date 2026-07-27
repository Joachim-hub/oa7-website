import type { Metadata } from "next";
import { PRICING_FACTORS, WHATS_INCLUDED, PRICING_POLICIES, PRICING_FAQ } from "@/data/pricing";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceFeatureGrid } from "@/components/services/ServiceFeatureGrid";
import { BenefitsSection } from "@/components/services/BenefitsSection";
import { FAQSection } from "@/components/shared/FAQSection";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingPolicies } from "@/components/pricing/PricingPolicies";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "How OA7 prices templates and custom projects, what affects a quote, what's included, and how revisions, support, and payment work.",
};

export default function PricingPage() {
  return (
    <div>
      <PricingHero />

      {/* How the two models work */}
      <section className="py-4 md:py-6" aria-labelledby="how-pricing-works-heading">
        <div className="container-oa7 max-w-3xl">
          <SectionHeader eyebrow="How this works" title="Fixed where we can be, quoted where we have to be" />
          <p className="mt-6 text-base leading-relaxed text-secondary-400">
            Every template on the Templates page has a listed price. What you see is what you pay,
            whether you use it close to as-is or customize the branding and content top to bottom.
            Pick one, and the price doesn&rsquo;t move once you&rsquo;ve started.
          </p>
          <p className="mt-4 text-base leading-relaxed text-secondary-400">
            Custom work doesn&rsquo;t get a listed price, because it can&rsquo;t honestly have one
            before we know what you&rsquo;re building. Two projects that sound alike on paper can take
            very different amounts of work. We scope the project during discovery, then give you a
            fixed quote for that specific scope. Not a range, and not an hourly estimate that can drift.
          </p>
        </div>
      </section>

      <ServiceFeatureGrid
        features={PRICING_FACTORS}
        eyebrow="What affects a quote"
        title="What actually changes the price"
      />

      <BenefitsSection
        benefits={WHATS_INCLUDED}
        eyebrow="Every project"
        title="What's included either way"
        description="Templates and custom projects are priced differently, but neither one skimps on this."
      />

      <PricingPolicies policies={PRICING_POLICIES} />

      <FAQSection
        items={PRICING_FAQ.map((faq, i) => ({ id: `faq-${i}`, question: faq.question, answer: faq.answer }))}
      />

      <div className="mt-24">
        <FinalCTA />
      </div>
    </div>
  );
}
