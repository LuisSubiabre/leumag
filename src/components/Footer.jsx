import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faExternalLinkAlt,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import RedesSociales from "./RedesSociales";
import { emails } from "../emails";
import logoImage from "../assets/img/logo.png";
import "./Footer.css";

const CUENTA_PUBLICA_HREF =
  "https://docs.google.com/presentation/d/1yllKGEZgYuAyNWH4LwhsMO2VjFjmp_S2/edit?usp=drive_link&ouid=113785725979968228794&rtpof=true&sd=true";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Link to="/" className="site-footer__logo">
            <img src={logoImage} alt="" width="56" height="56" />
            <span>
              <strong>Liceo Experimental UMAG</strong>
              <small>La verdad, a través de la razón</small>
            </span>
          </Link>
          <p className="site-footer__lead">
            Formación humana y académica para niñas, niños y jóvenes de
            Magallanes.
          </p>
          <RedesSociales variant="footer" />
        </div>

        <nav className="site-footer__nav" aria-label="Enlaces del pie de página">
          <div>
            <h2>Institución</h2>
            <ul>
              <li>
                <Link to="/Nosotros">Nosotros</Link>
              </li>
              <li>
                <Link to="/Estamentos">Equipo</Link>
              </li>
              <li>
                <Link to="/Documentos">Documentos</Link>
              </li>
              <li>
                <a
                  href={CUENTA_PUBLICA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cuenta Pública
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2>Académico</h2>
            <ul>
              <li>
                <Link to="/Horarios">Horarios</Link>
              </li>
              <li>
                <Link to="/Evaluaciones">Evaluaciones</Link>
              </li>
              <li>
                <Link to="/CalendarioOficial">Calendario</Link>
              </li>
              <li>
                <Link to="/Materiales">Materiales</Link>
              </li>
              <li>
                <Link to="/matricula">Matrícula</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2>Comunidad</h2>
            <ul>
              <li>
                <Link to="/Comunicados">Comunicados</Link>
              </li>
              <li>
                <Link to="/CentroDeAlumnos">Centro de Estudiantes</Link>
              </li>
              <li>
                <Link to="/CentroDePadres">Centro de Padres</Link>
              </li>
              <li>
                <Link to="/Acle">ACLE / Talleres</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="site-footer__contact">
          <h2>Contacto</h2>
          <address>
            <p className="site-footer__place">Establecimiento</p>
            <p>
              <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />
              Angamos 17, Punta Arenas
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
              <a href={`mailto:${emails.contacto}`}>{emails.contacto}</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
              <a href="tel:+56612454270">61 2454270</a>
            </p>
          </address>
          <address>
            <p className="site-footer__place">Administración</p>
            <p>
              <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />
              Angamos 131, Punta Arenas
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
              <a href={`mailto:${emails.administracion}`}>
                {emails.administracion}
              </a>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
              <a href="tel:+56612240075">61 2240075</a>
            </p>
          </address>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>
          © {year} Liceo Experimental UMAG · Punta Arenas, Chile
        </p>
        <Link to="/Contacto">Ir a Contacto</Link>
      </div>
    </footer>
  );
};

export default Footer;
