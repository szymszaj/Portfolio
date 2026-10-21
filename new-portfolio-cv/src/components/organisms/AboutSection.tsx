import { UserRound } from "lucide-react";

import { Reveal } from "@/components/atoms/Reveal";
import { SectionShell } from "@/components/atoms/SectionShell";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import type { CvAboutViewModel } from "@/types/cv";

type AboutSectionProps = {
  id: string;
  title: string;
  about: CvAboutViewModel;
};

export function AboutSection({ id, title, about }: AboutSectionProps) {
  if (!about.opis) {
    return null;
  }

  return (
    <SectionShell id={id} tone="surface">
      <Reveal>
        <SectionTitle title={title} icon={UserRound} />
        <p className="mt-6 max-w-2xl whitespace-pre-line text-lg leading-relaxed text-ink/90">
          {about.opis}
        </p>
      </Reveal>
    </SectionShell>
  );
}
