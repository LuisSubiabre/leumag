import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import logoImage from "../assets/img/logo.png";
import { Link, NavLink } from "react-router-dom";
import RedesSociales from "./RedesSociales";
import { Button } from "react-bootstrap";
import "./NavbarTop.css";

const NavbarTop = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  const handleThemeChange = (isDark) => {
    setIsDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top ${
        isDarkMode ? "navbar-dark" : "navbar-light"
      }`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to={"/"}>
          <img
            src={logoImage}
            width="40"
            height="30"
            className="me-2"
            alt="Logo Liceo Experimental Umag"
          />
          <span>Liceo Experimental Umag</span>
        </Link>

        <div className="d-flex align-items-center order-lg-last">
          <RedesSociales colorRSS="gray" className="d-none d-lg-flex me-3" />

          <div className="theme-switch-wrapper">
            <div className="theme-switch">
              <FontAwesomeIcon
                icon={faSun}
                className={`theme-icon ${!isDarkMode ? "active" : ""}`}
                onClick={() => handleThemeChange(false)}
                role="button"
              />
              <div className="switch-track">
                <input
                  type="checkbox"
                  id="themeSwitch"
                  checked={isDarkMode}
                  onChange={() => handleThemeChange(!isDarkMode)}
                />
                <span className="switch-thumb"></span>
              </div>
              <FontAwesomeIcon
                icon={faMoon}
                className={`theme-icon ${isDarkMode ? "active" : ""}`}
                onClick={() => handleThemeChange(true)}
                role="button"
              />
            </div>
          </div>

          <Button
            variant="primary"
            className="student-portal-btn d-none d-lg-block ms-3"
            onClick={() =>
              window.open("https://estudiante.liceoexperimental.cl/")
            }
          >
            Portal Estudiante
          </Button>

          <button
            className="navbar-toggler ms-2"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="navbarSupportedContent"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/"}>
                Inicio
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                onMouseEnter={() => setActiveDropdown("institucion")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Institución
              </a>
              <div
                className={`dropdown-menu ${
                  activeDropdown === "institucion" ? "show" : ""
                }`}
                onMouseEnter={() => setActiveDropdown("institucion")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink className="dropdown-item" to="/Nosotros">
                  Nosotros
                </NavLink>
                <NavLink className="dropdown-item" to="/Estamentos">
                  Estamentos
                </NavLink>
              </div>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to={"/Comunicados"}>
                Comunicados
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                onMouseEnter={() => setActiveDropdown("comunidad")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Comunidad
              </a>
              <div
                className={`dropdown-menu ${
                  activeDropdown === "comunidad" ? "show" : ""
                }`}
                onMouseEnter={() => setActiveDropdown("comunidad")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink className="dropdown-item" to="/CentroDePadres">
                  Centro de Padres
                </NavLink>
                <NavLink className="dropdown-item" to="/CentroDeAlumnos">
                  Centro de Alumnos
                </NavLink>
              </div>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to={"/Contacto"}>
                Contacto
              </NavLink>
            </li>
          </ul>

          <div className="d-lg-none mobile-bottom-actions">
            <Button
              variant="primary"
              className="student-portal-btn w-100 mb-3"
              onClick={() =>
                window.open("https://estudiante.liceoexperimental.cl/")
              }
            >
              Portal Estudiante
            </Button>
            <RedesSociales colorRSS="gray" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTop;
