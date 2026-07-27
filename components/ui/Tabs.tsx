"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultTabId?: string;
  className?: string;
  ariaLabel?: string;
}

export function Tabs({ items, defaultTabId, className, ariaLabel = "Page information" }: TabsProps) {
  const [activeId, setActiveId] = useState(defaultTabId ?? items[0]?.id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  function focusTab(id: string) {
    setActiveId(id);
    tabRefs.current[id]?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent, index: number) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();

    if (e.key === "Home") return focusTab(items[0]?.id ?? "");
    if (e.key === "End") return focusTab(items[items.length - 1]?.id ?? "");

    const delta = e.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + delta + items.length) % items.length;
    focusTab(items[nextIndex]?.id ?? "");
  }

  return (
    <div className={className}>
      <div role="tablist" aria-label={ariaLabel} className="flex flex-wrap gap-1 border-b border-border-subtle">
        {items.map((item, index) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[item.id] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={isActive}
              aria-controls={`tabpanel-${item.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveId(item.id)}
              onKeyDown={(e) => onKeyDown(e, index)}
              className={cn(
                "relative px-4 py-3 text-sm font-medium transition-colors",
                isActive ? "text-secondary-0" : "text-secondary-500 hover:text-secondary-200"
              )}
            >
              {item.label}
              {isActive && (
                <span className="absolute inset-x-0 -bottom-px h-0.5 bg-accent-400" aria-hidden="true" />
              )}
            </button>
          );
        })}
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          role="tabpanel"
          id={`tabpanel-${item.id}`}
          aria-labelledby={`tab-${item.id}`}
          hidden={item.id !== activeId}
          className="pt-6"
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
