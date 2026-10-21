import type { ReactNode } from "react";

type Tone = "paper" | "surface" | "accent";

const TONE_CLASSES: Record<Tone, string> = {
  paper: "bg-paper",
  surface: "bg-surface",
  accent: "bg-accent-soft",
};

type SectionShellProps = {
  id: string;
  tone: Tone;
  children: ReactNode;
};

export function SectionShell({ id, tone, children }: SectionShellProps) {
  return (
    <div
      id={id}
      className={`scroll-mt-24 border-t border-line ${TONE_CLASSES[tone]} print:border-line print:bg-transparent`}
    >
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20">{children}</div>
    </div>
  );
}
