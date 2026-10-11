import { PROCESS_STEPS } from "@/data/process";
import { ProcessTimeline } from "@/components/shared/ProcessTimeline";

export function Process() {
  return (
    <ProcessTimeline
      eyebrow="How I work"
      title="A simple process from idea to release."
      description="The approach I follow on my own projects."
      steps={PROCESS_STEPS}
    />
  );
}
