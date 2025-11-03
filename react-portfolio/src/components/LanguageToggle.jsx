import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import { useState } from "react";
import { FiGlobe } from "react-icons/fi";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    if (language !== lang) {
      toggleLanguage();
    }
    setIsOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.button
        className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transition-all duration-300 hover:shadow-xl border border-white/10 backdrop-blur-sm"
        whileHover={{
          scale: 1.1,
          y: -2,
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative flex items-center gap-1">
          <FiGlobe className="w-5 h-5" />
          <span className="text-xs font-bold">{language}</span>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 bg-neutral-800/95 backdrop-blur-xl border border-neutral-700/50 rounded-xl overflow-hidden shadow-2xl min-w-[100px] z-50"
          >
            <motion.button
              onClick={() => handleLanguageChange("PL")}
              className={`w-full px-3 py-2 text-left transition-all duration-200 flex items-center gap-2 ${
                language === "PL"
                  ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white"
                  : "text-neutral-300 hover:bg-neutral-700/50 hover:text-white"
              }`}
              whileHover={{ x: 4 }}
            >
              <span className="text-sm">🇵🇱</span>
              <span className="font-medium text-sm">PL</span>
              {language === "PL" && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-500"
                />
              )}
            </motion.button>

            <div className="h-px bg-neutral-700/50" />

            <motion.button
              onClick={() => handleLanguageChange("EN")}
              className={`w-full px-3 py-2 text-left transition-all duration-200 flex items-center gap-2 ${
                language === "EN"
                  ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white"
                  : "text-neutral-300 hover:bg-neutral-700/50 hover:text-white"
              }`}
              whileHover={{ x: 4 }}
            >
              <span className="text-sm">🇬🇧</span>
              <span className="font-medium text-sm">EN</span>
              {language === "EN" && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-500"
                />
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageToggle;
