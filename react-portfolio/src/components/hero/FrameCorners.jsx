import PropTypes from "prop-types";

const POSITIONS = [
  "left-0 top-0",
  "right-0 top-0",
  "bottom-0 left-0",
  "bottom-0 right-0",
];

const FrameCorners = ({ inset = "p-4 md:p-6" }) => (
  <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${inset}`}>
    <div className="relative h-full w-full">
      {POSITIONS.map((position) => (
        <svg
          key={position}
          viewBox="0 0 16 16"
          className={`absolute h-3.5 w-3.5 text-hero-ink/30 ${position}`}
        >
          <path d="M8 1.5v13M1.5 8h13" stroke="currentColor" strokeWidth="1" />
        </svg>
      ))}
    </div>
  </div>
);

FrameCorners.propTypes = {
  inset: PropTypes.string,
};

export default FrameCorners;
