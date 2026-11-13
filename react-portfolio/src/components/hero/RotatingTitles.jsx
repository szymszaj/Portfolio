import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

/** Tytuły z hero.titles pod h1; pierwszy statycznie, rotacja po montażu. */
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
    <span className={`relative block h-[1.35em] overflow-hidden ${className}`}>
      <AnimatePresence initial={false}>
        <motion.span
          key={index}
          className="absolute inset-x-0 top-0 block"
          initial={{ y: "115%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-115%" }}
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
