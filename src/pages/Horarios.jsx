import { Card } from "react-bootstrap";
import { FaClock } from "react-icons/fa";

const Horarios = () => {
  return (
    <div className="container contenedor px-5">
      <h2> Horarios</h2>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <a
            href="https://docs.google.com/spreadsheets/d/1fUwU7cMuxsQGhjg6mysj6W8YoKv_mycZA1QlpYSmbZ4/edit?gid=1663824483#gid=1663824483"
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
              <Card.Header className="d-flex align-items-center">
                <FaClock className="text-primary me-2" size={18} />
                <span>Horario E.G.B.</span>
              </Card.Header>
              <Card.Body>
                <Card.Title>Horario Enseñanza Básica</Card.Title>
                <Card.Text className="d-flex align-items-center">
                  <FaClock className="text-danger me-2" size={16} /> Ver horario
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div className="col-md-4">
          <a
            href="https://docs.google.com/spreadsheets/d/1Xd3OOQxeUJFRraxwiu_vkVBDycjZpICS3ttpl1k0kkU/edit?gid=0#gid=0"
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
              <Card.Header className="d-flex align-items-center">
                <FaClock className="text-primary me-2" size={18} />
                <span>Horario E.M.</span>
              </Card.Header>
              <Card.Body>
                <Card.Title>Horario Enseñanza Media</Card.Title>
                <Card.Text className="d-flex align-items-center">
                  <FaClock className="text-danger me-2" size={16} /> Ver horario
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
      </div>
      {/* Horarios 2025 proximamente. */}
    </div>
  );
};

export default Horarios;
