import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiSend,
  FiCheck,
  FiX,
  FiArrowUpRight,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { CONTACT } from "../constants";
import { useTranslations } from "../hooks/useTranslations";

const EASE = [0.16, 1, 0.3, 1];

const FIELD_CLASS =
  "w-full rounded-xl border border-line bg-canvas/70 px-5 py-4 text-ink placeholder-ink-subtle transition-colors duration-200 focus:border-iris/60 focus:outline-none focus:ring-2 focus:ring-iris/30";

const DETAILS = [
  {
    key: "email",
    icon: FiMail,
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    key: "phone",
    icon: FiPhone,
    value: CONTACT.phoneNo,
    href: `tel:${CONTACT.phoneNo.replace(/\s/g, "")}`,
  },
  { key: "location", icon: FiMapPin, value: CONTACT.address, href: null },
];

export const Contact = () => {
  const form = useRef();
  const sectionRef = useRef(null);
  const { t } = useTranslations();
  const reduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });
  const panelY = useTransform(smooth, [0, 1], ["22%", "0%"]);
  const panelScale = useTransform(smooth, [0, 1], [0.9, 1]);
  const panelRotateX = useTransform(smooth, [0, 1], [34, 0]);
  const panelRadius = useTransform(smooth, [0, 1], ["5rem", "0rem"]);
  const panelOpacity = useTransform(smooth, [0, 0.35], [0.4, 1]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        "Brak konfiguracji EmailJS. Uzupełnij VITE_EMAILJS_SERVICE_ID, " +
          "VITE_EMAILJS_TEMPLATE_ID i VITE_EMAILJS_PUBLIC_KEY w pliku .env " +
          "(oraz w zmiennych środowiskowych na Vercelu).",
      );
      setStatus({
        type: "error",
        message: t("contact.messages.notConfigured"),
      });
      return;
    }

    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey,
      );

      if (result.text === "OK") {
        setStatus({ type: "success", message: t("contact.messages.success") });
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({ type: "error", message: t("contact.messages.error") });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="kontakt"
      className="relative scroll-mt-24"
      style={{ perspective: "1400px", perspectiveOrigin: "50% 100%" }}
    >
      <motion.div
        style={
          reduceMotion
            ? undefined
            : {
                y: panelY,
                scale: panelScale,
                rotateX: panelRotateX,
                opacity: panelOpacity,
                transformOrigin: "50% 100%",
                borderTopLeftRadius: panelRadius,
                borderTopRightRadius: panelRadius,
              }
        }
        className="relative w-full overflow-hidden border-t border-iris/20 bg-gradient-to-b from-iris/[0.14] via-surface to-canvas-inset pt-28 pb-20 shadow-[0_-40px_120px_-40px_rgba(163,113,247,0.35)] lg:pt-40"
      >
        <span
          aria-hidden="true"
          className="font-display pointer-events-none absolute left-1/2 top-10 w-full -translate-x-1/2 select-none text-center text-[22vw] font-bold leading-none tracking-tighter text-transparent opacity-[0.06] [-webkit-text-stroke:1px_#8b949e]"
        >
          CONTACT
        </span>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
          {/* Nagłówek */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="max-w-3xl"
          >
            <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-iris">
              {t("contact.eyebrow")}
            </span>
            <h2 className="font-display mt-6 text-4xl font-light leading-[1.05] tracking-tight text-ink md:text-7xl">
              {t("contact.title")}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              {t("contact.subtitle")}
            </p>
          </motion.div>

          {/* Dane kontaktowe */}
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {DETAILS.map((detail, i) => {
              const Icon = detail.icon;
              const body = (
                <>
                  <Icon className="mb-4 h-5 w-5 text-iris" />
                  <div className="mb-1 text-xs uppercase tracking-[0.2em] text-ink-subtle">
                    {t(`contact.contactInfo.${detail.key}`)}
                  </div>
                  <div className="break-all font-medium text-ink">
                    {detail.value}
                  </div>
                </>
              );

              return (
                <motion.div
                  key={detail.key}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                  className="bg-surface/70 p-7"
                >
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="block transition-colors duration-200 hover:text-iris"
                    >
                      {body}
                    </a>
                  ) : (
                    body
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Formularz */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20"
          >
            <div>
              <h3 className="font-display mb-4 text-2xl font-light text-ink md:text-3xl">
                {t("contact.formTitle")}
              </h3>
              <p className="text-ink-muted">{t("contact.formNote")}</p>
            </div>

            <form ref={form} onSubmit={handleSubmit} className="space-y-5">
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-3 rounded-xl p-4 ${
                    status.type === "success"
                      ? "border border-success/30 bg-success/10 text-success"
                      : "border border-ember/30 bg-ember/10 text-ember"
                  }`}
                >
                  {status.type === "success" ? (
                    <FiCheck className="h-5 w-5 shrink-0" />
                  ) : (
                    <FiX className="h-5 w-5 shrink-0" />
                  )}
                  <span className="font-medium">{status.message}</span>
                </motion.div>
              )}

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm text-ink-muted"
                  >
                    {t("contact.labels.name")}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={FIELD_CLASS}
                    placeholder={t("contact.placeholders.name")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm text-ink-muted"
                  >
                    {t("contact.labels.email")}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={FIELD_CLASS}
                    placeholder={t("contact.placeholders.email")}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm text-ink-muted"
                >
                  {t("contact.labels.subject")}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={FIELD_CLASS}
                  placeholder={t("contact.placeholders.subject")}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm text-ink-muted"
                >
                  {t("contact.labels.message")}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`${FIELD_CLASS} resize-none`}
                  placeholder={t("contact.placeholders.message")}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`group inline-flex items-center gap-3 rounded-full px-7 py-4 font-medium transition-all duration-300 ${
                  isLoading
                    ? "cursor-not-allowed bg-surface-raised text-ink-subtle"
                    : "bg-ink text-canvas hover:-translate-y-0.5"
                }`}
              >
                {isLoading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-ink-subtle border-t-transparent" />
                    {t("contact.buttons.sending")}
                  </>
                ) : (
                  <>
                    <FiSend className="h-4 w-4" />
                    {t("contact.buttons.send")}
                    <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
