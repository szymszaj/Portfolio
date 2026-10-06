import { SectionTitle } from "@/components/atoms/SectionTitle";
import type { CvAboutViewModel } from "@/types/cv";

type AboutSectionProps = {
  title: string;
  about: CvAboutViewModel;
};

export function AboutSection({ title, about }: AboutSectionProps) {
  if (!about.opis) {
    return null;
  }

  return (
    <section className="mt-8 print:mt-6">
      <SectionTitle title={title} />
      <p className="mt-2 whitespace-pre-line text-slate-700 dark:text-slate-300">
        {about.opis}
      </p>
    </section>
  );
}
