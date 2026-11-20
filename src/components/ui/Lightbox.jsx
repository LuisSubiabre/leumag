import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import "./Lightbox.css";

/**
 * Visor de fotos a pantalla completa.
 * images: [{ src, alt }]; index: foto abierta (null = cerrado).
 * Teclado: Esc cierra, ← → navegan. En táctil se puede deslizar.
 */
export function Lightbox({ images, index, onClose, onChange }) {
  const closeRef = useRef(null);
  const touchX = useRef(null);
  const open = index !== null && images.length > 0;
  const total = images.length;

  const prev = useCallback(() => onChange((index - 1 + total) % total), [index, total, onChange]);
  const next = useCallback(() => onChange((index + 1) % total), [index, total, onChange]);

  // Siempre la versión más reciente de los manejadores, sin re-suscribir
  const handlers = useRef({});
  handlers.current = { onClose, prev, next, total };

  useEffect(() => {
    if (!open) return;
    const returnFocus = document.activeElement;
    closeRef.current?.focus();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      const h = handlers.current;
      if (e.key === "Escape") h.onClose();
      else if (e.key === "ArrowLeft" && h.total > 1) h.prev();
      else if (e.key === "ArrowRight" && h.total > 1) h.next();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      returnFocus?.focus?.();
    };
  }, [open]);

  if (!open) return null;
  const image = images[index];

  return createPortal(
    <div
      className="lp-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Foto ${index + 1} de ${total}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null || total < 2) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
        touchX.current = null;
      }}
    >
      <button
        ref={closeRef}
        type="button"
        className="lp-lightbox__btn lp-lightbox__close"
        onClick={onClose}
        aria-label="Cerrar"
      >
        <FaTimes aria-hidden="true" />
      </button>

      {total > 1 && (
        <button
          type="button"
          className="lp-lightbox__btn lp-lightbox__nav lp-lightbox__nav--prev"
          onClick={prev}
          aria-label="Foto anterior"
        >
          <FaChevronLeft aria-hidden="true" />
        </button>
      )}

      <figure className="lp-lightbox__figure">
        <img key={image.src} src={image.src} alt={image.alt || ""} />
        {total > 1 && (
          <figcaption className="lp-lightbox__count">
            {index + 1} / {total}
          </figcaption>
        )}
      </figure>

      {total > 1 && (
        <button
          type="button"
          className="lp-lightbox__btn lp-lightbox__nav lp-lightbox__nav--next"
          onClick={next}
          aria-label="Foto siguiente"
        >
          <FaChevronRight aria-hidden="true" />
        </button>
      )}
    </div>,
    document.body,
  );
}
