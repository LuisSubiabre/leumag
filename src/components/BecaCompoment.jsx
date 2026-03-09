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
            <p>Estimados Padres y Apoderados:</p>

            <p>
              Junto con saludarles, con fecha{" "}
              <strong>Martes 09 de Septiembre</strong> se informa del inicio del{" "}
              <strong>
                Proceso de Postulación a la Beca Vulnerabilidad año 2026
              </strong>
              ,<strong>solo para alumnos nuevos</strong>.
            </p>

            <p>
              Para lo anterior, se solicita revisar detalladamente los
              siguientes puntos:
            </p>

            <ol>
              <li>
                <strong>
                  Circular Proceso de Postulación Vulnerabilidad 2026:
                </strong>
                Indica características del establecimiento, normativas legales y
                procedimientos de postulación. Se solicita leer detenidamente
                estas normativas y respetarlas íntegramente, ya que cualquier
                falta u omisión contenida en estas indicaciones no permitirá la
                continuidad en el proceso.
              </li>

              <li>
                <strong>Reglamento de Becas año 2025:</strong>
                Este reglamento norma los tipos de becas institucionales, la
                vigencia de estas y los requisitos de postulación.
                <em>(Revisar página web del establecimiento educacional).</em>
              </li>

              <li>
                <strong>
                  Formulario de Postulación a Beca Vulnerabilidad:
                </strong>
                Descargar el formulario y completarlo con letra legible, para
                luego enviarlo junto a la documentación de respaldo al correo
                electrónico indicado en la circular.
              </li>

              <li>
                <strong>Documentación obligatoria a presentar 2026.</strong>
              </li>

              <li>
                <strong>Declaración de gastos mensuales 2026</strong>
                (solo para trabajadores ocasionales o independientes).
              </li>

              <li>
                <strong>
                  Archivos necesarios para realizar la postulación.
                </strong>
              </li>
            </ol>
            <ListGroup>
              <ListGroup.Item>
                <a
                  href="https://drive.google.com/drive/folders/1T31L_X6vNlDIF7rQ0F4IyXRm8nDhUkqj?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary w-100"
                >
                  <i className="bi bi-folder me-2"></i>
                  Acceder a Carpeta Compartida
                </a>
              </ListGroup.Item>
            </ListGroup>
            {/* <ListGroup>
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
                  Documentación Obligatoria a Presentar 2026.
                </span>{" "}
                <span className="text-muted">(plazo expirado)</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>5.-</strong>{" "}
                <span className="text-decoration-line-through">
                  Declaración de Gastos Mensuales 2026 (sólo para trabajadores
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
            </ListGroup> */}

            {/* Botones de descarga de documentos */}
            {/* <div className="mt-4">
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
                    href="https://docs.google.com/document/u/2/d/1m7WZ1CmMgsM2u34fZSoePobwyexFi52M/pub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary w-100"
                  >
                    <i className="bi bi-file-earmark-text me-2"></i>
                    Reglamento Becas 2025
                  </a>
                </div>
              </div>
            </div> */}

            <div className="mt-3">
              <p className="fw-bold">
                Dudas y consultas a:
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
