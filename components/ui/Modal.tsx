"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFocusTrap } from "@/hooks/useFocusTrap";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ isOpen, onClose, title, children, className }: ModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  // Portals need a DOM node that only exists client-side, so we defer
  // rendering until after mount to keep server and client markup in sync.
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useFocusTrap(panelRef, isOpen, onClose);

  useEffect(() => {
    if (isOpen) closeButtonRef.current?.focus();
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
            aria-labelledby="modal-title"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-border-DEFAULT bg-surface-raised shadow-raised",
              className
            )}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border-subtle bg-surface-raised px-6 py-4">
              <h2 id="modal-title" className="font-semibold text-secondary-0">
                {title}
              </h2>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded text-secondary-400 hover:text-secondary-0"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="p-6">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
