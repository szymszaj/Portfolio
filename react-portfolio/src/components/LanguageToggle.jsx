import { motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.div
      className="flex items-center bg-neutral-800/50 rounded-xl p-1 backdrop-blur-sm border border-neutral-700/50"
      whileHover={{ scale: 1.05 }}
    >
      <motion.button
        onClick={toggleLanguage}
        className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
          language === "PL"
            ? "text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg"
            : "text-neutral-400 hover:text-white"
        }`}
        whileTap={{ scale: 0.95 }}
      >
        PL
      </motion.button>
      <motion.button
        onClick={toggleLanguage}
        className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
          language === "EN"
            ? "text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg"
            : "text-neutral-400 hover:text-white"
        }`}
        whileTap={{ scale: 0.95 }}
      >
        EN
      </motion.button>
    </motion.div>
  );
};

export default LanguageToggle;
