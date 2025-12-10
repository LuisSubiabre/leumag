import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Posts from "./Posts";
import Documentos from "./Documentos";
import Externos from "./Externos";
// import FacebookFeed from "./FacebookFeed";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import NoticiasScraper from "./NoticiasScraper";
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
      <Modal.Body className="text-center">
        <div className="d-flex flex-column align-items-center">
          <h2>Horarios de Citación para Matrícula 2026</h2>
          <div className="mb-4">
            <p className="lead mb-3">Estimados apoderados:</p>
            <p className="mb-3">
              Informamos que ya se encuentran disponibles los horarios de
              citación para el proceso de <strong>Matrícula 2026</strong>. Cada
              apoderado podrá revisar el día y hora asignado para realizar el
              trámite correspondiente.
            </p>
            <p className="mb-0">
              Agradecemos su colaboración y compromiso con el proceso de
              matrícula.
            </p>
          </div>
          <div className="d-flex flex-column gap-3 align-items-center w-100">
            <Button
              href="https://drive.google.com/file/d/1PCK1JobSm876adzEGhRhhB7UiOTogr8a/view?usp=drive_link"
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
              className="w-100"
              style={{ maxWidth: "300px" }}
            >
              Horarios de Citación - Estudiantes Nuevos
            </Button>
            <Button
              href="https://drive.google.com/drive/folders/1RK69p0dVA1zPfm6VJSRT5J-Y_zlWlYNY"
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
              className="w-100"
              style={{ maxWidth: "300px" }}
            >
              Horarios de Citación - Estudiantes Antiguos
            </Button>
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

              <div
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
              </div>
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
