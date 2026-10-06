import { Avatar } from "@/components/atoms/Avatar";
import type { CvHeaderViewModel } from "@/types/cv";

type HeaderProps = {
  header: CvHeaderViewModel;
  photoSrc: string | null;
  photoAlt: string;
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return (parts[0]![0] + parts[parts.length - 1]![0]).toUpperCase();
}

export function Header({ header, photoSrc, photoAlt }: HeaderProps) {
  return (
    <header className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
      <Avatar
        src={photoSrc}
        alt={photoAlt}
        initials={getInitials(header.imie)}
      />
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl">
          {header.imie}
        </h1>
        <p className="mt-1 text-lg text-slate-600 dark:text-slate-300">
          {header.tytul}
        </p>
      </div>
    </header>
  );
}
