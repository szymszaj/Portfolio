import React from "react";
import ReactDOM from "react-dom/client";
import { ReactLenis } from "lenis/react";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactLenis
      root
      options={{
        lerp: 0.14,
        duration: 1.0,
        wheelMultiplier: 1.1,
        anchors: true,
      }}
    >
      <App />
    </ReactLenis>
  </React.StrictMode>,
);
