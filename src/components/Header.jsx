import { ButtonAccess } from "./ButtonAccess";
import logoImage from "../assets/img/experimentalin.png";
import { Image, Container } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import BecaComponent from "./BecaCompoment";
import { HeroParticles } from "./HeroScene3D";
import { useHeroTilt } from "./useHeroTilt";
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

// Hero experimental con profundidad 3D (paralaje + partículas). Solo en el home.
const HERO_3D = true;

export const Header = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const is3D = isHome && HERO_3D;
  // En páginas internas el banner es una franja baja: cada página ya tiene
  // su propio encabezado, y el título principal (h1) es el de la página.
  const TituloSitio = isHome ? "h1" : "p";
  const bannerRef = useRef(null);
  useHeroTilt(bannerRef, is3D);
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
      <div className={`hero text-center${isHome ? " hero--home" : " hero--compact"}`}>
        <div
          ref={bannerRef}
          className={`hero-banner${isHome ? " hero-banner--home" : ""}${
            is3D ? " hero-banner--3d" : ""
          }`}
        >
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
          {is3D && (
            <>
              <HeroParticles />
              <div className="hero-spotlight" aria-hidden="true" />
            </>
          )}
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
              <TituloSitio className="hero-site-name mb-2 fs-2 fs-md-1">
                Liceo Experimental Umag
              </TituloSitio>
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
