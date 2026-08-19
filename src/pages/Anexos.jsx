import { Table } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { anexos } from "../data/anexos";

const Anexos = () => {
  return (
    <div className="container contenedor px-5 py-4">
      <div className="mb-4">
        <h2 className="d-flex align-items-center gap-2 mb-2">
          <FaPhoneAlt className="text-primary" />
          Anexos telefónicos
        </h2>
        <p className="text-muted mb-0">
          Listado de anexos internos del Liceo Experimental Umag.
        </p>
      </div>

      <div className="table-responsive">
        <Table striped bordered hover className="align-middle mb-0">
          <thead className="table-primary">
            <tr>
              <th scope="col" style={{ width: "120px" }}>
                Anexo
              </th>
              <th scope="col">Lugar</th>
            </tr>
          </thead>
          <tbody>
            {anexos.map(({ numero, lugar }) => (
              <tr key={numero}>
                <td className="fw-semibold">{numero}</td>
                <td>{lugar}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Anexos;
