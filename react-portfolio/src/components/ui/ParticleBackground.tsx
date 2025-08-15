"use client";
import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let mouseX = 0,
      mouseY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    class Particle {
      x: number;
      y: number;
      z: number;
      size: number;
      speed: number;

      constructor() {
        this.x = Math.random() * canvas.width - canvas.width / 2;
        this.y = Math.random() * canvas.height - canvas.height / 2;
        this.z = Math.random() * 1000;
        this.size = Math.random() * 2 + 1;
        this.speed = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.z -= this.speed;
        if (this.z <= 0) {
          this.z = 1000;
        }
      }

      draw() {
        const scale = 200 / this.z;
        const x2d =
          this.x * scale +
          canvas.width / 2 +
          (mouseX - canvas.width / 2) * 0.002 * this.z;
        const y2d =
          this.y * scale +
          canvas.height / 2 +
          (mouseY - canvas.height / 2) * 0.002 * this.z;
        ctx.beginPath();
        ctx.arc(x2d, y2d, this.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = `oklch(${70 + Math.sin(Date.now() / 1000) * 20}% 0.3 ${
          (((this.x + this.y) % 360) + 360) % 360
        })`;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 400; i++) {
        particles.push(new Particle());
      }
    };
    init();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen z-0 bg-black"
    />
  );
}
