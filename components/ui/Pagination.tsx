"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Templates pagination" className="mt-12 flex items-center justify-center gap-1.5">
      <button
        type="button"
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-9 w-9 items-center justify-center rounded text-secondary-400 hover:text-secondary-0 disabled:opacity-30 disabled:pointer-events-none"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onChange(page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded text-sm font-medium transition-colors",
            page === currentPage
              ? "bg-accent-400 text-ink"
              : "text-secondary-400 hover:bg-secondary-200/8 hover:text-secondary-0"
          )}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-9 w-9 items-center justify-center rounded text-secondary-400 hover:text-secondary-0 disabled:opacity-30 disabled:pointer-events-none"
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}
