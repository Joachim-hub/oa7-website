import { Mail } from "lucide-react";
import type { Template } from "@/data/templates";
import { Button } from "@/components/ui/Button";

/**
 * Templates are concepts, not products, so there is no purchase or demo button.
 * If a template is ever built and published, add its real demo link here.
 */
export function TemplateCTAButtons({ template, size = "lg" }: { template: Template; size?: "md" | "lg" }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button
        href={`/contact?template=${template.slug}&intent=inquiry`}
        size={size}
        iconLeft={<Mail className="h-4 w-4" />}
      >
        Ask about this concept
      </Button>
      <Button href="/portfolio" variant="outline" size={size}>
        See real projects
      </Button>
    </div>
  );
}
