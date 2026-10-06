import { SectionTitle } from "@/components/atoms/SectionTitle";
import { LanguageItem } from "@/components/molecules/LanguageItem";
import type { CvLanguageViewModel } from "@/types/cv";

type LanguagesSectionProps = {
  title: string;
  items: CvLanguageViewModel[];
  emptyMessage: string;
};

export function LanguagesSection({
  title,
  items,
  emptyMessage,
}: LanguagesSectionProps) {
  return (
    <section className="mt-8 print:mt-6">
      <SectionTitle title={title} />
      {items.length > 0 ? (
        <ul className="mt-3 max-w-xs space-y-1">
          {items.map((item) => (
            <LanguageItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          {emptyMessage}
        </p>
      )}
    </section>
  );
}
