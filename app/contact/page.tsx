import type { Metadata } from "next";
import { Suspense } from "react";
import { CONTACT_FAQ } from "@/data/contact";
import { FAQSection } from "@/components/shared/FAQSection";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { ContactChannels } from "@/components/contact/ContactChannels";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Joachim Osafo Amoateng of OA7 Software by email, LinkedIn or GitHub, about a role, a project or a collaboration.",
};

export default function ContactPage() {
  return (
    <div className="pb-24 md:pb-30">
      <ContactHero />

      <section className="py-4 md:py-6" aria-label="Contact form">
        <div className="container-oa7 grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_1fr]">
          <Suspense fallback={<div className="h-96" aria-hidden="true" />}>
            <ContactPageContent />
          </Suspense>
          <ContactChannels />
        </div>
      </section>

      <div className="mt-16">
        <FAQSection
          items={CONTACT_FAQ.map((faq, i) => ({ id: `faq-${i}`, question: faq.question, answer: faq.answer }))}
        />
      </div>
    </div>
  );
}
