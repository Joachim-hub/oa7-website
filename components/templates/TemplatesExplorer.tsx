"use client";

import { useEffect, useMemo, useState } from "react";
import type { Template } from "@/data/templates";
import { TEMPLATE_CATEGORIES } from "@/data/templates";
import { SearchBar } from "@/components/ui/SearchBar";
import { CategoryPills } from "@/components/ui/CategoryPills";
import { SortDropdown } from "@/components/ui/SortDropdown";
import { TemplateGrid } from "@/components/ui/TemplateGrid";
import { EmptyState } from "@/components/ui/EmptyState";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";
import { Pagination } from "@/components/ui/Pagination";
import { TemplatePreview } from "@/components/ui/TemplatePreview";

const PAGE_SIZE = 6;

type SortOption = "featured" | "newest" | "popular" | "price-asc" | "price-desc";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "popular", label: "Most popular" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
];

function sortTemplates(templates: Template[], sort: SortOption): Template[] {
  const list = [...templates];
  switch (sort) {
    case "newest":
      return list.sort((a, b) => +new Date(b.releasedAt) - +new Date(a.releasedAt));
    case "popular":
      return list.sort((a, b) => b.popularity - a.popularity);
    case "price-asc":
      return list.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
    case "price-desc":
      return list.sort((a, b) => (b.price ?? -1) - (a.price ?? -1));
    case "featured":
    default:
      return list.sort((a, b) => Number(b.featured) - Number(a.featured) || b.popularity - a.popularity);
  }
}

export function TemplatesExplorer({ templates }: { templates: Template[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [sort, setSort] = useState<SortOption>("featured");
  const [page, setPage] = useState(1);
  const [quickViewTemplate, setQuickViewTemplate] = useState<Template | null>(null);

  // Simulated initial fetch — this is where the OA7 Sales System API call
  // will eventually go. The skeleton state is real and reusable, not decorative.
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [search, category, sort]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return templates.filter((t) => {
      const matchesCategory = category === "All" || t.category === category;
      const matchesSearch =
        !query ||
        t.name.toLowerCase().includes(query) ||
        t.shortDescription.toLowerCase().includes(query) ||
        t.tech.some((tech) => tech.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [templates, search, category]);

  const sorted = useMemo(() => sortTemplates(filtered, sort), [filtered, sort]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const paginated = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function resetFilters() {
    setSearch("");
    setCategory("All");
    setSort("featured");
  }

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <SearchBar value={search} onChange={setSearch} />
        <SortDropdown value={sort} options={SORT_OPTIONS} onChange={setSort} />
      </div>

      <div className="mt-5">
        <CategoryPills categories={TEMPLATE_CATEGORIES} active={category} onChange={setCategory} label="Filter templates by category" />
      </div>

      <p className="mt-6 text-sm text-secondary-500" aria-live="polite">
        {isLoading
          ? "Loading templates…"
          : `Showing ${paginated.length} of ${sorted.length} template${sorted.length === 1 ? "" : "s"}`}
      </p>

      <div className="mt-6">
        {isLoading ? (
          <LoadingSkeleton count={6} />
        ) : sorted.length === 0 ? (
          <div className="grid grid-cols-1">
            <EmptyState onReset={resetFilters} />
          </div>
        ) : (
          <TemplateGrid templates={paginated} onQuickView={setQuickViewTemplate} />
        )}
      </div>

      {!isLoading && (
        <Pagination currentPage={page} totalPages={totalPages} onChange={setPage} />
      )}

      <TemplatePreview template={quickViewTemplate} onClose={() => setQuickViewTemplate(null)} />
    </div>
  );
}
