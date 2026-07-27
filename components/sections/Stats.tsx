import { StatCounter } from "@/components/shared/StatCounter";

const STATS = [
  { value: 40, suffix: "+", label: "Projects delivered" },
  { value: 98, suffix: "%", label: "Client retention" },
  { value: 12, suffix: "", label: "Industries served" },
  { value: 3, suffix: "x", label: "Avg. faster delivery" },
];

export function Stats() {
  return (
    <section className="border-y border-border-subtle bg-surface-raised py-16">
      <div className="container-oa7 grid grid-cols-2 gap-8 md:grid-cols-4">
        {STATS.map((stat) => (
          <StatCounter key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
