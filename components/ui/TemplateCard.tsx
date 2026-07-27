import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Template } from "@/data/templates";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface TemplateCardProps {
  template: Template;
  onQuickView?: (template: Template) => void;
}

export function TemplateCard({ template, onQuickView }: TemplateCardProps) {
  return (
    <Card hoverable className="group flex h-full flex-col overflow-hidden p-0">
      <Link
        href={`/templates/${template.slug}`}
        className="signal-grid-bg relative flex aspect-[4/3] items-center justify-center border-b border-border-subtle bg-surface-overlay"
      >
        <span className="text-sm font-medium text-secondary-600">{template.name} preview</span>
        {onQuickView && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onQuickView(template);
            }}
            className="absolute right-3 top-3 rounded-full border border-border-DEFAULT bg-surface-base/80 px-3 py-1.5 text-xs font-medium text-secondary-100 opacity-0 backdrop-blur-sm transition-opacity duration-200 ease-out-expo group-hover:opacity-100"
          >
            Quick view
          </button>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Badge variant="neutral">{template.category}</Badge>
            <Link href={`/templates/${template.slug}`}>
              <h3 className="mt-3 flex items-center gap-1.5 text-base font-semibold text-secondary-0">
                {template.name}
                <ArrowUpRight
                  className="h-4 w-4 -translate-y-0.5 opacity-0 transition-all duration-200 ease-out-expo group-hover:translate-x-0.5 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </h3>
            </Link>
          </div>
          <p className="whitespace-nowrap text-sm font-semibold text-accent-ink">
            {template.price !== null ? `$${template.price}` : "Request quote"}
          </p>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-secondary-500">{template.shortDescription}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {template.tech.slice(0, 3).map((tech) => (
            <li key={tech} className="rounded-full bg-secondary-200/8 px-2.5 py-1 text-xs text-secondary-400">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-2 border-t border-border-subtle pt-4">
          <Button href={`/templates/${template.slug}`} variant="outline" size="sm" fullWidth>
            Details
          </Button>
          <Button
            href={template.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="sm"
            aria-label={`Live demo of ${template.name} (opens in a new tab)`}
            iconRight={<ExternalLink className="h-3.5 w-3.5" />}
          >
            Demo
          </Button>
        </div>
      </div>
    </Card>
  );
}
