"use client";

import { motion } from "framer-motion";
import type { Template } from "@/data/templates";
import { TemplateCard } from "@/components/ui/TemplateCard";

interface TemplateGridProps {
  templates: Template[];
  onQuickView?: (template: Template) => void;
}

export function TemplateGrid({ templates, onQuickView }: TemplateGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {templates.map((template, i) => (
        <motion.div
          key={template.slug}
          layout
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, delay: (i % 6) * 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <TemplateCard template={template} onQuickView={onQuickView} />
        </motion.div>
      ))}
    </div>
  );
}
