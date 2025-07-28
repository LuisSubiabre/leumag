import { Badge, Card } from "react-bootstrap";
import { FaClipboardCheck } from "react-icons/fa";

const Evaluaciones = () => {
  return (
    <div className="container contenedor px-5">
      <h2>Calendario de Evaluaciones</h2>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <a
            href="https://docs.google.com/spreadsheets/d/1byXNmAtssdVuFQFirrIAP33ClARLc_yiozi549Wjgms/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
          >
            <Card
              border="primary"
              className="mb-4 btnCard"
              style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(0, 123, 255, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <Card.Header className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <FaClipboardCheck className="text-primary me-2" size={18} />
                  <span>Evaluaciones E.G.B</span>
                </div>
                <small className="pl-4">
                  <Badge>Actualizado 2do Semestre</Badge>
                </small>
              </Card.Header>
              <Card.Body>
                <Card.Title>1er Ciclo Basico</Card.Title>
                <Card.Text className="d-flex align-items-center">
                  <FaClipboardCheck className="text-danger me-2" size={16} />{" "}
                  Ver evaluaciones
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div className="col-md-4">
          <a
            href="https://docs.google.com/spreadsheets/d/1RWaRdPXiKuZIesIf1N_HakmkcHSdlRXS9UKUzlq1hIE/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
          >
            <Card
              border="primary"
              className="mb-4 btnCard"
              style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(0, 123, 255, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <Card.Header className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <FaClipboardCheck className="text-primary me-2" size={18} />
                  <span>Evaluaciones E.G.B.</span>
                </div>
                <small className="pl-4">
                  <Badge>Actualizado 2do Semestre</Badge>
                </small>
              </Card.Header>
              <Card.Body>
                <Card.Title>2do Ciclo Básico</Card.Title>
                <Card.Text className="d-flex align-items-center">
                  <FaClipboardCheck className="text-danger me-2" size={16} />{" "}
                  Ver evaluaciones
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div className="col-md-4">
          <a
            href="https://docs.google.com/spreadsheets/d/1VDDlX1aqYOhG0snFYIiW_24BYfMW7uPOxaJlaSR8HQw/edit?gid=0#gid=0"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
          >
            <Card
              border="primary"
              className="mb-4 btnCard"
              style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(0, 123, 255, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <Card.Header className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <FaClipboardCheck className="text-primary me-2" size={18} />
                  <span>Evaluaciones E.M.</span>
                </div>
                <small className="pl-4">
                  <Badge>Actualizado 2do Semestre</Badge>
                </small>
              </Card.Header>
              <Card.Body>
                <Card.Title>Enseñanza Media</Card.Title>
                <Card.Text className="d-flex align-items-center">
                  <FaClipboardCheck className="text-danger me-2" size={16} />{" "}
                  Ver evaluaciones
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Evaluaciones;
