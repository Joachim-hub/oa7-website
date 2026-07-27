import type { Template } from "@/data/templates";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TemplateGrid } from "@/components/ui/TemplateGrid";

export function RelatedTemplates({ templates, title = "Related templates" }: { templates: Template[]; title?: string }) {
  if (templates.length === 0) return null;

  return (
    <div className="mt-24">
      <SectionHeader eyebrow="Keep exploring" title={title} />
      <div className="mt-8">
        <TemplateGrid templates={templates} />
      </div>
    </div>
  );
}
