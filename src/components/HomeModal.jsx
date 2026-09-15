import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

function HomeModal({ show, onHide, title, image, youtubeId }) {
  const youtubeSrc = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`
    : null;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="home-modal__body">
          {youtubeSrc ? (
            <div className="home-modal__video">
              <iframe
                src={youtubeSrc}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            <img src={image} alt={title} className="home-modal__image" />
          )}
        </div>
        {youtubeId ? (
          <p className="home-modal__watch-link mb-0 mt-3 text-center">
            <a
              href={`https://www.youtube.com/watch?v=${youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en YouTube
            </a>
          </p>
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

HomeModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  youtubeId: PropTypes.string,
};

export default HomeModal;
