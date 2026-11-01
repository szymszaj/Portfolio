import { lazy, Suspense } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import InteractiveBackground from "./components/InteractiveBackground";
import About from "./components/About";

const Manifesto = lazy(() => import("./components/Manifesto"));
const Approach = lazy(() => import("./components/Approach"));
const Technologies = lazy(() => import("./components/Technologies"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
// const Projects = lazy(() => import("./components/Projects"));
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

const App = () => {
  return (
    <div className="overflow-x-clip text-ink antialiased selection:bg-accent selection:text-canvas">
      <InteractiveBackground />

      {/* Navbar nakłada się na pełnoekranowe intro */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
          <Navbar />
        </div>
      </header>

      <main className="relative z-10">
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
  );
};

export default App;
