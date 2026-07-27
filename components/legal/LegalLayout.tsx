import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="pb-24 pt-32 md:pb-30 md:pt-40">
      <div className="container-oa7 max-w-3xl">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-secondary-500">
          <Link href="/" className="hover:text-secondary-100">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-secondary-300" aria-current="page">
            {title}
          </span>
        </nav>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-secondary-0 md:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-secondary-500">Last updated {lastUpdated}</p>

        <div className="mt-12 space-y-10">{children}</div>
      </div>
    </div>
  );
}
