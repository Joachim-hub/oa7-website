import { SectionHeader } from "@/components/shared/SectionHeader";

interface FounderSectionProps {
  name: string;
  role: string;
  bio: string;
}

export function FounderSection({ name, role, bio }: FounderSectionProps) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <section className="bg-surface-raised py-24 md:py-30" aria-labelledby="founder-heading">
      <div className="container-oa7">
        <SectionHeader eyebrow="Leadership" title="Founder" />

        <div className="mt-12 flex flex-col items-start gap-6 rounded-lg border border-border-subtle bg-surface-base p-8 sm:flex-row sm:items-center">
          <div
            className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-accent-400/10 text-2xl font-semibold text-accent-ink"
            aria-hidden="true"
          >
            {initial}
          </div>
          <div>
            <p className="text-lg font-semibold text-secondary-0">{name}</p>
            <p className="text-sm text-secondary-500">{role}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-secondary-400">{bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
