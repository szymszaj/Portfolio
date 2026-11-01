import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { useTranslations } from "../hooks/useTranslations";
import SectionShell from "./SectionShell";

const ACCENT_STYLES = {
  accent: {
    text: "text-accent",
    rule: "bg-accent",
    tint: "from-accent/[0.07]",
    hover: "hover:border-accent/40",
  },
  success: {
    text: "text-success",
    rule: "bg-success",
    tint: "from-success/[0.07]",
    hover: "hover:border-success/40",
  },
  iris: {
    text: "text-iris",
    rule: "bg-iris",
    tint: "from-iris/[0.07]",
    hover: "hover:border-iris/40",
  },
  ember: {
    text: "text-ember",
    rule: "bg-ember",
    tint: "from-ember/[0.07]",
    hover: "hover:border-ember/40",
  },
};

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ExpertiseCard = ({ pillar, index }) => {
  const style = ACCENT_STYLES[pillar.accent] ?? ACCENT_STYLES.accent;

  return (
    <motion.article
      variants={reveal}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className={`group relative overflow-hidden rounded-2xl border border-line bg-surface/40 p-8 transition-colors duration-500 ${style.hover}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${style.tint} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="relative z-10">
        <div className="mb-6 flex items-baseline gap-4">
          <span className={`font-display text-sm font-bold ${style.text}`}>
            {pillar.index}
          </span>
          <span className={`h-px flex-1 ${style.rule} opacity-25`} />
        </div>

        <h3 className="font-display mb-6 text-2xl font-bold text-ink">
          {pillar.title}
        </h3>

        <ul className="space-y-3">
          {pillar.points.map((point) => (
            <li
              key={point}
              className="flex gap-3 leading-relaxed text-ink-muted"
            >
              <span
                className={`mt-2 h-1 w-1 shrink-0 rounded-full ${style.rule}`}
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

ExpertiseCard.propTypes = {
  pillar: PropTypes.shape({
    index: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    accent: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const About = () => {
  const { t } = useTranslations();

  return (
    <SectionShell tint="accent" watermark="ABOUT" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl"
        >
          <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            {t("about.eyebrow")}
          </span>
          <h2 className="font-display mt-6 text-4xl font-bold leading-[1.1] text-ink md:text-6xl">
            {t("about.headline")}
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {t("about.lead")}
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {t("ABOUT_STATS").map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={reveal}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="bg-canvas p-8"
            >
              <div className="font-display text-4xl font-bold text-ink md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-ink-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <motion.h3
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display mb-10 text-sm font-semibold uppercase tracking-[0.25em] text-ink-subtle"
          >
            {t("about.expertiseTitle")}
          </motion.h3>

          <div className="grid gap-6 md:grid-cols-2">
            {t("EXPERTISE").map((pillar, i) => (
              <ExpertiseCard key={pillar.id} pillar={pillar} index={i} />
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-12 md:grid-cols-2">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="font-display mb-8 text-sm font-semibold uppercase tracking-[0.25em] text-ink-subtle">
              {t("about.languagesTitle")}
            </h3>
            <div className="space-y-6">
              {t("LANGUAGES").map((lang) => (
                <div key={lang.name}>
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="font-medium text-ink">{lang.name}</span>
                    <span className="font-display text-sm text-accent">
                      {lang.level}
                    </span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-surface-raised">
                    <motion.div
                      className="h-full rounded-full bg-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <div className="mt-2 text-sm text-ink-subtle">
                    {lang.description}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={reveal}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="font-display mb-8 text-sm font-semibold uppercase tracking-[0.25em] text-ink-subtle">
              {t("about.interestsTitle")}
            </h3>
            <div className="flex flex-wrap gap-3">
              {t("INTERESTS").map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-line px-5 py-2.5 text-ink-muted transition-colors duration-300 hover:border-iris/40 hover:text-ink"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.2em] text-ink-subtle"
        >
          <span>{t("about.scrollHint")}</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiArrowDown className="h-4 w-4" />
          </motion.span>
        </motion.div>
      </div>
    </SectionShell>
  );
};

export default About;
