import React, { useEffect, useState } from "react";
import Posts from "./Posts";
import { Documentos } from "./Documentos";
import Externos from "./Externos";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import imgComunicado from "/comunicados/com030325.png";
import { ComunicadosComponent } from "./ComunicadosComponent";
import { Link } from "react-router-dom";

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
          <a
            href="https://docs.google.com/document/d/1hcoJ4nTqdvt7Y_W2ooJjACYKsvpq36_GXnAYvKUzE-Q/edit?tab=t.0"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={imgComunicado}
              width="600"
              height="600"
              alt="Felices Vacaciones"
              className="img-fluid"
            />
          </a>
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
}

export default Home;
