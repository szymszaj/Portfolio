import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiMail, FiPhone, FiX, FiArrowUpRight } from "react-icons/fi";
import { CONTACT } from "../constants";
import { useTranslations } from "../hooks/useTranslations";

const Navbar = () => {
  const [activeToast, setActiveToast] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { t } = useTranslations();

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/szymonzych-5b2950296/",
      icon: FaLinkedin,
      name: "LinkedIn",
      color: "from-accent-soft to-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30",
      type: "external",
    },
    {
      href: "https://github.com/szymszaj",
      icon: FaGithub,
      name: "GitHub",
      color: "from-line to-ink-muted",
      bgColor: "bg-line/10",
      borderColor: "border-line/30",
      type: "external",
    },
    {
      href: "#contact",
      icon: FiMail,
      name: t("navbar.contact"),
      color: "from-accent-soft to-accent",
      bgColor: "bg-accent-soft/10",
      borderColor: "border-accent-soft/30",
      type: "modal",
    },
  ];

  const handleSocialClick = (e, link, index) => {
    e.preventDefault();

    if (link.type === "modal") {
      setIsContactModalOpen(true);
      return;
    }

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      ) || window.innerWidth <= 768;

    if (isMobile) {
      window.open(link.href, "_blank", "noopener,noreferrer");
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
            className="font-display relative cursor-pointer text-3xl font-bold tracking-tight text-ink transition-colors duration-300 hover:text-accent"
            transition={{ duration: 0.3 }}
          >
            {t("navbar.logo")}
          </motion.span>
        </motion.div>

        <div className="flex items-center justify-center gap-4 lg:gap-6 text-2xl">
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
                  onTouchEnd={(e) => {
                    e.preventDefault();
                    handleSocialClick(e, link, index);
                  }}
                  className={`relative p-3 rounded-xl bg-gradient-to-r ${link.color} text-white shadow-lg transition-all duration-300 hover:shadow-xl border border-white/10`}
                  whileHover={{
                    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
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
              className={`relative px-6 py-4 rounded-2xl ${activeToast.bgColor} bg-surface border ${activeToast.borderColor} shadow-2xl min-w-[280px]`}
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
                    {t("navbar.toastRedirecting")}
                  </motion.h3>
                  <motion.p
                    className="text-ink text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {t("navbar.toastOpening")} {activeToast.name}
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
                    {t("navbar.toastTime")}
                  </motion.span>
                </motion.div>
              </div>

              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent-soft to-iris rounded-b-2xl"
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-canvas-inset/90 p-4"
            onClick={() => setIsContactModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 28, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-surface"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-iris/60 to-transparent" />

              <button
                onClick={() => setIsContactModalOpen(false)}
                aria-label="Zamknij"
                className="absolute right-5 top-5 rounded-full p-2 text-ink-subtle transition-colors duration-200 hover:bg-surface-raised hover:text-ink"
              >
                <FiX className="h-5 w-5" />
              </button>

              <div className="p-8">
                <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-iris">
                  {t("navbar.contact")}
                </span>
                <h2 className="font-display mt-4 text-2xl font-light text-ink">
                  {t("navbar.modalTitle")}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {t("navbar.modalSubtitle")}
                </p>

                <div className="mt-7 space-y-px overflow-hidden rounded-xl border border-line bg-line">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-4 bg-surface p-4 transition-colors duration-200 hover:bg-surface-raised"
                  >
                    <FiMail className="h-4 w-4 shrink-0 text-iris" />
                    <span className="break-all text-sm text-ink">
                      {CONTACT.email}
                    </span>
                  </a>
                  <a
                    href={`tel:${CONTACT.phoneNo.replace(/\s/g, "")}`}
                    className="flex items-center gap-4 bg-surface p-4 transition-colors duration-200 hover:bg-surface-raised"
                  >
                    <FiPhone className="h-4 w-4 shrink-0 text-iris" />
                    <span className="text-sm text-ink">{CONTACT.phoneNo}</span>
                  </a>
                </div>

                <a
                  href="#kontakt"
                  onClick={() => setIsContactModalOpen(false)}
                  className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 font-medium text-canvas transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {t("navbar.modalCta")}
                  <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
