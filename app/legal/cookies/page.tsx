import type { Metadata } from "next";
import { SITE } from "@/constants/site";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection } from "@/components/legal/LegalSection";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `What ${SITE.name} stores in your browser, and why.`,
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="October 10, 2026">
      <p className="text-base leading-relaxed text-secondary-300">
        This is a short one. The site&rsquo;s own code does not set cookies or store anything in your
        browser, and it does not use advertising or analytics tools.
      </p>

      <LegalSection title="What this site stores">
        <p>
          Nothing. There is no login, no tracking and no saved preference. The hosting provider may
          set technical cookies or log requests as part of serving the site, which is outside the
          site&rsquo;s own code.
        </p>
      </LegalSection>

      <LegalSection title="What is not used">
        <p>
          No advertising cookies, no third-party tracking scripts and no analytics platforms are
          integrated into this site. If that changes, this page and its date will change with it.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about this policy can go to <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
