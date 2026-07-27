import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "neutral" | "accent" | "success" | "warning" | "error";

const VARIANT_STYLES: Record<BadgeVariant, string> = {
  neutral: "bg-secondary-200/10 text-secondary-200 border-border-DEFAULT",
  accent: "bg-accent-400/10 text-accent-ink border-accent-400/30",
  success: "bg-success/10 text-success-ink border-success/30",
  warning: "bg-warning/10 text-warning-ink border-warning/30",
  error: "bg-error/10 text-error-ink border-error/30",
};

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        VARIANT_STYLES[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
