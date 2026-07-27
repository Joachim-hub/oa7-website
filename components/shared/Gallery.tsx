"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Generic labeled-panel gallery. Used on both the template details page
 * and the portfolio case study page — real screenshots aren't available
 * yet, so panels are honestly labeled placeholders rather than stock art.
 */
export function Gallery({ labels, title }: { labels: string[]; title: string }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div
        className="signal-grid-bg relative flex aspect-video items-center justify-center overflow-hidden rounded-lg border border-border-subtle bg-surface-overlay"
        aria-live="polite"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-sm font-medium text-secondary-600"
          >
            {title}: {labels[active]}
          </motion.span>
        </AnimatePresence>
      </div>

      <div role="group" aria-label="Screenshot thumbnails" className="mt-3 grid grid-cols-4 gap-3">
        {labels.map((label, i) => (
          <button
            key={label}
            type="button"
            aria-pressed={i === active}
            aria-label={`View ${label} screenshot`}
            onClick={() => setActive(i)}
            className={cn(
              "signal-grid-bg flex aspect-video items-center justify-center rounded-md border bg-surface-overlay text-[11px] text-secondary-600 transition-colors",
              i === active ? "border-accent-400" : "border-border-subtle hover:border-secondary-600"
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
