import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Posts from "./Posts";
import Documentos from "./Documentos";
import Externos from "./Externos";
// import FacebookFeed from "./FacebookFeed";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
//import NoticiasScraper from "./NoticiasScraper";
import { Container, Row, Col } from "react-bootstrap";
import ComponentSae from "./sae";
import UltimosVideos from "./UltimosVideos";
import UltimosComunicados from "./UltimosComunicados";

// Componente del modal
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column align-items-center">
          <div
            className="mt-4 w-100"
            style={{ maxWidth: "650px", textAlign: "left" }}
          >
            <h3 className="mb-4 text-center fw-bold text-primary"></h3>

            {/* Sección 1: Beneficio Alimentación Escolar */}
            <div className="mb-4 px-3">
              <div
                id="comunicadosCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="6000"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <a
                      href="/Comunicados"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/comunicados/060326.png"
                        alt="Información Importante"
                        className="d-block w-100 img-fluid"
                        style={{ cursor: "pointer" }}
                      />
                    </a>
                  </div>
                  <div className="carousel-item">
                    <a
                      href="/Comunicados"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/comunicados/060326Fina.png"
                        alt="Información Importante"
                        className="d-block w-100 img-fluid"
                        style={{ cursor: "pointer" }}
                      />
                    </a>
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#comunicadosCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Anterior</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#comunicadosCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Siguiente</span>
                </button>
              </div>

              <div className="d-flex justify-content-center mt-2">
                <div
                  className="carousel-indicators position-static m-0"
                  style={{ gap: "0.5rem" }}
                >
                  <button
                    type="button"
                    data-bs-target="#comunicadosCarousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Imagen 1"
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#0d6efd",
                      opacity: 1,
                    }}
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#comunicadosCarousel"
                    data-bs-slide-to="1"
                    aria-label="Imagen 2"
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#6c757d",
                      opacity: 0.7,
                    }}
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

MyVerticallyCenteredModal.propTypes = {
  onHide: PropTypes.func.isRequired,
};

// Componente principal Home
function Home() {
  const [modalShow, setModalShow] = useState(true);

  useEffect(() => {
    setModalShow(true);
  }, []);

  return (
    <>
      <Container fluid className="px-4">
        <Row>
          <Col lg={8} className="order-2 order-lg-1">
            <Posts />
            <hr className="d-lg-none" />
            <UltimosVideos />

            <hr />
            <Documentos />
          </Col>
          <Col lg={4} className="order-1 order-lg-2">
            <div className="d-lg-none mb-4">
              <Externos />
              <hr />
              <ComponentSae />
            </div>
            <hr />

            <div
              className="d-none d-lg-block sticky-top"
              style={{ top: "80px" }}
            >
              <Externos />
              <hr />
              <UltimosComunicados />
              <hr />
              <ComponentSae />
              <hr />
              {/* <FacebookFeed /> */}

              {/* <div
                className="bg-body-tertiary"
                style={{
                  backgroundImage: "url('/images/bannerumag.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  padding: "2rem",
                  borderRadius: "15px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  marginBottom: "2rem",
                  position: "relative",
                  backdropFilter: "blur(8px)",
                  backgroundColor: "rgba(var(--bs-body-bg-rgb), 0.15)",
                }}
              >
                <div
                  className="bg-body"
                  style={{
                    padding: "2rem",
                    borderRadius: "15px",
                    backdropFilter: "blur(4px)",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                    backgroundColor: "rgba(var(--bs-body-bg-rgb), 0.6)",
                  }}
                >
                  <h2 className="text-2xl font-bold text-center mb-4">
                    Intervenciones educativas Carrera de Nutrición y Dietética
                    Universidad de Magallanes
                  </h2>
                  <NoticiasScraper />
                </div>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Home;
