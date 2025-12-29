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
              <h2>Matrícula 2025 Alumnos Nuevos</h2>
            </Card.Title>
            <div className="d-flex justify-content-center">
              <Button
                href="https://docs.google.com/document/d/1xMdNAjHErI2qpdVbbdncUog26vVZP96nBXyEkacuowY/edit?usp=sharing"
                variant="warning"
                target="_blank"
                className="matricula-button"
              >
                <FaFileAlt className="me-2" />
                Circular Matrícula 2025
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="matricula-section">
        <Card className="matricula-card">
          <Card.Body>
            <Card.Title className="text-center mb-4">
              <h2>Matrícula 2025 Alumnos Antiguos</h2>
            </Card.Title>
            <div className="d-flex justify-content-center gap-3">
              <Button
                href="https://docs.google.com/document/d/1fdl5CkCyUGHlX_VnhaMxtZu-4ZtRVtsU/edit?rtpof=true&sd=true#heading=h.gjdgxs"
                variant="primary"
                target="_blank"
                className="matricula-button"
              >
                <FaFileAlt className="me-2" />
                Circular Matrícula 2025
              </Button>
              <Button
                href="/docs/FORMATO-PODER-NOTARIAL-2025.pdf"
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
