import { FaBookOpen, FaBookReader, FaExternalLinkAlt } from "react-icons/fa";
import { Page, PageHeader, Section } from "../components/ui/Page";
import { craInfo } from "../data/infocra.js";
import "./InfoCra.css";

/*
 * Las portadas están en Cloudinary: se piden ya optimizadas (ancho justo y
 * formato liviano automático) en vez de la captura original a tamaño completo.
 */
const portadaOptimizada = (url, ancho) =>
  url.includes("res.cloudinary.com") && url.includes("/upload/")
    ? url.replace("/upload/", `/upload/f_auto,q_auto,w_${ancho}/`)
    : url;

// Agrupa por año manteniendo el orden del archivo (más recientes primero)
const porAnio = craInfo.reduce((grupos, revista) => {
  const grupo = grupos.find((g) => g.anio === revista.year);
  if (grupo) grupo.revistas.push(revista);
  else grupos.push({ anio: revista.year, revistas: [revista] });
  return grupos;
}, []);

const [ultima] = craInfo;

function Portada({ revista }) {
  return (
    <a
      href={revista.link}
      target="_blank"
      rel="noopener noreferrer"
      className="cra-card"
      aria-label={`Leer ${revista.title}, ${revista.description} ${revista.year}`}
    >
      <span className="cra-card__cover">
        <img src={portadaOptimizada(revista.image, 600)} alt="" loading="lazy" />
        <span className="cra-card__hint" aria-hidden="true">
          <FaBookOpen />
          Leer
        </span>
      </span>
      <span className="cra-card__body">
        <span className="cra-card__title">{revista.title}</span>
        <span className="cra-card__meta">
          {revista.description} · {revista.year}
        </span>
      </span>
    </a>
  );
}

const InfoCra = () => {
  return (
    <Page>
      <PageHeader
        icon={FaBookReader}
        kicker="Biblioteca"
        title="INFO-CRA"
        lead="La revista digital del Centro de Recursos para el Aprendizaje (CRA) de nuestro liceo."
      />

      {ultima && (
        <Section id="ultima" kicker="Recién publicada" title="Última edición">
          <a
            href={ultima.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cra-destacada"
            data-reveal
          >
            <span className="cra-destacada__cover">
              <img src={portadaOptimizada(ultima.image, 900)} alt={`Portada de ${ultima.title}`} />
            </span>
            <span className="cra-destacada__body">
              <span className="cra-destacada__badge">Nueva edición</span>
              <span className="cra-destacada__title">{ultima.title}</span>
              <span className="cra-destacada__meta">
                {ultima.description} {ultima.year}
              </span>
              <span className="lp-btn cra-destacada__btn">
                <FaBookOpen aria-hidden="true" />
                Leer revista
                <FaExternalLinkAlt size={11} aria-hidden="true" />
              </span>
            </span>
          </a>
        </Section>
      )}

      {porAnio.map(({ anio, revistas }) => (
        <Section key={anio} id={`cra-${anio}`} kicker="Ediciones" title={anio}>
          <div className="cra-grid" data-reveal>
            {revistas.map((revista) => (
              <Portada key={revista.id} revista={revista} />
            ))}
          </div>
        </Section>
      ))}
    </Page>
  );
};

export default InfoCra;
