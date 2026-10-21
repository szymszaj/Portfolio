import { Mail } from "lucide-react";

import { Reveal } from "@/components/atoms/Reveal";
import { SectionShell } from "@/components/atoms/SectionShell";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { ContactLink } from "@/components/molecules/ContactLink";
import { ContactForm } from "@/components/organisms/ContactForm";
import type { CvContactViewModel } from "@/types/cv";

type ContactFormLabels = {
  heading: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
};

type ContactSectionProps = {
  id: string;
  title: string;
  contact: CvContactViewModel;
  labels: {
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
  };
  formLabels: ContactFormLabels;
};

export function ContactSection({
  id,
  title,
  contact,
  labels,
  formLabels,
}: ContactSectionProps) {
  const hasAnyContact = contact.email || contact.linkedin || contact.github;

  return (
    <SectionShell id={id} tone="accent">
      <Reveal>
        <SectionTitle title={title} icon={Mail} />

        <div className="mt-8 grid gap-10 sm:grid-cols-2 sm:gap-16">
          <div>
            <p className="max-w-xs text-lg text-ink/80">{formLabels.heading}</p>

            {hasAnyContact && (
              <div className="mt-5 space-y-1.5">
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
            )}
          </div>

          <div className="print:hidden">
            <ContactForm labels={formLabels} />
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
