import { Container, Row, Col } from "react-bootstrap";
import docRIE from "../assets/docs/RIE.pdf";
import docPISE from "../assets/docs/PISE.pdf";
import docEvaluacion from "../assets/docs/reglamento2024.pdf";
// import docConvivencia from '../assets/docs/convivencia.pdf';
import docCAA from "../assets/docs/reglamentoCAA.pdf";
import CustomCard from "./CustomCard";
import { FaFileAlt, FaFilePdf, FaGoogle } from "react-icons/fa";

const Documentos = () => {
  return (
    <Container className="py-5">
      <Row className="g-4">
        <Col md={6} lg={4} className="mb-4">
          <a
            href="https://docs.google.com/presentation/d/1bfAJUra5h97VnXrcEYnShwg9MblkiBpX/edit?usp=sharing&ouid=113785725979968228794&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <CustomCard
              headerText="Cuenta Pública 2024"
              headerIcon={<FaFileAlt className="text-primary" />}
              title="Cuenta Pública 2024"
              borderColor="#007bff"
              footerText="Ver documento"
              footerIcon={<FaGoogle className="text-danger" />}
              subtitle={<span className="badge bg-danger ms-2">Nuevo</span>}
            />
          </a>
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <a
            href={docRIE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none cursor-pointer"
          >
            <CustomCard
              headerText="RIE"
              headerIcon={<FaFileAlt className="text-primary" />}
              title="Reglamento Interno Escolar"
              borderColor="primary"
              footerText="Ver documento"
              footerIcon={<FaFilePdf className="text-danger" />}
            />
          </a>
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <a
            href={docPISE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none cursor-pointer"
          >
            <CustomCard
              headerText="PISE"
              headerIcon={<FaFileAlt className="text-primary" />}
              title="Plan Integral de Seguridad Escolar"
              borderColor="primary"
              footerText="Ver documento"
              footerIcon={<FaFilePdf className="text-danger" />}
            />
          </a>
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <a
            href={docEvaluacion}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none cursor-pointer"
          >
            <CustomCard
              headerText="Evaluación"
              headerIcon={<FaFileAlt className="text-primary" />}
              title="Reglamento de Evaluación y Promoción"
              borderColor="primary"
              footerText="Ver documento"
              footerIcon={<FaFilePdf className="text-danger" />}
            />
          </a>
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <a
            href={docCAA}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none cursor-pointer"
          >
            <CustomCard
              headerText="CAA"
              headerIcon={<FaFileAlt className="text-primary" />}
              title="Reglamento Centro de Alumnos"
              borderColor="primary"
              footerText="Ver documento"
              footerIcon={<FaFilePdf className="text-danger" />}
            />
          </a>
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <a
            href="https://docs.google.com/document/d/1m7WZ1CmMgsM2u34fZSoePobwyexFi52M/pub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none cursor-pointer"
          >
            <CustomCard
              headerText="Becas"
              headerIcon={<FaFileAlt className="text-primary" />}
              title="Reglamento General de Becas 2025"
              borderColor="primary"
              footerText="Ver documento"
              footerIcon={<FaGoogle className="text-danger" />}
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Documentos;
