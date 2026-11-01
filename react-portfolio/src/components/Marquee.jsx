import PropTypes from "prop-types";

const Marquee = ({
  children,
  reverse = false,
  duration = 40,
  className = "",
}) => (
  <div className={`edge-fade group relative overflow-hidden ${className}`}>
    <div
      className={`flex w-max ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      } group-hover:[animation-play-state:paused]`}
      style={{ animationDuration: `${duration}s` }}
    >
      <div className="flex shrink-0 items-center" aria-hidden="false">
        {children}
      </div>
      <div className="flex shrink-0 items-center" aria-hidden="true">
        {children}
      </div>
    </div>
  </div>
);

Marquee.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
  duration: PropTypes.number,
  className: PropTypes.string,
};

export default Marquee;
