import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBullhorn } from "react-icons/fa";
import { comunicados } from "../data/comunicados";

const getExtracto = (contenido, maxLength = 110) => {
  if (!contenido) return "";

  const textoPlano = contenido
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (textoPlano.length <= maxLength) return textoPlano;
  return `${textoPlano.slice(0, maxLength).trim()}…`;
};

const UltimosComunicados = () => {
  const contenedorRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const comunicadosLimitados = comunicados.slice(0, 4);

  useEffect(() => {
    const contenedor = contenedorRef.current;
    if (!contenedor || comunicadosLimitados.length <= 2) return;

    const prefiereMenosMovimiento = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefiereMenosMovimiento) return;

    let scrollPosicion = 0;

    const avanzarScroll = () => {
      if (!contenedor || paused) return;

      scrollPosicion += 0.35;
      const alturaLista = contenedor.scrollHeight / 2;

      if (alturaLista <= 0) {
        scrollPosicion = 0;
      } else if (scrollPosicion >= alturaLista) {
        scrollPosicion = 0;
      }

      contenedor.scrollTop = scrollPosicion;
    };

    const intervaloId = setInterval(avanzarScroll, 30);
    return () => clearInterval(intervaloId);
  }, [paused, comunicadosLimitados.length]);

  const items =
    comunicadosLimitados.length > 2
      ? [...comunicadosLimitados, ...comunicadosLimitados]
      : comunicadosLimitados;

  return (
    <div className="mb-1 comunicados-sidebar">
      <div className="d-flex justify-content-between align-items-start gap-2 mb-3">
        <div>
          <h3 className="fw-bold mb-1 fs-5 d-flex align-items-center gap-2">
            <FaBullhorn className="text-warning" aria-hidden="true" />
            Para apoderados
          </h3>
          <p className="small text-muted mb-0">Últimos comunicados oficiales</p>
        </div>
        <Link
          to="/Comunicados"
          className="btn btn-sm btn-outline-primary rounded-pill text-nowrap"
        >
          Ver todos
        </Link>
      </div>

      <div
        ref={contenedorRef}
        className="comunicados-scroll"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {items.map((comunicado, index) => (
          <Link
            key={`${comunicado.id}-${index}`}
            to="/Comunicados"
            className="text-decoration-none text-reset"
          >
            <article className="comunicado-card d-flex mb-3 p-2 border align-items-stretch bg-body shadow-sm">
              {comunicado.img ? (
                <img
                  src={comunicado.img}
                  alt=""
                  className="comunicado-thumb"
                  loading="lazy"
                />
              ) : null}
              <div className="d-flex flex-column min-w-0">
                <span className="small text-muted">{comunicado.fecha}</span>
                <h4 className="fs-6 fw-semibold mb-1 text-truncate-2">
                  {comunicado.titulo}
                </h4>
                {comunicado.contenido ? (
                  <p className="small text-body-secondary mb-0">
                    {getExtracto(comunicado.contenido)}
                  </p>
                ) : null}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UltimosComunicados;
