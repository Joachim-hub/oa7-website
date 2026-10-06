import { SectionHeader } from "@/components/shared/SectionHeader";
import { Badge } from "@/components/ui/Badge";

export function TechnologyStack({ stack }: { stack: string[] }) {
  return (
    <section className="py-16 md:py-24 lg:py-30" aria-labelledby="tech-stack-heading">
      <div className="container-oa7">
        <SectionHeader eyebrow="Under the hood" title="Technology stack" />
        <ul className="mt-8 md:mt-12 flex flex-wrap gap-2.5">
          {stack.map((tech) => (
            <li key={tech}>
              <Badge variant="neutral" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
