import type { CvEducationItemViewModel } from "@/types/cv";

type EducationItemProps = {
  item: CvEducationItemViewModel;
};

export function EducationItem({ item }: EducationItemProps) {
  return (
    <li className="grid gap-1.5 border-b border-line/70 py-5 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[140px_1fr] sm:gap-8">
      {item.okres ? (
        <p className="text-sm tabular-nums text-muted">{item.okres}</p>
      ) : (
        <span />
      )}
      <p className="font-medium text-ink">
        {item.szkola}
        {item.kierunek && (
          <span className="font-normal text-muted">, {item.kierunek}</span>
        )}
      </p>
    </li>
  );
}
