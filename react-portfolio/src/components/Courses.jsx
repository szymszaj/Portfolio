import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { COURSES, COURSES_TEXTS } from "../constants";
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

  const getLevelColor = (level) => {
    switch (level) {
      case "Podstawowy":
        return "from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-300";
      case "Średniozaawansowany":
        return "from-yellow-500/20 to-orange-500/20 border-yellow-500/30 text-yellow-300";
      case "Zaawansowany":
        return "from-red-500/20 to-pink-500/20 border-red-500/30 text-red-300";
      default:
        return "from-gray-500/20 to-neutral-500/20 border-gray-500/30 text-gray-300";
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
      <div className="relative h-full bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 rounded-2xl border border-neutral-800/50 backdrop-blur-sm overflow-hidden hover:border-purple-500/30 transition-all duration-300">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative p-6 h-full flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30">
                <FiBook className="w-5 h-5 text-purple-300" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg leading-tight group-hover:text-purple-300 transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-neutral-400 text-sm">{course.provider}</p>
              </div>
            </div>
          </div>

          <p className="text-neutral-300 text-sm leading-relaxed mb-4 flex-grow">
            {course.description}
          </p>

          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-6 text-sm text-neutral-400">
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
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <FiCalendar className="w-4 h-4" />
                <span>
                  {COURSES_TEXTS.completed}: {course.completedDate}
                </span>
              </div>
            )}

            {course.progress !== undefined && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-400">Postęp kursu:</span>
                  <span className="text-neutral-300 font-medium">
                    {course.progress}%
                  </span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${
                      course.progress === 100
                        ? "bg-gradient-to-r from-green-500 to-emerald-500"
                        : course.progress >= 80
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                        : course.progress >= 50
                        ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                        : "bg-gradient-to-r from-purple-500 to-pink-500"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>
            )}

            <div className="flex items-center gap-2">
              <FiAward className="w-4 h-4 text-neutral-400" />
              <span
                className={`px-2 py-1 rounded-md bg-gradient-to-r ${getLevelColor(
                  course.level
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
                  className="px-2 py-1 text-xs font-medium bg-neutral-800/50 text-neutral-300 rounded-md border border-neutral-700/50"
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
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-200 text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiExternalLink className="w-4 h-4" />
              {COURSES_TEXTS.viewCertificate}
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

  const completedCount = COURSES.filter(
    (course) => course.status === "completed"
  ).length;
  const inProgressCount = COURSES.filter(
    (course) => course.status === "inProgress"
  ).length;

  const displayedCourses = showAll ? COURSES : COURSES.slice(0, 3);
  const hasMoreCourses = COURSES.length > 3;

  return (
    <div className="border-b border-neutral-800 pb-12 pt-12 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl lg:text-4xl font-bold  text-white mb-4">
          {COURSES_TEXTS.title}{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {COURSES_TEXTS.titleHighlight}
          </span>
        </h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          {COURSES_TEXTS.subtitle}
        </p>

        <div className="flex items-center justify-center gap-6 mt-6">
          <div className="flex items-center gap-2 text-green-400">
            <FiCheckCircle className="w-5 h-5" />
            <span className="font-medium">{completedCount} ukończonych</span>
          </div>
          <div className="flex items-center gap-2 text-blue-400">
            <FiPlay className="w-5 h-5" />
            <span className="font-medium">{inProgressCount} w trakcie</span>
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
            className="p-4 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 hover:from-purple-600/30 hover:to-pink-600/30 hover:border-purple-400/50 transition-all duration-300 group"
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
              <FiChevronDown className="w-6 h-6 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default Courses;
