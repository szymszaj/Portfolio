import { useEffect, useRef } from "react";

const StarsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = Math.max(window.innerHeight, 1200);
    canvas.width = width;
    canvas.height = height;

    //
    const stars = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.3,
      dx: (Math.random() - 0.5) * 0.05,
      dy: (Math.random() - 0.5) * 0.05,
      alpha: Math.random() * 0.4 + 0.4,
    }));

    let animationFrameId;
    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    const draw = (currentTime) => {
      const deltaTime = currentTime - lastTime;

      if (deltaTime >= interval) {
        lastTime = currentTime - (deltaTime % interval);

        ctx.clearRect(0, 0, width, height);

        for (const star of stars) {
          ctx.save();
          ctx.globalAlpha = star.alpha;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
          ctx.fillStyle = "#fff";
          ctx.fill();
          ctx.restore();

          star.x += star.dx;
          star.y += star.dy;
          if (star.x < 0 || star.x > width) star.dx *= -1;
          if (star.y < 0 || star.y > height) star.dy *= -1;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw(0);

    const handleResize = () => {
      width = window.innerWidth;
      height = Math.max(window.innerHeight, 1200);
      canvas.width = width;
      canvas.height = height;
      stars.forEach((star) => {
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed left-0 top-0 z-0 w-full h-full"
      aria-hidden="true"
      style={{ inset: 0, position: "absolute" }}
    />
  );
};

export default StarsBackground;
