import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { LinkCard } from "./ui/Page";
//import docRIE from "../assets/docs/RIE.pdf";
import docEvaluacion from "../assets/docs/reglamento2024.pdf";
import docCAA from "../assets/docs/reglamentoCAA.pdf";
import {
  FaArrowRight,
  FaChartPie,
  FaClipboardCheck,
  FaHandHoldingHeart,
  FaShieldAlt,
  FaUsers,
  FaBook,
} from "react-icons/fa";

const docPISE = "/docs/PISE-LEUMAG-2025.pdf";

const documentos = [
  {
    id: "cuenta-publica",
    categoria: "Institucional",
    sigla: "Cuenta Pública",
    titulo: "Cuenta Pública 2025",
    descripcion:
      "Informe de gestión y rendición de cuentas ante la comunidad escolar.",
    href: "https://docs.google.com/presentation/d/1yllKGEZgYuAyNWH4LwhsMO2VjFjmp_S2/edit?usp=drive_link&ouid=113785725979968228794&rtpof=true&sd=true",
    tipo: "google",
    icon: FaChartPie,
    tone: "blue",
  },
  {
    id: "rie",
    categoria: "Institucional",
    sigla: "RIE",
    titulo: "Reglamento Interno Escolar",
    descripcion:
      "Normas de convivencia, derechos y deberes de la comunidad educativa.",
    href: "https://drive.google.com/drive/folders/1OTleENUh8VxegnFjKl8wsmHhqw7a2obe?usp=sharing",
    tipo: "google",
    icon: FaBook,
    tone: "blue",
    isUpdate: true,
  },
  {
    id: "pise",
    categoria: "Seguridad",
    sigla: "PISE",
    titulo: "Plan Integral de Seguridad Escolar",
    descripcion:
      "Protocolos y medidas para resguardar la seguridad de estudiantes y funcionarios.",
    href: docPISE,
    tipo: "pdf",
    icon: FaShieldAlt,
    tone: "green",
  },
  {
    id: "evaluacion",
    categoria: "Académico",
    sigla: "Evaluación",
    titulo: "Reglamento de Evaluación y Promoción",
    descripcion: "Criterios de evaluación, calificaciones y promoción escolar.",
    href: docEvaluacion,
    tipo: "pdf",
    icon: FaClipboardCheck,
    tone: "teal",
  },
  {
    id: "caa",
    categoria: "Estudiantil",
    sigla: "Centro de Alumnos",
    titulo: "Reglamento Centro de Alumnos",
    descripcion:
      "Marco normativo del Centro de Alumnos y su funcionamiento democrático.",
    href: docCAA,
    tipo: "pdf",
    icon: FaUsers,
    tone: "gold",
  },
  {
    id: "becas",
    categoria: "Apoyo estudiantil",
    sigla: "Becas",
    titulo: "Reglamento General de Becas 2025",
    descripcion:
      "Requisitos, postulación y criterios de asignación de becas internas.",
    href: "https://docs.google.com/document/d/1m7WZ1CmMgsM2u34fZSoePobwyexFi52M/pub",
    tipo: "google",
    icon: FaHandHoldingHeart,
    tone: "red",
  },
  // {
  //   id: "dispositivos",
  //   categoria: "Convivencia escolar",
  //   sigla: "Dispositivos móviles",
  //   titulo: "Protocolo de uso de Dispositivos Móviles e Infografía",
  //   descripcion:
  //     "Orientaciones sobre el uso responsable de celulares y tecnología en el liceo.",
  //   href: "https://drive.google.com/drive/folders/1OTleENUh8VxegnFjKl8wsmHhqw7a2obe?usp=sharing",
  //   tipo: "google",
  //   icon: FaMobileAlt,
  //   tone: "green",
  //   isNew: true,
  // },
];

const tipoConfig = {
  pdf: { meta: "PDF", accion: "Descargar" },
  google: { meta: "Google · En línea", accion: "Abrir" },
};

const DocumentoCard = ({ documento }) => {
  const tipo = tipoConfig[documento.tipo];
  const badge = documento.isNew ? "Nuevo" : documento.isUpdate ? "Actualizado" : null;

  return (
    <LinkCard
      href={documento.href}
      icon={documento.icon}
      tone={documento.tone}
      eyebrow={documento.sigla}
      title={documento.titulo}
      description={documento.descripcion}
      badge={badge}
      meta={tipo.meta}
      action={tipo.accion}
    />
  );
};

DocumentoCard.propTypes = {
  documento: PropTypes.shape({
    id: PropTypes.string.isRequired,
    categoria: PropTypes.string.isRequired,
    sigla: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    tipo: PropTypes.oneOf(["pdf", "google"]).isRequired,
    icon: PropTypes.elementType.isRequired,
    tone: PropTypes.string.isRequired,
    isNew: PropTypes.bool,
    isUpdate: PropTypes.bool,
  }).isRequired,
};

const categorias = [...new Set(documentos.map((documento) => documento.categoria))];

const DocumentosGrid = ({ items }) => (
  <div className="lp-grid documentos-grid">
    {items.map((documento) => (
      <DocumentoCard key={documento.id} documento={documento} />
    ))}
  </div>
);

DocumentosGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Documentos = ({ showHeading = true, grouped = false, showAllLink = false }) => {
  return (
    <section aria-labelledby="documentos-titulo">
      {showHeading ? (
        <div className="home-section-head mb-4">
          <div>
            <h2 id="documentos-titulo" className="mb-2">
              Documentos oficiales
            </h2>
            <p className="text-muted mb-0">
              Reglamentos, protocolos y otros documentos oficiales del liceo.
            </p>
          </div>
          {showAllLink ? (
            <Link
              to="/Documentos"
              className="btn btn-outline-primary btn-ver-todas d-inline-flex align-items-center gap-2"
            >
              Ver todos los documentos
              <FaArrowRight size={12} />
            </Link>
          ) : null}
        </div>
      ) : (
        <h2 id="documentos-titulo" className="visually-hidden">
          Documentos oficiales
        </h2>
      )}

      {grouped ? (
        categorias.map((categoria) => (
          <div key={categoria} className="lp-group" data-reveal>
            <h3 className="lp-subhead">{categoria}</h3>
            <DocumentosGrid
              items={documentos.filter((documento) => documento.categoria === categoria)}
            />
          </div>
        ))
      ) : (
        <DocumentosGrid items={documentos} />
      )}
    </section>
  );
};

Documentos.propTypes = {
  showHeading: PropTypes.bool,
  grouped: PropTypes.bool,
  showAllLink: PropTypes.bool,
};

export default Documentos;
