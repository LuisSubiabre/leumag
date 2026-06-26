import { Row, Col, Card, Badge } from "react-bootstrap";
import PropTypes from "prop-types";
import docRIE from "../assets/docs/RIE.pdf";
import docEvaluacion from "../assets/docs/reglamento2024.pdf";
import docCAA from "../assets/docs/reglamentoCAA.pdf";
import {
  FaArrowRight,
  FaChartPie,
  FaClipboardCheck,
  FaExternalLinkAlt,
  FaFilePdf,
  FaGoogle,
  FaHandHoldingHeart,
  FaShieldAlt,
  FaUsers,
  FaBook,
} from "react-icons/fa";

const docPISE = "/docs/PISE-LEUMAG-2025.pdf";

const cardHoverStyle = {
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

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
    iconClass: "text-primary",
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
    iconClass: "text-primary",
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
    iconClass: "text-success",
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
    iconClass: "text-info",
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
    iconClass: "text-warning",
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
    iconClass: "text-danger",
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
  //   iconClass: "text-success",
  //   isNew: true,
  // },
];

const tipoConfig = {
  pdf: {
    icon: FaFilePdf,
    label: "PDF",
    accion: "Descargar",
    footerIcon: FaArrowRight,
  },
  google: {
    icon: FaGoogle,
    label: "Google · Abrir en línea",
    accion: "Abrir",
    footerIcon: FaExternalLinkAlt,
  },
};

const DocumentoCard = ({ documento }) => {
  const Icon = documento.icon;
  const tipo = tipoConfig[documento.tipo];
  const TipoIcon = tipo.icon;
  const AccionIcon = tipo.footerIcon;

  return (
    <a
      href={documento.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-decoration-none"
      aria-label={`${tipo.accion}: ${documento.titulo}`}
    >
      <Card
        border="primary"
        className="h-100 btnCard"
        style={cardHoverStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 123, 255, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        }}
      >
        <Card.Header className="d-flex justify-content-between align-items-center gap-2">
          <span className="d-flex align-items-center">
            <Icon className={`${documento.iconClass} me-2`} size={18} />
            <span className="fw-semibold">{documento.sigla}</span>
            {documento.isNew && (
              <Badge bg="warning" text="dark" className="ms-2">
                Nuevo
              </Badge>
            )}
            {documento.isUpdate && (
              <Badge bg="warning" text="dark" className="ms-2">
                Actualizado
              </Badge>
            )}
          </span>
          <Badge bg="secondary" className="text-uppercase">
            {documento.categoria}
          </Badge>
        </Card.Header>

        <Card.Body className="d-flex flex-column">
          <Card.Title className="fs-6 fw-bold mb-2">
            {documento.titulo}
          </Card.Title>
          <Card.Text className="text-muted small mb-0 flex-grow-1">
            {documento.descripcion}
          </Card.Text>
        </Card.Body>

        <Card.Footer className="d-flex justify-content-between align-items-center bg-body-tertiary">
          <span className="small text-muted d-flex align-items-center gap-1">
            <TipoIcon
              className={
                documento.tipo === "pdf" ? "text-danger" : "text-success"
              }
              size={14}
            />
            {tipo.label}
          </span>
          <span className="small fw-semibold text-primary d-flex align-items-center gap-1">
            {tipo.accion}
            <AccionIcon size={12} />
          </span>
        </Card.Footer>
      </Card>
    </a>
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
    iconClass: PropTypes.string.isRequired,
    isNew: PropTypes.bool,
    isUpdate: PropTypes.bool,
  }).isRequired,
};

const Documentos = () => {
  return (
    <section aria-labelledby="documentos-titulo">
      <div className="mb-4">
        <h2 id="documentos-titulo" className="mb-2">
          Documentos oficiales
        </h2>
        <p className="text-muted mb-0">
          Reglamentos, protocolos e informes institucionales para apoderados,
          estudiantes y funcionarios.
        </p>
      </div>

      <Row className="g-4">
        {documentos.map((documento) => (
          <Col key={documento.id} xs={12} sm={6} lg={4}>
            <DocumentoCard documento={documento} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Documentos;
