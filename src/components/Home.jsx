import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Posts from "./Posts";
import Documentos from "./Documentos";
import Externos from "./Externos";
import FacebookFeed from "./FacebookFeed";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import imgComunicado from "/comunicados/diaPadre.png";
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
        <Modal.Title id="contained-modal-title-vcenter">
          <span style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
            ¡Feliz Día del Padre!
          </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div
            style={{
              background: "rgba(245,245,245,0.95)",
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.5rem",
              boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
              textAlign: "left",
              fontSize: "1.08rem",
              lineHeight: 1.6,
              color: "#333",
            }}
          >
            <p>
              Hoy queremos dedicar unas palabras a todos los padres que forman
              parte de nuestra Comunidad Educativa: funcionarios, apoderados,
              abuelos, cuidadores. A cada uno que, desde su lugar, ha asumido
              con amor, paciencia y compromiso ese rol tan importante.
            </p>
            <p>
              Sabemos que ser papá no es una tarea sencilla. Requiere estar
              presente, muchas veces sin que se den cuenta, muchas veces
              agotados, pero siempre con el corazón puesto en lo mejor para sus
              hijos. Requiere enseñar con el ejemplo, acompañar con firmeza y
              ternura, y sostener incluso cuando las fuerzas disminuyen.
            </p>
            <p>
              A ustedes, que cada día se levantan a soñar un futuro con esfuerzo
              y cariño, les decimos gracias. Gracias por confiar en nuestro
              liceo, por ser parte de este camino y por todo lo que entregan,
              muchas veces sin que nadie lo note.
            </p>
            <p>
              Como comunidad del Liceo Experimental UMAG, les deseamos un día
              lleno de reconocimiento, de afecto sincero y de momentos que
              retribuyan el alma.
            </p>
            <p style={{ fontWeight: "bold", color: "#1976d2" }}>
              ¡Feliz Día del Padre!
            </p>
          </div>
          <img
            src={imgComunicado}
            width="320"
            height="320"
            alt="Comunicado"
            className="img-fluid mb-3"
            style={{
              borderRadius: "12px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              maxWidth: "100%",
              height: "auto",
            }}
          />
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
