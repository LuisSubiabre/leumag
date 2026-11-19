import { useEffect, useRef } from "react";
import { prefiereMenosMovimiento } from "./useHeroTilt";

/**
 * Campo de partículas con profundidad (proyección en perspectiva).
 * Las partículas avanzan lentamente hacia la cámara y se desplazan
 * en paralaje según el puntero (lee --px/--py del contenedor).
 */
export function HeroParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefiereMenosMovimiento()) return;

    const ctx = canvas.getContext("2d");
    const host = canvas.parentElement;
    let width = 0;
    let height = 0;
    let frame = 0;
    let running = false;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const count = window.innerWidth < 640 ? 70 : 140;

    const spawn = (p, z = Math.random()) => {
      p.x = (Math.random() * 2 - 1) * 1.4;
      p.y = (Math.random() * 2 - 1) * 1.0;
      p.z = 0.08 + z * 0.92;
      p.tw = Math.random() * Math.PI * 2;
      p.hue = Math.random() < 0.18 ? 45 : 205; // algunas doradas, la mayoría azul-blanco
      return p;
    };
    const particles = Array.from({ length: count }, () => spawn({}));

    const resize = () => {
      const rect = host.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      // useHeroTilt escribe estas variables inline en el mismo contenedor.
      const px = parseFloat(host.style.getPropertyValue("--px")) || 0;
      const py = parseFloat(host.style.getPropertyValue("--py")) || 0;

      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;
      const focal = Math.max(width, height) * 0.5;

      for (const p of particles) {
        p.z -= 0.0011;
        p.tw += 0.04;
        if (p.z <= 0.08) spawn(p, 1);

        // Las partículas cercanas se mueven más (paralaje).
        const sx = cx + ((p.x - px * 0.12) / p.z) * focal * 0.5;
        const sy = cy + ((p.y - py * 0.08) / p.z) * focal * 0.5;
        if (sx < -20 || sx > width + 20 || sy < -20 || sy > height + 20) {
          if (p.z < 0.5) spawn(p, 1);
          continue;
        }

        const depth = 1 - p.z; // 0 lejos, 1 cerca
        const radius = 0.4 + depth * 2.4;
        const fadeIn = Math.min(1, (1 - p.z) * 6);
        const twinkle = 0.75 + Math.sin(p.tw) * 0.25;
        const alpha = (0.25 + depth * 0.65) * fadeIn * twinkle;

        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 90%, 88%, ${alpha})`;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 75%, ${alpha})`;
        ctx.shadowBlur = radius * 4;
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      frame = requestAnimationFrame(draw);
    };

    const start = () => {
      if (running) return;
      running = true;
      frame = requestAnimationFrame(draw);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    const io = new IntersectionObserver(([entry]) =>
      entry.isIntersecting ? start() : stop(),
    );
    io.observe(host);

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-particles" aria-hidden="true" />;
}
