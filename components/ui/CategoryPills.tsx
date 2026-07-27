"use client";

import { cn } from "@/lib/utils";

interface CategoryPillsProps {
  categories: readonly string[];
  active: string;
  onChange: (category: string) => void;
  label?: string;
}

export function CategoryPills({ categories, active, onChange, label = "Filter by category" }: CategoryPillsProps) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(category)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ease-out-expo",
              isActive
                ? "border-accent-400 bg-accent-400/10 text-accent-ink"
                : "border-border-DEFAULT text-secondary-400 hover:border-secondary-500 hover:text-secondary-100"
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
