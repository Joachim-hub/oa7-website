import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind class lists safely, resolving conflicting utility classes
 * in favour of the last one supplied.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number with a "+" suffix for stat counters, e.g. 120 -> "120+"
 */
export function formatStat(value: number, suffix = "+") {
  return `${value}${suffix}`;
}
