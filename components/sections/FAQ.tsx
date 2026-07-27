import { HOME_FAQ } from "@/data/faq";
import { FAQSection } from "@/components/shared/FAQSection";

export function FAQ() {
  return <FAQSection items={HOME_FAQ} />;
}
