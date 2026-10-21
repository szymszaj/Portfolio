import type { CvExperienceItemViewModel } from "@/types/cv";

type ExperienceItemProps = {
  item: CvExperienceItemViewModel;
};

export function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <li className="grid gap-1.5 border-b border-line/70 py-6 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[140px_1fr] sm:gap-8">
      {item.okres ? (
        <p className="text-sm tabular-nums text-muted">{item.okres}</p>
      ) : (
        <span />
      )}
      <div>
        <p className="font-medium text-ink">
          {item.stanowisko}
          <span className="font-normal text-muted">, {item.firma}</span>
        </p>
        {item.opis && (
          <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-ink/80">
            {item.opis}
          </p>
        )}
      </div>
    </li>
  );
}
