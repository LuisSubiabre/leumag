import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import logoImage from "../assets/img/logo.png";
import { Link, NavLink } from "react-router-dom";
import RedesSociales from "./RedesSociales";
import { Button } from "react-bootstrap";

const NavbarTop = () => {
  // Cargar el tema guardado en localStorage o usar el tema claro por defecto
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  const handleThemeChange = (theme) => {
    const isDark = theme === "oscuro";
    setIsDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light"); // Guardar en localStorage
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <img
          src={logoImage}
          width="30"
          height="24"
          className="d-inline-block align-text-top"
          alt="Logo Liceo Experimental Umag"
        />
        <Link className="navbar-brand" to={"/"}>
          Liceo Experimental Umag
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/"}>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/Nosotros"}>
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/Estamentos"}>
                Estamentos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/Comunicados"}>
                Comunicados
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/CentroDePadres"}>
                Centro de Padres
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/CentroDeAlumnos"}>
                Centro de Alumnos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/Contacto"}>
                Contacto
              </NavLink>
            </li>
          </ul>
          <RedesSociales colorRSS="gray" />
        </div>

        <div className="form-check form-switch mx-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="themeSwitch"
            checked={isDarkMode}
            onChange={() => handleThemeChange(isDarkMode ? "claro" : "oscuro")}
          />
          <label className="form-check-label" htmlFor="themeSwitch">
            <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
          </label>
        </div>

        <div className="text-end"></div>
        {/* <Button variant="primary" className='mx-2' onClick={() => window.open('http://latium.cl/leumag/ph/funcionario/', '_blank')}>Funcionario</Button>*/}
        <Button
          variant="primary"
          className="mx-2"
          onClick={() =>
            window.open("https://estudiante.liceoexperimental.cl/")
          }
        >
          Estudiante
        </Button>
      </div>
    </nav>
  );
};

export default NavbarTop;
