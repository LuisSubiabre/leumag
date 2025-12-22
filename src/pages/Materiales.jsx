import { Card } from "react-bootstrap";
import { FaFileAlt, FaGraduationCap } from "react-icons/fa";

const Materiales = () => {
  return (
    <div className="container contenedor px-5">
      <h2>Lista de Materiales y Plan Lector 2026</h2>
      <hr />

      <h4>Educación Parvularia</h4>
      <div className="row">
        <div className="col-md-4">
          <a
            href="/docs/materiales2025/LM-NT1-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            onClick={(e) => e.preventDefault()}
            style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card
              border="primary"
              className="mb-4 disabled"
              style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Header className="d-flex align-items-center">
                <FaGraduationCap className="text-primary me-2" size={18} />
                <span>Materiales NT 1</span>
              </Card.Header>
              <Card.Body>
                <Card.Title>Materiales NT 1 / En actualización</Card.Title>
                <Card.Text className="d-flex align-items-center">
                  <FaFileAlt className="text-danger me-2" size={16} /> Ver
                  materiales
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div className="col-md-4">
          <a
            href="/docs/materiales2025/LM-NT2-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            onClick={(e) => e.preventDefault()}
            style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card
              border="primary"
              className="mb-4 disabled"
              style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Header className="d-flex align-items-center">
                <FaGraduationCap className="text-primary me-2" size={18} />
                <span>Materiales NT 2</span>
              </Card.Header>
              <Card.Body>
                <Card.Title>Materiales NT 2</Card.Title>
                <Card.Text className="d-flex align-items-center">
                  <FaFileAlt className="text-danger me-2" size={16} /> Ver
                  materiales
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div className="col-md-4">
          <a
            href="/docs/materiales2025/TextosIngles-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            onClick={(e) => e.preventDefault()}
            style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card border="primary" className="mb-4 disabled">
              <Card.Header>
                <FaGraduationCap className="text-primary me-2" size={18} />
                <span>Textos de Inglés</span>
              </Card.Header>
              <Card.Body>
                <Card.Title>Textos de Inglés</Card.Title>
                <Card.Text className="d-flex align-items-center">
                  <FaFileAlt className="text-danger me-2" size={16} /> Ver
                  materiales
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
      </div>

      <hr />
      <h4>Educación Básica</h4>
      <div className="row">
        <div className="col-md-4">
          <a
            href="/docs/materiales2025/LM-1-Basico-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            onClick={(e) => e.preventDefault()}
            style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card border="primary" className="mb-4 disabled">
              <Card.Header>
                <FaGraduationCap className="text-primary me-2" size={18} />
                <span>1ero Básico</span>
              </Card.Header>
              <Card.Body>
                <Card.Title>1ero Básico</Card.Title>
                <Card.Text className="d-flex align-items-center">
                  <FaFileAlt className="text-danger me-2" size={16} /> Ver
                  materiales
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div className="col-md-4">
          <a
            href="/docs/materiales2025/LM-2-Basico-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            onClick={(e) => e.preventDefault()}
            style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card border="primary" className="mb-4 disabled">
              <Card.Header>
                <FaGraduationCap className="text-primary me-2" size={18} />
                <span>2do Básico</span>
              </Card.Header>
              <Card.Body>
                <Card.Title>2do Básico</Card.Title>
                <Card.Text className="d-flex align-items-center">
                  <FaFileAlt className="text-danger me-2" size={16} /> Ver
                  materiales
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div className="col-md-4">
          <a
            href="/docs/materiales2025/LM-3-Basico-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            onClick={(e) => e.preventDefault()}
            style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card border="primary" className="mb-4 disabled">
              <Card.Header>
                <FaGraduationCap className="text-primary me-2" size={18} />
                <span>3ero Básico</span>
              </Card.Header>
              <Card.Body>
                <Card.Title>3ero Básico</Card.Title>
                <Card.Text className="d-flex align-items-center">
                  <FaFileAlt className="text-danger me-2" size={16} /> Ver
                  materiales
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <a
            href="/docs/materiales2025/LM-4-Basico-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            onClick={(e) => e.preventDefault()}
            style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card border="primary" className="mb-4 disabled">
              <Card.Header>
                <FaGraduationCap className="text-primary me-2" size={18} />
                <span>4to Básico</span>
              </Card.Header>
              <Card.Body>
                <Card.Title>4to Básico</Card.Title>
                <Card.Text className="d-flex align-items-center">
                  <FaFileAlt className="text-danger me-2" size={16} /> Ver
                  materiales
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div className="col-md-4">
          <a
            href="/docs/materiales2025/LM-5-Basico-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            onClick={(e) => e.preventDefault()}
            style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card border="primary" className="mb-4 disabled">
              <Card.Header>
                <FaGraduationCap className="text-primary me-2" size={18} />
                <span>5to Básico</span>
              </Card.Header>
              <Card.Body>
                <Card.Title>5to Básico</Card.Title>
                <Card.Text className="d-flex align-items-center">
                  <FaFileAlt className="text-danger me-2" size={16} /> Ver
                  materiales
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div className="col-md-4">
          <a
            href="/docs/materiales2025/LM-6-Basico-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            onClick={(e) => e.preventDefault()}
            style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card border="primary" className="mb-4 disabled">
              <Card.Header>
                <FaGraduationCap className="text-primary me-2" size={18} />
                <span>6to Básico</span>
              </Card.Header>
              <Card.Body>
                <Card.Title>6to Básico</Card.Title>
                <Card.Text className="d-flex align-items-center">
                  <FaFileAlt className="text-danger me-2" size={16} /> Ver
                  materiales
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <a
            href="/docs/materiales2025/LM-7-Basico-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            onClick={(e) => e.preventDefault()}
            style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card border="primary" className="mb-4 disabled">
              <Card.Header>
                <FaGraduationCap className="text-primary me-2" size={18} />
                <span>7mo Básico</span>
              </Card.Header>
              <Card.Body>
                <Card.Title>7mo Básico</Card.Title>
                <Card.Text className="d-flex align-items-center">
                  <FaFileAlt className="text-danger me-2" size={16} /> Ver
                  materiales
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div className="col-md-4">
          <a
            href="/docs/materiales2025/LM-8-Basico-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            onClick={(e) => e.preventDefault()}
            style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card border="primary" className="mb-4 disabled">
              <Card.Header>
                <FaGraduationCap className="text-primary me-2" size={18} />
                <span>8vo Básico</span>
              </Card.Header>
              <Card.Body>
                <Card.Title>8vo Básico</Card.Title>
                <Card.Text className="d-flex align-items-center">
                  <FaFileAlt className="text-danger me-2" size={16} /> Ver
                  materiales
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div className="col-md-4">
          <a
            href="/docs/materiales2025/TextosIngles-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            onClick={(e) => e.preventDefault()}
            style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card border="primary" className="mb-4 disabled">
              <Card.Header>
                <FaGraduationCap className="text-primary me-2" size={18} />
                <span>Textos de Inglés</span>
              </Card.Header>
              <Card.Body>
                <Card.Title>Textos de Inglés</Card.Title>
                <Card.Text className="d-flex align-items-center">
                  <FaFileAlt className="text-danger me-2" size={16} /> Ver
                  materiales
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>

        <div className="col-md-4">
          <a
            href="/docs/materiales2025/Plan-Lector-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            onClick={(e) => e.preventDefault()}
            style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card border="primary" className="mb-4 disabled">
              <Card.Header>
                <FaGraduationCap className="text-primary me-2" size={18} />
                <span>Plan Lector</span>
              </Card.Header>
              <Card.Body>
                <Card.Title>Plan Lector</Card.Title>
                <Card.Text className="d-flex align-items-center">
                  <FaFileAlt className="text-danger me-2" size={16} /> Ver
                  materiales
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
      </div>
      <hr />
      <h4>Educación Media</h4>
      <div className="row">
        <div className="col-md-4">
          <a
            href="https://docs.google.com/spreadsheets/d/1W_iw4bAgls3f5fkcLuZ1g_f10SXKJqFQcVvpxRgN4w4/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            onClick={(e) => e.preventDefault()}
            style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card border="primary" className="mb-4 disabled">
              <Card.Header>
                <FaGraduationCap className="text-primary me-2" size={18} />
                <span>Materiales E.M.</span>
              </Card.Header>
              <Card.Body>
                <Card.Title>Materiales 1ero a 4to Medio</Card.Title>
                <Card.Text className="d-flex align-items-center">
                  <FaFileAlt className="text-danger me-2" size={16} /> Ver
                  materiales
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div className="col-md-4">
          <a
            href="/docs/materiales2026/Plan-Lector-EM-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
          >
            <Card border="primary" className="mb-4 btnCard">
              <Card.Header>
                <FaGraduationCap className="text-primary me-2" size={18} />
                <span>Plan Lector E.M.</span>
              </Card.Header>
              <Card.Body>
                <Card.Title>Plan Lector Ens. Media</Card.Title>
                <Card.Text className="d-flex align-items-center">
                  <FaFileAlt className="text-danger me-2" size={16} /> Ver
                  materiales
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Materiales;
