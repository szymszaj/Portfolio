"use client";

import { motion } from "framer-motion";

import { Avatar } from "@/components/atoms/Avatar";
import { getInitials } from "@/lib/initials";
import type { CvHeaderViewModel } from "@/types/cv";

type HeaderProps = {
  header: CvHeaderViewModel;
  photoSrc: string | null;
  photoAlt: string;
  experienceHref: string;
  contactHref: string;
  ctaExperience: string;
  ctaContact: string;
};

export function Header({
  header,
  photoSrc,
  photoAlt,
  experienceHref,
  contactHref,
  ctaExperience,
  ctaContact,
}: HeaderProps) {
  return (
    <header className="relative flex min-h-[80vh] items-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-accent/5 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col-reverse items-start gap-10 px-6 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-6xl font-medium leading-[1.03] text-ink sm:text-7xl"
          >
            {header.imie}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-2xl text-accent"
          >
            {header.tytul}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={experienceHref}
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper transition-transform hover:scale-[1.03]"
            >
              {ctaExperience}
            </a>
            <a
              href={contactHref}
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent/50 hover:text-accent"
            >
              {ctaContact}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ rotate: 1.5, scale: 1.02 }}
        >
          <Avatar src={photoSrc} alt={photoAlt} initials={getInitials(header.imie)} />
        </motion.div>
      </div>
    </header>
  );
}
