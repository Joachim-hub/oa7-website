import type { Metadata } from "next";
import { SITE } from "@/constants/site";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection } from "@/components/legal/LegalSection";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that apply to purchasing a template or commissioning custom work from ${SITE.name}.`,
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="July 19, 2026">
      <p className="text-base leading-relaxed text-secondary-300">
        These terms apply when you purchase a template or commission custom work from{" "}
        {SITE.legalName} (&ldquo;OA7,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). By purchasing a template or agreeing to a custom
        project with us, you&rsquo;re agreeing to what&rsquo;s below.
      </p>

      <LegalSection title="Templates">
        <p>
          Buying a template gives you a license to use, customize, and deploy it for your own
          project. You can&rsquo;t resell the template itself, redistribute it as your own product,
          or use it to build a competing template business. The price listed on the Templates page
          is the full price. It doesn&rsquo;t change after purchase.
        </p>
      </LegalSection>

      <LegalSection title="Custom projects">
        <p>
          Custom development work is scoped individually after a discovery conversation, and each
          project is governed by the specific scope, price, and timeline we agree on for it, not by
          a fixed schedule of services. These general terms still apply alongside that agreement.
        </p>
      </LegalSection>

      <LegalSection title="Payment">
        <p>
          Templates are paid in full at purchase. Custom projects are billed in milestones, typically
          a deposit to begin work and further payments tied to agreed checkpoints. Specific payment
          terms for a custom project are confirmed in writing before work starts.
        </p>
      </LegalSection>

      <LegalSection title="Revisions">
        <p>
          Every project includes an agreed number of revision rounds, set during scoping. Requests
          beyond that are scoped and quoted as additional work, not folded into the original price
          automatically.
        </p>
      </LegalSection>

      <LegalSection title="Ownership">
        <p>
          Once a custom project is paid in full, the source code and deliverables we built for it are
          yours. We may reference the finished project in our own portfolio unless you ask us not
          to. Templates remain OA7&rsquo;s intellectual property; purchasing one grants a license to
          use it, not ownership of the underlying template code as a resellable product.
        </p>
      </LegalSection>

      <LegalSection title="No guarantee of uninterrupted service">
        <p>
          We build things carefully and stand behind our work, but we don&rsquo;t guarantee that any
          website, app, or system will be free of every possible bug or interruption. Maintenance and
          support plans exist specifically to address issues as they come up after launch.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <p>
          To the extent permitted by law, OA7&rsquo;s liability for any claim relating to our
          services is limited to the amount actually paid for the project in question. We&rsquo;re
          not liable for indirect or consequential losses arising from use of a template or custom
          build.
        </p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>
          These terms are governed by the laws applicable in Ghana, where OA7 operates, without
          regard to conflict-of-law principles.
        </p>
      </LegalSection>

      <LegalSection title="Changes to these terms">
        <p>
          If these terms change, we&rsquo;ll update this page and the date at the top. Changes apply
          to new purchases and engagements, not retroactively to projects already underway.
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
