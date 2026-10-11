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
            <span className="text-sm font-medium text-secondary-500">{template.name} concept</span>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <Badge variant="neutral">{template.category}</Badge>
            <Badge variant="warning">Concept</Badge>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-secondary-400">{template.shortDescription}</p>
          <p className="mt-3 text-xs text-secondary-500">
            This is a concept. It is not for sale and there is no live demo.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border-subtle pt-5">
            <Button href={`/templates/${template.slug}`} size="sm">
              View concept
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}
