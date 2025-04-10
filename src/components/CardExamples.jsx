import { Container, Row, Col } from "react-bootstrap";
import CustomCard from "./CustomCard";
import {
  FaBook,
  FaCalendarAlt,
  FaGraduationCap,
  FaInfoCircle,
  FaNewspaper,
  FaUserGraduate,
  FaSchool,
  FaClipboardList,
  FaFileAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const CardExamples = () => {
  return (
    <Container className="my-5">
      <h2 className="mb-4">Ejemplos de Tarjetas con Iconos</h2>

      <Row>
        {/* Ejemplo 1: Tarjeta de Noticias */}
        <Col md={4} className="mb-4">
          <CustomCard
            title="Última Noticia"
            titleIcon={<FaNewspaper className="text-primary" />}
            subtitle="15 de mayo, 2024"
            subtitleIcon={<FaCalendarAlt className="text-secondary" />}
            imageUrl="https://via.placeholder.com/300x200"
            imageAlt="Imagen de noticia"
            borderColor="info"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris.
            </p>
            <div className="d-flex justify-content-end">
              <button className="btn btn-sm btn-outline-primary">
                <FaInfoCircle className="me-1" /> Leer más
              </button>
            </div>
          </CustomCard>
        </Col>

        {/* Ejemplo 2: Tarjeta de Curso */}
        <Col md={4} className="mb-4">
          <CustomCard
            headerText="Curso Destacado"
            headerIcon={<FaGraduationCap className="text-success" size={18} />}
            title="Matemáticas Avanzadas"
            titleIcon={<FaBook className="text-danger" />}
            footerText="Prof. Juan Pérez"
            footerIcon={<FaUserGraduate className="text-info" />}
            borderColor="success"
          >
            <p>Curso avanzado de matemáticas para estudiantes de último año.</p>
            <div className="d-grid">
              <button className="btn btn-success">Inscribirse</button>
            </div>
          </CustomCard>
        </Col>

        {/* Ejemplo 3: Tarjeta de Contacto */}
        <Col md={4} className="mb-4">
          <CustomCard
            title="Contacto"
            titleIcon={<FaSchool className="text-primary" size={20} />}
            borderColor="primary"
          >
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-center">
                <FaMapMarkerAlt className="text-danger me-2" />
                <span>Av. Principal #123, Ciudad</span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <FaPhone className="text-success me-2" />
                <span>+123 456 7890</span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <FaEnvelope className="text-info me-2" />
                <span>contacto@escuela.edu</span>
              </li>
            </ul>
          </CustomCard>
        </Col>
      </Row>

      <Row>
        {/* Ejemplo 4: Tarjeta de Documento */}
        <Col md={6} className="mb-4">
          <CustomCard
            headerText="Documento Importante"
            headerIcon={<FaFileAlt className="text-warning" size={18} />}
            title="Reglamento Escolar 2024"
            titleIcon={<FaClipboardList className="text-primary" />}
            borderColor="warning"
            onClick={() => alert("Descargando documento...")}
          >
            <p>
              Haz clic en esta tarjeta para descargar el reglamento escolar
              actualizado.
            </p>
            <div className="text-muted fst-italic">
              <small>Última actualización: Abril 2024</small>
            </div>
          </CustomCard>
        </Col>

        {/* Ejemplo 5: Tarjeta de Evento */}
        <Col md={6} className="mb-4">
          <CustomCard
            title="Graduación 2024"
            titleIcon={<FaGraduationCap className="text-primary" size={20} />}
            subtitle="20 de junio, 2024 - 18:00 hrs"
            subtitleIcon={<FaCalendarAlt className="text-secondary" />}
            imageUrl="https://via.placeholder.com/400x200"
            imageAlt="Ceremonia de graduación"
            borderColor="secondary"
          >
            <p>
              Ceremonia de graduación para alumnos de último año. Se realizará
              en el Auditorio Principal.
            </p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-sm btn-outline-secondary">
                <FaCalendarAlt className="me-1" /> Agendar
              </button>
              <button className="btn btn-sm btn-secondary">
                <FaInfoCircle className="me-1" /> Más información
              </button>
            </div>
          </CustomCard>
        </Col>
      </Row>
    </Container>
  );
};

export default CardExamples;
