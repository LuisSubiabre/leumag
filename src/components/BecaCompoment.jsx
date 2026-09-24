import { Alert, Container, Button, Modal, ListGroup } from "react-bootstrap";
import { useState } from "react";
import PropTypes from "prop-types";

const BecaComponent = ({ show, onHide }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    if (onHide) onHide();
  };
  const handleShow = () => setShowModal(true);

  const modalShow = show !== undefined ? show : showModal;
  const handleModalClose =
    show !== undefined ? handleClose : () => setShowModal(false);

  return (
    <>
      {show === undefined && (
        <Container className="my-4 justify-content-center text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={handleShow}
            className="mt-3"
          >
            Ver Información Importante
          </Button>
        </Container>
      )}

      <Modal show={modalShow} onHide={handleModalClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Beca Vulnerabilidad año 2027</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-4">
            <Alert variant="secondary" className="mb-4">
              El plazo de postulación finalizó el{" "}
              <strong>martes 22 de septiembre a las 23:59 hrs</strong>. Las
              consultas se recibieron hasta el{" "}
              <strong>16 de septiembre</strong>.
            </Alert>

            <h5 className="fw-bold mb-3">Estimados Padres y Apoderados:</h5>

            <p>
              Junto con saludarles, con fecha{" "}
              <strong>miércoles 02 de septiembre</strong> se informaron las
              fechas del{" "}
              <strong>
                Proceso de postulación a la Beca Vulnerabilidad año 2027
              </strong>
              . El proceso ya se encuentra cerrado.
            </p>

            <p>
              Se solicita revisar detalladamente los siguientes puntos:
            </p>

            <ListGroup>
              <ListGroup.Item>
                <strong>1.-</strong> Circular Proceso de Postulación
                vulnerabilidad 2027: Indica características del Establecimiento,
                Normativas Legales y Procedimientos de Postulación; se solicita
                leer detenidamente estas normativas y respetarla íntegramente ya
                que cualquier falta u omisión contenida en estas indicaciones no
                permitirán su continuidad en el proceso.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>2.-</strong> Reglamento de Becas año 2025: dicho
                reglamento norma los tipos de becas institucionales, la vigencia
                de estas y los requisitos de postulación. (Revisar página web
                del Establecimiento educacional)
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>3.-</strong>{" "}
                <span className="text-decoration-line-through">
                  Formulario de postulación a Beca Vulnerabilidad: Descargar
                  formulario y completarlo con letra legible, para luego ser
                  enviado junto a la documentación de respaldo al correo
                  electrónico indicado en la circular.
                </span>{" "}
                <span className="text-muted">(plazo expirado)</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>4.-</strong>{" "}
                <span className="text-decoration-line-through">
                  Documentación Obligatoria a Presentar 2027.
                </span>{" "}
                <span className="text-muted">(plazo expirado)</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>5.-</strong>{" "}
                <span className="text-decoration-line-through">
                  Declaración de Gastos Mensuales 2027 (sólo para trabajadores
                  ocasionales o independientes).
                </span>{" "}
                <span className="text-muted">(plazo expirado)</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>6.-</strong>{" "}
                <span className="text-decoration-line-through">
                  Archivos necesarios para realizar postulación.
                </span>{" "}
                <span className="text-muted">(plazo expirado)</span>
              </ListGroup.Item>
            </ListGroup>

            <div className="mt-3">
              <p className="mb-1">
                <strong>Postulaciones:</strong> desde el miércoles 09 de
                septiembre a las 15:00 hrs hasta el martes 22 de septiembre a
                las 23:59 hrs.{" "}
                <span className="text-muted">(plazo expirado)</span>
              </p>
              <p className="text-muted mb-0">
                Dudas y consultas:{" "}
                postulacionvulnerabilidad2027@liceoexperimental.cl{" "}
                <span>(plazo expirado)</span>
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

BecaComponent.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
};

export default BecaComponent;
