import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { useTranslations } from "../hooks/useTranslations";
import WaveField from "./WaveField";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window === "undefined"
      ? true
      : window.matchMedia("(min-width: 1024px)").matches,
  );

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => setIsDesktop(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return isDesktop;
};

const JobPanel = ({ job, index, total, progress, animated, techLabel }) => {
  const span = 1 / total;
  const start = index * span;
  const end = start + span;
  const fade = span * 0.26;

  const opacity = useTransform(
    progress,
    [start, start + fade, end - fade, end],
    [index === 0 ? 1 : 0, 1, 1, index === total - 1 ? 1 : 0],
  );
  const y = useTransform(progress, [start, end], [60, -60]);

  return (
    <motion.article
      style={animated ? { opacity, y } : undefined}
      className={
        animated
          ? "absolute inset-0 flex flex-col justify-center"
          : "border-t border-line py-10 first:border-t-0"
      }
    >
      <div className="mb-5 flex flex-wrap items-center gap-4">
        <span className="rounded-full border border-success/30 bg-success/10 px-4 py-1.5 text-sm font-medium text-success">
          {job.year}
        </span>
        <span className="flex items-center gap-2 text-ink-muted">
          <FiMapPin className="h-4 w-4" />
          {job.company || "Freelance"}
        </span>
      </div>

      <h3 className="font-display mb-6 text-3xl font-light tracking-tight text-ink lg:text-4xl">
        {job.role}
      </h3>

      {/* Pełna lista obowiązków z CV rozkłada się na dwie kolumny,
          żeby zmieścić się w przypiętym kadrze. */}
      {Array.isArray(job.description) ? (
        <ul className="mb-7 grid gap-x-10 gap-y-2 text-sm lg:grid-cols-2">
          {job.description.map((item) => (
            <li key={item} className="flex gap-2.5 text-ink-muted">
              <span className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-success" />
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mb-7 max-w-2xl text-sm leading-relaxed text-ink-muted">
          {job.description}
        </p>
      )}

      <div>
        <div className="mb-2.5 text-xs uppercase tracking-[0.2em] text-ink-subtle">
          {techLabel}
        </div>
        <div className="flex flex-wrap gap-2">
          {job.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line px-3 py-1 text-xs text-ink-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

JobPanel.propTypes = {
  job: PropTypes.shape({
    year: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string,
    description: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  progress: PropTypes.object.isRequired,
  animated: PropTypes.bool,
  techLabel: PropTypes.string.isRequired,
};

const StepMarker = ({ index, total, progress, reduceMotion }) => {
  const span = 1 / total;
  const start = index * span;
  const end = start + span;

  const opacity = useTransform(
    progress,
    [start - 0.02, start + 0.02, end - 0.02, end + 0.02],
    [0.25, 1, 1, 0.25],
  );
  const scaleX = useTransform(progress, [start, end], [0, 1]);

  return (
    <motion.div
      style={reduceMotion ? undefined : { opacity }}
      className="flex items-center gap-4"
    >
      <span className="font-display w-8 text-sm text-ink">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="relative h-px w-16 overflow-hidden bg-line">
        <motion.span
          style={reduceMotion ? undefined : { scaleX }}
          className="absolute inset-0 origin-left bg-success"
        />
      </span>
    </motion.div>
  );
};

StepMarker.propTypes = {
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  progress: PropTypes.object.isRequired,
  reduceMotion: PropTypes.bool,
};

const Experience = () => {
  const { t } = useTranslations();
  const trackRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const isDesktop = useIsDesktop();

  const pinned = isDesktop && !reduceMotion;

  const jobs = t("EXPERIENCES");
  const total = jobs.length;

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <section
      ref={trackRef}
      className="relative w-full border-b border-line-muted"
      style={pinned ? { height: `${total * 100 + 60}vh` } : undefined}
    >
      <div
        className={
          pinned
            ? "sticky top-0 flex h-screen items-center overflow-hidden"
            : "relative overflow-hidden py-20"
        }
      >
        <WaveField />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-success/[0.07] via-transparent to-transparent"
        />

        <span
          aria-hidden="true"
          className="font-display pointer-events-none absolute left-1/2 top-6 w-full -translate-x-1/2 select-none text-center text-[22vw] font-bold leading-none tracking-tighter text-transparent opacity-[0.06] [-webkit-text-stroke:1px_#8b949e]"
        >
          WORK
        </span>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-20">
            <div className="hidden lg:flex lg:flex-col lg:gap-6">
              <div className="font-display mb-2 text-sm uppercase tracking-[0.25em] text-ink-subtle">
                {t("experience.title")} {t("experience.titleHighlight")}
              </div>
              {pinned &&
                jobs.map((job, i) => (
                  <StepMarker
                    key={job.role}
                    index={i}
                    total={total}
                    progress={progress}
                    reduceMotion={reduceMotion}
                  />
                ))}
            </div>

            <div className={pinned ? "relative min-h-[34rem]" : "relative"}>
              {jobs.map((job, i) => (
                <JobPanel
                  key={job.role}
                  job={job}
                  index={i}
                  total={total}
                  progress={progress}
                  animated={pinned}
                  techLabel={t("experience.technologies")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
