import { AboutSection } from "@/components/organisms/AboutSection";
import { ContactSection } from "@/components/organisms/ContactSection";
import { EducationSection } from "@/components/organisms/EducationSection";
import { ExperienceSection } from "@/components/organisms/ExperienceSection";
import { Header } from "@/components/organisms/Header";
import { LanguagesSection } from "@/components/organisms/LanguagesSection";
import { SkillsSection } from "@/components/organisms/SkillsSection";
import { PrintButton } from "@/components/atoms/PrintButton";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { dictionary } from "@/content/dictionary";
import { getPayloadClient } from "@/lib/payload";
import { getProfilePhotoSrc } from "@/lib/profilePhoto";
import { parseCv } from "@/parsers/cv.parser";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const payload = await getPayloadClient();
  const cvGlobal = await payload.findGlobal({ slug: "cv" });
  const cv = parseCv(cvGlobal);
  const photoSrc = getProfilePhotoSrc();

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 print:px-0 print:py-0">
      <div className="mb-6 flex justify-end gap-3 print:hidden">
        <ThemeToggle
          labelToLight={dictionary.actions.themeToggleToLight}
          labelToDark={dictionary.actions.themeToggleToDark}
        />
        <PrintButton label={dictionary.actions.print} />
      </div>

      <Header
        header={cv.header}
        photoSrc={photoSrc}
        photoAlt={dictionary.header.photoAlt}
      />

      <AboutSection title={dictionary.sections.about} about={cv.about} />

      <ExperienceSection
        title={dictionary.sections.experience}
        items={cv.experience}
        emptyMessage={dictionary.empty.experience}
      />

      <EducationSection
        title={dictionary.sections.education}
        items={cv.education}
        emptyMessage={dictionary.empty.education}
      />

      <SkillsSection
        title={dictionary.sections.skills}
        items={cv.skills}
        emptyMessage={dictionary.empty.skills}
      />

      <LanguagesSection
        title={dictionary.sections.languages}
        items={cv.languages}
        emptyMessage={dictionary.empty.languages}
      />

      <ContactSection
        title={dictionary.sections.contact}
        contact={cv.contact}
        labels={{
          emailLabel: dictionary.contact.emailLabel,
          linkedinLabel: dictionary.contact.linkedinLabel,
          githubLabel: dictionary.contact.githubLabel,
        }}
      />
    </main>
  );
}
