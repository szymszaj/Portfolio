import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { useTranslations } from "../hooks/useTranslations";
import Serpentine from "./Serpentine";
import MaskedLines from "./MaskedLines";

const Approach = () => {
  const { t } = useTranslations();

  return (
    <section className="relative overflow-hidden bg-paper py-40 text-paper-ink lg:py-56">
      <Serpentine color="#3b4ee0" opacity={0.9} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
        <MaskedLines
          lines={t("approach.headline")}
          lineClassName="font-display text-[8vw] font-light leading-[1.02] tracking-[-0.03em] lg:text-[4.6vw]"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            {t("approach.paragraphs").map((paragraph) => (
              <motion.p
                key={paragraph}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg leading-relaxed text-paper-muted"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.a
              href="#kontakt"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="group mt-4 inline-flex items-center gap-3 rounded-full bg-paper-ink px-7 py-4 font-medium text-paper transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-paper" />
              {t("approach.cta")}
              <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </div>

          <ul className="space-y-px overflow-hidden rounded-2xl border border-paper-line bg-paper-line">
            {t("APPROACH_STEPS").map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex gap-5 bg-paper p-6"
              >
                <span className="font-display text-sm font-semibold text-paper-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display mb-1 text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-paper-muted">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Approach;
