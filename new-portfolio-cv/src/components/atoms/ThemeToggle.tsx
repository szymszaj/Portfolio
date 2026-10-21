"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemeToggleProps = {
  labelToLight: string;
  labelToDark: string;
};

export function ThemeToggle({ labelToLight, labelToDark }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  }

  const label = isDark ? labelToLight : labelToDark;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded border border-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
