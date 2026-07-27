import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface EmptyStateProps {
  onReset: () => void;
}

export function EmptyState({ onReset }: EmptyStateProps) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center rounded-lg border border-dashed border-border-strong py-20 text-center">
      <SearchX className="h-8 w-8 text-secondary-600" aria-hidden="true" />
      <h3 className="mt-4 font-semibold text-secondary-0">No templates match those filters</h3>
      <p className="mt-1.5 max-w-xs text-sm text-secondary-500">
        Try a different search term or clear your filters to see everything we offer.
      </p>
      <Button variant="outline" size="sm" className="mt-6" onClick={onReset}>
        Clear filters
      </Button>
    </div>
  );
}
