import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Defaults to "h2" (a section heading). Pass "h1" only when this is
   * the page's single top-level heading — some index pages (Services,
   * Industries, Templates, Portfolio) use SectionHeader as their only
   * heading and need a real h1, not just a visually-similar h2. */
  as?: "h1" | "h2";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as = "h2",
}: SectionHeaderProps) {
  const Heading = as;

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Heading className="text-3xl font-semibold tracking-tight text-secondary-0 md:text-4xl">
        {title}
      </Heading>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-secondary-400">{description}</p>
      )}
    </div>
  );
}
