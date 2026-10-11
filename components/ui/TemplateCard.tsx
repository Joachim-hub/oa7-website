import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
    <Card hoverable className="group relative flex h-full flex-col overflow-hidden p-0">
      <Link
        href={`/templates/${template.slug}`}
        className="signal-grid-bg relative flex aspect-[4/3] items-center justify-center border-b border-border-subtle bg-surface-overlay"
        tabIndex={-1}
        aria-hidden="true"
      >
        <span className="text-sm font-medium text-secondary-500">{template.name} concept</span>
      </Link>
      {onQuickView && (
        <button
          type="button"
          onClick={() => onQuickView(template)}
          className="absolute right-3 top-3 rounded-full border border-border-DEFAULT bg-surface-base/80 px-3 py-1.5 text-xs font-medium text-secondary-100 opacity-0 backdrop-blur-sm transition-opacity duration-200 ease-out-expo focus:opacity-100 group-hover:opacity-100"
          aria-label={`Quick view of the ${template.name} concept`}
        >
          Quick view
        </button>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="neutral">{template.category}</Badge>
          <Badge variant="warning">Concept</Badge>
        </div>
        <Link href={`/templates/${template.slug}`}>
          <h3 className="mt-3 flex items-center gap-1.5 text-base font-semibold text-secondary-0">
            {template.name}
            <ArrowUpRight
              className="h-4 w-4 -translate-y-0.5 opacity-0 transition-all duration-200 ease-out-expo group-hover:translate-x-0.5 group-hover:opacity-100"
              aria-hidden="true"
            />
          </h3>
        </Link>

        <p className="mt-2 text-sm leading-relaxed text-secondary-500">{template.shortDescription}</p>
        <p className="mt-3 text-xs text-secondary-500">Not for sale. No live demo.</p>

        <div className="mt-auto pt-5">
          <div className="flex items-center gap-2 border-t border-border-subtle pt-4">
            <Button href={`/templates/${template.slug}`} variant="outline" size="sm" fullWidth>
              View concept
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
