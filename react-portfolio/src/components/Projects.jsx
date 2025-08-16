import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import StarsBackground from "./StarsBackground";

const cardVariants = {
  initial: { opacity: 0, y: 60 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.11, duration: 0.6, type: "spring" },
  }),
};

const Projects = () => {
  return (
    <section className="relative border-b border-neutral-900 pb-20 overflow-hidden">
      {/* <StarsBackground /> */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl font-bold relative z-10 drop-shadow"
      >
        Wybrane <span className="text-purple-400">projekty</span>
      </motion.h2>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-2 md:px-0">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            className="group rounded-2xl border border-neutral-800/60 bg-neutral-950/75 backdrop-blur-md shadow-xl p-5 flex flex-col transition duration-300 hover:shadow-purple-900/30 hover:-translate-y-2"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
          >
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-110"
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40"
              >
                {/* <span className="px-4 py-2 text-sm font-semibold rounded-lg bg-purple-800/80 text-white shadow">
                  Zobacz projekt
                </span> */}
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-1 text-white text-center">
              {project.title}
            </h3>
            <p className="text-neutral-400 text-sm mb-2 text-center min-h-[56px]">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 justify-center mt-auto">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-neutral-900 px-2 py-1 text-xs font-medium text-purple-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
