"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = (resolvedTheme ?? "dark") === "dark";

  return (
    <button
      aria-label="Toggle color mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:border-white/40 hover:bg-white/10"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
