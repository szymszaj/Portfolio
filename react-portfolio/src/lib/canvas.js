/** Limit DPR canvasów - przy DPR 3 to 4x mniej pikseli na klatkę. */
export const MAX_CANVAS_DPR = 1.5;

export const canvasDpr = () =>
  Math.min(window.devicePixelRatio || 1, MAX_CANVAS_DPR);
