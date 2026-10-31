import { useRef } from "react";
import PropTypes from "prop-types";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

const DriftText = ({
  children,
  direction = "left",
  distance = 18,
  align = "left",
  className = "",
}) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  const sign = direction === "left" ? -1 : 1;
  const x = useTransform(
    smooth,
    [0, 1],
    [`${-sign * distance}%`, `${sign * distance}%`],
  );
  const opacity = useTransform(smooth, [0, 0.25, 0.75, 1], [0.15, 1, 1, 0.15]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={reduceMotion ? undefined : { x, opacity }}
        className={align === "right" ? "text-right" : "text-left"}
      >
        {children}
      </motion.div>
    </div>
  );
};

DriftText.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(["left", "right"]),
  distance: PropTypes.number,
  align: PropTypes.oneOf(["left", "right"]),
  className: PropTypes.string,
};

export default DriftText;
