import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { CONTACT, SOCIAL } from "../../constants";
import { useTranslations } from "../../hooks/useTranslations";

const EASE = [0.16, 1, 0.3, 1];

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hero-indigo";

const PILL_PRIMARY =
  `inline-flex items-center rounded-full bg-hero-ink px-5 py-2.5 text-sm font-medium text-hero-canvas ` +
  `transition-colors duration-200 hover:bg-hero-indigo ${FOCUS_RING}`;

const PILL_OUTLINE =
  `inline-flex items-center rounded-full border border-hero-line bg-white/60 px-5 py-2.5 text-sm font-medium text-hero-ink ` +
  `transition-colors duration-200 hover:border-hero-ink/40 hover:bg-white ${FOCUS_RING}`;

const MENU_LINK =
  `block rounded-xl px-3 py-2 text-sm text-hero-ink transition-colors duration-150 hover:bg-hero-canvas ${FOCUS_RING}`;

/** Pasek nad sceną. "Menu" to disclosure zamykany Escapem i klikiem poza. */
const TopBar = ({ style }) => {
  const { t } = useTranslations();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };

    const handlePointerDown = (event) => {
      if (panelRef.current?.contains(event.target)) return;
      if (buttonRef.current?.contains(event.target)) return;
      setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  return (
    <motion.header
      style={style}
      className="absolute inset-x-0 top-0 z-30 text-hero-ink"
    >
      <div className="mx-auto flex max-w-[110rem] items-center gap-4 px-4 py-3.5 md:gap-8 md:px-7 md:py-5">
        <span className="font-display text-xl font-semibold tracking-tight">
          {t("navbar.logo")}
        </span>

        <p className="hero-fade hidden min-w-0 flex-1 truncate text-sm text-hero-muted md:block">
          {t("hero.tagline")}
        </p>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <a href="#kontakt" className={PILL_PRIMARY}>
            {t("hero.cta")}
          </a>

          <button
            type="button"
            ref={buttonRef}
            aria-expanded={open}
            aria-controls="hero-menu"
            onClick={() => setOpen((value) => !value)}
            className={PILL_OUTLINE}
          >
            {t("menu.open")}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="hero-menu"
            ref={panelRef}
            aria-label={t("menu.label")}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="absolute right-4 top-full w-60 rounded-2xl border border-hero-line bg-white p-2 shadow-[0_24px_60px_-28px_rgba(27,23,38,0.45)] md:right-7"
          >
            <ul>
              {t("menu.sections").map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={MENU_LINK}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="my-2 h-px bg-hero-line" />

            <ul>
              {SOCIAL.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${MENU_LINK} text-hero-muted`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className={`${MENU_LINK} break-all text-hero-muted`}
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

TopBar.propTypes = {
  style: PropTypes.object,
};

export default TopBar;
