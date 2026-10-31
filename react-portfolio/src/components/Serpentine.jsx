import { useRef } from "react";
import PropTypes from "prop-types";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

const Serpentine = ({ color = "#3b4ee0", opacity = 1 }) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 26,
    restDelta: 0.001,
  });

  const rotate = useTransform(smooth, [0, 1], [-14, 14]);
  const y = useTransform(smooth, [0, 1], ["-8%", "8%"]);
  const x = useTransform(smooth, [0, 1], ["-4%", "4%"]);

  const style = reduceMotion ? undefined : { rotate, y, x };

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ opacity }}
    >
      <motion.svg
        style={style}
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        className="absolute left-[-30%] top-[-35%] h-[170%] w-[150%]"
      >
        <circle
          cx="500"
          cy="500"
          r="430"
          fill="none"
          stroke={color}
          strokeWidth="46"
        />
        <circle
          cx="500"
          cy="500"
          r="300"
          fill="none"
          stroke={color}
          strokeWidth="14"
          strokeDasharray="6 26"
          strokeLinecap="round"
          opacity="0.55"
        />
        <circle
          cx="500"
          cy="500"
          r="560"
          fill="none"
          stroke={color}
          strokeWidth="2"
          opacity="0.4"
        />
      </motion.svg>
    </div>
  );
};

Serpentine.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.number,
};

export default Serpentine;
