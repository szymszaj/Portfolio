type SectionTitleProps = {
  title: string;
};

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100 print:text-base">
      {title}
    </h2>
  );
}
