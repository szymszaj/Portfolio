import { useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { FiExternalLink, FiX, FiArrowUpRight, FiCode } from "react-icons/fi";
import { useTranslations } from "../hooks/useTranslations";
import SectionHeading from "./SectionHeading";
import SectionShell from "./SectionShell";

const EASE = [0.16, 1, 0.3, 1];

const modalVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", damping: 26, stiffness: 300 },
  },
  exit: { opacity: 0, scale: 0.94, transition: { duration: 0.2 } },
};

const ProjectModal = ({ project, isOpen, onClose }) => {
  const { t } = useTranslations();
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-canvas-inset/90 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-line bg-surface"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-surface p-6">
              <h2 className="font-display text-2xl font-light text-ink">
                {project.title}
              </h2>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-ink-muted transition-colors hover:bg-surface-raised hover:text-ink"
                aria-label="Zamknij"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="mb-6 aspect-video w-full overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-ink">
                <FiCode className="text-ember" />
                {t("projects.description")}
              </h3>
              <p className="mb-6 leading-relaxed text-ink-muted">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-line bg-surface-raised/60 px-3 py-1.5 text-sm text-ink-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 font-semibold text-canvas transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <FiExternalLink className="h-4 w-4" />
                  {t("projects.viewProject")}
                </a>
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

const ProjectCard = ({ project, index, onOpen, label }) => {
  const flipped = index % 2 === 1;
  const cardRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
    restDelta: 0.001,
  });

  const drift = flipped ? 1 : -1;
  const imageX = useTransform(
    smooth,
    [0, 1],
    [`${drift * 14}%`, `${-drift * 14}%`],
  );
  const imageScale = useTransform(smooth, [0, 0.5, 1], [1.12, 1, 1.12]);

  const imageStyle = reduceMotion ? undefined : { x: imageX };

  return (
    <article ref={cardRef} className="group">
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="grid w-full items-center gap-8 text-left lg:grid-cols-2 lg:gap-16"
      >
        <motion.div
          style={imageStyle}
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE }}
          className={`relative overflow-hidden rounded-2xl border border-line bg-surface ${
            flipped ? "lg:order-2" : ""
          }`}
        >
          <div className="aspect-[16/10] w-full overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              style={reduceMotion ? undefined : { scale: imageScale }}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/70 via-transparent to-transparent opacity-80" />

          <span className="font-display absolute left-5 top-5 rounded-full border border-line bg-canvas/90 px-3 py-1 text-xs text-ink-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.28, ease: EASE }}
          className={flipped ? "lg:order-1" : ""}
        >
          <div className="mb-4 h-px w-16 bg-ember/50 transition-all duration-700 group-hover:w-28" />

          <h3 className="font-display mb-4 text-3xl font-light leading-tight tracking-tight text-ink lg:text-5xl">
            {project.title}
          </h3>

          <p className="mb-6 max-w-xl leading-relaxed text-ink-muted">
            {project.description}
          </p>

          <div className="mb-8 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line px-3 py-1.5 text-sm text-ink-subtle transition-colors duration-300 group-hover:border-ember/40 group-hover:text-ink-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <span className="inline-flex items-center gap-2 font-medium text-ink transition-colors duration-300 group-hover:text-ember">
            {label}
            <FiArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </motion.div>
      </button>
    </article>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onOpen: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

const Projects = () => {
  const { t } = useTranslations();
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
    <SectionShell tint="ember" watermark="WORKS" className="py-24 lg:py-32">
      <SectionHeading
        title={t("projects.title")}
        highlight={t("projects.titleHighlight")}
      />

      <div className="space-y-24 lg:space-y-36">
        {t("PROJECTS").map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            onOpen={openModal}
            label={t("projects.clickToSeeMore")}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </SectionShell>
  );
};

export default Projects;
