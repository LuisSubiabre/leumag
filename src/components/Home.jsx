import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Posts from "./Posts";
import Documentos from "./Documentos";
import Externos from "./Externos";
import FacebookFeed from "./FacebookFeed";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import imgComunicado from "/comunicados/afiche.png";
import NoticiasScraper from "./NoticiasScraper";
import { Container, Row, Col } from "react-bootstrap";

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
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9a9MHDsBEHs?si=To2dnFUstGcYVjY4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <hr></hr>
          <img
            src={imgComunicado}
            width="400"
            height="400"
            alt="Comunicado"
            className="img-fluid mb-3"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
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
    setModalShow(false);
  }, []);

  return (
    <>
      <Container fluid className="px-4">
        <Row>
          <Col lg={8} className="order-2 order-lg-1">
            <Posts />
            <hr className="d-lg-none" />
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
                backgroundColor: "rgba(var(--bs-body-bg-rgb), 0.3)",
              }}
            >
              <div
                className="bg-body"
                style={{
                  padding: "2rem",
                  borderRadius: "15px",
                  backdropFilter: "blur(4px)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                }}
              >
                <h2 className="text-2xl font-bold text-center mb-4">
                  Intervenciones educativas Carrera de Nutrición y Dietética
                  Universidad de Magallanes
                </h2>
                <NoticiasScraper />
              </div>
            </div>
            <hr />
            <Documentos />
            <div className="d-lg-none">
              <hr />
              <FacebookFeed />
            </div>
          </Col>
          <Col lg={4} className="order-1 order-lg-2">
            <div className="d-lg-none mb-4">
              <Externos />
            </div>
            <div
              className="d-none d-lg-block sticky-top"
              style={{ top: "80px" }}
            >
              <Externos />
              <FacebookFeed />
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
