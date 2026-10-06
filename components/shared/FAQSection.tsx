import type { AccordionItemData } from "@/components/ui/Accordion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";

interface FAQSectionProps {
  eyebrow?: string;
  title?: string;
  items: AccordionItemData[];
}

export function FAQSection({ eyebrow = "FAQ", title = "Common questions", items }: FAQSectionProps) {
  return (
    <section className="py-16 md:py-24 lg:py-30" aria-labelledby="faq-heading">
      <div className="container-oa7 mx-auto max-w-container-narrow">
        <SectionHeader eyebrow={eyebrow} title={title} align="center" className="mx-auto" />
        <div className="mt-8 md:mt-12">
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
}
