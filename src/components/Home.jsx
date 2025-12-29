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
            <h3 className="mb-4 text-center fw-bold text-primary">
              Información Importante
            </h3>

            {/* Sección 1: Beneficio Alimentación Escolar */}
            <div className="mb-4 px-3">
              <h4 className="mb-3 fw-bold" style={{ color: "#0d6efd" }}>
                Beneficio Alimentación Escolar JUNAEB 2026
              </h4>
              <p className="mb-2" style={{ lineHeight: "1.8" }}>
                Se informa a los interesados en obtener el Beneficio de
                Alimentación Escolar JUNAEB para el año 2026, enviar Registro
                Social de Hogares Actualizado al correo:{" "}
                <a
                  href="mailto:vhernandez@liceoexperimental.cl"
                  className="fw-semibold"
                  style={{ textDecoration: "none" }}
                >
                  vhernandez@liceoexperimental.cl
                </a>
                , indicando nombre completo del alumno/a y curso 2026.
              </p>
            </div>

            <hr className="my-4" />

            {/* Sección 2: Becas de Mantención */}
            <div className="px-3">
              <h4 className="mb-3 fw-bold" style={{ color: "#0d6efd" }}>
                Becas de Mantención Presidente de la República e Indígena
              </h4>
              <p className="mb-2" style={{ lineHeight: "1.8" }}>
                Se informa que JUNAEB dio inicio al proceso de postulación y
                renovación de las Becas de Mantención Presidente de la República
                e Indígena. Para postular, deben acceder al siguiente enlace:
              </p>
              <p className="mb-0">
                <a
                  href="https://www.junaeb.cl/portal-becas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fw-semibold"
                  style={{ wordBreak: "break-all" }}
                >
                  https://www.junaeb.cl/portal-becas/
                </a>
              </p>
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
