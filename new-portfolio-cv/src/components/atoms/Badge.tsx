type BadgeProps = {
  label: string;
};

export function Badge({ label }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 ring-1 ring-inset ring-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700 print:bg-transparent print:px-0 print:ring-0 print:after:content-['_•'] print:last:after:content-none">
      {label}
    </span>
  );
}
