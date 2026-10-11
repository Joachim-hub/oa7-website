import { Mail } from "lucide-react";
import type { Project } from "@/data/projects";
import { Button } from "@/components/ui/Button";

export function ProjectCTAButtons({ project, size = "lg" }: { project: Project; size?: "md" | "lg" }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button
        href={`/contact?project=${project.slug}&intent=inquiry`}
        size={size}
        iconLeft={<Mail className="h-4 w-4" />}
      >
        Ask about this project
      </Button>
      {project.links?.map((link) => (
        <Button key={link.href} href={link.href} variant="outline" size={size}>
          {link.label}
        </Button>
      ))}
    </div>
  );
}
