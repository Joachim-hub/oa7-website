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
    <LegalLayout title="Privacy Policy" lastUpdated="October 5, 2026">
      <p className="text-base leading-relaxed text-secondary-300">
        This policy covers what {SITE.legalName} (&ldquo;OA7,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
        collects through this website and our Hitz Play application, and what we do with it.
        It&rsquo;s written to describe our actual practices, not to cover every possibility in the abstract.
      </p>

      <LegalSection title="OA7 Website">
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

        <LegalSection title="How we use website information">
          <p>
            Contact form submissions are used to respond to your inquiry and, if you become a client,
            to deliver the project we agree on. We don&rsquo;t sell, rent, or share your information
            with third parties for marketing, and we don&rsquo;t currently run any advertising or
            analytics tracking on this site.
          </p>
        </LegalSection>
      </LegalSection>

      <LegalSection title="Hitz Play">
        <p>
          Hitz Play is a music player application developed by OA7 Software. This section explains
          how information may be handled when you use Hitz Play.
        </p>

        <LegalSection title="Information we collect">
          <p>
            Depending on the features you use, Hitz Play may process information associated with your
            account and your use of the application, such as account information, authentication
            information, music-related activity, and application preferences.
          </p>

          <p>
            Hitz Play may also process technical information necessary for the application to
            function properly, maintain security, and provide its features.
          </p>
        </LegalSection>

        <LegalSection title="Listening activity and presence">
          <p>
            Hitz Play includes features that may show whether users are currently listening to music.
            When this feature is enabled and available, Hitz Play may process listening activity so
            that the application can display the number of people currently listening to the same song.
          </p>

          <p>
            This feature is intended to provide a real-time listening experience. We do not intend
            this feature to display private personal information about individual listeners.
          </p>
        </LegalSection>

        <LegalSection title="How we use Hitz Play information">
          <p>
            Information processed through Hitz Play may be used to provide and improve the application,
            authenticate users, maintain accounts, provide requested features, maintain security,
            troubleshoot problems, and understand how the application is being used.
          </p>

          <p>
            We do not sell personal information to third parties.
          </p>
        </LegalSection>

        <LegalSection title="Third-party services">
          <p>
            Hitz Play may rely on third-party services to provide certain application functionality,
            such as authentication, data storage, hosting, or other technical services. Information
            necessary for those services may be processed by the relevant service providers according
            to their own privacy policies and terms.
          </p>
        </LegalSection>

        <LegalSection title="Data retention">
          <p>
            We retain information only for as long as reasonably necessary to provide the relevant
            services, maintain accounts and application functionality, meet legitimate operational
            requirements, resolve disputes, and comply with applicable obligations.
          </p>
        </LegalSection>

        <LegalSection title="Account deletion and privacy requests">
          <p>
            If you have a Hitz Play account and want to request deletion of your account or personal
            information, contact us at{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>

          <p>
            We may need to verify the request before processing it. Some information may need to be
            retained where required for legitimate legal, security, or operational purposes.
          </p>
        </LegalSection>

        <LegalSection title="Security">
          <p>
            We take reasonable steps to protect information handled through Hitz Play and the OA7
            website. No method of transmission or storage is completely secure, and we can&rsquo;t
            guarantee absolute security, but we don&rsquo;t treat that as an excuse to be careless
            with information.
          </p>
        </LegalSection>
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

      <LegalSection title="Changes to this policy">
        <p>
          If how we handle information changes meaningfully, we&rsquo;ll update this page and the
          date at the top. We don&rsquo;t expect that to happen often.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about this policy, the OA7 website, or Hitz Play can go to{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
