"use client";

import { useEffect, useMemo, useState } from "react";
import type { Project, ProjectStatus } from "@/data/projects";
import { PROJECT_CATEGORIES } from "@/data/projects";
import { SearchBar } from "@/components/ui/SearchBar";
import { CategoryPills } from "@/components/ui/CategoryPills";
import { SortDropdown } from "@/components/ui/SortDropdown";
import { ProjectGrid } from "@/components/ui/ProjectGrid";
import { EmptyState } from "@/components/ui/EmptyState";
import { Pagination } from "@/components/ui/Pagination";

const PAGE_SIZE = 6;

type SortOption = "status" | "name";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "status", label: "Completed first" },
  { value: "name", label: "Name (A–Z)" },
];

const STATUS_ORDER: Record<ProjectStatus, number> = {
  Completed: 0,
  "Closed testing": 1,
  "In development": 2,
};

function sortProjects(projects: Project[], sort: SortOption): Project[] {
  const list = [...projects];
  if (sort === "name") return list.sort((a, b) => a.name.localeCompare(b.name));
  return list.sort((a, b) => STATUS_ORDER[a.status] - STATUS_ORDER[b.status]);
}

export function PortfolioExplorer({ projects }: { projects: Project[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [sort, setSort] = useState<SortOption>("status");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [search, category, sort]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.summary.toLowerCase().includes(query) ||
        (p.domain ?? "").toLowerCase().includes(query) ||
        p.status.toLowerCase().includes(query) ||
        p.stack.some((tech) => tech.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [projects, search, category]);

  const sorted = useMemo(() => sortProjects(filtered, sort), [filtered, sort]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const paginated = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function resetFilters() {
    setSearch("");
    setCategory("All");
    setSort("status");
  }

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <SearchBar value={search} onChange={setSearch} placeholder="Search projects..." />
        <SortDropdown value={sort} options={SORT_OPTIONS} onChange={setSort} />
      </div>

      <div className="mt-5">
        <CategoryPills categories={PROJECT_CATEGORIES} active={category} onChange={setCategory} label="Filter projects by category" />
      </div>

      <p className="mt-6 text-sm text-secondary-500" aria-live="polite">
        {`Showing ${paginated.length} of ${sorted.length} project${sorted.length === 1 ? "" : "s"}`}
      </p>

      <div className="mt-6">
        {sorted.length === 0 ? (
          <div className="grid grid-cols-1">
            <EmptyState onReset={resetFilters} title="No projects match those filters" />
          </div>
        ) : (
          <ProjectGrid projects={paginated} />
        )}
      </div>

      <Pagination currentPage={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
}
