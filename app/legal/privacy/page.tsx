import type { Metadata } from "next";
import { SITE } from "@/constants/site";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection } from "@/components/legal/LegalSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses, and protects information across our website and Hitz Play.`,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="October 5, 2026">
      <p className="text-base leading-relaxed text-secondary-300">
        This policy explains how {SITE.legalName} (“OA7,” “we,” “us”) handles
        information collected through this website and through Hitz Play, our
        music player application. It is written to describe our actual
        practices and the services we provide.
      </p>

      <LegalSection title="OA7 Website">
        <LegalSection title="What we collect">
          <p>
            When you use the contact form, we collect your name, email address,
            the project type you select, and whatever you write in the message
            field. That’s the only information this site actively asks for.
          </p>

          <p>
            Our hosting provider automatically logs basic technical information
            common to any website, such as IP address and browser type, for
            security and reliability purposes. We don’t access these logs for
            marketing.
          </p>

          <p>
            The site also stores a single, non-identifying preference in your
            browser: whether you’ve chosen light or dark mode. See the{" "}
            <a href="/legal/cookies">Cookie Policy</a> for detail on that.
          </p>
        </LegalSection>

        <LegalSection title="How we use it">
          <p>
            Contact form submissions are used to respond to your inquiry and,
            if you become a client, to deliver the project we agree on. We
            don’t sell, rent, or share your information with third parties for
            marketing, and we don’t currently run any advertising or analytics
            tracking on this site.
          </p>
        </LegalSection>

        <LegalSection title="Data retention">
          <p>
            We keep contact form submissions and project-related correspondence
            for as long as it’s relevant to the inquiry or project, and
            generally no longer than a few years afterward for our own records.
            You can ask us to delete your information at any point, see below.
          </p>
        </LegalSection>

        <LegalSection title="Your rights">
          <p>
            You can ask us what information we hold about you, ask us to
            correct it, or ask us to delete it, by emailing{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. We’ll respond
            within a reasonable time.
          </p>
        </LegalSection>

        <LegalSection title="Security">
          <p>
            We take reasonable steps to protect the information you share with
            us. No method of transmission or storage is completely secure, and
            we can’t guarantee absolute security, but we don’t treat that as an
            excuse to be careless with it.
          </p>
        </LegalSection>
      </LegalSection>

      <LegalSection title="Hitz Play">
        <p>
          Hitz Play is a music player application developed and operated by{" "}
          {SITE.legalName}. This section explains how information may be
          handled when you use Hitz Play.
        </p>

        <LegalSection title="Information we collect">
          <p>
            Hitz Play may collect information that you provide when creating
            or using an account, such as your email address and account
            information.
          </p>

          <p>
            The app may also process information associated with your use of
            its music features, such as playlists, favorites, listening
            activity, and other music-related preferences or information that
            you choose to use within the app.
          </p>

          <p>
            Hitz Play may also process information necessary to provide
            features such as account authentication, music playback, and
            synchronized app functionality.
          </p>
        </LegalSection>

        <LegalSection title="Listening activity and presence">
          <p>
            Hitz Play includes a feature that can show how many people are
            currently listening to the same song. When this feature is
            enabled, information about your current listening activity may be
            used to calculate and display an anonymous or non-identifying
            listener count.
          </p>

          <p>
            This feature is intended to show the number of current listeners,
            rather than publicly identify individual listeners.
          </p>

          <p>
            You can control this feature through the relevant setting within
            Hitz Play.
          </p>
        </LegalSection>

        <LegalSection title="How we use information">
          <p>
            Information collected through Hitz Play may be used to provide,
            maintain, secure, and improve the app and its features, including
            account management, authentication, music playback, playlists,
            favorites, listening-related features, and user preferences.
          </p>

          <p>
            We do not sell your personal information to third parties for
            advertising purposes.
          </p>
        </LegalSection>

        <LegalSection title="Third-party services">
          <p>
            Hitz Play may use third-party service providers to support certain
            app functionality, including authentication, data storage, and
            other technical services required to operate the application.
          </p>

          <p>
            These providers may process information on our behalf as necessary
            to provide their services. Their handling of information may also
            be subject to their own privacy policies and terms.
          </p>
        </LegalSection>

        <LegalSection title="Data retention">
          <p>
            We retain information associated with Hitz Play accounts and app
            usage for as long as reasonably necessary to provide the service,
            maintain security, comply with applicable obligations, resolve
            disputes, and enforce our agreements.
          </p>

          <p>
            Where information is no longer required for these purposes, we may
            delete or otherwise remove it in accordance with our practices and
            applicable requirements.
          </p>
        </LegalSection>

        <LegalSection title="Account deletion and privacy requests">
          <p>
            If you have questions about information associated with your Hitz
            Play account, or if you want to request deletion of your personal
            information, you can contact us at{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>

          <p>
            We may need to verify your request before taking action to protect
            your account and information.
          </p>
        </LegalSection>

        <LegalSection title="Security">
          <p>
            We take reasonable steps to protect information associated with
            Hitz Play against unauthorized access, alteration, disclosure, or
            destruction. However, no method of electronic transmission or
            storage is completely secure, and we cannot guarantee absolute
            security.
          </p>
        </LegalSection>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <p>
          If how we handle information changes meaningfully, we’ll update this
          page and the date at the top. We may also update this policy when
          new services, features, or legal requirements make an update
          necessary.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about this privacy policy, the OA7 website, or Hitz Play
          can be sent to{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. We’ll respond
          within a reasonable time.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}