import { SectionTitle } from "@/components/atoms/SectionTitle";
import { ExperienceItem } from "@/components/molecules/ExperienceItem";
import type { CvExperienceItemViewModel } from "@/types/cv";

type ExperienceSectionProps = {
  title: string;
  items: CvExperienceItemViewModel[];
  emptyMessage: string;
};

export function ExperienceSection({
  title,
  items,
  emptyMessage,
}: ExperienceSectionProps) {
  return (
    <section className="mt-8 print:mt-6">
      <SectionTitle title={title} />
      {items.length > 0 ? (
        <ul className="mt-3 space-y-4">
          {items.map((item) => (
            <ExperienceItem key={item.id} item={item} />
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
