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
            href="https://docs.google.com/spreadsheets/d/1JfIpBIkpQhXf-9wEfPkVXdien5K8vydHKaj8n4G4S_o/edit?usp=sharing"
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
                  <Badge className="bg-primary">2do Semestre 2026</Badge>
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
            href="https://docs.google.com/spreadsheets/d/1k3Lj8klfjBGrbrx16Ni23PintiSM5-k8tVaEH3Ijzwk/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
            //className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
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
                  <Badge className="bg-primary">2do Semestre 2026</Badge>
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
            href="https://docs.google.com/spreadsheets/d/1ig-z1DS-Vo5xBLyPTT7s6HnlW5t9JLxN-PxHb9aAHmo/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
          >
            <Card
              border="primary"
              className="mb-4 btnCard"
              // className="text-muted mb-4 btnCard opacity-50"
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
                  <Badge>2do Semestre</Badge>
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
