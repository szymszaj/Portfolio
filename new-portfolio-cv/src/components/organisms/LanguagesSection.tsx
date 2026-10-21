import { Languages as LanguagesIcon } from "lucide-react";

import { Reveal } from "@/components/atoms/Reveal";
import { SectionShell } from "@/components/atoms/SectionShell";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { LanguageItem } from "@/components/molecules/LanguageItem";
import type { CvLanguageViewModel } from "@/types/cv";

type LanguagesSectionProps = {
  id: string;
  title: string;
  items: CvLanguageViewModel[];
  emptyMessage: string;
};

export function LanguagesSection({
  id,
  title,
  items,
  emptyMessage,
}: LanguagesSectionProps) {
  return (
    <SectionShell id={id} tone="paper">
      <Reveal>
        <SectionTitle title={title} icon={LanguagesIcon} />
        {items.length > 0 ? (
          <ul className="mt-6 max-w-xs">
            {items.map((item) => (
              <LanguageItem key={item.id} item={item} />
            ))}
          </ul>
        ) : (
          <p className="mt-5 text-sm text-muted">{emptyMessage}</p>
        )}
      </Reveal>
    </SectionShell>
  );
}
