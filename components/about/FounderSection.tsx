import { Github, Linkedin, Mail } from "lucide-react";
import { SITE } from "@/constants/site";
import { SectionHeader } from "@/components/shared/SectionHeader";

interface FounderSectionProps {
  name: string;
  role: string;
  bio: string;
}

const LINK_CLASSES =
  "inline-flex items-center gap-2 rounded-md border border-border-subtle px-3.5 py-2 text-sm text-secondary-200 transition-colors hover:border-accent-400/40 hover:text-accent-ink";

export function FounderSection({ name, role, bio }: FounderSectionProps) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <section className="bg-surface-raised py-16 md:py-24 lg:py-30" aria-labelledby="founder-heading">
      <div className="container-oa7">
        <SectionHeader id="founder-heading" eyebrow="Who is behind OA7" title="Founder" />

        <div className="mt-8 md:mt-12 flex flex-col items-start gap-6 rounded-lg border border-border-subtle bg-surface-base p-8 sm:flex-row sm:items-start">
          <div
            className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-accent-400/10 text-2xl font-semibold text-accent-ink"
            aria-hidden="true"
          >
            {initial}
          </div>
          <div>
            <p className="text-lg font-semibold text-secondary-0">{name}</p>
            <p className="text-sm text-secondary-500">{role}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-secondary-400">{bio}</p>

            <ul className="mt-5 flex flex-wrap gap-3">
              <li>
                <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className={LINK_CLASSES}>
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a href={SITE.github} target="_blank" rel="noopener noreferrer" className={LINK_CLASSES}>
                  <Github className="h-4 w-4" aria-hidden="true" />
                  GitHub
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className={LINK_CLASSES}>
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
