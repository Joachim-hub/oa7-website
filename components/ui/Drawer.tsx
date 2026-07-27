"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFocusTrap } from "@/hooks/useFocusTrap";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  side?: "left" | "right";
  children: React.ReactNode;
  className?: string;
}

export function Drawer({ isOpen, onClose, title, side = "right", children, className }: DrawerProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useFocusTrap(panelRef, isOpen, onClose);

  useEffect(() => {
    if (isOpen) closeButtonRef.current?.focus();
  }, [isOpen]);

  if (!mounted) return null;

  const offscreen = side === "right" ? "100%" : "-100%";

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
            initial={{ x: offscreen }}
            animate={{ x: 0 }}
            exit={{ x: offscreen }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "absolute top-0 flex h-full w-full max-w-sm flex-col border-border-DEFAULT bg-surface-raised shadow-raised",
              side === "right" ? "right-0 border-l" : "left-0 border-r",
              className
            )}
          >
            <div className="flex items-center justify-between border-b border-border-subtle px-6 py-4">
              <h2 id="drawer-title" className="font-semibold text-secondary-0">
                {title}
              </h2>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded text-secondary-400 hover:text-secondary-0"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
