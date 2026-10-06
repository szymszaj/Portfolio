import { SectionTitle } from "@/components/atoms/SectionTitle";
import { ContactLink } from "@/components/molecules/ContactLink";
import type { CvContactViewModel } from "@/types/cv";

type ContactSectionProps = {
  title: string;
  contact: CvContactViewModel;
  labels: {
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
  };
};

export function ContactSection({
  title,
  contact,
  labels,
}: ContactSectionProps) {
  const hasAnyContact = contact.email || contact.linkedin || contact.github;

  if (!hasAnyContact) {
    return null;
  }

  return (
    <section className="mt-8 print:mt-6">
      <SectionTitle title={title} />
      <div className="mt-3 space-y-1">
        {contact.email && (
          <ContactLink
            label={labels.emailLabel}
            href={`mailto:${contact.email}`}
            value={contact.email}
          />
        )}
        {contact.linkedin && (
          <ContactLink
            label={labels.linkedinLabel}
            href={contact.linkedin}
            value={contact.linkedin}
          />
        )}
        {contact.github && (
          <ContactLink
            label={labels.githubLabel}
            href={contact.github}
            value={contact.github}
          />
        )}
      </div>
    </section>
  );
}
