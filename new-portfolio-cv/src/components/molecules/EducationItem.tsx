import type { CvEducationItemViewModel } from "@/types/cv";

type EducationItemProps = {
  item: CvEducationItemViewModel;
};

export function EducationItem({ item }: EducationItemProps) {
  return (
    <li className="break-inside-avoid">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <p className="font-medium text-slate-900 dark:text-slate-100">
          {item.szkola}
          {item.kierunek && (
            <span className="text-slate-500 dark:text-slate-400">
              {" "}
              · {item.kierunek}
            </span>
          )}
        </p>
        {item.okres && (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {item.okres}
          </p>
        )}
      </div>
    </li>
  );
}
