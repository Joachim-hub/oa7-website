import type { Metadata } from "next";
import { SITE } from "@/constants/site";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection } from "@/components/legal/LegalSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses, and protects information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="July 19, 2026">
      <p className="text-base leading-relaxed text-secondary-300">
        This policy covers what {SITE.legalName} (&ldquo;OA7,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) collects through this website
        and what we do with it. It&rsquo;s written to describe our actual practices, not to cover
        every possibility in the abstract.
      </p>

      <LegalSection title="What we collect">
        <p>
          When you use the contact form, we collect your name, email address, the project type you
          select, and whatever you write in the message field. That&rsquo;s the only information this
          site actively asks for.
        </p>
        <p>
          Our hosting provider automatically logs basic technical information common to any website,
          such as IP address and browser type, for security and reliability purposes. We don&rsquo;t
          access these logs for marketing.
        </p>
        <p>
          The site also stores a single, non-identifying preference in your browser: whether
          you&rsquo;ve chosen light or dark mode. See the{" "}
          <a href="/legal/cookies">Cookie Policy</a> for detail on that.
        </p>
      </LegalSection>

      <LegalSection title="How we use it">
        <p>
          Contact form submissions are used to respond to your inquiry and, if you become a client,
          to deliver the project we agree on. We don&rsquo;t sell, rent, or share your information
          with third parties for marketing, and we don&rsquo;t currently run any advertising or
          analytics tracking on this site.
        </p>
      </LegalSection>

      <LegalSection title="Data retention">
        <p>
          We keep contact form submissions and project-related correspondence for as long as it&rsquo;s
          relevant to the inquiry or project, and generally no longer than a few years afterward for
          our own records. You can ask us to delete your information at any point, see below.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          You can ask us what information we hold about you, ask us to correct it, or ask us to
          delete it, by emailing <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. We&rsquo;ll
          respond within a reasonable time.
        </p>
      </LegalSection>

      <LegalSection title="Security">
        <p>
          We take reasonable steps to protect the information you share with us. No method of
          transmission or storage is completely secure, and we can&rsquo;t guarantee absolute
          security, but we don&rsquo;t treat that as an excuse to be careless with it.
        </p>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <p>
          If how we handle information changes meaningfully, we&rsquo;ll update this page and the
          date at the top. We don&rsquo;t expect that to happen often.
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
