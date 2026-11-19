import { useEffect, useRef, useState } from "react";

const prefiereMenosMovimiento = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Hace aparecer los elementos con [data-reveal] al entrar en pantalla.
 * Si el usuario prefiere menos movimiento, no se oculta nada.
 */
export function useScrollReveal(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefiereMenosMovimiento() || !("IntersectionObserver" in window)) {
      return;
    }

    root.classList.add("reveal-ready");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    root.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, [rootRef]);
}

/** Número que cuenta desde 0 cuando aparece en pantalla. */
export function useCountUp(end, duration = 1800) {
  const ref = useRef(null);
  const [value, setValue] = useState(() => (prefiereMenosMovimiento() ? end : 0));

  useEffect(() => {
    const el = ref.current;
    if (!el || prefiereMenosMovimiento()) return;

    let frame = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(end * eased));
        if (t < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end, duration]);

  return [ref, value];
}

