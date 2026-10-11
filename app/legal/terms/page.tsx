import type { Metadata } from "next";
import { SITE } from "@/constants/site";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection } from "@/components/legal/LegalSection";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `The terms for using the ${SITE.name} website.`,
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use" lastUpdated="October 10, 2026">
      <p className="text-base leading-relaxed text-secondary-300">
        These terms apply to your use of the {SITE.legalName} website. {SITE.legalName} is an
        independent software initiative run by {SITE.founder}.
      </p>

      <LegalSection title="About this website">
        <p>
          This website is a portfolio. It describes my independent projects, skills and background.
          Nothing on it is an offer to sell a product, and it does not sell anything.
        </p>
      </LegalSection>

      <LegalSection title="Projects and concepts">
        <p>
          Projects are described with their real status, such as completed, in closed testing or in
          development. Template concepts and sector ideas are design ideas only. They are not for
          sale and are not live products.
        </p>
      </LegalSection>

      <LegalSection title="Working together">
        <p>
          If we agree to work together, the scope, price and terms will be agreed with you directly
          before work starts. These website terms do not replace that agreement.
        </p>
      </LegalSection>

      <LegalSection title="No warranty">
        <p>
          I try to keep the information on this site accurate, but it is provided as it is, without
          any warranty. To the extent permitted by law, I am not liable for losses arising from your
          use of this website.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about these terms can go to <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
