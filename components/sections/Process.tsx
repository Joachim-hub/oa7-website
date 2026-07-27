import { PROCESS_STEPS } from "@/data/process";
import { ProcessTimeline } from "@/components/shared/ProcessTimeline";

export function Process() {
  return (
    <ProcessTimeline
      eyebrow="How we work"
      title="A process built for visibility, not surprises."
      description="You'll always know what stage your project is in and what happens next."
      steps={PROCESS_STEPS}
    />
  );
}
