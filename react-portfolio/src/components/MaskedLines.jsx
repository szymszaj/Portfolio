import PropTypes from "prop-types";
import { motion } from "framer-motion";

const MaskedLines = ({
  lines,
  as: Tag = "div",
  className = "",
  lineClassName = "",
  delay = 0,
}) => (
  <Tag className={className}>
    {lines.map((line, i) => (
      <span key={line} className="block overflow-hidden">
        <motion.span
          className={`block ${lineClassName}`}
          initial={{ y: "110%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            delay: delay + i * 0.09,
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {line}
        </motion.span>
      </span>
    ))}
  </Tag>
);

MaskedLines.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.string).isRequired,
  as: PropTypes.elementType,
  className: PropTypes.string,
  lineClassName: PropTypes.string,
  delay: PropTypes.number,
};

export default MaskedLines;
