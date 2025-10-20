import { useState } from "react";
import PropTypes from "prop-types";
import { PROJECTS, PROJECTS_TEXTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiX, FiEye, FiCode } from "react-icons/fi";
import StarsBackground from "./StarsBackground";

const cardVariants = {
  initial: { opacity: 0, y: 60 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, type: "spring" },
  }),
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", damping: 25, stiffness: 300 },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 },
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <StarsBackground />
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-neutral-900/95 to-neutral-950/95 rounded-2xl border border-neutral-700/50 backdrop-blur-xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-neutral-700/50 bg-neutral-900/80 backdrop-blur-sm rounded-t-2xl">
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              <button
                onClick={onClose}
                className="p-2 text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-neutral-800/50"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <FiCode className="text-purple-400" />
                  {PROJECTS_TEXTS.description}
                </h3>
                <p className="text-neutral-300 leading-relaxed text-base">
                  {project.description}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {PROJECTS_TEXTS.technologies}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.link && (
                <div className="flex gap-4">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink className="w-5 h-5" />
                    {PROJECTS_TEXTS.viewProject}
                  </motion.a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
    link: PropTypes.string,
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section className="relative border-b border-neutral-900 pb-20 overflow-hidden">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl font-bold relative z-10 drop-shadow"
      >
        {PROJECTS_TEXTS.title}{" "}
        <span className="text-purple-400">{PROJECTS_TEXTS.titleHighlight}</span>
      </motion.h2>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            className="group relative rounded-2xl border border-neutral-800/60 bg-gradient-to-br from-neutral-950/80 to-neutral-900/40 backdrop-blur-md shadow-xl overflow-hidden cursor-pointer"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
            whileHover={{
              y: -8,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            onClick={() => openModal(project)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:via-purple-600/5 group-hover:to-pink-600/10 transition-all duration-500 rounded-2xl" />

            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-sm">
                <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                  <FiEye className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-neutral-900/95 via-neutral-900/80 to-transparent">
              <h3 className="text-xl font-bold text-white group-hover:text-purple-100 transition-colors">
                {project.title}
              </h3>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
                  Kliknij aby zobaczyć więcej
                </span>
                <div className="p-2 rounded-full bg-purple-600/20 group-hover:bg-purple-600/30 transition-colors">
                  <FiEye className="w-4 h-4 text-purple-400" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;
