import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverable?: boolean;
}

export function Card({ children, hoverable = false, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border-subtle bg-surface-raised p-6 shadow-card",
        hoverable &&
          "transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-accent-400/30 hover:shadow-glow",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mb-4 flex items-start justify-between gap-4", className)}>{children}</div>;
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn("text-lg font-semibold text-secondary-0", className)}>{children}</h3>;
}

export function CardDescription({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-sm text-secondary-400", className)}>{children}</p>;
}

export function CardFooter({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mt-6 flex items-center gap-3", className)}>{children}</div>;
}
