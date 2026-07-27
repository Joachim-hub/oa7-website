"use client";

import { useEffect, useMemo, useState } from "react";
import type { Project } from "@/data/projects";
import { PROJECT_CATEGORIES } from "@/data/projects";
import { SearchBar } from "@/components/ui/SearchBar";
import { CategoryPills } from "@/components/ui/CategoryPills";
import { SortDropdown } from "@/components/ui/SortDropdown";
import { ProjectGrid } from "@/components/ui/ProjectGrid";
import { EmptyState } from "@/components/ui/EmptyState";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";
import { Pagination } from "@/components/ui/Pagination";

const PAGE_SIZE = 4;

type SortOption = "featured" | "newest" | "popular";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "popular", label: "Most popular" },
];

function sortProjects(projects: Project[], sort: SortOption): Project[] {
  const list = [...projects];
  switch (sort) {
    case "newest":
      return list.sort((a, b) => +new Date(b.date) - +new Date(a.date));
    case "popular":
      return list.sort((a, b) => b.popularity - a.popularity);
    case "featured":
    default:
      return list.sort((a, b) => Number(b.featured) - Number(a.featured) || b.popularity - a.popularity);
  }
}

export function PortfolioExplorer({ projects }: { projects: Project[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [sort, setSort] = useState<SortOption>("featured");
  const [page, setPage] = useState(1);

  // Simulated initial fetch — mirrors the Templates explorer's loading
  // pattern so both pages behave identically once real data arrives.
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
    return projects.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.summary.toLowerCase().includes(query) ||
        p.industry.toLowerCase().includes(query) ||
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
    setSort("featured");
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
        {isLoading
          ? "Loading projects…"
          : `Showing ${paginated.length} of ${sorted.length} project${sorted.length === 1 ? "" : "s"}`}
      </p>

      <div className="mt-6">
        {isLoading ? (
          <LoadingSkeleton count={4} columns="cols-2" label="projects" />
        ) : sorted.length === 0 ? (
          <div className="grid grid-cols-1">
            <EmptyState onReset={resetFilters} />
          </div>
        ) : (
          <ProjectGrid projects={paginated} />
        )}
      </div>

      {!isLoading && (
        <Pagination currentPage={page} totalPages={totalPages} onChange={setPage} />
      )}
    </div>
  );
}
