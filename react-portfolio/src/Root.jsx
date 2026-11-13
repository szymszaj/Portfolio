import PropTypes from "prop-types";
import { MotionConfig } from "framer-motion";
import { ReactLenis } from "lenis/react";
import App from "./App.jsx";

const LENIS_OPTIONS = {
  lerp: 0.14,
  duration: 1.0,
  wheelMultiplier: 1.1,
  anchors: true,
};

/** Wspólny korzeń dla klienta i prerenderu - oba muszą dać to samo drzewo. */
const Root = ({ initialContent = null }) => (
  <MotionConfig reducedMotion="user">
    <ReactLenis root options={LENIS_OPTIONS}>
      <App initialContent={initialContent} />
    </ReactLenis>
  </MotionConfig>
);

Root.propTypes = {
  initialContent: PropTypes.object,
};

export default Root;
