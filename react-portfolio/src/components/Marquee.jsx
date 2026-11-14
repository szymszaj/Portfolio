import { useRef } from "react";
import PropTypes from "prop-types";
import { useInView } from "framer-motion";

const Marquee = ({
  children,
  reverse = false,
  duration = 40,
  className = "",
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "200px 0px" });

  return (
    <div
      ref={ref}
      className={`edge-fade group relative overflow-hidden ${className}`}
    >
      <div
        className={`flex w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused] ${
          inView ? "" : "[animation-play-state:paused]"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};

Marquee.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
  duration: PropTypes.number,
  className: PropTypes.string,
};

export default Marquee;
