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
    <LegalLayout title="Cookie Policy" lastUpdated="July 19, 2026">
      <p className="text-base leading-relaxed text-secondary-300">
        This is a short one, because this site doesn&rsquo;t use tracking cookies, advertising
        cookies, or third-party analytics. Here&rsquo;s what it actually stores.
      </p>

      <LegalSection title="Theme preference">
        <p>
          When you switch between light and dark mode, that choice is saved in your browser&rsquo;s
          local storage under a single key. It stays on your device, isn&rsquo;t sent to our
          servers, and isn&rsquo;t used to identify or track you. It exists purely so the site
          remembers your preference the next time you visit.
        </p>
      </LegalSection>

      <LegalSection title="What we don't use">
        <p>
          No advertising cookies, no third-party tracking scripts, and no analytics platforms are
          currently integrated into this site. If that changes, this page will change with it, and
          the &ldquo;last updated&rdquo; date at the top will move.
        </p>
      </LegalSection>

      <LegalSection title="Controlling storage">
        <p>
          You can clear your browser&rsquo;s local storage at any time through your browser&rsquo;s
          settings. Doing so simply resets your theme preference to the default; it won&rsquo;t
          affect anything else, since there&rsquo;s nothing else stored.
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
