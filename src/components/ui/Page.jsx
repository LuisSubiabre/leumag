import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import { useCountUp, useScrollReveal } from "../useHomeEffects";
import "./Page.css";

/**
 * Sistema visual compartido para las páginas internas.
 *
 *   <Page>
 *     <PageHeader kicker="..." title="..." lead="..." />
 *     <Section kicker="..." title="...">...</Section>
 *   </Page>
 *
 * Las secciones aparecen al hacer scroll (igual que en el home).
 */
export function Page({ children, narrow = false, className = "" }) {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <div ref={ref} className={`lp-page ${className}`.trim()}>
      <div className={`lp-wrap${narrow ? " lp-wrap--narrow" : ""}`}>{children}</div>
    </div>
  );
}

export function PageHeader({ kicker, title, lead, icon: Icon, children }) {
  return (
    <header className="lp-header">
      <div className="lp-header__copy">
        {kicker && (
          <p className="lp-kicker lp-kicker--pill">
            {Icon && <Icon aria-hidden="true" />}
            {kicker}
          </p>
        )}
        <h1 className="lp-header__title">{title}</h1>
        {lead && <p className="lp-header__lead">{lead}</p>}
        {children}
      </div>
    </header>
  );
}

export function Section({ id, kicker, title, lead, children, center = false }) {
  const headingId = id ? `${id}-titulo` : undefined;

  return (
    <section id={id} className="lp-section" aria-labelledby={headingId}>
      {(kicker || title) && (
        <div className={`lp-section__head${center ? " lp-section__head--center" : ""}`} data-reveal>
          {kicker && <p className="lp-kicker">{kicker}</p>}
          {title && <h2 id={headingId}>{title}</h2>}
          {lead && <p className="lp-section__lead">{lead}</p>}
        </div>
      )}
      {children}
    </section>
  );
}

/** Número grande que cuenta desde 0 al aparecer. Pensado para fondos oscuros. */
export function Cifra({ value, suffix = "", label }) {
  const [ref, current] = useCountUp(value);

  return (
    <div className="lp-stat" aria-label={`Más de ${value} ${label}`}>
      <span ref={ref} className="lp-stat__value" aria-hidden="true">
        {current}
        {suffix && <span className="lp-stat__suffix">{suffix}</span>}
      </span>
      <span className="lp-stat__label" aria-hidden="true">
        {label}
      </span>
    </div>
  );
}

const ACTION_ICON = {
  internal: FaArrowRight,
  external: FaExternalLinkAlt,
  download: FaDownload,
};

/**
 * Tarjeta-enlace: documentos, horarios, listas, descargas…
 * Pasa `to` para rutas internas o `href` para enlaces externos/archivos.
 * `tone`: blue | green | orange | purple | red | gold | teal
 */
export function LinkCard({
  to,
  href,
  download,
  icon: Icon,
  tone = "blue",
  eyebrow,
  title,
  description,
  meta,
  badge,
  action = "Abrir",
  featured = false,
}) {
  const kind = to ? "internal" : download ? "download" : "external";
  const ActionIcon = ACTION_ICON[kind];
  const className = `lp-link-card lp-tone--${tone}${featured ? " lp-link-card--featured" : ""}`;

  const body = (
    <>
      <span className="lp-link-card__top">
        {Icon && (
          <span className="lp-icon lp-link-card__icon" aria-hidden="true">
            <Icon />
          </span>
        )}
        {badge && <span className="lp-badge">{badge}</span>}
      </span>
      {eyebrow && <span className="lp-link-card__eyebrow">{eyebrow}</span>}
      <span className="lp-link-card__title">{title}</span>
      {description && <span className="lp-link-card__desc">{description}</span>}
      <span className="lp-link-card__foot">
        {meta && <span className="lp-link-card__meta">{meta}</span>}
        <span className="lp-link-card__action">
          {action}
          <ActionIcon size={11} aria-hidden="true" />
        </span>
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={className}>
        {body}
      </Link>
    );
  }

  const linkProps = download
    ? { download: download === true ? "" : download }
    : { target: "_blank", rel: "noopener noreferrer" };

  return (
    <a href={href} className={className} {...linkProps}>
      {body}
    </a>
  );
}

/**
 * Barra de navegación interna (pegajosa) que resalta la sección visible.
 * items: [{ id, label }]
 */
export function PageNav({ items, label = "Secciones de la página" }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const targets = items
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    targets.forEach((target) => io.observe(target));
    return () => io.disconnect();
  }, [items]);

  const go = (event, id) => {
    const el = document.getElementById(id);
    if (!el) return;
    event.preventDefault();
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const navbarH =
      parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--navbar-h")) || 0;
    const y = el.getBoundingClientRect().top + window.scrollY - navbarH - 76;
    window.scrollTo({ top: y, behavior: smooth ? "smooth" : "auto" });
    setActive(id);
  };

  return (
    <nav className="lp-nav" aria-label={label}>
      <div className="lp-nav__track">
        {items.map(({ id, label: text }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(event) => go(event, id)}
            className={`lp-nav__link${active === id ? " is-active" : ""}`}
            aria-current={active === id ? "true" : undefined}
          >
            {text}
          </a>
        ))}
      </div>
    </nav>
  );
}
