"use client";

import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-400 text-ink hover:bg-accent-300 active:bg-accent-500 shadow-glow hover:shadow-glow-strong",
  secondary:
    "bg-secondary-200 text-ink hover:bg-secondary-100 active:bg-secondary-300",
  outline:
    "border border-border-strong text-secondary-100 hover:border-accent-400 hover:text-accent-ink bg-transparent",
  ghost:
    "text-secondary-200 hover:bg-secondary-200/8 hover:text-secondary-0",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-6 text-sm gap-2",
  lg: "h-13 px-8 text-base gap-2.5",
};

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  isLoading?: boolean;
  children: ReactNode;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const baseStyles =
  "inline-flex items-center justify-center rounded font-button font-semibold tracking-[0.01em] transition-all duration-200 ease-out-expo disabled:opacity-40 disabled:pointer-events-none whitespace-nowrap select-none";

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      iconLeft,
      iconRight,
      isLoading = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      baseStyles,
      VARIANT_STYLES[variant],
      SIZE_STYLES[size],
      fullWidth && "w-full",
      className
    );

    const content = (
      <>
        {isLoading ? (
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
          />
        ) : (
          iconLeft
        )}
        <span>{children}</span>
        {!isLoading && iconRight}
      </>
    );

    if ("href" in props && props.href) {
      const { href, ...anchorProps } = props as ButtonAsAnchor;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          aria-busy={isLoading || undefined}
          {...anchorProps}
        >
          {content}
        </a>
      );
    }

    const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        disabled={isLoading || buttonProps.disabled}
        aria-busy={isLoading || undefined}
        {...buttonProps}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
