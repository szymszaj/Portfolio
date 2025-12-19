import { lazy, Suspense } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const Technologies = lazy(() => import("./components/Technologies"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Courses = lazy(() => import("./components/Courses"));
const Contact = lazy(() =>
  import("./components/Contact").then((module) => ({ default: module.Contact }))
);

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
  </div>
);

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* <ParticleBackground /> */}

      <div className="container mx-auto px-6 relative z-10">
        <Navbar />
        <Hero />
        {/* <About /> */}
        <Suspense fallback={<LoadingSpinner />}>
          <Technologies />
          <Experience />
          <Projects />
          <Courses />
          <Contact />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
