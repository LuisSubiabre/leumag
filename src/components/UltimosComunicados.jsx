import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { comunicados } from "../data/comunicados";

const getExtracto = (contenido, maxLength = 140) => {
  if (!contenido) return "";

  const textoPlano = contenido
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (textoPlano.length <= maxLength) return textoPlano;
  return `${textoPlano.slice(0, maxLength).trim()}…`;
};

const UltimosComunicados = () => {
  const destacados = comunicados.slice(0, 2);

  return (
    <section className="home-coms" aria-labelledby="comunicados-home-titulo">
      <div className="home-section-head">
        <div>
          <p className="home-kicker">Para apoderados</p>
          <h2 id="comunicados-home-titulo">Comunicados</h2>
        </div>
        <Link to="/Comunicados" className="home-text-link">
          Ver todos
          <FaArrowRight size={12} />
        </Link>
      </div>

      <div className="home-coms__grid">
        {destacados.map((comunicado) => (
          <Link
            key={comunicado.id}
            to={`/Comunicados#comunicado-${comunicado.id}`}
            className="home-com-card"
          >
            {comunicado.img ? (
              <img src={comunicado.img} alt="" loading="lazy" />
            ) : (
              <div className="home-com-card__fallback" aria-hidden="true" />
            )}
            <div className="home-com-card__body">
              <time>{comunicado.fecha}</time>
              <h3>{comunicado.titulo}</h3>
              {comunicado.contenido ? (
                <p>{getExtracto(comunicado.contenido)}</p>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default UltimosComunicados;
