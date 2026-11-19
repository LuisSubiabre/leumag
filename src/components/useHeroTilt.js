import { useEffect } from "react";

export const prefiereMenosMovimiento = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Inclinación 3D según la posición del puntero.
 * Escribe variables CSS en el elemento (--px, --py en rango -1..1 y
 * --mx, --my en porcentaje) que Header.css usa para rotar y desplazar capas.
 */
export function useHeroTilt(ref, enabled = true) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled || prefiereMenosMovimiento()) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;
    let idleT = 0;
    let pointerActive = false;
    const isTouch = window.matchMedia("(hover: none)").matches;

    const apply = () => {
      el.style.setProperty("--px", current.x.toFixed(4));
      el.style.setProperty("--py", current.y.toFixed(4));
      el.style.setProperty("--mx", `${((current.x + 1) * 50).toFixed(2)}%`);
      el.style.setProperty("--my", `${((current.y + 1) * 50).toFixed(2)}%`);
    };

    const tick = () => {
      // Sin puntero (táctil o fuera del hero): balanceo suave automático.
      if (!pointerActive) {
        idleT += 0.006;
        target.x = Math.sin(idleT) * (isTouch ? 0.45 : 0.25);
        target.y = Math.cos(idleT * 0.8) * (isTouch ? 0.3 : 0.15);
      }
      current.x += (target.x - current.x) * 0.06;
      current.y += (target.y - current.y) * 0.06;
      apply();
      frame = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      pointerActive = true;
      target.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      target.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    };
    const onLeave = () => {
      pointerActive = false;
    };

    // Solo animar mientras el hero está visible.
    const io = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(frame);
      if (entry.isIntersecting) frame = requestAnimationFrame(tick);
    });
    io.observe(el);

    if (!isTouch) {
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
    }

    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [ref, enabled]);
}
