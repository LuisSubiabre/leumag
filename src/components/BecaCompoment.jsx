import { Container, Button, Modal, ListGroup } from "react-bootstrap";
import { useState } from "react";
import PropTypes from "prop-types";

const BecaComponent = ({ show, onHide }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    if (onHide) onHide();
  };
  const handleShow = () => setShowModal(true);

  // Si se pasa show como prop, usar ese valor, sino usar el estado interno
  const modalShow = show !== undefined ? show : showModal;
  const handleModalClose =
    show !== undefined ? handleClose : () => setShowModal(false);

  return (
    <>
      {/* Solo mostrar el contenido del componente si no se pasa show como prop */}
      {show === undefined && (
        <Container className="my-4 justify-content-center text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={handleShow}
            className="mt-3"
          >
            Ver Información Importante y Calendario SAE
          </Button>
        </Container>
      )}

      <Modal show={modalShow} onHide={handleModalClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Beca Vulnerabilidad año 2026</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-4">
            <h5 className="fw-bold mb-3">Estimados Padres y Apoderados:</h5>
            <p className="mb-3">
              Junto con saludarles, con fecha Martes 09 de Septiembre se informa
              del inicio del Proceso de postulación a la Beca Vulnerabilidad año
              2026, para lo cual se solicita revisar detalladamente los
              siguientes puntos:
            </p>
            <ListGroup>
              <ListGroup.Item>
                <strong>1.-</strong> Circular Proceso de Postulación
                vulnerabilidad 2026: Indica características del Establecimiento,
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
                <strong>3.-</strong> Formulario de postulación a Beca
                Vulnerabilidad: Descargar formulario y completarlo con letra
                legible, para luego ser enviado junto a la documentación de
                respaldo al correo electrónico indicado en la circular.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>4.-</strong> Documentación Obligatoria a Presentar 2026.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>5.-</strong> Declaración de Gastos Mensuales 2026 (sólo
                para trabajadores ocasionales o independientes).
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>6.-</strong> Archivos necesarios para realizar
                postulación.
              </ListGroup.Item>
            </ListGroup>

            {/* Botones de descarga de documentos */}
            <div className="mt-4">
              <h6 className="fw-bold mb-3">Documentos para descargar:</h6>
              <div className="row g-2">
                <div className="col-12 col-md-6">
                  <a
                    href="/docs/becas/circular.pdf"
                    download="Circular_Proceso_Postulacion_Vulnerabilidad_2026.pdf"
                    className="btn btn-outline-primary w-100"
                  >
                    <i className="bi bi-file-earmark-pdf me-2"></i>
                    Circular Proceso Postulación
                  </a>
                </div>
                <div className="col-12 col-md-6">
                  <a
                    href="/docs/becas/formulario.pdf"
                    download="Formulario_Postulacion_Beca_Vulnerabilidad_2026.pdf"
                    className="btn btn-outline-success w-100"
                  >
                    <i className="bi bi-file-earmark-pdf me-2"></i>
                    Formulario de Postulación
                  </a>
                </div>
                <div className="col-12 col-md-6">
                  <a
                    href="/docs/becas/documentacion.pdf"
                    download="Documentacion_Obligatoria_Presentar_2026.pdf"
                    className="btn btn-outline-warning w-100"
                  >
                    <i className="bi bi-file-earmark-pdf me-2"></i>
                    Documentación Obligatoria
                  </a>
                </div>
                <div className="col-12 col-md-6">
                  <a
                    href="/docs/becas/declaracion.pdf"
                    download="Declaracion_Gastos_Mensuales_2026.pdf"
                    className="btn btn-outline-info w-100"
                  >
                    <i className="bi bi-file-earmark-pdf me-2"></i>
                    Declaración de Gastos
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <p className="fw-bold">
                Dudas y consultas se responderán hasta el 16 de Septiembre,
                dirigirlas al mail:
                postulacionvulnerabilidad2026@liceoexperimental.cl
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
