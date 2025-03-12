import { Badge, Card } from "react-bootstrap";

const Evaluaciones = () => {
  return (
    <div className="container contenedor px-5">
      <h2>Calendario de Evaluaciones</h2>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <a
            href="https://docs.google.com/spreadsheets/d/1ZbUUI61Obwioj0ikvuBi8Vac-QmJDigO8bK3YTrXz7s/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
          >
            <Card border="primary" className="mb-4 btnCard">
              <Card.Header>
                Evaluaciones E.G.B{" "}
                <small className="pl-4">
                  <Badge>Actualizado 1er Semestre</Badge>
                </small>
              </Card.Header>
              <Card.Body>
                <Card.Title>1er Ciclo Basico</Card.Title>
                <Card.Text>Ver evaluaciones</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div className="col-md-4">
          <a
            href="https://docs.google.com/spreadsheets/d/1_0S2O8YUCpCVw08sli3f6VD4bw3tCUjgWgGTlaKMj04/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
          >
            <Card border="primary" className="mb-4 btnCard">
              <Card.Header>
                Evaluaciones E.G.B.{" "}
                <small className="pl-4">
                  <Badge>Actualizado 1er Semestre</Badge>
                </small>
              </Card.Header>
              <Card.Body>
                <Card.Title>2do Ciclo Básico</Card.Title>
                <Card.Text>Ver evaluaciones</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        <div className="col-md-4">
          <a
            href="https://docs.google.com/spreadsheets/d/1UoHZpqW_kjqIQw1_rax25rL2FKRUBlcMnC-Bp-exs44/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
          >
            <Card border="primary" className="mb-4 btnCard">
              <Card.Header>
                Evaluaciones E.M.{" "}
                <small className="pl-4">
                  <Badge>Actualizado 1er Semestre</Badge>
                </small>
              </Card.Header>
              <Card.Body>
                <Card.Title>Enseñanza Media</Card.Title>
                <Card.Text>Ver evaluaciones</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Evaluaciones;
