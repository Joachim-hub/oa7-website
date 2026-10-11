import type { Metadata } from "next";
import { PRICING_FACTORS, PRICING_FAQ } from "@/data/pricing";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceFeatureGrid } from "@/components/services/ServiceFeatureGrid";
import { FAQSection } from "@/components/shared/FAQSection";
import { PricingHero } from "@/components/pricing/PricingHero";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "How to work with Joachim Osafo Amoateng and OA7 Software. There is no price list yet, and nothing on the site is for sale. Get in touch to talk about a project or role.",
};

export default function PricingPage() {
  return (
    <div>
      <PricingHero />

      {/* How the two models work */}
      <section className="py-4 md:py-6" aria-labelledby="how-pricing-works-heading">
        <div className="container-oa7 max-w-3xl">
          <SectionHeader id="how-pricing-works-heading" eyebrow="How this works" title="No price list yet, and no hidden terms" />
          <p className="mt-6 text-base leading-relaxed text-secondary-400">
            OA7 is an early-stage independent initiative. I have not set standard prices, and none of
            the template concepts is for sale. If you would like to work with me, we would talk about
            what you need first, and agree the scope and terms before any work starts.
          </p>
          <p className="mt-4 text-base leading-relaxed text-secondary-400">
            I am also open to conversations about employment and collaboration.
          </p>
        </div>
      </section>

      <ServiceFeatureGrid
        features={PRICING_FACTORS}
        eyebrow="What matters"
        title="What would shape a project"
      />

      <FAQSection
        items={PRICING_FAQ.map((faq, i) => ({ id: `faq-${i}`, question: faq.question, answer: faq.answer }))}
      />

      <div className="mt-24">
        <FinalCTA />
      </div>
    </div>
  );
}
