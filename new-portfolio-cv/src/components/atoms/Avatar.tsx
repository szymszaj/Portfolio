import Image from "next/image";

type AvatarProps = {
  src: string | null;
  alt: string;
  initials: string;
};

export function Avatar({ src, alt, initials }: AvatarProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={128}
        height={128}
        priority
        className="h-28 w-28 rounded-full object-cover ring-1 ring-slate-200 dark:ring-slate-700 print:h-24 print:w-24"
      />
    );
  }

  return (
    <div
      aria-label={alt}
      className="flex h-28 w-28 items-center justify-center rounded-full bg-slate-200 text-2xl font-semibold text-slate-600 ring-1 ring-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:ring-slate-600 print:h-24 print:w-24"
    >
      {initials}
    </div>
  );
}
