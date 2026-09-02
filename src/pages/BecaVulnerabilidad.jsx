import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  FaCalendarAlt,
  FaClock,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFileArchive,
  FaFilePdf,
  FaFileWord,
  FaGlobe,
  FaHandHoldingHeart,
  FaInfoCircle,
} from "react-icons/fa";
import "./BecaVulnerabilidad.css";

const encodeDoc = (path) => encodeURI(`/docs/becas27/${path}`);

const REGLAMENTO_BECAS =
  "https://docs.google.com/document/d/1m7WZ1CmMgsM2u34fZSoePobwyexFi52M/pub";

const CORREO_CONSULTAS = "postulacionvulnerabilidad2027@liceoexperimental.cl";

const PASOS = [
  {
    numero: "1",
    titulo: "Circular Proceso de Postulación vulnerabilidad 2027",
    texto:
      "Indica características del Establecimiento, Normativas Legales y Procedimientos de Postulación; se solicita leer detenidamente estas normativas y respetarla íntegramente ya que cualquier falta u omisión contenida en estas indicaciones no permitirán su continuidad en el proceso.",
    archivos: [
      {
        label: "Circular (PDF)",
        href: encodeDoc("circular proceso becas de vulnerabilidad.docx.pdf"),
        download: "Circular_Proceso_Postulacion_Vulnerabilidad_2027.pdf",
        tipo: "pdf",
      },
    ],
  },
  {
    numero: "2",
    titulo: "Documentación Obligatoria a Presentar 2027",
    texto: "",
    archivos: [
      {
        label: "Documentación (PDF)",
        href: encodeDoc(
          "DOCUMENTACION  OBLIGATORIA A PRESENTAR nuevos.docx.pdf",
        ),
        download: "Documentacion_Obligatoria_Beca_Vulnerabilidad_2027.pdf",
        tipo: "pdf",
      },
    ],
  },
  {
    numero: "3",
    titulo: "Formulario de postulación a Beca Vulnerabilidad",
    texto:
      "Descargar formulario y completarlo con letra legible, para luego ser enviado junto a la documentación de respaldo al correo electrónico indicado en la circular.",
    archivos: [
      {
        label: "Formulario (PDF)",
        href: encodeDoc(
          "ilovepdf_converted/FORMULARIO-POSTULACION-BECA-SOCIOECONOMICA (1).pdf",
        ),
        download: "Formulario_Postulacion_Beca_Vulnerabilidad_2027.pdf",
        tipo: "pdf",
      },
      {
        label: "Formulario (Word)",
        href: encodeDoc("FORMULARIO-POSTULACION-BECA-SOCIOECONOMICA (1).docx"),
        download: "Formulario_Postulacion_Beca_Vulnerabilidad_2027.docx",
        tipo: "word",
      },
    ],
  },
 
  {
    numero: "4",
    titulo: "Declaración de Gastos Mensuales 2027",
    texto: "(sólo para trabajadores ocasionales o independientes).",
    archivos: [
      {
        label: "Declaración (PDF)",
        href: encodeDoc(
          "ilovepdf_converted/DECLARACION DE GASTOS MENSUALES 2026.pdf",
        ),
        download: "Declaracion_Gastos_Mensuales_2027.pdf",
        tipo: "pdf",
      },
      {
        label: "Declaración (Word)",
        href: encodeDoc("DECLARACION DE GASTOS MENSUALES 2026.docx"),
        download: "Declaracion_Gastos_Mensuales_2027.docx",
        tipo: "word",
      },
    ],
  },
];

const FileIcon = ({ tipo }) => {
  if (tipo === "word") return <FaFileWord aria-hidden="true" />;
  if (tipo === "link") return <FaExternalLinkAlt aria-hidden="true" />;
  if (tipo === "zip") return <FaFileArchive aria-hidden="true" />;
  return <FaFilePdf aria-hidden="true" />;
};

FileIcon.propTypes = {
  tipo: PropTypes.oneOf(["pdf", "word", "link", "zip"]).isRequired,
};

const BecaVulnerabilidad = () => {
  return (
    <div className="beca-page">
      <div className="beca-page__inner">
        <header className="beca-hero">
          <p className="beca-hero__eyebrow">
            <FaHandHoldingHeart aria-hidden="true" />
            Apoyo estudiantil
          </p>
          <h1 className="beca-hero__title">Beca Vulnerabilidad 2027</h1>
          <p className="beca-hero__lead">
            Fechas del proceso de postulación para familias del Liceo
            Experimental Umag.
          </p>
          <div className="beca-hero__chips">
            <span className="beca-chip">
              <FaCalendarAlt aria-hidden="true" />
              Desde el miércoles 9 de septiembre, 15:00 hrs
            </span>
            <span className="beca-chip">
              <FaClock aria-hidden="true" />
              Hasta el martes 22 de septiembre, 23:59 hrs
            </span>
            <span className="beca-chip beca-chip--alert">
              <FaInfoCircle aria-hidden="true" />
              Consultas hasta el 16 de septiembre
            </span>
          </div>
        </header>

        <div className="beca-layout">
          <article className="beca-letter">
            <p className="beca-letter__greeting">
              Estimados Padres y Apoderados:
            </p>
            <p>
              Junto con saludarles, con fecha{" "}
              <strong>miércoles 02 de septiembre</strong> informamos fechas del{" "}
              <strong>
                Proceso de postulación a la Beca Vulnerabilidad año 2027
              </strong>
              , para lo cual se solicita revisar detalladamente los siguientes
              puntos:
            </p>

            <ol className="beca-letter__list">
              {PASOS.map((paso) => (
                <li key={paso.numero}>
                  <strong>{paso.titulo}</strong>
                  {paso.texto
                    ? `${paso.texto.startsWith("(") ? " " : ": "}${paso.texto}`
                    : "."}
                </li>
              ))}
            </ol>

            <div className="beca-letter__notes">
              <p>
                <FaGlobe aria-hidden="true" />
                <span>
                  La información se encuentra en la página web del Liceo,{" "}
                  <a
                    href="https://www.liceoexperimental.cl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.liceoexperimental.cl
                  </a>
                </span>
              </p>
              <p>
                <FaEnvelope aria-hidden="true" />
                <span>
                  Dudas y consultas se responderán hasta el{" "}
                  <strong>16 de septiembre</strong>, dirigirlas al mail:{" "}
                  <a href={`mailto:${CORREO_CONSULTAS}`}>{CORREO_CONSULTAS}</a>
                </span>
              </p>
            </div>

            <div className="beca-dates">
              <h2 className="beca-dates__title">Postulaciones</h2>
              <p>
                <strong>Desde</strong> el miércoles 09 de septiembre a las 15:00
                hrs
              </p>
              <p>
                <strong>Hasta</strong> el martes 22 de septiembre a las 23:59
                hrs
              </p>
            </div>

            <p className="beca-letter__signoff">Atentamente,</p>
            <p className="beca-letter__signature">Liceo Experimental Umag</p>
          </article>

          <aside className="beca-aside">
            <div className="beca-aside__card">
              <h2>Plazo de postulación</h2>
              <p>
                Desde el <strong>miércoles 09 de septiembre, 15:00 hrs</strong>,
                hasta el <strong>martes 22 de septiembre, 23:59 hrs</strong>.
              </p>
              <p>
                Complete el formulario con letra legible y envíelo junto a la
                documentación de respaldo al correo indicado en la circular.
              </p>
              <a
                className="beca-btn beca-btn--primary"
                href={`mailto:${CORREO_CONSULTAS}`}
              >
                <FaEnvelope aria-hidden="true" />
                Escribir al correo de postulación
              </a>
              <p className="beca-aside__hint">
                Consultas hasta el 16 de septiembre
              </p>
            </div>
            <div className="beca-aside__card beca-aside__card--muted">
              <h2>También en el sitio</h2>
              <Link to="/Comunicados" className="beca-aside__link">
                Ver comunicados oficiales
              </Link>
              <a
                href={REGLAMENTO_BECAS}
                target="_blank"
                rel="noopener noreferrer"
                className="beca-aside__link"
              >
                Reglamento General de Becas 2025
              </a>
            </div>
          </aside>
        </div>

        <section className="beca-docs" aria-labelledby="beca-docs-title">
          <div className="beca-docs__head">
            <h2 id="beca-docs-title">Documentos para descargar</h2>
            <p>
              PDF y versiones Word, según corresponda a cada punto del proceso.
            </p>
          </div>

          <div className="beca-docs__grid">
            {PASOS.map((paso) => (
              <article className="beca-doc" key={paso.numero}>
                <div className="beca-doc__number" aria-hidden="true">
                  {paso.numero}
                </div>
                <h3 className="beca-doc__title">{paso.titulo}</h3>
                {paso.texto ? (
                  <p className="beca-doc__text">{paso.texto}</p>
                ) : (
                  <p className="beca-doc__text beca-doc__text--spacer" />
                )}
                <div className="beca-doc__actions">
                  {paso.archivos.map((archivo) => (
                    <a
                      key={archivo.label}
                      className={`beca-btn beca-btn--${archivo.tipo}`}
                      href={archivo.href}
                      download={archivo.download}
                      target={archivo.externo ? "_blank" : undefined}
                      rel={archivo.externo ? "noopener noreferrer" : undefined}
                    >
                      <FileIcon tipo={archivo.tipo} />
                      {archivo.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BecaVulnerabilidad;
