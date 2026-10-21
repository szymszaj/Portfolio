import { GraduationCap } from "lucide-react";

import { Reveal } from "@/components/atoms/Reveal";
import { SectionShell } from "@/components/atoms/SectionShell";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { EducationItem } from "@/components/molecules/EducationItem";
import type { CvEducationItemViewModel } from "@/types/cv";

type EducationSectionProps = {
  id: string;
  title: string;
  items: CvEducationItemViewModel[];
  emptyMessage: string;
};

export function EducationSection({
  id,
  title,
  items,
  emptyMessage,
}: EducationSectionProps) {
  return (
    <SectionShell id={id} tone="paper">
      <Reveal>
        <SectionTitle title={title} icon={GraduationCap} />
        {items.length > 0 ? (
          <ul className="mt-6">
            {items.map((item) => (
              <EducationItem key={item.id} item={item} />
            ))}
          </ul>
        ) : (
          <p className="mt-5 text-sm text-muted">{emptyMessage}</p>
        )}
      </Reveal>
    </SectionShell>
  );
}
