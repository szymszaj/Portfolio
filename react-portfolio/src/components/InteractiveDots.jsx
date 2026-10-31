import { useEffect, useRef } from "react";

const SPACING = 34;
const PUSH_RADIUS = 150;
const PUSH_STRENGTH = 2400;
const SPRING = 0.045;
const FRICTION = 0.86;

const InteractiveDots = () => {
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
    let dots = [];
    let frameId = 0;
    let visible = true;

    const pointer = { x: -9999, y: -9999 };

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (width === 0 || height === 0) return;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;
      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          const hx = c * SPACING;
          const hy = r * SPACING;
          dots.push({ hx, hy, x: hx, y: hy, vx: 0, vy: 0 });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const d of dots) {
        if (!prefersReducedMotion) {
          const dx = d.x - pointer.x;
          const dy = d.y - pointer.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < PUSH_RADIUS * PUSH_RADIUS && distSq > 0.01) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / PUSH_RADIUS) * (PUSH_STRENGTH / distSq);
            d.vx += (dx / dist) * force;
            d.vy += (dy / dist) * force;
          }

          d.vx += (d.hx - d.x) * SPRING;
          d.vy += (d.hy - d.y) * SPRING;
          d.vx *= FRICTION;
          d.vy *= FRICTION;
          d.x += d.vx;
          d.y += d.vy;
        }

        const offset = Math.hypot(d.x - d.hx, d.y - d.hy);
        const energy = Math.min(offset / 26, 1);
        const radius = 1 + energy * 1.7;
        const alpha = 0.16 + energy * 0.7;

        ctx.beginPath();
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
        ctx.fillStyle =
          energy > 0.25
            ? `rgba(88, 166, 255, ${alpha})`
            : `rgba(139, 148, 158, ${alpha})`;
        ctx.fill();
      }
    };

    const loop = () => {
      draw();
      if (visible) frameId = requestAnimationFrame(loop);
    };

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    build();
    draw();

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        cancelAnimationFrame(frameId);
        if (visible && !prefersReducedMotion) {
          frameId = requestAnimationFrame(loop);
        }
      },
      { threshold: 0 },
    );
    observer.observe(canvas);

    window.addEventListener("resize", build);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener("resize", build);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
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

export default InteractiveDots;
