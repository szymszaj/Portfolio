import type { CvLanguageViewModel } from "@/types/cv";

type LanguageItemProps = {
  item: CvLanguageViewModel;
};

export function LanguageItem({ item }: LanguageItemProps) {
  return (
    <li className="flex items-baseline justify-between gap-x-4 border-b border-line/70 py-2 last:border-b-0">
      <p className="text-ink">{item.jezyk}</p>
      {item.poziom && <p className="text-sm text-muted">{item.poziom}</p>}
    </li>
  );
}
