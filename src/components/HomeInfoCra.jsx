import { Link } from "react-router-dom";
import { FaArrowRight, FaBookOpen, FaBookReader } from "react-icons/fa";
import { craInfo } from "../data/infocra.js";
import { imagenOptimizada } from "../services/cloudinary";
import "./HomeInfoCra.css";

/**
 * Bloque del home que destaca la última edición de INFO-CRA.
 * Se alimenta de src/data/infocra.js: al agregar una edición nueva
 * al comienzo del archivo, aparece aquí automáticamente.
 */
function HomeInfoCra() {
  const [ultima, ...anteriores] = craInfo;
  if (!ultima) return null;
  const pila = anteriores.slice(0, 2);

  return (
    <div className="home-cra">
      <div className="home-cra__copy">
        <p className="home-kicker">
          <FaBookReader aria-hidden="true" /> Biblioteca CRA
        </p>
        <h2 id="infocra-titulo" className="home-cra__title">
          INFO-CRA, nuestra revista digital
        </h2>
        <p className="home-cra__text">
          Lecturas, concursos y actividades del Centro de Recursos para el
          Aprendizaje, contadas por nuestra comunidad.
        </p>

        <p className="home-cra__edition">
          <span className="home-cra__badge">Nueva edición</span>
          {ultima.title} · {ultima.description} {ultima.year}
        </p>

        <div className="home-cra__actions">
          <a
            href={ultima.link}
            target="_blank"
            rel="noopener noreferrer"
            className="home-cra__btn"
          >
            <FaBookOpen aria-hidden="true" />
            Leer última edición
          </a>
          <Link to="/InfoCra" className="home-text-link">
            Ver todas las ediciones
            <FaArrowRight size={12} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <a
        href={ultima.link}
        target="_blank"
        rel="noopener noreferrer"
        className="home-cra__stack"
        aria-label={`Leer ${ultima.title}, ${ultima.description} ${ultima.year}`}
      >
        {pila
          .slice()
          .reverse()
          .map((revista, i) => (
            <img
              key={revista.id}
              src={imagenOptimizada(revista.image, 420)}
              alt=""
              loading="lazy"
              className={`home-cra__cover home-cra__cover--back home-cra__cover--back-${pila.length - i}`}
            />
          ))}
        <img
          src={imagenOptimizada(ultima.image, 560)}
          alt=""
          loading="lazy"
          className="home-cra__cover home-cra__cover--front"
        />
      </a>
    </div>
  );
}

export default HomeInfoCra;
