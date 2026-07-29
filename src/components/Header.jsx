import { ButtonAccess } from "./ButtonAccess";
import logoImage from "../assets/img/experimentalin.png";
import { Image, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import BecaComponent from "./BecaCompoment";
import "./Header.css";

const heroImageModules = import.meta.glob(
  "../assets/img/hero/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);

const heroImages = Object.keys(heroImageModules)
  .sort()
  .map((path) => heroImageModules[path]);

const HERO_INTERVAL_MS = 6000;

// Activa esto cuando necesites CTAs bajo el hero (ej. campaña de matrícula).
const SHOW_HERO_ACTIONS = false;

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

  return (
    <>
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
              <p className="mb-0 fs-6 fs-md-4 hero-tagline">
                La verdad a través de la razón
              </p>
            </div>
          </div>
        </div>

        {SHOW_HERO_ACTIONS && (
          <Container className="hero-actions">
            <div className="hero-actions__cta">
              <ButtonAccess
                name="Matrícula 2026"
                link="/Matricula"
                variant="primary"
                animate={false}
              />
              {/*
              <ButtonAccess
                name="Calendario de Evaluaciones"
                link="/Evaluaciones"
                variant="warning"
                animate={true}
              />
              <ButtonAccess
                name="Calendario Oficial"
                link="/CalendarioOficial"
                variant="primary"
              />
              <ButtonAccess name="Horarios 2026" link="/Horarios" variant="primary" />
              <ButtonAccess
                name="Lista de Materiales 2026"
                link="/Materiales"
                variant="primary"
              />
              */}
            </div>
          </Container>
        )}
      </div>

      <BecaComponent
        show={showBecaModal}
        onHide={() => setShowBecaModal(false)}
      />
    </>
  );
};
