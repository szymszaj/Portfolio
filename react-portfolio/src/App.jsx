import { lazy, Suspense } from "react";
import PropTypes from "prop-types";
import Hero from "./components/Hero";
import About from "./components/About";
import { CmsProvider } from "./context/CmsContext";

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
  return (
    <CmsProvider initialContent={initialContent}>
      <div className="overflow-x-clip bg-canvas text-ink antialiased selection:bg-accent selection:text-canvas">
        <main>
          <Hero />

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
        </main>
      </div>
    </CmsProvider>
  );
};

App.propTypes = {
  initialContent: PropTypes.object,
};

export default App;
