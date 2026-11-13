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
import Serpentine from "./Serpentine";
import MaskedLines from "./MaskedLines";

const EASE = [0.16, 1, 0.3, 1];

const StepTile = ({ step, index, total, progress, pinned }) => {
  const span = 1 / total;
  const start = index * span;
  const end = start + span * 0.6;

  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [28, 0]);

  const style = pinned ? { opacity, y } : undefined;

  return (
    <motion.li style={style} className="flex gap-5 bg-paper p-6">
      <span className="font-display text-sm font-semibold text-paper-muted">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-display mb-1 text-lg font-semibold">
          {step.title}
        </h3>
        <p className="text-sm leading-relaxed text-paper-muted">
          {step.description}
        </p>
      </div>
    </motion.li>
  );
};

StepTile.propTypes = {
  step: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  progress: PropTypes.object.isRequired,
  pinned: PropTypes.bool,
};

const Approach = () => {
  const { t } = useTranslations();
  const trackRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const hydrated = useIsHydrated();
  const pinned = hydrated && !reduceMotion;

  const steps = t("APPROACH_STEPS");
  const total = steps.length;

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    restDelta: 0.01,
  });

  return (
    <section
      id="podejscie"
      ref={trackRef}
      className="relative w-full scroll-mt-24"
      style={pinned ? { height: `${total * 70 + 60}vh` } : undefined}
    >
      <div
        className={
          pinned
            ? "sticky top-0 flex h-screen items-center overflow-hidden bg-paper text-paper-ink"
            : "relative overflow-hidden bg-paper py-20 text-paper-ink lg:py-28"
        }
      >
        <Serpentine
          color="#3b4ee0"
          opacity={0.7}
          size="sm"
          progressValue={pinned ? progress : undefined}
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-10">
          <MaskedLines
            as="h2"
            lines={t("approach.headline")}
            lineClassName="font-display text-[8vw] font-light leading-[1.02] tracking-[-0.03em] lg:text-[4.6vw]"
          />

          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-6">
              {t("approach.paragraphs").map((paragraph) => (
                <motion.p
                  key={paragraph}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="text-lg leading-relaxed text-paper-muted"
                >
                  {paragraph}
                </motion.p>
              ))}

              <motion.a
                href="#kontakt"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="group mt-4 inline-flex items-center gap-3 rounded-full bg-paper-ink px-7 py-4 font-medium text-paper transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-paper" />
                {t("approach.cta")}
                <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </div>

            <ul className="space-y-px overflow-hidden rounded-2xl border border-paper-line bg-paper-line">
              {steps.map((step, i) => (
                <StepTile
                  key={step.title}
                  step={step}
                  index={i}
                  total={total}
                  progress={progress}
                  pinned={pinned}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
