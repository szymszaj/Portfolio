import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const InteractiveBackground = () => {
  const followRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 1]);

  useEffect(() => {
    const node = followRef.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { ...target };
    let frameId = 0;
    let settled = false;

    const apply = () => {
      node.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
    };

    const loop = () => {
      const dx = target.x - current.x;
      const dy = target.y - current.y;

      if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
        settled = true;
        frameId = 0;
        return;
      }

      current.x += dx * 0.045;
      current.y += dy * 0.045;
      apply();
      frameId = requestAnimationFrame(loop);
    };

    const wake = () => {
      if (settled || !frameId) {
        settled = false;
        frameId = requestAnimationFrame(loop);
      }
    };

    const handlePointerMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!prefersReducedMotion) wake();
    };

    apply();
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-canvas">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div
        ref={followRef}
        className="absolute left-0 top-0 will-change-transform"
      >
        <motion.div
          style={{ x: "-50%", y: "-50%", rotate, scale }}
          className="h-[500px] w-[500px] rounded-full bg-gradient-to-r from-accent-soft/40 to-accent/40 opacity-40 blur-[90px]"
        />
      </div>

      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.035]"></div>
    </div>
  );
};

export default InteractiveBackground;
