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

// Scena jest ciężka (three + drei), więc ląduje w osobnym chunku i montuje
// się dopiero po hydracji. LCP zostaje tekstem h1, nie canvasem.
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
  // Scena liczy klatki tylko wtedy, gdy ramka jest na ekranie.
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

  // 1 -> 0: marginesy i promień ramki znikają, scena rozszerza się na całą
  // szerokość i przechodzi w ciemną sekcję poniżej. clip-path zamiast zmiany
  // layoutu, żeby canvas nie był przeliczany przy każdej klatce.
  const frameFactor = useTransform(progress, [0, 0.75], [1, 0]);
  const clipPath = useMotionTemplate`inset(calc(var(--hero-inset-top) * ${frameFactor}) calc(var(--hero-inset) * ${frameFactor}) calc(var(--hero-inset) * ${frameFactor}) calc(var(--hero-inset) * ${frameFactor}) round calc(var(--hero-radius) * ${frameFactor}))`;

  const barOpacity = useTransform(progress, [0, 0.3], [1, 0]);
  const contentOpacity = useTransform(progress, [0, 0.38], [1, 0]);
  const sceneOpacity = useTransform(progress, [0.45, 0.9], [1, 0]);
  const veilOpacity = useTransform(progress, [0.55, 0.95], [0, 1]);

  const sceneCount = isDesktop ? SCENE_COUNT_DESKTOP : SCENE_COUNT_MOBILE;

  return (
    // Wysokość ścieżki scrolla jest stała (także w prerenderze): useScroll
    // mierzy element raz przy montażu i zakres 0 dawałby progress = 1.
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

          {/* Pod tekstem: gwarantuje kontrast niezależnie od tego, co akurat
              dryfuje w scenie. */}
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

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 md:p-9">
              <div className="min-w-0">
                <h1 className="font-display text-[clamp(2.6rem,8.5vw,7rem)] font-light leading-[0.94] tracking-[-0.035em] text-hero-ink">
                  <span className="block overflow-hidden">
                    <span
                      className="hero-rise"
                      style={{ "--hero-delay": "0.05s" }}
                    >
                      {FIRST_NAME}
                    </span>
                  </span>
                  <span className="block overflow-hidden">
                    <span
                      className="hero-rise"
                      style={{ "--hero-delay": "0.14s" }}
                    >
                      {LAST_NAME}
                    </span>
                  </span>
                  <span className="sr-only">{` – ${t("hero.role")}`}</span>
                </h1>

                <p
                  className="hero-fade font-display mt-4 text-lg text-hero-indigo md:mt-6 md:text-2xl"
                  style={{ "--hero-delay": "0.34s" }}
                >
                  <RotatingTitles titles={t("hero.titles")} />
                </p>

                <p
                  className="hero-fade mt-4 hidden max-w-md text-sm leading-relaxed text-hero-muted sm:block"
                  style={{ "--hero-delay": "0.44s" }}
                >
                  {t("hero.lead")}
                </p>
              </div>

              <div
                className="hero-fade flex shrink-0 flex-col items-center gap-2 pb-1 text-sm text-hero-muted"
                style={{ "--hero-delay": "0.5s" }}
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
