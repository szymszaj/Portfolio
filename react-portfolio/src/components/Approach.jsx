import { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { useTranslations } from "../hooks/useTranslations";
import { useIsHydrated } from "../hooks/useIsHydrated";
import FrameCorners from "./hero/FrameCorners";
import MaskedLines from "./MaskedLines";

const EASE = [0.16, 1, 0.3, 1];

const StepTile = ({ step, index, total, progress, animated }) => {
  const span = 1 / total;
  const start = index * span;
  const end = start + span * 0.6;

  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [28, 0]);

  return (
    <motion.li
      style={animated ? { opacity, y } : undefined}
      className="flex gap-5 bg-hero-frame p-6"
    >
      <span className="font-display text-[clamp(1.25rem,1.8vw,1.75rem)] font-light text-hero-ink/25">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-display mb-1 text-lg font-semibold text-hero-ink">
          {step.title}
        </h3>
        <p className="text-[0.9375rem] leading-relaxed text-hero-muted">
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
  animated: PropTypes.bool,
};

const Approach = () => {
  const { t } = useTranslations();
  const trackRef = useRef(null);
  const hydrated = useIsHydrated();

  const steps = t("APPROACH_STEPS");
  const total = steps.length;

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.85", "end 0.6"],
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
      className="relative w-full scroll-mt-24 bg-hero-canvas py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-[110rem] px-3 md:px-6">
        <div className="relative rounded-[20px] bg-hero-frame px-5 py-14 text-hero-ink md:rounded-[28px] md:px-12 md:py-20">
          <FrameCorners />

          <MaskedLines
            as="h2"
            lines={t("approach.headline")}
            lineClassName="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.05] tracking-[-0.02em]"
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
                  className="max-w-[46ch] text-[clamp(1.0625rem,1.4vw,1.25rem)] leading-[1.6] text-hero-muted"
                >
                  {paragraph}
                </motion.p>
              ))}

              <a
                href="#kontakt"
                className="group mt-4 inline-flex items-center gap-2 rounded-full bg-hero-ink px-6 py-3 text-[0.9375rem] font-medium text-hero-canvas transition-colors duration-200 hover:bg-hero-indigo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hero-indigo"
              >
                {t("approach.cta")}
                <FiArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <ul className="space-y-px overflow-hidden rounded-[16px] bg-hero-line/70">
              {steps.map((step, i) => (
                <StepTile
                  key={step.title}
                  step={step}
                  index={i}
                  total={total}
                  progress={progress}
                  animated={hydrated}
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
