import bgImagen from "../assets/img/hero.png";
import { ButtonAccess } from "./ButtonAccess";
import logoImage from "../assets/img/experimentalin.png";
import { Image, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
// import ComponentSae from "./sae";
import BecaComponent from "./BecaCompoment";

export const Header = () => {
  const [showBecaModal, setShowBecaModal] = useState(false);

  const handleBecaClick = () => {
    setShowBecaModal(true);
  };

  return (
    <>
      <div className="d-flex flex-column">
        <div
          className="pt-5 text-center bg-image d-flex flex-column justify-content-between parallax-container"
          style={{
            backgroundImage: `url(${bgImagen})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "400px",
            height: "auto",
          }}
        >
          <div className="mask">
            {" "}
            {/* Agrega una máscara para oscurecer el fondo */}
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white" style={{ filter: "none" }}>
                <div className="animate-bounce-slow">
                  <Image
                    src={logoImage}
                    alt="Logo Liceo Experimental Umag"
                    width="160"
                    height="160"
                    className="img-fluid"
                  />
                </div>
                {/* Fondo opaco */}
                <h1 className="mb-3 fs-2 fs-md-1">Liceo Experimental Umag</h1>
                <h4 className="mb-3 fs-5 fs-md-4">
                  La verdad a través de la razón
                </h4>
                {/* <a data-mdb-ripple-init className="btn btn-outline-light btn-lg" href="#!" role="button">A</a> */}
              </div>
            </div>
          </div>
          <Container className="mb-4">
            <Row className="justify-content-center">
              <Col
                xs={12}
                md="auto"
                className="d-flex flex-column flex-md-row justify-content-center align-items-stretch gap-2"
              >
                {/* <ButtonAccess
                  name={"Matrícula 2025"}
                  link={"/matricula"}
                  variant={"warning"}
                /> */}
                <ButtonAccess
                  name={"Beca Vulnerabilidad 2026"}
                  variant={"warning"}
                  onClick={handleBecaClick}
                  animate={true}
                />
                <ButtonAccess
                  name={"Fechas Reuniones"}
                  link={"/Reuniones"}
                  variant={"primary"}
                />
                <ButtonAccess
                  name={"Horarios"}
                  link={"/Horarios"}
                  variant={"primary"}
                />
                <ButtonAccess
                  name={"Evaluaciones"}
                  link={"/Evaluaciones"}
                  variant={"primary"}
                />
                <ButtonAccess
                  name={"Lista de Materiales"}
                  link={"/Materiales"}
                  variant={"primary"}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="container py-4"></div>

      {/* Modal del SAE */}
      <BecaComponent
        show={showBecaModal}
        onHide={() => setShowBecaModal(false)}
      />
    </>
  );
};
