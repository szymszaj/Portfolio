import { FolderGit2 } from "lucide-react";

import { Reveal } from "@/components/atoms/Reveal";
import { SectionShell } from "@/components/atoms/SectionShell";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import type { CvProjectViewModel } from "@/types/cv";

type ProjectsSectionProps = {
  id: string;
  title: string;
  items: CvProjectViewModel[];
  emptyMessage: string;
  viewLabel: string;
};

export function ProjectsSection({
  id,
  title,
  items,
  emptyMessage,
  viewLabel,
}: ProjectsSectionProps) {
  if (items.length === 0) {
    return (
      <SectionShell id={id} tone="paper">
        <Reveal>
          <SectionTitle title={title} icon={FolderGit2} />
          <p className="mt-5 text-sm text-muted">{emptyMessage}</p>
        </Reveal>
      </SectionShell>
    );
  }

  return (
    <SectionShell id={id} tone="paper">
      <Reveal>
        <SectionTitle title={title} icon={FolderGit2} />
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.id}>
              <ProjectCard item={item} viewLabel={viewLabel} />
            </li>
          ))}
        </ul>
      </Reveal>
    </SectionShell>
  );
}
