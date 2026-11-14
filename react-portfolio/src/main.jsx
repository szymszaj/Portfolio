import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import Root from "./Root.jsx";
import "./index.css";

const container = document.getElementById("root");

const initialContent = window.__CMS_CONTENT__ ?? null;

const tree = (
  <StrictMode>
    <Root initialContent={initialContent} />
  </StrictMode>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
