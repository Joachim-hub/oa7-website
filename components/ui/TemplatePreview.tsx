import { ExternalLink } from "lucide-react";
import type { Template } from "@/data/templates";
import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface TemplatePreviewProps {
  template: Template | null;
  onClose: () => void;
}

export function TemplatePreview({ template, onClose }: TemplatePreviewProps) {
  return (
    <Modal isOpen={!!template} onClose={onClose} title={template?.name ?? ""}>
      {template && (
        <div>
          <div className="signal-grid-bg flex aspect-video items-center justify-center rounded-md border border-border-subtle bg-surface-overlay">
            <span className="text-sm font-medium text-secondary-600">{template.name} preview</span>
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <Badge variant="neutral">{template.category}</Badge>
            <p className="text-lg font-semibold text-accent-ink">
              {template.price !== null ? `$${template.price}` : "Request quote"}
            </p>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-secondary-400">{template.shortDescription}</p>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {template.tech.map((tech) => (
              <li key={tech} className="rounded-full bg-secondary-200/8 px-2.5 py-1 text-xs text-secondary-400">
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border-subtle pt-5">
            <Button href={`/templates/${template.slug}`} size="sm">
              View full details
            </Button>
            <Button
              href={template.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
              iconRight={<ExternalLink className="h-3.5 w-3.5" />}
            >
              Live demo
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}
