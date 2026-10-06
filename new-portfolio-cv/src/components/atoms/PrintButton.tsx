"use client";

type PrintButtonProps = {
  label: string;
};

export function PrintButton({ label }: PrintButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
    >
      {label}
    </button>
  );
}
