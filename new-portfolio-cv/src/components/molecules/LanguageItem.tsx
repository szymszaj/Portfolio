import type { CvLanguageViewModel } from "@/types/cv";

type LanguageItemProps = {
  item: CvLanguageViewModel;
};

export function LanguageItem({ item }: LanguageItemProps) {
  return (
    <li className="flex items-baseline justify-between gap-x-4">
      <p className="text-slate-900 dark:text-slate-100">{item.jezyk}</p>
      {item.poziom && (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {item.poziom}
        </p>
      )}
    </li>
  );
}
