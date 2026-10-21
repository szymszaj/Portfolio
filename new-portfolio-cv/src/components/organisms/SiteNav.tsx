"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

import { PrintButton } from "@/components/atoms/PrintButton";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";

type NavSection = {
  id: string;
  label: string;
};

type SiteNavProps = {
  monogram: string;
  sections: NavSection[];
  printLabel: string;
  themeLabelToLight: string;
  themeLabelToDark: string;
};

export function SiteNav({
  monogram,
  sections,
  printLabel,
  themeLabelToLight,
  themeLabelToDark,
}: SiteNavProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 300, damping: 40 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/90 px-6 backdrop-blur print:hidden sm:px-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between py-3">
        <span className="font-display text-sm text-accent">{monogram}</span>

        <nav className="flex items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="relative whitespace-nowrap px-2.5 py-2 text-sm text-muted transition-colors hover:text-ink sm:px-3"
            >
              {activeId === section.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-2 bottom-0 h-px bg-accent"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className={activeId === section.id ? "text-ink" : undefined}>
                {section.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle labelToLight={themeLabelToLight} labelToDark={themeLabelToDark} />
          <PrintButton label={printLabel} />
        </div>
      </div>

      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent"
      />
    </header>
  );
}
