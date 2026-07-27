"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/shared/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-9 w-9 items-center justify-center rounded text-secondary-400 transition-colors hover:text-secondary-0"
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      {theme === "dark" ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  );
}
