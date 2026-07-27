import { ExternalLink, Rocket } from "lucide-react";
import type { Project } from "@/data/projects";
import { Button } from "@/components/ui/Button";

export function ProjectCTAButtons({ project, size = "lg" }: { project: Project; size?: "md" | "lg" }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button
        href={`/contact?project=${project.slug}&intent=similar-project`}
        size={size}
        iconLeft={<Rocket className="h-4 w-4" />}
      >
        Start a similar project
      </Button>
      {project.liveUrl && (
        <Button
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          size={size}
          iconRight={<ExternalLink className="h-4 w-4" />}
        >
          Visit live site
        </Button>
      )}
    </div>
  );
}
