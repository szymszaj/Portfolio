import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

const RotatingTitles = ({ titles, interval = 2800, className = "" }) => {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (titles.length < 2 || reduceMotion) return undefined;

    const id = setInterval(() => {
      setIndex((current) => (current + 1) % titles.length);
    }, interval);

    return () => clearInterval(id);
  }, [titles.length, interval, reduceMotion]);

  const title = titles[index] ?? titles[0];

  if (reduceMotion) {
    return <span className={className}>{titles.join(" · ")}</span>;
  }

  return (
    <span className={`relative block overflow-hidden ${className}`}>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={index}
          className="block"
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-110%" }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          {title}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

RotatingTitles.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number,
  className: PropTypes.string,
};

export default RotatingTitles;
