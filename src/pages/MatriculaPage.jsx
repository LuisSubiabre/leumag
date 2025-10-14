import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaFileAlt, FaDownload } from "react-icons/fa";
import "./MatriculaPage.css";

const MatriculaPage = () => {
  return (
    <div className="matricula-container">
      <div className="matricula-section">
        <Card className="matricula-card">
          <Card.Body>
            <Card.Title className="text-center mb-4">
              <h2>Matrícula 2026 Alumnos Nuevos</h2>
            </Card.Title>
            <div className="d-flex justify-content-center">
              <Button
                href=""
                variant="warning"
                target="_blank"
                className="matricula-button"
              >
                <FaFileAlt className="me-2" />
                Circular Matrícula 2026
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="matricula-section">
        <Card className="matricula-card">
          <Card.Body>
            <Card.Title className="text-center mb-4">
              <h2>Matrícula 2026 Alumnos Antiguos</h2>
            </Card.Title>
            <div className="d-flex justify-content-center gap-3">
              <Button
                href=""
                variant="primary"
                target="_blank"
                className="matricula-button"
              >
                <FaFileAlt className="me-2" />
                Circular Matrícula 2026
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
