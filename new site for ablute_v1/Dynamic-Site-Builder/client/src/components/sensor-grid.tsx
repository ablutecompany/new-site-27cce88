import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  targetOpacity: number;
  opacityTimer: number;
  opacityDuration: number;
}

interface Edge {
  a: number;
  b: number;
  opacity: number;
  targetOpacity: number;
  timer: number;
  duration: number;
}

export function SensorGrid({ opacity = 0.18 }: { opacity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const COUNT = 20;
    const CONNECT_DIST = 220;

    const nodes: Node[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      opacity: 0,
      targetOpacity: Math.random() * 0.6 + 0.2,
      opacityTimer: 0,
      opacityDuration: Math.random() * 4000 + 3000,
    }));

    const edges: Edge[] = [];
    for (let a = 0; a < COUNT; a++) {
      for (let b = a + 1; b < COUNT; b++) {
        edges.push({
          a, b,
          opacity: 0,
          targetOpacity: 0,
          timer: 0,
          duration: Math.random() * 3000 + 2000,
        });
      }
    }

    let lastTime = 0;
    let raf: number;

    function tick(time: number) {
      const dt = Math.min(time - lastTime, 50);
      lastTime = time;
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        n.opacityTimer += dt;
        const progress = Math.min(n.opacityTimer / n.opacityDuration, 1);
        const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        n.opacity += (n.targetOpacity - n.opacity) * ease * 0.02;
        if (n.opacityTimer >= n.opacityDuration) {
          n.targetOpacity = Math.random() * 0.6 + 0.2;
          n.opacityTimer = 0;
          n.opacityDuration = Math.random() * 4000 + 3000;
        }
      }

      for (const e of edges) {
        const na = nodes[e.a];
        const nb = nodes[e.b];
        const dx = na.x - nb.x;
        const dy = na.y - nb.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const newTarget = dist < CONNECT_DIST ? Math.min(na.opacity, nb.opacity) * 0.5 : 0;
        e.targetOpacity = newTarget;
        e.opacity += (e.targetOpacity - e.opacity) * 0.03;

        if (e.opacity > 0.01) {
          ctx.beginPath();
          ctx.moveTo(na.x, na.y);
          ctx.lineTo(nb.x, nb.y);
          ctx.strokeStyle = `rgba(0,200,255,${e.opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,200,255,${n.opacity})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);

    const observer = new ResizeObserver(() => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    });
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity }}
    />
  );
}
