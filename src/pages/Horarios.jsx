import { Card } from "react-bootstrap";

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
            <Card border="primary" className="mb-4 btnCard">
              <Card.Header>Horario E.G.B.</Card.Header>
              <Card.Body>
                <Card.Title>Horario Enseñanza Básica</Card.Title>
                <Card.Text>Ver horario</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
        {/* <div className="col-md-4">
          <a
            href="https://docs.google.com/spreadsheets/d/1Xd3OOQxeUJFRraxwiu_vkVBDycjZpICS3ttpl1k0kkU/edit?gid=0#gid=0"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underlinelink-offset-2 link-underline link-underline-opacity-0"
          >
            <Card border="primary" className="mb-4 btnCard">
              <Card.Header>Horario E.M.</Card.Header>
              <Card.Body>
                <Card.Title>Horario Enseñanza Media</Card.Title>
                <Card.Text>Ver horario</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div> */}
      </div>
      {/* Horarios 2025 proximamente. */}
    </div>
  );
};

export default Horarios;
