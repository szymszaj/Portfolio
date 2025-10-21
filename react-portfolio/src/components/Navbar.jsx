import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Contact } from "./Contact";

const Navbar = () => {
  const [activeToast, setActiveToast] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/szymon-zych-5b2950296/",
      icon: FaLinkedin,
      name: "LinkedIn",
      color: "from-blue-600 to-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      type: "external",
    },
    {
      href: "https://github.com/szymszaj",
      icon: FaGithub,
      name: "GitHub",
      color: "from-gray-600 to-gray-400",
      bgColor: "bg-gray-500/10",
      borderColor: "border-gray-500/30",
      type: "external",
    },
    {
      href: "#contact",
      icon: FiMail,
      name: "Kontakt",
      color: "from-purple-600 to-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      type: "modal",
    },
  ];

  const handleSocialClick = (e, link, index) => {
    e.preventDefault();

    if (link.type === "modal") {
      setIsContactModalOpen(true);
      return;
    }

    setActiveToast({
      ...link,
      id: index,
    });

    setTimeout(() => {
      window.open(link.href, "_blank", "noopener,noreferrer");
      setActiveToast(null);
    }, 1500);
  };

  return (
    <>
      <nav className="relative mb-20 flex items-center justify-between py-6 px-4">
        <motion.div
          className="flex flex-shrink-0 items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="relative bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl font-bold text-transparent cursor-pointer"
            whileHover={{
              background: "linear-gradient(45deg, #f97316, #8b5cf6, #06b6d4)",
              backgroundClip: "text",
            }}
            transition={{ duration: 0.3 }}
          >
            SH
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 opacity-0 blur-xl"
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
          </motion.span>
        </motion.div>

        <div className="flex items-center justify-center gap-6 text-2xl">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={index}
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.button
                  onClick={(e) => handleSocialClick(e, link, index)}
                  className={`relative p-3 rounded-xl bg-gradient-to-r ${link.color} text-white shadow-lg transition-all duration-300 hover:shadow-xl border border-white/10 backdrop-blur-sm`}
                  whileHover={{
                    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                    y: -2,
                  }}
                >
                  <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />

                  <Icon className="relative z-10 w-5 h-5" />

                  <motion.div
                    className="absolute inset-0 rounded-xl bg-white/30"
                    initial={{ scale: 0, opacity: 0 }}
                    whileTap={{ scale: 1.2, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>

                <motion.div
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg whitespace-nowrap opacity-0 pointer-events-none"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 border-4 border-transparent border-b-black/80" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </nav>

      <AnimatePresence>
        {activeToast && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -100 }}
            className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
          >
            <motion.div
              className={`relative px-6 py-4 rounded-2xl ${activeToast.bgColor} backdrop-blur-xl border ${activeToast.borderColor} shadow-2xl min-w-[280px]`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-white/10" />
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl" />

              <div className="relative z-10 flex items-center gap-4">
                <motion.div
                  className={`p-3 rounded-xl bg-gradient-to-r ${activeToast.color} text-white shadow-lg`}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {activeToast.icon && <activeToast.icon className="w-6 h-6" />}
                </motion.div>

                <div className="flex-1">
                  <motion.h3
                    className="font-bold text-white text-lg"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    Przekierowywanie...
                  </motion.h3>
                  <motion.p
                    className="text-neutral-300 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Otwieramy {activeToast.name}
                  </motion.p>
                </div>

                <motion.div className="flex flex-col items-center gap-2">
                  <motion.div
                    className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.span
                    className="text-white/80 text-xs font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    2s
                  </motion.span>
                </motion.div>
              </div>

              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-b-2xl"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "linear" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsContactModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-neutral-900/95 backdrop-blur-xl rounded-3xl border border-neutral-700/50 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-6 right-6 z-10">
                <motion.button
                  onClick={() => setIsContactModalOpen(false)}
                  className="p-2 rounded-xl bg-neutral-800/80 text-neutral-400 hover:text-white hover:bg-neutral-700/80 transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              <div className="p-8 pb-0">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl font-bold text-white mb-2"
                >
                  📨
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-neutral-400"
                >
                  Masz pytania lub chcesz porozmawiać o współpracy? Napisz do
                  mnie!
                </motion.p>
              </div>

              <div className="p-4">
                <Contact />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
