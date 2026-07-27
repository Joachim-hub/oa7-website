"use client";

import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = "Search templates..." }: SearchBarProps) {
  return (
    <div className="relative flex-1">
      <Search
        className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary-500"
        aria-hidden="true"
      />
      <input
        type="search"
        role="searchbox"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search templates"
        className="h-11 w-full rounded border border-border-DEFAULT bg-surface-raised pl-10 pr-10 text-sm text-secondary-0 placeholder:text-secondary-600 focus:border-accent-400"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-secondary-500 hover:text-secondary-0"
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
