import { useRef } from "react";
import PropTypes from "prop-types";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { useTranslations } from "../hooks/useTranslations";
import { useIsHydrated } from "../hooks/useIsHydrated";
import FrameCorners from "./hero/FrameCorners";

const TONES = {
  ink: "text-hero-ink",
  muted: "text-hero-muted",
  indigo: "text-hero-indigo",
  rose: "text-hero-rose",
};

const Word = ({ children, tone, start, end, progress, animated }) => {
  const opacity = useTransform(progress, [start, end], [0.15, 1]);

  return (
    <motion.span
      style={animated ? { opacity } : undefined}
      className={`mr-[0.22em] inline-block ${TONES[tone]}`}
    >
      {children}
    </motion.span>
  );
};

Word.propTypes = {
  children: PropTypes.node.isRequired,
  tone: PropTypes.oneOf(Object.keys(TONES)).isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  progress: PropTypes.object.isRequired,
  animated: PropTypes.bool,
};

const toWords = (parts) =>
  parts.flatMap((part) =>
    String(part.text)
      .split(/\s+/)
      .filter(Boolean)
      .map((text) => ({ text, tone: part.tone })),
  );

const LineRail = ({ start, end, progress, animated }) => {
  const scaleY = useTransform(progress, [start, end], [0, 1]);

  return (
    <span
      aria-hidden="true"
      className="relative mt-3 hidden w-px flex-1 bg-hero-line md:block"
    >
      <motion.span
        style={animated ? { scaleY } : undefined}
        className="absolute inset-0 origin-top bg-hero-indigo"
      />
    </span>
  );
};

LineRail.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  progress: PropTypes.object.isRequired,
  animated: PropTypes.bool,
};

const Blobs = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    <span className="drift-a absolute -left-16 top-0 h-72 w-72 rounded-full bg-hero-indigo/20 blur-3xl" />
    <span className="drift-b absolute -right-10 top-1/4 h-80 w-80 rounded-full bg-hero-rose/20 blur-3xl" />
    <span className="drift-c absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-hero-indigo/15 blur-3xl" />
  </div>
);

const Manifesto = () => {
  const { t } = useTranslations();
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const hydrated = useIsHydrated();
  const animated = hydrated && !reduceMotion;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "end 0.55"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    restDelta: 0.001,
  });

  const rawLines = [
    {
      number: "01",
      words: toWords([
        { text: t("manifesto.line1.muted"), tone: "muted" },
        { text: t("manifesto.line1.strong"), tone: "ink" },
      ]),
    },
    {
      number: "02",
      words: toWords([
        { text: t("manifesto.line2.strong"), tone: "indigo" },
        { text: t("manifesto.line2.muted"), tone: "muted" },
      ]),
    },
    {
      number: "03",
      words: toWords([
        { text: t("manifesto.line3.strong"), tone: "ink" },
        { text: t("manifesto.line3.accent"), tone: "rose" },
      ]),
    },
  ];

  const total = rawLines.reduce((sum, line) => sum + line.words.length, 0);

  let position = 0;
  const lines = rawLines.map((line) => ({
    ...line,
    words: line.words.map((word) => ({ ...word, position: position++ })),
  }));

  return (
    <section
      id="manifest"
      ref={sectionRef}
      className="relative scroll-mt-24 bg-hero-canvas py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-[110rem] px-3 md:px-6">
        <div className="relative overflow-hidden rounded-[20px] bg-hero-frame px-5 py-14 md:rounded-[28px] md:px-12 md:py-24">
          <Blobs />
          <FrameCorners />

          <div className="relative z-10 space-y-10 md:space-y-16">
            {lines.map((line) => (
              <div key={line.number} className="flex gap-5 md:gap-10">
                <span className="flex w-10 shrink-0 flex-col items-start md:w-16">
                  <span
                    aria-hidden="true"
                    className="font-display block text-[clamp(1.5rem,2.4vw,2.5rem)] font-light text-hero-ink/30"
                  >
                    {line.number}
                  </span>
                  <LineRail
                    start={(line.words[0].position / total) * 0.85}
                    end={
                      (line.words[line.words.length - 1].position / total) *
                        0.85 +
                      0.18
                    }
                    progress={progress}
                    animated={animated}
                  />
                </span>

                <p className="font-display min-w-0 flex-1 text-[clamp(2.5rem,7vw,7rem)] font-light leading-[1.05] tracking-[-0.02em]">
                  {line.words.map((word) => {
                    const start = (word.position / total) * 0.85;

                    return (
                      <Word
                        key={`${word.position}-${word.text}`}
                        tone={word.tone}
                        start={start}
                        end={Math.min(start + 0.18, 1)}
                        progress={progress}
                        animated={animated}
                      >
                        {word.text}
                      </Word>
                    );
                  })}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#kontakt"
            className="group relative z-10 mt-14 inline-flex items-center gap-2 rounded-full bg-hero-ink px-6 py-3 text-[0.9375rem] font-medium text-hero-canvas transition-colors duration-200 hover:bg-hero-indigo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hero-indigo md:mt-20"
          >
            {t("hero.cta")}
            <FiArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
