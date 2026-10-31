import PropTypes from "prop-types";
import { motion } from "framer-motion";

const SectionHeading = ({ title, highlight, subtitle }) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -60 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="relative z-10 mb-16 text-center"
  >
    <h2 className="font-display text-4xl font-bold drop-shadow">
      {title}{" "}
      {highlight && (
        <span className="bg-gradient-to-r from-accent to-iris bg-clip-text text-transparent">
          {highlight}
        </span>
      )}
    </h2>
    {subtitle && (
      <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-muted">
        {subtitle}
      </p>
    )}
  </motion.div>
);

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  highlight: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SectionHeading;
