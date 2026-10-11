import { Github, Linkedin, Mail } from "lucide-react";
import { SITE } from "@/constants/site";

const LINK = "flex items-center gap-3 text-secondary-100 hover:text-accent-ink";

export function ContactChannels() {
  return (
    <div className="rounded-lg border border-border-subtle bg-surface-raised p-6">
      <h2 className="text-label font-semibold uppercase text-secondary-500">Direct</h2>
      <ul className="mt-4 space-y-3">
        <li>
          <a href={`mailto:${SITE.email}`} className={LINK}>
            <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm">{SITE.email}</span>
          </a>
        </li>
        <li>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className={LINK}>
            <Linkedin className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm">LinkedIn</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
        <li>
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" className={LINK}>
            <Github className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm">GitHub</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      </ul>
      <p className="mt-5 text-sm leading-relaxed text-secondary-500">
        Based in Ghana. Happy to talk with people anywhere, by email or on LinkedIn.
      </p>
    </div>
  );
}
