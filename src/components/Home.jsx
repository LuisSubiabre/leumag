import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Posts from "./Posts";
import Documentos from "./Documentos";
import Externos from "./Externos";
import FacebookFeed from "./FacebookFeed";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
//import imgComunicado from "/comunicados/afichePAES.jpg";
import imgComunicado from "/comunicados/comEstudiante.png";
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
        <p>
          <img
            src={imgComunicado}
            width="400"
            height="400"
            alt="Comunicado"
            className="img-fluid"
          />
        </p>
        <p>
          <strong>Queridos estudiantes:</strong>
        </p>
        <p>
          Hoy, 9 de mayo, es oficialmente el <strong>Día del Estudiante</strong>
          , y aunque en nuestro liceo celebraremos esta fecha el próximo{" "}
          <strong>viernes 16 de mayo</strong>, no queremos dejar pasar esta
          oportunidad para saludarlos con mucho cariño.
        </p>
        <p>
          Ustedes son el corazón de nuestra comunidad educativa. Cada día, con
          sus sueños, preguntas, talentos y energía, llenan de sentido nuestro
          trabajo. Por eso, aunque aplazamos la celebración por razones
          organizativas y de contingencia comunal, estamos preparando una
          jornada especial pensada para ustedes, donde puedan disfrutar,
          compartir y sentirse reconocidos como quienes deben brillar en nuestro
          liceo.
        </p>
        <p>
          Queremos también invitarlos a reflexionar. Celebremos este día
          recordando que una buena convivencia nace del respeto, del cuidado
          mutuo y de saber que todos tenemos un lugar en esta comunidad. Ser
          estudiante no es solo aprender materias, sino aprender a vivir con
          otros, con empatía, con alegría y con responsabilidad.
        </p>
        <p>
          <strong>¡Feliz Día del Estudiante!</strong> Nos vemos el{" "}
          <strong>viernes 16</strong> para celebrarlo como merecen.
        </p>
        <p>
          Con afecto, <br />
          <strong>TODA LA COMUNIDAD EXPERIMENTALINA</strong>
        </p>
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
