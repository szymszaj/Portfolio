import { Badge } from "@/components/atoms/Badge";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import type { CvSkillViewModel } from "@/types/cv";

type SkillsSectionProps = {
  title: string;
  items: CvSkillViewModel[];
  emptyMessage: string;
};

export function SkillsSection({
  title,
  items,
  emptyMessage,
}: SkillsSectionProps) {
  return (
    <section className="mt-8 print:mt-6">
      <SectionTitle title={title} />
      {items.length > 0 ? (
        <ul className="mt-3 flex flex-wrap gap-2 print:gap-0">
          {items.map((item) => (
            <li key={item.id}>
              <Badge label={item.nazwa} />
            </li>
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
