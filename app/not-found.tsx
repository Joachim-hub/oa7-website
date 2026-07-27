import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const QUICK_LINKS = [
  { label: "Templates", href: "/templates", description: "Browse ready-to-launch templates" },
  { label: "Portfolio", href: "/portfolio", description: "See what we've built" },
  { label: "Services", href: "/services", description: "What we do, start to finish" },
  { label: "Contact", href: "/contact", description: "Tell us what you need" },
];

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-8xl font-semibold tracking-tight text-secondary-0 md:text-9xl">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-secondary-0">This page doesn&rsquo;t exist.</h1>
      <p className="mt-3 max-w-md text-secondary-500">
        The link might be old, or the address might be off by a character. Either way, it&rsquo;s
        not here.
      </p>

      <div className="mt-8">
        <Button href="/" size="lg" iconRight={<ArrowRight className="h-4 w-4" />}>
          Back to home
        </Button>
      </div>

      <div className="mt-16 grid w-full max-w-2xl grid-cols-2 gap-4 text-left sm:grid-cols-4">
        {QUICK_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-lg border border-border-subtle bg-surface-raised p-4 transition-colors hover:border-accent-ink/30"
          >
            <p className="text-sm font-semibold text-secondary-0">{link.label}</p>
            <p className="mt-1 text-xs leading-relaxed text-secondary-500">{link.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
