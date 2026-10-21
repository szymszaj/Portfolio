type BadgeProps = {
  label: string;
};

export function Badge({ label }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded border border-line bg-surface px-2.5 py-1 text-sm text-ink transition-colors hover:border-accent/50 print:border-line print:bg-transparent">
      {label}
    </span>
  );
}
