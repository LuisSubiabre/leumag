import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Posts from "./Posts";
import Documentos from "./Documentos";
import Externos from "./Externos";
import FacebookFeed from "./FacebookFeed";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
//import imgComunicado from "/comunicados/afichePAES.jpg";
import imgComunicado from "/comunicados/diaMadre.png";
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
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <div>
          <img
            src={imgComunicado}
            width="400"
            height="400"
            alt="Comunicado"
            className="img-fluid mb-3"
          />
        </div>
        <div>
          <p>
            En este Día de las Madres, queremos reconocer y felicitar con afecto
            a todas las mujeres de nuestra comunidad educativa que cumplen con
            amor y entrega el valioso rol de ser madres: apoderadas,
            funcionarias, docentes y asistentes.
          </p>
          <p>
            Gracias por su dedicación, por acompañar con compromiso la formación
            de sus hijos e hijas, y por ser un ejemplo diario de fortaleza,
            cuidado y generosidad.
          </p>
          <p>
            ¡Feliz Día de la Madre! Que reciban hoy y siempre el mismo amor que
            entregan cada día.
          </p>
          <p>
            <em>Comunidad Educativa Liceo Experimental Umag</em>
          </p>
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
