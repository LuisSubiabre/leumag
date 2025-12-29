import { Container, Button, Modal, ListGroup } from "react-bootstrap";
import { useState } from "react";
import PropTypes from "prop-types";

const ComponentSae = ({ show, onHide }) => {
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
          <h3 className="fw-bold">Sistema de Admisión Escolar</h3>

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
          <Modal.Title>
            Información Importante - Sistema de Admisión Escolar
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="alert alert-info mb-4" role="alert">
            <div className="d-flex align-items-center">
              <i className="bi bi-info-circle me-2 fs-5"></i>
              <div>
                <strong>Información:</strong> Esta información es proporcionada
                por el
                <strong> Sistema de Admisión Escolar (SAE)</strong> del
                Ministerio de Educación, no por este establecimiento educativo.
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h5 className="fw-bold mb-3">
              Algunas consideraciones importantes:
            </h5>
            <ListGroup>
              <ListGroup.Item>
                <strong>1.</strong> Si un apoderado postula y es asignado pierde
                su cupo en el establecimiento de origen, independiente si acepta
                o rechaza la asignación.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>2.</strong> Tendremos punto de apoyo para la atención en
                Mineduc a partir del día 05 de agosto de 2025, a las 08:30 en el
                primer piso de la SEREMI de Educación, Ignacio Carrera Pinto N°
                1259.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>3.</strong> Aquellos apoderados extranjeros que
                matricularon con IPA, obtuvieron RUN con posterioridad, se
                recomienda postular con RUN. Ante el evento que no se encuentre
                vinculado con alumno puede solicitar la vinculación a través de
                la página o presencialmente con los documentos requeridos (RUN,
                certificado o partida de nacimiento).
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>4.</strong> No afecta la asignación o selección la fecha
                y hora en que se haga la postulación, sólo debe realizar la
                postulación en las fechas indicadas ya que posteriormente la
                página no se encontrará habilitada para postular.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>5.</strong> El horario de atención entre el 05 y 27 de
                agosto para SAE será entre las 08:30 y 13:30 en las mañanas, y
                en jornada de tarde entre 14:30 y 16:00, de lunes a viernes. El
                día 28 de agosto, horario continuo hasta las 15:00 horas,
                Magallanes.
              </ListGroup.Item>
            </ListGroup>
          </div>

          <div className="mt-4">
            <h5 className="fw-bold mb-3">Calendario SAE 2025</h5>

            {/* Botón de descarga prominente para móviles */}
            <div className="d-md-none mb-3">
              <a
                href="/docs/CalendarioSAE.pdf"
                download="CalendarioSAE2025.pdf"
                className="btn btn-success btn-lg w-100"
              >
                <i className="bi bi-download me-2"></i>
                Descargar Calendario SAE 2025
              </a>
            </div>

            {/* Visualizador solo en desktop */}
            <div className="d-none d-md-block">
              <div className="ratio ratio-16x9">
                <iframe
                  src="/docs/CalendarioSAE.pdf"
                  title="Calendario SAE 2025"
                  className="border rounded"
                  style={{ minHeight: "500px" }}
                ></iframe>
              </div>
            </div>

            {/* Espacio para móviles donde no se muestra el iframe */}
            <div
              className="d-md-none"
              style={{ height: "0", overflow: "hidden" }}
            >
              <iframe
                src="/docs/CalendarioSAE.pdf"
                title="Calendario SAE 2025"
                style={{ display: "none" }}
              ></iframe>
            </div>

            {/* Botones adicionales */}
            <div className="text-center mt-2 d-flex gap-2 justify-content-center flex-wrap">
              <a
                href="/docs/CalendarioSAE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                <i className="bi bi-eye me-1"></i>
                Abrir PDF en nueva ventana
              </a>
              <a
                href="/docs/CalendarioSAE.pdf"
                download="CalendarioSAE2025.pdf"
                className="btn btn-success d-none d-md-inline-block"
              >
                <i className="bi bi-download me-1"></i>
                Descargar PDF
              </a>
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

ComponentSae.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
};

export default ComponentSae;
