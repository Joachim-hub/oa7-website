interface LegalSectionProps {
  title: string;
  children: React.ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-secondary-0">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-secondary-400 [&_a]:text-accent-ink [&_a]:underline [&_a]:decoration-border-strong [&_a]:underline-offset-4 [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1.5">
        {children}
      </div>
    </section>
  );
}
