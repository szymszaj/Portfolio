"use client";

import { Printer } from "lucide-react";

type PrintButtonProps = {
  label: string;
};

export function PrintButton({ label }: PrintButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded border border-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
    >
      <Printer className="h-4 w-4" />
    </button>
  );
}
