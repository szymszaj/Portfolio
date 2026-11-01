import { useEffect, useRef } from "react";

const LINE_COUNT = 26;
const STEP = 14;

const WaveField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let frameId = 0;
    let running = false;
    let time = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < LINE_COUNT; i += 1) {
        const ratio = i / (LINE_COUNT - 1);
        const baseY = height * (0.12 + ratio * 0.76);
        const amplitude = 16 + Math.sin(ratio * Math.PI) * 42;
        const speed = 0.4 + ratio * 0.35;
        const phase = time * speed + ratio * 2.4;

        ctx.beginPath();
        for (let x = 0; x <= width; x += STEP) {
          const k = x / width;
          const y =
            baseY +
            Math.sin(k * 3.1 + phase) * amplitude +
            Math.sin(k * 7.3 - phase * 0.6) * amplitude * 0.25;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        const fade = Math.sin(ratio * Math.PI);
        ctx.strokeStyle = `rgba(63, 185, 80, ${0.05 + fade * 0.1})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    const loop = () => {
      time += 0.006;
      draw();
      if (running) frameId = requestAnimationFrame(loop);
    };

    resize();
    draw();

    const observer = new IntersectionObserver(
      ([entry]) => {
        const shouldRun = entry.isIntersecting && !prefersReducedMotion;
        if (shouldRun && !running) {
          running = true;
          frameId = requestAnimationFrame(loop);
        } else if (!shouldRun && running) {
          running = false;
          cancelAnimationFrame(frameId);
        }
      },
      { threshold: 0 },
    );
    observer.observe(canvas);

    window.addEventListener("resize", resize);

    return () => {
      running = false;
      cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
};

export default WaveField;
