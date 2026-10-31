import { motion } from "framer-motion";
import { useTranslations } from "../hooks/useTranslations";
import SectionHeading from "./SectionHeading";
import SectionShell from "./SectionShell";

const Education = () => {
  const { t } = useTranslations();

  return (
    <SectionShell tint="amber" watermark="STUDY" className="py-24 lg:py-32">
      <SectionHeading
        title={t("education.title")}
        highlight={t("education.titleHighlight")}
        subtitle={t("education.subtitle")}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {t("EDUCATION").map((item, index) => (
          <motion.article
            key={item.school}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative border-t border-line py-8 last:border-b"
          >
            <span className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-amber/[0.07] to-transparent transition-transform duration-500 group-hover:scale-x-100" />

            <div className="relative flex flex-col gap-5 px-2 md:flex-row md:gap-8 md:px-4">
              <span className="font-display w-10 shrink-0 text-sm text-ink-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="flex-1">
                <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="font-display text-2xl font-light tracking-tight text-ink transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                    {item.school}
                  </h3>
                  <span className="font-display shrink-0 text-sm text-amber">
                    {item.period}
                  </span>
                </div>

                <p className="mb-3 text-ink-muted transition-transform duration-500 group-hover:translate-x-2">
                  {item.degree}
                </p>

                <p className="max-w-2xl text-sm leading-relaxed text-ink-subtle">
                  {item.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      item.status === "inProgress" ? "bg-accent" : "bg-success"
                    }`}
                  />
                  <span className="text-ink-subtle">
                    {item.status === "inProgress"
                      ? t("education.inProgress")
                      : t("education.completed")}
                  </span>
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
};

export default Education;
