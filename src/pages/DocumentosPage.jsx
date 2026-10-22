import { FaFileAlt } from "react-icons/fa";
import Documentos from "../components/Documentos";

const DocumentosPage = () => {
  return (
    <div className="container contenedor px-3 px-md-5 py-4">
      <div className="mb-4">
        <h1 className="d-flex align-items-center gap-2 mb-2 h2">
          <FaFileAlt className="text-primary" aria-hidden="true" />
          Documentos oficiales
        </h1>
        <p className="text-muted mb-0">
          Reglamentos, protocolos y documentos institucionales del Liceo
          Experimental Umag.
        </p>
      </div>

      <Documentos showHeading={false} grouped />
    </div>
  );
};

export default DocumentosPage;
