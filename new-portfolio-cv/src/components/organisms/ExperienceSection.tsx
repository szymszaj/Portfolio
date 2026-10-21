import { Briefcase } from "lucide-react";

import { Reveal } from "@/components/atoms/Reveal";
import { SectionShell } from "@/components/atoms/SectionShell";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { ExperienceItem } from "@/components/molecules/ExperienceItem";
import type { CvExperienceItemViewModel } from "@/types/cv";

type ExperienceSectionProps = {
  id: string;
  title: string;
  items: CvExperienceItemViewModel[];
  emptyMessage: string;
};

export function ExperienceSection({
  id,
  title,
  items,
  emptyMessage,
}: ExperienceSectionProps) {
  return (
    <SectionShell id={id} tone="surface">
      <Reveal>
        <SectionTitle title={title} icon={Briefcase} />
        {items.length > 0 ? (
          <ul className="mt-6">
            {items.map((item) => (
              <ExperienceItem key={item.id} item={item} />
            ))}
          </ul>
        ) : (
          <p className="mt-5 text-sm text-muted">{emptyMessage}</p>
        )}
      </Reveal>
    </SectionShell>
  );
}
