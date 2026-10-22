import { useEffect, useMemo, useState } from "react";
import { FaBullhorn, FaCalendarAlt, FaChevronDown, FaSearch } from "react-icons/fa";
import { comunicados } from "../data/comunicados.js";
import "./Comunicados.css";

const yearOf = (fecha) => fecha.match(/(\d{4})/)?.[1] ?? "Otros";

const getExtracto = (contenido, maxLength = 120) => {
  if (!contenido) return "";
  const texto = contenido
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (texto.length <= maxLength) return texto;
  return `${texto.slice(0, maxLength).trim()}…`;
};

const scrollToComunicado = (id) => {
  window.setTimeout(() => {
    document.getElementById(`comunicado-${id}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 120);
};

export const Comunicados = () => {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(comunicados[0]?.id ?? null);

  useEffect(() => {
    const applyHash = () => {
      const id = Number(window.location.hash.replace("#comunicado-", ""));
      if (!id) return;
      setOpenId(id);
      scrollToComunicado(id);
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return comunicados;
    return comunicados.filter((item) => {
      const texto = `${item.titulo} ${item.contenido ?? ""}`.replace(
        /<[^>]+>/g,
        " ",
      );
      return texto.toLowerCase().includes(q);
    });
  }, [query]);

  const grouped = useMemo(() => {
    const map = new Map();
    filtered.forEach((item) => {
      const year = yearOf(item.fecha);
      if (!map.has(year)) map.set(year, []);
      map.get(year).push(item);
    });
    return [...map.entries()];
  }, [filtered]);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="comunicados-page">
      <div className="container comunicados-page__inner">
        <header className="comunicados-page__head">
          <p className="comunicados-page__kicker">
            <FaBullhorn aria-hidden="true" />
            Para apoderados
          </p>
          <h1>Comunicados</h1>
          <p className="comunicados-page__lead">
            Avisos oficiales del Liceo. Abre el que te interesa; el más reciente
            queda primero.
          </p>
        </header>

        <div className="comunicados-toolbar">
          <label className="comunicados-search">
            <FaSearch aria-hidden="true" />
            <span className="visually-hidden">Buscar comunicados</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar por título o contenido"
              autoComplete="off"
            />
          </label>
          <p className="comunicados-toolbar__count">
            {filtered.length}{" "}
            {filtered.length === 1 ? "comunicado" : "comunicados"}
          </p>
        </div>

        {filtered.length === 0 ? (
          <p className="comunicados-empty">
            No hay comunicados que coincidan con “{query.trim()}”.
          </p>
        ) : (
          grouped.map(([year, items]) => (
            <section key={year} className="comunicados-year" aria-label={year}>
              {grouped.length > 1 ? (
                <h2 className="comunicados-year__title">{year}</h2>
              ) : null}

              <div className="comunicados-list">
                {items.map((comunicado, index) => {
                  const open = openId === comunicado.id;
                  const extracto = getExtracto(comunicado.contenido);
                  const esReciente =
                    !query && year === grouped[0][0] && index === 0;

                  return (
                    <article
                      key={comunicado.id}
                      id={`comunicado-${comunicado.id}`}
                      className={`comunicado-item${open ? " is-open" : ""}`}
                    >
                      <h3 className="comunicado-item__heading">
                        <button
                          type="button"
                          className="comunicado-item__toggle"
                          aria-expanded={open}
                          onClick={() => toggle(comunicado.id)}
                        >
                          <span className="comunicado-item__meta">
                            <span className="comunicado-item__date">
                              <FaCalendarAlt aria-hidden="true" />
                              {comunicado.fecha}
                            </span>
                            {esReciente ? (
                              <span className="comunicado-item__badge">
                                Más reciente
                              </span>
                            ) : null}
                          </span>
                          <span className="comunicado-item__title-row">
                            <span className="comunicado-item__title">
                              {comunicado.titulo}
                            </span>
                            <FaChevronDown
                              className="comunicado-item__chevron"
                              aria-hidden="true"
                            />
                          </span>
                          {!open && extracto ? (
                            <span className="comunicado-item__preview">
                              {extracto}
                            </span>
                          ) : null}
                        </button>
                      </h3>

                      {open ? (
                        <div className="comunicado-item__body">
                          {comunicado.contenido ? (
                            <div
                              className="comunicados-prose"
                              dangerouslySetInnerHTML={{
                                __html: comunicado.contenido,
                              }}
                            />
                          ) : null}
                          {comunicado.img ? (
                            <a
                              className="comunicado-item__image"
                              href={comunicado.img}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={comunicado.img}
                                alt={`Comunicado: ${comunicado.titulo}`}
                                loading="lazy"
                              />
                              <span className="comunicado-item__image-hint">
                                Abrir imagen
                              </span>
                            </a>
                          ) : null}
                        </div>
                      ) : null}
                    </article>
                  );
                })}
              </div>
            </section>
          ))
        )}
      </div>
    </div>
  );
};
