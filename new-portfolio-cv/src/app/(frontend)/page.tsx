import { AboutSection } from "@/components/organisms/AboutSection";
import { ContactSection } from "@/components/organisms/ContactSection";
import { EducationSection } from "@/components/organisms/EducationSection";
import { ExperienceSection } from "@/components/organisms/ExperienceSection";
import { Header } from "@/components/organisms/Header";
import { LanguagesSection } from "@/components/organisms/LanguagesSection";
import { ProjectsSection } from "@/components/organisms/ProjectsSection";
import { SiteNav } from "@/components/organisms/SiteNav";
import { SkillsSection } from "@/components/organisms/SkillsSection";
import { dictionary } from "@/content/dictionary";
import { getInitials } from "@/lib/initials";
import { getPayloadClient } from "@/lib/payload";
import { getProfilePhotoSrc } from "@/lib/profilePhoto";
import { parseCv } from "@/parsers/cv.parser";

export const dynamic = "force-dynamic";

const SECTION_IDS = {
  about: "o-mnie",
  projects: "projekty",
  experience: "doswiadczenie",
  education: "wyksztalcenie",
  skills: "umiejetnosci",
  languages: "jezyki",
  contact: "kontakt",
} as const;

export default async function HomePage() {
  const payload = await getPayloadClient();
  const cvGlobal = await payload.findGlobal({ slug: "cv" });
  const cv = parseCv(cvGlobal);
  const photoSrc = getProfilePhotoSrc();

  const navSections = [
    { id: SECTION_IDS.about, label: dictionary.sections.about },
    { id: SECTION_IDS.projects, label: dictionary.sections.projects },
    { id: SECTION_IDS.experience, label: dictionary.sections.experience },
    { id: SECTION_IDS.education, label: dictionary.sections.education },
    { id: SECTION_IDS.skills, label: dictionary.sections.skills },
    { id: SECTION_IDS.languages, label: dictionary.sections.languages },
    { id: SECTION_IDS.contact, label: dictionary.sections.contact },
  ];

  return (
    <>
      <SiteNav
        monogram={getInitials(cv.header.imie)}
        sections={navSections}
        printLabel={dictionary.actions.print}
        themeLabelToLight={dictionary.actions.themeToggleToLight}
        themeLabelToDark={dictionary.actions.themeToggleToDark}
      />

      <main className="w-full">
        <Header
          header={cv.header}
          photoSrc={photoSrc}
          photoAlt={dictionary.header.photoAlt}
          experienceHref={`#${SECTION_IDS.experience}`}
          contactHref={`#${SECTION_IDS.contact}`}
          ctaExperience={dictionary.header.ctaExperience}
          ctaContact={dictionary.header.ctaContact}
        />

        <AboutSection
          id={SECTION_IDS.about}
          title={dictionary.sections.about}
          about={cv.about}
        />

        <ProjectsSection
          id={SECTION_IDS.projects}
          title={dictionary.sections.projects}
          items={cv.projects}
          emptyMessage={dictionary.empty.projects}
          viewLabel={dictionary.projects.viewLabel}
        />

        <ExperienceSection
          id={SECTION_IDS.experience}
          title={dictionary.sections.experience}
          items={cv.experience}
          emptyMessage={dictionary.empty.experience}
        />

        <EducationSection
          id={SECTION_IDS.education}
          title={dictionary.sections.education}
          items={cv.education}
          emptyMessage={dictionary.empty.education}
        />

        <SkillsSection
          id={SECTION_IDS.skills}
          title={dictionary.sections.skills}
          items={cv.skills}
          emptyMessage={dictionary.empty.skills}
        />

        <LanguagesSection
          id={SECTION_IDS.languages}
          title={dictionary.sections.languages}
          items={cv.languages}
          emptyMessage={dictionary.empty.languages}
        />

        <ContactSection
          id={SECTION_IDS.contact}
          title={dictionary.sections.contact}
          contact={cv.contact}
          labels={{
            emailLabel: dictionary.contact.emailLabel,
            linkedinLabel: dictionary.contact.linkedinLabel,
            githubLabel: dictionary.contact.githubLabel,
          }}
          formLabels={dictionary.contact.form}
        />
      </main>
    </>
  );
}
