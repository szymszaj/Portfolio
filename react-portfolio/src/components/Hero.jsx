import { lazy, Suspense, useRef } from "react";
import PropTypes from "prop-types";
import {
  motion,
  useInView,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useTranslations } from "../hooks/useTranslations";
import { useIsHydrated } from "../hooks/useIsHydrated";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useSceneEnabled } from "../hooks/useSceneEnabled";
import HeroPoster from "./hero/HeroPoster";
import SceneBoundary from "./hero/SceneBoundary";
import RotatingTitles from "./hero/RotatingTitles";
import TopBar from "./hero/TopBar";

const HeroScene = lazy(() => import("./hero/HeroScene"));

const FIRST_NAME = "Szymon";
const LAST_NAME = "Zych";

const SCENE_COUNT_DESKTOP = 42;
const SCENE_COUNT_MOBILE = 18;

const Corner = ({ className }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    className={`absolute h-3.5 w-3.5 text-hero-ink/30 ${className}`}
  >
    <path d="M8 1.5v13M1.5 8h13" stroke="currentColor" strokeWidth="1" />
  </svg>
);

Corner.propTypes = {
  className: PropTypes.string.isRequired,
};

const Hero = () => {
  const { t } = useTranslations();
  const hydrated = useIsHydrated();
  const sceneEnabled = useSceneEnabled();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const trackRef = useRef(null);
  const frameRef = useRef(null);
  const sceneActive = useInView(frameRef, { amount: 0.15 });

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  const frameFactor = useTransform(progress, [0, 0.75], [1, 0]);
  const clipPath = useMotionTemplate`inset(calc(var(--hero-inset-top) * ${frameFactor}) calc(var(--hero-inset) * ${frameFactor}) calc(var(--hero-inset) * ${frameFactor}) calc(var(--hero-inset) * ${frameFactor}) round calc(var(--hero-radius) * ${frameFactor}))`;

  const barOpacity = useTransform(progress, [0, 0.3], [1, 0]);
  const contentOpacity = useTransform(progress, [0, 0.38], [1, 0]);
  const sceneOpacity = useTransform(progress, [0.45, 0.9], [1, 0]);
  const veilOpacity = useTransform(progress, [0.55, 0.95], [0, 1]);

  const sceneCount = isDesktop ? SCENE_COUNT_DESKTOP : SCENE_COUNT_MOBILE;
  const titles = t("hero.titles").filter(
    (title) => typeof title === "string" && title.trim() !== "",
  );

  return (
    <section
      ref={trackRef}
      className="relative h-[180vh] bg-hero-canvas"
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        <motion.div
          ref={frameRef}
          style={hydrated ? { clipPath, willChange: "clip-path" } : undefined}
          className={`absolute inset-0 bg-hero-frame ${
            hydrated ? "" : "hero-frame-static"
          }`}
        >
          <HeroPoster />

          {sceneEnabled && (
            <motion.div
              style={{ opacity: sceneOpacity }}
              className="absolute inset-0"
            >
              <SceneBoundary>
                <Suspense fallback={null}>
                  <HeroScene count={sceneCount} active={sceneActive} />
                </Suspense>
              </SceneBoundary>
            </motion.div>
          )}

          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-2/3"
            style={{
              background:
                "linear-gradient(to top, rgba(243, 240, 251, 0.94) 10%, rgba(243, 240, 251, 0) 100%)",
            }}
          />

          <motion.div
            style={{ opacity: veilOpacity }}
            className="pointer-events-none absolute inset-0 bg-canvas"
          />

          <motion.div
            style={hydrated ? { opacity: contentOpacity } : undefined}
            className="hero-frame-pad absolute inset-0"
          >
            <Corner className="left-0 top-0" />
            <Corner className="right-0 top-0" />
            <Corner className="bottom-0 left-0" />
            <Corner className="bottom-0 right-0" />

            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-5 p-5 md:flex-row md:items-end md:justify-between md:gap-10 md:p-9">
              <div className="min-w-0">
                <h1 className="font-display pb-[0.06em] text-[clamp(4.5rem,13vw,12rem)] font-light leading-[0.9] tracking-[-0.03em] text-hero-ink">
                  <span className="block overflow-hidden">
                    <span className="hero-rise" style={{ "--hero-index": 0 }}>
                      {FIRST_NAME}
                    </span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="hero-rise" style={{ "--hero-index": 1 }}>
                      {LAST_NAME}
                    </span>
                  </span>
                  <span className="sr-only">{` – ${t("hero.role")}`}</span>
                </h1>

                <p
                  className="hero-late font-display mt-6 text-[clamp(1.75rem,3.2vw,3rem)] leading-[1.2] text-hero-indigo md:mt-8"
                  style={{ "--hero-index": 2 }}
                >
                  <RotatingTitles titles={titles} />
                </p>

                <p
                  className="hero-late mt-4 max-w-[min(40ch,100%)] text-[clamp(1.125rem,1.6vw,1.5rem)] leading-[1.5] text-hero-muted md:mt-6"
                  style={{ "--hero-index": 3 }}
                >
                  {t("hero.lead")}
                </p>
              </div>

              <div
                className="hero-late flex shrink-0 flex-col items-center gap-2 self-end pb-1 text-[0.9375rem] text-hero-muted"
                style={{ "--hero-index": 4 }}
              >
                <span>{t("hero.scroll")}</span>
                <span
                  aria-hidden="true"
                  className="hidden h-10 w-px bg-hero-ink/25 md:block"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <TopBar style={hydrated ? { opacity: barOpacity } : undefined} />
      </div>
    </section>
  );
};

export default Hero;
