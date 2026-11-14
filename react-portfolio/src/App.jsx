import { lazy, Suspense, useRef } from "react";
import PropTypes from "prop-types";
import Hero from "./components/Hero";
import About from "./components/About";
import { CmsProvider } from "./context/CmsContext";
import { useIntro } from "./hooks/useIntro";

const Manifesto = lazy(() => import("./components/Manifesto"));
const Approach = lazy(() => import("./components/Approach"));
const Technologies = lazy(() => import("./components/Technologies"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Courses = lazy(() => import("./components/Courses"));
const Contact = lazy(() =>
  import("./components/Contact").then((module) => ({
    default: module.Contact,
  })),
);

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
  </div>
);

const App = ({ initialContent = null }) => {
  const restRef = useRef(null);
  useIntro(restRef);

  return (
    <CmsProvider initialContent={initialContent}>
      <div className="overflow-x-clip bg-canvas text-ink antialiased selection:bg-accent selection:text-canvas">
        <main>
          <Hero />

          <div ref={restRef} className="intro-hidden">
            <Suspense fallback={<LoadingSpinner />}>
              <Manifesto />
            </Suspense>

            <About />

            <Suspense fallback={<LoadingSpinner />}>
              <Approach />
              <Technologies />
              <Experience />
              <Education />
              <Courses />
              <Contact />
            </Suspense>
          </div>
        </main>
      </div>
    </CmsProvider>
  );
};

App.propTypes = {
  initialContent: PropTypes.object,
};

export default App;
