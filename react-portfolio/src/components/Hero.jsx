import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useLenis } from "lenis/react";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import PROFILE from "../assets/profile.jpg";
import Typewriter from "./Typewriter";
import ParticleField from "./ParticleField";
import { useTranslations } from "../hooks/useTranslations";

const EASE_OUT = [0.16, 1, 0.3, 1];

const FIRST_NAME = "SZYMON";
const LETTER_DELAY = 0.19;
const LETTER_DURATION = 1.7;
const INTRO_START = 0.4;
// Moment, w którym ostatnia litera kończy wjazd
const INTRO_END =
  INTRO_START + (FIRST_NAME.length - 1) * LETTER_DELAY + LETTER_DURATION;

const Hero = () => {
  const trackRef = useRef(null);
  const { t } = useTranslations();
  const reduceMotion = useReducedMotion();
  const lenis = useLenis();
  const [introDone, setIntroDone] = useState(false);

  // Przy ograniczonym ruchu intro nie blokuje niczego
  const introFinished = introDone || reduceMotion;

  // Scroll pozostaje zablokowany, dopóki imię się nie złoży
  useEffect(() => {
    if (reduceMotion) return undefined;

    window.scrollTo(0, 0);
    lenis?.stop();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIntroDone(true);
      lenis?.start();
      document.body.style.overflow = previousOverflow;
    }, INTRO_END * 1000);

    return () => {
      clearTimeout(timer);
      lenis?.start();
      document.body.style.overflow = previousOverflow;
    };
  }, [lenis, reduceMotion]);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const nameScale = useTransform(progress, [0, 0.62], [1, 0.26]);
  const nameX = useTransform(progress, [0, 0.62], ["0%", "-34%"]);
  const nameY = useTransform(progress, [0, 0.62], ["0%", "-30%"]);
  const surnameOpacity = useTransform(progress, [0.12, 0.42], [0, 1]);
  const surnameX = useTransform(progress, [0.12, 0.42], ["-28%", "0%"]);
  const hintOpacity = useTransform(progress, [0, 0.12], [1, 0]);
  const panelOpacity = useTransform(progress, [0.45, 0.8], [0, 1]);
  const panelY = useTransform(progress, [0.45, 0.8], [48, 0]);
  const fieldOpacity = useTransform(progress, [0, 0.8], [1, 0.3]);

  const nameStyle = reduceMotion
    ? undefined
    : { scale: nameScale, x: nameX, y: nameY };

  return (
    <section ref={trackRef} className="relative h-[220vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={reduceMotion ? undefined : { opacity: fieldOpacity }}
          className="absolute inset-0"
        >
          <ParticleField />
        </motion.div>

        <motion.div
          style={nameStyle}
          className="absolute inset-0 flex items-center justify-center px-4"
        >
          <div className="font-display relative whitespace-nowrap text-[17vw] font-light leading-[0.88] tracking-[-0.03em] lg:text-[14vw]">
            <span aria-label={FIRST_NAME} className="inline-flex text-ink">
              {FIRST_NAME.split("").map((letter, i) => (
                <span
                  key={`${letter}-${i}`}
                  aria-hidden="true"
                  className="inline-block overflow-hidden"
                >
                  <motion.span
                    className="inline-block"
                    initial={
                      reduceMotion
                        ? false
                        : { y: i % 2 === 0 ? "-120%" : "120%" }
                    }
                    animate={{ y: "0%" }}
                    transition={{
                      delay: INTRO_START + i * LETTER_DELAY,
                      duration: LETTER_DURATION,
                      ease: EASE_OUT,
                    }}
                  >
                    {letter}
                  </motion.span>
                </span>
              ))}
            </span>

            <motion.span
              className="absolute left-full top-0 ml-[0.18em] inline-block text-ink-muted"
              style={
                reduceMotion
                  ? undefined
                  : { opacity: surnameOpacity, x: surnameX }
              }
            >
              ZYCH
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          style={
            reduceMotion ? undefined : { opacity: panelOpacity, y: panelY }
          }
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 px-6 pb-16 lg:px-16"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-end">
            <div className="pointer-events-auto max-w-md">
              <div className="font-display mb-3 text-xl text-accent md:text-2xl">
                <Typewriter
                  words={t("hero.titles")}
                  typingSpeed={80}
                  deletingSpeed={40}
                  pause={1400}
                />
              </div>
              <p className="mb-6 leading-relaxed text-ink-muted">
                {t("hero.lead")}
              </p>
              <a
                href="#kontakt"
                className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-medium text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                {t("hero.cta")}
                <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="pointer-events-auto shrink-0">
              <img
                src={PROFILE}
                alt="Szymon Zych"
                loading="eager"
                decoding="async"
                className="h-44 w-36 rounded-2xl border border-line object-cover shadow-2xl md:h-60 md:w-48"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          style={reduceMotion ? undefined : { opacity: hintOpacity }}
          className="absolute bottom-10 right-6 lg:right-16"
        >
          <motion.div
            className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-ink-muted"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={introFinished ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            <span>{t("hero.scroll")}</span>
            <motion.span
              animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FiArrowDown className="h-4 w-4" />
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
