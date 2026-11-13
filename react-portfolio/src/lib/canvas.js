export const MAX_CANVAS_DPR = 1.5;

export const canvasDpr = () =>
  Math.min(window.devicePixelRatio || 1, MAX_CANVAS_DPR);
