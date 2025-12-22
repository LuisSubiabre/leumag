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
            href="https://drive.google.com/file/d/1N2faAgh6_dTrhgXzrkfuSAFKr5r5pHNO/view?usp=drive_link"
            target="_blank"
            // rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            // onClick={(e) => e.preventDefault()}
            // style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card
              border="primary"
              className="mb-4 btCard"
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
                <Card.Title>Materiales NT 1 </Card.Title>
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
            href="https://drive.google.com/file/d/1ssVxeUvX7GoTvodKMsOomBQUR6dbIPFt/view?usp=drive_link"
            target="_blank"
            // rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            //onClick={(e) => e.preventDefault()}
            //style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card
              border="primary"
              className="mb-4 btnCard"
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
            href="/docs/materiales2026/Textos-de-Ingles-2026.pdf"
            target="_blank"
            // rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            // onClick={(e) => e.preventDefault()}
            // style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card border="primary" className="mb-4 btCard">
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
            href="https://drive.google.com/file/d/1Z-fHoot5L2ACkmnPDoAq92JUwogurtTa/view?usp=drive_link"
            target="_blank"
            //   rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            //   onClick={(e) => e.preventDefault()}
            // style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card border="primary" className="mb-4 btnCard">
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
            href="https://drive.google.com/file/d/14nlLEesRRDbkG5S_LB_tlDA3uXHS8FY2/view?usp=drive_link"
            target="_blank"
            // rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            //  onClick={(e) => e.preventDefault()}
            //   style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card border="primary" className="mb-4 btnCard">
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
            href="https://drive.google.com/file/d/141GjAarICIHn6XqKQKLdZsPjdcmuExeF/view?usp=drive_link"
            target="_blank"
            //rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            //onClick={(e) => e.preventDefault()}
            //style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card border="primary" className="mb-4 btnCard">
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
            href="https://drive.google.com/file/d/1_QWYZ3qqG7G1aG6bFOc3tonDqkqs80Xa/view?usp=sharing"
            target="_blank"
            //   rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            // onClick={(e) => e.preventDefault()}
            //style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card border="primary" className="mb-4 btnCard">
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
            href="https://drive.google.com/file/d/10Tsz3DAkBPx5CzKRG0qi9pOAp2qNVgwP/view?usp=drive_link"
            target="_blank"
            //  rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            // onClick={(e) => e.preventDefault()}
            // style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card border="primary" className="mb-4 btnCard">
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
            href="https://drive.google.com/file/d/1LdcyWmm3Qldg0x_S3oDDg7BNo9hxztaR/view?usp=drive_link"
            target="_blank"
            // rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            // onClick={(e) => e.preventDefault()}
            // style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card border="primary" className="mb-4 btnCard">
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
            href="https://drive.google.com/file/d/13p5V5RMVAiSUWMBP1xSnHL22rl195obE/view?usp=drive_link"
            target="_blank"
            // rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            //onClick={(e) => e.preventDefault()}
            //style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card border="primary" className="mb-4 btnCard">
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
            href="https://drive.google.com/file/d/18ZQifunnOoePyMX3Ld10kvh7P2s0SlqB/view?usp=drive_link"
            target="_blank"
            // rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            //onClick={(e) => e.preventDefault()}
            //style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card border="primary" className="mb-4 btnCard">
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
            href="/docs/materiales2026/Textos-de-Ingles-2026.pdf"
            target="_blank"
            // rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            // onClick={(e) => e.preventDefault()}
            //style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card border="primary" className="mb-4 btnCard">
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
            href="/docs/materiales2026/PlanLector-1a4EGB-2026.pdf"
            target="_blank"
            // rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            // onClick={(e) => e.preventDefault()}
            //  style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card border="primary" className="mb-4 btnCard">
              <Card.Header>
                <FaGraduationCap className="text-primary me-2" size={18} />
                <span>Plan Lector de 1ero a 4to</span>
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
        <div className="col-md-4">
          <a
            href="/docs/materiales2026/PlanLector-5a8EGB-2026.pdf"
            target="_blank"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
          >
            <Card border="primary" className="mb-4 btnCard">
              <Card.Header>
                <FaGraduationCap className="text-primary me-2" size={18} />
                <span>Plan Lector de 5to a 8vo</span>
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
            //   rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            // onClick={(e) => e.preventDefault()}
            // style={{ pointerEvents: "none", cursor: "not-allowed" }}
          >
            <Card border="primary" className="mb-4 btnCard">
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
