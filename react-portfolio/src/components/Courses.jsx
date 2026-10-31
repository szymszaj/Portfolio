import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useTranslations } from "../hooks/useTranslations";
import Serpentine from "./Serpentine";
import {
  FiBook,
  FiCalendar,
  FiClock,
  FiExternalLink,
  FiUser,
  FiAward,
  FiPlay,
  FiCheckCircle,
  FiChevronDown,
} from "react-icons/fi";

const CourseCard = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslations();

  const getLevelColor = (level) => {
    switch (level) {
      case "Podstawowy":
        return "bg-emerald-50 border-emerald-200 text-emerald-700";
      case "Średniozaawansowany":
        return "bg-amber-50 border-amber-200 text-amber-700";
      case "Zaawansowany":
        return "bg-rose-50 border-rose-200 text-rose-700";
      default:
        return "bg-slate-50 border-slate-200 text-slate-700";
    }
  };

  return (
    <motion.div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative h-full bg-white rounded-2xl border border-paper-line overflow-hidden hover:border-accent-soft/40 transition-colors duration-300 shadow-sm">
        <motion.div
          className="absolute inset-0 bg-accent-soft/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative p-6 h-full flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent-soft/10 border border-accent-soft/25">
                <FiBook className="w-5 h-5 text-accent-soft" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-paper-ink text-lg leading-tight transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-paper-muted text-sm">{course.provider}</p>
              </div>
            </div>
          </div>

          <p className="text-paper-muted text-sm leading-relaxed mb-4 flex-grow">
            {course.description}
          </p>

          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-6 text-sm text-paper-muted">
              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiUser className="w-4 h-4" />
                <span>{course.instructor}</span>
              </div>
            </div>

            {course.completedDate && (
              <div className="flex items-center gap-2 text-sm text-paper-muted">
                <FiCalendar className="w-4 h-4" />
                <span>
                  {t("courses.completed")}: {course.completedDate}
                </span>
              </div>
            )}

            {course.progress !== undefined && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-paper-muted">Postęp kursu:</span>
                  <span className="text-paper-ink font-medium">
                    {course.progress}%
                  </span>
                </div>
                <div className="w-full bg-paper-line rounded-full h-2 overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${
                      course.progress === 100
                        ? "bg-gradient-to-r from-success to-accent"
                        : course.progress >= 80
                          ? "bg-gradient-to-r from-accent to-accent-soft"
                          : course.progress >= 50
                            ? "bg-gradient-to-r from-amber to-ember"
                            : "bg-gradient-to-r from-accent-soft to-iris"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>
            )}

            <div className="flex items-center gap-2">
              <FiAward className="w-4 h-4 text-paper-muted" />
              <span
                className={`px-2 py-1 rounded-md ${getLevelColor(
                  course.level,
                )} text-xs font-medium border`}
              >
                {course.level}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {course.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 text-xs font-medium bg-paper-line/60 text-paper-ink rounded-md border border-paper-line"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {course.certificateUrl && course.status === "completed" && (
            <motion.a
              href={course.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-paper-ink text-paper font-medium rounded-lg transition-transform duration-200 hover:-translate-y-0.5 text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiExternalLink className="w-4 h-4" />
              {t("courses.viewCertificate")}
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
    provider: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    completedDate: PropTypes.string,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    certificateUrl: PropTypes.string,
    level: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    progress: PropTypes.number,
  }).isRequired,
};

const Courses = () => {
  const [showAll, setShowAll] = useState(false);
  const { t } = useTranslations();

  const completedCount = t("COURSES").filter(
    (course) => course.status === "completed",
  ).length;
  const inProgressCount = t("COURSES").filter(
    (course) => course.status === "inProgress",
  ).length;

  const displayedCourses = showAll ? t("COURSES") : t("COURSES").slice(0, 3);
  const hasMoreCourses = t("COURSES").length > 3;

  return (
    <section className="relative w-full overflow-hidden bg-paper py-28 text-paper-ink lg:py-40">
      {/* Siatka techniczna zamiast pustej bieli */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55] [background-image:linear-gradient(to_right,#d3d6e0_1px,transparent_1px),linear-gradient(to_bottom,#d3d6e0_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,black,transparent)]"
      />

      <Serpentine color="#3b4ee0" opacity={0.5} />

      <span
        aria-hidden="true"
        className="font-display pointer-events-none absolute left-1/2 top-2 w-full -translate-x-1/2 select-none text-center text-[23vw] font-bold leading-none tracking-tighter text-transparent opacity-30 [-webkit-text-stroke:2px_#b9bed0]"
      >
        LEARN
      </span>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="font-display text-3xl lg:text-5xl font-light tracking-tight text-paper-ink mb-4">
          {t("courses.title")}{" "}
          <span className="text-accent-soft">
            {t("courses.titleHighlight")}
          </span>
        </h2>
        <p className="text-paper-muted text-lg max-w-2xl mx-auto">
          {t("courses.subtitle")}
        </p>

        <div className="flex items-center justify-center gap-6 mt-6">
          <div className="flex items-center gap-2 text-success">
            <FiCheckCircle className="w-5 h-5" />
            <span className="font-medium">
              {completedCount} {t("courses.completedCount")}
            </span>
          </div>
          <div className="flex items-center gap-2 text-accent">
            <FiPlay className="w-5 h-5" />
            <span className="font-medium">
              {inProgressCount} {t("courses.inProgressCount")}
            </span>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCourses.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>

      {hasMoreCourses && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-8 sm:mt-12"
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="p-4 rounded-full bg-gradient-to-r from-accent-soft/20 to-iris/20 border border-accent-soft/30 hover:from-accent-soft/30 hover:to-iris/30 hover:border-accent/50 transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{
                y: showAll ? 0 : [0, -8, 0],
                rotate: showAll ? 180 : 0,
              }}
              transition={{
                y: {
                  duration: 1.5,
                  repeat: showAll ? 0 : Infinity,
                  ease: "easeInOut",
                },
                rotate: { duration: 0.3 },
              }}
            >
              <FiChevronDown className="w-6 h-6 text-accent group-hover:text-accent transition-colors duration-300" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
      </div>
    </section>
  );
};

export default Courses;
