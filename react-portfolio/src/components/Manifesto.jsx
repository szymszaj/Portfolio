import { useTranslations } from "../hooks/useTranslations";
import DriftText from "./DriftText";
import InteractiveDots from "./InteractiveDots";

const LINE_CLASS =
  "font-display text-[7vw] font-light leading-[1.05] tracking-tight text-ink lg:text-[5.5vw]";

const Manifesto = () => {
  const { t } = useTranslations();

  return (
    <section className="relative w-full overflow-hidden border-b border-line-muted py-32">
      <InteractiveDots />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-iris/[0.05] via-transparent to-transparent" />

      <div className="relative z-10 space-y-10 px-4 sm:px-6 lg:space-y-16 lg:px-10">
        <DriftText direction="right" distance={14}>
          <p className={LINE_CLASS}>
            <span className="italic text-ink-muted">
              {t("manifesto.line1.muted")}
            </span>{" "}
            {t("manifesto.line1.strong")}
          </p>
        </DriftText>

        <DriftText direction="left" distance={16} align="right">
          <p className={LINE_CLASS}>
            {t("manifesto.line2.strong")}{" "}
            <span className="italic text-ink-muted">
              {t("manifesto.line2.muted")}
            </span>
          </p>
        </DriftText>

        <DriftText direction="right" distance={12}>
          <p className={LINE_CLASS}>
            {t("manifesto.line3.strong")}{" "}
            <span className="italic text-accent">
              {t("manifesto.line3.accent")}
            </span>
          </p>
        </DriftText>
      </div>
    </section>
  );
};

export default Manifesto;
