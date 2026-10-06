import { SectionTitle } from "@/components/atoms/SectionTitle";
import { EducationItem } from "@/components/molecules/EducationItem";
import type { CvEducationItemViewModel } from "@/types/cv";

type EducationSectionProps = {
  title: string;
  items: CvEducationItemViewModel[];
  emptyMessage: string;
};

export function EducationSection({
  title,
  items,
  emptyMessage,
}: EducationSectionProps) {
  return (
    <section className="mt-8 print:mt-6">
      <SectionTitle title={title} />
      {items.length > 0 ? (
        <ul className="mt-3 space-y-3">
          {items.map((item) => (
            <EducationItem key={item.id} item={item} />
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
