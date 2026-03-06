import { comunicados } from "../data/comunicados";

const getExtracto = (contenido, maxLength = 140) => {
  if (!contenido) return "";

  const textoPlano = contenido
    .replace(/<[^>]+>/g, " ") // elimina etiquetas HTML
    .replace(/\s+/g, " ") // colapsa espacios
    .trim();

  if (textoPlano.length <= maxLength) return textoPlano;
  return `${textoPlano.slice(0, maxLength).trim()}…`;
};

const UltimosComunicados = () => {
  const ultimos = comunicados.slice(0, 2);

  return (
    <div className="mb-4">
      <h3 className="fw-bold text-center mb-3">Últimos comunicados</h3>
      {ultimos.map((comunicado) => (
        <a
          key={comunicado.id}
          href="/comunicados"
          className="text-decoration-none text-reset"
        >
          <article
            className="d-flex mb-3 p-2 border rounded align-items-stretch bg-body shadow-sm"
            style={{ gap: "0.75rem", cursor: "pointer" }}
          >
            {comunicado.img && (
              <div style={{ flexShrink: 0 }}>
                <img
                  src={comunicado.img}
                  alt={comunicado.titulo}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
            )}
            <div className="d-flex flex-column">
              <span className="small text-muted">{comunicado.fecha}</span>
              <h4 className="fs-6 fw-semibold mb-1">{comunicado.titulo}</h4>
              {comunicado.contenido && (
                <p className="small text-body-secondary mb-0">
                  {getExtracto(comunicado.contenido)}
                </p>
              )}
            </div>
          </article>
        </a>
      ))}
    </div>
  );
};

export default UltimosComunicados;
