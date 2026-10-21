import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import type { CvProjectViewModel } from "@/types/cv";

type ProjectCardProps = {
  item: CvProjectViewModel;
  viewLabel: string;
};

export function ProjectCard({ item, viewLabel }: ProjectCardProps) {
  const content = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden bg-paper">
        {item.obrazekUrl ? (
          <Image
            src={item.obrazekUrl}
            alt={item.obrazekAlt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-display text-3xl text-accent/40">
            {item.nazwa.slice(0, 1).toUpperCase()}
          </div>
        )}
      </div>

      <div className="p-5">
        <p className="flex items-center gap-1.5 font-medium text-ink">
          {item.nazwa}
          {item.link && (
            <ArrowUpRight className="h-4 w-4 text-muted transition-colors group-hover:text-accent" />
          )}
        </p>
        {item.opis && (
          <p className="mt-1.5 text-sm leading-relaxed text-ink/80">{item.opis}</p>
        )}
      </div>
    </>
  );

  const className =
    "group block overflow-hidden rounded-lg border border-line bg-surface transition-colors hover:border-accent/40";

  if (item.link) {
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={`${viewLabel}: ${item.nazwa}`} className={className}>
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}
