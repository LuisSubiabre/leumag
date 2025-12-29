// NotFound.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container contenedor px-5">
      <div className="text-center">
        <img
          src="/images/404.png"
          alt="404 - No encontrado"
          className="mb-4"
          style={{ maxWidth: "300px", width: "100%" }}
        />
        <h3 className="d-flex justify-content-center align-items-center gap-2 mb-4">
          <span className="display-1 fw-bold">4</span>

          <FontAwesomeIcon icon={faCircleExclamation} className="display-4" />
          <span className="display-1 fw-bold bsb-flip-h">4</span>
        </h3>
        <h3 className="h2 mb-2">Oops!</h3>
        <p className="mb-5">La página que buscas no fue encontrada.</p>
        <Link
          className="btn bsb-btn-5xl btn-dark rounded-pill px-5 fs-6 m-0"
          to="/"
          role="button"
        >
          Regresar al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
