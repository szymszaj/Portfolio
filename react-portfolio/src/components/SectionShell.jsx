import PropTypes from "prop-types";

const TINTS = {
  accent: "from-accent/[0.08]",
  iris: "from-iris/[0.08]",
  success: "from-success/[0.07]",
  amber: "from-amber/[0.07]",
  ember: "from-ember/[0.07]",
};

const SectionShell = ({
  id,
  tint = "accent",
  watermark,
  className = "",
  children,
}) => (
  <section
    id={id}
    className={`relative w-full overflow-hidden border-b border-line-muted ${
      id ? "scroll-mt-24" : ""
    } ${className}`}
  >
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${
        TINTS[tint] ?? TINTS.accent
      } via-transparent to-transparent`}
    />

    {watermark && (
      <span
        aria-hidden="true"
        className="font-display pointer-events-none absolute -top-4 left-1/2 w-full -translate-x-1/2 select-none text-center text-[22vw] font-bold leading-none tracking-tighter text-transparent opacity-[0.07] [-webkit-text-stroke:1px_#8b949e]"
      >
        {watermark}
      </span>
    )}

    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
      {children}
    </div>
  </section>
);

SectionShell.propTypes = {
  id: PropTypes.string,
  tint: PropTypes.oneOf(["accent", "iris", "success", "amber", "ember"]),
  watermark: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SectionShell;
