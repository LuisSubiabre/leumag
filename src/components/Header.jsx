import { ButtonAccess } from "./ButtonAccess";
import logoImage from "../assets/img/experimentalin.png";
import { Image, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
// import ComponentSae from "./sae";
import BecaComponent from "./BecaCompoment";
import "./Header.css";

const heroImageModules = import.meta.glob("../assets/img/hero/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const heroImages = Object.keys(heroImageModules)
  .sort()
  .map((path) => heroImageModules[path]);

const HERO_INTERVAL_MS = 6000;

export const Header = () => {
  const [showBecaModal, setShowBecaModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return;

    const prefiereMenosMovimiento = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefiereMenosMovimiento) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, HERO_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  // const handleBecaClick = () => {
  //   setShowBecaModal(true);
  // };

  return (
    <>
      <div className="d-flex flex-column">
        <div className="hero text-center">
          <div className="hero-banner">
            <div className="hero-backgrounds" aria-hidden="true">
              {heroImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt=""
                  className={`hero-background${
                    index === currentImageIndex ? " hero-background--active" : ""
                  }`}
                />
              ))}
            </div>
            <div className="hero-overlay" aria-hidden="true" />
            <div className="hero-content">
              <div className="text-white hero-title">
                <div className="animate-bounce-slow">
                  <Image
                    src={logoImage}
                    alt="Logo Liceo Experimental Umag"
                    width="160"
                    height="160"
                    className="img-fluid"
                  />
                </div>
                <h1 className="mb-2 fs-2 fs-md-1">Liceo Experimental Umag</h1>
                <h4 className="mb-0 fs-6 fs-md-4">
                  La verdad a través de la razón
                </h4>
              </div>
            </div>
          </div>
          <Container className="hero-actions">
            <Row className="justify-content-center">
              <Col
                xs={12}
                md="auto"
                className="d-flex flex-column flex-md-row justify-content-center align-items-stretch gap-2"
              >
                <ButtonAccess
                  name={"Matrícula 2026"}
                  link={"/matricula"}
                  variant={"primary"}
                  animate={false}
                />
                <ButtonAccess
                  name={"Calendario de Evaluaciones"}
                  variant={"primary"}
                  link={"/Evaluaciones"}
                  animate={false}
                ></ButtonAccess>
                <ButtonAccess
                  name={"Calendario Oficial"}
                  variant={"warning"}
                  //onClick={handleBecaClick}
                  link={"/CalendarioOficial"}
                  animate={true}
                />
                <ButtonAccess
                  name={"Horarios 2026"}
                  link={"/Horarios"}
                  variant={"primary"}
                />
                {/* <ButtonAccess
                  name={"Horarios"}
                  link={"/Horarios"}
                  variant={"primary"}
                />
                <ButtonAccess
                  name={"Evaluaciones"}
                  link={"/Evaluaciones"}
                  variant={"primary"}
                /> */}
                <ButtonAccess
                  name={"Lista de Materiales 2026"}
                  link={"/Materiales"}
                  variant={"primary"}
                  animate={false}
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
