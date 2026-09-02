import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faChevronDown,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import logoImage from "../assets/img/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import RedesSociales from "./RedesSociales";
import "./NavbarTop.css";

const NAV_ITEMS = [
  { type: "link", label: "Inicio", to: "/" },
  {
    type: "dropdown",
    id: "institucion",
    label: "Institución",
    items: [
      { label: "Nosotros", to: "/Nosotros" },
      { label: "Estamentos", to: "/Estamentos" },
      { label: "Beca Vulnerabilidad 2027", to: "/BecaVulnerabilidad" },
    ],
  },
  { type: "link", label: "Comunicados", to: "/Comunicados" },
  {
    type: "dropdown",
    id: "comunidad",
    label: "Comunidad",
    items: [
      { label: "Centro de Padres", to: "/CentroDePadres" },
      { label: "Centro de Alumnos", to: "/CentroDeAlumnos" },
    ],
  },
  { type: "link", label: "Contacto", to: "/Contacto" },
];

const PORTALS = [
  {
    label: "Kimche Familia",
    href: "https://www.kimche.co/kimche-familia-ingreso-apoderados/",
    primary: true,
  },
  {
    label: "Portal Estudiante",
    href: "https://estudiante.liceoexperimental.cl/",
    primary: false,
  },
];

const NavbarTop = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      isDarkMode ? "dark" : "light",
    );
  }, [isDarkMode]);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleThemeChange = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const toggleDropdown = (id) => {
    setActiveDropdown((current) => (current === id ? null : id));
  };

  const isDropdownActive = (items) =>
    items.some((item) => location.pathname === item.to);

  const openPortal = (href) => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <nav
      ref={navRef}
      className={`navbar navbar-expand-lg sticky-top site-navbar ${
        isDarkMode ? "navbar-dark" : "navbar-light"
      }`}
      aria-label="Navegación principal"
    >
      <div className="container-fluid site-navbar__inner">
        <Link className="navbar-brand site-navbar__brand" to="/">
          <img
            src={logoImage}
            width="40"
            height="30"
            className="site-navbar__logo"
            alt=""
          />
          <span className="site-navbar__brand-text">
            <span className="d-none d-sm-inline">Liceo Experimental Umag</span>
            <span className="d-sm-none">LEUMAG</span>
          </span>
        </Link>

        <div className="site-navbar__toolbar">
          <RedesSociales variant="navbar" className="site-navbar__socials" />

          <button
            type="button"
            className="theme-toggle"
            onClick={handleThemeChange}
            aria-label={
              isDarkMode ? "Activar modo claro" : "Activar modo oscuro"
            }
            title={isDarkMode ? "Modo claro" : "Modo oscuro"}
          >
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>

          <div className="site-navbar__portals d-none d-lg-flex">
            {PORTALS.map((portal) => (
              <button
                key={portal.label}
                type="button"
                className={`portal-btn ${
                  portal.primary
                    ? "portal-btn--primary"
                    : "portal-btn--secondary"
                }`}
                onClick={() => openPortal(portal.href)}
              >
                {portal.label}
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className="portal-btn__icon"
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>

          <button
            className="navbar-toggler site-navbar__toggler"
            type="button"
            onClick={() => {
              setIsMenuOpen((open) => !open);
              setActiveDropdown(null);
            }}
            aria-controls="navbarSupportedContent"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className={`collapse navbar-collapse site-navbar__collapse ${
            isMenuOpen ? "show" : ""
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav site-navbar__links">
            {NAV_ITEMS.map((item) => {
              if (item.type === "link") {
                return (
                  <li className="nav-item" key={item.to}>
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link${isActive ? " active" : ""}`
                      }
                      to={item.to}
                      end={item.to === "/"}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                );
              }

              const open = activeDropdown === item.id;
              const sectionActive = isDropdownActive(item.items);

              return (
                <li
                  className={`nav-item dropdown${open ? " show" : ""}`}
                  key={item.id}
                  onMouseEnter={() => {
                    if (window.matchMedia("(min-width: 992px)").matches) {
                      if (closeTimeoutRef.current) {
                        clearTimeout(closeTimeoutRef.current);
                        closeTimeoutRef.current = null;
                      }
                      setActiveDropdown(item.id);
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.matchMedia("(min-width: 992px)").matches) {
                      closeTimeoutRef.current = setTimeout(() => {
                        setActiveDropdown(null);
                      }, 120);
                    }
                  }}
                >
                  <button
                    type="button"
                    className={`nav-link dropdown-toggle${
                      sectionActive ? " active" : ""
                    }`}
                    aria-expanded={open}
                    aria-haspopup="true"
                    onClick={() => toggleDropdown(item.id)}
                  >
                    {item.label}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`dropdown-caret${open ? " dropdown-caret--open" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    className={`dropdown-menu${open ? " show" : ""}`}
                    role="menu"
                  >
                    {item.items.map((subItem) => (
                      <NavLink
                        key={subItem.to}
                        className={({ isActive }) =>
                          `dropdown-item${isActive ? " active" : ""}`
                        }
                        to={subItem.to}
                        role="menuitem"
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="d-lg-none mobile-menu-footer">
            <div className="mobile-portals">
              {PORTALS.map((portal) => (
                <button
                  key={portal.label}
                  type="button"
                  className={`portal-btn w-100 ${
                    portal.primary
                      ? "portal-btn--primary"
                      : "portal-btn--secondary"
                  }`}
                  onClick={() => openPortal(portal.href)}
                >
                  {portal.label}
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="portal-btn__icon"
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTop;
