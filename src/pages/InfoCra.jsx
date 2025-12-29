import { Container, Row, Col } from "react-bootstrap";
import { FaNewspaper, FaCalendarAlt, FaBookReader } from "react-icons/fa";
import { craInfo } from "../data/infocra.js";

const InfoCra = () => {
  return (
    <Container className="contenedor py-5">
      <h1 className="text-center mb-5">
        <FaBookReader className="me-2 text-primary" />
        Centro de Recursos para el Aprendizaje (CRA)
      </h1>
      <p className="text-center mb-5">
        En esta sección podrás encontrar la revista digital del CRA de nuestro
        establecimiento.
      </p>

      <Row className="g-4">
        {craInfo.map((portada) => (
          <Col key={portada.id} xs={12} md={6} lg={4}>
            <div
              className="card h-100"
              style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(0, 123, 255, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div className="position-relative">
                <a
                  href={portada.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block" }}
                >
                  <img
                    src={portada.image}
                    className="card-img-top"
                    alt={portada.title}
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                  <div className="position-absolute top-0 start-0 p-2">
                    <FaNewspaper className="text-white opacity-75" size={24} />
                  </div>
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">{portada.title}</h5>
                <p className="card-text text-muted d-flex align-items-center">
                  <FaCalendarAlt className="me-2" />
                  {portada.year} - {portada.description}
                </p>
                <div className="d-grid">
                  <a
                    href={portada.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FaBookReader className="me-2" />
                    Ver publicación
                  </a>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default InfoCra;
