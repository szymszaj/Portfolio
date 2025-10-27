import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin, FiCode } from "react-icons/fi";
import { useTranslations } from "../hooks/useTranslations";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const Experience = () => {
  const { t } = useTranslations();

  return (
    <section className="relative border-b border-neutral-900 pb-24 overflow-hidden">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
        className="my-20 text-center text-4xl font-bold relative z-10"
      >
        {t("experience.title")}{" "}
        <span className="text-purple-400">
          {t("experience.titleHighlight")}
        </span>
      </motion.h2>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-8">
          {t("EXPERIENCES").map((experience, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative p-8 bg-gradient-to-br from-neutral-950/90 via-neutral-900/80 to-neutral-950/90 rounded-3xl border border-neutral-800/50 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl" />

                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-center gap-4 mb-4 lg:mb-0">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
                        <FiBriefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
                          {experience.role}
                        </h3>
                        <div className="flex items-center gap-2 text-purple-300">
                          <FiMapPin className="w-4 h-4" />
                          <span className="font-medium">
                            {experience.company || "Freelance"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 bg-neutral-800/40 rounded-xl border border-neutral-700/50">
                      <FiCalendar className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-300 font-medium">
                        {experience.year}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    {Array.isArray(experience.description) ? (
                      <ul className="space-y-3">
                        {experience.description.map((item, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start gap-3 text-neutral-300 leading-relaxed"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-neutral-300 leading-relaxed">
                        {experience.description}
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <FiCode className="w-5 h-5 text-cyan-400" />
                      <h4 className="text-lg font-semibold text-white">
                        {t("experience.technologies")}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-neutral-800/80 to-neutral-700/80 border border-neutral-600/30 text-neutral-200 font-medium hover:from-purple-600/20 hover:to-pink-600/20 hover:border-purple-500/30 hover:text-purple-300 transition-all duration-300 cursor-default"
                          whileHover={{ scale: 1.05, y: -2 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ padding: "1px" }}
                >
                  <div className="w-full h-full rounded-3xl bg-neutral-950/90" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute left-1/2 top-32 bottom-24 w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent transform -translate-x-1/2 hidden lg:block" />
    </section>
  );
};

export default Experience;
