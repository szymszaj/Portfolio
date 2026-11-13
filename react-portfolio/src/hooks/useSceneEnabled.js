import { useSyncExternalStore } from "react";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

/**
 * Czy uruchamiać scenę 3D. Nie: w prerenderze, przy prefers-reduced-motion,
 * save-data, słabym sprzęcie i bez WebGL - wtedy zostaje poster.
 */
let webglSupport;

const hasWebGL = () => {
  if (webglSupport !== undefined) return webglSupport;

  try {
    const canvas = document.createElement("canvas");
    webglSupport = Boolean(
      canvas.getContext("webgl2") || canvas.getContext("webgl"),
    );
  } catch {
    webglSupport = false;
  }

  return webglSupport;
};

const hasWeakHardware = () => {
  const cores = navigator.hardwareConcurrency;
  if (typeof cores === "number" && cores > 0 && cores < 4) return true;

  const memory = navigator.deviceMemory;
  if (typeof memory === "number" && memory > 0 && memory < 4) return true;

  return Boolean(navigator.connection?.saveData);
};

const subscribe = (onChange) => {
  const mql = window.matchMedia(REDUCED_MOTION);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
};

const getSnapshot = () => {
  if (window.matchMedia(REDUCED_MOTION).matches) return false;
  if (hasWeakHardware()) return false;
  return hasWebGL();
};

const getServerSnapshot = () => false;

export const useSceneEnabled = () =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
