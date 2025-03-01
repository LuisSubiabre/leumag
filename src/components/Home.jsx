import React, { useEffect } from "react";
//import { Row, Col } from "react-bootstrap";
import Posts from "./Posts";
import { Documentos } from "./Documentos";
import Externos from "./Externos";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import imgComunicado from "/comunicados/necrologico.png";
//import imgMatricula from '../assets/img/com111224.png';
import docMatricula from "/docs/citacion_alumnos_nuevos.pdf";
import { ComunicadosComponent } from "./ComunicadosComponent";
import { Link } from "react-router-dom";
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
        {" "}
        {/* Added className */}
        <p>
          <Link to="/Materiales" rel="noreferrer">
            <img
              src={imgComunicado}
              width="600"
              height="600"
              alt="Felices Vacaciones"
              className="img-fluid"
            />
          </Link>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

  const [modalShow, setModalShow] = React.useState(true);

  useEffect(() => {
    setModalShow(true);
  }, []);

  return (
    <>
      <div className="container contenedor px-5">
        <Posts />
        <hr />
        <ComunicadosComponent />
        <hr />
        <Documentos />
        <hr />
        <Externos />
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Home;
