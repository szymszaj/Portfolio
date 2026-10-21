import type { LucideIcon } from "lucide-react";

type SectionTitleProps = {
  title: string;
  icon: LucideIcon;
};

export function SectionTitle({ title, icon: Icon }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent-soft text-accent">
        <Icon className="h-4 w-4" />
      </span>
      <h2 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
