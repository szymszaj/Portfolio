import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 420;
const FOCAL_LENGTH = 300;
const DEPTH = 1100;
const SPREAD = 2400;

const ParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let frameId = 0;
    let running = true;
    let angle = 0;

    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

    const spawn = (initial) => ({
      x: (Math.random() - 0.5) * SPREAD,
      y: (Math.random() - 0.5) * SPREAD,
      z: initial ? Math.random() * DEPTH : DEPTH,
      size: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 7 + 4,
      accent: Math.random() < 0.22,
      px: null,
      py: null,
    });

    const particles = Array.from({ length: PARTICLE_COUNT }, () => spawn(true));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "#0d1117";
      ctx.fillRect(0, 0, width, height);
      particles.forEach((p) => {
        p.px = null;
        p.py = null;
      });
    };

    const draw = () => {
      ctx.fillStyle = "rgba(13, 17, 23, 0.26)";
      ctx.fillRect(0, 0, width, height);

      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;

      if (!prefersReducedMotion) angle += 0.0012;

      const cx = width / 2;
      const cy = height / 2;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      ctx.lineCap = "round";

      for (const p of particles) {
        if (!prefersReducedMotion) {
          p.z -= p.speed;
          if (p.z <= 1) {
            Object.assign(p, spawn(false));
            continue;
          }
        }

        const rx = p.x * cos - p.y * sin;
        const ry = p.x * sin + p.y * cos;

        const scale = FOCAL_LENGTH / p.z;
        const depth = 1 - p.z / DEPTH;
        const x = cx + (rx + pointer.x * 120) * scale;
        const y = cy + (ry + pointer.y * 120) * scale;

        if (
          p.px !== null &&
          x > -80 &&
          x < width + 80 &&
          y > -80 &&
          y < height + 80
        ) {
          const alpha = Math.min(depth * depth * 1.4, 0.9);
          const lineWidth = Math.max(p.size * scale, 0.4);

          ctx.beginPath();
          ctx.moveTo(p.px, p.py);
          ctx.lineTo(x, y);
          ctx.strokeStyle = p.accent
            ? `rgba(88, 166, 255, ${alpha})`
            : `rgba(230, 237, 243, ${alpha * 0.85})`;
          ctx.lineWidth = lineWidth;
          ctx.stroke();

          if (depth > 0.82) {
            ctx.beginPath();
            ctx.arc(x, y, lineWidth * 1.1, 0, Math.PI * 2);
            ctx.fillStyle = p.accent
              ? `rgba(130, 190, 255, ${alpha})`
              : `rgba(255, 255, 255, ${alpha})`;
            ctx.fill();
          }
        }

        p.px = x;
        p.py = y;
      }
    };

    const loop = () => {
      draw();
      if (running) frameId = requestAnimationFrame(loop);
    };

    const handlePointerMove = (e) => {
      pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
    };

    let onScreen = true;

    const sync = () => {
      const shouldRun = onScreen && !document.hidden && !prefersReducedMotion;
      if (shouldRun && !running) {
        running = true;
        frameId = requestAnimationFrame(loop);
      } else if (!shouldRun && running) {
        running = false;
        cancelAnimationFrame(frameId);
      }
    };

    resize();
    draw();

    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        sync();
      },
      { threshold: 0 },
    );
    observer.observe(canvas);

    running = false;
    sync();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    document.addEventListener("visibilitychange", sync);

    return () => {
      running = false;
      cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("visibilitychange", sync);
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

export default ParticleField;
