"use client";

import { useEffect, useMemo, useState } from "react";
import type { Template } from "@/data/templates";
import { TEMPLATE_CATEGORIES } from "@/data/templates";
import { SearchBar } from "@/components/ui/SearchBar";
import { CategoryPills } from "@/components/ui/CategoryPills";
import { SortDropdown } from "@/components/ui/SortDropdown";
import { TemplateGrid } from "@/components/ui/TemplateGrid";
import { EmptyState } from "@/components/ui/EmptyState";
import { Pagination } from "@/components/ui/Pagination";
import { TemplatePreview } from "@/components/ui/TemplatePreview";

const PAGE_SIZE = 6;

type SortOption = "name" | "category";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "name", label: "Name (A–Z)" },
  { value: "category", label: "Category" },
];

function sortTemplates(templates: Template[], sort: SortOption): Template[] {
  const list = [...templates];
  if (sort === "category") {
    return list.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
  }
  return list.sort((a, b) => a.name.localeCompare(b.name));
}

export function TemplatesExplorer({ templates }: { templates: Template[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [sort, setSort] = useState<SortOption>("name");
  const [page, setPage] = useState(1);
  const [quickViewTemplate, setQuickViewTemplate] = useState<Template | null>(null);

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
        t.category.toLowerCase().includes(query) ||
        t.shortDescription.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [templates, search, category]);

  const sorted = useMemo(() => sortTemplates(filtered, sort), [filtered, sort]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const paginated = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function resetFilters() {
    setSearch("");
    setCategory("All");
    setSort("name");
  }

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <SearchBar value={search} onChange={setSearch} />
        <SortDropdown value={sort} options={SORT_OPTIONS} onChange={setSort} />
      </div>

      <div className="mt-5">
        <CategoryPills categories={TEMPLATE_CATEGORIES} active={category} onChange={setCategory} label="Filter concepts by category" />
      </div>

      <p className="mt-6 text-sm text-secondary-500" aria-live="polite">
        {`Showing ${paginated.length} of ${sorted.length} concept${sorted.length === 1 ? "" : "s"}`}
      </p>

      <div className="mt-6">
        {sorted.length === 0 ? (
          <div className="grid grid-cols-1">
            <EmptyState onReset={resetFilters} title="No concepts match those filters" />
          </div>
        ) : (
          <TemplateGrid templates={paginated} onQuickView={setQuickViewTemplate} />
        )}
      </div>

      <Pagination currentPage={page} totalPages={totalPages} onChange={setPage} />

      <TemplatePreview template={quickViewTemplate} onClose={() => setQuickViewTemplate(null)} />
    </div>
  );
}
