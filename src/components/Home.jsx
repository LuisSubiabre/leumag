import { useEffect, useState } from "react";
import Posts from "./Posts";
import Documentos from "./Documentos";
import Externos from "./Externos";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import imgComunicado from "/comunicados/com01042025.png";
import { ComunicadosComponent } from "./ComunicadosComponent";
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
        <Modal.Title id="contained-modal-title-vcenter">Comunicado</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <p>
          <img
            src={imgComunicado}
            width="600"
            height="600"
            alt="li"
            className="img-fluid"
          />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

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
            <ComunicadosComponent />
            <hr />
            <Documentos />
          </Col>
          <Col lg={4} className="order-1 order-lg-2">
            <div className="d-lg-none mb-4">
              <Externos />
            </div>
            <div
              className="d-none d-lg-block sticky-top"
              style={{ top: "20px" }}
            >
              <Externos />
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
