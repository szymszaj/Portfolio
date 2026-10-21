import Image from "next/image";

type AvatarProps = {
  src: string | null;
  alt: string;
  initials: string;
};

export function Avatar({ src, alt, initials }: AvatarProps) {
  if (src) {
    return (
      <div className="h-36 w-36 overflow-hidden rounded-2xl border border-accent/40 shadow-sm sm:h-44 sm:w-44">
        <Image
          src={src}
          alt={alt}
          width={220}
          height={220}
          priority
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      aria-label={alt}
      className="flex h-36 w-36 items-center justify-center rounded-2xl border border-accent/40 bg-surface font-display text-3xl text-accent shadow-sm sm:h-44 sm:w-44"
    >
      {initials}
    </div>
  );
}
