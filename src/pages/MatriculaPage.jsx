import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { FaDownload, FaClock } from "react-icons/fa";
import "./MatriculaPage.css";

const MatriculaPage = () => {
  return (
    <div className="matricula-container">
      {/* <Alert variant="info" className="text-center">
        <FaClock className="me-2" />
        Las circulares de matrícula 2026 estarán disponibles próximamente
      </Alert> */}

      {/* <div className="matricula-section">
        <Card className="">
          <Card.Body>
            <Card.Title className="text-center mb-4">
              <h2>Matrícula 2026 Alumnos Nuevos</h2>
            </Card.Title>
            <div className="d-flex justify-content-center">
              <Button
                variant="secondary"
                disabled
                className="matricula-button matricula-button-disabled"
              >
                <FaFileAlt className="me-2" />
                Circular Matrícula 2026
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div> */}

      <div className="matricula-section">
        <Card className="">
          <Card.Body>
            <Card.Title className="text-center mb-4">
              <h2>Matrícula 2026 Estudiantes Antiguos</h2>
            </Card.Title>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Button
                href="/docs/CircularMatriculasAntiguos.pdf"
                variant="primary"
                target="_blank"
                className="matricula-button"
              >
                <FaDownload className="me-2" />
                Circular Matrícula 2026
              </Button>
              <Button
                href="/docs/ProtocoloAcreditacion.pdf"
                variant="primary"
                target="_blank"
                className="matricula-button"
              >
                <FaDownload className="me-2" />
                Protocolo de Acreditación de Cambio en la Condición
                Socioeconómica y la Determinación de la No Renovación de
                Matrícula
              </Button>
              <Button
                href="/docs/FORMATO-PODER-NOTARIAL-2026.pdf"
                variant="primary"
                target="_blank"
                className="matricula-button"
              >
                <FaDownload className="me-2" />
                Formato Poder Notarial
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default MatriculaPage;
