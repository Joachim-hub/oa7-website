import Link from "next/link";
import { FOOTER_NAV, SITE, SOCIAL_LINKS } from "@/constants/site";
import { Logo } from "@/components/shared/Logo";

const NAV_GROUPS: { title: string; links: typeof FOOTER_NAV.services }[] = [
  { title: "What I Build", links: FOOTER_NAV.services },
  { title: "Explore", links: FOOTER_NAV.resources },
  { title: "Company", links: FOOTER_NAV.company },
  { title: "Legal", links: FOOTER_NAV.legal },
];

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface-sunken">
      <div className="container-oa7 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:gap-12">
          <div>
            <Logo className="h-9 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary-500">
              {SITE.description}
            </p>
            <p className="mt-4 text-sm">
              <a
                href={`mailto:${SITE.email}`}
                className="text-secondary-300 transition-colors hover:text-accent-ink"
              >
                {SITE.email}
              </a>
            </p>
          </div>

          {/* Two columns on mobile/tablet to cut the footer's scroll height;
              `lg:contents` unwraps this on desktop so each group becomes its
              own column in the 5-column grid above, unchanged from before. */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:contents">
            {NAV_GROUPS.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h3 className="text-label font-semibold uppercase text-secondary-500">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
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
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-border-subtle pt-6 sm:flex-row sm:items-center md:mt-16 md:pt-8">
          <p className="text-sm text-secondary-500">
            &copy; {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <ul className="flex items-center gap-5">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  {...(social.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
