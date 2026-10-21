import { Sparkles } from "lucide-react";

import { Badge } from "@/components/atoms/Badge";
import { Reveal } from "@/components/atoms/Reveal";
import { SectionShell } from "@/components/atoms/SectionShell";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import type { CvSkillViewModel } from "@/types/cv";

type SkillsSectionProps = {
  id: string;
  title: string;
  items: CvSkillViewModel[];
  emptyMessage: string;
};

export function SkillsSection({
  id,
  title,
  items,
  emptyMessage,
}: SkillsSectionProps) {
  return (
    <SectionShell id={id} tone="surface">
      <Reveal>
        <SectionTitle title={title} icon={Sparkles} />
        {items.length > 0 ? (
          <ul className="mt-6 flex flex-wrap gap-2">
            {items.map((item) => (
              <li key={item.id}>
                <Badge label={item.nazwa} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-5 text-sm text-muted">{emptyMessage}</p>
        )}
      </Reveal>
    </SectionShell>
  );
}
