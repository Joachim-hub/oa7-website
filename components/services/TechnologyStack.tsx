import { SectionHeader } from "@/components/shared/SectionHeader";
import { Badge } from "@/components/ui/Badge";

interface TechnologyStackProps {
  stack: string[];
  eyebrow?: string;
  title?: string;
}

export function TechnologyStack({
  stack,
  eyebrow = "Under the hood",
  title = "Technology stack",
}: TechnologyStackProps) {
  return (
    <section className="py-16 md:py-24 lg:py-30" aria-labelledby="tech-stack-heading">
      <div className="container-oa7">
        <SectionHeader id="tech-stack-heading" eyebrow={eyebrow} title={title} />
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
