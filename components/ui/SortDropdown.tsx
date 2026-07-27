"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SortOptionConfig<T extends string> {
  value: T;
  label: string;
}

interface SortDropdownProps<T extends string> {
  value: T;
  options: SortOptionConfig<T>[];
  onChange: (value: T) => void;
}

export function SortDropdown<T extends string>({ value, options, onChange }: SortDropdownProps<T>) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const activeLabel = options.find((o) => o.value === value)?.label ?? "";

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex h-11 items-center gap-2 whitespace-nowrap rounded border border-border-DEFAULT bg-surface-raised px-4 text-sm font-medium text-secondary-100 hover:border-secondary-500"
      >
        Sort: {activeLabel}
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")} aria-hidden="true" />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Sort options"
          className="absolute right-0 top-full z-20 mt-2 w-56 rounded-lg border border-border-DEFAULT bg-surface-raised p-1.5 shadow-raised"
        >
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                role="option"
                aria-selected={value === option.value}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm text-secondary-200 hover:bg-secondary-200/8"
              >
                {option.label}
                {value === option.value && <Check className="h-4 w-4 text-accent-ink" aria-hidden="true" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
