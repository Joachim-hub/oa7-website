import Link from "next/link";
import { FOOTER_NAV, SITE, SOCIAL_LINKS } from "@/constants/site";
import { Logo } from "@/components/shared/Logo";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

const NAV_GROUPS: { title: string; links: typeof FOOTER_NAV.services }[] = [
  { title: "Services", links: FOOTER_NAV.services },
  { title: "Resources", links: FOOTER_NAV.resources },
  { title: "Company", links: FOOTER_NAV.company },
  { title: "Legal", links: FOOTER_NAV.legal },
];

export function Footer() {
  return (
    <footer className="dark border-t border-border-subtle bg-surface-sunken">
      <div className="container-oa7 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Logo className="h-9 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary-500">
              {SITE.description}
            </p>
            <div className="mt-6 max-w-xs">
              <NewsletterForm />
            </div>
          </div>

          {NAV_GROUPS.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="text-label font-semibold uppercase text-secondary-500">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-secondary-300 transition-colors hover:text-accent-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-border-subtle pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-secondary-500">
            &copy; {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <ul className="flex items-center gap-5">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-secondary-500 transition-colors hover:text-accent-ink"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
