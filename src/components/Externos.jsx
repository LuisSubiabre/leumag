import linkUmag from "../assets/img/boton_umag.jpg";
import linkAdmision from "../assets/img/boton_admision.jpg";
import linkNutri from "../assets/img/btn_nutricion.png";
import linkInfoCRA from "../assets/img/boton_cra.png";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Externos = () => {
  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col xs={12} className="text-center mb-3">
          <h3 className="fw-bold">Enlaces Importantes</h3>
          <p className="text-muted">
            Accede rápidamente a nuestros recursos y sitios relacionados
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} className="d-flex flex-wrap justify-content-center gap-3">
          <a
            href="https://www.umag.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="enlace-externo"
          >
            <img
              src={linkUmag}
              alt="UMAG"
              className="img-fluid"
              style={{ maxHeight: "80px" }}
            />
          </a>
          <a
            href="https://www.sistemadeadmisionescolar.cl/"
            target="_blank"
            rel="noopener noreferrer"
            className="enlace-externo"
          >
            <img
              src={linkAdmision}
              alt="Admision"
              className="img-fluid"
              style={{ maxHeight: "80px" }}
            />
          </a>
          <a
            href="https://sites.google.com/liceoexperimental.cl/proyectonutricionydietetica?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="enlace-externo"
          >
            <img
              src={linkNutri}
              alt="Proyecto Nutrición Umag"
              className="img-fluid"
              style={{ maxHeight: "80px" }}
            />
          </a>
          <Link
            to="/InfoCra"
            rel="noopener noreferrer"
            className="enlace-externo"
          >
            <img
              src={linkInfoCRA}
              alt="Info CRA"
              className="img-fluid"
              style={{ maxHeight: "80px" }}
            />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Externos;
