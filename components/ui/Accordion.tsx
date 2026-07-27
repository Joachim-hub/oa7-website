"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([]);

  function toggle(id: string) {
    setOpenIds((current) => {
      const isOpen = current.includes(id);
      if (isOpen) return current.filter((i) => i !== id);
      return allowMultiple ? [...current, id] : [id];
    });
  }

  return (
    <div className={cn("divide-y divide-border-subtle border-y border-border-subtle", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const panelId = `accordion-panel-${item.id}`;
        const buttonId = `accordion-trigger-${item.id}`;

        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="font-medium text-secondary-0">{item.question}</span>
                <Plus
                  className={cn(
                    "h-5 w-5 flex-shrink-0 text-accent-ink transition-transform duration-300 ease-out-expo",
                    isOpen && "rotate-45"
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 pr-10 text-sm leading-relaxed text-secondary-500">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
