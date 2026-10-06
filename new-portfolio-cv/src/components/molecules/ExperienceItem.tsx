import type { CvExperienceItemViewModel } from "@/types/cv";

type ExperienceItemProps = {
  item: CvExperienceItemViewModel;
};

export function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <li className="break-inside-avoid">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <p className="font-medium text-slate-900 dark:text-slate-100">
          {item.stanowisko}{" "}
          <span className="text-slate-500 dark:text-slate-400">
            · {item.firma}
          </span>
        </p>
        {item.okres && (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {item.okres}
          </p>
        )}
      </div>
      {item.opis && (
        <p className="mt-1 whitespace-pre-line text-sm text-slate-600 dark:text-slate-300">
          {item.opis}
        </p>
      )}
    </li>
  );
}
