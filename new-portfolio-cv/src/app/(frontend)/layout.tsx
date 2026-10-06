import type { Metadata } from "next";
import React from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "CV",
  description: "CV online",
};

const noFlashThemeScript = `
(function () {
  try {
    var stored = window.localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = stored === 'dark' || (stored === null && prefersDark);
    document.documentElement.classList.toggle('dark', isDark);
  } catch (e) {}
})();
`;

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashThemeScript }} />
      </head>
      <body className="bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
