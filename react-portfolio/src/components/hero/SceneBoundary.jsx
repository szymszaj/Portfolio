import { Component } from "react";
import PropTypes from "prop-types";

/** Błąd sceny nie może zdejmować strony - zostaje sam poster. */
class SceneBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    console.warn("Scena 3D wyłączona:", error);
  }

  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}

SceneBoundary.propTypes = {
  children: PropTypes.node,
};

export default SceneBoundary;
