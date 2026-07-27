import { Mail } from "lucide-react";
import { SITE } from "@/constants/site";

export function ContactChannels() {
  return (
    <div className="rounded-lg border border-border-subtle bg-surface-raised p-6">
      <h2 className="text-label font-semibold uppercase text-secondary-500">Direct</h2>
      <a
        href={`mailto:${SITE.email}`}
        className="mt-4 flex items-center gap-3 text-secondary-100 hover:text-accent-ink"
      >
        <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
        <span className="text-sm">{SITE.email}</span>
      </a>
      <p className="mt-5 text-sm leading-relaxed text-secondary-500">
        Based in Ghana, working with clients directly, remote included. Location isn&rsquo;t a
        barrier to getting started.
      </p>
    </div>
  );
}
