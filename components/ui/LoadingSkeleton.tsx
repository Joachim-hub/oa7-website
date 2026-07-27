import { cn } from "@/lib/utils";

export function TemplateCardSkeleton({ aspect = "aspect-[4/3]" }: { aspect?: string }) {
  return (
    <div
      className="animate-pulse overflow-hidden rounded-lg border border-border-subtle bg-surface-raised"
      aria-hidden="true"
    >
      <div className={cn(aspect, "bg-surface-overlay")} />
      <div className="p-5">
        <div className="h-4 w-20 rounded-full bg-secondary-200/10" />
        <div className="mt-3 h-5 w-32 rounded bg-secondary-200/10" />
        <div className="mt-3 h-3 w-full rounded bg-secondary-200/8" />
        <div className="mt-2 h-3 w-4/5 rounded bg-secondary-200/8" />
        <div className="mt-5 h-9 w-full rounded border border-border-subtle" />
      </div>
    </div>
  );
}

interface LoadingSkeletonProps {
  count?: number;
  columns?: "cols-3" | "cols-2";
  label?: string;
}

export function LoadingSkeleton({ count = 6, columns = "cols-3", label = "templates" }: LoadingSkeletonProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 sm:grid-cols-2",
        columns === "cols-3" && "lg:grid-cols-3"
      )}
      role="status"
      aria-label={`Loading ${label}`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <TemplateCardSkeleton key={i} aspect={columns === "cols-2" ? "aspect-[16/10]" : "aspect-[4/3]"} />
      ))}
      <span className="sr-only">Loading {label}…</span>
    </div>
  );
}
