import { ExternalLink, ShoppingCart, Wrench } from "lucide-react";
import type { Template } from "@/data/templates";
import { Button } from "@/components/ui/Button";

/**
 * Purchase and Customize currently route to the contact page with an
 * `intent` + `template` query string. This is the integration seam:
 * when the OA7 Sales System exists, these two hrefs are the only thing
 * that needs to change (e.g. to `/checkout?template=slug` and
 * `/customize?template=slug`) — no other component depends on how the
 * purchase flow is implemented.
 */
export function TemplateCTAButtons({ template, size = "lg" }: { template: Template; size?: "md" | "lg" }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button
        href={`/contact?template=${template.slug}&intent=purchase`}
        size={size}
        iconLeft={<ShoppingCart className="h-4 w-4" />}
      >
        {template.price !== null ? `Purchase — $${template.price}` : "Request quote"}
      </Button>
      <Button
        href={`/contact?template=${template.slug}&intent=customize`}
        variant="outline"
        size={size}
        iconLeft={<Wrench className="h-4 w-4" />}
      >
        Customize this template
      </Button>
      <Button
        href={template.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="ghost"
        size={size}
        iconRight={<ExternalLink className="h-4 w-4" />}
      >
        Live demo
      </Button>
    </div>
  );
}
